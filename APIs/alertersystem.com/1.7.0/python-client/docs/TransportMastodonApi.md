# openapi_client.TransportMastodonApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_mastodon_get_collection**](TransportMastodonApi.md#api_transport_mastodon_get_collection) | **GET** /api/transport-mastodon | Retrieves the collection of TransportMastodon resources.
[**api_transport_mastodon_id_delete**](TransportMastodonApi.md#api_transport_mastodon_id_delete) | **DELETE** /api/transport-mastodon/{id} | Removes the TransportMastodon resource.
[**api_transport_mastodon_id_get**](TransportMastodonApi.md#api_transport_mastodon_id_get) | **GET** /api/transport-mastodon/{id} | Retrieves a TransportMastodon resource.
[**api_transport_mastodon_id_patch**](TransportMastodonApi.md#api_transport_mastodon_id_patch) | **PATCH** /api/transport-mastodon/{id} | Updates the TransportMastodon resource.
[**api_transport_mastodon_id_put**](TransportMastodonApi.md#api_transport_mastodon_id_put) | **PUT** /api/transport-mastodon/{id} | Replaces the TransportMastodon resource.
[**api_transport_mastodon_post**](TransportMastodonApi.md#api_transport_mastodon_post) | **POST** /api/transport-mastodon | Creates a TransportMastodon resource.


# **api_transport_mastodon_get_collection**
> List[TransportMastodonGet] api_transport_mastodon_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportMastodon resources.

Retrieves the collection of TransportMastodon resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mastodon_get import TransportMastodonGet
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
    api_instance = openapi_client.TransportMastodonApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportMastodon resources.
        api_response = api_instance.api_transport_mastodon_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportMastodonApi->api_transport_mastodon_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMastodonApi->api_transport_mastodon_get_collection: %s\n" % e)
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

[**List[TransportMastodonGet]**](TransportMastodonGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMastodon collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mastodon_id_delete**
> api_transport_mastodon_id_delete(id)

Removes the TransportMastodon resource.

Removes the TransportMastodon resource.

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
    api_instance = openapi_client.TransportMastodonApi(api_client)
    id = 'id_example' # str | TransportMastodon identifier

    try:
        # Removes the TransportMastodon resource.
        api_instance.api_transport_mastodon_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportMastodonApi->api_transport_mastodon_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMastodon identifier | 

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
**204** | TransportMastodon resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mastodon_id_get**
> TransportMastodonGet api_transport_mastodon_id_get(id)

Retrieves a TransportMastodon resource.

Retrieves a TransportMastodon resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mastodon_get import TransportMastodonGet
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
    api_instance = openapi_client.TransportMastodonApi(api_client)
    id = 'id_example' # str | TransportMastodon identifier

    try:
        # Retrieves a TransportMastodon resource.
        api_response = api_instance.api_transport_mastodon_id_get(id)
        print("The response of TransportMastodonApi->api_transport_mastodon_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMastodonApi->api_transport_mastodon_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMastodon identifier | 

### Return type

[**TransportMastodonGet**](TransportMastodonGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMastodon resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mastodon_id_patch**
> TransportMastodonGet api_transport_mastodon_id_patch(id, transport_mastodon_patch)

Updates the TransportMastodon resource.

Updates the TransportMastodon resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mastodon_get import TransportMastodonGet
from openapi_client.models.transport_mastodon_patch import TransportMastodonPatch
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
    api_instance = openapi_client.TransportMastodonApi(api_client)
    id = 'id_example' # str | TransportMastodon identifier
    transport_mastodon_patch = openapi_client.TransportMastodonPatch() # TransportMastodonPatch | The updated TransportMastodon resource

    try:
        # Updates the TransportMastodon resource.
        api_response = api_instance.api_transport_mastodon_id_patch(id, transport_mastodon_patch)
        print("The response of TransportMastodonApi->api_transport_mastodon_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMastodonApi->api_transport_mastodon_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMastodon identifier | 
 **transport_mastodon_patch** | [**TransportMastodonPatch**](TransportMastodonPatch.md)| The updated TransportMastodon resource | 

### Return type

[**TransportMastodonGet**](TransportMastodonGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMastodon resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mastodon_id_put**
> TransportMastodonGet api_transport_mastodon_id_put(id, transport_mastodon_put)

Replaces the TransportMastodon resource.

Replaces the TransportMastodon resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mastodon_get import TransportMastodonGet
from openapi_client.models.transport_mastodon_put import TransportMastodonPut
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
    api_instance = openapi_client.TransportMastodonApi(api_client)
    id = 'id_example' # str | TransportMastodon identifier
    transport_mastodon_put = openapi_client.TransportMastodonPut() # TransportMastodonPut | The updated TransportMastodon resource

    try:
        # Replaces the TransportMastodon resource.
        api_response = api_instance.api_transport_mastodon_id_put(id, transport_mastodon_put)
        print("The response of TransportMastodonApi->api_transport_mastodon_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMastodonApi->api_transport_mastodon_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMastodon identifier | 
 **transport_mastodon_put** | [**TransportMastodonPut**](TransportMastodonPut.md)| The updated TransportMastodon resource | 

### Return type

[**TransportMastodonGet**](TransportMastodonGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMastodon resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mastodon_post**
> TransportMastodonGet api_transport_mastodon_post(transport_mastodon_post)

Creates a TransportMastodon resource.

Creates a TransportMastodon resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mastodon_get import TransportMastodonGet
from openapi_client.models.transport_mastodon_post import TransportMastodonPost
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
    api_instance = openapi_client.TransportMastodonApi(api_client)
    transport_mastodon_post = openapi_client.TransportMastodonPost() # TransportMastodonPost | The new TransportMastodon resource

    try:
        # Creates a TransportMastodon resource.
        api_response = api_instance.api_transport_mastodon_post(transport_mastodon_post)
        print("The response of TransportMastodonApi->api_transport_mastodon_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMastodonApi->api_transport_mastodon_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_mastodon_post** | [**TransportMastodonPost**](TransportMastodonPost.md)| The new TransportMastodon resource | 

### Return type

[**TransportMastodonGet**](TransportMastodonGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportMastodon resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

