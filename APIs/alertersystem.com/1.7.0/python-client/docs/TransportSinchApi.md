# openapi_client.TransportSinchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_sinch_get_collection**](TransportSinchApi.md#api_transport_sinch_get_collection) | **GET** /api/transport-sinch | Retrieves the collection of TransportSinch resources.
[**api_transport_sinch_id_delete**](TransportSinchApi.md#api_transport_sinch_id_delete) | **DELETE** /api/transport-sinch/{id} | Removes the TransportSinch resource.
[**api_transport_sinch_id_get**](TransportSinchApi.md#api_transport_sinch_id_get) | **GET** /api/transport-sinch/{id} | Retrieves a TransportSinch resource.
[**api_transport_sinch_id_patch**](TransportSinchApi.md#api_transport_sinch_id_patch) | **PATCH** /api/transport-sinch/{id} | Updates the TransportSinch resource.
[**api_transport_sinch_id_put**](TransportSinchApi.md#api_transport_sinch_id_put) | **PUT** /api/transport-sinch/{id} | Replaces the TransportSinch resource.
[**api_transport_sinch_post**](TransportSinchApi.md#api_transport_sinch_post) | **POST** /api/transport-sinch | Creates a TransportSinch resource.


# **api_transport_sinch_get_collection**
> List[TransportSinchGet] api_transport_sinch_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSinch resources.

Retrieves the collection of TransportSinch resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sinch_get import TransportSinchGet
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
    api_instance = openapi_client.TransportSinchApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSinch resources.
        api_response = api_instance.api_transport_sinch_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSinchApi->api_transport_sinch_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSinchApi->api_transport_sinch_get_collection: %s\n" % e)
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

[**List[TransportSinchGet]**](TransportSinchGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSinch collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sinch_id_delete**
> api_transport_sinch_id_delete(id)

Removes the TransportSinch resource.

Removes the TransportSinch resource.

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
    api_instance = openapi_client.TransportSinchApi(api_client)
    id = 'id_example' # str | TransportSinch identifier

    try:
        # Removes the TransportSinch resource.
        api_instance.api_transport_sinch_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSinchApi->api_transport_sinch_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSinch identifier | 

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
**204** | TransportSinch resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sinch_id_get**
> TransportSinchGet api_transport_sinch_id_get(id)

Retrieves a TransportSinch resource.

Retrieves a TransportSinch resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sinch_get import TransportSinchGet
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
    api_instance = openapi_client.TransportSinchApi(api_client)
    id = 'id_example' # str | TransportSinch identifier

    try:
        # Retrieves a TransportSinch resource.
        api_response = api_instance.api_transport_sinch_id_get(id)
        print("The response of TransportSinchApi->api_transport_sinch_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSinchApi->api_transport_sinch_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSinch identifier | 

### Return type

[**TransportSinchGet**](TransportSinchGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSinch resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sinch_id_patch**
> TransportSinchGet api_transport_sinch_id_patch(id, transport_sinch_patch)

Updates the TransportSinch resource.

Updates the TransportSinch resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sinch_get import TransportSinchGet
from openapi_client.models.transport_sinch_patch import TransportSinchPatch
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
    api_instance = openapi_client.TransportSinchApi(api_client)
    id = 'id_example' # str | TransportSinch identifier
    transport_sinch_patch = openapi_client.TransportSinchPatch() # TransportSinchPatch | The updated TransportSinch resource

    try:
        # Updates the TransportSinch resource.
        api_response = api_instance.api_transport_sinch_id_patch(id, transport_sinch_patch)
        print("The response of TransportSinchApi->api_transport_sinch_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSinchApi->api_transport_sinch_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSinch identifier | 
 **transport_sinch_patch** | [**TransportSinchPatch**](TransportSinchPatch.md)| The updated TransportSinch resource | 

### Return type

[**TransportSinchGet**](TransportSinchGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSinch resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sinch_id_put**
> TransportSinchGet api_transport_sinch_id_put(id, transport_sinch_put)

Replaces the TransportSinch resource.

Replaces the TransportSinch resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sinch_get import TransportSinchGet
from openapi_client.models.transport_sinch_put import TransportSinchPut
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
    api_instance = openapi_client.TransportSinchApi(api_client)
    id = 'id_example' # str | TransportSinch identifier
    transport_sinch_put = openapi_client.TransportSinchPut() # TransportSinchPut | The updated TransportSinch resource

    try:
        # Replaces the TransportSinch resource.
        api_response = api_instance.api_transport_sinch_id_put(id, transport_sinch_put)
        print("The response of TransportSinchApi->api_transport_sinch_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSinchApi->api_transport_sinch_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSinch identifier | 
 **transport_sinch_put** | [**TransportSinchPut**](TransportSinchPut.md)| The updated TransportSinch resource | 

### Return type

[**TransportSinchGet**](TransportSinchGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSinch resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sinch_post**
> TransportSinchGet api_transport_sinch_post(transport_sinch_post)

Creates a TransportSinch resource.

Creates a TransportSinch resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sinch_get import TransportSinchGet
from openapi_client.models.transport_sinch_post import TransportSinchPost
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
    api_instance = openapi_client.TransportSinchApi(api_client)
    transport_sinch_post = openapi_client.TransportSinchPost() # TransportSinchPost | The new TransportSinch resource

    try:
        # Creates a TransportSinch resource.
        api_response = api_instance.api_transport_sinch_post(transport_sinch_post)
        print("The response of TransportSinchApi->api_transport_sinch_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSinchApi->api_transport_sinch_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_sinch_post** | [**TransportSinchPost**](TransportSinchPost.md)| The new TransportSinch resource | 

### Return type

[**TransportSinchGet**](TransportSinchGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSinch resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

