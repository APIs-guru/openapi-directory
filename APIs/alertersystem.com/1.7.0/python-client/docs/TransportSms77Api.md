# openapi_client.TransportSms77Api

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_sms77_get_collection**](TransportSms77Api.md#api_transport_sms77_get_collection) | **GET** /api/transport-sms77 | Retrieves the collection of TransportSms77 resources.
[**api_transport_sms77_id_delete**](TransportSms77Api.md#api_transport_sms77_id_delete) | **DELETE** /api/transport-sms77/{id} | Removes the TransportSms77 resource.
[**api_transport_sms77_id_get**](TransportSms77Api.md#api_transport_sms77_id_get) | **GET** /api/transport-sms77/{id} | Retrieves a TransportSms77 resource.
[**api_transport_sms77_id_patch**](TransportSms77Api.md#api_transport_sms77_id_patch) | **PATCH** /api/transport-sms77/{id} | Updates the TransportSms77 resource.
[**api_transport_sms77_id_put**](TransportSms77Api.md#api_transport_sms77_id_put) | **PUT** /api/transport-sms77/{id} | Replaces the TransportSms77 resource.
[**api_transport_sms77_post**](TransportSms77Api.md#api_transport_sms77_post) | **POST** /api/transport-sms77 | Creates a TransportSms77 resource.


# **api_transport_sms77_get_collection**
> List[TransportSms77Get] api_transport_sms77_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSms77 resources.

Retrieves the collection of TransportSms77 resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms77_get import TransportSms77Get
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
    api_instance = openapi_client.TransportSms77Api(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSms77 resources.
        api_response = api_instance.api_transport_sms77_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSms77Api->api_transport_sms77_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSms77Api->api_transport_sms77_get_collection: %s\n" % e)
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

[**List[TransportSms77Get]**](TransportSms77Get.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSms77 collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms77_id_delete**
> api_transport_sms77_id_delete(id)

Removes the TransportSms77 resource.

Removes the TransportSms77 resource.

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
    api_instance = openapi_client.TransportSms77Api(api_client)
    id = 'id_example' # str | TransportSms77 identifier

    try:
        # Removes the TransportSms77 resource.
        api_instance.api_transport_sms77_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSms77Api->api_transport_sms77_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSms77 identifier | 

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
**204** | TransportSms77 resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms77_id_get**
> TransportSms77Get api_transport_sms77_id_get(id)

Retrieves a TransportSms77 resource.

Retrieves a TransportSms77 resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms77_get import TransportSms77Get
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
    api_instance = openapi_client.TransportSms77Api(api_client)
    id = 'id_example' # str | TransportSms77 identifier

    try:
        # Retrieves a TransportSms77 resource.
        api_response = api_instance.api_transport_sms77_id_get(id)
        print("The response of TransportSms77Api->api_transport_sms77_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSms77Api->api_transport_sms77_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSms77 identifier | 

### Return type

[**TransportSms77Get**](TransportSms77Get.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSms77 resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms77_id_patch**
> TransportSms77Get api_transport_sms77_id_patch(id, transport_sms77_patch)

Updates the TransportSms77 resource.

Updates the TransportSms77 resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms77_get import TransportSms77Get
from openapi_client.models.transport_sms77_patch import TransportSms77Patch
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
    api_instance = openapi_client.TransportSms77Api(api_client)
    id = 'id_example' # str | TransportSms77 identifier
    transport_sms77_patch = openapi_client.TransportSms77Patch() # TransportSms77Patch | The updated TransportSms77 resource

    try:
        # Updates the TransportSms77 resource.
        api_response = api_instance.api_transport_sms77_id_patch(id, transport_sms77_patch)
        print("The response of TransportSms77Api->api_transport_sms77_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSms77Api->api_transport_sms77_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSms77 identifier | 
 **transport_sms77_patch** | [**TransportSms77Patch**](TransportSms77Patch.md)| The updated TransportSms77 resource | 

### Return type

[**TransportSms77Get**](TransportSms77Get.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSms77 resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms77_id_put**
> TransportSms77Get api_transport_sms77_id_put(id, transport_sms77_put)

Replaces the TransportSms77 resource.

Replaces the TransportSms77 resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms77_get import TransportSms77Get
from openapi_client.models.transport_sms77_put import TransportSms77Put
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
    api_instance = openapi_client.TransportSms77Api(api_client)
    id = 'id_example' # str | TransportSms77 identifier
    transport_sms77_put = openapi_client.TransportSms77Put() # TransportSms77Put | The updated TransportSms77 resource

    try:
        # Replaces the TransportSms77 resource.
        api_response = api_instance.api_transport_sms77_id_put(id, transport_sms77_put)
        print("The response of TransportSms77Api->api_transport_sms77_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSms77Api->api_transport_sms77_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSms77 identifier | 
 **transport_sms77_put** | [**TransportSms77Put**](TransportSms77Put.md)| The updated TransportSms77 resource | 

### Return type

[**TransportSms77Get**](TransportSms77Get.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSms77 resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms77_post**
> TransportSms77Get api_transport_sms77_post(transport_sms77_post)

Creates a TransportSms77 resource.

Creates a TransportSms77 resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms77_get import TransportSms77Get
from openapi_client.models.transport_sms77_post import TransportSms77Post
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
    api_instance = openapi_client.TransportSms77Api(api_client)
    transport_sms77_post = openapi_client.TransportSms77Post() # TransportSms77Post | The new TransportSms77 resource

    try:
        # Creates a TransportSms77 resource.
        api_response = api_instance.api_transport_sms77_post(transport_sms77_post)
        print("The response of TransportSms77Api->api_transport_sms77_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSms77Api->api_transport_sms77_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_sms77_post** | [**TransportSms77Post**](TransportSms77Post.md)| The new TransportSms77 resource | 

### Return type

[**TransportSms77Get**](TransportSms77Get.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSms77 resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

