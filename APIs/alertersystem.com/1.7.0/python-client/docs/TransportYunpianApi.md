# openapi_client.TransportYunpianApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_yunpian_get_collection**](TransportYunpianApi.md#api_transport_yunpian_get_collection) | **GET** /api/transport-yunpian | Retrieves the collection of TransportYunpian resources.
[**api_transport_yunpian_id_delete**](TransportYunpianApi.md#api_transport_yunpian_id_delete) | **DELETE** /api/transport-yunpian/{id} | Removes the TransportYunpian resource.
[**api_transport_yunpian_id_get**](TransportYunpianApi.md#api_transport_yunpian_id_get) | **GET** /api/transport-yunpian/{id} | Retrieves a TransportYunpian resource.
[**api_transport_yunpian_id_patch**](TransportYunpianApi.md#api_transport_yunpian_id_patch) | **PATCH** /api/transport-yunpian/{id} | Updates the TransportYunpian resource.
[**api_transport_yunpian_id_put**](TransportYunpianApi.md#api_transport_yunpian_id_put) | **PUT** /api/transport-yunpian/{id} | Replaces the TransportYunpian resource.
[**api_transport_yunpian_post**](TransportYunpianApi.md#api_transport_yunpian_post) | **POST** /api/transport-yunpian | Creates a TransportYunpian resource.


# **api_transport_yunpian_get_collection**
> List[TransportYunpianGet] api_transport_yunpian_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportYunpian resources.

Retrieves the collection of TransportYunpian resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_yunpian_get import TransportYunpianGet
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
    api_instance = openapi_client.TransportYunpianApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportYunpian resources.
        api_response = api_instance.api_transport_yunpian_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportYunpianApi->api_transport_yunpian_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportYunpianApi->api_transport_yunpian_get_collection: %s\n" % e)
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

[**List[TransportYunpianGet]**](TransportYunpianGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportYunpian collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_yunpian_id_delete**
> api_transport_yunpian_id_delete(id)

Removes the TransportYunpian resource.

Removes the TransportYunpian resource.

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
    api_instance = openapi_client.TransportYunpianApi(api_client)
    id = 'id_example' # str | TransportYunpian identifier

    try:
        # Removes the TransportYunpian resource.
        api_instance.api_transport_yunpian_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportYunpianApi->api_transport_yunpian_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportYunpian identifier | 

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
**204** | TransportYunpian resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_yunpian_id_get**
> TransportYunpianGet api_transport_yunpian_id_get(id)

Retrieves a TransportYunpian resource.

Retrieves a TransportYunpian resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_yunpian_get import TransportYunpianGet
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
    api_instance = openapi_client.TransportYunpianApi(api_client)
    id = 'id_example' # str | TransportYunpian identifier

    try:
        # Retrieves a TransportYunpian resource.
        api_response = api_instance.api_transport_yunpian_id_get(id)
        print("The response of TransportYunpianApi->api_transport_yunpian_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportYunpianApi->api_transport_yunpian_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportYunpian identifier | 

### Return type

[**TransportYunpianGet**](TransportYunpianGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportYunpian resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_yunpian_id_patch**
> TransportYunpianGet api_transport_yunpian_id_patch(id, transport_yunpian_patch)

Updates the TransportYunpian resource.

Updates the TransportYunpian resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_yunpian_get import TransportYunpianGet
from openapi_client.models.transport_yunpian_patch import TransportYunpianPatch
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
    api_instance = openapi_client.TransportYunpianApi(api_client)
    id = 'id_example' # str | TransportYunpian identifier
    transport_yunpian_patch = openapi_client.TransportYunpianPatch() # TransportYunpianPatch | The updated TransportYunpian resource

    try:
        # Updates the TransportYunpian resource.
        api_response = api_instance.api_transport_yunpian_id_patch(id, transport_yunpian_patch)
        print("The response of TransportYunpianApi->api_transport_yunpian_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportYunpianApi->api_transport_yunpian_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportYunpian identifier | 
 **transport_yunpian_patch** | [**TransportYunpianPatch**](TransportYunpianPatch.md)| The updated TransportYunpian resource | 

### Return type

[**TransportYunpianGet**](TransportYunpianGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportYunpian resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_yunpian_id_put**
> TransportYunpianGet api_transport_yunpian_id_put(id, transport_yunpian_put)

Replaces the TransportYunpian resource.

Replaces the TransportYunpian resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_yunpian_get import TransportYunpianGet
from openapi_client.models.transport_yunpian_put import TransportYunpianPut
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
    api_instance = openapi_client.TransportYunpianApi(api_client)
    id = 'id_example' # str | TransportYunpian identifier
    transport_yunpian_put = openapi_client.TransportYunpianPut() # TransportYunpianPut | The updated TransportYunpian resource

    try:
        # Replaces the TransportYunpian resource.
        api_response = api_instance.api_transport_yunpian_id_put(id, transport_yunpian_put)
        print("The response of TransportYunpianApi->api_transport_yunpian_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportYunpianApi->api_transport_yunpian_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportYunpian identifier | 
 **transport_yunpian_put** | [**TransportYunpianPut**](TransportYunpianPut.md)| The updated TransportYunpian resource | 

### Return type

[**TransportYunpianGet**](TransportYunpianGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportYunpian resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_yunpian_post**
> TransportYunpianGet api_transport_yunpian_post(transport_yunpian_post)

Creates a TransportYunpian resource.

Creates a TransportYunpian resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_yunpian_get import TransportYunpianGet
from openapi_client.models.transport_yunpian_post import TransportYunpianPost
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
    api_instance = openapi_client.TransportYunpianApi(api_client)
    transport_yunpian_post = openapi_client.TransportYunpianPost() # TransportYunpianPost | The new TransportYunpian resource

    try:
        # Creates a TransportYunpian resource.
        api_response = api_instance.api_transport_yunpian_post(transport_yunpian_post)
        print("The response of TransportYunpianApi->api_transport_yunpian_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportYunpianApi->api_transport_yunpian_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_yunpian_post** | [**TransportYunpianPost**](TransportYunpianPost.md)| The new TransportYunpian resource | 

### Return type

[**TransportYunpianGet**](TransportYunpianGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportYunpian resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

