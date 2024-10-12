# openapi_client.TransportGatewayApiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_gateway_api_get_collection**](TransportGatewayApiApi.md#api_transport_gateway_api_get_collection) | **GET** /api/transport-gateway-api | Retrieves the collection of TransportGatewayApi resources.
[**api_transport_gateway_api_id_delete**](TransportGatewayApiApi.md#api_transport_gateway_api_id_delete) | **DELETE** /api/transport-gateway-api/{id} | Removes the TransportGatewayApi resource.
[**api_transport_gateway_api_id_get**](TransportGatewayApiApi.md#api_transport_gateway_api_id_get) | **GET** /api/transport-gateway-api/{id} | Retrieves a TransportGatewayApi resource.
[**api_transport_gateway_api_id_patch**](TransportGatewayApiApi.md#api_transport_gateway_api_id_patch) | **PATCH** /api/transport-gateway-api/{id} | Updates the TransportGatewayApi resource.
[**api_transport_gateway_api_id_put**](TransportGatewayApiApi.md#api_transport_gateway_api_id_put) | **PUT** /api/transport-gateway-api/{id} | Replaces the TransportGatewayApi resource.
[**api_transport_gateway_api_post**](TransportGatewayApiApi.md#api_transport_gateway_api_post) | **POST** /api/transport-gateway-api | Creates a TransportGatewayApi resource.


# **api_transport_gateway_api_get_collection**
> List[TransportGatewayApiGet] api_transport_gateway_api_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportGatewayApi resources.

Retrieves the collection of TransportGatewayApi resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_gateway_api_get import TransportGatewayApiGet
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
    api_instance = openapi_client.TransportGatewayApiApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportGatewayApi resources.
        api_response = api_instance.api_transport_gateway_api_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportGatewayApiApi->api_transport_gateway_api_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGatewayApiApi->api_transport_gateway_api_get_collection: %s\n" % e)
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

[**List[TransportGatewayApiGet]**](TransportGatewayApiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGatewayApi collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_gateway_api_id_delete**
> api_transport_gateway_api_id_delete(id)

Removes the TransportGatewayApi resource.

Removes the TransportGatewayApi resource.

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
    api_instance = openapi_client.TransportGatewayApiApi(api_client)
    id = 'id_example' # str | TransportGatewayApi identifier

    try:
        # Removes the TransportGatewayApi resource.
        api_instance.api_transport_gateway_api_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportGatewayApiApi->api_transport_gateway_api_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGatewayApi identifier | 

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
**204** | TransportGatewayApi resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_gateway_api_id_get**
> TransportGatewayApiGet api_transport_gateway_api_id_get(id)

Retrieves a TransportGatewayApi resource.

Retrieves a TransportGatewayApi resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_gateway_api_get import TransportGatewayApiGet
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
    api_instance = openapi_client.TransportGatewayApiApi(api_client)
    id = 'id_example' # str | TransportGatewayApi identifier

    try:
        # Retrieves a TransportGatewayApi resource.
        api_response = api_instance.api_transport_gateway_api_id_get(id)
        print("The response of TransportGatewayApiApi->api_transport_gateway_api_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGatewayApiApi->api_transport_gateway_api_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGatewayApi identifier | 

### Return type

[**TransportGatewayApiGet**](TransportGatewayApiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGatewayApi resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_gateway_api_id_patch**
> TransportGatewayApiGet api_transport_gateway_api_id_patch(id, transport_gateway_api_patch)

Updates the TransportGatewayApi resource.

Updates the TransportGatewayApi resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_gateway_api_get import TransportGatewayApiGet
from openapi_client.models.transport_gateway_api_patch import TransportGatewayApiPatch
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
    api_instance = openapi_client.TransportGatewayApiApi(api_client)
    id = 'id_example' # str | TransportGatewayApi identifier
    transport_gateway_api_patch = openapi_client.TransportGatewayApiPatch() # TransportGatewayApiPatch | The updated TransportGatewayApi resource

    try:
        # Updates the TransportGatewayApi resource.
        api_response = api_instance.api_transport_gateway_api_id_patch(id, transport_gateway_api_patch)
        print("The response of TransportGatewayApiApi->api_transport_gateway_api_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGatewayApiApi->api_transport_gateway_api_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGatewayApi identifier | 
 **transport_gateway_api_patch** | [**TransportGatewayApiPatch**](TransportGatewayApiPatch.md)| The updated TransportGatewayApi resource | 

### Return type

[**TransportGatewayApiGet**](TransportGatewayApiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGatewayApi resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_gateway_api_id_put**
> TransportGatewayApiGet api_transport_gateway_api_id_put(id, transport_gateway_api_put)

Replaces the TransportGatewayApi resource.

Replaces the TransportGatewayApi resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_gateway_api_get import TransportGatewayApiGet
from openapi_client.models.transport_gateway_api_put import TransportGatewayApiPut
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
    api_instance = openapi_client.TransportGatewayApiApi(api_client)
    id = 'id_example' # str | TransportGatewayApi identifier
    transport_gateway_api_put = openapi_client.TransportGatewayApiPut() # TransportGatewayApiPut | The updated TransportGatewayApi resource

    try:
        # Replaces the TransportGatewayApi resource.
        api_response = api_instance.api_transport_gateway_api_id_put(id, transport_gateway_api_put)
        print("The response of TransportGatewayApiApi->api_transport_gateway_api_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGatewayApiApi->api_transport_gateway_api_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportGatewayApi identifier | 
 **transport_gateway_api_put** | [**TransportGatewayApiPut**](TransportGatewayApiPut.md)| The updated TransportGatewayApi resource | 

### Return type

[**TransportGatewayApiGet**](TransportGatewayApiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportGatewayApi resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_gateway_api_post**
> TransportGatewayApiGet api_transport_gateway_api_post(transport_gateway_api_post)

Creates a TransportGatewayApi resource.

Creates a TransportGatewayApi resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_gateway_api_get import TransportGatewayApiGet
from openapi_client.models.transport_gateway_api_post import TransportGatewayApiPost
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
    api_instance = openapi_client.TransportGatewayApiApi(api_client)
    transport_gateway_api_post = openapi_client.TransportGatewayApiPost() # TransportGatewayApiPost | The new TransportGatewayApi resource

    try:
        # Creates a TransportGatewayApi resource.
        api_response = api_instance.api_transport_gateway_api_post(transport_gateway_api_post)
        print("The response of TransportGatewayApiApi->api_transport_gateway_api_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportGatewayApiApi->api_transport_gateway_api_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_gateway_api_post** | [**TransportGatewayApiPost**](TransportGatewayApiPost.md)| The new TransportGatewayApi resource | 

### Return type

[**TransportGatewayApiGet**](TransportGatewayApiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportGatewayApi resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

