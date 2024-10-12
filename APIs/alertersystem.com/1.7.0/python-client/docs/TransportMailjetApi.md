# openapi_client.TransportMailjetApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_mailjet_get_collection**](TransportMailjetApi.md#api_transport_mailjet_get_collection) | **GET** /api/transport-mailjet | Retrieves the collection of TransportMailjet resources.
[**api_transport_mailjet_id_delete**](TransportMailjetApi.md#api_transport_mailjet_id_delete) | **DELETE** /api/transport-mailjet/{id} | Removes the TransportMailjet resource.
[**api_transport_mailjet_id_get**](TransportMailjetApi.md#api_transport_mailjet_id_get) | **GET** /api/transport-mailjet/{id} | Retrieves a TransportMailjet resource.
[**api_transport_mailjet_id_patch**](TransportMailjetApi.md#api_transport_mailjet_id_patch) | **PATCH** /api/transport-mailjet/{id} | Updates the TransportMailjet resource.
[**api_transport_mailjet_id_put**](TransportMailjetApi.md#api_transport_mailjet_id_put) | **PUT** /api/transport-mailjet/{id} | Replaces the TransportMailjet resource.
[**api_transport_mailjet_post**](TransportMailjetApi.md#api_transport_mailjet_post) | **POST** /api/transport-mailjet | Creates a TransportMailjet resource.


# **api_transport_mailjet_get_collection**
> List[TransportMailjetGet] api_transport_mailjet_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportMailjet resources.

Retrieves the collection of TransportMailjet resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mailjet_get import TransportMailjetGet
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
    api_instance = openapi_client.TransportMailjetApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportMailjet resources.
        api_response = api_instance.api_transport_mailjet_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportMailjetApi->api_transport_mailjet_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMailjetApi->api_transport_mailjet_get_collection: %s\n" % e)
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

[**List[TransportMailjetGet]**](TransportMailjetGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMailjet collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mailjet_id_delete**
> api_transport_mailjet_id_delete(id)

Removes the TransportMailjet resource.

Removes the TransportMailjet resource.

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
    api_instance = openapi_client.TransportMailjetApi(api_client)
    id = 'id_example' # str | TransportMailjet identifier

    try:
        # Removes the TransportMailjet resource.
        api_instance.api_transport_mailjet_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportMailjetApi->api_transport_mailjet_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMailjet identifier | 

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
**204** | TransportMailjet resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mailjet_id_get**
> TransportMailjetGet api_transport_mailjet_id_get(id)

Retrieves a TransportMailjet resource.

Retrieves a TransportMailjet resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mailjet_get import TransportMailjetGet
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
    api_instance = openapi_client.TransportMailjetApi(api_client)
    id = 'id_example' # str | TransportMailjet identifier

    try:
        # Retrieves a TransportMailjet resource.
        api_response = api_instance.api_transport_mailjet_id_get(id)
        print("The response of TransportMailjetApi->api_transport_mailjet_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMailjetApi->api_transport_mailjet_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMailjet identifier | 

### Return type

[**TransportMailjetGet**](TransportMailjetGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMailjet resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mailjet_id_patch**
> TransportMailjetGet api_transport_mailjet_id_patch(id, transport_mailjet_patch)

Updates the TransportMailjet resource.

Updates the TransportMailjet resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mailjet_get import TransportMailjetGet
from openapi_client.models.transport_mailjet_patch import TransportMailjetPatch
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
    api_instance = openapi_client.TransportMailjetApi(api_client)
    id = 'id_example' # str | TransportMailjet identifier
    transport_mailjet_patch = openapi_client.TransportMailjetPatch() # TransportMailjetPatch | The updated TransportMailjet resource

    try:
        # Updates the TransportMailjet resource.
        api_response = api_instance.api_transport_mailjet_id_patch(id, transport_mailjet_patch)
        print("The response of TransportMailjetApi->api_transport_mailjet_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMailjetApi->api_transport_mailjet_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMailjet identifier | 
 **transport_mailjet_patch** | [**TransportMailjetPatch**](TransportMailjetPatch.md)| The updated TransportMailjet resource | 

### Return type

[**TransportMailjetGet**](TransportMailjetGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMailjet resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mailjet_id_put**
> TransportMailjetGet api_transport_mailjet_id_put(id, transport_mailjet_put)

Replaces the TransportMailjet resource.

Replaces the TransportMailjet resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mailjet_get import TransportMailjetGet
from openapi_client.models.transport_mailjet_put import TransportMailjetPut
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
    api_instance = openapi_client.TransportMailjetApi(api_client)
    id = 'id_example' # str | TransportMailjet identifier
    transport_mailjet_put = openapi_client.TransportMailjetPut() # TransportMailjetPut | The updated TransportMailjet resource

    try:
        # Replaces the TransportMailjet resource.
        api_response = api_instance.api_transport_mailjet_id_put(id, transport_mailjet_put)
        print("The response of TransportMailjetApi->api_transport_mailjet_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMailjetApi->api_transport_mailjet_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMailjet identifier | 
 **transport_mailjet_put** | [**TransportMailjetPut**](TransportMailjetPut.md)| The updated TransportMailjet resource | 

### Return type

[**TransportMailjetGet**](TransportMailjetGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMailjet resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mailjet_post**
> TransportMailjetGet api_transport_mailjet_post(transport_mailjet_post)

Creates a TransportMailjet resource.

Creates a TransportMailjet resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mailjet_get import TransportMailjetGet
from openapi_client.models.transport_mailjet_post import TransportMailjetPost
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
    api_instance = openapi_client.TransportMailjetApi(api_client)
    transport_mailjet_post = openapi_client.TransportMailjetPost() # TransportMailjetPost | The new TransportMailjet resource

    try:
        # Creates a TransportMailjet resource.
        api_response = api_instance.api_transport_mailjet_post(transport_mailjet_post)
        print("The response of TransportMailjetApi->api_transport_mailjet_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMailjetApi->api_transport_mailjet_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_mailjet_post** | [**TransportMailjetPost**](TransportMailjetPost.md)| The new TransportMailjet resource | 

### Return type

[**TransportMailjetGet**](TransportMailjetGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportMailjet resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

