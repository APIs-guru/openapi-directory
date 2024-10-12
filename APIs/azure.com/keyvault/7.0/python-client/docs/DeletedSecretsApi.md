# openapi_client.DeletedSecretsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_deleted_secret**](DeletedSecretsApi.md#get_deleted_secret) | **GET** /deletedsecrets/{secret-name} | Gets the specified deleted secret.
[**get_deleted_secrets**](DeletedSecretsApi.md#get_deleted_secrets) | **GET** /deletedsecrets | Lists deleted secrets for the specified vault.
[**purge_deleted_secret**](DeletedSecretsApi.md#purge_deleted_secret) | **DELETE** /deletedsecrets/{secret-name} | Permanently deletes the specified secret.
[**recover_deleted_secret**](DeletedSecretsApi.md#recover_deleted_secret) | **POST** /deletedsecrets/{secret-name}/recover | Recovers the deleted secret to the latest version.


# **get_deleted_secret**
> DeletedSecretBundle get_deleted_secret(secret_name, api_version)

Gets the specified deleted secret.

The Get Deleted Secret operation returns the specified deleted secret along with its attributes. This operation requires the secrets/get permission.

### Example


```python
import openapi_client
from openapi_client.models.deleted_secret_bundle import DeletedSecretBundle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedSecretsApi(api_client)
    secret_name = 'secret_name_example' # str | The name of the secret.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Gets the specified deleted secret.
        api_response = api_instance.get_deleted_secret(secret_name, api_version)
        print("The response of DeletedSecretsApi->get_deleted_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedSecretsApi->get_deleted_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret_name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**DeletedSecretBundle**](DeletedSecretBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A secret bundle of the secret and its attributes. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deleted_secrets**
> DeletedSecretListResult get_deleted_secrets(api_version, maxresults=maxresults)

Lists deleted secrets for the specified vault.

The Get Deleted Secrets operation returns the secrets that have been deleted for a vault enabled for soft-delete. This operation requires the secrets/list permission.

### Example


```python
import openapi_client
from openapi_client.models.deleted_secret_list_result import DeletedSecretListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedSecretsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)

    try:
        # Lists deleted secrets for the specified vault.
        api_response = api_instance.get_deleted_secrets(api_version, maxresults=maxresults)
        print("The response of DeletedSecretsApi->get_deleted_secrets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedSecretsApi->get_deleted_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 

### Return type

[**DeletedSecretListResult**](DeletedSecretListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of deleted secrets in the vault, along with a link to the next page of deleted secrets. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purge_deleted_secret**
> purge_deleted_secret(secret_name, api_version)

Permanently deletes the specified secret.

The purge deleted secret operation removes the secret permanently, without the possibility of recovery. This operation can only be enabled on a soft-delete enabled vault. This operation requires the secrets/purge permission.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedSecretsApi(api_client)
    secret_name = 'secret_name_example' # str | The name of the secret.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Permanently deletes the specified secret.
        api_instance.purge_deleted_secret(secret_name, api_version)
    except Exception as e:
        print("Exception when calling DeletedSecretsApi->purge_deleted_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret_name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client API version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content signaling that the secret was purged forever. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recover_deleted_secret**
> SecretBundle recover_deleted_secret(secret_name, api_version)

Recovers the deleted secret to the latest version.

Recovers the deleted secret in the specified vault. This operation can only be performed on a soft-delete enabled vault. This operation requires the secrets/recover permission.

### Example


```python
import openapi_client
from openapi_client.models.secret_bundle import SecretBundle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedSecretsApi(api_client)
    secret_name = 'secret_name_example' # str | The name of the deleted secret.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Recovers the deleted secret to the latest version.
        api_response = api_instance.recover_deleted_secret(secret_name, api_version)
        print("The response of DeletedSecretsApi->recover_deleted_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedSecretsApi->recover_deleted_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret_name** | **str**| The name of the deleted secret. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**SecretBundle**](SecretBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Secret bundle of the original secret and its attributes. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

