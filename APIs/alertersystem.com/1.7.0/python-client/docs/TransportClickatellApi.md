# openapi_client.TransportClickatellApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_clickatell_get_collection**](TransportClickatellApi.md#api_transport_clickatell_get_collection) | **GET** /api/transport-clickatell | Retrieves the collection of TransportClickatell resources.
[**api_transport_clickatell_id_delete**](TransportClickatellApi.md#api_transport_clickatell_id_delete) | **DELETE** /api/transport-clickatell/{id} | Removes the TransportClickatell resource.
[**api_transport_clickatell_id_get**](TransportClickatellApi.md#api_transport_clickatell_id_get) | **GET** /api/transport-clickatell/{id} | Retrieves a TransportClickatell resource.
[**api_transport_clickatell_id_patch**](TransportClickatellApi.md#api_transport_clickatell_id_patch) | **PATCH** /api/transport-clickatell/{id} | Updates the TransportClickatell resource.
[**api_transport_clickatell_id_put**](TransportClickatellApi.md#api_transport_clickatell_id_put) | **PUT** /api/transport-clickatell/{id} | Replaces the TransportClickatell resource.
[**api_transport_clickatell_post**](TransportClickatellApi.md#api_transport_clickatell_post) | **POST** /api/transport-clickatell | Creates a TransportClickatell resource.


# **api_transport_clickatell_get_collection**
> List[TransportClickatellGet] api_transport_clickatell_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportClickatell resources.

Retrieves the collection of TransportClickatell resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_clickatell_get import TransportClickatellGet
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
    api_instance = openapi_client.TransportClickatellApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportClickatell resources.
        api_response = api_instance.api_transport_clickatell_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportClickatellApi->api_transport_clickatell_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportClickatellApi->api_transport_clickatell_get_collection: %s\n" % e)
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

[**List[TransportClickatellGet]**](TransportClickatellGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportClickatell collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_clickatell_id_delete**
> api_transport_clickatell_id_delete(id)

Removes the TransportClickatell resource.

Removes the TransportClickatell resource.

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
    api_instance = openapi_client.TransportClickatellApi(api_client)
    id = 'id_example' # str | TransportClickatell identifier

    try:
        # Removes the TransportClickatell resource.
        api_instance.api_transport_clickatell_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportClickatellApi->api_transport_clickatell_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportClickatell identifier | 

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
**204** | TransportClickatell resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_clickatell_id_get**
> TransportClickatellGet api_transport_clickatell_id_get(id)

Retrieves a TransportClickatell resource.

Retrieves a TransportClickatell resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_clickatell_get import TransportClickatellGet
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
    api_instance = openapi_client.TransportClickatellApi(api_client)
    id = 'id_example' # str | TransportClickatell identifier

    try:
        # Retrieves a TransportClickatell resource.
        api_response = api_instance.api_transport_clickatell_id_get(id)
        print("The response of TransportClickatellApi->api_transport_clickatell_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportClickatellApi->api_transport_clickatell_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportClickatell identifier | 

### Return type

[**TransportClickatellGet**](TransportClickatellGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportClickatell resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_clickatell_id_patch**
> TransportClickatellGet api_transport_clickatell_id_patch(id, transport_clickatell_patch)

Updates the TransportClickatell resource.

Updates the TransportClickatell resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_clickatell_get import TransportClickatellGet
from openapi_client.models.transport_clickatell_patch import TransportClickatellPatch
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
    api_instance = openapi_client.TransportClickatellApi(api_client)
    id = 'id_example' # str | TransportClickatell identifier
    transport_clickatell_patch = openapi_client.TransportClickatellPatch() # TransportClickatellPatch | The updated TransportClickatell resource

    try:
        # Updates the TransportClickatell resource.
        api_response = api_instance.api_transport_clickatell_id_patch(id, transport_clickatell_patch)
        print("The response of TransportClickatellApi->api_transport_clickatell_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportClickatellApi->api_transport_clickatell_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportClickatell identifier | 
 **transport_clickatell_patch** | [**TransportClickatellPatch**](TransportClickatellPatch.md)| The updated TransportClickatell resource | 

### Return type

[**TransportClickatellGet**](TransportClickatellGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportClickatell resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_clickatell_id_put**
> TransportClickatellGet api_transport_clickatell_id_put(id, transport_clickatell_put)

Replaces the TransportClickatell resource.

Replaces the TransportClickatell resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_clickatell_get import TransportClickatellGet
from openapi_client.models.transport_clickatell_put import TransportClickatellPut
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
    api_instance = openapi_client.TransportClickatellApi(api_client)
    id = 'id_example' # str | TransportClickatell identifier
    transport_clickatell_put = openapi_client.TransportClickatellPut() # TransportClickatellPut | The updated TransportClickatell resource

    try:
        # Replaces the TransportClickatell resource.
        api_response = api_instance.api_transport_clickatell_id_put(id, transport_clickatell_put)
        print("The response of TransportClickatellApi->api_transport_clickatell_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportClickatellApi->api_transport_clickatell_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportClickatell identifier | 
 **transport_clickatell_put** | [**TransportClickatellPut**](TransportClickatellPut.md)| The updated TransportClickatell resource | 

### Return type

[**TransportClickatellGet**](TransportClickatellGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportClickatell resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_clickatell_post**
> TransportClickatellGet api_transport_clickatell_post(transport_clickatell_post)

Creates a TransportClickatell resource.

Creates a TransportClickatell resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_clickatell_get import TransportClickatellGet
from openapi_client.models.transport_clickatell_post import TransportClickatellPost
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
    api_instance = openapi_client.TransportClickatellApi(api_client)
    transport_clickatell_post = openapi_client.TransportClickatellPost() # TransportClickatellPost | The new TransportClickatell resource

    try:
        # Creates a TransportClickatell resource.
        api_response = api_instance.api_transport_clickatell_post(transport_clickatell_post)
        print("The response of TransportClickatellApi->api_transport_clickatell_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportClickatellApi->api_transport_clickatell_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_clickatell_post** | [**TransportClickatellPost**](TransportClickatellPost.md)| The new TransportClickatell resource | 

### Return type

[**TransportClickatellGet**](TransportClickatellGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportClickatell resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

