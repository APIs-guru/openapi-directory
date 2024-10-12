# openapi_client.TransportTrelloApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_trello_get_collection**](TransportTrelloApi.md#api_transport_trello_get_collection) | **GET** /api/transport-trello | Retrieves the collection of TransportTrello resources.
[**api_transport_trello_id_delete**](TransportTrelloApi.md#api_transport_trello_id_delete) | **DELETE** /api/transport-trello/{id} | Removes the TransportTrello resource.
[**api_transport_trello_id_get**](TransportTrelloApi.md#api_transport_trello_id_get) | **GET** /api/transport-trello/{id} | Retrieves a TransportTrello resource.
[**api_transport_trello_id_patch**](TransportTrelloApi.md#api_transport_trello_id_patch) | **PATCH** /api/transport-trello/{id} | Updates the TransportTrello resource.
[**api_transport_trello_id_put**](TransportTrelloApi.md#api_transport_trello_id_put) | **PUT** /api/transport-trello/{id} | Replaces the TransportTrello resource.
[**api_transport_trello_post**](TransportTrelloApi.md#api_transport_trello_post) | **POST** /api/transport-trello | Creates a TransportTrello resource.


# **api_transport_trello_get_collection**
> List[TransportTrelloGet] api_transport_trello_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportTrello resources.

Retrieves the collection of TransportTrello resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_trello_get import TransportTrelloGet
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
    api_instance = openapi_client.TransportTrelloApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportTrello resources.
        api_response = api_instance.api_transport_trello_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportTrelloApi->api_transport_trello_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTrelloApi->api_transport_trello_get_collection: %s\n" % e)
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

[**List[TransportTrelloGet]**](TransportTrelloGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTrello collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_trello_id_delete**
> api_transport_trello_id_delete(id)

Removes the TransportTrello resource.

Removes the TransportTrello resource.

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
    api_instance = openapi_client.TransportTrelloApi(api_client)
    id = 'id_example' # str | TransportTrello identifier

    try:
        # Removes the TransportTrello resource.
        api_instance.api_transport_trello_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportTrelloApi->api_transport_trello_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTrello identifier | 

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
**204** | TransportTrello resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_trello_id_get**
> TransportTrelloGet api_transport_trello_id_get(id)

Retrieves a TransportTrello resource.

Retrieves a TransportTrello resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_trello_get import TransportTrelloGet
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
    api_instance = openapi_client.TransportTrelloApi(api_client)
    id = 'id_example' # str | TransportTrello identifier

    try:
        # Retrieves a TransportTrello resource.
        api_response = api_instance.api_transport_trello_id_get(id)
        print("The response of TransportTrelloApi->api_transport_trello_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTrelloApi->api_transport_trello_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTrello identifier | 

### Return type

[**TransportTrelloGet**](TransportTrelloGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTrello resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_trello_id_patch**
> TransportTrelloGet api_transport_trello_id_patch(id, transport_trello_patch)

Updates the TransportTrello resource.

Updates the TransportTrello resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_trello_get import TransportTrelloGet
from openapi_client.models.transport_trello_patch import TransportTrelloPatch
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
    api_instance = openapi_client.TransportTrelloApi(api_client)
    id = 'id_example' # str | TransportTrello identifier
    transport_trello_patch = openapi_client.TransportTrelloPatch() # TransportTrelloPatch | The updated TransportTrello resource

    try:
        # Updates the TransportTrello resource.
        api_response = api_instance.api_transport_trello_id_patch(id, transport_trello_patch)
        print("The response of TransportTrelloApi->api_transport_trello_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTrelloApi->api_transport_trello_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTrello identifier | 
 **transport_trello_patch** | [**TransportTrelloPatch**](TransportTrelloPatch.md)| The updated TransportTrello resource | 

### Return type

[**TransportTrelloGet**](TransportTrelloGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTrello resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_trello_id_put**
> TransportTrelloGet api_transport_trello_id_put(id, transport_trello_put)

Replaces the TransportTrello resource.

Replaces the TransportTrello resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_trello_get import TransportTrelloGet
from openapi_client.models.transport_trello_put import TransportTrelloPut
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
    api_instance = openapi_client.TransportTrelloApi(api_client)
    id = 'id_example' # str | TransportTrello identifier
    transport_trello_put = openapi_client.TransportTrelloPut() # TransportTrelloPut | The updated TransportTrello resource

    try:
        # Replaces the TransportTrello resource.
        api_response = api_instance.api_transport_trello_id_put(id, transport_trello_put)
        print("The response of TransportTrelloApi->api_transport_trello_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTrelloApi->api_transport_trello_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTrello identifier | 
 **transport_trello_put** | [**TransportTrelloPut**](TransportTrelloPut.md)| The updated TransportTrello resource | 

### Return type

[**TransportTrelloGet**](TransportTrelloGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTrello resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_trello_post**
> TransportTrelloGet api_transport_trello_post(transport_trello_post)

Creates a TransportTrello resource.

Creates a TransportTrello resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_trello_get import TransportTrelloGet
from openapi_client.models.transport_trello_post import TransportTrelloPost
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
    api_instance = openapi_client.TransportTrelloApi(api_client)
    transport_trello_post = openapi_client.TransportTrelloPost() # TransportTrelloPost | The new TransportTrello resource

    try:
        # Creates a TransportTrello resource.
        api_response = api_instance.api_transport_trello_post(transport_trello_post)
        print("The response of TransportTrelloApi->api_transport_trello_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTrelloApi->api_transport_trello_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_trello_post** | [**TransportTrelloPost**](TransportTrelloPost.md)| The new TransportTrello resource | 

### Return type

[**TransportTrelloGet**](TransportTrelloGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportTrello resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

