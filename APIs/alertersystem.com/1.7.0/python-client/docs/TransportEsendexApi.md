# openapi_client.TransportEsendexApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_esendex_get_collection**](TransportEsendexApi.md#api_transport_esendex_get_collection) | **GET** /api/transport-esendex | Retrieves the collection of TransportEsendex resources.
[**api_transport_esendex_id_delete**](TransportEsendexApi.md#api_transport_esendex_id_delete) | **DELETE** /api/transport-esendex/{id} | Removes the TransportEsendex resource.
[**api_transport_esendex_id_get**](TransportEsendexApi.md#api_transport_esendex_id_get) | **GET** /api/transport-esendex/{id} | Retrieves a TransportEsendex resource.
[**api_transport_esendex_id_patch**](TransportEsendexApi.md#api_transport_esendex_id_patch) | **PATCH** /api/transport-esendex/{id} | Updates the TransportEsendex resource.
[**api_transport_esendex_id_put**](TransportEsendexApi.md#api_transport_esendex_id_put) | **PUT** /api/transport-esendex/{id} | Replaces the TransportEsendex resource.
[**api_transport_esendex_post**](TransportEsendexApi.md#api_transport_esendex_post) | **POST** /api/transport-esendex | Creates a TransportEsendex resource.


# **api_transport_esendex_get_collection**
> List[TransportEsendexGet] api_transport_esendex_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportEsendex resources.

Retrieves the collection of TransportEsendex resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_esendex_get import TransportEsendexGet
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
    api_instance = openapi_client.TransportEsendexApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportEsendex resources.
        api_response = api_instance.api_transport_esendex_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportEsendexApi->api_transport_esendex_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEsendexApi->api_transport_esendex_get_collection: %s\n" % e)
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

[**List[TransportEsendexGet]**](TransportEsendexGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEsendex collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_esendex_id_delete**
> api_transport_esendex_id_delete(id)

Removes the TransportEsendex resource.

Removes the TransportEsendex resource.

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
    api_instance = openapi_client.TransportEsendexApi(api_client)
    id = 'id_example' # str | TransportEsendex identifier

    try:
        # Removes the TransportEsendex resource.
        api_instance.api_transport_esendex_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportEsendexApi->api_transport_esendex_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEsendex identifier | 

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
**204** | TransportEsendex resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_esendex_id_get**
> TransportEsendexGet api_transport_esendex_id_get(id)

Retrieves a TransportEsendex resource.

Retrieves a TransportEsendex resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_esendex_get import TransportEsendexGet
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
    api_instance = openapi_client.TransportEsendexApi(api_client)
    id = 'id_example' # str | TransportEsendex identifier

    try:
        # Retrieves a TransportEsendex resource.
        api_response = api_instance.api_transport_esendex_id_get(id)
        print("The response of TransportEsendexApi->api_transport_esendex_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEsendexApi->api_transport_esendex_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEsendex identifier | 

### Return type

[**TransportEsendexGet**](TransportEsendexGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEsendex resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_esendex_id_patch**
> TransportEsendexGet api_transport_esendex_id_patch(id, transport_esendex_patch)

Updates the TransportEsendex resource.

Updates the TransportEsendex resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_esendex_get import TransportEsendexGet
from openapi_client.models.transport_esendex_patch import TransportEsendexPatch
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
    api_instance = openapi_client.TransportEsendexApi(api_client)
    id = 'id_example' # str | TransportEsendex identifier
    transport_esendex_patch = openapi_client.TransportEsendexPatch() # TransportEsendexPatch | The updated TransportEsendex resource

    try:
        # Updates the TransportEsendex resource.
        api_response = api_instance.api_transport_esendex_id_patch(id, transport_esendex_patch)
        print("The response of TransportEsendexApi->api_transport_esendex_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEsendexApi->api_transport_esendex_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEsendex identifier | 
 **transport_esendex_patch** | [**TransportEsendexPatch**](TransportEsendexPatch.md)| The updated TransportEsendex resource | 

### Return type

[**TransportEsendexGet**](TransportEsendexGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEsendex resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_esendex_id_put**
> TransportEsendexGet api_transport_esendex_id_put(id, transport_esendex_put)

Replaces the TransportEsendex resource.

Replaces the TransportEsendex resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_esendex_get import TransportEsendexGet
from openapi_client.models.transport_esendex_put import TransportEsendexPut
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
    api_instance = openapi_client.TransportEsendexApi(api_client)
    id = 'id_example' # str | TransportEsendex identifier
    transport_esendex_put = openapi_client.TransportEsendexPut() # TransportEsendexPut | The updated TransportEsendex resource

    try:
        # Replaces the TransportEsendex resource.
        api_response = api_instance.api_transport_esendex_id_put(id, transport_esendex_put)
        print("The response of TransportEsendexApi->api_transport_esendex_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEsendexApi->api_transport_esendex_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEsendex identifier | 
 **transport_esendex_put** | [**TransportEsendexPut**](TransportEsendexPut.md)| The updated TransportEsendex resource | 

### Return type

[**TransportEsendexGet**](TransportEsendexGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEsendex resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_esendex_post**
> TransportEsendexGet api_transport_esendex_post(transport_esendex_post)

Creates a TransportEsendex resource.

Creates a TransportEsendex resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_esendex_get import TransportEsendexGet
from openapi_client.models.transport_esendex_post import TransportEsendexPost
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
    api_instance = openapi_client.TransportEsendexApi(api_client)
    transport_esendex_post = openapi_client.TransportEsendexPost() # TransportEsendexPost | The new TransportEsendex resource

    try:
        # Creates a TransportEsendex resource.
        api_response = api_instance.api_transport_esendex_post(transport_esendex_post)
        print("The response of TransportEsendexApi->api_transport_esendex_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEsendexApi->api_transport_esendex_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_esendex_post** | [**TransportEsendexPost**](TransportEsendexPost.md)| The new TransportEsendex resource | 

### Return type

[**TransportEsendexGet**](TransportEsendexGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportEsendex resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

