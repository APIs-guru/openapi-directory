# openapi_client.TransportSpotHitApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_spot_hit_get_collection**](TransportSpotHitApi.md#api_transport_spot_hit_get_collection) | **GET** /api/transport-spot-hit | Retrieves the collection of TransportSpotHit resources.
[**api_transport_spot_hit_id_delete**](TransportSpotHitApi.md#api_transport_spot_hit_id_delete) | **DELETE** /api/transport-spot-hit/{id} | Removes the TransportSpotHit resource.
[**api_transport_spot_hit_id_get**](TransportSpotHitApi.md#api_transport_spot_hit_id_get) | **GET** /api/transport-spot-hit/{id} | Retrieves a TransportSpotHit resource.
[**api_transport_spot_hit_id_patch**](TransportSpotHitApi.md#api_transport_spot_hit_id_patch) | **PATCH** /api/transport-spot-hit/{id} | Updates the TransportSpotHit resource.
[**api_transport_spot_hit_id_put**](TransportSpotHitApi.md#api_transport_spot_hit_id_put) | **PUT** /api/transport-spot-hit/{id} | Replaces the TransportSpotHit resource.
[**api_transport_spot_hit_post**](TransportSpotHitApi.md#api_transport_spot_hit_post) | **POST** /api/transport-spot-hit | Creates a TransportSpotHit resource.


# **api_transport_spot_hit_get_collection**
> List[TransportSpotHitGet] api_transport_spot_hit_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportSpotHit resources.

Retrieves the collection of TransportSpotHit resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_spot_hit_get import TransportSpotHitGet
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
    api_instance = openapi_client.TransportSpotHitApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportSpotHit resources.
        api_response = api_instance.api_transport_spot_hit_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportSpotHitApi->api_transport_spot_hit_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSpotHitApi->api_transport_spot_hit_get_collection: %s\n" % e)
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

[**List[TransportSpotHitGet]**](TransportSpotHitGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSpotHit collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_spot_hit_id_delete**
> api_transport_spot_hit_id_delete(id)

Removes the TransportSpotHit resource.

Removes the TransportSpotHit resource.

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
    api_instance = openapi_client.TransportSpotHitApi(api_client)
    id = 'id_example' # str | TransportSpotHit identifier

    try:
        # Removes the TransportSpotHit resource.
        api_instance.api_transport_spot_hit_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportSpotHitApi->api_transport_spot_hit_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSpotHit identifier | 

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
**204** | TransportSpotHit resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_spot_hit_id_get**
> TransportSpotHitGet api_transport_spot_hit_id_get(id)

Retrieves a TransportSpotHit resource.

Retrieves a TransportSpotHit resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_spot_hit_get import TransportSpotHitGet
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
    api_instance = openapi_client.TransportSpotHitApi(api_client)
    id = 'id_example' # str | TransportSpotHit identifier

    try:
        # Retrieves a TransportSpotHit resource.
        api_response = api_instance.api_transport_spot_hit_id_get(id)
        print("The response of TransportSpotHitApi->api_transport_spot_hit_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSpotHitApi->api_transport_spot_hit_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSpotHit identifier | 

### Return type

[**TransportSpotHitGet**](TransportSpotHitGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSpotHit resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_spot_hit_id_patch**
> TransportSpotHitGet api_transport_spot_hit_id_patch(id, transport_spot_hit_patch)

Updates the TransportSpotHit resource.

Updates the TransportSpotHit resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_spot_hit_get import TransportSpotHitGet
from openapi_client.models.transport_spot_hit_patch import TransportSpotHitPatch
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
    api_instance = openapi_client.TransportSpotHitApi(api_client)
    id = 'id_example' # str | TransportSpotHit identifier
    transport_spot_hit_patch = openapi_client.TransportSpotHitPatch() # TransportSpotHitPatch | The updated TransportSpotHit resource

    try:
        # Updates the TransportSpotHit resource.
        api_response = api_instance.api_transport_spot_hit_id_patch(id, transport_spot_hit_patch)
        print("The response of TransportSpotHitApi->api_transport_spot_hit_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSpotHitApi->api_transport_spot_hit_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSpotHit identifier | 
 **transport_spot_hit_patch** | [**TransportSpotHitPatch**](TransportSpotHitPatch.md)| The updated TransportSpotHit resource | 

### Return type

[**TransportSpotHitGet**](TransportSpotHitGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSpotHit resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_spot_hit_id_put**
> TransportSpotHitGet api_transport_spot_hit_id_put(id, transport_spot_hit_put)

Replaces the TransportSpotHit resource.

Replaces the TransportSpotHit resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_spot_hit_get import TransportSpotHitGet
from openapi_client.models.transport_spot_hit_put import TransportSpotHitPut
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
    api_instance = openapi_client.TransportSpotHitApi(api_client)
    id = 'id_example' # str | TransportSpotHit identifier
    transport_spot_hit_put = openapi_client.TransportSpotHitPut() # TransportSpotHitPut | The updated TransportSpotHit resource

    try:
        # Replaces the TransportSpotHit resource.
        api_response = api_instance.api_transport_spot_hit_id_put(id, transport_spot_hit_put)
        print("The response of TransportSpotHitApi->api_transport_spot_hit_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSpotHitApi->api_transport_spot_hit_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportSpotHit identifier | 
 **transport_spot_hit_put** | [**TransportSpotHitPut**](TransportSpotHitPut.md)| The updated TransportSpotHit resource | 

### Return type

[**TransportSpotHitGet**](TransportSpotHitGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportSpotHit resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_spot_hit_post**
> TransportSpotHitGet api_transport_spot_hit_post(transport_spot_hit_post)

Creates a TransportSpotHit resource.

Creates a TransportSpotHit resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_spot_hit_get import TransportSpotHitGet
from openapi_client.models.transport_spot_hit_post import TransportSpotHitPost
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
    api_instance = openapi_client.TransportSpotHitApi(api_client)
    transport_spot_hit_post = openapi_client.TransportSpotHitPost() # TransportSpotHitPost | The new TransportSpotHit resource

    try:
        # Creates a TransportSpotHit resource.
        api_response = api_instance.api_transport_spot_hit_post(transport_spot_hit_post)
        print("The response of TransportSpotHitApi->api_transport_spot_hit_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportSpotHitApi->api_transport_spot_hit_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_spot_hit_post** | [**TransportSpotHitPost**](TransportSpotHitPost.md)| The new TransportSpotHit resource | 

### Return type

[**TransportSpotHitGet**](TransportSpotHitGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportSpotHit resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

