# openapi_client.LocksApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_lock**](LocksApi.md#delete_lock) | **DELETE** /locks/{key} | Unlocks a key-value.
[**put_lock**](LocksApi.md#put_lock) | **PUT** /locks/{key} | Locks a key-value.


# **delete_lock**
> KeyValue delete_lock(key, api_version, label=label, sync_token=sync_token, if_match=if_match, if_none_match=if_none_match)

Unlocks a key-value.

### Example


```python
import openapi_client
from openapi_client.models.key_value import KeyValue
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
    api_instance = openapi_client.LocksApi(api_client)
    key = 'key_example' # str | The key of the key-value to unlock.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    label = 'label_example' # str | The label, if any, of the key-value to unlock. (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    if_match = 'if_match_example' # str | Used to perform an operation only if the targeted resource's etag matches the value provided. (optional)
    if_none_match = 'if_none_match_example' # str | Used to perform an operation only if the targeted resource's etag does not match the value provided. (optional)

    try:
        # Unlocks a key-value.
        api_response = api_instance.delete_lock(key, api_version, label=label, sync_token=sync_token, if_match=if_match, if_none_match=if_none_match)
        print("The response of LocksApi->delete_lock:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocksApi->delete_lock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| The key of the key-value to unlock. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **label** | **str**| The label, if any, of the key-value to unlock. | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **if_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag matches the value provided. | [optional] 
 **if_none_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag does not match the value provided. | [optional] 

### Return type

[**KeyValue**](KeyValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.microsoft.appconfig.kv+json, application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * ETag - An identifier representing the returned state of the resource. <br>  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_lock**
> KeyValue put_lock(key, api_version, label=label, sync_token=sync_token, if_match=if_match, if_none_match=if_none_match)

Locks a key-value.

### Example


```python
import openapi_client
from openapi_client.models.key_value import KeyValue
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
    api_instance = openapi_client.LocksApi(api_client)
    key = 'key_example' # str | The key of the key-value to lock.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    label = 'label_example' # str | The label, if any, of the key-value to lock. (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    if_match = 'if_match_example' # str | Used to perform an operation only if the targeted resource's etag matches the value provided. (optional)
    if_none_match = 'if_none_match_example' # str | Used to perform an operation only if the targeted resource's etag does not match the value provided. (optional)

    try:
        # Locks a key-value.
        api_response = api_instance.put_lock(key, api_version, label=label, sync_token=sync_token, if_match=if_match, if_none_match=if_none_match)
        print("The response of LocksApi->put_lock:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocksApi->put_lock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| The key of the key-value to lock. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **label** | **str**| The label, if any, of the key-value to lock. | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **if_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag matches the value provided. | [optional] 
 **if_none_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag does not match the value provided. | [optional] 

### Return type

[**KeyValue**](KeyValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.microsoft.appconfig.kv+json, application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * ETag - An identifier representing the returned state of the resource. <br>  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

