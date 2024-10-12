# openapi_client.TransportPushoverApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_pushover_get_collection**](TransportPushoverApi.md#api_transport_pushover_get_collection) | **GET** /api/transport-pushover | Retrieves the collection of TransportPushover resources.
[**api_transport_pushover_id_delete**](TransportPushoverApi.md#api_transport_pushover_id_delete) | **DELETE** /api/transport-pushover/{id} | Removes the TransportPushover resource.
[**api_transport_pushover_id_get**](TransportPushoverApi.md#api_transport_pushover_id_get) | **GET** /api/transport-pushover/{id} | Retrieves a TransportPushover resource.
[**api_transport_pushover_id_patch**](TransportPushoverApi.md#api_transport_pushover_id_patch) | **PATCH** /api/transport-pushover/{id} | Updates the TransportPushover resource.
[**api_transport_pushover_id_put**](TransportPushoverApi.md#api_transport_pushover_id_put) | **PUT** /api/transport-pushover/{id} | Replaces the TransportPushover resource.
[**api_transport_pushover_post**](TransportPushoverApi.md#api_transport_pushover_post) | **POST** /api/transport-pushover | Creates a TransportPushover resource.


# **api_transport_pushover_get_collection**
> List[TransportPushoverGet] api_transport_pushover_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportPushover resources.

Retrieves the collection of TransportPushover resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushover_get import TransportPushoverGet
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
    api_instance = openapi_client.TransportPushoverApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportPushover resources.
        api_response = api_instance.api_transport_pushover_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportPushoverApi->api_transport_pushover_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushoverApi->api_transport_pushover_get_collection: %s\n" % e)
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

[**List[TransportPushoverGet]**](TransportPushoverGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushover collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushover_id_delete**
> api_transport_pushover_id_delete(id)

Removes the TransportPushover resource.

Removes the TransportPushover resource.

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
    api_instance = openapi_client.TransportPushoverApi(api_client)
    id = 'id_example' # str | TransportPushover identifier

    try:
        # Removes the TransportPushover resource.
        api_instance.api_transport_pushover_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportPushoverApi->api_transport_pushover_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushover identifier | 

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
**204** | TransportPushover resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushover_id_get**
> TransportPushoverGet api_transport_pushover_id_get(id)

Retrieves a TransportPushover resource.

Retrieves a TransportPushover resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushover_get import TransportPushoverGet
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
    api_instance = openapi_client.TransportPushoverApi(api_client)
    id = 'id_example' # str | TransportPushover identifier

    try:
        # Retrieves a TransportPushover resource.
        api_response = api_instance.api_transport_pushover_id_get(id)
        print("The response of TransportPushoverApi->api_transport_pushover_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushoverApi->api_transport_pushover_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushover identifier | 

### Return type

[**TransportPushoverGet**](TransportPushoverGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushover resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushover_id_patch**
> TransportPushoverGet api_transport_pushover_id_patch(id, transport_pushover_patch)

Updates the TransportPushover resource.

Updates the TransportPushover resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushover_get import TransportPushoverGet
from openapi_client.models.transport_pushover_patch import TransportPushoverPatch
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
    api_instance = openapi_client.TransportPushoverApi(api_client)
    id = 'id_example' # str | TransportPushover identifier
    transport_pushover_patch = openapi_client.TransportPushoverPatch() # TransportPushoverPatch | The updated TransportPushover resource

    try:
        # Updates the TransportPushover resource.
        api_response = api_instance.api_transport_pushover_id_patch(id, transport_pushover_patch)
        print("The response of TransportPushoverApi->api_transport_pushover_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushoverApi->api_transport_pushover_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushover identifier | 
 **transport_pushover_patch** | [**TransportPushoverPatch**](TransportPushoverPatch.md)| The updated TransportPushover resource | 

### Return type

[**TransportPushoverGet**](TransportPushoverGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushover resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushover_id_put**
> TransportPushoverGet api_transport_pushover_id_put(id, transport_pushover_put)

Replaces the TransportPushover resource.

Replaces the TransportPushover resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushover_get import TransportPushoverGet
from openapi_client.models.transport_pushover_put import TransportPushoverPut
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
    api_instance = openapi_client.TransportPushoverApi(api_client)
    id = 'id_example' # str | TransportPushover identifier
    transport_pushover_put = openapi_client.TransportPushoverPut() # TransportPushoverPut | The updated TransportPushover resource

    try:
        # Replaces the TransportPushover resource.
        api_response = api_instance.api_transport_pushover_id_put(id, transport_pushover_put)
        print("The response of TransportPushoverApi->api_transport_pushover_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushoverApi->api_transport_pushover_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushover identifier | 
 **transport_pushover_put** | [**TransportPushoverPut**](TransportPushoverPut.md)| The updated TransportPushover resource | 

### Return type

[**TransportPushoverGet**](TransportPushoverGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushover resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushover_post**
> TransportPushoverGet api_transport_pushover_post(transport_pushover_post)

Creates a TransportPushover resource.

Creates a TransportPushover resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushover_get import TransportPushoverGet
from openapi_client.models.transport_pushover_post import TransportPushoverPost
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
    api_instance = openapi_client.TransportPushoverApi(api_client)
    transport_pushover_post = openapi_client.TransportPushoverPost() # TransportPushoverPost | The new TransportPushover resource

    try:
        # Creates a TransportPushover resource.
        api_response = api_instance.api_transport_pushover_post(transport_pushover_post)
        print("The response of TransportPushoverApi->api_transport_pushover_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushoverApi->api_transport_pushover_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_pushover_post** | [**TransportPushoverPost**](TransportPushoverPost.md)| The new TransportPushover resource | 

### Return type

[**TransportPushoverGet**](TransportPushoverGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportPushover resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

