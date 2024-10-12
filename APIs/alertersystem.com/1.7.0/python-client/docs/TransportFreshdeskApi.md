# openapi_client.TransportFreshdeskApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_freshdesk_get_collection**](TransportFreshdeskApi.md#api_transport_freshdesk_get_collection) | **GET** /api/transport-freshdesk | Retrieves the collection of TransportFreshdesk resources.
[**api_transport_freshdesk_id_delete**](TransportFreshdeskApi.md#api_transport_freshdesk_id_delete) | **DELETE** /api/transport-freshdesk/{id} | Removes the TransportFreshdesk resource.
[**api_transport_freshdesk_id_get**](TransportFreshdeskApi.md#api_transport_freshdesk_id_get) | **GET** /api/transport-freshdesk/{id} | Retrieves a TransportFreshdesk resource.
[**api_transport_freshdesk_id_patch**](TransportFreshdeskApi.md#api_transport_freshdesk_id_patch) | **PATCH** /api/transport-freshdesk/{id} | Updates the TransportFreshdesk resource.
[**api_transport_freshdesk_id_put**](TransportFreshdeskApi.md#api_transport_freshdesk_id_put) | **PUT** /api/transport-freshdesk/{id} | Replaces the TransportFreshdesk resource.
[**api_transport_freshdesk_post**](TransportFreshdeskApi.md#api_transport_freshdesk_post) | **POST** /api/transport-freshdesk | Creates a TransportFreshdesk resource.


# **api_transport_freshdesk_get_collection**
> List[TransportFreshdeskGet] api_transport_freshdesk_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportFreshdesk resources.

Retrieves the collection of TransportFreshdesk resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_freshdesk_get import TransportFreshdeskGet
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
    api_instance = openapi_client.TransportFreshdeskApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportFreshdesk resources.
        api_response = api_instance.api_transport_freshdesk_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportFreshdeskApi->api_transport_freshdesk_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFreshdeskApi->api_transport_freshdesk_get_collection: %s\n" % e)
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

[**List[TransportFreshdeskGet]**](TransportFreshdeskGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFreshdesk collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_freshdesk_id_delete**
> api_transport_freshdesk_id_delete(id)

Removes the TransportFreshdesk resource.

Removes the TransportFreshdesk resource.

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
    api_instance = openapi_client.TransportFreshdeskApi(api_client)
    id = 'id_example' # str | TransportFreshdesk identifier

    try:
        # Removes the TransportFreshdesk resource.
        api_instance.api_transport_freshdesk_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportFreshdeskApi->api_transport_freshdesk_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFreshdesk identifier | 

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
**204** | TransportFreshdesk resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_freshdesk_id_get**
> TransportFreshdeskGet api_transport_freshdesk_id_get(id)

Retrieves a TransportFreshdesk resource.

Retrieves a TransportFreshdesk resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_freshdesk_get import TransportFreshdeskGet
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
    api_instance = openapi_client.TransportFreshdeskApi(api_client)
    id = 'id_example' # str | TransportFreshdesk identifier

    try:
        # Retrieves a TransportFreshdesk resource.
        api_response = api_instance.api_transport_freshdesk_id_get(id)
        print("The response of TransportFreshdeskApi->api_transport_freshdesk_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFreshdeskApi->api_transport_freshdesk_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFreshdesk identifier | 

### Return type

[**TransportFreshdeskGet**](TransportFreshdeskGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFreshdesk resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_freshdesk_id_patch**
> TransportFreshdeskGet api_transport_freshdesk_id_patch(id, transport_freshdesk_patch)

Updates the TransportFreshdesk resource.

Updates the TransportFreshdesk resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_freshdesk_get import TransportFreshdeskGet
from openapi_client.models.transport_freshdesk_patch import TransportFreshdeskPatch
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
    api_instance = openapi_client.TransportFreshdeskApi(api_client)
    id = 'id_example' # str | TransportFreshdesk identifier
    transport_freshdesk_patch = openapi_client.TransportFreshdeskPatch() # TransportFreshdeskPatch | The updated TransportFreshdesk resource

    try:
        # Updates the TransportFreshdesk resource.
        api_response = api_instance.api_transport_freshdesk_id_patch(id, transport_freshdesk_patch)
        print("The response of TransportFreshdeskApi->api_transport_freshdesk_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFreshdeskApi->api_transport_freshdesk_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFreshdesk identifier | 
 **transport_freshdesk_patch** | [**TransportFreshdeskPatch**](TransportFreshdeskPatch.md)| The updated TransportFreshdesk resource | 

### Return type

[**TransportFreshdeskGet**](TransportFreshdeskGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFreshdesk resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_freshdesk_id_put**
> TransportFreshdeskGet api_transport_freshdesk_id_put(id, transport_freshdesk_put)

Replaces the TransportFreshdesk resource.

Replaces the TransportFreshdesk resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_freshdesk_get import TransportFreshdeskGet
from openapi_client.models.transport_freshdesk_put import TransportFreshdeskPut
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
    api_instance = openapi_client.TransportFreshdeskApi(api_client)
    id = 'id_example' # str | TransportFreshdesk identifier
    transport_freshdesk_put = openapi_client.TransportFreshdeskPut() # TransportFreshdeskPut | The updated TransportFreshdesk resource

    try:
        # Replaces the TransportFreshdesk resource.
        api_response = api_instance.api_transport_freshdesk_id_put(id, transport_freshdesk_put)
        print("The response of TransportFreshdeskApi->api_transport_freshdesk_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFreshdeskApi->api_transport_freshdesk_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFreshdesk identifier | 
 **transport_freshdesk_put** | [**TransportFreshdeskPut**](TransportFreshdeskPut.md)| The updated TransportFreshdesk resource | 

### Return type

[**TransportFreshdeskGet**](TransportFreshdeskGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFreshdesk resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_freshdesk_post**
> TransportFreshdeskGet api_transport_freshdesk_post(transport_freshdesk_post)

Creates a TransportFreshdesk resource.

Creates a TransportFreshdesk resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_freshdesk_get import TransportFreshdeskGet
from openapi_client.models.transport_freshdesk_post import TransportFreshdeskPost
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
    api_instance = openapi_client.TransportFreshdeskApi(api_client)
    transport_freshdesk_post = openapi_client.TransportFreshdeskPost() # TransportFreshdeskPost | The new TransportFreshdesk resource

    try:
        # Creates a TransportFreshdesk resource.
        api_response = api_instance.api_transport_freshdesk_post(transport_freshdesk_post)
        print("The response of TransportFreshdeskApi->api_transport_freshdesk_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFreshdeskApi->api_transport_freshdesk_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_freshdesk_post** | [**TransportFreshdeskPost**](TransportFreshdeskPost.md)| The new TransportFreshdesk resource | 

### Return type

[**TransportFreshdeskGet**](TransportFreshdeskGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportFreshdesk resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

