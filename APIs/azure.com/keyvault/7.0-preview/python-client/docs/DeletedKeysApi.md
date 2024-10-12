# openapi_client.DeletedKeysApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_deleted_key**](DeletedKeysApi.md#get_deleted_key) | **GET** /deletedkeys/{key-name} | Gets the public part of a deleted key.
[**get_deleted_keys**](DeletedKeysApi.md#get_deleted_keys) | **GET** /deletedkeys | Lists the deleted keys in the specified vault.
[**purge_deleted_key**](DeletedKeysApi.md#purge_deleted_key) | **DELETE** /deletedkeys/{key-name} | Permanently deletes the specified key.
[**recover_deleted_key**](DeletedKeysApi.md#recover_deleted_key) | **POST** /deletedkeys/{key-name}/recover | Recovers the deleted key to its latest version.


# **get_deleted_key**
> DeletedKeyBundle get_deleted_key(key_name, api_version)

Gets the public part of a deleted key.

The Get Deleted Key operation is applicable for soft-delete enabled vaults. While the operation can be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault. This operation requires the keys/get permission. 

### Example


```python
import openapi_client
from openapi_client.models.deleted_key_bundle import DeletedKeyBundle
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
    api_instance = openapi_client.DeletedKeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Gets the public part of a deleted key.
        api_response = api_instance.get_deleted_key(key_name, api_version)
        print("The response of DeletedKeysApi->get_deleted_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedKeysApi->get_deleted_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**DeletedKeyBundle**](DeletedKeyBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A DeletedKeyBundle consisting of a WebKey plus its Attributes and deletion information. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deleted_keys**
> DeletedKeyListResult get_deleted_keys(api_version, maxresults=maxresults)

Lists the deleted keys in the specified vault.

Retrieves a list of the keys in the Key Vault as JSON Web Key structures that contain the public part of a deleted key. This operation includes deletion-specific information. The Get Deleted Keys operation is applicable for vaults enabled for soft-delete. While the operation can be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault. This operation requires the keys/list permission.

### Example


```python
import openapi_client
from openapi_client.models.deleted_key_list_result import DeletedKeyListResult
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
    api_instance = openapi_client.DeletedKeysApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)

    try:
        # Lists the deleted keys in the specified vault.
        api_response = api_instance.get_deleted_keys(api_version, maxresults=maxresults)
        print("The response of DeletedKeysApi->get_deleted_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedKeysApi->get_deleted_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 

### Return type

[**DeletedKeyListResult**](DeletedKeyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of deleted keys in the vault along with a link to the next page of deleted keys. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purge_deleted_key**
> purge_deleted_key(key_name, api_version)

Permanently deletes the specified key.

The Purge Deleted Key operation is applicable for soft-delete enabled vaults. While the operation can be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault. This operation requires the keys/purge permission.

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
    api_instance = openapi_client.DeletedKeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Permanently deletes the specified key.
        api_instance.purge_deleted_key(key_name, api_version)
    except Exception as e:
        print("Exception when calling DeletedKeysApi->purge_deleted_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key | 
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
**204** | No content, signaling that the key was permanently purged. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recover_deleted_key**
> KeyBundle recover_deleted_key(key_name, api_version)

Recovers the deleted key to its latest version.

The Recover Deleted Key operation is applicable for deleted keys in soft-delete enabled vaults. It recovers the deleted key back to its latest version under /keys. An attempt to recover an non-deleted key will return an error. Consider this the inverse of the delete operation on soft-delete enabled vaults. This operation requires the keys/recover permission.

### Example


```python
import openapi_client
from openapi_client.models.key_bundle import KeyBundle
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
    api_instance = openapi_client.DeletedKeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the deleted key.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Recovers the deleted key to its latest version.
        api_response = api_instance.recover_deleted_key(key_name, api_version)
        print("The response of DeletedKeysApi->recover_deleted_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedKeysApi->recover_deleted_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the deleted key. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**KeyBundle**](KeyBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Key bundle of the original key and its attributes |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

