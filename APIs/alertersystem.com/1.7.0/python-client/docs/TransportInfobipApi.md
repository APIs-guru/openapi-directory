# openapi_client.TransportInfobipApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_infobip_get_collection**](TransportInfobipApi.md#api_transport_infobip_get_collection) | **GET** /api/transport-infobip | Retrieves the collection of TransportInfobip resources.
[**api_transport_infobip_id_delete**](TransportInfobipApi.md#api_transport_infobip_id_delete) | **DELETE** /api/transport-infobip/{id} | Removes the TransportInfobip resource.
[**api_transport_infobip_id_get**](TransportInfobipApi.md#api_transport_infobip_id_get) | **GET** /api/transport-infobip/{id} | Retrieves a TransportInfobip resource.
[**api_transport_infobip_id_patch**](TransportInfobipApi.md#api_transport_infobip_id_patch) | **PATCH** /api/transport-infobip/{id} | Updates the TransportInfobip resource.
[**api_transport_infobip_id_put**](TransportInfobipApi.md#api_transport_infobip_id_put) | **PUT** /api/transport-infobip/{id} | Replaces the TransportInfobip resource.
[**api_transport_infobip_post**](TransportInfobipApi.md#api_transport_infobip_post) | **POST** /api/transport-infobip | Creates a TransportInfobip resource.


# **api_transport_infobip_get_collection**
> List[TransportInfobipGet] api_transport_infobip_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportInfobip resources.

Retrieves the collection of TransportInfobip resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_infobip_get import TransportInfobipGet
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
    api_instance = openapi_client.TransportInfobipApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportInfobip resources.
        api_response = api_instance.api_transport_infobip_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportInfobipApi->api_transport_infobip_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportInfobipApi->api_transport_infobip_get_collection: %s\n" % e)
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

[**List[TransportInfobipGet]**](TransportInfobipGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportInfobip collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_infobip_id_delete**
> api_transport_infobip_id_delete(id)

Removes the TransportInfobip resource.

Removes the TransportInfobip resource.

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
    api_instance = openapi_client.TransportInfobipApi(api_client)
    id = 'id_example' # str | TransportInfobip identifier

    try:
        # Removes the TransportInfobip resource.
        api_instance.api_transport_infobip_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportInfobipApi->api_transport_infobip_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportInfobip identifier | 

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
**204** | TransportInfobip resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_infobip_id_get**
> TransportInfobipGet api_transport_infobip_id_get(id)

Retrieves a TransportInfobip resource.

Retrieves a TransportInfobip resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_infobip_get import TransportInfobipGet
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
    api_instance = openapi_client.TransportInfobipApi(api_client)
    id = 'id_example' # str | TransportInfobip identifier

    try:
        # Retrieves a TransportInfobip resource.
        api_response = api_instance.api_transport_infobip_id_get(id)
        print("The response of TransportInfobipApi->api_transport_infobip_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportInfobipApi->api_transport_infobip_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportInfobip identifier | 

### Return type

[**TransportInfobipGet**](TransportInfobipGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportInfobip resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_infobip_id_patch**
> TransportInfobipGet api_transport_infobip_id_patch(id, transport_infobip_patch)

Updates the TransportInfobip resource.

Updates the TransportInfobip resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_infobip_get import TransportInfobipGet
from openapi_client.models.transport_infobip_patch import TransportInfobipPatch
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
    api_instance = openapi_client.TransportInfobipApi(api_client)
    id = 'id_example' # str | TransportInfobip identifier
    transport_infobip_patch = openapi_client.TransportInfobipPatch() # TransportInfobipPatch | The updated TransportInfobip resource

    try:
        # Updates the TransportInfobip resource.
        api_response = api_instance.api_transport_infobip_id_patch(id, transport_infobip_patch)
        print("The response of TransportInfobipApi->api_transport_infobip_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportInfobipApi->api_transport_infobip_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportInfobip identifier | 
 **transport_infobip_patch** | [**TransportInfobipPatch**](TransportInfobipPatch.md)| The updated TransportInfobip resource | 

### Return type

[**TransportInfobipGet**](TransportInfobipGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportInfobip resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_infobip_id_put**
> TransportInfobipGet api_transport_infobip_id_put(id, transport_infobip_put)

Replaces the TransportInfobip resource.

Replaces the TransportInfobip resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_infobip_get import TransportInfobipGet
from openapi_client.models.transport_infobip_put import TransportInfobipPut
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
    api_instance = openapi_client.TransportInfobipApi(api_client)
    id = 'id_example' # str | TransportInfobip identifier
    transport_infobip_put = openapi_client.TransportInfobipPut() # TransportInfobipPut | The updated TransportInfobip resource

    try:
        # Replaces the TransportInfobip resource.
        api_response = api_instance.api_transport_infobip_id_put(id, transport_infobip_put)
        print("The response of TransportInfobipApi->api_transport_infobip_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportInfobipApi->api_transport_infobip_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportInfobip identifier | 
 **transport_infobip_put** | [**TransportInfobipPut**](TransportInfobipPut.md)| The updated TransportInfobip resource | 

### Return type

[**TransportInfobipGet**](TransportInfobipGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportInfobip resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_infobip_post**
> TransportInfobipGet api_transport_infobip_post(transport_infobip_post)

Creates a TransportInfobip resource.

Creates a TransportInfobip resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_infobip_get import TransportInfobipGet
from openapi_client.models.transport_infobip_post import TransportInfobipPost
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
    api_instance = openapi_client.TransportInfobipApi(api_client)
    transport_infobip_post = openapi_client.TransportInfobipPost() # TransportInfobipPost | The new TransportInfobip resource

    try:
        # Creates a TransportInfobip resource.
        api_response = api_instance.api_transport_infobip_post(transport_infobip_post)
        print("The response of TransportInfobipApi->api_transport_infobip_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportInfobipApi->api_transport_infobip_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_infobip_post** | [**TransportInfobipPost**](TransportInfobipPost.md)| The new TransportInfobip resource | 

### Return type

[**TransportInfobipGet**](TransportInfobipGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportInfobip resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

