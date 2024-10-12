# openapi_client.TransportBandwidthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_bandwidth_get_collection**](TransportBandwidthApi.md#api_transport_bandwidth_get_collection) | **GET** /api/transport-bandwidth | Retrieves the collection of TransportBandwidth resources.
[**api_transport_bandwidth_id_delete**](TransportBandwidthApi.md#api_transport_bandwidth_id_delete) | **DELETE** /api/transport-bandwidth/{id} | Removes the TransportBandwidth resource.
[**api_transport_bandwidth_id_get**](TransportBandwidthApi.md#api_transport_bandwidth_id_get) | **GET** /api/transport-bandwidth/{id} | Retrieves a TransportBandwidth resource.
[**api_transport_bandwidth_id_patch**](TransportBandwidthApi.md#api_transport_bandwidth_id_patch) | **PATCH** /api/transport-bandwidth/{id} | Updates the TransportBandwidth resource.
[**api_transport_bandwidth_id_put**](TransportBandwidthApi.md#api_transport_bandwidth_id_put) | **PUT** /api/transport-bandwidth/{id} | Replaces the TransportBandwidth resource.
[**api_transport_bandwidth_post**](TransportBandwidthApi.md#api_transport_bandwidth_post) | **POST** /api/transport-bandwidth | Creates a TransportBandwidth resource.


# **api_transport_bandwidth_get_collection**
> List[TransportBandwidthGet] api_transport_bandwidth_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportBandwidth resources.

Retrieves the collection of TransportBandwidth resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_bandwidth_get import TransportBandwidthGet
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
    api_instance = openapi_client.TransportBandwidthApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportBandwidth resources.
        api_response = api_instance.api_transport_bandwidth_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportBandwidthApi->api_transport_bandwidth_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportBandwidthApi->api_transport_bandwidth_get_collection: %s\n" % e)
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

[**List[TransportBandwidthGet]**](TransportBandwidthGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportBandwidth collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_bandwidth_id_delete**
> api_transport_bandwidth_id_delete(id)

Removes the TransportBandwidth resource.

Removes the TransportBandwidth resource.

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
    api_instance = openapi_client.TransportBandwidthApi(api_client)
    id = 'id_example' # str | TransportBandwidth identifier

    try:
        # Removes the TransportBandwidth resource.
        api_instance.api_transport_bandwidth_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportBandwidthApi->api_transport_bandwidth_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportBandwidth identifier | 

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
**204** | TransportBandwidth resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_bandwidth_id_get**
> TransportBandwidthGet api_transport_bandwidth_id_get(id)

Retrieves a TransportBandwidth resource.

Retrieves a TransportBandwidth resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_bandwidth_get import TransportBandwidthGet
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
    api_instance = openapi_client.TransportBandwidthApi(api_client)
    id = 'id_example' # str | TransportBandwidth identifier

    try:
        # Retrieves a TransportBandwidth resource.
        api_response = api_instance.api_transport_bandwidth_id_get(id)
        print("The response of TransportBandwidthApi->api_transport_bandwidth_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportBandwidthApi->api_transport_bandwidth_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportBandwidth identifier | 

### Return type

[**TransportBandwidthGet**](TransportBandwidthGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportBandwidth resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_bandwidth_id_patch**
> TransportBandwidthGet api_transport_bandwidth_id_patch(id, transport_bandwidth_patch)

Updates the TransportBandwidth resource.

Updates the TransportBandwidth resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_bandwidth_get import TransportBandwidthGet
from openapi_client.models.transport_bandwidth_patch import TransportBandwidthPatch
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
    api_instance = openapi_client.TransportBandwidthApi(api_client)
    id = 'id_example' # str | TransportBandwidth identifier
    transport_bandwidth_patch = openapi_client.TransportBandwidthPatch() # TransportBandwidthPatch | The updated TransportBandwidth resource

    try:
        # Updates the TransportBandwidth resource.
        api_response = api_instance.api_transport_bandwidth_id_patch(id, transport_bandwidth_patch)
        print("The response of TransportBandwidthApi->api_transport_bandwidth_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportBandwidthApi->api_transport_bandwidth_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportBandwidth identifier | 
 **transport_bandwidth_patch** | [**TransportBandwidthPatch**](TransportBandwidthPatch.md)| The updated TransportBandwidth resource | 

### Return type

[**TransportBandwidthGet**](TransportBandwidthGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportBandwidth resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_bandwidth_id_put**
> TransportBandwidthGet api_transport_bandwidth_id_put(id, transport_bandwidth_put)

Replaces the TransportBandwidth resource.

Replaces the TransportBandwidth resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_bandwidth_get import TransportBandwidthGet
from openapi_client.models.transport_bandwidth_put import TransportBandwidthPut
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
    api_instance = openapi_client.TransportBandwidthApi(api_client)
    id = 'id_example' # str | TransportBandwidth identifier
    transport_bandwidth_put = openapi_client.TransportBandwidthPut() # TransportBandwidthPut | The updated TransportBandwidth resource

    try:
        # Replaces the TransportBandwidth resource.
        api_response = api_instance.api_transport_bandwidth_id_put(id, transport_bandwidth_put)
        print("The response of TransportBandwidthApi->api_transport_bandwidth_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportBandwidthApi->api_transport_bandwidth_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportBandwidth identifier | 
 **transport_bandwidth_put** | [**TransportBandwidthPut**](TransportBandwidthPut.md)| The updated TransportBandwidth resource | 

### Return type

[**TransportBandwidthGet**](TransportBandwidthGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportBandwidth resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_bandwidth_post**
> TransportBandwidthGet api_transport_bandwidth_post(transport_bandwidth_post)

Creates a TransportBandwidth resource.

Creates a TransportBandwidth resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_bandwidth_get import TransportBandwidthGet
from openapi_client.models.transport_bandwidth_post import TransportBandwidthPost
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
    api_instance = openapi_client.TransportBandwidthApi(api_client)
    transport_bandwidth_post = openapi_client.TransportBandwidthPost() # TransportBandwidthPost | The new TransportBandwidth resource

    try:
        # Creates a TransportBandwidth resource.
        api_response = api_instance.api_transport_bandwidth_post(transport_bandwidth_post)
        print("The response of TransportBandwidthApi->api_transport_bandwidth_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportBandwidthApi->api_transport_bandwidth_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_bandwidth_post** | [**TransportBandwidthPost**](TransportBandwidthPost.md)| The new TransportBandwidth resource | 

### Return type

[**TransportBandwidthGet**](TransportBandwidthGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportBandwidth resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

