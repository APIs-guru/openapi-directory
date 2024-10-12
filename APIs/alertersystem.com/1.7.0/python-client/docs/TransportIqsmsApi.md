# openapi_client.TransportIqsmsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_iqsms_get_collection**](TransportIqsmsApi.md#api_transport_iqsms_get_collection) | **GET** /api/transport-iqsms | Retrieves the collection of TransportIqsms resources.
[**api_transport_iqsms_id_delete**](TransportIqsmsApi.md#api_transport_iqsms_id_delete) | **DELETE** /api/transport-iqsms/{id} | Removes the TransportIqsms resource.
[**api_transport_iqsms_id_get**](TransportIqsmsApi.md#api_transport_iqsms_id_get) | **GET** /api/transport-iqsms/{id} | Retrieves a TransportIqsms resource.
[**api_transport_iqsms_id_patch**](TransportIqsmsApi.md#api_transport_iqsms_id_patch) | **PATCH** /api/transport-iqsms/{id} | Updates the TransportIqsms resource.
[**api_transport_iqsms_id_put**](TransportIqsmsApi.md#api_transport_iqsms_id_put) | **PUT** /api/transport-iqsms/{id} | Replaces the TransportIqsms resource.
[**api_transport_iqsms_post**](TransportIqsmsApi.md#api_transport_iqsms_post) | **POST** /api/transport-iqsms | Creates a TransportIqsms resource.


# **api_transport_iqsms_get_collection**
> List[TransportIqsmsGet] api_transport_iqsms_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportIqsms resources.

Retrieves the collection of TransportIqsms resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_iqsms_get import TransportIqsmsGet
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
    api_instance = openapi_client.TransportIqsmsApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportIqsms resources.
        api_response = api_instance.api_transport_iqsms_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportIqsmsApi->api_transport_iqsms_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportIqsmsApi->api_transport_iqsms_get_collection: %s\n" % e)
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

[**List[TransportIqsmsGet]**](TransportIqsmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportIqsms collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_iqsms_id_delete**
> api_transport_iqsms_id_delete(id)

Removes the TransportIqsms resource.

Removes the TransportIqsms resource.

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
    api_instance = openapi_client.TransportIqsmsApi(api_client)
    id = 'id_example' # str | TransportIqsms identifier

    try:
        # Removes the TransportIqsms resource.
        api_instance.api_transport_iqsms_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportIqsmsApi->api_transport_iqsms_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportIqsms identifier | 

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
**204** | TransportIqsms resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_iqsms_id_get**
> TransportIqsmsGet api_transport_iqsms_id_get(id)

Retrieves a TransportIqsms resource.

Retrieves a TransportIqsms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_iqsms_get import TransportIqsmsGet
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
    api_instance = openapi_client.TransportIqsmsApi(api_client)
    id = 'id_example' # str | TransportIqsms identifier

    try:
        # Retrieves a TransportIqsms resource.
        api_response = api_instance.api_transport_iqsms_id_get(id)
        print("The response of TransportIqsmsApi->api_transport_iqsms_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportIqsmsApi->api_transport_iqsms_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportIqsms identifier | 

### Return type

[**TransportIqsmsGet**](TransportIqsmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportIqsms resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_iqsms_id_patch**
> TransportIqsmsGet api_transport_iqsms_id_patch(id, transport_iqsms_patch)

Updates the TransportIqsms resource.

Updates the TransportIqsms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_iqsms_get import TransportIqsmsGet
from openapi_client.models.transport_iqsms_patch import TransportIqsmsPatch
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
    api_instance = openapi_client.TransportIqsmsApi(api_client)
    id = 'id_example' # str | TransportIqsms identifier
    transport_iqsms_patch = openapi_client.TransportIqsmsPatch() # TransportIqsmsPatch | The updated TransportIqsms resource

    try:
        # Updates the TransportIqsms resource.
        api_response = api_instance.api_transport_iqsms_id_patch(id, transport_iqsms_patch)
        print("The response of TransportIqsmsApi->api_transport_iqsms_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportIqsmsApi->api_transport_iqsms_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportIqsms identifier | 
 **transport_iqsms_patch** | [**TransportIqsmsPatch**](TransportIqsmsPatch.md)| The updated TransportIqsms resource | 

### Return type

[**TransportIqsmsGet**](TransportIqsmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportIqsms resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_iqsms_id_put**
> TransportIqsmsGet api_transport_iqsms_id_put(id, transport_iqsms_put)

Replaces the TransportIqsms resource.

Replaces the TransportIqsms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_iqsms_get import TransportIqsmsGet
from openapi_client.models.transport_iqsms_put import TransportIqsmsPut
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
    api_instance = openapi_client.TransportIqsmsApi(api_client)
    id = 'id_example' # str | TransportIqsms identifier
    transport_iqsms_put = openapi_client.TransportIqsmsPut() # TransportIqsmsPut | The updated TransportIqsms resource

    try:
        # Replaces the TransportIqsms resource.
        api_response = api_instance.api_transport_iqsms_id_put(id, transport_iqsms_put)
        print("The response of TransportIqsmsApi->api_transport_iqsms_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportIqsmsApi->api_transport_iqsms_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportIqsms identifier | 
 **transport_iqsms_put** | [**TransportIqsmsPut**](TransportIqsmsPut.md)| The updated TransportIqsms resource | 

### Return type

[**TransportIqsmsGet**](TransportIqsmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportIqsms resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_iqsms_post**
> TransportIqsmsGet api_transport_iqsms_post(transport_iqsms_post)

Creates a TransportIqsms resource.

Creates a TransportIqsms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_iqsms_get import TransportIqsmsGet
from openapi_client.models.transport_iqsms_post import TransportIqsmsPost
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
    api_instance = openapi_client.TransportIqsmsApi(api_client)
    transport_iqsms_post = openapi_client.TransportIqsmsPost() # TransportIqsmsPost | The new TransportIqsms resource

    try:
        # Creates a TransportIqsms resource.
        api_response = api_instance.api_transport_iqsms_post(transport_iqsms_post)
        print("The response of TransportIqsmsApi->api_transport_iqsms_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportIqsmsApi->api_transport_iqsms_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_iqsms_post** | [**TransportIqsmsPost**](TransportIqsmsPost.md)| The new TransportIqsms resource | 

### Return type

[**TransportIqsmsGet**](TransportIqsmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportIqsms resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

