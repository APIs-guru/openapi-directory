# openapi_client.TransportTelnyxApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_telnyx_get_collection**](TransportTelnyxApi.md#api_transport_telnyx_get_collection) | **GET** /api/transport-telnyx | Retrieves the collection of TransportTelnyx resources.
[**api_transport_telnyx_id_delete**](TransportTelnyxApi.md#api_transport_telnyx_id_delete) | **DELETE** /api/transport-telnyx/{id} | Removes the TransportTelnyx resource.
[**api_transport_telnyx_id_get**](TransportTelnyxApi.md#api_transport_telnyx_id_get) | **GET** /api/transport-telnyx/{id} | Retrieves a TransportTelnyx resource.
[**api_transport_telnyx_id_patch**](TransportTelnyxApi.md#api_transport_telnyx_id_patch) | **PATCH** /api/transport-telnyx/{id} | Updates the TransportTelnyx resource.
[**api_transport_telnyx_id_put**](TransportTelnyxApi.md#api_transport_telnyx_id_put) | **PUT** /api/transport-telnyx/{id} | Replaces the TransportTelnyx resource.
[**api_transport_telnyx_post**](TransportTelnyxApi.md#api_transport_telnyx_post) | **POST** /api/transport-telnyx | Creates a TransportTelnyx resource.


# **api_transport_telnyx_get_collection**
> List[TransportTelnyxGet] api_transport_telnyx_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportTelnyx resources.

Retrieves the collection of TransportTelnyx resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_telnyx_get import TransportTelnyxGet
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
    api_instance = openapi_client.TransportTelnyxApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportTelnyx resources.
        api_response = api_instance.api_transport_telnyx_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportTelnyxApi->api_transport_telnyx_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTelnyxApi->api_transport_telnyx_get_collection: %s\n" % e)
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

[**List[TransportTelnyxGet]**](TransportTelnyxGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTelnyx collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_telnyx_id_delete**
> api_transport_telnyx_id_delete(id)

Removes the TransportTelnyx resource.

Removes the TransportTelnyx resource.

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
    api_instance = openapi_client.TransportTelnyxApi(api_client)
    id = 'id_example' # str | TransportTelnyx identifier

    try:
        # Removes the TransportTelnyx resource.
        api_instance.api_transport_telnyx_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportTelnyxApi->api_transport_telnyx_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTelnyx identifier | 

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
**204** | TransportTelnyx resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_telnyx_id_get**
> TransportTelnyxGet api_transport_telnyx_id_get(id)

Retrieves a TransportTelnyx resource.

Retrieves a TransportTelnyx resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_telnyx_get import TransportTelnyxGet
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
    api_instance = openapi_client.TransportTelnyxApi(api_client)
    id = 'id_example' # str | TransportTelnyx identifier

    try:
        # Retrieves a TransportTelnyx resource.
        api_response = api_instance.api_transport_telnyx_id_get(id)
        print("The response of TransportTelnyxApi->api_transport_telnyx_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTelnyxApi->api_transport_telnyx_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTelnyx identifier | 

### Return type

[**TransportTelnyxGet**](TransportTelnyxGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTelnyx resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_telnyx_id_patch**
> TransportTelnyxGet api_transport_telnyx_id_patch(id, transport_telnyx_patch)

Updates the TransportTelnyx resource.

Updates the TransportTelnyx resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_telnyx_get import TransportTelnyxGet
from openapi_client.models.transport_telnyx_patch import TransportTelnyxPatch
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
    api_instance = openapi_client.TransportTelnyxApi(api_client)
    id = 'id_example' # str | TransportTelnyx identifier
    transport_telnyx_patch = openapi_client.TransportTelnyxPatch() # TransportTelnyxPatch | The updated TransportTelnyx resource

    try:
        # Updates the TransportTelnyx resource.
        api_response = api_instance.api_transport_telnyx_id_patch(id, transport_telnyx_patch)
        print("The response of TransportTelnyxApi->api_transport_telnyx_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTelnyxApi->api_transport_telnyx_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTelnyx identifier | 
 **transport_telnyx_patch** | [**TransportTelnyxPatch**](TransportTelnyxPatch.md)| The updated TransportTelnyx resource | 

### Return type

[**TransportTelnyxGet**](TransportTelnyxGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTelnyx resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_telnyx_id_put**
> TransportTelnyxGet api_transport_telnyx_id_put(id, transport_telnyx_put)

Replaces the TransportTelnyx resource.

Replaces the TransportTelnyx resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_telnyx_get import TransportTelnyxGet
from openapi_client.models.transport_telnyx_put import TransportTelnyxPut
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
    api_instance = openapi_client.TransportTelnyxApi(api_client)
    id = 'id_example' # str | TransportTelnyx identifier
    transport_telnyx_put = openapi_client.TransportTelnyxPut() # TransportTelnyxPut | The updated TransportTelnyx resource

    try:
        # Replaces the TransportTelnyx resource.
        api_response = api_instance.api_transport_telnyx_id_put(id, transport_telnyx_put)
        print("The response of TransportTelnyxApi->api_transport_telnyx_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTelnyxApi->api_transport_telnyx_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTelnyx identifier | 
 **transport_telnyx_put** | [**TransportTelnyxPut**](TransportTelnyxPut.md)| The updated TransportTelnyx resource | 

### Return type

[**TransportTelnyxGet**](TransportTelnyxGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTelnyx resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_telnyx_post**
> TransportTelnyxGet api_transport_telnyx_post(transport_telnyx_post)

Creates a TransportTelnyx resource.

Creates a TransportTelnyx resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_telnyx_get import TransportTelnyxGet
from openapi_client.models.transport_telnyx_post import TransportTelnyxPost
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
    api_instance = openapi_client.TransportTelnyxApi(api_client)
    transport_telnyx_post = openapi_client.TransportTelnyxPost() # TransportTelnyxPost | The new TransportTelnyx resource

    try:
        # Creates a TransportTelnyx resource.
        api_response = api_instance.api_transport_telnyx_post(transport_telnyx_post)
        print("The response of TransportTelnyxApi->api_transport_telnyx_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTelnyxApi->api_transport_telnyx_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_telnyx_post** | [**TransportTelnyxPost**](TransportTelnyxPost.md)| The new TransportTelnyx resource | 

### Return type

[**TransportTelnyxGet**](TransportTelnyxGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportTelnyx resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

