# openapi_client.TransportContactEveryoneApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_contact_everyone_get_collection**](TransportContactEveryoneApi.md#api_transport_contact_everyone_get_collection) | **GET** /api/transport-contact-everyone | Retrieves the collection of TransportContactEveryone resources.
[**api_transport_contact_everyone_id_delete**](TransportContactEveryoneApi.md#api_transport_contact_everyone_id_delete) | **DELETE** /api/transport-contact-everyone/{id} | Removes the TransportContactEveryone resource.
[**api_transport_contact_everyone_id_get**](TransportContactEveryoneApi.md#api_transport_contact_everyone_id_get) | **GET** /api/transport-contact-everyone/{id} | Retrieves a TransportContactEveryone resource.
[**api_transport_contact_everyone_id_patch**](TransportContactEveryoneApi.md#api_transport_contact_everyone_id_patch) | **PATCH** /api/transport-contact-everyone/{id} | Updates the TransportContactEveryone resource.
[**api_transport_contact_everyone_id_put**](TransportContactEveryoneApi.md#api_transport_contact_everyone_id_put) | **PUT** /api/transport-contact-everyone/{id} | Replaces the TransportContactEveryone resource.
[**api_transport_contact_everyone_post**](TransportContactEveryoneApi.md#api_transport_contact_everyone_post) | **POST** /api/transport-contact-everyone | Creates a TransportContactEveryone resource.


# **api_transport_contact_everyone_get_collection**
> List[TransportContactEveryoneGet] api_transport_contact_everyone_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportContactEveryone resources.

Retrieves the collection of TransportContactEveryone resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_contact_everyone_get import TransportContactEveryoneGet
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
    api_instance = openapi_client.TransportContactEveryoneApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportContactEveryone resources.
        api_response = api_instance.api_transport_contact_everyone_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportContactEveryoneApi->api_transport_contact_everyone_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportContactEveryoneApi->api_transport_contact_everyone_get_collection: %s\n" % e)
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

[**List[TransportContactEveryoneGet]**](TransportContactEveryoneGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportContactEveryone collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_contact_everyone_id_delete**
> api_transport_contact_everyone_id_delete(id)

Removes the TransportContactEveryone resource.

Removes the TransportContactEveryone resource.

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
    api_instance = openapi_client.TransportContactEveryoneApi(api_client)
    id = 'id_example' # str | TransportContactEveryone identifier

    try:
        # Removes the TransportContactEveryone resource.
        api_instance.api_transport_contact_everyone_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportContactEveryoneApi->api_transport_contact_everyone_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportContactEveryone identifier | 

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
**204** | TransportContactEveryone resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_contact_everyone_id_get**
> TransportContactEveryoneGet api_transport_contact_everyone_id_get(id)

Retrieves a TransportContactEveryone resource.

Retrieves a TransportContactEveryone resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_contact_everyone_get import TransportContactEveryoneGet
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
    api_instance = openapi_client.TransportContactEveryoneApi(api_client)
    id = 'id_example' # str | TransportContactEveryone identifier

    try:
        # Retrieves a TransportContactEveryone resource.
        api_response = api_instance.api_transport_contact_everyone_id_get(id)
        print("The response of TransportContactEveryoneApi->api_transport_contact_everyone_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportContactEveryoneApi->api_transport_contact_everyone_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportContactEveryone identifier | 

### Return type

[**TransportContactEveryoneGet**](TransportContactEveryoneGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportContactEveryone resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_contact_everyone_id_patch**
> TransportContactEveryoneGet api_transport_contact_everyone_id_patch(id, transport_contact_everyone_patch)

Updates the TransportContactEveryone resource.

Updates the TransportContactEveryone resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_contact_everyone_get import TransportContactEveryoneGet
from openapi_client.models.transport_contact_everyone_patch import TransportContactEveryonePatch
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
    api_instance = openapi_client.TransportContactEveryoneApi(api_client)
    id = 'id_example' # str | TransportContactEveryone identifier
    transport_contact_everyone_patch = openapi_client.TransportContactEveryonePatch() # TransportContactEveryonePatch | The updated TransportContactEveryone resource

    try:
        # Updates the TransportContactEveryone resource.
        api_response = api_instance.api_transport_contact_everyone_id_patch(id, transport_contact_everyone_patch)
        print("The response of TransportContactEveryoneApi->api_transport_contact_everyone_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportContactEveryoneApi->api_transport_contact_everyone_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportContactEveryone identifier | 
 **transport_contact_everyone_patch** | [**TransportContactEveryonePatch**](TransportContactEveryonePatch.md)| The updated TransportContactEveryone resource | 

### Return type

[**TransportContactEveryoneGet**](TransportContactEveryoneGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportContactEveryone resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_contact_everyone_id_put**
> TransportContactEveryoneGet api_transport_contact_everyone_id_put(id, transport_contact_everyone_put)

Replaces the TransportContactEveryone resource.

Replaces the TransportContactEveryone resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_contact_everyone_get import TransportContactEveryoneGet
from openapi_client.models.transport_contact_everyone_put import TransportContactEveryonePut
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
    api_instance = openapi_client.TransportContactEveryoneApi(api_client)
    id = 'id_example' # str | TransportContactEveryone identifier
    transport_contact_everyone_put = openapi_client.TransportContactEveryonePut() # TransportContactEveryonePut | The updated TransportContactEveryone resource

    try:
        # Replaces the TransportContactEveryone resource.
        api_response = api_instance.api_transport_contact_everyone_id_put(id, transport_contact_everyone_put)
        print("The response of TransportContactEveryoneApi->api_transport_contact_everyone_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportContactEveryoneApi->api_transport_contact_everyone_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportContactEveryone identifier | 
 **transport_contact_everyone_put** | [**TransportContactEveryonePut**](TransportContactEveryonePut.md)| The updated TransportContactEveryone resource | 

### Return type

[**TransportContactEveryoneGet**](TransportContactEveryoneGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportContactEveryone resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_contact_everyone_post**
> TransportContactEveryoneGet api_transport_contact_everyone_post(transport_contact_everyone_post)

Creates a TransportContactEveryone resource.

Creates a TransportContactEveryone resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_contact_everyone_get import TransportContactEveryoneGet
from openapi_client.models.transport_contact_everyone_post import TransportContactEveryonePost
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
    api_instance = openapi_client.TransportContactEveryoneApi(api_client)
    transport_contact_everyone_post = openapi_client.TransportContactEveryonePost() # TransportContactEveryonePost | The new TransportContactEveryone resource

    try:
        # Creates a TransportContactEveryone resource.
        api_response = api_instance.api_transport_contact_everyone_post(transport_contact_everyone_post)
        print("The response of TransportContactEveryoneApi->api_transport_contact_everyone_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportContactEveryoneApi->api_transport_contact_everyone_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_contact_everyone_post** | [**TransportContactEveryonePost**](TransportContactEveryonePost.md)| The new TransportContactEveryone resource | 

### Return type

[**TransportContactEveryoneGet**](TransportContactEveryoneGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportContactEveryone resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

