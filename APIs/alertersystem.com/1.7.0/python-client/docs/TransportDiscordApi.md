# openapi_client.TransportDiscordApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_discord_get_collection**](TransportDiscordApi.md#api_transport_discord_get_collection) | **GET** /api/transport-discord | Retrieves the collection of TransportDiscord resources.
[**api_transport_discord_id_delete**](TransportDiscordApi.md#api_transport_discord_id_delete) | **DELETE** /api/transport-discord/{id} | Removes the TransportDiscord resource.
[**api_transport_discord_id_get**](TransportDiscordApi.md#api_transport_discord_id_get) | **GET** /api/transport-discord/{id} | Retrieves a TransportDiscord resource.
[**api_transport_discord_id_patch**](TransportDiscordApi.md#api_transport_discord_id_patch) | **PATCH** /api/transport-discord/{id} | Updates the TransportDiscord resource.
[**api_transport_discord_id_put**](TransportDiscordApi.md#api_transport_discord_id_put) | **PUT** /api/transport-discord/{id} | Replaces the TransportDiscord resource.
[**api_transport_discord_post**](TransportDiscordApi.md#api_transport_discord_post) | **POST** /api/transport-discord | Creates a TransportDiscord resource.


# **api_transport_discord_get_collection**
> List[TransportDiscordGet] api_transport_discord_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportDiscord resources.

Retrieves the collection of TransportDiscord resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_discord_get import TransportDiscordGet
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
    api_instance = openapi_client.TransportDiscordApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportDiscord resources.
        api_response = api_instance.api_transport_discord_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportDiscordApi->api_transport_discord_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportDiscordApi->api_transport_discord_get_collection: %s\n" % e)
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

[**List[TransportDiscordGet]**](TransportDiscordGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportDiscord collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_discord_id_delete**
> api_transport_discord_id_delete(id)

Removes the TransportDiscord resource.

Removes the TransportDiscord resource.

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
    api_instance = openapi_client.TransportDiscordApi(api_client)
    id = 'id_example' # str | TransportDiscord identifier

    try:
        # Removes the TransportDiscord resource.
        api_instance.api_transport_discord_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportDiscordApi->api_transport_discord_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportDiscord identifier | 

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
**204** | TransportDiscord resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_discord_id_get**
> TransportDiscordGet api_transport_discord_id_get(id)

Retrieves a TransportDiscord resource.

Retrieves a TransportDiscord resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_discord_get import TransportDiscordGet
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
    api_instance = openapi_client.TransportDiscordApi(api_client)
    id = 'id_example' # str | TransportDiscord identifier

    try:
        # Retrieves a TransportDiscord resource.
        api_response = api_instance.api_transport_discord_id_get(id)
        print("The response of TransportDiscordApi->api_transport_discord_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportDiscordApi->api_transport_discord_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportDiscord identifier | 

### Return type

[**TransportDiscordGet**](TransportDiscordGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportDiscord resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_discord_id_patch**
> TransportDiscordGet api_transport_discord_id_patch(id, transport_discord_patch)

Updates the TransportDiscord resource.

Updates the TransportDiscord resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_discord_get import TransportDiscordGet
from openapi_client.models.transport_discord_patch import TransportDiscordPatch
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
    api_instance = openapi_client.TransportDiscordApi(api_client)
    id = 'id_example' # str | TransportDiscord identifier
    transport_discord_patch = openapi_client.TransportDiscordPatch() # TransportDiscordPatch | The updated TransportDiscord resource

    try:
        # Updates the TransportDiscord resource.
        api_response = api_instance.api_transport_discord_id_patch(id, transport_discord_patch)
        print("The response of TransportDiscordApi->api_transport_discord_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportDiscordApi->api_transport_discord_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportDiscord identifier | 
 **transport_discord_patch** | [**TransportDiscordPatch**](TransportDiscordPatch.md)| The updated TransportDiscord resource | 

### Return type

[**TransportDiscordGet**](TransportDiscordGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportDiscord resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_discord_id_put**
> TransportDiscordGet api_transport_discord_id_put(id, transport_discord_put)

Replaces the TransportDiscord resource.

Replaces the TransportDiscord resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_discord_get import TransportDiscordGet
from openapi_client.models.transport_discord_put import TransportDiscordPut
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
    api_instance = openapi_client.TransportDiscordApi(api_client)
    id = 'id_example' # str | TransportDiscord identifier
    transport_discord_put = openapi_client.TransportDiscordPut() # TransportDiscordPut | The updated TransportDiscord resource

    try:
        # Replaces the TransportDiscord resource.
        api_response = api_instance.api_transport_discord_id_put(id, transport_discord_put)
        print("The response of TransportDiscordApi->api_transport_discord_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportDiscordApi->api_transport_discord_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportDiscord identifier | 
 **transport_discord_put** | [**TransportDiscordPut**](TransportDiscordPut.md)| The updated TransportDiscord resource | 

### Return type

[**TransportDiscordGet**](TransportDiscordGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportDiscord resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_discord_post**
> TransportDiscordGet api_transport_discord_post(transport_discord_post)

Creates a TransportDiscord resource.

Creates a TransportDiscord resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_discord_get import TransportDiscordGet
from openapi_client.models.transport_discord_post import TransportDiscordPost
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
    api_instance = openapi_client.TransportDiscordApi(api_client)
    transport_discord_post = openapi_client.TransportDiscordPost() # TransportDiscordPost | The new TransportDiscord resource

    try:
        # Creates a TransportDiscord resource.
        api_response = api_instance.api_transport_discord_post(transport_discord_post)
        print("The response of TransportDiscordApi->api_transport_discord_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportDiscordApi->api_transport_discord_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_discord_post** | [**TransportDiscordPost**](TransportDiscordPost.md)| The new TransportDiscord resource | 

### Return type

[**TransportDiscordGet**](TransportDiscordGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportDiscord resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

