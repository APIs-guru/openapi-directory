# openapi_client.DweetsApi

All URIs are relative to *https://dweet.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dweet_for_thing_post**](DweetsApi.md#dweet_for_thing_post) | **POST** /dweet/for/{thing} | Create a dweet for a thing.
[**dweet_quietly_for_thing_post**](DweetsApi.md#dweet_quietly_for_thing_post) | **POST** /dweet/quietly/for/{thing} | Create a dweet for a thing.  This method differs from /dweet/for/{thing} only in that successful dweets result in an HTTP 204 response rather than the typical verbose response.
[**get_dweets_for_thing_get**](DweetsApi.md#get_dweets_for_thing_get) | **GET** /get/dweets/for/{thing} | Read the last 5 cached dweets for a thing.
[**get_latest_dweet**](DweetsApi.md#get_latest_dweet) | **GET** /get/latest/dweet/for/{thing} | Read the latest dweet for a thing.
[**listen_for_dweets**](DweetsApi.md#listen_for_dweets) | **GET** /listen/for/dweets/from/{thing} | Listen for dweets from a thing.


# **dweet_for_thing_post**
> dweet_for_thing_post(thing, content, key=key)

Create a dweet for a thing.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dweet.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dweet.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DweetsApi(api_client)
    thing = 'thing_example' # str | A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions.
    content = 'content_example' # str | The actual content of the string. Can be any valid JSON string.
    key = 'key_example' # str | A valid key for a locked thing. If the thing is not locked, this can be ignored. (optional)

    try:
        # Create a dweet for a thing.
        api_instance.dweet_for_thing_post(thing, content, key=key)
    except Exception as e:
        print("Exception when calling DweetsApi->dweet_for_thing_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**| A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions. | 
 **content** | **str**| The actual content of the string. Can be any valid JSON string. | 
 **key** | **str**| A valid key for a locked thing. If the thing is not locked, this can be ignored. | [optional] 

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
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dweet_quietly_for_thing_post**
> dweet_quietly_for_thing_post(thing, content, key=key)

Create a dweet for a thing.  This method differs from /dweet/for/{thing} only in that successful dweets result in an HTTP 204 response rather than the typical verbose response.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dweet.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dweet.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DweetsApi(api_client)
    thing = 'thing_example' # str | A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions.
    content = 'content_example' # str | The actual content of the string. Can be any valid JSON string.
    key = 'key_example' # str | A valid key for a locked thing. If the thing is not locked, this can be ignored. (optional)

    try:
        # Create a dweet for a thing.  This method differs from /dweet/for/{thing} only in that successful dweets result in an HTTP 204 response rather than the typical verbose response.
        api_instance.dweet_quietly_for_thing_post(thing, content, key=key)
    except Exception as e:
        print("Exception when calling DweetsApi->dweet_quietly_for_thing_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**| A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions. | 
 **content** | **str**| The actual content of the string. Can be any valid JSON string. | 
 **key** | **str**| A valid key for a locked thing. If the thing is not locked, this can be ignored. | [optional] 

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
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dweets_for_thing_get**
> get_dweets_for_thing_get(thing, key=key)

Read the last 5 cached dweets for a thing.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dweet.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dweet.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DweetsApi(api_client)
    thing = 'thing_example' # str | A unique name of a thing.
    key = 'key_example' # str | A valid key for a locked thing. If the thing is not locked, this can be ignored. (optional)

    try:
        # Read the last 5 cached dweets for a thing.
        api_instance.get_dweets_for_thing_get(thing, key=key)
    except Exception as e:
        print("Exception when calling DweetsApi->get_dweets_for_thing_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**| A unique name of a thing. | 
 **key** | **str**| A valid key for a locked thing. If the thing is not locked, this can be ignored. | [optional] 

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
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_dweet**
> get_latest_dweet(thing, key=key)

Read the latest dweet for a thing.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dweet.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dweet.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DweetsApi(api_client)
    thing = 'thing_example' # str | A unique name of a thing.
    key = 'key_example' # str | A valid key for a locked thing. If the thing is not locked, this can be ignored. (optional)

    try:
        # Read the latest dweet for a thing.
        api_instance.get_latest_dweet(thing, key=key)
    except Exception as e:
        print("Exception when calling DweetsApi->get_latest_dweet: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**| A unique name of a thing. | 
 **key** | **str**| A valid key for a locked thing. If the thing is not locked, this can be ignored. | [optional] 

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
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listen_for_dweets**
> listen_for_dweets(thing)

Listen for dweets from a thing.

Sorry, this function uses HTTP chunked responses and cannot be tested here. Try something like: <pre>curl --raw https://dweet.io/listen/for/dweets/from/{thing}</pre>

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dweet.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dweet.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DweetsApi(api_client)
    thing = 'thing_example' # str | 

    try:
        # Listen for dweets from a thing.
        api_instance.listen_for_dweets(thing)
    except Exception as e:
        print("Exception when calling DweetsApi->listen_for_dweets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**|  | 

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
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

