# openapi_client.TransportSmscApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_smsc_get_collection**](TransportSmscApi.md#api_transport_smsc_get_collection) | **GET** /api/transport-smsc | Retrieves the collection of TransportSmsc resources.
[**api_transport_smsc_id_delete**](TransportSmscApi.md#api_transport_smsc_id_delete) | **DELETE** /api/transport-smsc/{id} | Removes the TransportSmsc resource.
[**api_transport_smsc_id_get**](TransportSmscApi.md#api_transport_smsc_id_get) | **GET** /api/transport-smsc/{id} | Retrieves a TransportSmsc resource.
[**api_transport_smsc_id_patch**](TransportSmscApi.md#api_transport_smsc_id_patch) | **PATCH** /api/transport-smsc/{id} | Updates the TransportSmsc resource.
[**api_transport_smsc_id_put**](TransportSmscApi.md#api_transport_smsc_id_put) | **PUT** /api/transport-smsc/{id} | Replaces the TransportSmsc resource.
[**api_transport_smsc_post**](TransportSmscApi.md#api_transport_smsc_post) | **POST** /api/transport-smsc | Creates a TransportSmsc resource.


# **api_transport_smsc_get_collection**
> List[TransportSmscGet] api_transport_smsc_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSmsc resources.

Retrieves the collection of TransportSmsc resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsc_get import TransportSmscGet
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
    api_instance = openapi_client.TransportSmscApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSmsc resources.
        api_response = api_instance.api_transport_smsc_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSmscApi->api_transport_smsc_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmscApi->api_transport_smsc_get_collection: %s\n" % e)
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

[**List[TransportSmscGet]**](TransportSmscGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsc collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsc_id_delete**
> api_transport_smsc_id_delete(id)

Removes the TransportSmsc resource.

Removes the TransportSmsc resource.

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
    api_instance = openapi_client.TransportSmscApi(api_client)
    id = 'id_example' # str | TransportSmsc identifier

    try:
        # Removes the TransportSmsc resource.
        api_instance.api_transport_smsc_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSmscApi->api_transport_smsc_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsc identifier | 

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
**204** | TransportSmsc resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsc_id_get**
> TransportSmscGet api_transport_smsc_id_get(id)

Retrieves a TransportSmsc resource.

Retrieves a TransportSmsc resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsc_get import TransportSmscGet
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
    api_instance = openapi_client.TransportSmscApi(api_client)
    id = 'id_example' # str | TransportSmsc identifier

    try:
        # Retrieves a TransportSmsc resource.
        api_response = api_instance.api_transport_smsc_id_get(id)
        print("The response of TransportSmscApi->api_transport_smsc_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmscApi->api_transport_smsc_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsc identifier | 

### Return type

[**TransportSmscGet**](TransportSmscGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsc resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsc_id_patch**
> TransportSmscGet api_transport_smsc_id_patch(id, transport_smsc_patch)

Updates the TransportSmsc resource.

Updates the TransportSmsc resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsc_get import TransportSmscGet
from openapi_client.models.transport_smsc_patch import TransportSmscPatch
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
    api_instance = openapi_client.TransportSmscApi(api_client)
    id = 'id_example' # str | TransportSmsc identifier
    transport_smsc_patch = openapi_client.TransportSmscPatch() # TransportSmscPatch | The updated TransportSmsc resource

    try:
        # Updates the TransportSmsc resource.
        api_response = api_instance.api_transport_smsc_id_patch(id, transport_smsc_patch)
        print("The response of TransportSmscApi->api_transport_smsc_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmscApi->api_transport_smsc_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsc identifier | 
 **transport_smsc_patch** | [**TransportSmscPatch**](TransportSmscPatch.md)| The updated TransportSmsc resource | 

### Return type

[**TransportSmscGet**](TransportSmscGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsc resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsc_id_put**
> TransportSmscGet api_transport_smsc_id_put(id, transport_smsc_put)

Replaces the TransportSmsc resource.

Replaces the TransportSmsc resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsc_get import TransportSmscGet
from openapi_client.models.transport_smsc_put import TransportSmscPut
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
    api_instance = openapi_client.TransportSmscApi(api_client)
    id = 'id_example' # str | TransportSmsc identifier
    transport_smsc_put = openapi_client.TransportSmscPut() # TransportSmscPut | The updated TransportSmsc resource

    try:
        # Replaces the TransportSmsc resource.
        api_response = api_instance.api_transport_smsc_id_put(id, transport_smsc_put)
        print("The response of TransportSmscApi->api_transport_smsc_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmscApi->api_transport_smsc_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsc identifier | 
 **transport_smsc_put** | [**TransportSmscPut**](TransportSmscPut.md)| The updated TransportSmsc resource | 

### Return type

[**TransportSmscGet**](TransportSmscGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsc resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsc_post**
> TransportSmscGet api_transport_smsc_post(transport_smsc_post)

Creates a TransportSmsc resource.

Creates a TransportSmsc resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsc_get import TransportSmscGet
from openapi_client.models.transport_smsc_post import TransportSmscPost
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
    api_instance = openapi_client.TransportSmscApi(api_client)
    transport_smsc_post = openapi_client.TransportSmscPost() # TransportSmscPost | The new TransportSmsc resource

    try:
        # Creates a TransportSmsc resource.
        api_response = api_instance.api_transport_smsc_post(transport_smsc_post)
        print("The response of TransportSmscApi->api_transport_smsc_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmscApi->api_transport_smsc_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_smsc_post** | [**TransportSmscPost**](TransportSmscPost.md)| The new TransportSmsc resource | 

### Return type

[**TransportSmscGet**](TransportSmscGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSmsc resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

