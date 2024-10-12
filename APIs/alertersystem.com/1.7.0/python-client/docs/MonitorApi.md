# openapi_client.MonitorApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_monitor_get_collection**](MonitorApi.md#api_monitor_get_collection) | **GET** /api/monitor | Retrieves the collection of Monitor resources.
[**api_monitor_id_delete**](MonitorApi.md#api_monitor_id_delete) | **DELETE** /api/monitor/{id} | Removes the Monitor resource.
[**api_monitor_id_get**](MonitorApi.md#api_monitor_id_get) | **GET** /api/monitor/{id} | Retrieves a Monitor resource.
[**api_monitor_id_patch**](MonitorApi.md#api_monitor_id_patch) | **PATCH** /api/monitor/{id} | Updates the Monitor resource.
[**api_monitor_id_put**](MonitorApi.md#api_monitor_id_put) | **PUT** /api/monitor/{id} | Replaces the Monitor resource.
[**api_monitor_post**](MonitorApi.md#api_monitor_post) | **POST** /api/monitor | Creates a Monitor resource.


# **api_monitor_get_collection**
> List[MonitorGet] api_monitor_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of Monitor resources.

Retrieves the collection of Monitor resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.monitor_get import MonitorGet
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
    api_instance = openapi_client.MonitorApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of Monitor resources.
        api_response = api_instance.api_monitor_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of MonitorApi->api_monitor_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->api_monitor_get_collection: %s\n" % e)
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

[**List[MonitorGet]**](MonitorGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Monitor collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_monitor_id_delete**
> api_monitor_id_delete(id)

Removes the Monitor resource.

Removes the Monitor resource.

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
    api_instance = openapi_client.MonitorApi(api_client)
    id = 'id_example' # str | Monitor identifier

    try:
        # Removes the Monitor resource.
        api_instance.api_monitor_id_delete(id)
    except Exception as e:
        print("Exception when calling MonitorApi->api_monitor_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Monitor identifier | 

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
**204** | Monitor resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_monitor_id_get**
> MonitorGet api_monitor_id_get(id)

Retrieves a Monitor resource.

Retrieves a Monitor resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.monitor_get import MonitorGet
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
    api_instance = openapi_client.MonitorApi(api_client)
    id = 'id_example' # str | Monitor identifier

    try:
        # Retrieves a Monitor resource.
        api_response = api_instance.api_monitor_id_get(id)
        print("The response of MonitorApi->api_monitor_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->api_monitor_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Monitor identifier | 

### Return type

[**MonitorGet**](MonitorGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Monitor resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_monitor_id_patch**
> MonitorGet api_monitor_id_patch(id, monitor_patch)

Updates the Monitor resource.

Updates the Monitor resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.monitor_get import MonitorGet
from openapi_client.models.monitor_patch import MonitorPatch
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
    api_instance = openapi_client.MonitorApi(api_client)
    id = 'id_example' # str | Monitor identifier
    monitor_patch = openapi_client.MonitorPatch() # MonitorPatch | The updated Monitor resource

    try:
        # Updates the Monitor resource.
        api_response = api_instance.api_monitor_id_patch(id, monitor_patch)
        print("The response of MonitorApi->api_monitor_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->api_monitor_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Monitor identifier | 
 **monitor_patch** | [**MonitorPatch**](MonitorPatch.md)| The updated Monitor resource | 

### Return type

[**MonitorGet**](MonitorGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Monitor resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_monitor_id_put**
> MonitorGet api_monitor_id_put(id, monitor_put)

Replaces the Monitor resource.

Replaces the Monitor resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.monitor_get import MonitorGet
from openapi_client.models.monitor_put import MonitorPut
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
    api_instance = openapi_client.MonitorApi(api_client)
    id = 'id_example' # str | Monitor identifier
    monitor_put = openapi_client.MonitorPut() # MonitorPut | The updated Monitor resource

    try:
        # Replaces the Monitor resource.
        api_response = api_instance.api_monitor_id_put(id, monitor_put)
        print("The response of MonitorApi->api_monitor_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->api_monitor_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Monitor identifier | 
 **monitor_put** | [**MonitorPut**](MonitorPut.md)| The updated Monitor resource | 

### Return type

[**MonitorGet**](MonitorGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Monitor resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_monitor_post**
> MonitorGet api_monitor_post(monitor_post)

Creates a Monitor resource.

Creates a Monitor resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.monitor_get import MonitorGet
from openapi_client.models.monitor_post import MonitorPost
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
    api_instance = openapi_client.MonitorApi(api_client)
    monitor_post = openapi_client.MonitorPost() # MonitorPost | The new Monitor resource

    try:
        # Creates a Monitor resource.
        api_response = api_instance.api_monitor_post(monitor_post)
        print("The response of MonitorApi->api_monitor_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->api_monitor_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitor_post** | [**MonitorPost**](MonitorPost.md)| The new Monitor resource | 

### Return type

[**MonitorGet**](MonitorGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Monitor resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

