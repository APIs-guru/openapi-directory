# openapi_client.TransportFortySixElksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_forty_six_elks_get_collection**](TransportFortySixElksApi.md#api_transport_forty_six_elks_get_collection) | **GET** /api/transport-forty-six-elks | Retrieves the collection of TransportFortySixElks resources.
[**api_transport_forty_six_elks_id_delete**](TransportFortySixElksApi.md#api_transport_forty_six_elks_id_delete) | **DELETE** /api/transport-forty-six-elks/{id} | Removes the TransportFortySixElks resource.
[**api_transport_forty_six_elks_id_get**](TransportFortySixElksApi.md#api_transport_forty_six_elks_id_get) | **GET** /api/transport-forty-six-elks/{id} | Retrieves a TransportFortySixElks resource.
[**api_transport_forty_six_elks_id_patch**](TransportFortySixElksApi.md#api_transport_forty_six_elks_id_patch) | **PATCH** /api/transport-forty-six-elks/{id} | Updates the TransportFortySixElks resource.
[**api_transport_forty_six_elks_id_put**](TransportFortySixElksApi.md#api_transport_forty_six_elks_id_put) | **PUT** /api/transport-forty-six-elks/{id} | Replaces the TransportFortySixElks resource.
[**api_transport_forty_six_elks_post**](TransportFortySixElksApi.md#api_transport_forty_six_elks_post) | **POST** /api/transport-forty-six-elks | Creates a TransportFortySixElks resource.


# **api_transport_forty_six_elks_get_collection**
> List[TransportFortySixElksGet] api_transport_forty_six_elks_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportFortySixElks resources.

Retrieves the collection of TransportFortySixElks resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_forty_six_elks_get import TransportFortySixElksGet
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
    api_instance = openapi_client.TransportFortySixElksApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportFortySixElks resources.
        api_response = api_instance.api_transport_forty_six_elks_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportFortySixElksApi->api_transport_forty_six_elks_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFortySixElksApi->api_transport_forty_six_elks_get_collection: %s\n" % e)
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

[**List[TransportFortySixElksGet]**](TransportFortySixElksGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFortySixElks collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_forty_six_elks_id_delete**
> api_transport_forty_six_elks_id_delete(id)

Removes the TransportFortySixElks resource.

Removes the TransportFortySixElks resource.

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
    api_instance = openapi_client.TransportFortySixElksApi(api_client)
    id = 'id_example' # str | TransportFortySixElks identifier

    try:
        # Removes the TransportFortySixElks resource.
        api_instance.api_transport_forty_six_elks_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportFortySixElksApi->api_transport_forty_six_elks_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFortySixElks identifier | 

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
**204** | TransportFortySixElks resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_forty_six_elks_id_get**
> TransportFortySixElksGet api_transport_forty_six_elks_id_get(id)

Retrieves a TransportFortySixElks resource.

Retrieves a TransportFortySixElks resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_forty_six_elks_get import TransportFortySixElksGet
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
    api_instance = openapi_client.TransportFortySixElksApi(api_client)
    id = 'id_example' # str | TransportFortySixElks identifier

    try:
        # Retrieves a TransportFortySixElks resource.
        api_response = api_instance.api_transport_forty_six_elks_id_get(id)
        print("The response of TransportFortySixElksApi->api_transport_forty_six_elks_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFortySixElksApi->api_transport_forty_six_elks_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFortySixElks identifier | 

### Return type

[**TransportFortySixElksGet**](TransportFortySixElksGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFortySixElks resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_forty_six_elks_id_patch**
> TransportFortySixElksGet api_transport_forty_six_elks_id_patch(id, transport_forty_six_elks_patch)

Updates the TransportFortySixElks resource.

Updates the TransportFortySixElks resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_forty_six_elks_get import TransportFortySixElksGet
from openapi_client.models.transport_forty_six_elks_patch import TransportFortySixElksPatch
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
    api_instance = openapi_client.TransportFortySixElksApi(api_client)
    id = 'id_example' # str | TransportFortySixElks identifier
    transport_forty_six_elks_patch = openapi_client.TransportFortySixElksPatch() # TransportFortySixElksPatch | The updated TransportFortySixElks resource

    try:
        # Updates the TransportFortySixElks resource.
        api_response = api_instance.api_transport_forty_six_elks_id_patch(id, transport_forty_six_elks_patch)
        print("The response of TransportFortySixElksApi->api_transport_forty_six_elks_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFortySixElksApi->api_transport_forty_six_elks_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFortySixElks identifier | 
 **transport_forty_six_elks_patch** | [**TransportFortySixElksPatch**](TransportFortySixElksPatch.md)| The updated TransportFortySixElks resource | 

### Return type

[**TransportFortySixElksGet**](TransportFortySixElksGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFortySixElks resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_forty_six_elks_id_put**
> TransportFortySixElksGet api_transport_forty_six_elks_id_put(id, transport_forty_six_elks_put)

Replaces the TransportFortySixElks resource.

Replaces the TransportFortySixElks resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_forty_six_elks_get import TransportFortySixElksGet
from openapi_client.models.transport_forty_six_elks_put import TransportFortySixElksPut
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
    api_instance = openapi_client.TransportFortySixElksApi(api_client)
    id = 'id_example' # str | TransportFortySixElks identifier
    transport_forty_six_elks_put = openapi_client.TransportFortySixElksPut() # TransportFortySixElksPut | The updated TransportFortySixElks resource

    try:
        # Replaces the TransportFortySixElks resource.
        api_response = api_instance.api_transport_forty_six_elks_id_put(id, transport_forty_six_elks_put)
        print("The response of TransportFortySixElksApi->api_transport_forty_six_elks_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFortySixElksApi->api_transport_forty_six_elks_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFortySixElks identifier | 
 **transport_forty_six_elks_put** | [**TransportFortySixElksPut**](TransportFortySixElksPut.md)| The updated TransportFortySixElks resource | 

### Return type

[**TransportFortySixElksGet**](TransportFortySixElksGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFortySixElks resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_forty_six_elks_post**
> TransportFortySixElksGet api_transport_forty_six_elks_post(transport_forty_six_elks_post)

Creates a TransportFortySixElks resource.

Creates a TransportFortySixElks resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_forty_six_elks_get import TransportFortySixElksGet
from openapi_client.models.transport_forty_six_elks_post import TransportFortySixElksPost
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
    api_instance = openapi_client.TransportFortySixElksApi(api_client)
    transport_forty_six_elks_post = openapi_client.TransportFortySixElksPost() # TransportFortySixElksPost | The new TransportFortySixElks resource

    try:
        # Creates a TransportFortySixElks resource.
        api_response = api_instance.api_transport_forty_six_elks_post(transport_forty_six_elks_post)
        print("The response of TransportFortySixElksApi->api_transport_forty_six_elks_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFortySixElksApi->api_transport_forty_six_elks_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_forty_six_elks_post** | [**TransportFortySixElksPost**](TransportFortySixElksPost.md)| The new TransportFortySixElks resource | 

### Return type

[**TransportFortySixElksGet**](TransportFortySixElksGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportFortySixElks resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

