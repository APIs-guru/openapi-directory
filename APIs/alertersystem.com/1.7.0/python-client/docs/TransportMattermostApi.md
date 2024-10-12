# openapi_client.TransportMattermostApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_mattermost_get_collection**](TransportMattermostApi.md#api_transport_mattermost_get_collection) | **GET** /api/transport-mattermost | Retrieves the collection of TransportMattermost resources.
[**api_transport_mattermost_id_delete**](TransportMattermostApi.md#api_transport_mattermost_id_delete) | **DELETE** /api/transport-mattermost/{id} | Removes the TransportMattermost resource.
[**api_transport_mattermost_id_get**](TransportMattermostApi.md#api_transport_mattermost_id_get) | **GET** /api/transport-mattermost/{id} | Retrieves a TransportMattermost resource.
[**api_transport_mattermost_id_patch**](TransportMattermostApi.md#api_transport_mattermost_id_patch) | **PATCH** /api/transport-mattermost/{id} | Updates the TransportMattermost resource.
[**api_transport_mattermost_id_put**](TransportMattermostApi.md#api_transport_mattermost_id_put) | **PUT** /api/transport-mattermost/{id} | Replaces the TransportMattermost resource.
[**api_transport_mattermost_post**](TransportMattermostApi.md#api_transport_mattermost_post) | **POST** /api/transport-mattermost | Creates a TransportMattermost resource.


# **api_transport_mattermost_get_collection**
> List[TransportMattermostGet] api_transport_mattermost_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportMattermost resources.

Retrieves the collection of TransportMattermost resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mattermost_get import TransportMattermostGet
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
    api_instance = openapi_client.TransportMattermostApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportMattermost resources.
        api_response = api_instance.api_transport_mattermost_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportMattermostApi->api_transport_mattermost_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMattermostApi->api_transport_mattermost_get_collection: %s\n" % e)
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

[**List[TransportMattermostGet]**](TransportMattermostGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMattermost collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mattermost_id_delete**
> api_transport_mattermost_id_delete(id)

Removes the TransportMattermost resource.

Removes the TransportMattermost resource.

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
    api_instance = openapi_client.TransportMattermostApi(api_client)
    id = 'id_example' # str | TransportMattermost identifier

    try:
        # Removes the TransportMattermost resource.
        api_instance.api_transport_mattermost_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportMattermostApi->api_transport_mattermost_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMattermost identifier | 

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
**204** | TransportMattermost resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mattermost_id_get**
> TransportMattermostGet api_transport_mattermost_id_get(id)

Retrieves a TransportMattermost resource.

Retrieves a TransportMattermost resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mattermost_get import TransportMattermostGet
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
    api_instance = openapi_client.TransportMattermostApi(api_client)
    id = 'id_example' # str | TransportMattermost identifier

    try:
        # Retrieves a TransportMattermost resource.
        api_response = api_instance.api_transport_mattermost_id_get(id)
        print("The response of TransportMattermostApi->api_transport_mattermost_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMattermostApi->api_transport_mattermost_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMattermost identifier | 

### Return type

[**TransportMattermostGet**](TransportMattermostGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMattermost resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mattermost_id_patch**
> TransportMattermostGet api_transport_mattermost_id_patch(id, transport_mattermost_patch)

Updates the TransportMattermost resource.

Updates the TransportMattermost resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mattermost_get import TransportMattermostGet
from openapi_client.models.transport_mattermost_patch import TransportMattermostPatch
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
    api_instance = openapi_client.TransportMattermostApi(api_client)
    id = 'id_example' # str | TransportMattermost identifier
    transport_mattermost_patch = openapi_client.TransportMattermostPatch() # TransportMattermostPatch | The updated TransportMattermost resource

    try:
        # Updates the TransportMattermost resource.
        api_response = api_instance.api_transport_mattermost_id_patch(id, transport_mattermost_patch)
        print("The response of TransportMattermostApi->api_transport_mattermost_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMattermostApi->api_transport_mattermost_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMattermost identifier | 
 **transport_mattermost_patch** | [**TransportMattermostPatch**](TransportMattermostPatch.md)| The updated TransportMattermost resource | 

### Return type

[**TransportMattermostGet**](TransportMattermostGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMattermost resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mattermost_id_put**
> TransportMattermostGet api_transport_mattermost_id_put(id, transport_mattermost_put)

Replaces the TransportMattermost resource.

Replaces the TransportMattermost resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mattermost_get import TransportMattermostGet
from openapi_client.models.transport_mattermost_put import TransportMattermostPut
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
    api_instance = openapi_client.TransportMattermostApi(api_client)
    id = 'id_example' # str | TransportMattermost identifier
    transport_mattermost_put = openapi_client.TransportMattermostPut() # TransportMattermostPut | The updated TransportMattermost resource

    try:
        # Replaces the TransportMattermost resource.
        api_response = api_instance.api_transport_mattermost_id_put(id, transport_mattermost_put)
        print("The response of TransportMattermostApi->api_transport_mattermost_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMattermostApi->api_transport_mattermost_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMattermost identifier | 
 **transport_mattermost_put** | [**TransportMattermostPut**](TransportMattermostPut.md)| The updated TransportMattermost resource | 

### Return type

[**TransportMattermostGet**](TransportMattermostGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMattermost resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_mattermost_post**
> TransportMattermostGet api_transport_mattermost_post(transport_mattermost_post)

Creates a TransportMattermost resource.

Creates a TransportMattermost resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_mattermost_get import TransportMattermostGet
from openapi_client.models.transport_mattermost_post import TransportMattermostPost
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
    api_instance = openapi_client.TransportMattermostApi(api_client)
    transport_mattermost_post = openapi_client.TransportMattermostPost() # TransportMattermostPost | The new TransportMattermost resource

    try:
        # Creates a TransportMattermost resource.
        api_response = api_instance.api_transport_mattermost_post(transport_mattermost_post)
        print("The response of TransportMattermostApi->api_transport_mattermost_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMattermostApi->api_transport_mattermost_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_mattermost_post** | [**TransportMattermostPost**](TransportMattermostPost.md)| The new TransportMattermost resource | 

### Return type

[**TransportMattermostGet**](TransportMattermostGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportMattermost resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

