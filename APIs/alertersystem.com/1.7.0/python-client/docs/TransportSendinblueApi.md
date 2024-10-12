# openapi_client.TransportSendinblueApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_sendinblue_get_collection**](TransportSendinblueApi.md#api_transport_sendinblue_get_collection) | **GET** /api/transport-sendinblue | Retrieves the collection of TransportSendinblue resources.
[**api_transport_sendinblue_id_delete**](TransportSendinblueApi.md#api_transport_sendinblue_id_delete) | **DELETE** /api/transport-sendinblue/{id} | Removes the TransportSendinblue resource.
[**api_transport_sendinblue_id_get**](TransportSendinblueApi.md#api_transport_sendinblue_id_get) | **GET** /api/transport-sendinblue/{id} | Retrieves a TransportSendinblue resource.
[**api_transport_sendinblue_id_patch**](TransportSendinblueApi.md#api_transport_sendinblue_id_patch) | **PATCH** /api/transport-sendinblue/{id} | Updates the TransportSendinblue resource.
[**api_transport_sendinblue_id_put**](TransportSendinblueApi.md#api_transport_sendinblue_id_put) | **PUT** /api/transport-sendinblue/{id} | Replaces the TransportSendinblue resource.
[**api_transport_sendinblue_post**](TransportSendinblueApi.md#api_transport_sendinblue_post) | **POST** /api/transport-sendinblue | Creates a TransportSendinblue resource.


# **api_transport_sendinblue_get_collection**
> List[TransportSendinblueGet] api_transport_sendinblue_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSendinblue resources.

Retrieves the collection of TransportSendinblue resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sendinblue_get import TransportSendinblueGet
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
    api_instance = openapi_client.TransportSendinblueApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSendinblue resources.
        api_response = api_instance.api_transport_sendinblue_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSendinblueApi->api_transport_sendinblue_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSendinblueApi->api_transport_sendinblue_get_collection: %s\n" % e)
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

[**List[TransportSendinblueGet]**](TransportSendinblueGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSendinblue collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sendinblue_id_delete**
> api_transport_sendinblue_id_delete(id)

Removes the TransportSendinblue resource.

Removes the TransportSendinblue resource.

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
    api_instance = openapi_client.TransportSendinblueApi(api_client)
    id = 'id_example' # str | TransportSendinblue identifier

    try:
        # Removes the TransportSendinblue resource.
        api_instance.api_transport_sendinblue_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSendinblueApi->api_transport_sendinblue_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSendinblue identifier | 

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
**204** | TransportSendinblue resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sendinblue_id_get**
> TransportSendinblueGet api_transport_sendinblue_id_get(id)

Retrieves a TransportSendinblue resource.

Retrieves a TransportSendinblue resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sendinblue_get import TransportSendinblueGet
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
    api_instance = openapi_client.TransportSendinblueApi(api_client)
    id = 'id_example' # str | TransportSendinblue identifier

    try:
        # Retrieves a TransportSendinblue resource.
        api_response = api_instance.api_transport_sendinblue_id_get(id)
        print("The response of TransportSendinblueApi->api_transport_sendinblue_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSendinblueApi->api_transport_sendinblue_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSendinblue identifier | 

### Return type

[**TransportSendinblueGet**](TransportSendinblueGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSendinblue resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sendinblue_id_patch**
> TransportSendinblueGet api_transport_sendinblue_id_patch(id, transport_sendinblue_patch)

Updates the TransportSendinblue resource.

Updates the TransportSendinblue resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sendinblue_get import TransportSendinblueGet
from openapi_client.models.transport_sendinblue_patch import TransportSendinbluePatch
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
    api_instance = openapi_client.TransportSendinblueApi(api_client)
    id = 'id_example' # str | TransportSendinblue identifier
    transport_sendinblue_patch = openapi_client.TransportSendinbluePatch() # TransportSendinbluePatch | The updated TransportSendinblue resource

    try:
        # Updates the TransportSendinblue resource.
        api_response = api_instance.api_transport_sendinblue_id_patch(id, transport_sendinblue_patch)
        print("The response of TransportSendinblueApi->api_transport_sendinblue_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSendinblueApi->api_transport_sendinblue_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSendinblue identifier | 
 **transport_sendinblue_patch** | [**TransportSendinbluePatch**](TransportSendinbluePatch.md)| The updated TransportSendinblue resource | 

### Return type

[**TransportSendinblueGet**](TransportSendinblueGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSendinblue resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sendinblue_id_put**
> TransportSendinblueGet api_transport_sendinblue_id_put(id, transport_sendinblue_put)

Replaces the TransportSendinblue resource.

Replaces the TransportSendinblue resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sendinblue_get import TransportSendinblueGet
from openapi_client.models.transport_sendinblue_put import TransportSendinbluePut
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
    api_instance = openapi_client.TransportSendinblueApi(api_client)
    id = 'id_example' # str | TransportSendinblue identifier
    transport_sendinblue_put = openapi_client.TransportSendinbluePut() # TransportSendinbluePut | The updated TransportSendinblue resource

    try:
        # Replaces the TransportSendinblue resource.
        api_response = api_instance.api_transport_sendinblue_id_put(id, transport_sendinblue_put)
        print("The response of TransportSendinblueApi->api_transport_sendinblue_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSendinblueApi->api_transport_sendinblue_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSendinblue identifier | 
 **transport_sendinblue_put** | [**TransportSendinbluePut**](TransportSendinbluePut.md)| The updated TransportSendinblue resource | 

### Return type

[**TransportSendinblueGet**](TransportSendinblueGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSendinblue resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sendinblue_post**
> TransportSendinblueGet api_transport_sendinblue_post(transport_sendinblue_post)

Creates a TransportSendinblue resource.

Creates a TransportSendinblue resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sendinblue_get import TransportSendinblueGet
from openapi_client.models.transport_sendinblue_post import TransportSendinbluePost
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
    api_instance = openapi_client.TransportSendinblueApi(api_client)
    transport_sendinblue_post = openapi_client.TransportSendinbluePost() # TransportSendinbluePost | The new TransportSendinblue resource

    try:
        # Creates a TransportSendinblue resource.
        api_response = api_instance.api_transport_sendinblue_post(transport_sendinblue_post)
        print("The response of TransportSendinblueApi->api_transport_sendinblue_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSendinblueApi->api_transport_sendinblue_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_sendinblue_post** | [**TransportSendinbluePost**](TransportSendinbluePost.md)| The new TransportSendinblue resource | 

### Return type

[**TransportSendinblueGet**](TransportSendinblueGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSendinblue resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

