# openapi_client.TransportLineNotifyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_line_notify_get_collection**](TransportLineNotifyApi.md#api_transport_line_notify_get_collection) | **GET** /api/transport-line-notify | Retrieves the collection of TransportLineNotify resources.
[**api_transport_line_notify_id_delete**](TransportLineNotifyApi.md#api_transport_line_notify_id_delete) | **DELETE** /api/transport-line-notify/{id} | Removes the TransportLineNotify resource.
[**api_transport_line_notify_id_get**](TransportLineNotifyApi.md#api_transport_line_notify_id_get) | **GET** /api/transport-line-notify/{id} | Retrieves a TransportLineNotify resource.
[**api_transport_line_notify_id_patch**](TransportLineNotifyApi.md#api_transport_line_notify_id_patch) | **PATCH** /api/transport-line-notify/{id} | Updates the TransportLineNotify resource.
[**api_transport_line_notify_id_put**](TransportLineNotifyApi.md#api_transport_line_notify_id_put) | **PUT** /api/transport-line-notify/{id} | Replaces the TransportLineNotify resource.
[**api_transport_line_notify_post**](TransportLineNotifyApi.md#api_transport_line_notify_post) | **POST** /api/transport-line-notify | Creates a TransportLineNotify resource.


# **api_transport_line_notify_get_collection**
> List[TransportLineNotifyGet] api_transport_line_notify_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportLineNotify resources.

Retrieves the collection of TransportLineNotify resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_line_notify_get import TransportLineNotifyGet
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportLineNotifyApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportLineNotify resources.
        api_response = api_instance.api_transport_line_notify_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportLineNotifyApi->api_transport_line_notify_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLineNotifyApi->api_transport_line_notify_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **data_segment_code** | **str**|  | [optional] 
 **data_segment_code2** | [**List[str]**](str.md)|  | [optional] 
 **partition** | **str**|  | [optional] 
 **partition2** | [**List[str]**](str.md)|  | [optional] 
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[TransportLineNotifyGet]**](TransportLineNotifyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLineNotify collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_line_notify_id_delete**
> api_transport_line_notify_id_delete(id)

Removes the TransportLineNotify resource.

Removes the TransportLineNotify resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportLineNotifyApi(api_client)
    id = 'id_example' # str | TransportLineNotify identifier

    try:
        # Removes the TransportLineNotify resource.
        api_instance.api_transport_line_notify_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportLineNotifyApi->api_transport_line_notify_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLineNotify identifier | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | TransportLineNotify resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_line_notify_id_get**
> TransportLineNotifyGet api_transport_line_notify_id_get(id)

Retrieves a TransportLineNotify resource.

Retrieves a TransportLineNotify resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_line_notify_get import TransportLineNotifyGet
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportLineNotifyApi(api_client)
    id = 'id_example' # str | TransportLineNotify identifier

    try:
        # Retrieves a TransportLineNotify resource.
        api_response = api_instance.api_transport_line_notify_id_get(id)
        print("The response of TransportLineNotifyApi->api_transport_line_notify_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLineNotifyApi->api_transport_line_notify_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLineNotify identifier | 

### Return type

[**TransportLineNotifyGet**](TransportLineNotifyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLineNotify resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_line_notify_id_patch**
> TransportLineNotifyGet api_transport_line_notify_id_patch(id, transport_line_notify_patch)

Updates the TransportLineNotify resource.

Updates the TransportLineNotify resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_line_notify_get import TransportLineNotifyGet
from openapi_client.models.transport_line_notify_patch import TransportLineNotifyPatch
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportLineNotifyApi(api_client)
    id = 'id_example' # str | TransportLineNotify identifier
    transport_line_notify_patch = openapi_client.TransportLineNotifyPatch() # TransportLineNotifyPatch | The updated TransportLineNotify resource

    try:
        # Updates the TransportLineNotify resource.
        api_response = api_instance.api_transport_line_notify_id_patch(id, transport_line_notify_patch)
        print("The response of TransportLineNotifyApi->api_transport_line_notify_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLineNotifyApi->api_transport_line_notify_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLineNotify identifier | 
 **transport_line_notify_patch** | [**TransportLineNotifyPatch**](TransportLineNotifyPatch.md)| The updated TransportLineNotify resource | 

### Return type

[**TransportLineNotifyGet**](TransportLineNotifyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLineNotify resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_line_notify_id_put**
> TransportLineNotifyGet api_transport_line_notify_id_put(id, transport_line_notify_put)

Replaces the TransportLineNotify resource.

Replaces the TransportLineNotify resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_line_notify_get import TransportLineNotifyGet
from openapi_client.models.transport_line_notify_put import TransportLineNotifyPut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportLineNotifyApi(api_client)
    id = 'id_example' # str | TransportLineNotify identifier
    transport_line_notify_put = openapi_client.TransportLineNotifyPut() # TransportLineNotifyPut | The updated TransportLineNotify resource

    try:
        # Replaces the TransportLineNotify resource.
        api_response = api_instance.api_transport_line_notify_id_put(id, transport_line_notify_put)
        print("The response of TransportLineNotifyApi->api_transport_line_notify_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLineNotifyApi->api_transport_line_notify_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLineNotify identifier | 
 **transport_line_notify_put** | [**TransportLineNotifyPut**](TransportLineNotifyPut.md)| The updated TransportLineNotify resource | 

### Return type

[**TransportLineNotifyGet**](TransportLineNotifyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLineNotify resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_line_notify_post**
> TransportLineNotifyGet api_transport_line_notify_post(transport_line_notify_post)

Creates a TransportLineNotify resource.

Creates a TransportLineNotify resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_line_notify_get import TransportLineNotifyGet
from openapi_client.models.transport_line_notify_post import TransportLineNotifyPost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportLineNotifyApi(api_client)
    transport_line_notify_post = openapi_client.TransportLineNotifyPost() # TransportLineNotifyPost | The new TransportLineNotify resource

    try:
        # Creates a TransportLineNotify resource.
        api_response = api_instance.api_transport_line_notify_post(transport_line_notify_post)
        print("The response of TransportLineNotifyApi->api_transport_line_notify_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLineNotifyApi->api_transport_line_notify_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_line_notify_post** | [**TransportLineNotifyPost**](TransportLineNotifyPost.md)| The new TransportLineNotify resource | 

### Return type

[**TransportLineNotifyGet**](TransportLineNotifyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportLineNotify resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

