# openapi_client.TransportVonageApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_vonage_get_collection**](TransportVonageApi.md#api_transport_vonage_get_collection) | **GET** /api/transport-vonage | Retrieves the collection of TransportVonage resources.
[**api_transport_vonage_id_delete**](TransportVonageApi.md#api_transport_vonage_id_delete) | **DELETE** /api/transport-vonage/{id} | Removes the TransportVonage resource.
[**api_transport_vonage_id_get**](TransportVonageApi.md#api_transport_vonage_id_get) | **GET** /api/transport-vonage/{id} | Retrieves a TransportVonage resource.
[**api_transport_vonage_id_patch**](TransportVonageApi.md#api_transport_vonage_id_patch) | **PATCH** /api/transport-vonage/{id} | Updates the TransportVonage resource.
[**api_transport_vonage_id_put**](TransportVonageApi.md#api_transport_vonage_id_put) | **PUT** /api/transport-vonage/{id} | Replaces the TransportVonage resource.
[**api_transport_vonage_post**](TransportVonageApi.md#api_transport_vonage_post) | **POST** /api/transport-vonage | Creates a TransportVonage resource.


# **api_transport_vonage_get_collection**
> List[TransportVonageGet] api_transport_vonage_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportVonage resources.

Retrieves the collection of TransportVonage resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_vonage_get import TransportVonageGet
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
    api_instance = openapi_client.TransportVonageApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportVonage resources.
        api_response = api_instance.api_transport_vonage_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportVonageApi->api_transport_vonage_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportVonageApi->api_transport_vonage_get_collection: %s\n" % e)
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

[**List[TransportVonageGet]**](TransportVonageGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportVonage collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_vonage_id_delete**
> api_transport_vonage_id_delete(id)

Removes the TransportVonage resource.

Removes the TransportVonage resource.

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
    api_instance = openapi_client.TransportVonageApi(api_client)
    id = 'id_example' # str | TransportVonage identifier

    try:
        # Removes the TransportVonage resource.
        api_instance.api_transport_vonage_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportVonageApi->api_transport_vonage_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportVonage identifier | 

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
**204** | TransportVonage resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_vonage_id_get**
> TransportVonageGet api_transport_vonage_id_get(id)

Retrieves a TransportVonage resource.

Retrieves a TransportVonage resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_vonage_get import TransportVonageGet
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
    api_instance = openapi_client.TransportVonageApi(api_client)
    id = 'id_example' # str | TransportVonage identifier

    try:
        # Retrieves a TransportVonage resource.
        api_response = api_instance.api_transport_vonage_id_get(id)
        print("The response of TransportVonageApi->api_transport_vonage_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportVonageApi->api_transport_vonage_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportVonage identifier | 

### Return type

[**TransportVonageGet**](TransportVonageGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportVonage resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_vonage_id_patch**
> TransportVonageGet api_transport_vonage_id_patch(id, transport_vonage_patch)

Updates the TransportVonage resource.

Updates the TransportVonage resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_vonage_get import TransportVonageGet
from openapi_client.models.transport_vonage_patch import TransportVonagePatch
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
    api_instance = openapi_client.TransportVonageApi(api_client)
    id = 'id_example' # str | TransportVonage identifier
    transport_vonage_patch = openapi_client.TransportVonagePatch() # TransportVonagePatch | The updated TransportVonage resource

    try:
        # Updates the TransportVonage resource.
        api_response = api_instance.api_transport_vonage_id_patch(id, transport_vonage_patch)
        print("The response of TransportVonageApi->api_transport_vonage_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportVonageApi->api_transport_vonage_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportVonage identifier | 
 **transport_vonage_patch** | [**TransportVonagePatch**](TransportVonagePatch.md)| The updated TransportVonage resource | 

### Return type

[**TransportVonageGet**](TransportVonageGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportVonage resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_vonage_id_put**
> TransportVonageGet api_transport_vonage_id_put(id, transport_vonage_put)

Replaces the TransportVonage resource.

Replaces the TransportVonage resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_vonage_get import TransportVonageGet
from openapi_client.models.transport_vonage_put import TransportVonagePut
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
    api_instance = openapi_client.TransportVonageApi(api_client)
    id = 'id_example' # str | TransportVonage identifier
    transport_vonage_put = openapi_client.TransportVonagePut() # TransportVonagePut | The updated TransportVonage resource

    try:
        # Replaces the TransportVonage resource.
        api_response = api_instance.api_transport_vonage_id_put(id, transport_vonage_put)
        print("The response of TransportVonageApi->api_transport_vonage_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportVonageApi->api_transport_vonage_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportVonage identifier | 
 **transport_vonage_put** | [**TransportVonagePut**](TransportVonagePut.md)| The updated TransportVonage resource | 

### Return type

[**TransportVonageGet**](TransportVonageGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportVonage resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_vonage_post**
> TransportVonageGet api_transport_vonage_post(transport_vonage_post)

Creates a TransportVonage resource.

Creates a TransportVonage resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_vonage_get import TransportVonageGet
from openapi_client.models.transport_vonage_post import TransportVonagePost
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
    api_instance = openapi_client.TransportVonageApi(api_client)
    transport_vonage_post = openapi_client.TransportVonagePost() # TransportVonagePost | The new TransportVonage resource

    try:
        # Creates a TransportVonage resource.
        api_response = api_instance.api_transport_vonage_post(transport_vonage_post)
        print("The response of TransportVonageApi->api_transport_vonage_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportVonageApi->api_transport_vonage_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_vonage_post** | [**TransportVonagePost**](TransportVonagePost.md)| The new TransportVonage resource | 

### Return type

[**TransportVonageGet**](TransportVonageGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportVonage resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

