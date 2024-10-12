# openapi_client.TransportPushbulletApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_pushbullet_get_collection**](TransportPushbulletApi.md#api_transport_pushbullet_get_collection) | **GET** /api/transport-pushbullet | Retrieves the collection of TransportPushbullet resources.
[**api_transport_pushbullet_id_delete**](TransportPushbulletApi.md#api_transport_pushbullet_id_delete) | **DELETE** /api/transport-pushbullet/{id} | Removes the TransportPushbullet resource.
[**api_transport_pushbullet_id_get**](TransportPushbulletApi.md#api_transport_pushbullet_id_get) | **GET** /api/transport-pushbullet/{id} | Retrieves a TransportPushbullet resource.
[**api_transport_pushbullet_id_patch**](TransportPushbulletApi.md#api_transport_pushbullet_id_patch) | **PATCH** /api/transport-pushbullet/{id} | Updates the TransportPushbullet resource.
[**api_transport_pushbullet_id_put**](TransportPushbulletApi.md#api_transport_pushbullet_id_put) | **PUT** /api/transport-pushbullet/{id} | Replaces the TransportPushbullet resource.
[**api_transport_pushbullet_post**](TransportPushbulletApi.md#api_transport_pushbullet_post) | **POST** /api/transport-pushbullet | Creates a TransportPushbullet resource.


# **api_transport_pushbullet_get_collection**
> List[TransportPushbulletGet] api_transport_pushbullet_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportPushbullet resources.

Retrieves the collection of TransportPushbullet resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushbullet_get import TransportPushbulletGet
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
    api_instance = openapi_client.TransportPushbulletApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportPushbullet resources.
        api_response = api_instance.api_transport_pushbullet_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportPushbulletApi->api_transport_pushbullet_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushbulletApi->api_transport_pushbullet_get_collection: %s\n" % e)
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

[**List[TransportPushbulletGet]**](TransportPushbulletGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushbullet collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushbullet_id_delete**
> api_transport_pushbullet_id_delete(id)

Removes the TransportPushbullet resource.

Removes the TransportPushbullet resource.

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
    api_instance = openapi_client.TransportPushbulletApi(api_client)
    id = 'id_example' # str | TransportPushbullet identifier

    try:
        # Removes the TransportPushbullet resource.
        api_instance.api_transport_pushbullet_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportPushbulletApi->api_transport_pushbullet_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushbullet identifier | 

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
**204** | TransportPushbullet resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushbullet_id_get**
> TransportPushbulletGet api_transport_pushbullet_id_get(id)

Retrieves a TransportPushbullet resource.

Retrieves a TransportPushbullet resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushbullet_get import TransportPushbulletGet
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
    api_instance = openapi_client.TransportPushbulletApi(api_client)
    id = 'id_example' # str | TransportPushbullet identifier

    try:
        # Retrieves a TransportPushbullet resource.
        api_response = api_instance.api_transport_pushbullet_id_get(id)
        print("The response of TransportPushbulletApi->api_transport_pushbullet_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushbulletApi->api_transport_pushbullet_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushbullet identifier | 

### Return type

[**TransportPushbulletGet**](TransportPushbulletGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushbullet resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushbullet_id_patch**
> TransportPushbulletGet api_transport_pushbullet_id_patch(id, transport_pushbullet_patch)

Updates the TransportPushbullet resource.

Updates the TransportPushbullet resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushbullet_get import TransportPushbulletGet
from openapi_client.models.transport_pushbullet_patch import TransportPushbulletPatch
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
    api_instance = openapi_client.TransportPushbulletApi(api_client)
    id = 'id_example' # str | TransportPushbullet identifier
    transport_pushbullet_patch = openapi_client.TransportPushbulletPatch() # TransportPushbulletPatch | The updated TransportPushbullet resource

    try:
        # Updates the TransportPushbullet resource.
        api_response = api_instance.api_transport_pushbullet_id_patch(id, transport_pushbullet_patch)
        print("The response of TransportPushbulletApi->api_transport_pushbullet_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushbulletApi->api_transport_pushbullet_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushbullet identifier | 
 **transport_pushbullet_patch** | [**TransportPushbulletPatch**](TransportPushbulletPatch.md)| The updated TransportPushbullet resource | 

### Return type

[**TransportPushbulletGet**](TransportPushbulletGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushbullet resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushbullet_id_put**
> TransportPushbulletGet api_transport_pushbullet_id_put(id, transport_pushbullet_put)

Replaces the TransportPushbullet resource.

Replaces the TransportPushbullet resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushbullet_get import TransportPushbulletGet
from openapi_client.models.transport_pushbullet_put import TransportPushbulletPut
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
    api_instance = openapi_client.TransportPushbulletApi(api_client)
    id = 'id_example' # str | TransportPushbullet identifier
    transport_pushbullet_put = openapi_client.TransportPushbulletPut() # TransportPushbulletPut | The updated TransportPushbullet resource

    try:
        # Replaces the TransportPushbullet resource.
        api_response = api_instance.api_transport_pushbullet_id_put(id, transport_pushbullet_put)
        print("The response of TransportPushbulletApi->api_transport_pushbullet_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushbulletApi->api_transport_pushbullet_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushbullet identifier | 
 **transport_pushbullet_put** | [**TransportPushbulletPut**](TransportPushbulletPut.md)| The updated TransportPushbullet resource | 

### Return type

[**TransportPushbulletGet**](TransportPushbulletGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushbullet resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushbullet_post**
> TransportPushbulletGet api_transport_pushbullet_post(transport_pushbullet_post)

Creates a TransportPushbullet resource.

Creates a TransportPushbullet resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushbullet_get import TransportPushbulletGet
from openapi_client.models.transport_pushbullet_post import TransportPushbulletPost
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
    api_instance = openapi_client.TransportPushbulletApi(api_client)
    transport_pushbullet_post = openapi_client.TransportPushbulletPost() # TransportPushbulletPost | The new TransportPushbullet resource

    try:
        # Creates a TransportPushbullet resource.
        api_response = api_instance.api_transport_pushbullet_post(transport_pushbullet_post)
        print("The response of TransportPushbulletApi->api_transport_pushbullet_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushbulletApi->api_transport_pushbullet_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_pushbullet_post** | [**TransportPushbulletPost**](TransportPushbulletPost.md)| The new TransportPushbullet resource | 

### Return type

[**TransportPushbulletGet**](TransportPushbulletGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportPushbullet resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

