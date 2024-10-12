# openapi_client.TransportEngagespotApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_engagespot_get_collection**](TransportEngagespotApi.md#api_transport_engagespot_get_collection) | **GET** /api/transport-engagespot | Retrieves the collection of TransportEngagespot resources.
[**api_transport_engagespot_id_delete**](TransportEngagespotApi.md#api_transport_engagespot_id_delete) | **DELETE** /api/transport-engagespot/{id} | Removes the TransportEngagespot resource.
[**api_transport_engagespot_id_get**](TransportEngagespotApi.md#api_transport_engagespot_id_get) | **GET** /api/transport-engagespot/{id} | Retrieves a TransportEngagespot resource.
[**api_transport_engagespot_id_patch**](TransportEngagespotApi.md#api_transport_engagespot_id_patch) | **PATCH** /api/transport-engagespot/{id} | Updates the TransportEngagespot resource.
[**api_transport_engagespot_id_put**](TransportEngagespotApi.md#api_transport_engagespot_id_put) | **PUT** /api/transport-engagespot/{id} | Replaces the TransportEngagespot resource.
[**api_transport_engagespot_post**](TransportEngagespotApi.md#api_transport_engagespot_post) | **POST** /api/transport-engagespot | Creates a TransportEngagespot resource.


# **api_transport_engagespot_get_collection**
> List[TransportEngagespotGet] api_transport_engagespot_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportEngagespot resources.

Retrieves the collection of TransportEngagespot resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_engagespot_get import TransportEngagespotGet
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
    api_instance = openapi_client.TransportEngagespotApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportEngagespot resources.
        api_response = api_instance.api_transport_engagespot_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportEngagespotApi->api_transport_engagespot_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEngagespotApi->api_transport_engagespot_get_collection: %s\n" % e)
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

[**List[TransportEngagespotGet]**](TransportEngagespotGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEngagespot collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_engagespot_id_delete**
> api_transport_engagespot_id_delete(id)

Removes the TransportEngagespot resource.

Removes the TransportEngagespot resource.

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
    api_instance = openapi_client.TransportEngagespotApi(api_client)
    id = 'id_example' # str | TransportEngagespot identifier

    try:
        # Removes the TransportEngagespot resource.
        api_instance.api_transport_engagespot_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportEngagespotApi->api_transport_engagespot_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEngagespot identifier | 

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
**204** | TransportEngagespot resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_engagespot_id_get**
> TransportEngagespotGet api_transport_engagespot_id_get(id)

Retrieves a TransportEngagespot resource.

Retrieves a TransportEngagespot resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_engagespot_get import TransportEngagespotGet
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
    api_instance = openapi_client.TransportEngagespotApi(api_client)
    id = 'id_example' # str | TransportEngagespot identifier

    try:
        # Retrieves a TransportEngagespot resource.
        api_response = api_instance.api_transport_engagespot_id_get(id)
        print("The response of TransportEngagespotApi->api_transport_engagespot_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEngagespotApi->api_transport_engagespot_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEngagespot identifier | 

### Return type

[**TransportEngagespotGet**](TransportEngagespotGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEngagespot resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_engagespot_id_patch**
> TransportEngagespotGet api_transport_engagespot_id_patch(id, transport_engagespot_patch)

Updates the TransportEngagespot resource.

Updates the TransportEngagespot resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_engagespot_get import TransportEngagespotGet
from openapi_client.models.transport_engagespot_patch import TransportEngagespotPatch
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
    api_instance = openapi_client.TransportEngagespotApi(api_client)
    id = 'id_example' # str | TransportEngagespot identifier
    transport_engagespot_patch = openapi_client.TransportEngagespotPatch() # TransportEngagespotPatch | The updated TransportEngagespot resource

    try:
        # Updates the TransportEngagespot resource.
        api_response = api_instance.api_transport_engagespot_id_patch(id, transport_engagespot_patch)
        print("The response of TransportEngagespotApi->api_transport_engagespot_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEngagespotApi->api_transport_engagespot_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEngagespot identifier | 
 **transport_engagespot_patch** | [**TransportEngagespotPatch**](TransportEngagespotPatch.md)| The updated TransportEngagespot resource | 

### Return type

[**TransportEngagespotGet**](TransportEngagespotGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEngagespot resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_engagespot_id_put**
> TransportEngagespotGet api_transport_engagespot_id_put(id, transport_engagespot_put)

Replaces the TransportEngagespot resource.

Replaces the TransportEngagespot resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_engagespot_get import TransportEngagespotGet
from openapi_client.models.transport_engagespot_put import TransportEngagespotPut
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
    api_instance = openapi_client.TransportEngagespotApi(api_client)
    id = 'id_example' # str | TransportEngagespot identifier
    transport_engagespot_put = openapi_client.TransportEngagespotPut() # TransportEngagespotPut | The updated TransportEngagespot resource

    try:
        # Replaces the TransportEngagespot resource.
        api_response = api_instance.api_transport_engagespot_id_put(id, transport_engagespot_put)
        print("The response of TransportEngagespotApi->api_transport_engagespot_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEngagespotApi->api_transport_engagespot_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEngagespot identifier | 
 **transport_engagespot_put** | [**TransportEngagespotPut**](TransportEngagespotPut.md)| The updated TransportEngagespot resource | 

### Return type

[**TransportEngagespotGet**](TransportEngagespotGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEngagespot resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_engagespot_post**
> TransportEngagespotGet api_transport_engagespot_post(transport_engagespot_post)

Creates a TransportEngagespot resource.

Creates a TransportEngagespot resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_engagespot_get import TransportEngagespotGet
from openapi_client.models.transport_engagespot_post import TransportEngagespotPost
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
    api_instance = openapi_client.TransportEngagespotApi(api_client)
    transport_engagespot_post = openapi_client.TransportEngagespotPost() # TransportEngagespotPost | The new TransportEngagespot resource

    try:
        # Creates a TransportEngagespot resource.
        api_response = api_instance.api_transport_engagespot_post(transport_engagespot_post)
        print("The response of TransportEngagespotApi->api_transport_engagespot_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEngagespotApi->api_transport_engagespot_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_engagespot_post** | [**TransportEngagespotPost**](TransportEngagespotPost.md)| The new TransportEngagespot resource | 

### Return type

[**TransportEngagespotGet**](TransportEngagespotGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportEngagespot resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

