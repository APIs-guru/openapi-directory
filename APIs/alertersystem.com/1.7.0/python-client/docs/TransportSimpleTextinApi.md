# openapi_client.TransportSimpleTextinApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_simple_textin_get_collection**](TransportSimpleTextinApi.md#api_transport_simple_textin_get_collection) | **GET** /api/transport-simple-textin | Retrieves the collection of TransportSimpleTextin resources.
[**api_transport_simple_textin_id_delete**](TransportSimpleTextinApi.md#api_transport_simple_textin_id_delete) | **DELETE** /api/transport-simple-textin/{id} | Removes the TransportSimpleTextin resource.
[**api_transport_simple_textin_id_get**](TransportSimpleTextinApi.md#api_transport_simple_textin_id_get) | **GET** /api/transport-simple-textin/{id} | Retrieves a TransportSimpleTextin resource.
[**api_transport_simple_textin_id_patch**](TransportSimpleTextinApi.md#api_transport_simple_textin_id_patch) | **PATCH** /api/transport-simple-textin/{id} | Updates the TransportSimpleTextin resource.
[**api_transport_simple_textin_id_put**](TransportSimpleTextinApi.md#api_transport_simple_textin_id_put) | **PUT** /api/transport-simple-textin/{id} | Replaces the TransportSimpleTextin resource.
[**api_transport_simple_textin_post**](TransportSimpleTextinApi.md#api_transport_simple_textin_post) | **POST** /api/transport-simple-textin | Creates a TransportSimpleTextin resource.


# **api_transport_simple_textin_get_collection**
> List[TransportSimpleTextinGet] api_transport_simple_textin_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSimpleTextin resources.

Retrieves the collection of TransportSimpleTextin resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_simple_textin_get import TransportSimpleTextinGet
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
    api_instance = openapi_client.TransportSimpleTextinApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSimpleTextin resources.
        api_response = api_instance.api_transport_simple_textin_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSimpleTextinApi->api_transport_simple_textin_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSimpleTextinApi->api_transport_simple_textin_get_collection: %s\n" % e)
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

[**List[TransportSimpleTextinGet]**](TransportSimpleTextinGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSimpleTextin collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_simple_textin_id_delete**
> api_transport_simple_textin_id_delete(id)

Removes the TransportSimpleTextin resource.

Removes the TransportSimpleTextin resource.

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
    api_instance = openapi_client.TransportSimpleTextinApi(api_client)
    id = 'id_example' # str | TransportSimpleTextin identifier

    try:
        # Removes the TransportSimpleTextin resource.
        api_instance.api_transport_simple_textin_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSimpleTextinApi->api_transport_simple_textin_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSimpleTextin identifier | 

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
**204** | TransportSimpleTextin resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_simple_textin_id_get**
> TransportSimpleTextinGet api_transport_simple_textin_id_get(id)

Retrieves a TransportSimpleTextin resource.

Retrieves a TransportSimpleTextin resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_simple_textin_get import TransportSimpleTextinGet
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
    api_instance = openapi_client.TransportSimpleTextinApi(api_client)
    id = 'id_example' # str | TransportSimpleTextin identifier

    try:
        # Retrieves a TransportSimpleTextin resource.
        api_response = api_instance.api_transport_simple_textin_id_get(id)
        print("The response of TransportSimpleTextinApi->api_transport_simple_textin_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSimpleTextinApi->api_transport_simple_textin_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSimpleTextin identifier | 

### Return type

[**TransportSimpleTextinGet**](TransportSimpleTextinGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSimpleTextin resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_simple_textin_id_patch**
> TransportSimpleTextinGet api_transport_simple_textin_id_patch(id, transport_simple_textin_patch)

Updates the TransportSimpleTextin resource.

Updates the TransportSimpleTextin resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_simple_textin_get import TransportSimpleTextinGet
from openapi_client.models.transport_simple_textin_patch import TransportSimpleTextinPatch
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
    api_instance = openapi_client.TransportSimpleTextinApi(api_client)
    id = 'id_example' # str | TransportSimpleTextin identifier
    transport_simple_textin_patch = openapi_client.TransportSimpleTextinPatch() # TransportSimpleTextinPatch | The updated TransportSimpleTextin resource

    try:
        # Updates the TransportSimpleTextin resource.
        api_response = api_instance.api_transport_simple_textin_id_patch(id, transport_simple_textin_patch)
        print("The response of TransportSimpleTextinApi->api_transport_simple_textin_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSimpleTextinApi->api_transport_simple_textin_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSimpleTextin identifier | 
 **transport_simple_textin_patch** | [**TransportSimpleTextinPatch**](TransportSimpleTextinPatch.md)| The updated TransportSimpleTextin resource | 

### Return type

[**TransportSimpleTextinGet**](TransportSimpleTextinGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSimpleTextin resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_simple_textin_id_put**
> TransportSimpleTextinGet api_transport_simple_textin_id_put(id, transport_simple_textin_put)

Replaces the TransportSimpleTextin resource.

Replaces the TransportSimpleTextin resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_simple_textin_get import TransportSimpleTextinGet
from openapi_client.models.transport_simple_textin_put import TransportSimpleTextinPut
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
    api_instance = openapi_client.TransportSimpleTextinApi(api_client)
    id = 'id_example' # str | TransportSimpleTextin identifier
    transport_simple_textin_put = openapi_client.TransportSimpleTextinPut() # TransportSimpleTextinPut | The updated TransportSimpleTextin resource

    try:
        # Replaces the TransportSimpleTextin resource.
        api_response = api_instance.api_transport_simple_textin_id_put(id, transport_simple_textin_put)
        print("The response of TransportSimpleTextinApi->api_transport_simple_textin_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSimpleTextinApi->api_transport_simple_textin_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSimpleTextin identifier | 
 **transport_simple_textin_put** | [**TransportSimpleTextinPut**](TransportSimpleTextinPut.md)| The updated TransportSimpleTextin resource | 

### Return type

[**TransportSimpleTextinGet**](TransportSimpleTextinGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSimpleTextin resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_simple_textin_post**
> TransportSimpleTextinGet api_transport_simple_textin_post(transport_simple_textin_post)

Creates a TransportSimpleTextin resource.

Creates a TransportSimpleTextin resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_simple_textin_get import TransportSimpleTextinGet
from openapi_client.models.transport_simple_textin_post import TransportSimpleTextinPost
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
    api_instance = openapi_client.TransportSimpleTextinApi(api_client)
    transport_simple_textin_post = openapi_client.TransportSimpleTextinPost() # TransportSimpleTextinPost | The new TransportSimpleTextin resource

    try:
        # Creates a TransportSimpleTextin resource.
        api_response = api_instance.api_transport_simple_textin_post(transport_simple_textin_post)
        print("The response of TransportSimpleTextinApi->api_transport_simple_textin_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSimpleTextinApi->api_transport_simple_textin_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_simple_textin_post** | [**TransportSimpleTextinPost**](TransportSimpleTextinPost.md)| The new TransportSimpleTextin resource | 

### Return type

[**TransportSimpleTextinGet**](TransportSimpleTextinGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSimpleTextin resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

