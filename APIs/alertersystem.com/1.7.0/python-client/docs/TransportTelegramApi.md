# openapi_client.TransportTelegramApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_telegram_get_collection**](TransportTelegramApi.md#api_transport_telegram_get_collection) | **GET** /api/transport-telegram | Retrieves the collection of TransportTelegram resources.
[**api_transport_telegram_id_delete**](TransportTelegramApi.md#api_transport_telegram_id_delete) | **DELETE** /api/transport-telegram/{id} | Removes the TransportTelegram resource.
[**api_transport_telegram_id_get**](TransportTelegramApi.md#api_transport_telegram_id_get) | **GET** /api/transport-telegram/{id} | Retrieves a TransportTelegram resource.
[**api_transport_telegram_id_patch**](TransportTelegramApi.md#api_transport_telegram_id_patch) | **PATCH** /api/transport-telegram/{id} | Updates the TransportTelegram resource.
[**api_transport_telegram_id_put**](TransportTelegramApi.md#api_transport_telegram_id_put) | **PUT** /api/transport-telegram/{id} | Replaces the TransportTelegram resource.
[**api_transport_telegram_post**](TransportTelegramApi.md#api_transport_telegram_post) | **POST** /api/transport-telegram | Creates a TransportTelegram resource.


# **api_transport_telegram_get_collection**
> List[TransportTelegramGet] api_transport_telegram_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportTelegram resources.

Retrieves the collection of TransportTelegram resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_telegram_get import TransportTelegramGet
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
    api_instance = openapi_client.TransportTelegramApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportTelegram resources.
        api_response = api_instance.api_transport_telegram_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportTelegramApi->api_transport_telegram_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTelegramApi->api_transport_telegram_get_collection: %s\n" % e)
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

[**List[TransportTelegramGet]**](TransportTelegramGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTelegram collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_telegram_id_delete**
> api_transport_telegram_id_delete(id)

Removes the TransportTelegram resource.

Removes the TransportTelegram resource.

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
    api_instance = openapi_client.TransportTelegramApi(api_client)
    id = 'id_example' # str | TransportTelegram identifier

    try:
        # Removes the TransportTelegram resource.
        api_instance.api_transport_telegram_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportTelegramApi->api_transport_telegram_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTelegram identifier | 

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
**204** | TransportTelegram resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_telegram_id_get**
> TransportTelegramGet api_transport_telegram_id_get(id)

Retrieves a TransportTelegram resource.

Retrieves a TransportTelegram resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_telegram_get import TransportTelegramGet
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
    api_instance = openapi_client.TransportTelegramApi(api_client)
    id = 'id_example' # str | TransportTelegram identifier

    try:
        # Retrieves a TransportTelegram resource.
        api_response = api_instance.api_transport_telegram_id_get(id)
        print("The response of TransportTelegramApi->api_transport_telegram_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTelegramApi->api_transport_telegram_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTelegram identifier | 

### Return type

[**TransportTelegramGet**](TransportTelegramGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTelegram resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_telegram_id_patch**
> TransportTelegramGet api_transport_telegram_id_patch(id, transport_telegram_patch)

Updates the TransportTelegram resource.

Updates the TransportTelegram resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_telegram_get import TransportTelegramGet
from openapi_client.models.transport_telegram_patch import TransportTelegramPatch
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
    api_instance = openapi_client.TransportTelegramApi(api_client)
    id = 'id_example' # str | TransportTelegram identifier
    transport_telegram_patch = openapi_client.TransportTelegramPatch() # TransportTelegramPatch | The updated TransportTelegram resource

    try:
        # Updates the TransportTelegram resource.
        api_response = api_instance.api_transport_telegram_id_patch(id, transport_telegram_patch)
        print("The response of TransportTelegramApi->api_transport_telegram_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTelegramApi->api_transport_telegram_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTelegram identifier | 
 **transport_telegram_patch** | [**TransportTelegramPatch**](TransportTelegramPatch.md)| The updated TransportTelegram resource | 

### Return type

[**TransportTelegramGet**](TransportTelegramGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTelegram resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_telegram_id_put**
> TransportTelegramGet api_transport_telegram_id_put(id, transport_telegram_put)

Replaces the TransportTelegram resource.

Replaces the TransportTelegram resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_telegram_get import TransportTelegramGet
from openapi_client.models.transport_telegram_put import TransportTelegramPut
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
    api_instance = openapi_client.TransportTelegramApi(api_client)
    id = 'id_example' # str | TransportTelegram identifier
    transport_telegram_put = openapi_client.TransportTelegramPut() # TransportTelegramPut | The updated TransportTelegram resource

    try:
        # Replaces the TransportTelegram resource.
        api_response = api_instance.api_transport_telegram_id_put(id, transport_telegram_put)
        print("The response of TransportTelegramApi->api_transport_telegram_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTelegramApi->api_transport_telegram_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTelegram identifier | 
 **transport_telegram_put** | [**TransportTelegramPut**](TransportTelegramPut.md)| The updated TransportTelegram resource | 

### Return type

[**TransportTelegramGet**](TransportTelegramGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTelegram resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_telegram_post**
> TransportTelegramGet api_transport_telegram_post(transport_telegram_post)

Creates a TransportTelegram resource.

Creates a TransportTelegram resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_telegram_get import TransportTelegramGet
from openapi_client.models.transport_telegram_post import TransportTelegramPost
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
    api_instance = openapi_client.TransportTelegramApi(api_client)
    transport_telegram_post = openapi_client.TransportTelegramPost() # TransportTelegramPost | The new TransportTelegram resource

    try:
        # Creates a TransportTelegram resource.
        api_response = api_instance.api_transport_telegram_post(transport_telegram_post)
        print("The response of TransportTelegramApi->api_transport_telegram_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTelegramApi->api_transport_telegram_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_telegram_post** | [**TransportTelegramPost**](TransportTelegramPost.md)| The new TransportTelegram resource | 

### Return type

[**TransportTelegramGet**](TransportTelegramGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportTelegram resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

