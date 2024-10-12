# openapi_client.TransportSmsBiurasApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_sms_biuras_get_collection**](TransportSmsBiurasApi.md#api_transport_sms_biuras_get_collection) | **GET** /api/transport-sms-biuras | Retrieves the collection of TransportSmsBiuras resources.
[**api_transport_sms_biuras_id_delete**](TransportSmsBiurasApi.md#api_transport_sms_biuras_id_delete) | **DELETE** /api/transport-sms-biuras/{id} | Removes the TransportSmsBiuras resource.
[**api_transport_sms_biuras_id_get**](TransportSmsBiurasApi.md#api_transport_sms_biuras_id_get) | **GET** /api/transport-sms-biuras/{id} | Retrieves a TransportSmsBiuras resource.
[**api_transport_sms_biuras_id_patch**](TransportSmsBiurasApi.md#api_transport_sms_biuras_id_patch) | **PATCH** /api/transport-sms-biuras/{id} | Updates the TransportSmsBiuras resource.
[**api_transport_sms_biuras_id_put**](TransportSmsBiurasApi.md#api_transport_sms_biuras_id_put) | **PUT** /api/transport-sms-biuras/{id} | Replaces the TransportSmsBiuras resource.
[**api_transport_sms_biuras_post**](TransportSmsBiurasApi.md#api_transport_sms_biuras_post) | **POST** /api/transport-sms-biuras | Creates a TransportSmsBiuras resource.


# **api_transport_sms_biuras_get_collection**
> List[TransportSmsBiurasGet] api_transport_sms_biuras_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSmsBiuras resources.

Retrieves the collection of TransportSmsBiuras resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms_biuras_get import TransportSmsBiurasGet
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
    api_instance = openapi_client.TransportSmsBiurasApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSmsBiuras resources.
        api_response = api_instance.api_transport_sms_biuras_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSmsBiurasApi->api_transport_sms_biuras_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsBiurasApi->api_transport_sms_biuras_get_collection: %s\n" % e)
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

[**List[TransportSmsBiurasGet]**](TransportSmsBiurasGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsBiuras collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms_biuras_id_delete**
> api_transport_sms_biuras_id_delete(id)

Removes the TransportSmsBiuras resource.

Removes the TransportSmsBiuras resource.

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
    api_instance = openapi_client.TransportSmsBiurasApi(api_client)
    id = 'id_example' # str | TransportSmsBiuras identifier

    try:
        # Removes the TransportSmsBiuras resource.
        api_instance.api_transport_sms_biuras_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSmsBiurasApi->api_transport_sms_biuras_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsBiuras identifier | 

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
**204** | TransportSmsBiuras resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms_biuras_id_get**
> TransportSmsBiurasGet api_transport_sms_biuras_id_get(id)

Retrieves a TransportSmsBiuras resource.

Retrieves a TransportSmsBiuras resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms_biuras_get import TransportSmsBiurasGet
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
    api_instance = openapi_client.TransportSmsBiurasApi(api_client)
    id = 'id_example' # str | TransportSmsBiuras identifier

    try:
        # Retrieves a TransportSmsBiuras resource.
        api_response = api_instance.api_transport_sms_biuras_id_get(id)
        print("The response of TransportSmsBiurasApi->api_transport_sms_biuras_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsBiurasApi->api_transport_sms_biuras_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsBiuras identifier | 

### Return type

[**TransportSmsBiurasGet**](TransportSmsBiurasGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsBiuras resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms_biuras_id_patch**
> TransportSmsBiurasGet api_transport_sms_biuras_id_patch(id, transport_sms_biuras_patch)

Updates the TransportSmsBiuras resource.

Updates the TransportSmsBiuras resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms_biuras_get import TransportSmsBiurasGet
from openapi_client.models.transport_sms_biuras_patch import TransportSmsBiurasPatch
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
    api_instance = openapi_client.TransportSmsBiurasApi(api_client)
    id = 'id_example' # str | TransportSmsBiuras identifier
    transport_sms_biuras_patch = openapi_client.TransportSmsBiurasPatch() # TransportSmsBiurasPatch | The updated TransportSmsBiuras resource

    try:
        # Updates the TransportSmsBiuras resource.
        api_response = api_instance.api_transport_sms_biuras_id_patch(id, transport_sms_biuras_patch)
        print("The response of TransportSmsBiurasApi->api_transport_sms_biuras_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsBiurasApi->api_transport_sms_biuras_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsBiuras identifier | 
 **transport_sms_biuras_patch** | [**TransportSmsBiurasPatch**](TransportSmsBiurasPatch.md)| The updated TransportSmsBiuras resource | 

### Return type

[**TransportSmsBiurasGet**](TransportSmsBiurasGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsBiuras resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms_biuras_id_put**
> TransportSmsBiurasGet api_transport_sms_biuras_id_put(id, transport_sms_biuras_put)

Replaces the TransportSmsBiuras resource.

Replaces the TransportSmsBiuras resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms_biuras_get import TransportSmsBiurasGet
from openapi_client.models.transport_sms_biuras_put import TransportSmsBiurasPut
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
    api_instance = openapi_client.TransportSmsBiurasApi(api_client)
    id = 'id_example' # str | TransportSmsBiuras identifier
    transport_sms_biuras_put = openapi_client.TransportSmsBiurasPut() # TransportSmsBiurasPut | The updated TransportSmsBiuras resource

    try:
        # Replaces the TransportSmsBiuras resource.
        api_response = api_instance.api_transport_sms_biuras_id_put(id, transport_sms_biuras_put)
        print("The response of TransportSmsBiurasApi->api_transport_sms_biuras_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsBiurasApi->api_transport_sms_biuras_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsBiuras identifier | 
 **transport_sms_biuras_put** | [**TransportSmsBiurasPut**](TransportSmsBiurasPut.md)| The updated TransportSmsBiuras resource | 

### Return type

[**TransportSmsBiurasGet**](TransportSmsBiurasGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsBiuras resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms_biuras_post**
> TransportSmsBiurasGet api_transport_sms_biuras_post(transport_sms_biuras_post)

Creates a TransportSmsBiuras resource.

Creates a TransportSmsBiuras resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms_biuras_get import TransportSmsBiurasGet
from openapi_client.models.transport_sms_biuras_post import TransportSmsBiurasPost
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
    api_instance = openapi_client.TransportSmsBiurasApi(api_client)
    transport_sms_biuras_post = openapi_client.TransportSmsBiurasPost() # TransportSmsBiurasPost | The new TransportSmsBiuras resource

    try:
        # Creates a TransportSmsBiuras resource.
        api_response = api_instance.api_transport_sms_biuras_post(transport_sms_biuras_post)
        print("The response of TransportSmsBiurasApi->api_transport_sms_biuras_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsBiurasApi->api_transport_sms_biuras_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_sms_biuras_post** | [**TransportSmsBiurasPost**](TransportSmsBiurasPost.md)| The new TransportSmsBiuras resource | 

### Return type

[**TransportSmsBiurasGet**](TransportSmsBiurasGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSmsBiuras resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

