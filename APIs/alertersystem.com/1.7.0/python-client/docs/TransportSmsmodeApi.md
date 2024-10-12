# openapi_client.TransportSmsmodeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_smsmode_get_collection**](TransportSmsmodeApi.md#api_transport_smsmode_get_collection) | **GET** /api/transport-smsmode | Retrieves the collection of TransportSmsmode resources.
[**api_transport_smsmode_id_delete**](TransportSmsmodeApi.md#api_transport_smsmode_id_delete) | **DELETE** /api/transport-smsmode/{id} | Removes the TransportSmsmode resource.
[**api_transport_smsmode_id_get**](TransportSmsmodeApi.md#api_transport_smsmode_id_get) | **GET** /api/transport-smsmode/{id} | Retrieves a TransportSmsmode resource.
[**api_transport_smsmode_id_patch**](TransportSmsmodeApi.md#api_transport_smsmode_id_patch) | **PATCH** /api/transport-smsmode/{id} | Updates the TransportSmsmode resource.
[**api_transport_smsmode_id_put**](TransportSmsmodeApi.md#api_transport_smsmode_id_put) | **PUT** /api/transport-smsmode/{id} | Replaces the TransportSmsmode resource.
[**api_transport_smsmode_post**](TransportSmsmodeApi.md#api_transport_smsmode_post) | **POST** /api/transport-smsmode | Creates a TransportSmsmode resource.


# **api_transport_smsmode_get_collection**
> List[TransportSmsmodeGet] api_transport_smsmode_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSmsmode resources.

Retrieves the collection of TransportSmsmode resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsmode_get import TransportSmsmodeGet
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
    api_instance = openapi_client.TransportSmsmodeApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSmsmode resources.
        api_response = api_instance.api_transport_smsmode_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSmsmodeApi->api_transport_smsmode_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsmodeApi->api_transport_smsmode_get_collection: %s\n" % e)
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

[**List[TransportSmsmodeGet]**](TransportSmsmodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsmode collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsmode_id_delete**
> api_transport_smsmode_id_delete(id)

Removes the TransportSmsmode resource.

Removes the TransportSmsmode resource.

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
    api_instance = openapi_client.TransportSmsmodeApi(api_client)
    id = 'id_example' # str | TransportSmsmode identifier

    try:
        # Removes the TransportSmsmode resource.
        api_instance.api_transport_smsmode_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSmsmodeApi->api_transport_smsmode_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsmode identifier | 

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
**204** | TransportSmsmode resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsmode_id_get**
> TransportSmsmodeGet api_transport_smsmode_id_get(id)

Retrieves a TransportSmsmode resource.

Retrieves a TransportSmsmode resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsmode_get import TransportSmsmodeGet
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
    api_instance = openapi_client.TransportSmsmodeApi(api_client)
    id = 'id_example' # str | TransportSmsmode identifier

    try:
        # Retrieves a TransportSmsmode resource.
        api_response = api_instance.api_transport_smsmode_id_get(id)
        print("The response of TransportSmsmodeApi->api_transport_smsmode_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsmodeApi->api_transport_smsmode_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsmode identifier | 

### Return type

[**TransportSmsmodeGet**](TransportSmsmodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsmode resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsmode_id_patch**
> TransportSmsmodeGet api_transport_smsmode_id_patch(id, transport_smsmode_patch)

Updates the TransportSmsmode resource.

Updates the TransportSmsmode resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsmode_get import TransportSmsmodeGet
from openapi_client.models.transport_smsmode_patch import TransportSmsmodePatch
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
    api_instance = openapi_client.TransportSmsmodeApi(api_client)
    id = 'id_example' # str | TransportSmsmode identifier
    transport_smsmode_patch = openapi_client.TransportSmsmodePatch() # TransportSmsmodePatch | The updated TransportSmsmode resource

    try:
        # Updates the TransportSmsmode resource.
        api_response = api_instance.api_transport_smsmode_id_patch(id, transport_smsmode_patch)
        print("The response of TransportSmsmodeApi->api_transport_smsmode_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsmodeApi->api_transport_smsmode_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsmode identifier | 
 **transport_smsmode_patch** | [**TransportSmsmodePatch**](TransportSmsmodePatch.md)| The updated TransportSmsmode resource | 

### Return type

[**TransportSmsmodeGet**](TransportSmsmodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsmode resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsmode_id_put**
> TransportSmsmodeGet api_transport_smsmode_id_put(id, transport_smsmode_put)

Replaces the TransportSmsmode resource.

Replaces the TransportSmsmode resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsmode_get import TransportSmsmodeGet
from openapi_client.models.transport_smsmode_put import TransportSmsmodePut
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
    api_instance = openapi_client.TransportSmsmodeApi(api_client)
    id = 'id_example' # str | TransportSmsmode identifier
    transport_smsmode_put = openapi_client.TransportSmsmodePut() # TransportSmsmodePut | The updated TransportSmsmode resource

    try:
        # Replaces the TransportSmsmode resource.
        api_response = api_instance.api_transport_smsmode_id_put(id, transport_smsmode_put)
        print("The response of TransportSmsmodeApi->api_transport_smsmode_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsmodeApi->api_transport_smsmode_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsmode identifier | 
 **transport_smsmode_put** | [**TransportSmsmodePut**](TransportSmsmodePut.md)| The updated TransportSmsmode resource | 

### Return type

[**TransportSmsmodeGet**](TransportSmsmodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsmode resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_smsmode_post**
> TransportSmsmodeGet api_transport_smsmode_post(transport_smsmode_post)

Creates a TransportSmsmode resource.

Creates a TransportSmsmode resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_smsmode_get import TransportSmsmodeGet
from openapi_client.models.transport_smsmode_post import TransportSmsmodePost
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
    api_instance = openapi_client.TransportSmsmodeApi(api_client)
    transport_smsmode_post = openapi_client.TransportSmsmodePost() # TransportSmsmodePost | The new TransportSmsmode resource

    try:
        # Creates a TransportSmsmode resource.
        api_response = api_instance.api_transport_smsmode_post(transport_smsmode_post)
        print("The response of TransportSmsmodeApi->api_transport_smsmode_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsmodeApi->api_transport_smsmode_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_smsmode_post** | [**TransportSmsmodePost**](TransportSmsmodePost.md)| The new TransportSmsmode resource | 

### Return type

[**TransportSmsmodeGet**](TransportSmsmodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSmsmode resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

