# openapi_client.TransportFirebaseApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_firebase_get_collection**](TransportFirebaseApi.md#api_transport_firebase_get_collection) | **GET** /api/transport-firebase | Retrieves the collection of TransportFirebase resources.
[**api_transport_firebase_id_delete**](TransportFirebaseApi.md#api_transport_firebase_id_delete) | **DELETE** /api/transport-firebase/{id} | Removes the TransportFirebase resource.
[**api_transport_firebase_id_get**](TransportFirebaseApi.md#api_transport_firebase_id_get) | **GET** /api/transport-firebase/{id} | Retrieves a TransportFirebase resource.
[**api_transport_firebase_id_patch**](TransportFirebaseApi.md#api_transport_firebase_id_patch) | **PATCH** /api/transport-firebase/{id} | Updates the TransportFirebase resource.
[**api_transport_firebase_id_put**](TransportFirebaseApi.md#api_transport_firebase_id_put) | **PUT** /api/transport-firebase/{id} | Replaces the TransportFirebase resource.
[**api_transport_firebase_post**](TransportFirebaseApi.md#api_transport_firebase_post) | **POST** /api/transport-firebase | Creates a TransportFirebase resource.


# **api_transport_firebase_get_collection**
> List[TransportFirebaseGet] api_transport_firebase_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportFirebase resources.

Retrieves the collection of TransportFirebase resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_firebase_get import TransportFirebaseGet
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
    api_instance = openapi_client.TransportFirebaseApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportFirebase resources.
        api_response = api_instance.api_transport_firebase_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportFirebaseApi->api_transport_firebase_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFirebaseApi->api_transport_firebase_get_collection: %s\n" % e)
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

[**List[TransportFirebaseGet]**](TransportFirebaseGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFirebase collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_firebase_id_delete**
> api_transport_firebase_id_delete(id)

Removes the TransportFirebase resource.

Removes the TransportFirebase resource.

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
    api_instance = openapi_client.TransportFirebaseApi(api_client)
    id = 'id_example' # str | TransportFirebase identifier

    try:
        # Removes the TransportFirebase resource.
        api_instance.api_transport_firebase_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportFirebaseApi->api_transport_firebase_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFirebase identifier | 

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
**204** | TransportFirebase resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_firebase_id_get**
> TransportFirebaseGet api_transport_firebase_id_get(id)

Retrieves a TransportFirebase resource.

Retrieves a TransportFirebase resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_firebase_get import TransportFirebaseGet
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
    api_instance = openapi_client.TransportFirebaseApi(api_client)
    id = 'id_example' # str | TransportFirebase identifier

    try:
        # Retrieves a TransportFirebase resource.
        api_response = api_instance.api_transport_firebase_id_get(id)
        print("The response of TransportFirebaseApi->api_transport_firebase_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFirebaseApi->api_transport_firebase_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFirebase identifier | 

### Return type

[**TransportFirebaseGet**](TransportFirebaseGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFirebase resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_firebase_id_patch**
> TransportFirebaseGet api_transport_firebase_id_patch(id, transport_firebase_patch)

Updates the TransportFirebase resource.

Updates the TransportFirebase resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_firebase_get import TransportFirebaseGet
from openapi_client.models.transport_firebase_patch import TransportFirebasePatch
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
    api_instance = openapi_client.TransportFirebaseApi(api_client)
    id = 'id_example' # str | TransportFirebase identifier
    transport_firebase_patch = openapi_client.TransportFirebasePatch() # TransportFirebasePatch | The updated TransportFirebase resource

    try:
        # Updates the TransportFirebase resource.
        api_response = api_instance.api_transport_firebase_id_patch(id, transport_firebase_patch)
        print("The response of TransportFirebaseApi->api_transport_firebase_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFirebaseApi->api_transport_firebase_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFirebase identifier | 
 **transport_firebase_patch** | [**TransportFirebasePatch**](TransportFirebasePatch.md)| The updated TransportFirebase resource | 

### Return type

[**TransportFirebaseGet**](TransportFirebaseGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFirebase resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_firebase_id_put**
> TransportFirebaseGet api_transport_firebase_id_put(id, transport_firebase_put)

Replaces the TransportFirebase resource.

Replaces the TransportFirebase resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_firebase_get import TransportFirebaseGet
from openapi_client.models.transport_firebase_put import TransportFirebasePut
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
    api_instance = openapi_client.TransportFirebaseApi(api_client)
    id = 'id_example' # str | TransportFirebase identifier
    transport_firebase_put = openapi_client.TransportFirebasePut() # TransportFirebasePut | The updated TransportFirebase resource

    try:
        # Replaces the TransportFirebase resource.
        api_response = api_instance.api_transport_firebase_id_put(id, transport_firebase_put)
        print("The response of TransportFirebaseApi->api_transport_firebase_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFirebaseApi->api_transport_firebase_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportFirebase identifier | 
 **transport_firebase_put** | [**TransportFirebasePut**](TransportFirebasePut.md)| The updated TransportFirebase resource | 

### Return type

[**TransportFirebaseGet**](TransportFirebaseGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportFirebase resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_firebase_post**
> TransportFirebaseGet api_transport_firebase_post(transport_firebase_post)

Creates a TransportFirebase resource.

Creates a TransportFirebase resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_firebase_get import TransportFirebaseGet
from openapi_client.models.transport_firebase_post import TransportFirebasePost
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
    api_instance = openapi_client.TransportFirebaseApi(api_client)
    transport_firebase_post = openapi_client.TransportFirebasePost() # TransportFirebasePost | The new TransportFirebase resource

    try:
        # Creates a TransportFirebase resource.
        api_response = api_instance.api_transport_firebase_post(transport_firebase_post)
        print("The response of TransportFirebaseApi->api_transport_firebase_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportFirebaseApi->api_transport_firebase_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_firebase_post** | [**TransportFirebasePost**](TransportFirebasePost.md)| The new TransportFirebase resource | 

### Return type

[**TransportFirebaseGet**](TransportFirebaseGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportFirebase resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

