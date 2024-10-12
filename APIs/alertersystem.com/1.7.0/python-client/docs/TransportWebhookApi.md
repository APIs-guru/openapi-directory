# openapi_client.TransportWebhookApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_webhook_get_collection**](TransportWebhookApi.md#api_transport_webhook_get_collection) | **GET** /api/transport-webhook | Retrieves the collection of TransportWebhook resources.
[**api_transport_webhook_id_delete**](TransportWebhookApi.md#api_transport_webhook_id_delete) | **DELETE** /api/transport-webhook/{id} | Removes the TransportWebhook resource.
[**api_transport_webhook_id_get**](TransportWebhookApi.md#api_transport_webhook_id_get) | **GET** /api/transport-webhook/{id} | Retrieves a TransportWebhook resource.
[**api_transport_webhook_id_patch**](TransportWebhookApi.md#api_transport_webhook_id_patch) | **PATCH** /api/transport-webhook/{id} | Updates the TransportWebhook resource.
[**api_transport_webhook_id_put**](TransportWebhookApi.md#api_transport_webhook_id_put) | **PUT** /api/transport-webhook/{id} | Replaces the TransportWebhook resource.
[**api_transport_webhook_post**](TransportWebhookApi.md#api_transport_webhook_post) | **POST** /api/transport-webhook | Creates a TransportWebhook resource.


# **api_transport_webhook_get_collection**
> List[TransportWebhookGet] api_transport_webhook_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportWebhook resources.

Retrieves the collection of TransportWebhook resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_webhook_get import TransportWebhookGet
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
    api_instance = openapi_client.TransportWebhookApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportWebhook resources.
        api_response = api_instance.api_transport_webhook_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportWebhookApi->api_transport_webhook_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportWebhookApi->api_transport_webhook_get_collection: %s\n" % e)
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

[**List[TransportWebhookGet]**](TransportWebhookGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportWebhook collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_webhook_id_delete**
> api_transport_webhook_id_delete(id)

Removes the TransportWebhook resource.

Removes the TransportWebhook resource.

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
    api_instance = openapi_client.TransportWebhookApi(api_client)
    id = 'id_example' # str | TransportWebhook identifier

    try:
        # Removes the TransportWebhook resource.
        api_instance.api_transport_webhook_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportWebhookApi->api_transport_webhook_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportWebhook identifier | 

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
**204** | TransportWebhook resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_webhook_id_get**
> TransportWebhookGet api_transport_webhook_id_get(id)

Retrieves a TransportWebhook resource.

Retrieves a TransportWebhook resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_webhook_get import TransportWebhookGet
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
    api_instance = openapi_client.TransportWebhookApi(api_client)
    id = 'id_example' # str | TransportWebhook identifier

    try:
        # Retrieves a TransportWebhook resource.
        api_response = api_instance.api_transport_webhook_id_get(id)
        print("The response of TransportWebhookApi->api_transport_webhook_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportWebhookApi->api_transport_webhook_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportWebhook identifier | 

### Return type

[**TransportWebhookGet**](TransportWebhookGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportWebhook resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_webhook_id_patch**
> TransportWebhookGet api_transport_webhook_id_patch(id, transport_webhook_patch)

Updates the TransportWebhook resource.

Updates the TransportWebhook resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_webhook_get import TransportWebhookGet
from openapi_client.models.transport_webhook_patch import TransportWebhookPatch
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
    api_instance = openapi_client.TransportWebhookApi(api_client)
    id = 'id_example' # str | TransportWebhook identifier
    transport_webhook_patch = openapi_client.TransportWebhookPatch() # TransportWebhookPatch | The updated TransportWebhook resource

    try:
        # Updates the TransportWebhook resource.
        api_response = api_instance.api_transport_webhook_id_patch(id, transport_webhook_patch)
        print("The response of TransportWebhookApi->api_transport_webhook_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportWebhookApi->api_transport_webhook_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportWebhook identifier | 
 **transport_webhook_patch** | [**TransportWebhookPatch**](TransportWebhookPatch.md)| The updated TransportWebhook resource | 

### Return type

[**TransportWebhookGet**](TransportWebhookGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportWebhook resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_webhook_id_put**
> TransportWebhookGet api_transport_webhook_id_put(id, transport_webhook_put)

Replaces the TransportWebhook resource.

Replaces the TransportWebhook resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_webhook_get import TransportWebhookGet
from openapi_client.models.transport_webhook_put import TransportWebhookPut
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
    api_instance = openapi_client.TransportWebhookApi(api_client)
    id = 'id_example' # str | TransportWebhook identifier
    transport_webhook_put = openapi_client.TransportWebhookPut() # TransportWebhookPut | The updated TransportWebhook resource

    try:
        # Replaces the TransportWebhook resource.
        api_response = api_instance.api_transport_webhook_id_put(id, transport_webhook_put)
        print("The response of TransportWebhookApi->api_transport_webhook_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportWebhookApi->api_transport_webhook_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportWebhook identifier | 
 **transport_webhook_put** | [**TransportWebhookPut**](TransportWebhookPut.md)| The updated TransportWebhook resource | 

### Return type

[**TransportWebhookGet**](TransportWebhookGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportWebhook resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_webhook_post**
> TransportWebhookGet api_transport_webhook_post(transport_webhook_post)

Creates a TransportWebhook resource.

Creates a TransportWebhook resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_webhook_get import TransportWebhookGet
from openapi_client.models.transport_webhook_post import TransportWebhookPost
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
    api_instance = openapi_client.TransportWebhookApi(api_client)
    transport_webhook_post = openapi_client.TransportWebhookPost() # TransportWebhookPost | The new TransportWebhook resource

    try:
        # Creates a TransportWebhook resource.
        api_response = api_instance.api_transport_webhook_post(transport_webhook_post)
        print("The response of TransportWebhookApi->api_transport_webhook_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportWebhookApi->api_transport_webhook_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_webhook_post** | [**TransportWebhookPost**](TransportWebhookPost.md)| The new TransportWebhook resource | 

### Return type

[**TransportWebhookGet**](TransportWebhookGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportWebhook resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

