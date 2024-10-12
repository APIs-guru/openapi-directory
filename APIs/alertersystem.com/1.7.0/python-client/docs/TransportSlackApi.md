# openapi_client.TransportSlackApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_slack_get_collection**](TransportSlackApi.md#api_transport_slack_get_collection) | **GET** /api/transport-slack | Retrieves the collection of TransportSlack resources.
[**api_transport_slack_id_delete**](TransportSlackApi.md#api_transport_slack_id_delete) | **DELETE** /api/transport-slack/{id} | Removes the TransportSlack resource.
[**api_transport_slack_id_get**](TransportSlackApi.md#api_transport_slack_id_get) | **GET** /api/transport-slack/{id} | Retrieves a TransportSlack resource.
[**api_transport_slack_id_patch**](TransportSlackApi.md#api_transport_slack_id_patch) | **PATCH** /api/transport-slack/{id} | Updates the TransportSlack resource.
[**api_transport_slack_id_put**](TransportSlackApi.md#api_transport_slack_id_put) | **PUT** /api/transport-slack/{id} | Replaces the TransportSlack resource.
[**api_transport_slack_post**](TransportSlackApi.md#api_transport_slack_post) | **POST** /api/transport-slack | Creates a TransportSlack resource.


# **api_transport_slack_get_collection**
> List[TransportSlackGet] api_transport_slack_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSlack resources.

Retrieves the collection of TransportSlack resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_slack_get import TransportSlackGet
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
    api_instance = openapi_client.TransportSlackApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSlack resources.
        api_response = api_instance.api_transport_slack_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSlackApi->api_transport_slack_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSlackApi->api_transport_slack_get_collection: %s\n" % e)
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

[**List[TransportSlackGet]**](TransportSlackGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSlack collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_slack_id_delete**
> api_transport_slack_id_delete(id)

Removes the TransportSlack resource.

Removes the TransportSlack resource.

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
    api_instance = openapi_client.TransportSlackApi(api_client)
    id = 'id_example' # str | TransportSlack identifier

    try:
        # Removes the TransportSlack resource.
        api_instance.api_transport_slack_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSlackApi->api_transport_slack_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSlack identifier | 

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
**204** | TransportSlack resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_slack_id_get**
> TransportSlackGet api_transport_slack_id_get(id)

Retrieves a TransportSlack resource.

Retrieves a TransportSlack resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_slack_get import TransportSlackGet
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
    api_instance = openapi_client.TransportSlackApi(api_client)
    id = 'id_example' # str | TransportSlack identifier

    try:
        # Retrieves a TransportSlack resource.
        api_response = api_instance.api_transport_slack_id_get(id)
        print("The response of TransportSlackApi->api_transport_slack_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSlackApi->api_transport_slack_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSlack identifier | 

### Return type

[**TransportSlackGet**](TransportSlackGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSlack resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_slack_id_patch**
> TransportSlackGet api_transport_slack_id_patch(id, transport_slack_patch)

Updates the TransportSlack resource.

Updates the TransportSlack resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_slack_get import TransportSlackGet
from openapi_client.models.transport_slack_patch import TransportSlackPatch
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
    api_instance = openapi_client.TransportSlackApi(api_client)
    id = 'id_example' # str | TransportSlack identifier
    transport_slack_patch = openapi_client.TransportSlackPatch() # TransportSlackPatch | The updated TransportSlack resource

    try:
        # Updates the TransportSlack resource.
        api_response = api_instance.api_transport_slack_id_patch(id, transport_slack_patch)
        print("The response of TransportSlackApi->api_transport_slack_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSlackApi->api_transport_slack_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSlack identifier | 
 **transport_slack_patch** | [**TransportSlackPatch**](TransportSlackPatch.md)| The updated TransportSlack resource | 

### Return type

[**TransportSlackGet**](TransportSlackGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSlack resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_slack_id_put**
> TransportSlackGet api_transport_slack_id_put(id, transport_slack_put)

Replaces the TransportSlack resource.

Replaces the TransportSlack resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_slack_get import TransportSlackGet
from openapi_client.models.transport_slack_put import TransportSlackPut
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
    api_instance = openapi_client.TransportSlackApi(api_client)
    id = 'id_example' # str | TransportSlack identifier
    transport_slack_put = openapi_client.TransportSlackPut() # TransportSlackPut | The updated TransportSlack resource

    try:
        # Replaces the TransportSlack resource.
        api_response = api_instance.api_transport_slack_id_put(id, transport_slack_put)
        print("The response of TransportSlackApi->api_transport_slack_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSlackApi->api_transport_slack_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSlack identifier | 
 **transport_slack_put** | [**TransportSlackPut**](TransportSlackPut.md)| The updated TransportSlack resource | 

### Return type

[**TransportSlackGet**](TransportSlackGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSlack resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_slack_post**
> TransportSlackGet api_transport_slack_post(transport_slack_post)

Creates a TransportSlack resource.

Creates a TransportSlack resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_slack_get import TransportSlackGet
from openapi_client.models.transport_slack_post import TransportSlackPost
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
    api_instance = openapi_client.TransportSlackApi(api_client)
    transport_slack_post = openapi_client.TransportSlackPost() # TransportSlackPost | The new TransportSlack resource

    try:
        # Creates a TransportSlack resource.
        api_response = api_instance.api_transport_slack_post(transport_slack_post)
        print("The response of TransportSlackApi->api_transport_slack_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSlackApi->api_transport_slack_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_slack_post** | [**TransportSlackPost**](TransportSlackPost.md)| The new TransportSlack resource | 

### Return type

[**TransportSlackGet**](TransportSlackGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSlack resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

