# openapi_client.TransportMessageBirdApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_message_bird_get_collection**](TransportMessageBirdApi.md#api_transport_message_bird_get_collection) | **GET** /api/transport-message-bird | Retrieves the collection of TransportMessageBird resources.
[**api_transport_message_bird_id_delete**](TransportMessageBirdApi.md#api_transport_message_bird_id_delete) | **DELETE** /api/transport-message-bird/{id} | Removes the TransportMessageBird resource.
[**api_transport_message_bird_id_get**](TransportMessageBirdApi.md#api_transport_message_bird_id_get) | **GET** /api/transport-message-bird/{id} | Retrieves a TransportMessageBird resource.
[**api_transport_message_bird_id_patch**](TransportMessageBirdApi.md#api_transport_message_bird_id_patch) | **PATCH** /api/transport-message-bird/{id} | Updates the TransportMessageBird resource.
[**api_transport_message_bird_id_put**](TransportMessageBirdApi.md#api_transport_message_bird_id_put) | **PUT** /api/transport-message-bird/{id} | Replaces the TransportMessageBird resource.
[**api_transport_message_bird_post**](TransportMessageBirdApi.md#api_transport_message_bird_post) | **POST** /api/transport-message-bird | Creates a TransportMessageBird resource.


# **api_transport_message_bird_get_collection**
> List[TransportMessageBirdGet] api_transport_message_bird_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportMessageBird resources.

Retrieves the collection of TransportMessageBird resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_message_bird_get import TransportMessageBirdGet
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
    api_instance = openapi_client.TransportMessageBirdApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportMessageBird resources.
        api_response = api_instance.api_transport_message_bird_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportMessageBirdApi->api_transport_message_bird_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMessageBirdApi->api_transport_message_bird_get_collection: %s\n" % e)
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

[**List[TransportMessageBirdGet]**](TransportMessageBirdGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMessageBird collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_message_bird_id_delete**
> api_transport_message_bird_id_delete(id)

Removes the TransportMessageBird resource.

Removes the TransportMessageBird resource.

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
    api_instance = openapi_client.TransportMessageBirdApi(api_client)
    id = 'id_example' # str | TransportMessageBird identifier

    try:
        # Removes the TransportMessageBird resource.
        api_instance.api_transport_message_bird_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportMessageBirdApi->api_transport_message_bird_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMessageBird identifier | 

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
**204** | TransportMessageBird resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_message_bird_id_get**
> TransportMessageBirdGet api_transport_message_bird_id_get(id)

Retrieves a TransportMessageBird resource.

Retrieves a TransportMessageBird resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_message_bird_get import TransportMessageBirdGet
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
    api_instance = openapi_client.TransportMessageBirdApi(api_client)
    id = 'id_example' # str | TransportMessageBird identifier

    try:
        # Retrieves a TransportMessageBird resource.
        api_response = api_instance.api_transport_message_bird_id_get(id)
        print("The response of TransportMessageBirdApi->api_transport_message_bird_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMessageBirdApi->api_transport_message_bird_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMessageBird identifier | 

### Return type

[**TransportMessageBirdGet**](TransportMessageBirdGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMessageBird resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_message_bird_id_patch**
> TransportMessageBirdGet api_transport_message_bird_id_patch(id, transport_message_bird_patch)

Updates the TransportMessageBird resource.

Updates the TransportMessageBird resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_message_bird_get import TransportMessageBirdGet
from openapi_client.models.transport_message_bird_patch import TransportMessageBirdPatch
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
    api_instance = openapi_client.TransportMessageBirdApi(api_client)
    id = 'id_example' # str | TransportMessageBird identifier
    transport_message_bird_patch = openapi_client.TransportMessageBirdPatch() # TransportMessageBirdPatch | The updated TransportMessageBird resource

    try:
        # Updates the TransportMessageBird resource.
        api_response = api_instance.api_transport_message_bird_id_patch(id, transport_message_bird_patch)
        print("The response of TransportMessageBirdApi->api_transport_message_bird_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMessageBirdApi->api_transport_message_bird_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMessageBird identifier | 
 **transport_message_bird_patch** | [**TransportMessageBirdPatch**](TransportMessageBirdPatch.md)| The updated TransportMessageBird resource | 

### Return type

[**TransportMessageBirdGet**](TransportMessageBirdGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMessageBird resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_message_bird_id_put**
> TransportMessageBirdGet api_transport_message_bird_id_put(id, transport_message_bird_put)

Replaces the TransportMessageBird resource.

Replaces the TransportMessageBird resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_message_bird_get import TransportMessageBirdGet
from openapi_client.models.transport_message_bird_put import TransportMessageBirdPut
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
    api_instance = openapi_client.TransportMessageBirdApi(api_client)
    id = 'id_example' # str | TransportMessageBird identifier
    transport_message_bird_put = openapi_client.TransportMessageBirdPut() # TransportMessageBirdPut | The updated TransportMessageBird resource

    try:
        # Replaces the TransportMessageBird resource.
        api_response = api_instance.api_transport_message_bird_id_put(id, transport_message_bird_put)
        print("The response of TransportMessageBirdApi->api_transport_message_bird_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMessageBirdApi->api_transport_message_bird_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMessageBird identifier | 
 **transport_message_bird_put** | [**TransportMessageBirdPut**](TransportMessageBirdPut.md)| The updated TransportMessageBird resource | 

### Return type

[**TransportMessageBirdGet**](TransportMessageBirdGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMessageBird resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_message_bird_post**
> TransportMessageBirdGet api_transport_message_bird_post(transport_message_bird_post)

Creates a TransportMessageBird resource.

Creates a TransportMessageBird resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_message_bird_get import TransportMessageBirdGet
from openapi_client.models.transport_message_bird_post import TransportMessageBirdPost
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
    api_instance = openapi_client.TransportMessageBirdApi(api_client)
    transport_message_bird_post = openapi_client.TransportMessageBirdPost() # TransportMessageBirdPost | The new TransportMessageBird resource

    try:
        # Creates a TransportMessageBird resource.
        api_response = api_instance.api_transport_message_bird_post(transport_message_bird_post)
        print("The response of TransportMessageBirdApi->api_transport_message_bird_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMessageBirdApi->api_transport_message_bird_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_message_bird_post** | [**TransportMessageBirdPost**](TransportMessageBirdPost.md)| The new TransportMessageBird resource | 

### Return type

[**TransportMessageBirdGet**](TransportMessageBirdGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportMessageBird resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

