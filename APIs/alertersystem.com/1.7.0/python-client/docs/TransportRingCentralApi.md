# openapi_client.TransportRingCentralApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_ring_central_get_collection**](TransportRingCentralApi.md#api_transport_ring_central_get_collection) | **GET** /api/transport-ring-central | Retrieves the collection of TransportRingCentral resources.
[**api_transport_ring_central_id_delete**](TransportRingCentralApi.md#api_transport_ring_central_id_delete) | **DELETE** /api/transport-ring-central/{id} | Removes the TransportRingCentral resource.
[**api_transport_ring_central_id_get**](TransportRingCentralApi.md#api_transport_ring_central_id_get) | **GET** /api/transport-ring-central/{id} | Retrieves a TransportRingCentral resource.
[**api_transport_ring_central_id_patch**](TransportRingCentralApi.md#api_transport_ring_central_id_patch) | **PATCH** /api/transport-ring-central/{id} | Updates the TransportRingCentral resource.
[**api_transport_ring_central_id_put**](TransportRingCentralApi.md#api_transport_ring_central_id_put) | **PUT** /api/transport-ring-central/{id} | Replaces the TransportRingCentral resource.
[**api_transport_ring_central_post**](TransportRingCentralApi.md#api_transport_ring_central_post) | **POST** /api/transport-ring-central | Creates a TransportRingCentral resource.


# **api_transport_ring_central_get_collection**
> List[TransportRingCentralGet] api_transport_ring_central_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportRingCentral resources.

Retrieves the collection of TransportRingCentral resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_ring_central_get import TransportRingCentralGet
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
    api_instance = openapi_client.TransportRingCentralApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportRingCentral resources.
        api_response = api_instance.api_transport_ring_central_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportRingCentralApi->api_transport_ring_central_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportRingCentralApi->api_transport_ring_central_get_collection: %s\n" % e)
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

[**List[TransportRingCentralGet]**](TransportRingCentralGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportRingCentral collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_ring_central_id_delete**
> api_transport_ring_central_id_delete(id)

Removes the TransportRingCentral resource.

Removes the TransportRingCentral resource.

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
    api_instance = openapi_client.TransportRingCentralApi(api_client)
    id = 'id_example' # str | TransportRingCentral identifier

    try:
        # Removes the TransportRingCentral resource.
        api_instance.api_transport_ring_central_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportRingCentralApi->api_transport_ring_central_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportRingCentral identifier | 

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
**204** | TransportRingCentral resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_ring_central_id_get**
> TransportRingCentralGet api_transport_ring_central_id_get(id)

Retrieves a TransportRingCentral resource.

Retrieves a TransportRingCentral resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_ring_central_get import TransportRingCentralGet
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
    api_instance = openapi_client.TransportRingCentralApi(api_client)
    id = 'id_example' # str | TransportRingCentral identifier

    try:
        # Retrieves a TransportRingCentral resource.
        api_response = api_instance.api_transport_ring_central_id_get(id)
        print("The response of TransportRingCentralApi->api_transport_ring_central_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportRingCentralApi->api_transport_ring_central_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportRingCentral identifier | 

### Return type

[**TransportRingCentralGet**](TransportRingCentralGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportRingCentral resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_ring_central_id_patch**
> TransportRingCentralGet api_transport_ring_central_id_patch(id, transport_ring_central_patch)

Updates the TransportRingCentral resource.

Updates the TransportRingCentral resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_ring_central_get import TransportRingCentralGet
from openapi_client.models.transport_ring_central_patch import TransportRingCentralPatch
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
    api_instance = openapi_client.TransportRingCentralApi(api_client)
    id = 'id_example' # str | TransportRingCentral identifier
    transport_ring_central_patch = openapi_client.TransportRingCentralPatch() # TransportRingCentralPatch | The updated TransportRingCentral resource

    try:
        # Updates the TransportRingCentral resource.
        api_response = api_instance.api_transport_ring_central_id_patch(id, transport_ring_central_patch)
        print("The response of TransportRingCentralApi->api_transport_ring_central_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportRingCentralApi->api_transport_ring_central_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportRingCentral identifier | 
 **transport_ring_central_patch** | [**TransportRingCentralPatch**](TransportRingCentralPatch.md)| The updated TransportRingCentral resource | 

### Return type

[**TransportRingCentralGet**](TransportRingCentralGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportRingCentral resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_ring_central_id_put**
> TransportRingCentralGet api_transport_ring_central_id_put(id, transport_ring_central_put)

Replaces the TransportRingCentral resource.

Replaces the TransportRingCentral resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_ring_central_get import TransportRingCentralGet
from openapi_client.models.transport_ring_central_put import TransportRingCentralPut
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
    api_instance = openapi_client.TransportRingCentralApi(api_client)
    id = 'id_example' # str | TransportRingCentral identifier
    transport_ring_central_put = openapi_client.TransportRingCentralPut() # TransportRingCentralPut | The updated TransportRingCentral resource

    try:
        # Replaces the TransportRingCentral resource.
        api_response = api_instance.api_transport_ring_central_id_put(id, transport_ring_central_put)
        print("The response of TransportRingCentralApi->api_transport_ring_central_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportRingCentralApi->api_transport_ring_central_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportRingCentral identifier | 
 **transport_ring_central_put** | [**TransportRingCentralPut**](TransportRingCentralPut.md)| The updated TransportRingCentral resource | 

### Return type

[**TransportRingCentralGet**](TransportRingCentralGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportRingCentral resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_ring_central_post**
> TransportRingCentralGet api_transport_ring_central_post(transport_ring_central_post)

Creates a TransportRingCentral resource.

Creates a TransportRingCentral resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_ring_central_get import TransportRingCentralGet
from openapi_client.models.transport_ring_central_post import TransportRingCentralPost
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
    api_instance = openapi_client.TransportRingCentralApi(api_client)
    transport_ring_central_post = openapi_client.TransportRingCentralPost() # TransportRingCentralPost | The new TransportRingCentral resource

    try:
        # Creates a TransportRingCentral resource.
        api_response = api_instance.api_transport_ring_central_post(transport_ring_central_post)
        print("The response of TransportRingCentralApi->api_transport_ring_central_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportRingCentralApi->api_transport_ring_central_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_ring_central_post** | [**TransportRingCentralPost**](TransportRingCentralPost.md)| The new TransportRingCentral resource | 

### Return type

[**TransportRingCentralGet**](TransportRingCentralGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportRingCentral resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

