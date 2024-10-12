# openapi_client.TransportOrangeSmsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_orange_sms_get_collection**](TransportOrangeSmsApi.md#api_transport_orange_sms_get_collection) | **GET** /api/transport-orange-sms | Retrieves the collection of TransportOrangeSms resources.
[**api_transport_orange_sms_id_delete**](TransportOrangeSmsApi.md#api_transport_orange_sms_id_delete) | **DELETE** /api/transport-orange-sms/{id} | Removes the TransportOrangeSms resource.
[**api_transport_orange_sms_id_get**](TransportOrangeSmsApi.md#api_transport_orange_sms_id_get) | **GET** /api/transport-orange-sms/{id} | Retrieves a TransportOrangeSms resource.
[**api_transport_orange_sms_id_patch**](TransportOrangeSmsApi.md#api_transport_orange_sms_id_patch) | **PATCH** /api/transport-orange-sms/{id} | Updates the TransportOrangeSms resource.
[**api_transport_orange_sms_id_put**](TransportOrangeSmsApi.md#api_transport_orange_sms_id_put) | **PUT** /api/transport-orange-sms/{id} | Replaces the TransportOrangeSms resource.
[**api_transport_orange_sms_post**](TransportOrangeSmsApi.md#api_transport_orange_sms_post) | **POST** /api/transport-orange-sms | Creates a TransportOrangeSms resource.


# **api_transport_orange_sms_get_collection**
> List[TransportOrangeSmsGet] api_transport_orange_sms_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportOrangeSms resources.

Retrieves the collection of TransportOrangeSms resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_orange_sms_get import TransportOrangeSmsGet
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
    api_instance = openapi_client.TransportOrangeSmsApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportOrangeSms resources.
        api_response = api_instance.api_transport_orange_sms_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportOrangeSmsApi->api_transport_orange_sms_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOrangeSmsApi->api_transport_orange_sms_get_collection: %s\n" % e)
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

[**List[TransportOrangeSmsGet]**](TransportOrangeSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOrangeSms collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_orange_sms_id_delete**
> api_transport_orange_sms_id_delete(id)

Removes the TransportOrangeSms resource.

Removes the TransportOrangeSms resource.

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
    api_instance = openapi_client.TransportOrangeSmsApi(api_client)
    id = 'id_example' # str | TransportOrangeSms identifier

    try:
        # Removes the TransportOrangeSms resource.
        api_instance.api_transport_orange_sms_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportOrangeSmsApi->api_transport_orange_sms_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOrangeSms identifier | 

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
**204** | TransportOrangeSms resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_orange_sms_id_get**
> TransportOrangeSmsGet api_transport_orange_sms_id_get(id)

Retrieves a TransportOrangeSms resource.

Retrieves a TransportOrangeSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_orange_sms_get import TransportOrangeSmsGet
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
    api_instance = openapi_client.TransportOrangeSmsApi(api_client)
    id = 'id_example' # str | TransportOrangeSms identifier

    try:
        # Retrieves a TransportOrangeSms resource.
        api_response = api_instance.api_transport_orange_sms_id_get(id)
        print("The response of TransportOrangeSmsApi->api_transport_orange_sms_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOrangeSmsApi->api_transport_orange_sms_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOrangeSms identifier | 

### Return type

[**TransportOrangeSmsGet**](TransportOrangeSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOrangeSms resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_orange_sms_id_patch**
> TransportOrangeSmsGet api_transport_orange_sms_id_patch(id, transport_orange_sms_patch)

Updates the TransportOrangeSms resource.

Updates the TransportOrangeSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_orange_sms_get import TransportOrangeSmsGet
from openapi_client.models.transport_orange_sms_patch import TransportOrangeSmsPatch
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
    api_instance = openapi_client.TransportOrangeSmsApi(api_client)
    id = 'id_example' # str | TransportOrangeSms identifier
    transport_orange_sms_patch = openapi_client.TransportOrangeSmsPatch() # TransportOrangeSmsPatch | The updated TransportOrangeSms resource

    try:
        # Updates the TransportOrangeSms resource.
        api_response = api_instance.api_transport_orange_sms_id_patch(id, transport_orange_sms_patch)
        print("The response of TransportOrangeSmsApi->api_transport_orange_sms_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOrangeSmsApi->api_transport_orange_sms_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOrangeSms identifier | 
 **transport_orange_sms_patch** | [**TransportOrangeSmsPatch**](TransportOrangeSmsPatch.md)| The updated TransportOrangeSms resource | 

### Return type

[**TransportOrangeSmsGet**](TransportOrangeSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOrangeSms resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_orange_sms_id_put**
> TransportOrangeSmsGet api_transport_orange_sms_id_put(id, transport_orange_sms_put)

Replaces the TransportOrangeSms resource.

Replaces the TransportOrangeSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_orange_sms_get import TransportOrangeSmsGet
from openapi_client.models.transport_orange_sms_put import TransportOrangeSmsPut
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
    api_instance = openapi_client.TransportOrangeSmsApi(api_client)
    id = 'id_example' # str | TransportOrangeSms identifier
    transport_orange_sms_put = openapi_client.TransportOrangeSmsPut() # TransportOrangeSmsPut | The updated TransportOrangeSms resource

    try:
        # Replaces the TransportOrangeSms resource.
        api_response = api_instance.api_transport_orange_sms_id_put(id, transport_orange_sms_put)
        print("The response of TransportOrangeSmsApi->api_transport_orange_sms_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOrangeSmsApi->api_transport_orange_sms_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOrangeSms identifier | 
 **transport_orange_sms_put** | [**TransportOrangeSmsPut**](TransportOrangeSmsPut.md)| The updated TransportOrangeSms resource | 

### Return type

[**TransportOrangeSmsGet**](TransportOrangeSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOrangeSms resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_orange_sms_post**
> TransportOrangeSmsGet api_transport_orange_sms_post(transport_orange_sms_post)

Creates a TransportOrangeSms resource.

Creates a TransportOrangeSms resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_orange_sms_get import TransportOrangeSmsGet
from openapi_client.models.transport_orange_sms_post import TransportOrangeSmsPost
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
    api_instance = openapi_client.TransportOrangeSmsApi(api_client)
    transport_orange_sms_post = openapi_client.TransportOrangeSmsPost() # TransportOrangeSmsPost | The new TransportOrangeSms resource

    try:
        # Creates a TransportOrangeSms resource.
        api_response = api_instance.api_transport_orange_sms_post(transport_orange_sms_post)
        print("The response of TransportOrangeSmsApi->api_transport_orange_sms_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOrangeSmsApi->api_transport_orange_sms_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_orange_sms_post** | [**TransportOrangeSmsPost**](TransportOrangeSmsPost.md)| The new TransportOrangeSms resource | 

### Return type

[**TransportOrangeSmsGet**](TransportOrangeSmsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportOrangeSms resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

