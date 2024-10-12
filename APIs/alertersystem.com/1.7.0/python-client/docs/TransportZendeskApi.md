# openapi_client.TransportZendeskApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_zendesk_get_collection**](TransportZendeskApi.md#api_transport_zendesk_get_collection) | **GET** /api/transport-zendesk | Retrieves the collection of TransportZendesk resources.
[**api_transport_zendesk_id_delete**](TransportZendeskApi.md#api_transport_zendesk_id_delete) | **DELETE** /api/transport-zendesk/{id} | Removes the TransportZendesk resource.
[**api_transport_zendesk_id_get**](TransportZendeskApi.md#api_transport_zendesk_id_get) | **GET** /api/transport-zendesk/{id} | Retrieves a TransportZendesk resource.
[**api_transport_zendesk_id_patch**](TransportZendeskApi.md#api_transport_zendesk_id_patch) | **PATCH** /api/transport-zendesk/{id} | Updates the TransportZendesk resource.
[**api_transport_zendesk_id_put**](TransportZendeskApi.md#api_transport_zendesk_id_put) | **PUT** /api/transport-zendesk/{id} | Replaces the TransportZendesk resource.
[**api_transport_zendesk_post**](TransportZendeskApi.md#api_transport_zendesk_post) | **POST** /api/transport-zendesk | Creates a TransportZendesk resource.


# **api_transport_zendesk_get_collection**
> List[TransportZendeskGet] api_transport_zendesk_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportZendesk resources.

Retrieves the collection of TransportZendesk resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_zendesk_get import TransportZendeskGet
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
    api_instance = openapi_client.TransportZendeskApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportZendesk resources.
        api_response = api_instance.api_transport_zendesk_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportZendeskApi->api_transport_zendesk_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportZendeskApi->api_transport_zendesk_get_collection: %s\n" % e)
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

[**List[TransportZendeskGet]**](TransportZendeskGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportZendesk collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_zendesk_id_delete**
> api_transport_zendesk_id_delete(id)

Removes the TransportZendesk resource.

Removes the TransportZendesk resource.

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
    api_instance = openapi_client.TransportZendeskApi(api_client)
    id = 'id_example' # str | TransportZendesk identifier

    try:
        # Removes the TransportZendesk resource.
        api_instance.api_transport_zendesk_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportZendeskApi->api_transport_zendesk_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportZendesk identifier | 

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
**204** | TransportZendesk resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_zendesk_id_get**
> TransportZendeskGet api_transport_zendesk_id_get(id)

Retrieves a TransportZendesk resource.

Retrieves a TransportZendesk resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_zendesk_get import TransportZendeskGet
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
    api_instance = openapi_client.TransportZendeskApi(api_client)
    id = 'id_example' # str | TransportZendesk identifier

    try:
        # Retrieves a TransportZendesk resource.
        api_response = api_instance.api_transport_zendesk_id_get(id)
        print("The response of TransportZendeskApi->api_transport_zendesk_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportZendeskApi->api_transport_zendesk_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportZendesk identifier | 

### Return type

[**TransportZendeskGet**](TransportZendeskGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportZendesk resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_zendesk_id_patch**
> TransportZendeskGet api_transport_zendesk_id_patch(id, transport_zendesk_patch)

Updates the TransportZendesk resource.

Updates the TransportZendesk resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_zendesk_get import TransportZendeskGet
from openapi_client.models.transport_zendesk_patch import TransportZendeskPatch
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
    api_instance = openapi_client.TransportZendeskApi(api_client)
    id = 'id_example' # str | TransportZendesk identifier
    transport_zendesk_patch = openapi_client.TransportZendeskPatch() # TransportZendeskPatch | The updated TransportZendesk resource

    try:
        # Updates the TransportZendesk resource.
        api_response = api_instance.api_transport_zendesk_id_patch(id, transport_zendesk_patch)
        print("The response of TransportZendeskApi->api_transport_zendesk_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportZendeskApi->api_transport_zendesk_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportZendesk identifier | 
 **transport_zendesk_patch** | [**TransportZendeskPatch**](TransportZendeskPatch.md)| The updated TransportZendesk resource | 

### Return type

[**TransportZendeskGet**](TransportZendeskGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportZendesk resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_zendesk_id_put**
> TransportZendeskGet api_transport_zendesk_id_put(id, transport_zendesk_put)

Replaces the TransportZendesk resource.

Replaces the TransportZendesk resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_zendesk_get import TransportZendeskGet
from openapi_client.models.transport_zendesk_put import TransportZendeskPut
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
    api_instance = openapi_client.TransportZendeskApi(api_client)
    id = 'id_example' # str | TransportZendesk identifier
    transport_zendesk_put = openapi_client.TransportZendeskPut() # TransportZendeskPut | The updated TransportZendesk resource

    try:
        # Replaces the TransportZendesk resource.
        api_response = api_instance.api_transport_zendesk_id_put(id, transport_zendesk_put)
        print("The response of TransportZendeskApi->api_transport_zendesk_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportZendeskApi->api_transport_zendesk_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportZendesk identifier | 
 **transport_zendesk_put** | [**TransportZendeskPut**](TransportZendeskPut.md)| The updated TransportZendesk resource | 

### Return type

[**TransportZendeskGet**](TransportZendeskGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportZendesk resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_zendesk_post**
> TransportZendeskGet api_transport_zendesk_post(transport_zendesk_post)

Creates a TransportZendesk resource.

Creates a TransportZendesk resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_zendesk_get import TransportZendeskGet
from openapi_client.models.transport_zendesk_post import TransportZendeskPost
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
    api_instance = openapi_client.TransportZendeskApi(api_client)
    transport_zendesk_post = openapi_client.TransportZendeskPost() # TransportZendeskPost | The new TransportZendesk resource

    try:
        # Creates a TransportZendesk resource.
        api_response = api_instance.api_transport_zendesk_post(transport_zendesk_post)
        print("The response of TransportZendeskApi->api_transport_zendesk_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportZendeskApi->api_transport_zendesk_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_zendesk_post** | [**TransportZendeskPost**](TransportZendeskPost.md)| The new TransportZendesk resource | 

### Return type

[**TransportZendeskGet**](TransportZendeskGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportZendesk resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

