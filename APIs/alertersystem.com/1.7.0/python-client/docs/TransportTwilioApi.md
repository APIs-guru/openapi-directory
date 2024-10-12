# openapi_client.TransportTwilioApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_twilio_get_collection**](TransportTwilioApi.md#api_transport_twilio_get_collection) | **GET** /api/transport-twilio | Retrieves the collection of TransportTwilio resources.
[**api_transport_twilio_id_delete**](TransportTwilioApi.md#api_transport_twilio_id_delete) | **DELETE** /api/transport-twilio/{id} | Removes the TransportTwilio resource.
[**api_transport_twilio_id_get**](TransportTwilioApi.md#api_transport_twilio_id_get) | **GET** /api/transport-twilio/{id} | Retrieves a TransportTwilio resource.
[**api_transport_twilio_id_patch**](TransportTwilioApi.md#api_transport_twilio_id_patch) | **PATCH** /api/transport-twilio/{id} | Updates the TransportTwilio resource.
[**api_transport_twilio_id_put**](TransportTwilioApi.md#api_transport_twilio_id_put) | **PUT** /api/transport-twilio/{id} | Replaces the TransportTwilio resource.
[**api_transport_twilio_post**](TransportTwilioApi.md#api_transport_twilio_post) | **POST** /api/transport-twilio | Creates a TransportTwilio resource.


# **api_transport_twilio_get_collection**
> List[TransportTwilioGet] api_transport_twilio_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportTwilio resources.

Retrieves the collection of TransportTwilio resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_twilio_get import TransportTwilioGet
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
    api_instance = openapi_client.TransportTwilioApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportTwilio resources.
        api_response = api_instance.api_transport_twilio_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportTwilioApi->api_transport_twilio_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTwilioApi->api_transport_twilio_get_collection: %s\n" % e)
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

[**List[TransportTwilioGet]**](TransportTwilioGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTwilio collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_twilio_id_delete**
> api_transport_twilio_id_delete(id)

Removes the TransportTwilio resource.

Removes the TransportTwilio resource.

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
    api_instance = openapi_client.TransportTwilioApi(api_client)
    id = 'id_example' # str | TransportTwilio identifier

    try:
        # Removes the TransportTwilio resource.
        api_instance.api_transport_twilio_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportTwilioApi->api_transport_twilio_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTwilio identifier | 

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
**204** | TransportTwilio resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_twilio_id_get**
> TransportTwilioGet api_transport_twilio_id_get(id)

Retrieves a TransportTwilio resource.

Retrieves a TransportTwilio resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_twilio_get import TransportTwilioGet
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
    api_instance = openapi_client.TransportTwilioApi(api_client)
    id = 'id_example' # str | TransportTwilio identifier

    try:
        # Retrieves a TransportTwilio resource.
        api_response = api_instance.api_transport_twilio_id_get(id)
        print("The response of TransportTwilioApi->api_transport_twilio_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTwilioApi->api_transport_twilio_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTwilio identifier | 

### Return type

[**TransportTwilioGet**](TransportTwilioGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTwilio resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_twilio_id_patch**
> TransportTwilioGet api_transport_twilio_id_patch(id, transport_twilio_patch)

Updates the TransportTwilio resource.

Updates the TransportTwilio resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_twilio_get import TransportTwilioGet
from openapi_client.models.transport_twilio_patch import TransportTwilioPatch
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
    api_instance = openapi_client.TransportTwilioApi(api_client)
    id = 'id_example' # str | TransportTwilio identifier
    transport_twilio_patch = openapi_client.TransportTwilioPatch() # TransportTwilioPatch | The updated TransportTwilio resource

    try:
        # Updates the TransportTwilio resource.
        api_response = api_instance.api_transport_twilio_id_patch(id, transport_twilio_patch)
        print("The response of TransportTwilioApi->api_transport_twilio_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTwilioApi->api_transport_twilio_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTwilio identifier | 
 **transport_twilio_patch** | [**TransportTwilioPatch**](TransportTwilioPatch.md)| The updated TransportTwilio resource | 

### Return type

[**TransportTwilioGet**](TransportTwilioGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTwilio resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_twilio_id_put**
> TransportTwilioGet api_transport_twilio_id_put(id, transport_twilio_put)

Replaces the TransportTwilio resource.

Replaces the TransportTwilio resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_twilio_get import TransportTwilioGet
from openapi_client.models.transport_twilio_put import TransportTwilioPut
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
    api_instance = openapi_client.TransportTwilioApi(api_client)
    id = 'id_example' # str | TransportTwilio identifier
    transport_twilio_put = openapi_client.TransportTwilioPut() # TransportTwilioPut | The updated TransportTwilio resource

    try:
        # Replaces the TransportTwilio resource.
        api_response = api_instance.api_transport_twilio_id_put(id, transport_twilio_put)
        print("The response of TransportTwilioApi->api_transport_twilio_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTwilioApi->api_transport_twilio_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportTwilio identifier | 
 **transport_twilio_put** | [**TransportTwilioPut**](TransportTwilioPut.md)| The updated TransportTwilio resource | 

### Return type

[**TransportTwilioGet**](TransportTwilioGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportTwilio resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_twilio_post**
> TransportTwilioGet api_transport_twilio_post(transport_twilio_post)

Creates a TransportTwilio resource.

Creates a TransportTwilio resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_twilio_get import TransportTwilioGet
from openapi_client.models.transport_twilio_post import TransportTwilioPost
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
    api_instance = openapi_client.TransportTwilioApi(api_client)
    transport_twilio_post = openapi_client.TransportTwilioPost() # TransportTwilioPost | The new TransportTwilio resource

    try:
        # Creates a TransportTwilio resource.
        api_response = api_instance.api_transport_twilio_post(transport_twilio_post)
        print("The response of TransportTwilioApi->api_transport_twilio_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportTwilioApi->api_transport_twilio_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_twilio_post** | [**TransportTwilioPost**](TransportTwilioPost.md)| The new TransportTwilio resource | 

### Return type

[**TransportTwilioGet**](TransportTwilioGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportTwilio resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

