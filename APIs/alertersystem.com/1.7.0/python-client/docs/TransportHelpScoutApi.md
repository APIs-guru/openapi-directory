# openapi_client.TransportHelpScoutApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_help_scout_get_collection**](TransportHelpScoutApi.md#api_transport_help_scout_get_collection) | **GET** /api/transport-help-scout | Retrieves the collection of TransportHelpScout resources.
[**api_transport_help_scout_id_delete**](TransportHelpScoutApi.md#api_transport_help_scout_id_delete) | **DELETE** /api/transport-help-scout/{id} | Removes the TransportHelpScout resource.
[**api_transport_help_scout_id_get**](TransportHelpScoutApi.md#api_transport_help_scout_id_get) | **GET** /api/transport-help-scout/{id} | Retrieves a TransportHelpScout resource.
[**api_transport_help_scout_id_patch**](TransportHelpScoutApi.md#api_transport_help_scout_id_patch) | **PATCH** /api/transport-help-scout/{id} | Updates the TransportHelpScout resource.
[**api_transport_help_scout_id_put**](TransportHelpScoutApi.md#api_transport_help_scout_id_put) | **PUT** /api/transport-help-scout/{id} | Replaces the TransportHelpScout resource.
[**api_transport_help_scout_post**](TransportHelpScoutApi.md#api_transport_help_scout_post) | **POST** /api/transport-help-scout | Creates a TransportHelpScout resource.


# **api_transport_help_scout_get_collection**
> List[TransportHelpScoutGet] api_transport_help_scout_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportHelpScout resources.

Retrieves the collection of TransportHelpScout resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_help_scout_get import TransportHelpScoutGet
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
    api_instance = openapi_client.TransportHelpScoutApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportHelpScout resources.
        api_response = api_instance.api_transport_help_scout_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportHelpScoutApi->api_transport_help_scout_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportHelpScoutApi->api_transport_help_scout_get_collection: %s\n" % e)
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

[**List[TransportHelpScoutGet]**](TransportHelpScoutGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportHelpScout collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_help_scout_id_delete**
> api_transport_help_scout_id_delete(id)

Removes the TransportHelpScout resource.

Removes the TransportHelpScout resource.

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
    api_instance = openapi_client.TransportHelpScoutApi(api_client)
    id = 'id_example' # str | TransportHelpScout identifier

    try:
        # Removes the TransportHelpScout resource.
        api_instance.api_transport_help_scout_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportHelpScoutApi->api_transport_help_scout_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportHelpScout identifier | 

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
**204** | TransportHelpScout resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_help_scout_id_get**
> TransportHelpScoutGet api_transport_help_scout_id_get(id)

Retrieves a TransportHelpScout resource.

Retrieves a TransportHelpScout resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_help_scout_get import TransportHelpScoutGet
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
    api_instance = openapi_client.TransportHelpScoutApi(api_client)
    id = 'id_example' # str | TransportHelpScout identifier

    try:
        # Retrieves a TransportHelpScout resource.
        api_response = api_instance.api_transport_help_scout_id_get(id)
        print("The response of TransportHelpScoutApi->api_transport_help_scout_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportHelpScoutApi->api_transport_help_scout_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportHelpScout identifier | 

### Return type

[**TransportHelpScoutGet**](TransportHelpScoutGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportHelpScout resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_help_scout_id_patch**
> TransportHelpScoutGet api_transport_help_scout_id_patch(id, transport_help_scout_patch)

Updates the TransportHelpScout resource.

Updates the TransportHelpScout resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_help_scout_get import TransportHelpScoutGet
from openapi_client.models.transport_help_scout_patch import TransportHelpScoutPatch
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
    api_instance = openapi_client.TransportHelpScoutApi(api_client)
    id = 'id_example' # str | TransportHelpScout identifier
    transport_help_scout_patch = openapi_client.TransportHelpScoutPatch() # TransportHelpScoutPatch | The updated TransportHelpScout resource

    try:
        # Updates the TransportHelpScout resource.
        api_response = api_instance.api_transport_help_scout_id_patch(id, transport_help_scout_patch)
        print("The response of TransportHelpScoutApi->api_transport_help_scout_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportHelpScoutApi->api_transport_help_scout_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportHelpScout identifier | 
 **transport_help_scout_patch** | [**TransportHelpScoutPatch**](TransportHelpScoutPatch.md)| The updated TransportHelpScout resource | 

### Return type

[**TransportHelpScoutGet**](TransportHelpScoutGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportHelpScout resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_help_scout_id_put**
> TransportHelpScoutGet api_transport_help_scout_id_put(id, transport_help_scout_put)

Replaces the TransportHelpScout resource.

Replaces the TransportHelpScout resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_help_scout_get import TransportHelpScoutGet
from openapi_client.models.transport_help_scout_put import TransportHelpScoutPut
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
    api_instance = openapi_client.TransportHelpScoutApi(api_client)
    id = 'id_example' # str | TransportHelpScout identifier
    transport_help_scout_put = openapi_client.TransportHelpScoutPut() # TransportHelpScoutPut | The updated TransportHelpScout resource

    try:
        # Replaces the TransportHelpScout resource.
        api_response = api_instance.api_transport_help_scout_id_put(id, transport_help_scout_put)
        print("The response of TransportHelpScoutApi->api_transport_help_scout_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportHelpScoutApi->api_transport_help_scout_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportHelpScout identifier | 
 **transport_help_scout_put** | [**TransportHelpScoutPut**](TransportHelpScoutPut.md)| The updated TransportHelpScout resource | 

### Return type

[**TransportHelpScoutGet**](TransportHelpScoutGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportHelpScout resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_help_scout_post**
> TransportHelpScoutGet api_transport_help_scout_post(transport_help_scout_post)

Creates a TransportHelpScout resource.

Creates a TransportHelpScout resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_help_scout_get import TransportHelpScoutGet
from openapi_client.models.transport_help_scout_post import TransportHelpScoutPost
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
    api_instance = openapi_client.TransportHelpScoutApi(api_client)
    transport_help_scout_post = openapi_client.TransportHelpScoutPost() # TransportHelpScoutPost | The new TransportHelpScout resource

    try:
        # Creates a TransportHelpScout resource.
        api_response = api_instance.api_transport_help_scout_post(transport_help_scout_post)
        print("The response of TransportHelpScoutApi->api_transport_help_scout_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportHelpScoutApi->api_transport_help_scout_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_help_scout_post** | [**TransportHelpScoutPost**](TransportHelpScoutPost.md)| The new TransportHelpScout resource | 

### Return type

[**TransportHelpScoutGet**](TransportHelpScoutGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportHelpScout resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

