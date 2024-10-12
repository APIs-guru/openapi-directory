# openapi_client.TransportLinkedInApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_linked_in_get_collection**](TransportLinkedInApi.md#api_transport_linked_in_get_collection) | **GET** /api/transport-linked-in | Retrieves the collection of TransportLinkedIn resources.
[**api_transport_linked_in_id_delete**](TransportLinkedInApi.md#api_transport_linked_in_id_delete) | **DELETE** /api/transport-linked-in/{id} | Removes the TransportLinkedIn resource.
[**api_transport_linked_in_id_get**](TransportLinkedInApi.md#api_transport_linked_in_id_get) | **GET** /api/transport-linked-in/{id} | Retrieves a TransportLinkedIn resource.
[**api_transport_linked_in_id_patch**](TransportLinkedInApi.md#api_transport_linked_in_id_patch) | **PATCH** /api/transport-linked-in/{id} | Updates the TransportLinkedIn resource.
[**api_transport_linked_in_id_put**](TransportLinkedInApi.md#api_transport_linked_in_id_put) | **PUT** /api/transport-linked-in/{id} | Replaces the TransportLinkedIn resource.
[**api_transport_linked_in_post**](TransportLinkedInApi.md#api_transport_linked_in_post) | **POST** /api/transport-linked-in | Creates a TransportLinkedIn resource.


# **api_transport_linked_in_get_collection**
> List[TransportLinkedInGet] api_transport_linked_in_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportLinkedIn resources.

Retrieves the collection of TransportLinkedIn resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_linked_in_get import TransportLinkedInGet
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
    api_instance = openapi_client.TransportLinkedInApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportLinkedIn resources.
        api_response = api_instance.api_transport_linked_in_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportLinkedInApi->api_transport_linked_in_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLinkedInApi->api_transport_linked_in_get_collection: %s\n" % e)
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

[**List[TransportLinkedInGet]**](TransportLinkedInGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLinkedIn collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_linked_in_id_delete**
> api_transport_linked_in_id_delete(id)

Removes the TransportLinkedIn resource.

Removes the TransportLinkedIn resource.

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
    api_instance = openapi_client.TransportLinkedInApi(api_client)
    id = 'id_example' # str | TransportLinkedIn identifier

    try:
        # Removes the TransportLinkedIn resource.
        api_instance.api_transport_linked_in_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportLinkedInApi->api_transport_linked_in_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLinkedIn identifier | 

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
**204** | TransportLinkedIn resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_linked_in_id_get**
> TransportLinkedInGet api_transport_linked_in_id_get(id)

Retrieves a TransportLinkedIn resource.

Retrieves a TransportLinkedIn resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_linked_in_get import TransportLinkedInGet
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
    api_instance = openapi_client.TransportLinkedInApi(api_client)
    id = 'id_example' # str | TransportLinkedIn identifier

    try:
        # Retrieves a TransportLinkedIn resource.
        api_response = api_instance.api_transport_linked_in_id_get(id)
        print("The response of TransportLinkedInApi->api_transport_linked_in_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLinkedInApi->api_transport_linked_in_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLinkedIn identifier | 

### Return type

[**TransportLinkedInGet**](TransportLinkedInGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLinkedIn resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_linked_in_id_patch**
> TransportLinkedInGet api_transport_linked_in_id_patch(id, transport_linked_in_patch)

Updates the TransportLinkedIn resource.

Updates the TransportLinkedIn resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_linked_in_get import TransportLinkedInGet
from openapi_client.models.transport_linked_in_patch import TransportLinkedInPatch
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
    api_instance = openapi_client.TransportLinkedInApi(api_client)
    id = 'id_example' # str | TransportLinkedIn identifier
    transport_linked_in_patch = openapi_client.TransportLinkedInPatch() # TransportLinkedInPatch | The updated TransportLinkedIn resource

    try:
        # Updates the TransportLinkedIn resource.
        api_response = api_instance.api_transport_linked_in_id_patch(id, transport_linked_in_patch)
        print("The response of TransportLinkedInApi->api_transport_linked_in_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLinkedInApi->api_transport_linked_in_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLinkedIn identifier | 
 **transport_linked_in_patch** | [**TransportLinkedInPatch**](TransportLinkedInPatch.md)| The updated TransportLinkedIn resource | 

### Return type

[**TransportLinkedInGet**](TransportLinkedInGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLinkedIn resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_linked_in_id_put**
> TransportLinkedInGet api_transport_linked_in_id_put(id, transport_linked_in_put)

Replaces the TransportLinkedIn resource.

Replaces the TransportLinkedIn resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_linked_in_get import TransportLinkedInGet
from openapi_client.models.transport_linked_in_put import TransportLinkedInPut
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
    api_instance = openapi_client.TransportLinkedInApi(api_client)
    id = 'id_example' # str | TransportLinkedIn identifier
    transport_linked_in_put = openapi_client.TransportLinkedInPut() # TransportLinkedInPut | The updated TransportLinkedIn resource

    try:
        # Replaces the TransportLinkedIn resource.
        api_response = api_instance.api_transport_linked_in_id_put(id, transport_linked_in_put)
        print("The response of TransportLinkedInApi->api_transport_linked_in_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLinkedInApi->api_transport_linked_in_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLinkedIn identifier | 
 **transport_linked_in_put** | [**TransportLinkedInPut**](TransportLinkedInPut.md)| The updated TransportLinkedIn resource | 

### Return type

[**TransportLinkedInGet**](TransportLinkedInGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLinkedIn resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_linked_in_post**
> TransportLinkedInGet api_transport_linked_in_post(transport_linked_in_post)

Creates a TransportLinkedIn resource.

Creates a TransportLinkedIn resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_linked_in_get import TransportLinkedInGet
from openapi_client.models.transport_linked_in_post import TransportLinkedInPost
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
    api_instance = openapi_client.TransportLinkedInApi(api_client)
    transport_linked_in_post = openapi_client.TransportLinkedInPost() # TransportLinkedInPost | The new TransportLinkedIn resource

    try:
        # Creates a TransportLinkedIn resource.
        api_response = api_instance.api_transport_linked_in_post(transport_linked_in_post)
        print("The response of TransportLinkedInApi->api_transport_linked_in_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLinkedInApi->api_transport_linked_in_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_linked_in_post** | [**TransportLinkedInPost**](TransportLinkedInPost.md)| The new TransportLinkedIn resource | 

### Return type

[**TransportLinkedInGet**](TransportLinkedInGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportLinkedIn resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

