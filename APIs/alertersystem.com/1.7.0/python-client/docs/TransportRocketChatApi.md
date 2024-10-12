# openapi_client.TransportRocketChatApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_rocket_chat_get_collection**](TransportRocketChatApi.md#api_transport_rocket_chat_get_collection) | **GET** /api/transport-rocket-chat | Retrieves the collection of TransportRocketChat resources.
[**api_transport_rocket_chat_id_delete**](TransportRocketChatApi.md#api_transport_rocket_chat_id_delete) | **DELETE** /api/transport-rocket-chat/{id} | Removes the TransportRocketChat resource.
[**api_transport_rocket_chat_id_get**](TransportRocketChatApi.md#api_transport_rocket_chat_id_get) | **GET** /api/transport-rocket-chat/{id} | Retrieves a TransportRocketChat resource.
[**api_transport_rocket_chat_id_patch**](TransportRocketChatApi.md#api_transport_rocket_chat_id_patch) | **PATCH** /api/transport-rocket-chat/{id} | Updates the TransportRocketChat resource.
[**api_transport_rocket_chat_id_put**](TransportRocketChatApi.md#api_transport_rocket_chat_id_put) | **PUT** /api/transport-rocket-chat/{id} | Replaces the TransportRocketChat resource.
[**api_transport_rocket_chat_post**](TransportRocketChatApi.md#api_transport_rocket_chat_post) | **POST** /api/transport-rocket-chat | Creates a TransportRocketChat resource.


# **api_transport_rocket_chat_get_collection**
> List[TransportRocketChatGet] api_transport_rocket_chat_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportRocketChat resources.

Retrieves the collection of TransportRocketChat resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_rocket_chat_get import TransportRocketChatGet
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
    api_instance = openapi_client.TransportRocketChatApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportRocketChat resources.
        api_response = api_instance.api_transport_rocket_chat_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportRocketChatApi->api_transport_rocket_chat_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportRocketChatApi->api_transport_rocket_chat_get_collection: %s\n" % e)
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

[**List[TransportRocketChatGet]**](TransportRocketChatGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportRocketChat collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_rocket_chat_id_delete**
> api_transport_rocket_chat_id_delete(id)

Removes the TransportRocketChat resource.

Removes the TransportRocketChat resource.

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
    api_instance = openapi_client.TransportRocketChatApi(api_client)
    id = 'id_example' # str | TransportRocketChat identifier

    try:
        # Removes the TransportRocketChat resource.
        api_instance.api_transport_rocket_chat_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportRocketChatApi->api_transport_rocket_chat_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportRocketChat identifier | 

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
**204** | TransportRocketChat resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_rocket_chat_id_get**
> TransportRocketChatGet api_transport_rocket_chat_id_get(id)

Retrieves a TransportRocketChat resource.

Retrieves a TransportRocketChat resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_rocket_chat_get import TransportRocketChatGet
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
    api_instance = openapi_client.TransportRocketChatApi(api_client)
    id = 'id_example' # str | TransportRocketChat identifier

    try:
        # Retrieves a TransportRocketChat resource.
        api_response = api_instance.api_transport_rocket_chat_id_get(id)
        print("The response of TransportRocketChatApi->api_transport_rocket_chat_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportRocketChatApi->api_transport_rocket_chat_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportRocketChat identifier | 

### Return type

[**TransportRocketChatGet**](TransportRocketChatGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportRocketChat resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_rocket_chat_id_patch**
> TransportRocketChatGet api_transport_rocket_chat_id_patch(id, transport_rocket_chat_patch)

Updates the TransportRocketChat resource.

Updates the TransportRocketChat resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_rocket_chat_get import TransportRocketChatGet
from openapi_client.models.transport_rocket_chat_patch import TransportRocketChatPatch
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
    api_instance = openapi_client.TransportRocketChatApi(api_client)
    id = 'id_example' # str | TransportRocketChat identifier
    transport_rocket_chat_patch = openapi_client.TransportRocketChatPatch() # TransportRocketChatPatch | The updated TransportRocketChat resource

    try:
        # Updates the TransportRocketChat resource.
        api_response = api_instance.api_transport_rocket_chat_id_patch(id, transport_rocket_chat_patch)
        print("The response of TransportRocketChatApi->api_transport_rocket_chat_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportRocketChatApi->api_transport_rocket_chat_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportRocketChat identifier | 
 **transport_rocket_chat_patch** | [**TransportRocketChatPatch**](TransportRocketChatPatch.md)| The updated TransportRocketChat resource | 

### Return type

[**TransportRocketChatGet**](TransportRocketChatGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportRocketChat resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_rocket_chat_id_put**
> TransportRocketChatGet api_transport_rocket_chat_id_put(id, transport_rocket_chat_put)

Replaces the TransportRocketChat resource.

Replaces the TransportRocketChat resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_rocket_chat_get import TransportRocketChatGet
from openapi_client.models.transport_rocket_chat_put import TransportRocketChatPut
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
    api_instance = openapi_client.TransportRocketChatApi(api_client)
    id = 'id_example' # str | TransportRocketChat identifier
    transport_rocket_chat_put = openapi_client.TransportRocketChatPut() # TransportRocketChatPut | The updated TransportRocketChat resource

    try:
        # Replaces the TransportRocketChat resource.
        api_response = api_instance.api_transport_rocket_chat_id_put(id, transport_rocket_chat_put)
        print("The response of TransportRocketChatApi->api_transport_rocket_chat_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportRocketChatApi->api_transport_rocket_chat_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportRocketChat identifier | 
 **transport_rocket_chat_put** | [**TransportRocketChatPut**](TransportRocketChatPut.md)| The updated TransportRocketChat resource | 

### Return type

[**TransportRocketChatGet**](TransportRocketChatGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportRocketChat resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_rocket_chat_post**
> TransportRocketChatGet api_transport_rocket_chat_post(transport_rocket_chat_post)

Creates a TransportRocketChat resource.

Creates a TransportRocketChat resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_rocket_chat_get import TransportRocketChatGet
from openapi_client.models.transport_rocket_chat_post import TransportRocketChatPost
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
    api_instance = openapi_client.TransportRocketChatApi(api_client)
    transport_rocket_chat_post = openapi_client.TransportRocketChatPost() # TransportRocketChatPost | The new TransportRocketChat resource

    try:
        # Creates a TransportRocketChat resource.
        api_response = api_instance.api_transport_rocket_chat_post(transport_rocket_chat_post)
        print("The response of TransportRocketChatApi->api_transport_rocket_chat_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportRocketChatApi->api_transport_rocket_chat_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_rocket_chat_post** | [**TransportRocketChatPost**](TransportRocketChatPost.md)| The new TransportRocketChat resource | 

### Return type

[**TransportRocketChatGet**](TransportRocketChatGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportRocketChat resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

