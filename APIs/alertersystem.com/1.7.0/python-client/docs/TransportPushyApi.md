# openapi_client.TransportPushyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_pushy_get_collection**](TransportPushyApi.md#api_transport_pushy_get_collection) | **GET** /api/transport-pushy | Retrieves the collection of TransportPushy resources.
[**api_transport_pushy_id_delete**](TransportPushyApi.md#api_transport_pushy_id_delete) | **DELETE** /api/transport-pushy/{id} | Removes the TransportPushy resource.
[**api_transport_pushy_id_get**](TransportPushyApi.md#api_transport_pushy_id_get) | **GET** /api/transport-pushy/{id} | Retrieves a TransportPushy resource.
[**api_transport_pushy_id_patch**](TransportPushyApi.md#api_transport_pushy_id_patch) | **PATCH** /api/transport-pushy/{id} | Updates the TransportPushy resource.
[**api_transport_pushy_id_put**](TransportPushyApi.md#api_transport_pushy_id_put) | **PUT** /api/transport-pushy/{id} | Replaces the TransportPushy resource.
[**api_transport_pushy_post**](TransportPushyApi.md#api_transport_pushy_post) | **POST** /api/transport-pushy | Creates a TransportPushy resource.


# **api_transport_pushy_get_collection**
> List[TransportPushyGet] api_transport_pushy_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportPushy resources.

Retrieves the collection of TransportPushy resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushy_get import TransportPushyGet
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
    api_instance = openapi_client.TransportPushyApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportPushy resources.
        api_response = api_instance.api_transport_pushy_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportPushyApi->api_transport_pushy_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushyApi->api_transport_pushy_get_collection: %s\n" % e)
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

[**List[TransportPushyGet]**](TransportPushyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushy collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushy_id_delete**
> api_transport_pushy_id_delete(id)

Removes the TransportPushy resource.

Removes the TransportPushy resource.

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
    api_instance = openapi_client.TransportPushyApi(api_client)
    id = 'id_example' # str | TransportPushy identifier

    try:
        # Removes the TransportPushy resource.
        api_instance.api_transport_pushy_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportPushyApi->api_transport_pushy_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushy identifier | 

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
**204** | TransportPushy resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushy_id_get**
> TransportPushyGet api_transport_pushy_id_get(id)

Retrieves a TransportPushy resource.

Retrieves a TransportPushy resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushy_get import TransportPushyGet
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
    api_instance = openapi_client.TransportPushyApi(api_client)
    id = 'id_example' # str | TransportPushy identifier

    try:
        # Retrieves a TransportPushy resource.
        api_response = api_instance.api_transport_pushy_id_get(id)
        print("The response of TransportPushyApi->api_transport_pushy_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushyApi->api_transport_pushy_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushy identifier | 

### Return type

[**TransportPushyGet**](TransportPushyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushy resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushy_id_patch**
> TransportPushyGet api_transport_pushy_id_patch(id, transport_pushy_patch)

Updates the TransportPushy resource.

Updates the TransportPushy resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushy_get import TransportPushyGet
from openapi_client.models.transport_pushy_patch import TransportPushyPatch
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
    api_instance = openapi_client.TransportPushyApi(api_client)
    id = 'id_example' # str | TransportPushy identifier
    transport_pushy_patch = openapi_client.TransportPushyPatch() # TransportPushyPatch | The updated TransportPushy resource

    try:
        # Updates the TransportPushy resource.
        api_response = api_instance.api_transport_pushy_id_patch(id, transport_pushy_patch)
        print("The response of TransportPushyApi->api_transport_pushy_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushyApi->api_transport_pushy_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushy identifier | 
 **transport_pushy_patch** | [**TransportPushyPatch**](TransportPushyPatch.md)| The updated TransportPushy resource | 

### Return type

[**TransportPushyGet**](TransportPushyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushy resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushy_id_put**
> TransportPushyGet api_transport_pushy_id_put(id, transport_pushy_put)

Replaces the TransportPushy resource.

Replaces the TransportPushy resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushy_get import TransportPushyGet
from openapi_client.models.transport_pushy_put import TransportPushyPut
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
    api_instance = openapi_client.TransportPushyApi(api_client)
    id = 'id_example' # str | TransportPushy identifier
    transport_pushy_put = openapi_client.TransportPushyPut() # TransportPushyPut | The updated TransportPushy resource

    try:
        # Replaces the TransportPushy resource.
        api_response = api_instance.api_transport_pushy_id_put(id, transport_pushy_put)
        print("The response of TransportPushyApi->api_transport_pushy_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushyApi->api_transport_pushy_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPushy identifier | 
 **transport_pushy_put** | [**TransportPushyPut**](TransportPushyPut.md)| The updated TransportPushy resource | 

### Return type

[**TransportPushyGet**](TransportPushyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPushy resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pushy_post**
> TransportPushyGet api_transport_pushy_post(transport_pushy_post)

Creates a TransportPushy resource.

Creates a TransportPushy resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pushy_get import TransportPushyGet
from openapi_client.models.transport_pushy_post import TransportPushyPost
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
    api_instance = openapi_client.TransportPushyApi(api_client)
    transport_pushy_post = openapi_client.TransportPushyPost() # TransportPushyPost | The new TransportPushy resource

    try:
        # Creates a TransportPushy resource.
        api_response = api_instance.api_transport_pushy_post(transport_pushy_post)
        print("The response of TransportPushyApi->api_transport_pushy_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPushyApi->api_transport_pushy_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_pushy_post** | [**TransportPushyPost**](TransportPushyPost.md)| The new TransportPushy resource | 

### Return type

[**TransportPushyGet**](TransportPushyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportPushy resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

