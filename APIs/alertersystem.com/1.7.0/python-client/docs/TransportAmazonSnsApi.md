# openapi_client.TransportAmazonSnsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_amazon_sns_get_collection**](TransportAmazonSnsApi.md#api_transport_amazon_sns_get_collection) | **GET** /api/transport-amazon-sns | Retrieves the collection of TransportAmazonSns resources.
[**api_transport_amazon_sns_id_delete**](TransportAmazonSnsApi.md#api_transport_amazon_sns_id_delete) | **DELETE** /api/transport-amazon-sns/{id} | Removes the TransportAmazonSns resource.
[**api_transport_amazon_sns_id_get**](TransportAmazonSnsApi.md#api_transport_amazon_sns_id_get) | **GET** /api/transport-amazon-sns/{id} | Retrieves a TransportAmazonSns resource.
[**api_transport_amazon_sns_id_patch**](TransportAmazonSnsApi.md#api_transport_amazon_sns_id_patch) | **PATCH** /api/transport-amazon-sns/{id} | Updates the TransportAmazonSns resource.
[**api_transport_amazon_sns_id_put**](TransportAmazonSnsApi.md#api_transport_amazon_sns_id_put) | **PUT** /api/transport-amazon-sns/{id} | Replaces the TransportAmazonSns resource.
[**api_transport_amazon_sns_post**](TransportAmazonSnsApi.md#api_transport_amazon_sns_post) | **POST** /api/transport-amazon-sns | Creates a TransportAmazonSns resource.


# **api_transport_amazon_sns_get_collection**
> List[TransportAmazonSnsGet] api_transport_amazon_sns_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportAmazonSns resources.

Retrieves the collection of TransportAmazonSns resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_amazon_sns_get import TransportAmazonSnsGet
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
    api_instance = openapi_client.TransportAmazonSnsApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportAmazonSns resources.
        api_response = api_instance.api_transport_amazon_sns_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportAmazonSnsApi->api_transport_amazon_sns_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAmazonSnsApi->api_transport_amazon_sns_get_collection: %s\n" % e)
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

[**List[TransportAmazonSnsGet]**](TransportAmazonSnsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAmazonSns collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_amazon_sns_id_delete**
> api_transport_amazon_sns_id_delete(id)

Removes the TransportAmazonSns resource.

Removes the TransportAmazonSns resource.

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
    api_instance = openapi_client.TransportAmazonSnsApi(api_client)
    id = 'id_example' # str | TransportAmazonSns identifier

    try:
        # Removes the TransportAmazonSns resource.
        api_instance.api_transport_amazon_sns_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportAmazonSnsApi->api_transport_amazon_sns_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAmazonSns identifier | 

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
**204** | TransportAmazonSns resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_amazon_sns_id_get**
> TransportAmazonSnsGet api_transport_amazon_sns_id_get(id)

Retrieves a TransportAmazonSns resource.

Retrieves a TransportAmazonSns resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_amazon_sns_get import TransportAmazonSnsGet
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
    api_instance = openapi_client.TransportAmazonSnsApi(api_client)
    id = 'id_example' # str | TransportAmazonSns identifier

    try:
        # Retrieves a TransportAmazonSns resource.
        api_response = api_instance.api_transport_amazon_sns_id_get(id)
        print("The response of TransportAmazonSnsApi->api_transport_amazon_sns_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAmazonSnsApi->api_transport_amazon_sns_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAmazonSns identifier | 

### Return type

[**TransportAmazonSnsGet**](TransportAmazonSnsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAmazonSns resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_amazon_sns_id_patch**
> TransportAmazonSnsGet api_transport_amazon_sns_id_patch(id, transport_amazon_sns_patch)

Updates the TransportAmazonSns resource.

Updates the TransportAmazonSns resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_amazon_sns_get import TransportAmazonSnsGet
from openapi_client.models.transport_amazon_sns_patch import TransportAmazonSnsPatch
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
    api_instance = openapi_client.TransportAmazonSnsApi(api_client)
    id = 'id_example' # str | TransportAmazonSns identifier
    transport_amazon_sns_patch = openapi_client.TransportAmazonSnsPatch() # TransportAmazonSnsPatch | The updated TransportAmazonSns resource

    try:
        # Updates the TransportAmazonSns resource.
        api_response = api_instance.api_transport_amazon_sns_id_patch(id, transport_amazon_sns_patch)
        print("The response of TransportAmazonSnsApi->api_transport_amazon_sns_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAmazonSnsApi->api_transport_amazon_sns_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAmazonSns identifier | 
 **transport_amazon_sns_patch** | [**TransportAmazonSnsPatch**](TransportAmazonSnsPatch.md)| The updated TransportAmazonSns resource | 

### Return type

[**TransportAmazonSnsGet**](TransportAmazonSnsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAmazonSns resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_amazon_sns_id_put**
> TransportAmazonSnsGet api_transport_amazon_sns_id_put(id, transport_amazon_sns_put)

Replaces the TransportAmazonSns resource.

Replaces the TransportAmazonSns resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_amazon_sns_get import TransportAmazonSnsGet
from openapi_client.models.transport_amazon_sns_put import TransportAmazonSnsPut
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
    api_instance = openapi_client.TransportAmazonSnsApi(api_client)
    id = 'id_example' # str | TransportAmazonSns identifier
    transport_amazon_sns_put = openapi_client.TransportAmazonSnsPut() # TransportAmazonSnsPut | The updated TransportAmazonSns resource

    try:
        # Replaces the TransportAmazonSns resource.
        api_response = api_instance.api_transport_amazon_sns_id_put(id, transport_amazon_sns_put)
        print("The response of TransportAmazonSnsApi->api_transport_amazon_sns_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAmazonSnsApi->api_transport_amazon_sns_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportAmazonSns identifier | 
 **transport_amazon_sns_put** | [**TransportAmazonSnsPut**](TransportAmazonSnsPut.md)| The updated TransportAmazonSns resource | 

### Return type

[**TransportAmazonSnsGet**](TransportAmazonSnsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportAmazonSns resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_amazon_sns_post**
> TransportAmazonSnsGet api_transport_amazon_sns_post(transport_amazon_sns_post)

Creates a TransportAmazonSns resource.

Creates a TransportAmazonSns resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_amazon_sns_get import TransportAmazonSnsGet
from openapi_client.models.transport_amazon_sns_post import TransportAmazonSnsPost
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
    api_instance = openapi_client.TransportAmazonSnsApi(api_client)
    transport_amazon_sns_post = openapi_client.TransportAmazonSnsPost() # TransportAmazonSnsPost | The new TransportAmazonSns resource

    try:
        # Creates a TransportAmazonSns resource.
        api_response = api_instance.api_transport_amazon_sns_post(transport_amazon_sns_post)
        print("The response of TransportAmazonSnsApi->api_transport_amazon_sns_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportAmazonSnsApi->api_transport_amazon_sns_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_amazon_sns_post** | [**TransportAmazonSnsPost**](TransportAmazonSnsPost.md)| The new TransportAmazonSns resource | 

### Return type

[**TransportAmazonSnsGet**](TransportAmazonSnsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportAmazonSns resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

