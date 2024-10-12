# openapi_client.TransportPagerDutyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_pager_duty_get_collection**](TransportPagerDutyApi.md#api_transport_pager_duty_get_collection) | **GET** /api/transport-pager-duty | Retrieves the collection of TransportPagerDuty resources.
[**api_transport_pager_duty_id_delete**](TransportPagerDutyApi.md#api_transport_pager_duty_id_delete) | **DELETE** /api/transport-pager-duty/{id} | Removes the TransportPagerDuty resource.
[**api_transport_pager_duty_id_get**](TransportPagerDutyApi.md#api_transport_pager_duty_id_get) | **GET** /api/transport-pager-duty/{id} | Retrieves a TransportPagerDuty resource.
[**api_transport_pager_duty_id_patch**](TransportPagerDutyApi.md#api_transport_pager_duty_id_patch) | **PATCH** /api/transport-pager-duty/{id} | Updates the TransportPagerDuty resource.
[**api_transport_pager_duty_id_put**](TransportPagerDutyApi.md#api_transport_pager_duty_id_put) | **PUT** /api/transport-pager-duty/{id} | Replaces the TransportPagerDuty resource.
[**api_transport_pager_duty_post**](TransportPagerDutyApi.md#api_transport_pager_duty_post) | **POST** /api/transport-pager-duty | Creates a TransportPagerDuty resource.


# **api_transport_pager_duty_get_collection**
> List[TransportPagerDutyGet] api_transport_pager_duty_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportPagerDuty resources.

Retrieves the collection of TransportPagerDuty resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pager_duty_get import TransportPagerDutyGet
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
    api_instance = openapi_client.TransportPagerDutyApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportPagerDuty resources.
        api_response = api_instance.api_transport_pager_duty_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportPagerDutyApi->api_transport_pager_duty_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPagerDutyApi->api_transport_pager_duty_get_collection: %s\n" % e)
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

[**List[TransportPagerDutyGet]**](TransportPagerDutyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPagerDuty collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pager_duty_id_delete**
> api_transport_pager_duty_id_delete(id)

Removes the TransportPagerDuty resource.

Removes the TransportPagerDuty resource.

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
    api_instance = openapi_client.TransportPagerDutyApi(api_client)
    id = 'id_example' # str | TransportPagerDuty identifier

    try:
        # Removes the TransportPagerDuty resource.
        api_instance.api_transport_pager_duty_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportPagerDutyApi->api_transport_pager_duty_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPagerDuty identifier | 

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
**204** | TransportPagerDuty resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pager_duty_id_get**
> TransportPagerDutyGet api_transport_pager_duty_id_get(id)

Retrieves a TransportPagerDuty resource.

Retrieves a TransportPagerDuty resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pager_duty_get import TransportPagerDutyGet
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
    api_instance = openapi_client.TransportPagerDutyApi(api_client)
    id = 'id_example' # str | TransportPagerDuty identifier

    try:
        # Retrieves a TransportPagerDuty resource.
        api_response = api_instance.api_transport_pager_duty_id_get(id)
        print("The response of TransportPagerDutyApi->api_transport_pager_duty_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPagerDutyApi->api_transport_pager_duty_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPagerDuty identifier | 

### Return type

[**TransportPagerDutyGet**](TransportPagerDutyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPagerDuty resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pager_duty_id_patch**
> TransportPagerDutyGet api_transport_pager_duty_id_patch(id, transport_pager_duty_patch)

Updates the TransportPagerDuty resource.

Updates the TransportPagerDuty resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pager_duty_get import TransportPagerDutyGet
from openapi_client.models.transport_pager_duty_patch import TransportPagerDutyPatch
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
    api_instance = openapi_client.TransportPagerDutyApi(api_client)
    id = 'id_example' # str | TransportPagerDuty identifier
    transport_pager_duty_patch = openapi_client.TransportPagerDutyPatch() # TransportPagerDutyPatch | The updated TransportPagerDuty resource

    try:
        # Updates the TransportPagerDuty resource.
        api_response = api_instance.api_transport_pager_duty_id_patch(id, transport_pager_duty_patch)
        print("The response of TransportPagerDutyApi->api_transport_pager_duty_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPagerDutyApi->api_transport_pager_duty_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPagerDuty identifier | 
 **transport_pager_duty_patch** | [**TransportPagerDutyPatch**](TransportPagerDutyPatch.md)| The updated TransportPagerDuty resource | 

### Return type

[**TransportPagerDutyGet**](TransportPagerDutyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPagerDuty resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pager_duty_id_put**
> TransportPagerDutyGet api_transport_pager_duty_id_put(id, transport_pager_duty_put)

Replaces the TransportPagerDuty resource.

Replaces the TransportPagerDuty resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pager_duty_get import TransportPagerDutyGet
from openapi_client.models.transport_pager_duty_put import TransportPagerDutyPut
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
    api_instance = openapi_client.TransportPagerDutyApi(api_client)
    id = 'id_example' # str | TransportPagerDuty identifier
    transport_pager_duty_put = openapi_client.TransportPagerDutyPut() # TransportPagerDutyPut | The updated TransportPagerDuty resource

    try:
        # Replaces the TransportPagerDuty resource.
        api_response = api_instance.api_transport_pager_duty_id_put(id, transport_pager_duty_put)
        print("The response of TransportPagerDutyApi->api_transport_pager_duty_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPagerDutyApi->api_transport_pager_duty_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportPagerDuty identifier | 
 **transport_pager_duty_put** | [**TransportPagerDutyPut**](TransportPagerDutyPut.md)| The updated TransportPagerDuty resource | 

### Return type

[**TransportPagerDutyGet**](TransportPagerDutyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportPagerDuty resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_pager_duty_post**
> TransportPagerDutyGet api_transport_pager_duty_post(transport_pager_duty_post)

Creates a TransportPagerDuty resource.

Creates a TransportPagerDuty resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_pager_duty_get import TransportPagerDutyGet
from openapi_client.models.transport_pager_duty_post import TransportPagerDutyPost
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
    api_instance = openapi_client.TransportPagerDutyApi(api_client)
    transport_pager_duty_post = openapi_client.TransportPagerDutyPost() # TransportPagerDutyPost | The new TransportPagerDuty resource

    try:
        # Creates a TransportPagerDuty resource.
        api_response = api_instance.api_transport_pager_duty_post(transport_pager_duty_post)
        print("The response of TransportPagerDutyApi->api_transport_pager_duty_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportPagerDutyApi->api_transport_pager_duty_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_pager_duty_post** | [**TransportPagerDutyPost**](TransportPagerDutyPost.md)| The new TransportPagerDuty resource | 

### Return type

[**TransportPagerDutyGet**](TransportPagerDutyGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportPagerDuty resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

