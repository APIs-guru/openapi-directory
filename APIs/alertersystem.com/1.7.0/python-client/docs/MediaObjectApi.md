# openapi_client.MediaObjectApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_media_object_get_collection**](MediaObjectApi.md#api_media_object_get_collection) | **GET** /api/media-object | Retrieves the collection of MediaObject resources.
[**api_media_object_id_delete**](MediaObjectApi.md#api_media_object_id_delete) | **DELETE** /api/media-object/{id} | Removes the MediaObject resource.
[**api_media_object_id_get**](MediaObjectApi.md#api_media_object_id_get) | **GET** /api/media-object/{id} | Retrieves a MediaObject resource.
[**api_media_object_post**](MediaObjectApi.md#api_media_object_post) | **POST** /api/media-object | Creates a MediaObject resource.


# **api_media_object_get_collection**
> List[MediaObjectGet] api_media_object_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of MediaObject resources.

Retrieves the collection of MediaObject resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.media_object_get import MediaObjectGet
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
    api_instance = openapi_client.MediaObjectApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of MediaObject resources.
        api_response = api_instance.api_media_object_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of MediaObjectApi->api_media_object_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaObjectApi->api_media_object_get_collection: %s\n" % e)
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

[**List[MediaObjectGet]**](MediaObjectGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MediaObject collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_media_object_id_delete**
> api_media_object_id_delete(id)

Removes the MediaObject resource.

Removes the MediaObject resource.

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
    api_instance = openapi_client.MediaObjectApi(api_client)
    id = 'id_example' # str | MediaObject identifier

    try:
        # Removes the MediaObject resource.
        api_instance.api_media_object_id_delete(id)
    except Exception as e:
        print("Exception when calling MediaObjectApi->api_media_object_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| MediaObject identifier | 

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
**204** | MediaObject resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_media_object_id_get**
> MediaObjectGet api_media_object_id_get(id)

Retrieves a MediaObject resource.

Retrieves a MediaObject resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.media_object_get import MediaObjectGet
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
    api_instance = openapi_client.MediaObjectApi(api_client)
    id = 'id_example' # str | MediaObject identifier

    try:
        # Retrieves a MediaObject resource.
        api_response = api_instance.api_media_object_id_get(id)
        print("The response of MediaObjectApi->api_media_object_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaObjectApi->api_media_object_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| MediaObject identifier | 

### Return type

[**MediaObjectGet**](MediaObjectGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MediaObject resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_media_object_post**
> MediaObjectGet api_media_object_post(data_segment_code=data_segment_code, file=file, keywords=keywords, partition=partition)

Creates a MediaObject resource.

Creates a MediaObject resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.media_object_get import MediaObjectGet
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
    api_instance = openapi_client.MediaObjectApi(api_client)
    data_segment_code = 'data_segment_code_example' # str | User-provided string on which to segment and filter data. Max 50 characters. (optional)
    file = None # bytearray |  (optional)
    keywords = 'keywords_example' # str | A string of keywords that can be used to search for a resource. Max 100 characters. (optional)
    partition = 'partition_example' # str | The unique id of the partition. Can be just the id or an IRI. (optional)

    try:
        # Creates a MediaObject resource.
        api_response = api_instance.api_media_object_post(data_segment_code=data_segment_code, file=file, keywords=keywords, partition=partition)
        print("The response of MediaObjectApi->api_media_object_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaObjectApi->api_media_object_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_segment_code** | **str**| User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
 **file** | **bytearray**|  | [optional] 
 **keywords** | **str**| A string of keywords that can be used to search for a resource. Max 100 characters. | [optional] 
 **partition** | **str**| The unique id of the partition. Can be just the id or an IRI. | [optional] 

### Return type

[**MediaObjectGet**](MediaObjectGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | MediaObject resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

