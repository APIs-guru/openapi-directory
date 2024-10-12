# openapi_client.TransportGoogleChatApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_google_chat_get_collection**](TransportGoogleChatApi.md#api_transport_google_chat_get_collection) | **GET** /api/transport-google-chat | Retrieves the collection of TransportGoogleChat resources.
[**api_transport_google_chat_id_delete**](TransportGoogleChatApi.md#api_transport_google_chat_id_delete) | **DELETE** /api/transport-google-chat/{id} | Removes the TransportGoogleChat resource.
[**api_transport_google_chat_id_get**](TransportGoogleChatApi.md#api_transport_google_chat_id_get) | **GET** /api/transport-google-chat/{id} | Retrieves a TransportGoogleChat resource.
[**api_transport_google_chat_id_patch**](TransportGoogleChatApi.md#api_transport_google_chat_id_patch) | **PATCH** /api/transport-google-chat/{id} | Updates the TransportGoogleChat resource.
[**api_transport_google_chat_id_put**](TransportGoogleChatApi.md#api_transport_google_chat_id_put) | **PUT** /api/transport-google-chat/{id} | Replaces the TransportGoogleChat resource.
[**api_transport_google_chat_post**](TransportGoogleChatApi.md#api_transport_google_chat_post) | **POST** /api/transport-google-chat | Creates a TransportGoogleChat resource.


# **api_transport_google_chat_get_collection**
> List[TransportGoogleChatGet] api_transport_google_chat_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportGoogleChat resources.

Retrieves the collection of TransportGoogleChat resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_google_chat_get import TransportGoogleChatGet
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
    api_instance = openapi_client.TransportGoogleChatApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportGoogleChat resources.
        api_response = api_instance.api_transport_google_chat_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportGoogleChatApi->api_transport_google_chat_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGoogleChatApi->api_transport_google_chat_get_collection: %s\n" % e)
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

[**List[TransportGoogleChatGet]**](TransportGoogleChatGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGoogleChat collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_google_chat_id_delete**
> api_transport_google_chat_id_delete(id)

Removes the TransportGoogleChat resource.

Removes the TransportGoogleChat resource.

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
    api_instance = openapi_client.TransportGoogleChatApi(api_client)
    id = 'id_example' # str | TransportGoogleChat identifier

    try:
        # Removes the TransportGoogleChat resource.
        api_instance.api_transport_google_chat_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportGoogleChatApi->api_transport_google_chat_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGoogleChat identifier | 

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
**204** | TransportGoogleChat resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_google_chat_id_get**
> TransportGoogleChatGet api_transport_google_chat_id_get(id)

Retrieves a TransportGoogleChat resource.

Retrieves a TransportGoogleChat resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_google_chat_get import TransportGoogleChatGet
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
    api_instance = openapi_client.TransportGoogleChatApi(api_client)
    id = 'id_example' # str | TransportGoogleChat identifier

    try:
        # Retrieves a TransportGoogleChat resource.
        api_response = api_instance.api_transport_google_chat_id_get(id)
        print("The response of TransportGoogleChatApi->api_transport_google_chat_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGoogleChatApi->api_transport_google_chat_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGoogleChat identifier | 

### Return type

[**TransportGoogleChatGet**](TransportGoogleChatGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGoogleChat resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_google_chat_id_patch**
> TransportGoogleChatGet api_transport_google_chat_id_patch(id, transport_google_chat_patch)

Updates the TransportGoogleChat resource.

Updates the TransportGoogleChat resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_google_chat_get import TransportGoogleChatGet
from openapi_client.models.transport_google_chat_patch import TransportGoogleChatPatch
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
    api_instance = openapi_client.TransportGoogleChatApi(api_client)
    id = 'id_example' # str | TransportGoogleChat identifier
    transport_google_chat_patch = openapi_client.TransportGoogleChatPatch() # TransportGoogleChatPatch | The updated TransportGoogleChat resource

    try:
        # Updates the TransportGoogleChat resource.
        api_response = api_instance.api_transport_google_chat_id_patch(id, transport_google_chat_patch)
        print("The response of TransportGoogleChatApi->api_transport_google_chat_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGoogleChatApi->api_transport_google_chat_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGoogleChat identifier | 
 **transport_google_chat_patch** | [**TransportGoogleChatPatch**](TransportGoogleChatPatch.md)| The updated TransportGoogleChat resource | 

### Return type

[**TransportGoogleChatGet**](TransportGoogleChatGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGoogleChat resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_google_chat_id_put**
> TransportGoogleChatGet api_transport_google_chat_id_put(id, transport_google_chat_put)

Replaces the TransportGoogleChat resource.

Replaces the TransportGoogleChat resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_google_chat_get import TransportGoogleChatGet
from openapi_client.models.transport_google_chat_put import TransportGoogleChatPut
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
    api_instance = openapi_client.TransportGoogleChatApi(api_client)
    id = 'id_example' # str | TransportGoogleChat identifier
    transport_google_chat_put = openapi_client.TransportGoogleChatPut() # TransportGoogleChatPut | The updated TransportGoogleChat resource

    try:
        # Replaces the TransportGoogleChat resource.
        api_response = api_instance.api_transport_google_chat_id_put(id, transport_google_chat_put)
        print("The response of TransportGoogleChatApi->api_transport_google_chat_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGoogleChatApi->api_transport_google_chat_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGoogleChat identifier | 
 **transport_google_chat_put** | [**TransportGoogleChatPut**](TransportGoogleChatPut.md)| The updated TransportGoogleChat resource | 

### Return type

[**TransportGoogleChatGet**](TransportGoogleChatGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGoogleChat resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_google_chat_post**
> TransportGoogleChatGet api_transport_google_chat_post(transport_google_chat_post)

Creates a TransportGoogleChat resource.

Creates a TransportGoogleChat resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_google_chat_get import TransportGoogleChatGet
from openapi_client.models.transport_google_chat_post import TransportGoogleChatPost
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
    api_instance = openapi_client.TransportGoogleChatApi(api_client)
    transport_google_chat_post = openapi_client.TransportGoogleChatPost() # TransportGoogleChatPost | The new TransportGoogleChat resource

    try:
        # Creates a TransportGoogleChat resource.
        api_response = api_instance.api_transport_google_chat_post(transport_google_chat_post)
        print("The response of TransportGoogleChatApi->api_transport_google_chat_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGoogleChatApi->api_transport_google_chat_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_google_chat_post** | [**TransportGoogleChatPost**](TransportGoogleChatPost.md)| The new TransportGoogleChat resource | 

### Return type

[**TransportGoogleChatGet**](TransportGoogleChatGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportGoogleChat resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

