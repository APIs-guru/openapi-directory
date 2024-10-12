# openapi_client.TransportTurboSmsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_turbo_sms_get_collection**](TransportTurboSmsApi.md#api_transport_turbo_sms_get_collection) | **GET** /api/transport-turbo-sms | Retrieves the collection of TransportTurboSms resources.
[**api_transport_turbo_sms_id_delete**](TransportTurboSmsApi.md#api_transport_turbo_sms_id_delete) | **DELETE** /api/transport-turbo-sms/{id} | Removes the TransportTurboSms resource.
[**api_transport_turbo_sms_id_get**](TransportTurboSmsApi.md#api_transport_turbo_sms_id_get) | **GET** /api/transport-turbo-sms/{id} | Retrieves a TransportTurboSms resource.
[**api_transport_turbo_sms_id_patch**](TransportTurboSmsApi.md#api_transport_turbo_sms_id_patch) | **PATCH** /api/transport-turbo-sms/{id} | Updates the TransportTurboSms resource.
[**api_transport_turbo_sms_id_put**](TransportTurboSmsApi.md#api_transport_turbo_sms_id_put) | **PUT** /api/transport-turbo-sms/{id} | Replaces the TransportTurboSms resource.
[**api_transport_turbo_sms_post**](TransportTurboSmsApi.md#api_transport_turbo_sms_post) | **POST** /api/transport-turbo-sms | Creates a TransportTurboSms resource.


# **api_transport_turbo_sms_get_collection**
> List[TransportTurboSmsGet] api_transport_turbo_sms_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportTurboSms resources.

Retrieves the collection of TransportTurboSms resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_turbo_sms_get import TransportTurboSmsGet
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
    api_instance = openapi_client.TransportTurboSmsApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportTurboSms resources.
        api_response = api_instance.api_transport_turbo_sms_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportTurboSmsApi->api_transport_turbo_sms_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTurboSmsApi->api_transport_turbo_sms_get_collection: %s\n" % e)
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

[**List[TransportTurboSmsGet]**](TransportTurboSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTurboSms collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_turbo_sms_id_delete**
> api_transport_turbo_sms_id_delete(id)

Removes the TransportTurboSms resource.

Removes the TransportTurboSms resource.

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
    api_instance = openapi_client.TransportTurboSmsApi(api_client)
    id = 'id_example' # str | TransportTurboSms identifier

    try:
        # Removes the TransportTurboSms resource.
        api_instance.api_transport_turbo_sms_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportTurboSmsApi->api_transport_turbo_sms_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTurboSms identifier | 

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
**204** | TransportTurboSms resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_turbo_sms_id_get**
> TransportTurboSmsGet api_transport_turbo_sms_id_get(id)

Retrieves a TransportTurboSms resource.

Retrieves a TransportTurboSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_turbo_sms_get import TransportTurboSmsGet
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
    api_instance = openapi_client.TransportTurboSmsApi(api_client)
    id = 'id_example' # str | TransportTurboSms identifier

    try:
        # Retrieves a TransportTurboSms resource.
        api_response = api_instance.api_transport_turbo_sms_id_get(id)
        print("The response of TransportTurboSmsApi->api_transport_turbo_sms_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTurboSmsApi->api_transport_turbo_sms_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTurboSms identifier | 

### Return type

[**TransportTurboSmsGet**](TransportTurboSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTurboSms resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_turbo_sms_id_patch**
> TransportTurboSmsGet api_transport_turbo_sms_id_patch(id, transport_turbo_sms_patch)

Updates the TransportTurboSms resource.

Updates the TransportTurboSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_turbo_sms_get import TransportTurboSmsGet
from openapi_client.models.transport_turbo_sms_patch import TransportTurboSmsPatch
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
    api_instance = openapi_client.TransportTurboSmsApi(api_client)
    id = 'id_example' # str | TransportTurboSms identifier
    transport_turbo_sms_patch = openapi_client.TransportTurboSmsPatch() # TransportTurboSmsPatch | The updated TransportTurboSms resource

    try:
        # Updates the TransportTurboSms resource.
        api_response = api_instance.api_transport_turbo_sms_id_patch(id, transport_turbo_sms_patch)
        print("The response of TransportTurboSmsApi->api_transport_turbo_sms_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTurboSmsApi->api_transport_turbo_sms_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTurboSms identifier | 
 **transport_turbo_sms_patch** | [**TransportTurboSmsPatch**](TransportTurboSmsPatch.md)| The updated TransportTurboSms resource | 

### Return type

[**TransportTurboSmsGet**](TransportTurboSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTurboSms resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_turbo_sms_id_put**
> TransportTurboSmsGet api_transport_turbo_sms_id_put(id, transport_turbo_sms_put)

Replaces the TransportTurboSms resource.

Replaces the TransportTurboSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_turbo_sms_get import TransportTurboSmsGet
from openapi_client.models.transport_turbo_sms_put import TransportTurboSmsPut
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
    api_instance = openapi_client.TransportTurboSmsApi(api_client)
    id = 'id_example' # str | TransportTurboSms identifier
    transport_turbo_sms_put = openapi_client.TransportTurboSmsPut() # TransportTurboSmsPut | The updated TransportTurboSms resource

    try:
        # Replaces the TransportTurboSms resource.
        api_response = api_instance.api_transport_turbo_sms_id_put(id, transport_turbo_sms_put)
        print("The response of TransportTurboSmsApi->api_transport_turbo_sms_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTurboSmsApi->api_transport_turbo_sms_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTurboSms identifier | 
 **transport_turbo_sms_put** | [**TransportTurboSmsPut**](TransportTurboSmsPut.md)| The updated TransportTurboSms resource | 

### Return type

[**TransportTurboSmsGet**](TransportTurboSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTurboSms resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_turbo_sms_post**
> TransportTurboSmsGet api_transport_turbo_sms_post(transport_turbo_sms_post)

Creates a TransportTurboSms resource.

Creates a TransportTurboSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_turbo_sms_get import TransportTurboSmsGet
from openapi_client.models.transport_turbo_sms_post import TransportTurboSmsPost
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
    api_instance = openapi_client.TransportTurboSmsApi(api_client)
    transport_turbo_sms_post = openapi_client.TransportTurboSmsPost() # TransportTurboSmsPost | The new TransportTurboSms resource

    try:
        # Creates a TransportTurboSms resource.
        api_response = api_instance.api_transport_turbo_sms_post(transport_turbo_sms_post)
        print("The response of TransportTurboSmsApi->api_transport_turbo_sms_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTurboSmsApi->api_transport_turbo_sms_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_turbo_sms_post** | [**TransportTurboSmsPost**](TransportTurboSmsPost.md)| The new TransportTurboSms resource | 

### Return type

[**TransportTurboSmsGet**](TransportTurboSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportTurboSms resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

