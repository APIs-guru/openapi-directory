# openapi_client.TransportPlivoApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_plivo_get_collection**](TransportPlivoApi.md#api_transport_plivo_get_collection) | **GET** /api/transport-plivo | Retrieves the collection of TransportPlivo resources.
[**api_transport_plivo_id_delete**](TransportPlivoApi.md#api_transport_plivo_id_delete) | **DELETE** /api/transport-plivo/{id} | Removes the TransportPlivo resource.
[**api_transport_plivo_id_get**](TransportPlivoApi.md#api_transport_plivo_id_get) | **GET** /api/transport-plivo/{id} | Retrieves a TransportPlivo resource.
[**api_transport_plivo_id_patch**](TransportPlivoApi.md#api_transport_plivo_id_patch) | **PATCH** /api/transport-plivo/{id} | Updates the TransportPlivo resource.
[**api_transport_plivo_id_put**](TransportPlivoApi.md#api_transport_plivo_id_put) | **PUT** /api/transport-plivo/{id} | Replaces the TransportPlivo resource.
[**api_transport_plivo_post**](TransportPlivoApi.md#api_transport_plivo_post) | **POST** /api/transport-plivo | Creates a TransportPlivo resource.


# **api_transport_plivo_get_collection**
> List[TransportPlivoGet] api_transport_plivo_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportPlivo resources.

Retrieves the collection of TransportPlivo resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_plivo_get import TransportPlivoGet
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
    api_instance = openapi_client.TransportPlivoApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportPlivo resources.
        api_response = api_instance.api_transport_plivo_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportPlivoApi->api_transport_plivo_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPlivoApi->api_transport_plivo_get_collection: %s\n" % e)
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

[**List[TransportPlivoGet]**](TransportPlivoGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPlivo collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_plivo_id_delete**
> api_transport_plivo_id_delete(id)

Removes the TransportPlivo resource.

Removes the TransportPlivo resource.

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
    api_instance = openapi_client.TransportPlivoApi(api_client)
    id = 'id_example' # str | TransportPlivo identifier

    try:
        # Removes the TransportPlivo resource.
        api_instance.api_transport_plivo_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportPlivoApi->api_transport_plivo_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPlivo identifier | 

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
**204** | TransportPlivo resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_plivo_id_get**
> TransportPlivoGet api_transport_plivo_id_get(id)

Retrieves a TransportPlivo resource.

Retrieves a TransportPlivo resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_plivo_get import TransportPlivoGet
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
    api_instance = openapi_client.TransportPlivoApi(api_client)
    id = 'id_example' # str | TransportPlivo identifier

    try:
        # Retrieves a TransportPlivo resource.
        api_response = api_instance.api_transport_plivo_id_get(id)
        print("The response of TransportPlivoApi->api_transport_plivo_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPlivoApi->api_transport_plivo_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPlivo identifier | 

### Return type

[**TransportPlivoGet**](TransportPlivoGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPlivo resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_plivo_id_patch**
> TransportPlivoGet api_transport_plivo_id_patch(id, transport_plivo_patch)

Updates the TransportPlivo resource.

Updates the TransportPlivo resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_plivo_get import TransportPlivoGet
from openapi_client.models.transport_plivo_patch import TransportPlivoPatch
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
    api_instance = openapi_client.TransportPlivoApi(api_client)
    id = 'id_example' # str | TransportPlivo identifier
    transport_plivo_patch = openapi_client.TransportPlivoPatch() # TransportPlivoPatch | The updated TransportPlivo resource

    try:
        # Updates the TransportPlivo resource.
        api_response = api_instance.api_transport_plivo_id_patch(id, transport_plivo_patch)
        print("The response of TransportPlivoApi->api_transport_plivo_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPlivoApi->api_transport_plivo_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPlivo identifier | 
 **transport_plivo_patch** | [**TransportPlivoPatch**](TransportPlivoPatch.md)| The updated TransportPlivo resource | 

### Return type

[**TransportPlivoGet**](TransportPlivoGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPlivo resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_plivo_id_put**
> TransportPlivoGet api_transport_plivo_id_put(id, transport_plivo_put)

Replaces the TransportPlivo resource.

Replaces the TransportPlivo resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_plivo_get import TransportPlivoGet
from openapi_client.models.transport_plivo_put import TransportPlivoPut
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
    api_instance = openapi_client.TransportPlivoApi(api_client)
    id = 'id_example' # str | TransportPlivo identifier
    transport_plivo_put = openapi_client.TransportPlivoPut() # TransportPlivoPut | The updated TransportPlivo resource

    try:
        # Replaces the TransportPlivo resource.
        api_response = api_instance.api_transport_plivo_id_put(id, transport_plivo_put)
        print("The response of TransportPlivoApi->api_transport_plivo_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPlivoApi->api_transport_plivo_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPlivo identifier | 
 **transport_plivo_put** | [**TransportPlivoPut**](TransportPlivoPut.md)| The updated TransportPlivo resource | 

### Return type

[**TransportPlivoGet**](TransportPlivoGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPlivo resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_plivo_post**
> TransportPlivoGet api_transport_plivo_post(transport_plivo_post)

Creates a TransportPlivo resource.

Creates a TransportPlivo resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_plivo_get import TransportPlivoGet
from openapi_client.models.transport_plivo_post import TransportPlivoPost
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
    api_instance = openapi_client.TransportPlivoApi(api_client)
    transport_plivo_post = openapi_client.TransportPlivoPost() # TransportPlivoPost | The new TransportPlivo resource

    try:
        # Creates a TransportPlivo resource.
        api_response = api_instance.api_transport_plivo_post(transport_plivo_post)
        print("The response of TransportPlivoApi->api_transport_plivo_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPlivoApi->api_transport_plivo_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_plivo_post** | [**TransportPlivoPost**](TransportPlivoPost.md)| The new TransportPlivo resource | 

### Return type

[**TransportPlivoGet**](TransportPlivoGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportPlivo resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

