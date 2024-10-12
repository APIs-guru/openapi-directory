# openapi_client.TransportAlertaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_alerta_get_collection**](TransportAlertaApi.md#api_transport_alerta_get_collection) | **GET** /api/transport-alerta | Retrieves the collection of TransportAlerta resources.
[**api_transport_alerta_id_delete**](TransportAlertaApi.md#api_transport_alerta_id_delete) | **DELETE** /api/transport-alerta/{id} | Removes the TransportAlerta resource.
[**api_transport_alerta_id_get**](TransportAlertaApi.md#api_transport_alerta_id_get) | **GET** /api/transport-alerta/{id} | Retrieves a TransportAlerta resource.
[**api_transport_alerta_id_patch**](TransportAlertaApi.md#api_transport_alerta_id_patch) | **PATCH** /api/transport-alerta/{id} | Updates the TransportAlerta resource.
[**api_transport_alerta_id_put**](TransportAlertaApi.md#api_transport_alerta_id_put) | **PUT** /api/transport-alerta/{id} | Replaces the TransportAlerta resource.
[**api_transport_alerta_post**](TransportAlertaApi.md#api_transport_alerta_post) | **POST** /api/transport-alerta | Creates a TransportAlerta resource.


# **api_transport_alerta_get_collection**
> List[TransportAlertaGet] api_transport_alerta_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportAlerta resources.

Retrieves the collection of TransportAlerta resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_alerta_get import TransportAlertaGet
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
    api_instance = openapi_client.TransportAlertaApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportAlerta resources.
        api_response = api_instance.api_transport_alerta_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportAlertaApi->api_transport_alerta_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAlertaApi->api_transport_alerta_get_collection: %s\n" % e)
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

[**List[TransportAlertaGet]**](TransportAlertaGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAlerta collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_alerta_id_delete**
> api_transport_alerta_id_delete(id)

Removes the TransportAlerta resource.

Removes the TransportAlerta resource.

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
    api_instance = openapi_client.TransportAlertaApi(api_client)
    id = 'id_example' # str | TransportAlerta identifier

    try:
        # Removes the TransportAlerta resource.
        api_instance.api_transport_alerta_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportAlertaApi->api_transport_alerta_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAlerta identifier | 

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
**204** | TransportAlerta resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_alerta_id_get**
> TransportAlertaGet api_transport_alerta_id_get(id)

Retrieves a TransportAlerta resource.

Retrieves a TransportAlerta resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_alerta_get import TransportAlertaGet
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
    api_instance = openapi_client.TransportAlertaApi(api_client)
    id = 'id_example' # str | TransportAlerta identifier

    try:
        # Retrieves a TransportAlerta resource.
        api_response = api_instance.api_transport_alerta_id_get(id)
        print("The response of TransportAlertaApi->api_transport_alerta_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAlertaApi->api_transport_alerta_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAlerta identifier | 

### Return type

[**TransportAlertaGet**](TransportAlertaGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAlerta resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_alerta_id_patch**
> TransportAlertaGet api_transport_alerta_id_patch(id, transport_alerta_patch)

Updates the TransportAlerta resource.

Updates the TransportAlerta resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_alerta_get import TransportAlertaGet
from openapi_client.models.transport_alerta_patch import TransportAlertaPatch
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
    api_instance = openapi_client.TransportAlertaApi(api_client)
    id = 'id_example' # str | TransportAlerta identifier
    transport_alerta_patch = openapi_client.TransportAlertaPatch() # TransportAlertaPatch | The updated TransportAlerta resource

    try:
        # Updates the TransportAlerta resource.
        api_response = api_instance.api_transport_alerta_id_patch(id, transport_alerta_patch)
        print("The response of TransportAlertaApi->api_transport_alerta_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAlertaApi->api_transport_alerta_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAlerta identifier | 
 **transport_alerta_patch** | [**TransportAlertaPatch**](TransportAlertaPatch.md)| The updated TransportAlerta resource | 

### Return type

[**TransportAlertaGet**](TransportAlertaGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAlerta resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_alerta_id_put**
> TransportAlertaGet api_transport_alerta_id_put(id, transport_alerta_put)

Replaces the TransportAlerta resource.

Replaces the TransportAlerta resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_alerta_get import TransportAlertaGet
from openapi_client.models.transport_alerta_put import TransportAlertaPut
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
    api_instance = openapi_client.TransportAlertaApi(api_client)
    id = 'id_example' # str | TransportAlerta identifier
    transport_alerta_put = openapi_client.TransportAlertaPut() # TransportAlertaPut | The updated TransportAlerta resource

    try:
        # Replaces the TransportAlerta resource.
        api_response = api_instance.api_transport_alerta_id_put(id, transport_alerta_put)
        print("The response of TransportAlertaApi->api_transport_alerta_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAlertaApi->api_transport_alerta_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAlerta identifier | 
 **transport_alerta_put** | [**TransportAlertaPut**](TransportAlertaPut.md)| The updated TransportAlerta resource | 

### Return type

[**TransportAlertaGet**](TransportAlertaGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAlerta resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_alerta_post**
> TransportAlertaGet api_transport_alerta_post(transport_alerta_post)

Creates a TransportAlerta resource.

Creates a TransportAlerta resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_alerta_get import TransportAlertaGet
from openapi_client.models.transport_alerta_post import TransportAlertaPost
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
    api_instance = openapi_client.TransportAlertaApi(api_client)
    transport_alerta_post = openapi_client.TransportAlertaPost() # TransportAlertaPost | The new TransportAlerta resource

    try:
        # Creates a TransportAlerta resource.
        api_response = api_instance.api_transport_alerta_post(transport_alerta_post)
        print("The response of TransportAlertaApi->api_transport_alerta_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAlertaApi->api_transport_alerta_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_alerta_post** | [**TransportAlertaPost**](TransportAlertaPost.md)| The new TransportAlerta resource | 

### Return type

[**TransportAlertaGet**](TransportAlertaGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportAlerta resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

