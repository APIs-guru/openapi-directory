# openapi_client.TransportFreeMobileApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_free_mobile_get_collection**](TransportFreeMobileApi.md#api_transport_free_mobile_get_collection) | **GET** /api/transport-free-mobile | Retrieves the collection of TransportFreeMobile resources.
[**api_transport_free_mobile_id_delete**](TransportFreeMobileApi.md#api_transport_free_mobile_id_delete) | **DELETE** /api/transport-free-mobile/{id} | Removes the TransportFreeMobile resource.
[**api_transport_free_mobile_id_get**](TransportFreeMobileApi.md#api_transport_free_mobile_id_get) | **GET** /api/transport-free-mobile/{id} | Retrieves a TransportFreeMobile resource.
[**api_transport_free_mobile_id_patch**](TransportFreeMobileApi.md#api_transport_free_mobile_id_patch) | **PATCH** /api/transport-free-mobile/{id} | Updates the TransportFreeMobile resource.
[**api_transport_free_mobile_id_put**](TransportFreeMobileApi.md#api_transport_free_mobile_id_put) | **PUT** /api/transport-free-mobile/{id} | Replaces the TransportFreeMobile resource.
[**api_transport_free_mobile_post**](TransportFreeMobileApi.md#api_transport_free_mobile_post) | **POST** /api/transport-free-mobile | Creates a TransportFreeMobile resource.


# **api_transport_free_mobile_get_collection**
> List[TransportFreeMobileGet] api_transport_free_mobile_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportFreeMobile resources.

Retrieves the collection of TransportFreeMobile resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_free_mobile_get import TransportFreeMobileGet
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
    api_instance = openapi_client.TransportFreeMobileApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportFreeMobile resources.
        api_response = api_instance.api_transport_free_mobile_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportFreeMobileApi->api_transport_free_mobile_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFreeMobileApi->api_transport_free_mobile_get_collection: %s\n" % e)
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

[**List[TransportFreeMobileGet]**](TransportFreeMobileGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFreeMobile collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_free_mobile_id_delete**
> api_transport_free_mobile_id_delete(id)

Removes the TransportFreeMobile resource.

Removes the TransportFreeMobile resource.

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
    api_instance = openapi_client.TransportFreeMobileApi(api_client)
    id = 'id_example' # str | TransportFreeMobile identifier

    try:
        # Removes the TransportFreeMobile resource.
        api_instance.api_transport_free_mobile_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportFreeMobileApi->api_transport_free_mobile_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFreeMobile identifier | 

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
**204** | TransportFreeMobile resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_free_mobile_id_get**
> TransportFreeMobileGet api_transport_free_mobile_id_get(id)

Retrieves a TransportFreeMobile resource.

Retrieves a TransportFreeMobile resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_free_mobile_get import TransportFreeMobileGet
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
    api_instance = openapi_client.TransportFreeMobileApi(api_client)
    id = 'id_example' # str | TransportFreeMobile identifier

    try:
        # Retrieves a TransportFreeMobile resource.
        api_response = api_instance.api_transport_free_mobile_id_get(id)
        print("The response of TransportFreeMobileApi->api_transport_free_mobile_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFreeMobileApi->api_transport_free_mobile_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFreeMobile identifier | 

### Return type

[**TransportFreeMobileGet**](TransportFreeMobileGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFreeMobile resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_free_mobile_id_patch**
> TransportFreeMobileGet api_transport_free_mobile_id_patch(id, transport_free_mobile_patch)

Updates the TransportFreeMobile resource.

Updates the TransportFreeMobile resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_free_mobile_get import TransportFreeMobileGet
from openapi_client.models.transport_free_mobile_patch import TransportFreeMobilePatch
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
    api_instance = openapi_client.TransportFreeMobileApi(api_client)
    id = 'id_example' # str | TransportFreeMobile identifier
    transport_free_mobile_patch = openapi_client.TransportFreeMobilePatch() # TransportFreeMobilePatch | The updated TransportFreeMobile resource

    try:
        # Updates the TransportFreeMobile resource.
        api_response = api_instance.api_transport_free_mobile_id_patch(id, transport_free_mobile_patch)
        print("The response of TransportFreeMobileApi->api_transport_free_mobile_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFreeMobileApi->api_transport_free_mobile_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFreeMobile identifier | 
 **transport_free_mobile_patch** | [**TransportFreeMobilePatch**](TransportFreeMobilePatch.md)| The updated TransportFreeMobile resource | 

### Return type

[**TransportFreeMobileGet**](TransportFreeMobileGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFreeMobile resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_free_mobile_id_put**
> TransportFreeMobileGet api_transport_free_mobile_id_put(id, transport_free_mobile_put)

Replaces the TransportFreeMobile resource.

Replaces the TransportFreeMobile resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_free_mobile_get import TransportFreeMobileGet
from openapi_client.models.transport_free_mobile_put import TransportFreeMobilePut
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
    api_instance = openapi_client.TransportFreeMobileApi(api_client)
    id = 'id_example' # str | TransportFreeMobile identifier
    transport_free_mobile_put = openapi_client.TransportFreeMobilePut() # TransportFreeMobilePut | The updated TransportFreeMobile resource

    try:
        # Replaces the TransportFreeMobile resource.
        api_response = api_instance.api_transport_free_mobile_id_put(id, transport_free_mobile_put)
        print("The response of TransportFreeMobileApi->api_transport_free_mobile_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFreeMobileApi->api_transport_free_mobile_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFreeMobile identifier | 
 **transport_free_mobile_put** | [**TransportFreeMobilePut**](TransportFreeMobilePut.md)| The updated TransportFreeMobile resource | 

### Return type

[**TransportFreeMobileGet**](TransportFreeMobileGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFreeMobile resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_free_mobile_post**
> TransportFreeMobileGet api_transport_free_mobile_post(transport_free_mobile_post)

Creates a TransportFreeMobile resource.

Creates a TransportFreeMobile resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_free_mobile_get import TransportFreeMobileGet
from openapi_client.models.transport_free_mobile_post import TransportFreeMobilePost
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
    api_instance = openapi_client.TransportFreeMobileApi(api_client)
    transport_free_mobile_post = openapi_client.TransportFreeMobilePost() # TransportFreeMobilePost | The new TransportFreeMobile resource

    try:
        # Creates a TransportFreeMobile resource.
        api_response = api_instance.api_transport_free_mobile_post(transport_free_mobile_post)
        print("The response of TransportFreeMobileApi->api_transport_free_mobile_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFreeMobileApi->api_transport_free_mobile_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_free_mobile_post** | [**TransportFreeMobilePost**](TransportFreeMobilePost.md)| The new TransportFreeMobile resource | 

### Return type

[**TransportFreeMobileGet**](TransportFreeMobileGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportFreeMobile resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

