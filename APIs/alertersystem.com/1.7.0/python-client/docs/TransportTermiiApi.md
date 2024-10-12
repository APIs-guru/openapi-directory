# openapi_client.TransportTermiiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_termii_get_collection**](TransportTermiiApi.md#api_transport_termii_get_collection) | **GET** /api/transport-termii | Retrieves the collection of TransportTermii resources.
[**api_transport_termii_id_delete**](TransportTermiiApi.md#api_transport_termii_id_delete) | **DELETE** /api/transport-termii/{id} | Removes the TransportTermii resource.
[**api_transport_termii_id_get**](TransportTermiiApi.md#api_transport_termii_id_get) | **GET** /api/transport-termii/{id} | Retrieves a TransportTermii resource.
[**api_transport_termii_id_patch**](TransportTermiiApi.md#api_transport_termii_id_patch) | **PATCH** /api/transport-termii/{id} | Updates the TransportTermii resource.
[**api_transport_termii_id_put**](TransportTermiiApi.md#api_transport_termii_id_put) | **PUT** /api/transport-termii/{id} | Replaces the TransportTermii resource.
[**api_transport_termii_post**](TransportTermiiApi.md#api_transport_termii_post) | **POST** /api/transport-termii | Creates a TransportTermii resource.


# **api_transport_termii_get_collection**
> List[TransportTermiiGet] api_transport_termii_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportTermii resources.

Retrieves the collection of TransportTermii resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_termii_get import TransportTermiiGet
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
    api_instance = openapi_client.TransportTermiiApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportTermii resources.
        api_response = api_instance.api_transport_termii_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportTermiiApi->api_transport_termii_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTermiiApi->api_transport_termii_get_collection: %s\n" % e)
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

[**List[TransportTermiiGet]**](TransportTermiiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTermii collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_termii_id_delete**
> api_transport_termii_id_delete(id)

Removes the TransportTermii resource.

Removes the TransportTermii resource.

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
    api_instance = openapi_client.TransportTermiiApi(api_client)
    id = 'id_example' # str | TransportTermii identifier

    try:
        # Removes the TransportTermii resource.
        api_instance.api_transport_termii_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportTermiiApi->api_transport_termii_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTermii identifier | 

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
**204** | TransportTermii resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_termii_id_get**
> TransportTermiiGet api_transport_termii_id_get(id)

Retrieves a TransportTermii resource.

Retrieves a TransportTermii resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_termii_get import TransportTermiiGet
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
    api_instance = openapi_client.TransportTermiiApi(api_client)
    id = 'id_example' # str | TransportTermii identifier

    try:
        # Retrieves a TransportTermii resource.
        api_response = api_instance.api_transport_termii_id_get(id)
        print("The response of TransportTermiiApi->api_transport_termii_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTermiiApi->api_transport_termii_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTermii identifier | 

### Return type

[**TransportTermiiGet**](TransportTermiiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTermii resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_termii_id_patch**
> TransportTermiiGet api_transport_termii_id_patch(id, transport_termii_patch)

Updates the TransportTermii resource.

Updates the TransportTermii resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_termii_get import TransportTermiiGet
from openapi_client.models.transport_termii_patch import TransportTermiiPatch
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
    api_instance = openapi_client.TransportTermiiApi(api_client)
    id = 'id_example' # str | TransportTermii identifier
    transport_termii_patch = openapi_client.TransportTermiiPatch() # TransportTermiiPatch | The updated TransportTermii resource

    try:
        # Updates the TransportTermii resource.
        api_response = api_instance.api_transport_termii_id_patch(id, transport_termii_patch)
        print("The response of TransportTermiiApi->api_transport_termii_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTermiiApi->api_transport_termii_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTermii identifier | 
 **transport_termii_patch** | [**TransportTermiiPatch**](TransportTermiiPatch.md)| The updated TransportTermii resource | 

### Return type

[**TransportTermiiGet**](TransportTermiiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTermii resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_termii_id_put**
> TransportTermiiGet api_transport_termii_id_put(id, transport_termii_put)

Replaces the TransportTermii resource.

Replaces the TransportTermii resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_termii_get import TransportTermiiGet
from openapi_client.models.transport_termii_put import TransportTermiiPut
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
    api_instance = openapi_client.TransportTermiiApi(api_client)
    id = 'id_example' # str | TransportTermii identifier
    transport_termii_put = openapi_client.TransportTermiiPut() # TransportTermiiPut | The updated TransportTermii resource

    try:
        # Replaces the TransportTermii resource.
        api_response = api_instance.api_transport_termii_id_put(id, transport_termii_put)
        print("The response of TransportTermiiApi->api_transport_termii_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTermiiApi->api_transport_termii_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTermii identifier | 
 **transport_termii_put** | [**TransportTermiiPut**](TransportTermiiPut.md)| The updated TransportTermii resource | 

### Return type

[**TransportTermiiGet**](TransportTermiiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTermii resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_termii_post**
> TransportTermiiGet api_transport_termii_post(transport_termii_post)

Creates a TransportTermii resource.

Creates a TransportTermii resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_termii_get import TransportTermiiGet
from openapi_client.models.transport_termii_post import TransportTermiiPost
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
    api_instance = openapi_client.TransportTermiiApi(api_client)
    transport_termii_post = openapi_client.TransportTermiiPost() # TransportTermiiPost | The new TransportTermii resource

    try:
        # Creates a TransportTermii resource.
        api_response = api_instance.api_transport_termii_post(transport_termii_post)
        print("The response of TransportTermiiApi->api_transport_termii_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTermiiApi->api_transport_termii_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_termii_post** | [**TransportTermiiPost**](TransportTermiiPost.md)| The new TransportTermii resource | 

### Return type

[**TransportTermiiGet**](TransportTermiiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportTermii resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

