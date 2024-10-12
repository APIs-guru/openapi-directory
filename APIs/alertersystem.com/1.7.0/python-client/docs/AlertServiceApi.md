# openapi_client.AlertServiceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_alert_service_get_collection**](AlertServiceApi.md#api_alert_service_get_collection) | **GET** /api/alert-service | Retrieves the collection of AlertService resources.
[**api_alert_service_id_delete**](AlertServiceApi.md#api_alert_service_id_delete) | **DELETE** /api/alert-service/{id} | Removes the AlertService resource.
[**api_alert_service_id_get**](AlertServiceApi.md#api_alert_service_id_get) | **GET** /api/alert-service/{id} | Retrieves a AlertService resource.
[**api_alert_service_id_patch**](AlertServiceApi.md#api_alert_service_id_patch) | **PATCH** /api/alert-service/{id} | Updates the AlertService resource.
[**api_alert_service_id_put**](AlertServiceApi.md#api_alert_service_id_put) | **PUT** /api/alert-service/{id} | Replaces the AlertService resource.
[**api_alert_service_post**](AlertServiceApi.md#api_alert_service_post) | **POST** /api/alert-service | Creates a AlertService resource.


# **api_alert_service_get_collection**
> List[AlertServiceGet] api_alert_service_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of AlertService resources.

Retrieves the collection of AlertService resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.alert_service_get import AlertServiceGet
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
    api_instance = openapi_client.AlertServiceApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of AlertService resources.
        api_response = api_instance.api_alert_service_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of AlertServiceApi->api_alert_service_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertServiceApi->api_alert_service_get_collection: %s\n" % e)
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

[**List[AlertServiceGet]**](AlertServiceGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AlertService collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_alert_service_id_delete**
> api_alert_service_id_delete(id)

Removes the AlertService resource.

Removes the AlertService resource.

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
    api_instance = openapi_client.AlertServiceApi(api_client)
    id = 'id_example' # str | AlertService identifier

    try:
        # Removes the AlertService resource.
        api_instance.api_alert_service_id_delete(id)
    except Exception as e:
        print("Exception when calling AlertServiceApi->api_alert_service_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| AlertService identifier | 

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
**204** | AlertService resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_alert_service_id_get**
> AlertServiceGet api_alert_service_id_get(id)

Retrieves a AlertService resource.

Retrieves a AlertService resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.alert_service_get import AlertServiceGet
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
    api_instance = openapi_client.AlertServiceApi(api_client)
    id = 'id_example' # str | AlertService identifier

    try:
        # Retrieves a AlertService resource.
        api_response = api_instance.api_alert_service_id_get(id)
        print("The response of AlertServiceApi->api_alert_service_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertServiceApi->api_alert_service_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| AlertService identifier | 

### Return type

[**AlertServiceGet**](AlertServiceGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AlertService resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_alert_service_id_patch**
> AlertServiceGet api_alert_service_id_patch(id, alert_service_patch)

Updates the AlertService resource.

Updates the AlertService resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.alert_service_get import AlertServiceGet
from openapi_client.models.alert_service_patch import AlertServicePatch
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
    api_instance = openapi_client.AlertServiceApi(api_client)
    id = 'id_example' # str | AlertService identifier
    alert_service_patch = openapi_client.AlertServicePatch() # AlertServicePatch | The updated AlertService resource

    try:
        # Updates the AlertService resource.
        api_response = api_instance.api_alert_service_id_patch(id, alert_service_patch)
        print("The response of AlertServiceApi->api_alert_service_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertServiceApi->api_alert_service_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| AlertService identifier | 
 **alert_service_patch** | [**AlertServicePatch**](AlertServicePatch.md)| The updated AlertService resource | 

### Return type

[**AlertServiceGet**](AlertServiceGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AlertService resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_alert_service_id_put**
> AlertServiceGet api_alert_service_id_put(id, alert_service_put)

Replaces the AlertService resource.

Replaces the AlertService resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.alert_service_get import AlertServiceGet
from openapi_client.models.alert_service_put import AlertServicePut
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
    api_instance = openapi_client.AlertServiceApi(api_client)
    id = 'id_example' # str | AlertService identifier
    alert_service_put = openapi_client.AlertServicePut() # AlertServicePut | The updated AlertService resource

    try:
        # Replaces the AlertService resource.
        api_response = api_instance.api_alert_service_id_put(id, alert_service_put)
        print("The response of AlertServiceApi->api_alert_service_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertServiceApi->api_alert_service_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| AlertService identifier | 
 **alert_service_put** | [**AlertServicePut**](AlertServicePut.md)| The updated AlertService resource | 

### Return type

[**AlertServiceGet**](AlertServiceGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AlertService resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_alert_service_post**
> AlertServiceGet api_alert_service_post(alert_service_post)

Creates a AlertService resource.

Creates a AlertService resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.alert_service_get import AlertServiceGet
from openapi_client.models.alert_service_post import AlertServicePost
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
    api_instance = openapi_client.AlertServiceApi(api_client)
    alert_service_post = openapi_client.AlertServicePost() # AlertServicePost | The new AlertService resource

    try:
        # Creates a AlertService resource.
        api_response = api_instance.api_alert_service_post(alert_service_post)
        print("The response of AlertServiceApi->api_alert_service_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertServiceApi->api_alert_service_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_service_post** | [**AlertServicePost**](AlertServicePost.md)| The new AlertService resource | 

### Return type

[**AlertServiceGet**](AlertServiceGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | AlertService resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

