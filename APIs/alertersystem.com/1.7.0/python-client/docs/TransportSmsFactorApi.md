# openapi_client.TransportSmsFactorApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_sms_factor_get_collection**](TransportSmsFactorApi.md#api_transport_sms_factor_get_collection) | **GET** /api/transport-sms-factor | Retrieves the collection of TransportSmsFactor resources.
[**api_transport_sms_factor_id_delete**](TransportSmsFactorApi.md#api_transport_sms_factor_id_delete) | **DELETE** /api/transport-sms-factor/{id} | Removes the TransportSmsFactor resource.
[**api_transport_sms_factor_id_get**](TransportSmsFactorApi.md#api_transport_sms_factor_id_get) | **GET** /api/transport-sms-factor/{id} | Retrieves a TransportSmsFactor resource.
[**api_transport_sms_factor_id_patch**](TransportSmsFactorApi.md#api_transport_sms_factor_id_patch) | **PATCH** /api/transport-sms-factor/{id} | Updates the TransportSmsFactor resource.
[**api_transport_sms_factor_id_put**](TransportSmsFactorApi.md#api_transport_sms_factor_id_put) | **PUT** /api/transport-sms-factor/{id} | Replaces the TransportSmsFactor resource.
[**api_transport_sms_factor_post**](TransportSmsFactorApi.md#api_transport_sms_factor_post) | **POST** /api/transport-sms-factor | Creates a TransportSmsFactor resource.


# **api_transport_sms_factor_get_collection**
> List[TransportSmsFactorGet] api_transport_sms_factor_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSmsFactor resources.

Retrieves the collection of TransportSmsFactor resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms_factor_get import TransportSmsFactorGet
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
    api_instance = openapi_client.TransportSmsFactorApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSmsFactor resources.
        api_response = api_instance.api_transport_sms_factor_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSmsFactorApi->api_transport_sms_factor_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsFactorApi->api_transport_sms_factor_get_collection: %s\n" % e)
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

[**List[TransportSmsFactorGet]**](TransportSmsFactorGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsFactor collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms_factor_id_delete**
> api_transport_sms_factor_id_delete(id)

Removes the TransportSmsFactor resource.

Removes the TransportSmsFactor resource.

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
    api_instance = openapi_client.TransportSmsFactorApi(api_client)
    id = 'id_example' # str | TransportSmsFactor identifier

    try:
        # Removes the TransportSmsFactor resource.
        api_instance.api_transport_sms_factor_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSmsFactorApi->api_transport_sms_factor_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsFactor identifier | 

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
**204** | TransportSmsFactor resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms_factor_id_get**
> TransportSmsFactorGet api_transport_sms_factor_id_get(id)

Retrieves a TransportSmsFactor resource.

Retrieves a TransportSmsFactor resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms_factor_get import TransportSmsFactorGet
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
    api_instance = openapi_client.TransportSmsFactorApi(api_client)
    id = 'id_example' # str | TransportSmsFactor identifier

    try:
        # Retrieves a TransportSmsFactor resource.
        api_response = api_instance.api_transport_sms_factor_id_get(id)
        print("The response of TransportSmsFactorApi->api_transport_sms_factor_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsFactorApi->api_transport_sms_factor_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsFactor identifier | 

### Return type

[**TransportSmsFactorGet**](TransportSmsFactorGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsFactor resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms_factor_id_patch**
> TransportSmsFactorGet api_transport_sms_factor_id_patch(id, transport_sms_factor_patch)

Updates the TransportSmsFactor resource.

Updates the TransportSmsFactor resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms_factor_get import TransportSmsFactorGet
from openapi_client.models.transport_sms_factor_patch import TransportSmsFactorPatch
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
    api_instance = openapi_client.TransportSmsFactorApi(api_client)
    id = 'id_example' # str | TransportSmsFactor identifier
    transport_sms_factor_patch = openapi_client.TransportSmsFactorPatch() # TransportSmsFactorPatch | The updated TransportSmsFactor resource

    try:
        # Updates the TransportSmsFactor resource.
        api_response = api_instance.api_transport_sms_factor_id_patch(id, transport_sms_factor_patch)
        print("The response of TransportSmsFactorApi->api_transport_sms_factor_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsFactorApi->api_transport_sms_factor_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsFactor identifier | 
 **transport_sms_factor_patch** | [**TransportSmsFactorPatch**](TransportSmsFactorPatch.md)| The updated TransportSmsFactor resource | 

### Return type

[**TransportSmsFactorGet**](TransportSmsFactorGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsFactor resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms_factor_id_put**
> TransportSmsFactorGet api_transport_sms_factor_id_put(id, transport_sms_factor_put)

Replaces the TransportSmsFactor resource.

Replaces the TransportSmsFactor resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms_factor_get import TransportSmsFactorGet
from openapi_client.models.transport_sms_factor_put import TransportSmsFactorPut
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
    api_instance = openapi_client.TransportSmsFactorApi(api_client)
    id = 'id_example' # str | TransportSmsFactor identifier
    transport_sms_factor_put = openapi_client.TransportSmsFactorPut() # TransportSmsFactorPut | The updated TransportSmsFactor resource

    try:
        # Replaces the TransportSmsFactor resource.
        api_response = api_instance.api_transport_sms_factor_id_put(id, transport_sms_factor_put)
        print("The response of TransportSmsFactorApi->api_transport_sms_factor_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsFactorApi->api_transport_sms_factor_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSmsFactor identifier | 
 **transport_sms_factor_put** | [**TransportSmsFactorPut**](TransportSmsFactorPut.md)| The updated TransportSmsFactor resource | 

### Return type

[**TransportSmsFactorGet**](TransportSmsFactorGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSmsFactor resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_sms_factor_post**
> TransportSmsFactorGet api_transport_sms_factor_post(transport_sms_factor_post)

Creates a TransportSmsFactor resource.

Creates a TransportSmsFactor resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_sms_factor_get import TransportSmsFactorGet
from openapi_client.models.transport_sms_factor_post import TransportSmsFactorPost
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
    api_instance = openapi_client.TransportSmsFactorApi(api_client)
    transport_sms_factor_post = openapi_client.TransportSmsFactorPost() # TransportSmsFactorPost | The new TransportSmsFactor resource

    try:
        # Creates a TransportSmsFactor resource.
        api_response = api_instance.api_transport_sms_factor_post(transport_sms_factor_post)
        print("The response of TransportSmsFactorApi->api_transport_sms_factor_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSmsFactorApi->api_transport_sms_factor_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_sms_factor_post** | [**TransportSmsFactorPost**](TransportSmsFactorPost.md)| The new TransportSmsFactor resource | 

### Return type

[**TransportSmsFactorGet**](TransportSmsFactorGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSmsFactor resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

