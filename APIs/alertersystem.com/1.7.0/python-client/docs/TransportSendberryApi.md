# openapi_client.TransportSendberryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_sendberry_get_collection**](TransportSendberryApi.md#api_transport_sendberry_get_collection) | **GET** /api/transport-sendberry | Retrieves the collection of TransportSendberry resources.
[**api_transport_sendberry_id_delete**](TransportSendberryApi.md#api_transport_sendberry_id_delete) | **DELETE** /api/transport-sendberry/{id} | Removes the TransportSendberry resource.
[**api_transport_sendberry_id_get**](TransportSendberryApi.md#api_transport_sendberry_id_get) | **GET** /api/transport-sendberry/{id} | Retrieves a TransportSendberry resource.
[**api_transport_sendberry_id_patch**](TransportSendberryApi.md#api_transport_sendberry_id_patch) | **PATCH** /api/transport-sendberry/{id} | Updates the TransportSendberry resource.
[**api_transport_sendberry_id_put**](TransportSendberryApi.md#api_transport_sendberry_id_put) | **PUT** /api/transport-sendberry/{id} | Replaces the TransportSendberry resource.
[**api_transport_sendberry_post**](TransportSendberryApi.md#api_transport_sendberry_post) | **POST** /api/transport-sendberry | Creates a TransportSendberry resource.


# **api_transport_sendberry_get_collection**
> List[TransportSendberryGet] api_transport_sendberry_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSendberry resources.

Retrieves the collection of TransportSendberry resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sendberry_get import TransportSendberryGet
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
    api_instance = openapi_client.TransportSendberryApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSendberry resources.
        api_response = api_instance.api_transport_sendberry_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSendberryApi->api_transport_sendberry_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSendberryApi->api_transport_sendberry_get_collection: %s\n" % e)
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

[**List[TransportSendberryGet]**](TransportSendberryGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSendberry collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sendberry_id_delete**
> api_transport_sendberry_id_delete(id)

Removes the TransportSendberry resource.

Removes the TransportSendberry resource.

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
    api_instance = openapi_client.TransportSendberryApi(api_client)
    id = 'id_example' # str | TransportSendberry identifier

    try:
        # Removes the TransportSendberry resource.
        api_instance.api_transport_sendberry_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSendberryApi->api_transport_sendberry_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSendberry identifier | 

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
**204** | TransportSendberry resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sendberry_id_get**
> TransportSendberryGet api_transport_sendberry_id_get(id)

Retrieves a TransportSendberry resource.

Retrieves a TransportSendberry resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sendberry_get import TransportSendberryGet
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
    api_instance = openapi_client.TransportSendberryApi(api_client)
    id = 'id_example' # str | TransportSendberry identifier

    try:
        # Retrieves a TransportSendberry resource.
        api_response = api_instance.api_transport_sendberry_id_get(id)
        print("The response of TransportSendberryApi->api_transport_sendberry_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSendberryApi->api_transport_sendberry_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSendberry identifier | 

### Return type

[**TransportSendberryGet**](TransportSendberryGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSendberry resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sendberry_id_patch**
> TransportSendberryGet api_transport_sendberry_id_patch(id, transport_sendberry_patch)

Updates the TransportSendberry resource.

Updates the TransportSendberry resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sendberry_get import TransportSendberryGet
from openapi_client.models.transport_sendberry_patch import TransportSendberryPatch
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
    api_instance = openapi_client.TransportSendberryApi(api_client)
    id = 'id_example' # str | TransportSendberry identifier
    transport_sendberry_patch = openapi_client.TransportSendberryPatch() # TransportSendberryPatch | The updated TransportSendberry resource

    try:
        # Updates the TransportSendberry resource.
        api_response = api_instance.api_transport_sendberry_id_patch(id, transport_sendberry_patch)
        print("The response of TransportSendberryApi->api_transport_sendberry_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSendberryApi->api_transport_sendberry_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSendberry identifier | 
 **transport_sendberry_patch** | [**TransportSendberryPatch**](TransportSendberryPatch.md)| The updated TransportSendberry resource | 

### Return type

[**TransportSendberryGet**](TransportSendberryGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSendberry resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sendberry_id_put**
> TransportSendberryGet api_transport_sendberry_id_put(id, transport_sendberry_put)

Replaces the TransportSendberry resource.

Replaces the TransportSendberry resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sendberry_get import TransportSendberryGet
from openapi_client.models.transport_sendberry_put import TransportSendberryPut
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
    api_instance = openapi_client.TransportSendberryApi(api_client)
    id = 'id_example' # str | TransportSendberry identifier
    transport_sendberry_put = openapi_client.TransportSendberryPut() # TransportSendberryPut | The updated TransportSendberry resource

    try:
        # Replaces the TransportSendberry resource.
        api_response = api_instance.api_transport_sendberry_id_put(id, transport_sendberry_put)
        print("The response of TransportSendberryApi->api_transport_sendberry_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSendberryApi->api_transport_sendberry_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSendberry identifier | 
 **transport_sendberry_put** | [**TransportSendberryPut**](TransportSendberryPut.md)| The updated TransportSendberry resource | 

### Return type

[**TransportSendberryGet**](TransportSendberryGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSendberry resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sendberry_post**
> TransportSendberryGet api_transport_sendberry_post(transport_sendberry_post)

Creates a TransportSendberry resource.

Creates a TransportSendberry resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sendberry_get import TransportSendberryGet
from openapi_client.models.transport_sendberry_post import TransportSendberryPost
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
    api_instance = openapi_client.TransportSendberryApi(api_client)
    transport_sendberry_post = openapi_client.TransportSendberryPost() # TransportSendberryPost | The new TransportSendberry resource

    try:
        # Creates a TransportSendberry resource.
        api_response = api_instance.api_transport_sendberry_post(transport_sendberry_post)
        print("The response of TransportSendberryApi->api_transport_sendberry_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSendberryApi->api_transport_sendberry_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_sendberry_post** | [**TransportSendberryPost**](TransportSendberryPost.md)| The new TransportSendberry resource | 

### Return type

[**TransportSendberryGet**](TransportSendberryGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSendberry resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

