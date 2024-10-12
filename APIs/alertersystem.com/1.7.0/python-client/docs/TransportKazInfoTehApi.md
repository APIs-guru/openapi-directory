# openapi_client.TransportKazInfoTehApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_kaz_info_teh_get_collection**](TransportKazInfoTehApi.md#api_transport_kaz_info_teh_get_collection) | **GET** /api/transport-kaz-info-teh | Retrieves the collection of TransportKazInfoTeh resources.
[**api_transport_kaz_info_teh_id_delete**](TransportKazInfoTehApi.md#api_transport_kaz_info_teh_id_delete) | **DELETE** /api/transport-kaz-info-teh/{id} | Removes the TransportKazInfoTeh resource.
[**api_transport_kaz_info_teh_id_get**](TransportKazInfoTehApi.md#api_transport_kaz_info_teh_id_get) | **GET** /api/transport-kaz-info-teh/{id} | Retrieves a TransportKazInfoTeh resource.
[**api_transport_kaz_info_teh_id_patch**](TransportKazInfoTehApi.md#api_transport_kaz_info_teh_id_patch) | **PATCH** /api/transport-kaz-info-teh/{id} | Updates the TransportKazInfoTeh resource.
[**api_transport_kaz_info_teh_id_put**](TransportKazInfoTehApi.md#api_transport_kaz_info_teh_id_put) | **PUT** /api/transport-kaz-info-teh/{id} | Replaces the TransportKazInfoTeh resource.
[**api_transport_kaz_info_teh_post**](TransportKazInfoTehApi.md#api_transport_kaz_info_teh_post) | **POST** /api/transport-kaz-info-teh | Creates a TransportKazInfoTeh resource.


# **api_transport_kaz_info_teh_get_collection**
> List[TransportKazInfoTehGet] api_transport_kaz_info_teh_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportKazInfoTeh resources.

Retrieves the collection of TransportKazInfoTeh resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_kaz_info_teh_get import TransportKazInfoTehGet
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
    api_instance = openapi_client.TransportKazInfoTehApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportKazInfoTeh resources.
        api_response = api_instance.api_transport_kaz_info_teh_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportKazInfoTehApi->api_transport_kaz_info_teh_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportKazInfoTehApi->api_transport_kaz_info_teh_get_collection: %s\n" % e)
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

[**List[TransportKazInfoTehGet]**](TransportKazInfoTehGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportKazInfoTeh collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_kaz_info_teh_id_delete**
> api_transport_kaz_info_teh_id_delete(id)

Removes the TransportKazInfoTeh resource.

Removes the TransportKazInfoTeh resource.

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
    api_instance = openapi_client.TransportKazInfoTehApi(api_client)
    id = 'id_example' # str | TransportKazInfoTeh identifier

    try:
        # Removes the TransportKazInfoTeh resource.
        api_instance.api_transport_kaz_info_teh_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportKazInfoTehApi->api_transport_kaz_info_teh_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportKazInfoTeh identifier | 

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
**204** | TransportKazInfoTeh resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_kaz_info_teh_id_get**
> TransportKazInfoTehGet api_transport_kaz_info_teh_id_get(id)

Retrieves a TransportKazInfoTeh resource.

Retrieves a TransportKazInfoTeh resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_kaz_info_teh_get import TransportKazInfoTehGet
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
    api_instance = openapi_client.TransportKazInfoTehApi(api_client)
    id = 'id_example' # str | TransportKazInfoTeh identifier

    try:
        # Retrieves a TransportKazInfoTeh resource.
        api_response = api_instance.api_transport_kaz_info_teh_id_get(id)
        print("The response of TransportKazInfoTehApi->api_transport_kaz_info_teh_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportKazInfoTehApi->api_transport_kaz_info_teh_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportKazInfoTeh identifier | 

### Return type

[**TransportKazInfoTehGet**](TransportKazInfoTehGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportKazInfoTeh resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_kaz_info_teh_id_patch**
> TransportKazInfoTehGet api_transport_kaz_info_teh_id_patch(id, transport_kaz_info_teh_patch)

Updates the TransportKazInfoTeh resource.

Updates the TransportKazInfoTeh resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_kaz_info_teh_get import TransportKazInfoTehGet
from openapi_client.models.transport_kaz_info_teh_patch import TransportKazInfoTehPatch
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
    api_instance = openapi_client.TransportKazInfoTehApi(api_client)
    id = 'id_example' # str | TransportKazInfoTeh identifier
    transport_kaz_info_teh_patch = openapi_client.TransportKazInfoTehPatch() # TransportKazInfoTehPatch | The updated TransportKazInfoTeh resource

    try:
        # Updates the TransportKazInfoTeh resource.
        api_response = api_instance.api_transport_kaz_info_teh_id_patch(id, transport_kaz_info_teh_patch)
        print("The response of TransportKazInfoTehApi->api_transport_kaz_info_teh_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportKazInfoTehApi->api_transport_kaz_info_teh_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportKazInfoTeh identifier | 
 **transport_kaz_info_teh_patch** | [**TransportKazInfoTehPatch**](TransportKazInfoTehPatch.md)| The updated TransportKazInfoTeh resource | 

### Return type

[**TransportKazInfoTehGet**](TransportKazInfoTehGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportKazInfoTeh resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_kaz_info_teh_id_put**
> TransportKazInfoTehGet api_transport_kaz_info_teh_id_put(id, transport_kaz_info_teh_put)

Replaces the TransportKazInfoTeh resource.

Replaces the TransportKazInfoTeh resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_kaz_info_teh_get import TransportKazInfoTehGet
from openapi_client.models.transport_kaz_info_teh_put import TransportKazInfoTehPut
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
    api_instance = openapi_client.TransportKazInfoTehApi(api_client)
    id = 'id_example' # str | TransportKazInfoTeh identifier
    transport_kaz_info_teh_put = openapi_client.TransportKazInfoTehPut() # TransportKazInfoTehPut | The updated TransportKazInfoTeh resource

    try:
        # Replaces the TransportKazInfoTeh resource.
        api_response = api_instance.api_transport_kaz_info_teh_id_put(id, transport_kaz_info_teh_put)
        print("The response of TransportKazInfoTehApi->api_transport_kaz_info_teh_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportKazInfoTehApi->api_transport_kaz_info_teh_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportKazInfoTeh identifier | 
 **transport_kaz_info_teh_put** | [**TransportKazInfoTehPut**](TransportKazInfoTehPut.md)| The updated TransportKazInfoTeh resource | 

### Return type

[**TransportKazInfoTehGet**](TransportKazInfoTehGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportKazInfoTeh resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_kaz_info_teh_post**
> TransportKazInfoTehGet api_transport_kaz_info_teh_post(transport_kaz_info_teh_post)

Creates a TransportKazInfoTeh resource.

Creates a TransportKazInfoTeh resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_kaz_info_teh_get import TransportKazInfoTehGet
from openapi_client.models.transport_kaz_info_teh_post import TransportKazInfoTehPost
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
    api_instance = openapi_client.TransportKazInfoTehApi(api_client)
    transport_kaz_info_teh_post = openapi_client.TransportKazInfoTehPost() # TransportKazInfoTehPost | The new TransportKazInfoTeh resource

    try:
        # Creates a TransportKazInfoTeh resource.
        api_response = api_instance.api_transport_kaz_info_teh_post(transport_kaz_info_teh_post)
        print("The response of TransportKazInfoTehApi->api_transport_kaz_info_teh_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportKazInfoTehApi->api_transport_kaz_info_teh_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_kaz_info_teh_post** | [**TransportKazInfoTehPost**](TransportKazInfoTehPost.md)| The new TransportKazInfoTeh resource | 

### Return type

[**TransportKazInfoTehGet**](TransportKazInfoTehGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportKazInfoTeh resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

