# openapi_client.TransportAllMySmsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_all_my_sms_get_collection**](TransportAllMySmsApi.md#api_transport_all_my_sms_get_collection) | **GET** /api/transport-all-my-sms | Retrieves the collection of TransportAllMySms resources.
[**api_transport_all_my_sms_id_delete**](TransportAllMySmsApi.md#api_transport_all_my_sms_id_delete) | **DELETE** /api/transport-all-my-sms/{id} | Removes the TransportAllMySms resource.
[**api_transport_all_my_sms_id_get**](TransportAllMySmsApi.md#api_transport_all_my_sms_id_get) | **GET** /api/transport-all-my-sms/{id} | Retrieves a TransportAllMySms resource.
[**api_transport_all_my_sms_id_patch**](TransportAllMySmsApi.md#api_transport_all_my_sms_id_patch) | **PATCH** /api/transport-all-my-sms/{id} | Updates the TransportAllMySms resource.
[**api_transport_all_my_sms_id_put**](TransportAllMySmsApi.md#api_transport_all_my_sms_id_put) | **PUT** /api/transport-all-my-sms/{id} | Replaces the TransportAllMySms resource.
[**api_transport_all_my_sms_post**](TransportAllMySmsApi.md#api_transport_all_my_sms_post) | **POST** /api/transport-all-my-sms | Creates a TransportAllMySms resource.


# **api_transport_all_my_sms_get_collection**
> List[TransportAllMySmsGet] api_transport_all_my_sms_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportAllMySms resources.

Retrieves the collection of TransportAllMySms resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_all_my_sms_get import TransportAllMySmsGet
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
    api_instance = openapi_client.TransportAllMySmsApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportAllMySms resources.
        api_response = api_instance.api_transport_all_my_sms_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportAllMySmsApi->api_transport_all_my_sms_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAllMySmsApi->api_transport_all_my_sms_get_collection: %s\n" % e)
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

[**List[TransportAllMySmsGet]**](TransportAllMySmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAllMySms collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_all_my_sms_id_delete**
> api_transport_all_my_sms_id_delete(id)

Removes the TransportAllMySms resource.

Removes the TransportAllMySms resource.

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
    api_instance = openapi_client.TransportAllMySmsApi(api_client)
    id = 'id_example' # str | TransportAllMySms identifier

    try:
        # Removes the TransportAllMySms resource.
        api_instance.api_transport_all_my_sms_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportAllMySmsApi->api_transport_all_my_sms_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAllMySms identifier | 

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
**204** | TransportAllMySms resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_all_my_sms_id_get**
> TransportAllMySmsGet api_transport_all_my_sms_id_get(id)

Retrieves a TransportAllMySms resource.

Retrieves a TransportAllMySms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_all_my_sms_get import TransportAllMySmsGet
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
    api_instance = openapi_client.TransportAllMySmsApi(api_client)
    id = 'id_example' # str | TransportAllMySms identifier

    try:
        # Retrieves a TransportAllMySms resource.
        api_response = api_instance.api_transport_all_my_sms_id_get(id)
        print("The response of TransportAllMySmsApi->api_transport_all_my_sms_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAllMySmsApi->api_transport_all_my_sms_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAllMySms identifier | 

### Return type

[**TransportAllMySmsGet**](TransportAllMySmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAllMySms resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_all_my_sms_id_patch**
> TransportAllMySmsGet api_transport_all_my_sms_id_patch(id, transport_all_my_sms_patch)

Updates the TransportAllMySms resource.

Updates the TransportAllMySms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_all_my_sms_get import TransportAllMySmsGet
from openapi_client.models.transport_all_my_sms_patch import TransportAllMySmsPatch
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
    api_instance = openapi_client.TransportAllMySmsApi(api_client)
    id = 'id_example' # str | TransportAllMySms identifier
    transport_all_my_sms_patch = openapi_client.TransportAllMySmsPatch() # TransportAllMySmsPatch | The updated TransportAllMySms resource

    try:
        # Updates the TransportAllMySms resource.
        api_response = api_instance.api_transport_all_my_sms_id_patch(id, transport_all_my_sms_patch)
        print("The response of TransportAllMySmsApi->api_transport_all_my_sms_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAllMySmsApi->api_transport_all_my_sms_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAllMySms identifier | 
 **transport_all_my_sms_patch** | [**TransportAllMySmsPatch**](TransportAllMySmsPatch.md)| The updated TransportAllMySms resource | 

### Return type

[**TransportAllMySmsGet**](TransportAllMySmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAllMySms resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_all_my_sms_id_put**
> TransportAllMySmsGet api_transport_all_my_sms_id_put(id, transport_all_my_sms_put)

Replaces the TransportAllMySms resource.

Replaces the TransportAllMySms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_all_my_sms_get import TransportAllMySmsGet
from openapi_client.models.transport_all_my_sms_put import TransportAllMySmsPut
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
    api_instance = openapi_client.TransportAllMySmsApi(api_client)
    id = 'id_example' # str | TransportAllMySms identifier
    transport_all_my_sms_put = openapi_client.TransportAllMySmsPut() # TransportAllMySmsPut | The updated TransportAllMySms resource

    try:
        # Replaces the TransportAllMySms resource.
        api_response = api_instance.api_transport_all_my_sms_id_put(id, transport_all_my_sms_put)
        print("The response of TransportAllMySmsApi->api_transport_all_my_sms_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAllMySmsApi->api_transport_all_my_sms_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAllMySms identifier | 
 **transport_all_my_sms_put** | [**TransportAllMySmsPut**](TransportAllMySmsPut.md)| The updated TransportAllMySms resource | 

### Return type

[**TransportAllMySmsGet**](TransportAllMySmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAllMySms resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_all_my_sms_post**
> TransportAllMySmsGet api_transport_all_my_sms_post(transport_all_my_sms_post)

Creates a TransportAllMySms resource.

Creates a TransportAllMySms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_all_my_sms_get import TransportAllMySmsGet
from openapi_client.models.transport_all_my_sms_post import TransportAllMySmsPost
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
    api_instance = openapi_client.TransportAllMySmsApi(api_client)
    transport_all_my_sms_post = openapi_client.TransportAllMySmsPost() # TransportAllMySmsPost | The new TransportAllMySms resource

    try:
        # Creates a TransportAllMySms resource.
        api_response = api_instance.api_transport_all_my_sms_post(transport_all_my_sms_post)
        print("The response of TransportAllMySmsApi->api_transport_all_my_sms_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAllMySmsApi->api_transport_all_my_sms_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_all_my_sms_post** | [**TransportAllMySmsPost**](TransportAllMySmsPost.md)| The new TransportAllMySms resource | 

### Return type

[**TransportAllMySmsGet**](TransportAllMySmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportAllMySms resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

