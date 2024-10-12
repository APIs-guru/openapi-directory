# openapi_client.TransportLightSmsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_light_sms_get_collection**](TransportLightSmsApi.md#api_transport_light_sms_get_collection) | **GET** /api/transport-light-sms | Retrieves the collection of TransportLightSms resources.
[**api_transport_light_sms_id_delete**](TransportLightSmsApi.md#api_transport_light_sms_id_delete) | **DELETE** /api/transport-light-sms/{id} | Removes the TransportLightSms resource.
[**api_transport_light_sms_id_get**](TransportLightSmsApi.md#api_transport_light_sms_id_get) | **GET** /api/transport-light-sms/{id} | Retrieves a TransportLightSms resource.
[**api_transport_light_sms_id_patch**](TransportLightSmsApi.md#api_transport_light_sms_id_patch) | **PATCH** /api/transport-light-sms/{id} | Updates the TransportLightSms resource.
[**api_transport_light_sms_id_put**](TransportLightSmsApi.md#api_transport_light_sms_id_put) | **PUT** /api/transport-light-sms/{id} | Replaces the TransportLightSms resource.
[**api_transport_light_sms_post**](TransportLightSmsApi.md#api_transport_light_sms_post) | **POST** /api/transport-light-sms | Creates a TransportLightSms resource.


# **api_transport_light_sms_get_collection**
> List[TransportLightSmsGet] api_transport_light_sms_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportLightSms resources.

Retrieves the collection of TransportLightSms resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_light_sms_get import TransportLightSmsGet
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
    api_instance = openapi_client.TransportLightSmsApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportLightSms resources.
        api_response = api_instance.api_transport_light_sms_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportLightSmsApi->api_transport_light_sms_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLightSmsApi->api_transport_light_sms_get_collection: %s\n" % e)
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

[**List[TransportLightSmsGet]**](TransportLightSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLightSms collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_light_sms_id_delete**
> api_transport_light_sms_id_delete(id)

Removes the TransportLightSms resource.

Removes the TransportLightSms resource.

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
    api_instance = openapi_client.TransportLightSmsApi(api_client)
    id = 'id_example' # str | TransportLightSms identifier

    try:
        # Removes the TransportLightSms resource.
        api_instance.api_transport_light_sms_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportLightSmsApi->api_transport_light_sms_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLightSms identifier | 

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
**204** | TransportLightSms resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_light_sms_id_get**
> TransportLightSmsGet api_transport_light_sms_id_get(id)

Retrieves a TransportLightSms resource.

Retrieves a TransportLightSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_light_sms_get import TransportLightSmsGet
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
    api_instance = openapi_client.TransportLightSmsApi(api_client)
    id = 'id_example' # str | TransportLightSms identifier

    try:
        # Retrieves a TransportLightSms resource.
        api_response = api_instance.api_transport_light_sms_id_get(id)
        print("The response of TransportLightSmsApi->api_transport_light_sms_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLightSmsApi->api_transport_light_sms_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLightSms identifier | 

### Return type

[**TransportLightSmsGet**](TransportLightSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLightSms resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_light_sms_id_patch**
> TransportLightSmsGet api_transport_light_sms_id_patch(id, transport_light_sms_patch)

Updates the TransportLightSms resource.

Updates the TransportLightSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_light_sms_get import TransportLightSmsGet
from openapi_client.models.transport_light_sms_patch import TransportLightSmsPatch
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
    api_instance = openapi_client.TransportLightSmsApi(api_client)
    id = 'id_example' # str | TransportLightSms identifier
    transport_light_sms_patch = openapi_client.TransportLightSmsPatch() # TransportLightSmsPatch | The updated TransportLightSms resource

    try:
        # Updates the TransportLightSms resource.
        api_response = api_instance.api_transport_light_sms_id_patch(id, transport_light_sms_patch)
        print("The response of TransportLightSmsApi->api_transport_light_sms_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLightSmsApi->api_transport_light_sms_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLightSms identifier | 
 **transport_light_sms_patch** | [**TransportLightSmsPatch**](TransportLightSmsPatch.md)| The updated TransportLightSms resource | 

### Return type

[**TransportLightSmsGet**](TransportLightSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLightSms resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_light_sms_id_put**
> TransportLightSmsGet api_transport_light_sms_id_put(id, transport_light_sms_put)

Replaces the TransportLightSms resource.

Replaces the TransportLightSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_light_sms_get import TransportLightSmsGet
from openapi_client.models.transport_light_sms_put import TransportLightSmsPut
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
    api_instance = openapi_client.TransportLightSmsApi(api_client)
    id = 'id_example' # str | TransportLightSms identifier
    transport_light_sms_put = openapi_client.TransportLightSmsPut() # TransportLightSmsPut | The updated TransportLightSms resource

    try:
        # Replaces the TransportLightSms resource.
        api_response = api_instance.api_transport_light_sms_id_put(id, transport_light_sms_put)
        print("The response of TransportLightSmsApi->api_transport_light_sms_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLightSmsApi->api_transport_light_sms_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportLightSms identifier | 
 **transport_light_sms_put** | [**TransportLightSmsPut**](TransportLightSmsPut.md)| The updated TransportLightSms resource | 

### Return type

[**TransportLightSmsGet**](TransportLightSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportLightSms resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_light_sms_post**
> TransportLightSmsGet api_transport_light_sms_post(transport_light_sms_post)

Creates a TransportLightSms resource.

Creates a TransportLightSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_light_sms_get import TransportLightSmsGet
from openapi_client.models.transport_light_sms_post import TransportLightSmsPost
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
    api_instance = openapi_client.TransportLightSmsApi(api_client)
    transport_light_sms_post = openapi_client.TransportLightSmsPost() # TransportLightSmsPost | The new TransportLightSms resource

    try:
        # Creates a TransportLightSms resource.
        api_response = api_instance.api_transport_light_sms_post(transport_light_sms_post)
        print("The response of TransportLightSmsApi->api_transport_light_sms_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportLightSmsApi->api_transport_light_sms_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_light_sms_post** | [**TransportLightSmsPost**](TransportLightSmsPost.md)| The new TransportLightSms resource | 

### Return type

[**TransportLightSmsGet**](TransportLightSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportLightSms resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

