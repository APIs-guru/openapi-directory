# openapi_client.TransportOvhCloudApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_ovh_cloud_get_collection**](TransportOvhCloudApi.md#api_transport_ovh_cloud_get_collection) | **GET** /api/transport-ovh-cloud | Retrieves the collection of TransportOvhCloud resources.
[**api_transport_ovh_cloud_id_delete**](TransportOvhCloudApi.md#api_transport_ovh_cloud_id_delete) | **DELETE** /api/transport-ovh-cloud/{id} | Removes the TransportOvhCloud resource.
[**api_transport_ovh_cloud_id_get**](TransportOvhCloudApi.md#api_transport_ovh_cloud_id_get) | **GET** /api/transport-ovh-cloud/{id} | Retrieves a TransportOvhCloud resource.
[**api_transport_ovh_cloud_id_patch**](TransportOvhCloudApi.md#api_transport_ovh_cloud_id_patch) | **PATCH** /api/transport-ovh-cloud/{id} | Updates the TransportOvhCloud resource.
[**api_transport_ovh_cloud_id_put**](TransportOvhCloudApi.md#api_transport_ovh_cloud_id_put) | **PUT** /api/transport-ovh-cloud/{id} | Replaces the TransportOvhCloud resource.
[**api_transport_ovh_cloud_post**](TransportOvhCloudApi.md#api_transport_ovh_cloud_post) | **POST** /api/transport-ovh-cloud | Creates a TransportOvhCloud resource.


# **api_transport_ovh_cloud_get_collection**
> List[TransportOvhCloudGet] api_transport_ovh_cloud_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportOvhCloud resources.

Retrieves the collection of TransportOvhCloud resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_ovh_cloud_get import TransportOvhCloudGet
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
    api_instance = openapi_client.TransportOvhCloudApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportOvhCloud resources.
        api_response = api_instance.api_transport_ovh_cloud_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportOvhCloudApi->api_transport_ovh_cloud_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOvhCloudApi->api_transport_ovh_cloud_get_collection: %s\n" % e)
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

[**List[TransportOvhCloudGet]**](TransportOvhCloudGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOvhCloud collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_ovh_cloud_id_delete**
> api_transport_ovh_cloud_id_delete(id)

Removes the TransportOvhCloud resource.

Removes the TransportOvhCloud resource.

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
    api_instance = openapi_client.TransportOvhCloudApi(api_client)
    id = 'id_example' # str | TransportOvhCloud identifier

    try:
        # Removes the TransportOvhCloud resource.
        api_instance.api_transport_ovh_cloud_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportOvhCloudApi->api_transport_ovh_cloud_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOvhCloud identifier | 

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
**204** | TransportOvhCloud resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_ovh_cloud_id_get**
> TransportOvhCloudGet api_transport_ovh_cloud_id_get(id)

Retrieves a TransportOvhCloud resource.

Retrieves a TransportOvhCloud resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_ovh_cloud_get import TransportOvhCloudGet
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
    api_instance = openapi_client.TransportOvhCloudApi(api_client)
    id = 'id_example' # str | TransportOvhCloud identifier

    try:
        # Retrieves a TransportOvhCloud resource.
        api_response = api_instance.api_transport_ovh_cloud_id_get(id)
        print("The response of TransportOvhCloudApi->api_transport_ovh_cloud_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOvhCloudApi->api_transport_ovh_cloud_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOvhCloud identifier | 

### Return type

[**TransportOvhCloudGet**](TransportOvhCloudGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOvhCloud resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_ovh_cloud_id_patch**
> TransportOvhCloudGet api_transport_ovh_cloud_id_patch(id, transport_ovh_cloud_patch)

Updates the TransportOvhCloud resource.

Updates the TransportOvhCloud resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_ovh_cloud_get import TransportOvhCloudGet
from openapi_client.models.transport_ovh_cloud_patch import TransportOvhCloudPatch
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
    api_instance = openapi_client.TransportOvhCloudApi(api_client)
    id = 'id_example' # str | TransportOvhCloud identifier
    transport_ovh_cloud_patch = openapi_client.TransportOvhCloudPatch() # TransportOvhCloudPatch | The updated TransportOvhCloud resource

    try:
        # Updates the TransportOvhCloud resource.
        api_response = api_instance.api_transport_ovh_cloud_id_patch(id, transport_ovh_cloud_patch)
        print("The response of TransportOvhCloudApi->api_transport_ovh_cloud_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOvhCloudApi->api_transport_ovh_cloud_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOvhCloud identifier | 
 **transport_ovh_cloud_patch** | [**TransportOvhCloudPatch**](TransportOvhCloudPatch.md)| The updated TransportOvhCloud resource | 

### Return type

[**TransportOvhCloudGet**](TransportOvhCloudGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOvhCloud resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_ovh_cloud_id_put**
> TransportOvhCloudGet api_transport_ovh_cloud_id_put(id, transport_ovh_cloud_put)

Replaces the TransportOvhCloud resource.

Replaces the TransportOvhCloud resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_ovh_cloud_get import TransportOvhCloudGet
from openapi_client.models.transport_ovh_cloud_put import TransportOvhCloudPut
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
    api_instance = openapi_client.TransportOvhCloudApi(api_client)
    id = 'id_example' # str | TransportOvhCloud identifier
    transport_ovh_cloud_put = openapi_client.TransportOvhCloudPut() # TransportOvhCloudPut | The updated TransportOvhCloud resource

    try:
        # Replaces the TransportOvhCloud resource.
        api_response = api_instance.api_transport_ovh_cloud_id_put(id, transport_ovh_cloud_put)
        print("The response of TransportOvhCloudApi->api_transport_ovh_cloud_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOvhCloudApi->api_transport_ovh_cloud_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportOvhCloud identifier | 
 **transport_ovh_cloud_put** | [**TransportOvhCloudPut**](TransportOvhCloudPut.md)| The updated TransportOvhCloud resource | 

### Return type

[**TransportOvhCloudGet**](TransportOvhCloudGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportOvhCloud resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_ovh_cloud_post**
> TransportOvhCloudGet api_transport_ovh_cloud_post(transport_ovh_cloud_post)

Creates a TransportOvhCloud resource.

Creates a TransportOvhCloud resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_ovh_cloud_get import TransportOvhCloudGet
from openapi_client.models.transport_ovh_cloud_post import TransportOvhCloudPost
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
    api_instance = openapi_client.TransportOvhCloudApi(api_client)
    transport_ovh_cloud_post = openapi_client.TransportOvhCloudPost() # TransportOvhCloudPost | The new TransportOvhCloud resource

    try:
        # Creates a TransportOvhCloud resource.
        api_response = api_instance.api_transport_ovh_cloud_post(transport_ovh_cloud_post)
        print("The response of TransportOvhCloudApi->api_transport_ovh_cloud_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportOvhCloudApi->api_transport_ovh_cloud_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_ovh_cloud_post** | [**TransportOvhCloudPost**](TransportOvhCloudPost.md)| The new TransportOvhCloud resource | 

### Return type

[**TransportOvhCloudGet**](TransportOvhCloudGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportOvhCloud resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

