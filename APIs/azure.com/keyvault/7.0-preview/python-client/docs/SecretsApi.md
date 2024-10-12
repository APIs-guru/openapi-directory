# openapi_client.SecretsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_secret**](SecretsApi.md#backup_secret) | **POST** /secrets/{secret-name}/backup | Backs up the specified secret.
[**delete_secret**](SecretsApi.md#delete_secret) | **DELETE** /secrets/{secret-name} | Deletes a secret from a specified key vault.
[**get_secret**](SecretsApi.md#get_secret) | **GET** /secrets/{secret-name}/{secret-version} | Get a specified secret from a given key vault.
[**get_secret_versions**](SecretsApi.md#get_secret_versions) | **GET** /secrets/{secret-name}/versions | List all versions of the specified secret.
[**get_secrets**](SecretsApi.md#get_secrets) | **GET** /secrets | List secrets in a specified key vault.
[**restore_secret**](SecretsApi.md#restore_secret) | **POST** /secrets/restore | Restores a backed up secret to a vault.
[**set_secret**](SecretsApi.md#set_secret) | **PUT** /secrets/{secret-name} | Sets a secret in a specified key vault.
[**update_secret**](SecretsApi.md#update_secret) | **PATCH** /secrets/{secret-name}/{secret-version} | Updates the attributes associated with a specified secret in a given key vault.


# **backup_secret**
> BackupSecretResult backup_secret(secret_name, api_version)

Backs up the specified secret.

Requests that a backup of the specified secret be downloaded to the client. All versions of the secret will be downloaded. This operation requires the secrets/backup permission.

### Example


```python
import openapi_client
from openapi_client.models.backup_secret_result import BackupSecretResult
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
    api_instance = openapi_client.SecretsApi(api_client)
    secret_name = 'secret_name_example' # str | The name of the secret.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Backs up the specified secret.
        api_response = api_instance.backup_secret(secret_name, api_version)
        print("The response of SecretsApi->backup_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->backup_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret_name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**BackupSecretResult**](BackupSecretResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The backup blob containing the backed up secret. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_secret**
> DeletedSecretBundle delete_secret(secret_name, api_version)

Deletes a secret from a specified key vault.

The DELETE operation applies to any secret stored in Azure Key Vault. DELETE cannot be applied to an individual version of a secret. This operation requires the secrets/delete permission.

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
    api_instance = openapi_client.SecretsApi(api_client)
    secret_name = 'secret_name_example' # str | The name of the secret.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Deletes a secret from a specified key vault.
        api_response = api_instance.delete_secret(secret_name, api_version)
        print("The response of SecretsApi->delete_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->delete_secret: %s\n" % e)
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
**200** | The deleted secret and information on when the secret will be deleted, and how to recover the deleted secret. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_secret**
> SecretBundle get_secret(secret_name, secret_version, api_version)

Get a specified secret from a given key vault.

The GET operation is applicable to any secret stored in Azure Key Vault. This operation requires the secrets/get permission.

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
    api_instance = openapi_client.SecretsApi(api_client)
    secret_name = 'secret_name_example' # str | The name of the secret.
    secret_version = 'secret_version_example' # str | The version of the secret.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Get a specified secret from a given key vault.
        api_response = api_instance.get_secret(secret_name, secret_version, api_version)
        print("The response of SecretsApi->get_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->get_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret_name** | **str**| The name of the secret. | 
 **secret_version** | **str**| The version of the secret. | 
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
**200** | The retrieved secret. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_secret_versions**
> SecretListResult get_secret_versions(secret_name, api_version, maxresults=maxresults)

List all versions of the specified secret.

The full secret identifier and attributes are provided in the response. No values are returned for the secrets. This operations requires the secrets/list permission.

### Example


```python
import openapi_client
from openapi_client.models.secret_list_result import SecretListResult
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
    api_instance = openapi_client.SecretsApi(api_client)
    secret_name = 'secret_name_example' # str | The name of the secret.
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified, the service will return up to 25 results. (optional)

    try:
        # List all versions of the specified secret.
        api_response = api_instance.get_secret_versions(secret_name, api_version, maxresults=maxresults)
        print("The response of SecretsApi->get_secret_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->get_secret_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret_name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified, the service will return up to 25 results. | [optional] 

### Return type

[**SecretListResult**](SecretListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of secrets along with a link to the next page of secrets. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_secrets**
> SecretListResult get_secrets(api_version, maxresults=maxresults)

List secrets in a specified key vault.

The Get Secrets operation is applicable to the entire vault. However, only the base secret identifier and its attributes are provided in the response. Individual secret versions are not listed in the response. This operation requires the secrets/list permission.

### Example


```python
import openapi_client
from openapi_client.models.secret_list_result import SecretListResult
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
    api_instance = openapi_client.SecretsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified, the service will return up to 25 results. (optional)

    try:
        # List secrets in a specified key vault.
        api_response = api_instance.get_secrets(api_version, maxresults=maxresults)
        print("The response of SecretsApi->get_secrets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->get_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified, the service will return up to 25 results. | [optional] 

### Return type

[**SecretListResult**](SecretListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of secrets in the vault along with a link to the next page of secrets. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_secret**
> SecretBundle restore_secret(api_version, parameters)

Restores a backed up secret to a vault.

Restores a backed up secret, and all its versions, to a vault. This operation requires the secrets/restore permission.

### Example


```python
import openapi_client
from openapi_client.models.secret_bundle import SecretBundle
from openapi_client.models.secret_restore_parameters import SecretRestoreParameters
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
    api_instance = openapi_client.SecretsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.SecretRestoreParameters() # SecretRestoreParameters | The parameters to restore the secret.

    try:
        # Restores a backed up secret to a vault.
        api_response = api_instance.restore_secret(api_version, parameters)
        print("The response of SecretsApi->restore_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->restore_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **parameters** | [**SecretRestoreParameters**](SecretRestoreParameters.md)| The parameters to restore the secret. | 

### Return type

[**SecretBundle**](SecretBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Restored secret bundle in the vault. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_secret**
> SecretBundle set_secret(secret_name, api_version, parameters)

Sets a secret in a specified key vault.

 The SET operation adds a secret to the Azure Key Vault. If the named secret already exists, Azure Key Vault creates a new version of that secret. This operation requires the secrets/set permission.

### Example


```python
import openapi_client
from openapi_client.models.secret_bundle import SecretBundle
from openapi_client.models.secret_set_parameters import SecretSetParameters
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
    api_instance = openapi_client.SecretsApi(api_client)
    secret_name = 'secret_name_example' # str | The name of the secret.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.SecretSetParameters() # SecretSetParameters | The parameters for setting the secret.

    try:
        # Sets a secret in a specified key vault.
        api_response = api_instance.set_secret(secret_name, api_version, parameters)
        print("The response of SecretsApi->set_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->set_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret_name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**SecretSetParameters**](SecretSetParameters.md)| The parameters for setting the secret. | 

### Return type

[**SecretBundle**](SecretBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A secret bundle containing the result of the set secret request. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_secret**
> SecretBundle update_secret(secret_name, secret_version, api_version, parameters)

Updates the attributes associated with a specified secret in a given key vault.

The UPDATE operation changes specified attributes of an existing stored secret. Attributes that are not specified in the request are left unchanged. The value of a secret itself cannot be changed. This operation requires the secrets/set permission.

### Example


```python
import openapi_client
from openapi_client.models.secret_bundle import SecretBundle
from openapi_client.models.secret_update_parameters import SecretUpdateParameters
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
    api_instance = openapi_client.SecretsApi(api_client)
    secret_name = 'secret_name_example' # str | The name of the secret.
    secret_version = 'secret_version_example' # str | The version of the secret.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.SecretUpdateParameters() # SecretUpdateParameters | The parameters for update secret operation.

    try:
        # Updates the attributes associated with a specified secret in a given key vault.
        api_response = api_instance.update_secret(secret_name, secret_version, api_version, parameters)
        print("The response of SecretsApi->update_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->update_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret_name** | **str**| The name of the secret. | 
 **secret_version** | **str**| The version of the secret. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**SecretUpdateParameters**](SecretUpdateParameters.md)| The parameters for update secret operation. | 

### Return type

[**SecretBundle**](SecretBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated secret. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

