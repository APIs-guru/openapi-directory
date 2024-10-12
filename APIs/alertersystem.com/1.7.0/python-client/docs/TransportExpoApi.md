# openapi_client.TransportExpoApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_expo_get_collection**](TransportExpoApi.md#api_transport_expo_get_collection) | **GET** /api/transport-expo | Retrieves the collection of TransportExpo resources.
[**api_transport_expo_id_delete**](TransportExpoApi.md#api_transport_expo_id_delete) | **DELETE** /api/transport-expo/{id} | Removes the TransportExpo resource.
[**api_transport_expo_id_get**](TransportExpoApi.md#api_transport_expo_id_get) | **GET** /api/transport-expo/{id} | Retrieves a TransportExpo resource.
[**api_transport_expo_id_patch**](TransportExpoApi.md#api_transport_expo_id_patch) | **PATCH** /api/transport-expo/{id} | Updates the TransportExpo resource.
[**api_transport_expo_id_put**](TransportExpoApi.md#api_transport_expo_id_put) | **PUT** /api/transport-expo/{id} | Replaces the TransportExpo resource.
[**api_transport_expo_post**](TransportExpoApi.md#api_transport_expo_post) | **POST** /api/transport-expo | Creates a TransportExpo resource.


# **api_transport_expo_get_collection**
> List[TransportExpoGet] api_transport_expo_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportExpo resources.

Retrieves the collection of TransportExpo resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_expo_get import TransportExpoGet
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
    api_instance = openapi_client.TransportExpoApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportExpo resources.
        api_response = api_instance.api_transport_expo_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportExpoApi->api_transport_expo_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportExpoApi->api_transport_expo_get_collection: %s\n" % e)
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

[**List[TransportExpoGet]**](TransportExpoGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportExpo collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_expo_id_delete**
> api_transport_expo_id_delete(id)

Removes the TransportExpo resource.

Removes the TransportExpo resource.

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
    api_instance = openapi_client.TransportExpoApi(api_client)
    id = 'id_example' # str | TransportExpo identifier

    try:
        # Removes the TransportExpo resource.
        api_instance.api_transport_expo_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportExpoApi->api_transport_expo_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportExpo identifier | 

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
**204** | TransportExpo resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_expo_id_get**
> TransportExpoGet api_transport_expo_id_get(id)

Retrieves a TransportExpo resource.

Retrieves a TransportExpo resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_expo_get import TransportExpoGet
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
    api_instance = openapi_client.TransportExpoApi(api_client)
    id = 'id_example' # str | TransportExpo identifier

    try:
        # Retrieves a TransportExpo resource.
        api_response = api_instance.api_transport_expo_id_get(id)
        print("The response of TransportExpoApi->api_transport_expo_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportExpoApi->api_transport_expo_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportExpo identifier | 

### Return type

[**TransportExpoGet**](TransportExpoGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportExpo resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_expo_id_patch**
> TransportExpoGet api_transport_expo_id_patch(id, transport_expo_patch)

Updates the TransportExpo resource.

Updates the TransportExpo resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_expo_get import TransportExpoGet
from openapi_client.models.transport_expo_patch import TransportExpoPatch
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
    api_instance = openapi_client.TransportExpoApi(api_client)
    id = 'id_example' # str | TransportExpo identifier
    transport_expo_patch = openapi_client.TransportExpoPatch() # TransportExpoPatch | The updated TransportExpo resource

    try:
        # Updates the TransportExpo resource.
        api_response = api_instance.api_transport_expo_id_patch(id, transport_expo_patch)
        print("The response of TransportExpoApi->api_transport_expo_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportExpoApi->api_transport_expo_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportExpo identifier | 
 **transport_expo_patch** | [**TransportExpoPatch**](TransportExpoPatch.md)| The updated TransportExpo resource | 

### Return type

[**TransportExpoGet**](TransportExpoGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportExpo resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_expo_id_put**
> TransportExpoGet api_transport_expo_id_put(id, transport_expo_put)

Replaces the TransportExpo resource.

Replaces the TransportExpo resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_expo_get import TransportExpoGet
from openapi_client.models.transport_expo_put import TransportExpoPut
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
    api_instance = openapi_client.TransportExpoApi(api_client)
    id = 'id_example' # str | TransportExpo identifier
    transport_expo_put = openapi_client.TransportExpoPut() # TransportExpoPut | The updated TransportExpo resource

    try:
        # Replaces the TransportExpo resource.
        api_response = api_instance.api_transport_expo_id_put(id, transport_expo_put)
        print("The response of TransportExpoApi->api_transport_expo_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportExpoApi->api_transport_expo_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportExpo identifier | 
 **transport_expo_put** | [**TransportExpoPut**](TransportExpoPut.md)| The updated TransportExpo resource | 

### Return type

[**TransportExpoGet**](TransportExpoGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportExpo resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_expo_post**
> TransportExpoGet api_transport_expo_post(transport_expo_post)

Creates a TransportExpo resource.

Creates a TransportExpo resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_expo_get import TransportExpoGet
from openapi_client.models.transport_expo_post import TransportExpoPost
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
    api_instance = openapi_client.TransportExpoApi(api_client)
    transport_expo_post = openapi_client.TransportExpoPost() # TransportExpoPost | The new TransportExpo resource

    try:
        # Creates a TransportExpo resource.
        api_response = api_instance.api_transport_expo_post(transport_expo_post)
        print("The response of TransportExpoApi->api_transport_expo_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportExpoApi->api_transport_expo_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_expo_post** | [**TransportExpoPost**](TransportExpoPost.md)| The new TransportExpo resource | 

### Return type

[**TransportExpoGet**](TransportExpoGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportExpo resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

