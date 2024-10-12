# openapi_client.TransportSmsapiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_smsapi_get_collection**](TransportSmsapiApi.md#api_transport_smsapi_get_collection) | **GET** /api/transport-smsapi | Retrieves the collection of TransportSmsapi resources.
[**api_transport_smsapi_id_delete**](TransportSmsapiApi.md#api_transport_smsapi_id_delete) | **DELETE** /api/transport-smsapi/{id} | Removes the TransportSmsapi resource.
[**api_transport_smsapi_id_get**](TransportSmsapiApi.md#api_transport_smsapi_id_get) | **GET** /api/transport-smsapi/{id} | Retrieves a TransportSmsapi resource.
[**api_transport_smsapi_id_patch**](TransportSmsapiApi.md#api_transport_smsapi_id_patch) | **PATCH** /api/transport-smsapi/{id} | Updates the TransportSmsapi resource.
[**api_transport_smsapi_id_put**](TransportSmsapiApi.md#api_transport_smsapi_id_put) | **PUT** /api/transport-smsapi/{id} | Replaces the TransportSmsapi resource.
[**api_transport_smsapi_post**](TransportSmsapiApi.md#api_transport_smsapi_post) | **POST** /api/transport-smsapi | Creates a TransportSmsapi resource.


# **api_transport_smsapi_get_collection**
> List[TransportSmsapiGet] api_transport_smsapi_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSmsapi resources.

Retrieves the collection of TransportSmsapi resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsapi_get import TransportSmsapiGet
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
    api_instance = openapi_client.TransportSmsapiApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSmsapi resources.
        api_response = api_instance.api_transport_smsapi_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSmsapiApi->api_transport_smsapi_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsapiApi->api_transport_smsapi_get_collection: %s\n" % e)
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

[**List[TransportSmsapiGet]**](TransportSmsapiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsapi collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsapi_id_delete**
> api_transport_smsapi_id_delete(id)

Removes the TransportSmsapi resource.

Removes the TransportSmsapi resource.

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
    api_instance = openapi_client.TransportSmsapiApi(api_client)
    id = 'id_example' # str | TransportSmsapi identifier

    try:
        # Removes the TransportSmsapi resource.
        api_instance.api_transport_smsapi_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSmsapiApi->api_transport_smsapi_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsapi identifier | 

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
**204** | TransportSmsapi resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsapi_id_get**
> TransportSmsapiGet api_transport_smsapi_id_get(id)

Retrieves a TransportSmsapi resource.

Retrieves a TransportSmsapi resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsapi_get import TransportSmsapiGet
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
    api_instance = openapi_client.TransportSmsapiApi(api_client)
    id = 'id_example' # str | TransportSmsapi identifier

    try:
        # Retrieves a TransportSmsapi resource.
        api_response = api_instance.api_transport_smsapi_id_get(id)
        print("The response of TransportSmsapiApi->api_transport_smsapi_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsapiApi->api_transport_smsapi_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsapi identifier | 

### Return type

[**TransportSmsapiGet**](TransportSmsapiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsapi resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsapi_id_patch**
> TransportSmsapiGet api_transport_smsapi_id_patch(id, transport_smsapi_patch)

Updates the TransportSmsapi resource.

Updates the TransportSmsapi resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsapi_get import TransportSmsapiGet
from openapi_client.models.transport_smsapi_patch import TransportSmsapiPatch
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
    api_instance = openapi_client.TransportSmsapiApi(api_client)
    id = 'id_example' # str | TransportSmsapi identifier
    transport_smsapi_patch = openapi_client.TransportSmsapiPatch() # TransportSmsapiPatch | The updated TransportSmsapi resource

    try:
        # Updates the TransportSmsapi resource.
        api_response = api_instance.api_transport_smsapi_id_patch(id, transport_smsapi_patch)
        print("The response of TransportSmsapiApi->api_transport_smsapi_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsapiApi->api_transport_smsapi_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsapi identifier | 
 **transport_smsapi_patch** | [**TransportSmsapiPatch**](TransportSmsapiPatch.md)| The updated TransportSmsapi resource | 

### Return type

[**TransportSmsapiGet**](TransportSmsapiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsapi resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsapi_id_put**
> TransportSmsapiGet api_transport_smsapi_id_put(id, transport_smsapi_put)

Replaces the TransportSmsapi resource.

Replaces the TransportSmsapi resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsapi_get import TransportSmsapiGet
from openapi_client.models.transport_smsapi_put import TransportSmsapiPut
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
    api_instance = openapi_client.TransportSmsapiApi(api_client)
    id = 'id_example' # str | TransportSmsapi identifier
    transport_smsapi_put = openapi_client.TransportSmsapiPut() # TransportSmsapiPut | The updated TransportSmsapi resource

    try:
        # Replaces the TransportSmsapi resource.
        api_response = api_instance.api_transport_smsapi_id_put(id, transport_smsapi_put)
        print("The response of TransportSmsapiApi->api_transport_smsapi_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsapiApi->api_transport_smsapi_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsapi identifier | 
 **transport_smsapi_put** | [**TransportSmsapiPut**](TransportSmsapiPut.md)| The updated TransportSmsapi resource | 

### Return type

[**TransportSmsapiGet**](TransportSmsapiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsapi resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsapi_post**
> TransportSmsapiGet api_transport_smsapi_post(transport_smsapi_post)

Creates a TransportSmsapi resource.

Creates a TransportSmsapi resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsapi_get import TransportSmsapiGet
from openapi_client.models.transport_smsapi_post import TransportSmsapiPost
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
    api_instance = openapi_client.TransportSmsapiApi(api_client)
    transport_smsapi_post = openapi_client.TransportSmsapiPost() # TransportSmsapiPost | The new TransportSmsapi resource

    try:
        # Creates a TransportSmsapi resource.
        api_response = api_instance.api_transport_smsapi_post(transport_smsapi_post)
        print("The response of TransportSmsapiApi->api_transport_smsapi_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsapiApi->api_transport_smsapi_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_smsapi_post** | [**TransportSmsapiPost**](TransportSmsapiPost.md)| The new TransportSmsapi resource | 

### Return type

[**TransportSmsapiGet**](TransportSmsapiGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSmsapi resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

