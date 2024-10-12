# openapi_client.TransportGitterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_gitter_get_collection**](TransportGitterApi.md#api_transport_gitter_get_collection) | **GET** /api/transport-gitter | Retrieves the collection of TransportGitter resources.
[**api_transport_gitter_id_delete**](TransportGitterApi.md#api_transport_gitter_id_delete) | **DELETE** /api/transport-gitter/{id} | Removes the TransportGitter resource.
[**api_transport_gitter_id_get**](TransportGitterApi.md#api_transport_gitter_id_get) | **GET** /api/transport-gitter/{id} | Retrieves a TransportGitter resource.
[**api_transport_gitter_id_patch**](TransportGitterApi.md#api_transport_gitter_id_patch) | **PATCH** /api/transport-gitter/{id} | Updates the TransportGitter resource.
[**api_transport_gitter_id_put**](TransportGitterApi.md#api_transport_gitter_id_put) | **PUT** /api/transport-gitter/{id} | Replaces the TransportGitter resource.
[**api_transport_gitter_post**](TransportGitterApi.md#api_transport_gitter_post) | **POST** /api/transport-gitter | Creates a TransportGitter resource.


# **api_transport_gitter_get_collection**
> List[TransportGitterGet] api_transport_gitter_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportGitter resources.

Retrieves the collection of TransportGitter resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_gitter_get import TransportGitterGet
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
    api_instance = openapi_client.TransportGitterApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportGitter resources.
        api_response = api_instance.api_transport_gitter_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportGitterApi->api_transport_gitter_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGitterApi->api_transport_gitter_get_collection: %s\n" % e)
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

[**List[TransportGitterGet]**](TransportGitterGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGitter collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_gitter_id_delete**
> api_transport_gitter_id_delete(id)

Removes the TransportGitter resource.

Removes the TransportGitter resource.

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
    api_instance = openapi_client.TransportGitterApi(api_client)
    id = 'id_example' # str | TransportGitter identifier

    try:
        # Removes the TransportGitter resource.
        api_instance.api_transport_gitter_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportGitterApi->api_transport_gitter_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGitter identifier | 

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
**204** | TransportGitter resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_gitter_id_get**
> TransportGitterGet api_transport_gitter_id_get(id)

Retrieves a TransportGitter resource.

Retrieves a TransportGitter resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_gitter_get import TransportGitterGet
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
    api_instance = openapi_client.TransportGitterApi(api_client)
    id = 'id_example' # str | TransportGitter identifier

    try:
        # Retrieves a TransportGitter resource.
        api_response = api_instance.api_transport_gitter_id_get(id)
        print("The response of TransportGitterApi->api_transport_gitter_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGitterApi->api_transport_gitter_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGitter identifier | 

### Return type

[**TransportGitterGet**](TransportGitterGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGitter resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_gitter_id_patch**
> TransportGitterGet api_transport_gitter_id_patch(id, transport_gitter_patch)

Updates the TransportGitter resource.

Updates the TransportGitter resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_gitter_get import TransportGitterGet
from openapi_client.models.transport_gitter_patch import TransportGitterPatch
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
    api_instance = openapi_client.TransportGitterApi(api_client)
    id = 'id_example' # str | TransportGitter identifier
    transport_gitter_patch = openapi_client.TransportGitterPatch() # TransportGitterPatch | The updated TransportGitter resource

    try:
        # Updates the TransportGitter resource.
        api_response = api_instance.api_transport_gitter_id_patch(id, transport_gitter_patch)
        print("The response of TransportGitterApi->api_transport_gitter_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGitterApi->api_transport_gitter_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGitter identifier | 
 **transport_gitter_patch** | [**TransportGitterPatch**](TransportGitterPatch.md)| The updated TransportGitter resource | 

### Return type

[**TransportGitterGet**](TransportGitterGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGitter resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_gitter_id_put**
> TransportGitterGet api_transport_gitter_id_put(id, transport_gitter_put)

Replaces the TransportGitter resource.

Replaces the TransportGitter resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_gitter_get import TransportGitterGet
from openapi_client.models.transport_gitter_put import TransportGitterPut
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
    api_instance = openapi_client.TransportGitterApi(api_client)
    id = 'id_example' # str | TransportGitter identifier
    transport_gitter_put = openapi_client.TransportGitterPut() # TransportGitterPut | The updated TransportGitter resource

    try:
        # Replaces the TransportGitter resource.
        api_response = api_instance.api_transport_gitter_id_put(id, transport_gitter_put)
        print("The response of TransportGitterApi->api_transport_gitter_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGitterApi->api_transport_gitter_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGitter identifier | 
 **transport_gitter_put** | [**TransportGitterPut**](TransportGitterPut.md)| The updated TransportGitter resource | 

### Return type

[**TransportGitterGet**](TransportGitterGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGitter resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_gitter_post**
> TransportGitterGet api_transport_gitter_post(transport_gitter_post)

Creates a TransportGitter resource.

Creates a TransportGitter resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_gitter_get import TransportGitterGet
from openapi_client.models.transport_gitter_post import TransportGitterPost
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
    api_instance = openapi_client.TransportGitterApi(api_client)
    transport_gitter_post = openapi_client.TransportGitterPost() # TransportGitterPost | The new TransportGitter resource

    try:
        # Creates a TransportGitter resource.
        api_response = api_instance.api_transport_gitter_post(transport_gitter_post)
        print("The response of TransportGitterApi->api_transport_gitter_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGitterApi->api_transport_gitter_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_gitter_post** | [**TransportGitterPost**](TransportGitterPost.md)| The new TransportGitter resource | 

### Return type

[**TransportGitterGet**](TransportGitterGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportGitter resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

