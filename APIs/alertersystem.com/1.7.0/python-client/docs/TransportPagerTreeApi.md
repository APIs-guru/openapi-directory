# openapi_client.TransportPagerTreeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_pager_tree_get_collection**](TransportPagerTreeApi.md#api_transport_pager_tree_get_collection) | **GET** /api/transport-pager-tree | Retrieves the collection of TransportPagerTree resources.
[**api_transport_pager_tree_id_delete**](TransportPagerTreeApi.md#api_transport_pager_tree_id_delete) | **DELETE** /api/transport-pager-tree/{id} | Removes the TransportPagerTree resource.
[**api_transport_pager_tree_id_get**](TransportPagerTreeApi.md#api_transport_pager_tree_id_get) | **GET** /api/transport-pager-tree/{id} | Retrieves a TransportPagerTree resource.
[**api_transport_pager_tree_id_patch**](TransportPagerTreeApi.md#api_transport_pager_tree_id_patch) | **PATCH** /api/transport-pager-tree/{id} | Updates the TransportPagerTree resource.
[**api_transport_pager_tree_id_put**](TransportPagerTreeApi.md#api_transport_pager_tree_id_put) | **PUT** /api/transport-pager-tree/{id} | Replaces the TransportPagerTree resource.
[**api_transport_pager_tree_post**](TransportPagerTreeApi.md#api_transport_pager_tree_post) | **POST** /api/transport-pager-tree | Creates a TransportPagerTree resource.


# **api_transport_pager_tree_get_collection**
> List[TransportPagerTreeGet] api_transport_pager_tree_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportPagerTree resources.

Retrieves the collection of TransportPagerTree resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pager_tree_get import TransportPagerTreeGet
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
    api_instance = openapi_client.TransportPagerTreeApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportPagerTree resources.
        api_response = api_instance.api_transport_pager_tree_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportPagerTreeApi->api_transport_pager_tree_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPagerTreeApi->api_transport_pager_tree_get_collection: %s\n" % e)
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

[**List[TransportPagerTreeGet]**](TransportPagerTreeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPagerTree collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pager_tree_id_delete**
> api_transport_pager_tree_id_delete(id)

Removes the TransportPagerTree resource.

Removes the TransportPagerTree resource.

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
    api_instance = openapi_client.TransportPagerTreeApi(api_client)
    id = 'id_example' # str | TransportPagerTree identifier

    try:
        # Removes the TransportPagerTree resource.
        api_instance.api_transport_pager_tree_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportPagerTreeApi->api_transport_pager_tree_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPagerTree identifier | 

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
**204** | TransportPagerTree resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pager_tree_id_get**
> TransportPagerTreeGet api_transport_pager_tree_id_get(id)

Retrieves a TransportPagerTree resource.

Retrieves a TransportPagerTree resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pager_tree_get import TransportPagerTreeGet
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
    api_instance = openapi_client.TransportPagerTreeApi(api_client)
    id = 'id_example' # str | TransportPagerTree identifier

    try:
        # Retrieves a TransportPagerTree resource.
        api_response = api_instance.api_transport_pager_tree_id_get(id)
        print("The response of TransportPagerTreeApi->api_transport_pager_tree_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPagerTreeApi->api_transport_pager_tree_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPagerTree identifier | 

### Return type

[**TransportPagerTreeGet**](TransportPagerTreeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPagerTree resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pager_tree_id_patch**
> TransportPagerTreeGet api_transport_pager_tree_id_patch(id, transport_pager_tree_patch)

Updates the TransportPagerTree resource.

Updates the TransportPagerTree resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pager_tree_get import TransportPagerTreeGet
from openapi_client.models.transport_pager_tree_patch import TransportPagerTreePatch
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
    api_instance = openapi_client.TransportPagerTreeApi(api_client)
    id = 'id_example' # str | TransportPagerTree identifier
    transport_pager_tree_patch = openapi_client.TransportPagerTreePatch() # TransportPagerTreePatch | The updated TransportPagerTree resource

    try:
        # Updates the TransportPagerTree resource.
        api_response = api_instance.api_transport_pager_tree_id_patch(id, transport_pager_tree_patch)
        print("The response of TransportPagerTreeApi->api_transport_pager_tree_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPagerTreeApi->api_transport_pager_tree_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPagerTree identifier | 
 **transport_pager_tree_patch** | [**TransportPagerTreePatch**](TransportPagerTreePatch.md)| The updated TransportPagerTree resource | 

### Return type

[**TransportPagerTreeGet**](TransportPagerTreeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPagerTree resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pager_tree_id_put**
> TransportPagerTreeGet api_transport_pager_tree_id_put(id, transport_pager_tree_put)

Replaces the TransportPagerTree resource.

Replaces the TransportPagerTree resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pager_tree_get import TransportPagerTreeGet
from openapi_client.models.transport_pager_tree_put import TransportPagerTreePut
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
    api_instance = openapi_client.TransportPagerTreeApi(api_client)
    id = 'id_example' # str | TransportPagerTree identifier
    transport_pager_tree_put = openapi_client.TransportPagerTreePut() # TransportPagerTreePut | The updated TransportPagerTree resource

    try:
        # Replaces the TransportPagerTree resource.
        api_response = api_instance.api_transport_pager_tree_id_put(id, transport_pager_tree_put)
        print("The response of TransportPagerTreeApi->api_transport_pager_tree_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPagerTreeApi->api_transport_pager_tree_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPagerTree identifier | 
 **transport_pager_tree_put** | [**TransportPagerTreePut**](TransportPagerTreePut.md)| The updated TransportPagerTree resource | 

### Return type

[**TransportPagerTreeGet**](TransportPagerTreeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPagerTree resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pager_tree_post**
> TransportPagerTreeGet api_transport_pager_tree_post(transport_pager_tree_post)

Creates a TransportPagerTree resource.

Creates a TransportPagerTree resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pager_tree_get import TransportPagerTreeGet
from openapi_client.models.transport_pager_tree_post import TransportPagerTreePost
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
    api_instance = openapi_client.TransportPagerTreeApi(api_client)
    transport_pager_tree_post = openapi_client.TransportPagerTreePost() # TransportPagerTreePost | The new TransportPagerTree resource

    try:
        # Creates a TransportPagerTree resource.
        api_response = api_instance.api_transport_pager_tree_post(transport_pager_tree_post)
        print("The response of TransportPagerTreeApi->api_transport_pager_tree_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPagerTreeApi->api_transport_pager_tree_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_pager_tree_post** | [**TransportPagerTreePost**](TransportPagerTreePost.md)| The new TransportPagerTree resource | 

### Return type

[**TransportPagerTreeGet**](TransportPagerTreeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportPagerTree resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

