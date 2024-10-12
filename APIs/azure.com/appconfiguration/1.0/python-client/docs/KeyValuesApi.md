# openapi_client.KeyValuesApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_key_value**](KeyValuesApi.md#check_key_value) | **HEAD** /kv/{key} | Requests the headers and status of the given resource.
[**check_key_values**](KeyValuesApi.md#check_key_values) | **HEAD** /kv | Requests the headers and status of the given resource.
[**delete_key_value**](KeyValuesApi.md#delete_key_value) | **DELETE** /kv/{key} | Deletes a key-value.
[**get_key_value**](KeyValuesApi.md#get_key_value) | **GET** /kv/{key} | Gets a single key-value.
[**get_key_values**](KeyValuesApi.md#get_key_values) | **GET** /kv | Gets a list of key-values.
[**put_key_value**](KeyValuesApi.md#put_key_value) | **PUT** /kv/{key} | Creates a key-value.


# **check_key_value**
> check_key_value(key, api_version, label=label, sync_token=sync_token, accept_datetime=accept_datetime, if_match=if_match, if_none_match=if_none_match, select=select)

Requests the headers and status of the given resource.

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
    api_instance = openapi_client.KeyValuesApi(api_client)
    key = 'key_example' # str | The key of the key-value to retrieve.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    label = 'label_example' # str | The label of the key-value to retrieve. (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    accept_datetime = 'accept_datetime_example' # str | Requests the server to respond with the state of the resource at the specified time. (optional)
    if_match = 'if_match_example' # str | Used to perform an operation only if the targeted resource's etag matches the value provided. (optional)
    if_none_match = 'if_none_match_example' # str | Used to perform an operation only if the targeted resource's etag does not match the value provided. (optional)
    select = ['select_example'] # List[str] | Used to select what fields are present in the returned resource(s). (optional)

    try:
        # Requests the headers and status of the given resource.
        api_instance.check_key_value(key, api_version, label=label, sync_token=sync_token, accept_datetime=accept_datetime, if_match=if_match, if_none_match=if_none_match, select=select)
    except Exception as e:
        print("Exception when calling KeyValuesApi->check_key_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| The key of the key-value to retrieve. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **label** | **str**| The label of the key-value to retrieve. | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **accept_datetime** | **str**| Requests the server to respond with the state of the resource at the specified time. | [optional] 
 **if_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag matches the value provided. | [optional] 
 **if_none_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag does not match the value provided. | [optional] 
 **select** | [**List[str]**](str.md)| Used to select what fields are present in the returned resource(s). | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * ETag - An identifier representing the returned state of the resource. <br>  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  * Last-Modified - A UTC datetime that specifies the last time the resource was modified. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **check_key_values**
> check_key_values(api_version, key=key, label=label, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)

Requests the headers and status of the given resource.

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
    api_instance = openapi_client.KeyValuesApi(api_client)
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    key = 'key_example' # str | A filter used to match keys. (optional)
    label = 'label_example' # str | A filter used to match labels (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    after = 'after_example' # str | Instructs the server to return elements that appear after the element referred to by the specified token. (optional)
    accept_datetime = 'accept_datetime_example' # str | Requests the server to respond with the state of the resource at the specified time. (optional)
    select = ['select_example'] # List[str] | Used to select what fields are present in the returned resource(s). (optional)

    try:
        # Requests the headers and status of the given resource.
        api_instance.check_key_values(api_version, key=key, label=label, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)
    except Exception as e:
        print("Exception when calling KeyValuesApi->check_key_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **key** | **str**| A filter used to match keys. | [optional] 
 **label** | **str**| A filter used to match labels | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **after** | **str**| Instructs the server to return elements that appear after the element referred to by the specified token. | [optional] 
 **accept_datetime** | **str**| Requests the server to respond with the state of the resource at the specified time. | [optional] 
 **select** | [**List[str]**](str.md)| Used to select what fields are present in the returned resource(s). | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_key_value**
> KeyValue delete_key_value(key, api_version, label=label, sync_token=sync_token, if_match=if_match)

Deletes a key-value.

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
    api_instance = openapi_client.KeyValuesApi(api_client)
    key = 'key_example' # str | The key of the key-value to delete.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    label = 'label_example' # str | The label of the key-value to delete. (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    if_match = 'if_match_example' # str | Used to perform an operation only if the targeted resource's etag matches the value provided. (optional)

    try:
        # Deletes a key-value.
        api_response = api_instance.delete_key_value(key, api_version, label=label, sync_token=sync_token, if_match=if_match)
        print("The response of KeyValuesApi->delete_key_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyValuesApi->delete_key_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| The key of the key-value to delete. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **label** | **str**| The label of the key-value to delete. | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **if_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag matches the value provided. | [optional] 

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
**204** | Success |  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_key_value**
> KeyValue get_key_value(key, api_version, label=label, sync_token=sync_token, accept_datetime=accept_datetime, if_match=if_match, if_none_match=if_none_match, select=select)

Gets a single key-value.

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
    api_instance = openapi_client.KeyValuesApi(api_client)
    key = 'key_example' # str | The key of the key-value to retrieve.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    label = 'label_example' # str | The label of the key-value to retrieve. (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    accept_datetime = 'accept_datetime_example' # str | Requests the server to respond with the state of the resource at the specified time. (optional)
    if_match = 'if_match_example' # str | Used to perform an operation only if the targeted resource's etag matches the value provided. (optional)
    if_none_match = 'if_none_match_example' # str | Used to perform an operation only if the targeted resource's etag does not match the value provided. (optional)
    select = ['select_example'] # List[str] | Used to select what fields are present in the returned resource(s). (optional)

    try:
        # Gets a single key-value.
        api_response = api_instance.get_key_value(key, api_version, label=label, sync_token=sync_token, accept_datetime=accept_datetime, if_match=if_match, if_none_match=if_none_match, select=select)
        print("The response of KeyValuesApi->get_key_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyValuesApi->get_key_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| The key of the key-value to retrieve. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **label** | **str**| The label of the key-value to retrieve. | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **accept_datetime** | **str**| Requests the server to respond with the state of the resource at the specified time. | [optional] 
 **if_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag matches the value provided. | [optional] 
 **if_none_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag does not match the value provided. | [optional] 
 **select** | [**List[str]**](str.md)| Used to select what fields are present in the returned resource(s). | [optional] 

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
**200** | Success |  * ETag - An identifier representing the returned state of the resource. <br>  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  * Last-Modified - A UTC datetime that specifies the last time the resource was modified. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_key_values**
> KeyValueListResult get_key_values(api_version, key=key, label=label, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)

Gets a list of key-values.

### Example


```python
import openapi_client
from openapi_client.models.key_value_list_result import KeyValueListResult
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
    api_instance = openapi_client.KeyValuesApi(api_client)
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    key = 'key_example' # str | A filter used to match keys. (optional)
    label = 'label_example' # str | A filter used to match labels (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    after = 'after_example' # str | Instructs the server to return elements that appear after the element referred to by the specified token. (optional)
    accept_datetime = 'accept_datetime_example' # str | Requests the server to respond with the state of the resource at the specified time. (optional)
    select = ['select_example'] # List[str] | Used to select what fields are present in the returned resource(s). (optional)

    try:
        # Gets a list of key-values.
        api_response = api_instance.get_key_values(api_version, key=key, label=label, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)
        print("The response of KeyValuesApi->get_key_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyValuesApi->get_key_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **key** | **str**| A filter used to match keys. | [optional] 
 **label** | **str**| A filter used to match labels | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **after** | **str**| Instructs the server to return elements that appear after the element referred to by the specified token. | [optional] 
 **accept_datetime** | **str**| Requests the server to respond with the state of the resource at the specified time. | [optional] 
 **select** | [**List[str]**](str.md)| Used to select what fields are present in the returned resource(s). | [optional] 

### Return type

[**KeyValueListResult**](KeyValueListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.microsoft.appconfig.kvset+json, application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_key_value**
> KeyValue put_key_value(key, api_version, label=label, sync_token=sync_token, if_match=if_match, if_none_match=if_none_match, entity=entity)

Creates a key-value.

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
    api_instance = openapi_client.KeyValuesApi(api_client)
    key = 'key_example' # str | The key of the key-value to create.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    label = 'label_example' # str | The label of the key-value to create. (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    if_match = 'if_match_example' # str | Used to perform an operation only if the targeted resource's etag matches the value provided. (optional)
    if_none_match = 'if_none_match_example' # str | Used to perform an operation only if the targeted resource's etag does not match the value provided. (optional)
    entity = openapi_client.KeyValue() # KeyValue | The key-value to create. (optional)

    try:
        # Creates a key-value.
        api_response = api_instance.put_key_value(key, api_version, label=label, sync_token=sync_token, if_match=if_match, if_none_match=if_none_match, entity=entity)
        print("The response of KeyValuesApi->put_key_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyValuesApi->put_key_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| The key of the key-value to create. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **label** | **str**| The label of the key-value to create. | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **if_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag matches the value provided. | [optional] 
 **if_none_match** | **str**| Used to perform an operation only if the targeted resource&#39;s etag does not match the value provided. | [optional] 
 **entity** | [**KeyValue**](KeyValue.md)| The key-value to create. | [optional] 

### Return type

[**KeyValue**](KeyValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.microsoft.appconfig.kv+json, application/vnd.microsoft.appconfig.kvset+json, application/json, text/json, application/*+json, application/json-patch+json
 - **Accept**: application/vnd.microsoft.appconfig.kv+json, application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * ETag - An identifier representing the returned state of the resource. <br>  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

