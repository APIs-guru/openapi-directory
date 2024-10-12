# openapi_client.TransportEmailApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_email_get_collection**](TransportEmailApi.md#api_transport_email_get_collection) | **GET** /api/transport-email | Retrieves the collection of TransportEmail resources.
[**api_transport_email_id_delete**](TransportEmailApi.md#api_transport_email_id_delete) | **DELETE** /api/transport-email/{id} | Removes the TransportEmail resource.
[**api_transport_email_id_get**](TransportEmailApi.md#api_transport_email_id_get) | **GET** /api/transport-email/{id} | Retrieves a TransportEmail resource.
[**api_transport_email_id_patch**](TransportEmailApi.md#api_transport_email_id_patch) | **PATCH** /api/transport-email/{id} | Updates the TransportEmail resource.
[**api_transport_email_id_put**](TransportEmailApi.md#api_transport_email_id_put) | **PUT** /api/transport-email/{id} | Replaces the TransportEmail resource.
[**api_transport_email_post**](TransportEmailApi.md#api_transport_email_post) | **POST** /api/transport-email | Creates a TransportEmail resource.


# **api_transport_email_get_collection**
> List[TransportEmailGet] api_transport_email_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportEmail resources.

Retrieves the collection of TransportEmail resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_email_get import TransportEmailGet
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
    api_instance = openapi_client.TransportEmailApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportEmail resources.
        api_response = api_instance.api_transport_email_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportEmailApi->api_transport_email_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEmailApi->api_transport_email_get_collection: %s\n" % e)
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

[**List[TransportEmailGet]**](TransportEmailGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEmail collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_email_id_delete**
> api_transport_email_id_delete(id)

Removes the TransportEmail resource.

Removes the TransportEmail resource.

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
    api_instance = openapi_client.TransportEmailApi(api_client)
    id = 'id_example' # str | TransportEmail identifier

    try:
        # Removes the TransportEmail resource.
        api_instance.api_transport_email_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportEmailApi->api_transport_email_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEmail identifier | 

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
**204** | TransportEmail resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_email_id_get**
> TransportEmailGet api_transport_email_id_get(id)

Retrieves a TransportEmail resource.

Retrieves a TransportEmail resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_email_get import TransportEmailGet
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
    api_instance = openapi_client.TransportEmailApi(api_client)
    id = 'id_example' # str | TransportEmail identifier

    try:
        # Retrieves a TransportEmail resource.
        api_response = api_instance.api_transport_email_id_get(id)
        print("The response of TransportEmailApi->api_transport_email_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEmailApi->api_transport_email_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEmail identifier | 

### Return type

[**TransportEmailGet**](TransportEmailGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEmail resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_email_id_patch**
> TransportEmailGet api_transport_email_id_patch(id, transport_email_patch)

Updates the TransportEmail resource.

Updates the TransportEmail resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_email_get import TransportEmailGet
from openapi_client.models.transport_email_patch import TransportEmailPatch
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
    api_instance = openapi_client.TransportEmailApi(api_client)
    id = 'id_example' # str | TransportEmail identifier
    transport_email_patch = openapi_client.TransportEmailPatch() # TransportEmailPatch | The updated TransportEmail resource

    try:
        # Updates the TransportEmail resource.
        api_response = api_instance.api_transport_email_id_patch(id, transport_email_patch)
        print("The response of TransportEmailApi->api_transport_email_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEmailApi->api_transport_email_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEmail identifier | 
 **transport_email_patch** | [**TransportEmailPatch**](TransportEmailPatch.md)| The updated TransportEmail resource | 

### Return type

[**TransportEmailGet**](TransportEmailGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEmail resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_email_id_put**
> TransportEmailGet api_transport_email_id_put(id, transport_email_put)

Replaces the TransportEmail resource.

Replaces the TransportEmail resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_email_get import TransportEmailGet
from openapi_client.models.transport_email_put import TransportEmailPut
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
    api_instance = openapi_client.TransportEmailApi(api_client)
    id = 'id_example' # str | TransportEmail identifier
    transport_email_put = openapi_client.TransportEmailPut() # TransportEmailPut | The updated TransportEmail resource

    try:
        # Replaces the TransportEmail resource.
        api_response = api_instance.api_transport_email_id_put(id, transport_email_put)
        print("The response of TransportEmailApi->api_transport_email_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEmailApi->api_transport_email_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportEmail identifier | 
 **transport_email_put** | [**TransportEmailPut**](TransportEmailPut.md)| The updated TransportEmail resource | 

### Return type

[**TransportEmailGet**](TransportEmailGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportEmail resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_email_post**
> TransportEmailGet api_transport_email_post(transport_email_post)

Creates a TransportEmail resource.

Creates a TransportEmail resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_email_get import TransportEmailGet
from openapi_client.models.transport_email_post import TransportEmailPost
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
    api_instance = openapi_client.TransportEmailApi(api_client)
    transport_email_post = openapi_client.TransportEmailPost() # TransportEmailPost | The new TransportEmail resource

    try:
        # Creates a TransportEmail resource.
        api_response = api_instance.api_transport_email_post(transport_email_post)
        print("The response of TransportEmailApi->api_transport_email_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportEmailApi->api_transport_email_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_email_post** | [**TransportEmailPost**](TransportEmailPost.md)| The new TransportEmail resource | 

### Return type

[**TransportEmailGet**](TransportEmailGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportEmail resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

