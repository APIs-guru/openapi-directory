# openapi_client.PartitionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_partition_get_collection**](PartitionApi.md#api_partition_get_collection) | **GET** /api/partition | Retrieves the collection of Partition resources.
[**api_partition_id_delete**](PartitionApi.md#api_partition_id_delete) | **DELETE** /api/partition/{id} | Removes the Partition resource.
[**api_partition_id_get**](PartitionApi.md#api_partition_id_get) | **GET** /api/partition/{id} | Retrieves a Partition resource.
[**api_partition_id_patch**](PartitionApi.md#api_partition_id_patch) | **PATCH** /api/partition/{id} | Updates the Partition resource.
[**api_partition_id_put**](PartitionApi.md#api_partition_id_put) | **PUT** /api/partition/{id} | Replaces the Partition resource.
[**api_partition_post**](PartitionApi.md#api_partition_post) | **POST** /api/partition | Creates a Partition resource.


# **api_partition_get_collection**
> List[PartitionGet] api_partition_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, properties=properties)

Retrieves the collection of Partition resources.

Retrieves the collection of Partition resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.partition_get import PartitionGet
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
    api_instance = openapi_client.PartitionApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of Partition resources.
        api_response = api_instance.api_partition_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, properties=properties)
        print("The response of PartitionApi->api_partition_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartitionApi->api_partition_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **data_segment_code** | **str**|  | [optional] 
 **data_segment_code2** | [**List[str]**](str.md)|  | [optional] 
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[PartitionGet]**](PartitionGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Partition collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_partition_id_delete**
> api_partition_id_delete(id)

Removes the Partition resource.

Removes the Partition resource.

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
    api_instance = openapi_client.PartitionApi(api_client)
    id = 'id_example' # str | Partition identifier

    try:
        # Removes the Partition resource.
        api_instance.api_partition_id_delete(id)
    except Exception as e:
        print("Exception when calling PartitionApi->api_partition_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Partition identifier | 

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
**204** | Partition resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_partition_id_get**
> PartitionGet api_partition_id_get(id)

Retrieves a Partition resource.

Retrieves a Partition resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.partition_get import PartitionGet
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
    api_instance = openapi_client.PartitionApi(api_client)
    id = 'id_example' # str | Partition identifier

    try:
        # Retrieves a Partition resource.
        api_response = api_instance.api_partition_id_get(id)
        print("The response of PartitionApi->api_partition_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartitionApi->api_partition_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Partition identifier | 

### Return type

[**PartitionGet**](PartitionGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Partition resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_partition_id_patch**
> PartitionGet api_partition_id_patch(id, partition_patch)

Updates the Partition resource.

Updates the Partition resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.partition_get import PartitionGet
from openapi_client.models.partition_patch import PartitionPatch
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
    api_instance = openapi_client.PartitionApi(api_client)
    id = 'id_example' # str | Partition identifier
    partition_patch = openapi_client.PartitionPatch() # PartitionPatch | The updated Partition resource

    try:
        # Updates the Partition resource.
        api_response = api_instance.api_partition_id_patch(id, partition_patch)
        print("The response of PartitionApi->api_partition_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartitionApi->api_partition_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Partition identifier | 
 **partition_patch** | [**PartitionPatch**](PartitionPatch.md)| The updated Partition resource | 

### Return type

[**PartitionGet**](PartitionGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Partition resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_partition_id_put**
> PartitionGet api_partition_id_put(id, partition_put)

Replaces the Partition resource.

Replaces the Partition resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.partition_get import PartitionGet
from openapi_client.models.partition_put import PartitionPut
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
    api_instance = openapi_client.PartitionApi(api_client)
    id = 'id_example' # str | Partition identifier
    partition_put = openapi_client.PartitionPut() # PartitionPut | The updated Partition resource

    try:
        # Replaces the Partition resource.
        api_response = api_instance.api_partition_id_put(id, partition_put)
        print("The response of PartitionApi->api_partition_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartitionApi->api_partition_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Partition identifier | 
 **partition_put** | [**PartitionPut**](PartitionPut.md)| The updated Partition resource | 

### Return type

[**PartitionGet**](PartitionGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Partition resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_partition_post**
> PartitionGet api_partition_post(partition_post)

Creates a Partition resource.

Creates a Partition resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.partition_get import PartitionGet
from openapi_client.models.partition_post import PartitionPost
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
    api_instance = openapi_client.PartitionApi(api_client)
    partition_post = openapi_client.PartitionPost() # PartitionPost | The new Partition resource

    try:
        # Creates a Partition resource.
        api_response = api_instance.api_partition_post(partition_post)
        print("The response of PartitionApi->api_partition_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PartitionApi->api_partition_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_post** | [**PartitionPost**](PartitionPost.md)| The new Partition resource | 

### Return type

[**PartitionGet**](PartitionGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Partition resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

