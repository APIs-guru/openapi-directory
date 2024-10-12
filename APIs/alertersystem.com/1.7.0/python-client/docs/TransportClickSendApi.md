# openapi_client.TransportClickSendApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_click_send_get_collection**](TransportClickSendApi.md#api_transport_click_send_get_collection) | **GET** /api/transport-click-send | Retrieves the collection of TransportClickSend resources.
[**api_transport_click_send_id_delete**](TransportClickSendApi.md#api_transport_click_send_id_delete) | **DELETE** /api/transport-click-send/{id} | Removes the TransportClickSend resource.
[**api_transport_click_send_id_get**](TransportClickSendApi.md#api_transport_click_send_id_get) | **GET** /api/transport-click-send/{id} | Retrieves a TransportClickSend resource.
[**api_transport_click_send_id_patch**](TransportClickSendApi.md#api_transport_click_send_id_patch) | **PATCH** /api/transport-click-send/{id} | Updates the TransportClickSend resource.
[**api_transport_click_send_id_put**](TransportClickSendApi.md#api_transport_click_send_id_put) | **PUT** /api/transport-click-send/{id} | Replaces the TransportClickSend resource.
[**api_transport_click_send_post**](TransportClickSendApi.md#api_transport_click_send_post) | **POST** /api/transport-click-send | Creates a TransportClickSend resource.


# **api_transport_click_send_get_collection**
> List[TransportClickSendGet] api_transport_click_send_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportClickSend resources.

Retrieves the collection of TransportClickSend resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_click_send_get import TransportClickSendGet
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
    api_instance = openapi_client.TransportClickSendApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportClickSend resources.
        api_response = api_instance.api_transport_click_send_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportClickSendApi->api_transport_click_send_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportClickSendApi->api_transport_click_send_get_collection: %s\n" % e)
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

[**List[TransportClickSendGet]**](TransportClickSendGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportClickSend collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_click_send_id_delete**
> api_transport_click_send_id_delete(id)

Removes the TransportClickSend resource.

Removes the TransportClickSend resource.

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
    api_instance = openapi_client.TransportClickSendApi(api_client)
    id = 'id_example' # str | TransportClickSend identifier

    try:
        # Removes the TransportClickSend resource.
        api_instance.api_transport_click_send_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportClickSendApi->api_transport_click_send_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportClickSend identifier | 

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
**204** | TransportClickSend resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_click_send_id_get**
> TransportClickSendGet api_transport_click_send_id_get(id)

Retrieves a TransportClickSend resource.

Retrieves a TransportClickSend resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_click_send_get import TransportClickSendGet
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
    api_instance = openapi_client.TransportClickSendApi(api_client)
    id = 'id_example' # str | TransportClickSend identifier

    try:
        # Retrieves a TransportClickSend resource.
        api_response = api_instance.api_transport_click_send_id_get(id)
        print("The response of TransportClickSendApi->api_transport_click_send_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportClickSendApi->api_transport_click_send_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportClickSend identifier | 

### Return type

[**TransportClickSendGet**](TransportClickSendGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportClickSend resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_click_send_id_patch**
> TransportClickSendGet api_transport_click_send_id_patch(id, transport_click_send_patch)

Updates the TransportClickSend resource.

Updates the TransportClickSend resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_click_send_get import TransportClickSendGet
from openapi_client.models.transport_click_send_patch import TransportClickSendPatch
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
    api_instance = openapi_client.TransportClickSendApi(api_client)
    id = 'id_example' # str | TransportClickSend identifier
    transport_click_send_patch = openapi_client.TransportClickSendPatch() # TransportClickSendPatch | The updated TransportClickSend resource

    try:
        # Updates the TransportClickSend resource.
        api_response = api_instance.api_transport_click_send_id_patch(id, transport_click_send_patch)
        print("The response of TransportClickSendApi->api_transport_click_send_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportClickSendApi->api_transport_click_send_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportClickSend identifier | 
 **transport_click_send_patch** | [**TransportClickSendPatch**](TransportClickSendPatch.md)| The updated TransportClickSend resource | 

### Return type

[**TransportClickSendGet**](TransportClickSendGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportClickSend resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_click_send_id_put**
> TransportClickSendGet api_transport_click_send_id_put(id, transport_click_send_put)

Replaces the TransportClickSend resource.

Replaces the TransportClickSend resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_click_send_get import TransportClickSendGet
from openapi_client.models.transport_click_send_put import TransportClickSendPut
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
    api_instance = openapi_client.TransportClickSendApi(api_client)
    id = 'id_example' # str | TransportClickSend identifier
    transport_click_send_put = openapi_client.TransportClickSendPut() # TransportClickSendPut | The updated TransportClickSend resource

    try:
        # Replaces the TransportClickSend resource.
        api_response = api_instance.api_transport_click_send_id_put(id, transport_click_send_put)
        print("The response of TransportClickSendApi->api_transport_click_send_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportClickSendApi->api_transport_click_send_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportClickSend identifier | 
 **transport_click_send_put** | [**TransportClickSendPut**](TransportClickSendPut.md)| The updated TransportClickSend resource | 

### Return type

[**TransportClickSendGet**](TransportClickSendGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportClickSend resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_click_send_post**
> TransportClickSendGet api_transport_click_send_post(transport_click_send_post)

Creates a TransportClickSend resource.

Creates a TransportClickSend resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_click_send_get import TransportClickSendGet
from openapi_client.models.transport_click_send_post import TransportClickSendPost
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
    api_instance = openapi_client.TransportClickSendApi(api_client)
    transport_click_send_post = openapi_client.TransportClickSendPost() # TransportClickSendPost | The new TransportClickSend resource

    try:
        # Creates a TransportClickSend resource.
        api_response = api_instance.api_transport_click_send_post(transport_click_send_post)
        print("The response of TransportClickSendApi->api_transport_click_send_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportClickSendApi->api_transport_click_send_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_click_send_post** | [**TransportClickSendPost**](TransportClickSendPost.md)| The new TransportClickSend resource | 

### Return type

[**TransportClickSendGet**](TransportClickSendGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportClickSend resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

