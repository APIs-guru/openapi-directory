# openapi_client.TransportOctopushApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_octopush_get_collection**](TransportOctopushApi.md#api_transport_octopush_get_collection) | **GET** /api/transport-octopush | Retrieves the collection of TransportOctopush resources.
[**api_transport_octopush_id_delete**](TransportOctopushApi.md#api_transport_octopush_id_delete) | **DELETE** /api/transport-octopush/{id} | Removes the TransportOctopush resource.
[**api_transport_octopush_id_get**](TransportOctopushApi.md#api_transport_octopush_id_get) | **GET** /api/transport-octopush/{id} | Retrieves a TransportOctopush resource.
[**api_transport_octopush_id_patch**](TransportOctopushApi.md#api_transport_octopush_id_patch) | **PATCH** /api/transport-octopush/{id} | Updates the TransportOctopush resource.
[**api_transport_octopush_id_put**](TransportOctopushApi.md#api_transport_octopush_id_put) | **PUT** /api/transport-octopush/{id} | Replaces the TransportOctopush resource.
[**api_transport_octopush_post**](TransportOctopushApi.md#api_transport_octopush_post) | **POST** /api/transport-octopush | Creates a TransportOctopush resource.


# **api_transport_octopush_get_collection**
> List[TransportOctopushGet] api_transport_octopush_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportOctopush resources.

Retrieves the collection of TransportOctopush resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_octopush_get import TransportOctopushGet
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
    api_instance = openapi_client.TransportOctopushApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportOctopush resources.
        api_response = api_instance.api_transport_octopush_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportOctopushApi->api_transport_octopush_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOctopushApi->api_transport_octopush_get_collection: %s\n" % e)
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

[**List[TransportOctopushGet]**](TransportOctopushGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOctopush collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_octopush_id_delete**
> api_transport_octopush_id_delete(id)

Removes the TransportOctopush resource.

Removes the TransportOctopush resource.

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
    api_instance = openapi_client.TransportOctopushApi(api_client)
    id = 'id_example' # str | TransportOctopush identifier

    try:
        # Removes the TransportOctopush resource.
        api_instance.api_transport_octopush_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportOctopushApi->api_transport_octopush_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOctopush identifier | 

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
**204** | TransportOctopush resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_octopush_id_get**
> TransportOctopushGet api_transport_octopush_id_get(id)

Retrieves a TransportOctopush resource.

Retrieves a TransportOctopush resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_octopush_get import TransportOctopushGet
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
    api_instance = openapi_client.TransportOctopushApi(api_client)
    id = 'id_example' # str | TransportOctopush identifier

    try:
        # Retrieves a TransportOctopush resource.
        api_response = api_instance.api_transport_octopush_id_get(id)
        print("The response of TransportOctopushApi->api_transport_octopush_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOctopushApi->api_transport_octopush_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOctopush identifier | 

### Return type

[**TransportOctopushGet**](TransportOctopushGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOctopush resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_octopush_id_patch**
> TransportOctopushGet api_transport_octopush_id_patch(id, transport_octopush_patch)

Updates the TransportOctopush resource.

Updates the TransportOctopush resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_octopush_get import TransportOctopushGet
from openapi_client.models.transport_octopush_patch import TransportOctopushPatch
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
    api_instance = openapi_client.TransportOctopushApi(api_client)
    id = 'id_example' # str | TransportOctopush identifier
    transport_octopush_patch = openapi_client.TransportOctopushPatch() # TransportOctopushPatch | The updated TransportOctopush resource

    try:
        # Updates the TransportOctopush resource.
        api_response = api_instance.api_transport_octopush_id_patch(id, transport_octopush_patch)
        print("The response of TransportOctopushApi->api_transport_octopush_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOctopushApi->api_transport_octopush_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOctopush identifier | 
 **transport_octopush_patch** | [**TransportOctopushPatch**](TransportOctopushPatch.md)| The updated TransportOctopush resource | 

### Return type

[**TransportOctopushGet**](TransportOctopushGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOctopush resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_octopush_id_put**
> TransportOctopushGet api_transport_octopush_id_put(id, transport_octopush_put)

Replaces the TransportOctopush resource.

Replaces the TransportOctopush resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_octopush_get import TransportOctopushGet
from openapi_client.models.transport_octopush_put import TransportOctopushPut
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
    api_instance = openapi_client.TransportOctopushApi(api_client)
    id = 'id_example' # str | TransportOctopush identifier
    transport_octopush_put = openapi_client.TransportOctopushPut() # TransportOctopushPut | The updated TransportOctopush resource

    try:
        # Replaces the TransportOctopush resource.
        api_response = api_instance.api_transport_octopush_id_put(id, transport_octopush_put)
        print("The response of TransportOctopushApi->api_transport_octopush_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOctopushApi->api_transport_octopush_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOctopush identifier | 
 **transport_octopush_put** | [**TransportOctopushPut**](TransportOctopushPut.md)| The updated TransportOctopush resource | 

### Return type

[**TransportOctopushGet**](TransportOctopushGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOctopush resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_octopush_post**
> TransportOctopushGet api_transport_octopush_post(transport_octopush_post)

Creates a TransportOctopush resource.

Creates a TransportOctopush resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_octopush_get import TransportOctopushGet
from openapi_client.models.transport_octopush_post import TransportOctopushPost
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
    api_instance = openapi_client.TransportOctopushApi(api_client)
    transport_octopush_post = openapi_client.TransportOctopushPost() # TransportOctopushPost | The new TransportOctopush resource

    try:
        # Creates a TransportOctopush resource.
        api_response = api_instance.api_transport_octopush_post(transport_octopush_post)
        print("The response of TransportOctopushApi->api_transport_octopush_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOctopushApi->api_transport_octopush_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_octopush_post** | [**TransportOctopushPost**](TransportOctopushPost.md)| The new TransportOctopush resource | 

### Return type

[**TransportOctopushGet**](TransportOctopushGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportOctopush resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

