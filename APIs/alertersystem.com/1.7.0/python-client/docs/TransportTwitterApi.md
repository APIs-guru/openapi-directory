# openapi_client.TransportTwitterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_twitter_get_collection**](TransportTwitterApi.md#api_transport_twitter_get_collection) | **GET** /api/transport-twitter | Retrieves the collection of TransportTwitter resources.
[**api_transport_twitter_id_delete**](TransportTwitterApi.md#api_transport_twitter_id_delete) | **DELETE** /api/transport-twitter/{id} | Removes the TransportTwitter resource.
[**api_transport_twitter_id_get**](TransportTwitterApi.md#api_transport_twitter_id_get) | **GET** /api/transport-twitter/{id} | Retrieves a TransportTwitter resource.
[**api_transport_twitter_id_patch**](TransportTwitterApi.md#api_transport_twitter_id_patch) | **PATCH** /api/transport-twitter/{id} | Updates the TransportTwitter resource.
[**api_transport_twitter_id_put**](TransportTwitterApi.md#api_transport_twitter_id_put) | **PUT** /api/transport-twitter/{id} | Replaces the TransportTwitter resource.
[**api_transport_twitter_post**](TransportTwitterApi.md#api_transport_twitter_post) | **POST** /api/transport-twitter | Creates a TransportTwitter resource.


# **api_transport_twitter_get_collection**
> List[TransportTwitterGet] api_transport_twitter_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportTwitter resources.

Retrieves the collection of TransportTwitter resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_twitter_get import TransportTwitterGet
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
    api_instance = openapi_client.TransportTwitterApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportTwitter resources.
        api_response = api_instance.api_transport_twitter_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportTwitterApi->api_transport_twitter_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTwitterApi->api_transport_twitter_get_collection: %s\n" % e)
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

[**List[TransportTwitterGet]**](TransportTwitterGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTwitter collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_twitter_id_delete**
> api_transport_twitter_id_delete(id)

Removes the TransportTwitter resource.

Removes the TransportTwitter resource.

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
    api_instance = openapi_client.TransportTwitterApi(api_client)
    id = 'id_example' # str | TransportTwitter identifier

    try:
        # Removes the TransportTwitter resource.
        api_instance.api_transport_twitter_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportTwitterApi->api_transport_twitter_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTwitter identifier | 

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
**204** | TransportTwitter resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_twitter_id_get**
> TransportTwitterGet api_transport_twitter_id_get(id)

Retrieves a TransportTwitter resource.

Retrieves a TransportTwitter resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_twitter_get import TransportTwitterGet
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
    api_instance = openapi_client.TransportTwitterApi(api_client)
    id = 'id_example' # str | TransportTwitter identifier

    try:
        # Retrieves a TransportTwitter resource.
        api_response = api_instance.api_transport_twitter_id_get(id)
        print("The response of TransportTwitterApi->api_transport_twitter_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTwitterApi->api_transport_twitter_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTwitter identifier | 

### Return type

[**TransportTwitterGet**](TransportTwitterGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTwitter resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_twitter_id_patch**
> TransportTwitterGet api_transport_twitter_id_patch(id, transport_twitter_patch)

Updates the TransportTwitter resource.

Updates the TransportTwitter resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_twitter_get import TransportTwitterGet
from openapi_client.models.transport_twitter_patch import TransportTwitterPatch
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
    api_instance = openapi_client.TransportTwitterApi(api_client)
    id = 'id_example' # str | TransportTwitter identifier
    transport_twitter_patch = openapi_client.TransportTwitterPatch() # TransportTwitterPatch | The updated TransportTwitter resource

    try:
        # Updates the TransportTwitter resource.
        api_response = api_instance.api_transport_twitter_id_patch(id, transport_twitter_patch)
        print("The response of TransportTwitterApi->api_transport_twitter_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTwitterApi->api_transport_twitter_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTwitter identifier | 
 **transport_twitter_patch** | [**TransportTwitterPatch**](TransportTwitterPatch.md)| The updated TransportTwitter resource | 

### Return type

[**TransportTwitterGet**](TransportTwitterGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTwitter resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_twitter_id_put**
> TransportTwitterGet api_transport_twitter_id_put(id, transport_twitter_put)

Replaces the TransportTwitter resource.

Replaces the TransportTwitter resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_twitter_get import TransportTwitterGet
from openapi_client.models.transport_twitter_put import TransportTwitterPut
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
    api_instance = openapi_client.TransportTwitterApi(api_client)
    id = 'id_example' # str | TransportTwitter identifier
    transport_twitter_put = openapi_client.TransportTwitterPut() # TransportTwitterPut | The updated TransportTwitter resource

    try:
        # Replaces the TransportTwitter resource.
        api_response = api_instance.api_transport_twitter_id_put(id, transport_twitter_put)
        print("The response of TransportTwitterApi->api_transport_twitter_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTwitterApi->api_transport_twitter_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTwitter identifier | 
 **transport_twitter_put** | [**TransportTwitterPut**](TransportTwitterPut.md)| The updated TransportTwitter resource | 

### Return type

[**TransportTwitterGet**](TransportTwitterGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTwitter resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_twitter_post**
> TransportTwitterGet api_transport_twitter_post(transport_twitter_post)

Creates a TransportTwitter resource.

Creates a TransportTwitter resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_twitter_get import TransportTwitterGet
from openapi_client.models.transport_twitter_post import TransportTwitterPost
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
    api_instance = openapi_client.TransportTwitterApi(api_client)
    transport_twitter_post = openapi_client.TransportTwitterPost() # TransportTwitterPost | The new TransportTwitter resource

    try:
        # Creates a TransportTwitter resource.
        api_response = api_instance.api_transport_twitter_post(transport_twitter_post)
        print("The response of TransportTwitterApi->api_transport_twitter_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTwitterApi->api_transport_twitter_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_twitter_post** | [**TransportTwitterPost**](TransportTwitterPost.md)| The new TransportTwitter resource | 

### Return type

[**TransportTwitterGet**](TransportTwitterGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportTwitter resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

