# openapi_client.TransportMobytApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_mobyt_get_collection**](TransportMobytApi.md#api_transport_mobyt_get_collection) | **GET** /api/transport-mobyt | Retrieves the collection of TransportMobyt resources.
[**api_transport_mobyt_id_delete**](TransportMobytApi.md#api_transport_mobyt_id_delete) | **DELETE** /api/transport-mobyt/{id} | Removes the TransportMobyt resource.
[**api_transport_mobyt_id_get**](TransportMobytApi.md#api_transport_mobyt_id_get) | **GET** /api/transport-mobyt/{id} | Retrieves a TransportMobyt resource.
[**api_transport_mobyt_id_patch**](TransportMobytApi.md#api_transport_mobyt_id_patch) | **PATCH** /api/transport-mobyt/{id} | Updates the TransportMobyt resource.
[**api_transport_mobyt_id_put**](TransportMobytApi.md#api_transport_mobyt_id_put) | **PUT** /api/transport-mobyt/{id} | Replaces the TransportMobyt resource.
[**api_transport_mobyt_post**](TransportMobytApi.md#api_transport_mobyt_post) | **POST** /api/transport-mobyt | Creates a TransportMobyt resource.


# **api_transport_mobyt_get_collection**
> List[TransportMobytGet] api_transport_mobyt_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportMobyt resources.

Retrieves the collection of TransportMobyt resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mobyt_get import TransportMobytGet
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
    api_instance = openapi_client.TransportMobytApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportMobyt resources.
        api_response = api_instance.api_transport_mobyt_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportMobytApi->api_transport_mobyt_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMobytApi->api_transport_mobyt_get_collection: %s\n" % e)
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

[**List[TransportMobytGet]**](TransportMobytGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMobyt collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mobyt_id_delete**
> api_transport_mobyt_id_delete(id)

Removes the TransportMobyt resource.

Removes the TransportMobyt resource.

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
    api_instance = openapi_client.TransportMobytApi(api_client)
    id = 'id_example' # str | TransportMobyt identifier

    try:
        # Removes the TransportMobyt resource.
        api_instance.api_transport_mobyt_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportMobytApi->api_transport_mobyt_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMobyt identifier | 

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
**204** | TransportMobyt resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mobyt_id_get**
> TransportMobytGet api_transport_mobyt_id_get(id)

Retrieves a TransportMobyt resource.

Retrieves a TransportMobyt resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mobyt_get import TransportMobytGet
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
    api_instance = openapi_client.TransportMobytApi(api_client)
    id = 'id_example' # str | TransportMobyt identifier

    try:
        # Retrieves a TransportMobyt resource.
        api_response = api_instance.api_transport_mobyt_id_get(id)
        print("The response of TransportMobytApi->api_transport_mobyt_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMobytApi->api_transport_mobyt_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMobyt identifier | 

### Return type

[**TransportMobytGet**](TransportMobytGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMobyt resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mobyt_id_patch**
> TransportMobytGet api_transport_mobyt_id_patch(id, transport_mobyt_patch)

Updates the TransportMobyt resource.

Updates the TransportMobyt resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mobyt_get import TransportMobytGet
from openapi_client.models.transport_mobyt_patch import TransportMobytPatch
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
    api_instance = openapi_client.TransportMobytApi(api_client)
    id = 'id_example' # str | TransportMobyt identifier
    transport_mobyt_patch = openapi_client.TransportMobytPatch() # TransportMobytPatch | The updated TransportMobyt resource

    try:
        # Updates the TransportMobyt resource.
        api_response = api_instance.api_transport_mobyt_id_patch(id, transport_mobyt_patch)
        print("The response of TransportMobytApi->api_transport_mobyt_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMobytApi->api_transport_mobyt_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMobyt identifier | 
 **transport_mobyt_patch** | [**TransportMobytPatch**](TransportMobytPatch.md)| The updated TransportMobyt resource | 

### Return type

[**TransportMobytGet**](TransportMobytGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMobyt resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mobyt_id_put**
> TransportMobytGet api_transport_mobyt_id_put(id, transport_mobyt_put)

Replaces the TransportMobyt resource.

Replaces the TransportMobyt resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mobyt_get import TransportMobytGet
from openapi_client.models.transport_mobyt_put import TransportMobytPut
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
    api_instance = openapi_client.TransportMobytApi(api_client)
    id = 'id_example' # str | TransportMobyt identifier
    transport_mobyt_put = openapi_client.TransportMobytPut() # TransportMobytPut | The updated TransportMobyt resource

    try:
        # Replaces the TransportMobyt resource.
        api_response = api_instance.api_transport_mobyt_id_put(id, transport_mobyt_put)
        print("The response of TransportMobytApi->api_transport_mobyt_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMobytApi->api_transport_mobyt_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMobyt identifier | 
 **transport_mobyt_put** | [**TransportMobytPut**](TransportMobytPut.md)| The updated TransportMobyt resource | 

### Return type

[**TransportMobytGet**](TransportMobytGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMobyt resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mobyt_post**
> TransportMobytGet api_transport_mobyt_post(transport_mobyt_post)

Creates a TransportMobyt resource.

Creates a TransportMobyt resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mobyt_get import TransportMobytGet
from openapi_client.models.transport_mobyt_post import TransportMobytPost
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
    api_instance = openapi_client.TransportMobytApi(api_client)
    transport_mobyt_post = openapi_client.TransportMobytPost() # TransportMobytPost | The new TransportMobyt resource

    try:
        # Creates a TransportMobyt resource.
        api_response = api_instance.api_transport_mobyt_post(transport_mobyt_post)
        print("The response of TransportMobytApi->api_transport_mobyt_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMobytApi->api_transport_mobyt_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_mobyt_post** | [**TransportMobytPost**](TransportMobytPost.md)| The new TransportMobyt resource | 

### Return type

[**TransportMobytGet**](TransportMobytGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportMobyt resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

