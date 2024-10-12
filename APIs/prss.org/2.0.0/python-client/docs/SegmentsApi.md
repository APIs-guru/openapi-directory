# openapi_client.SegmentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_segments_get**](SegmentsApi.md#api_v2_segments_get) | **GET** /api/v2/segments | Returns the segments matching the query parameters.
[**api_v2_segments_id_content_get**](SegmentsApi.md#api_v2_segments_id_content_get) | **GET** /api/v2/segments/{id}/content | UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
[**api_v2_segments_id_delete**](SegmentsApi.md#api_v2_segments_id_delete) | **DELETE** /api/v2/segments/{id} | Deletes the segment with the given ID.
[**api_v2_segments_id_get**](SegmentsApi.md#api_v2_segments_id_get) | **GET** /api/v2/segments/{id} | Returns the segment matching the given ID.
[**api_v2_segments_post**](SegmentsApi.md#api_v2_segments_post) | **POST** /api/v2/segments | Creates a new segment.


# **api_v2_segments_get**
> List[Segment] api_v2_segments_get(episode_id, segment_number=segment_number, page_start=page_start, page_size=page_size, order_by_id=order_by_id)

Returns the segments matching the query parameters.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.segment import Segment
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
    api_instance = openapi_client.SegmentsApi(api_client)
    episode_id = 56 # int | The ID of the episode that owns the segment.
    segment_number = 56 # int |  (optional)
    page_start = 0 # int | The start page of the results to return. The first item is indexed at 0. (optional) (default to 0)
    page_size = 500 # int | The number of items to return. Must be between 0 and 500, inclusive. (optional) (default to 500)
    order_by_id = 'order_by_id_example' # str | The sort order of the list of segments, based on segment ID. If unspecified, the segments are returned in random order. If using paging to iterate through the results, sort order should be specified. (optional)

    try:
        # Returns the segments matching the query parameters.
        api_response = api_instance.api_v2_segments_get(episode_id, segment_number=segment_number, page_start=page_start, page_size=page_size, order_by_id=order_by_id)
        print("The response of SegmentsApi->api_v2_segments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SegmentsApi->api_v2_segments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **episode_id** | **int**| The ID of the episode that owns the segment. | 
 **segment_number** | **int**|  | [optional] 
 **page_start** | **int**| The start page of the results to return. The first item is indexed at 0. | [optional] [default to 0]
 **page_size** | **int**| The number of items to return. Must be between 0 and 500, inclusive. | [optional] [default to 500]
 **order_by_id** | **str**| The sort order of the list of segments, based on segment ID. If unspecified, the segments are returned in random order. If using paging to iterate through the results, sort order should be specified. | [optional] 

### Return type

[**List[Segment]**](Segment.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The segments matching the query parameters |  -  |
**403** | Authorization failed, or the user is not permitted to view this episode or its segments. |  -  |
**404** | The episode cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_segments_id_content_get**
> bytearray api_v2_segments_id_content_get(id)

UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.

### Example

* OAuth Authentication (cd_oauth2):

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
    api_instance = openapi_client.SegmentsApi(api_client)
    id = 56 # int | 

    try:
        # UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
        api_response = api_instance.api_v2_segments_id_content_get(id)
        print("The response of SegmentsApi->api_v2_segments_id_content_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SegmentsApi->api_v2_segments_id_content_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

**bytearray**

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The audio content of the requested segment. |  -  |
**404** | The segment isn&#39;t found or the user doesn&#39;t have permission to get it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_segments_id_delete**
> api_v2_segments_id_delete(id)

Deletes the segment with the given ID.

### Example

* OAuth Authentication (cd_oauth2):

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
    api_instance = openapi_client.SegmentsApi(api_client)
    id = 56 # int | 

    try:
        # Deletes the segment with the given ID.
        api_instance.api_v2_segments_id_delete(id)
    except Exception as e:
        print("Exception when calling SegmentsApi->api_v2_segments_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The segment was deleted. |  -  |
**403** | Authorization failed, or the user is not permitted to delete the segment. |  -  |
**404** | The segment or the episode that owns the segment cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_segments_id_get**
> Segment api_v2_segments_id_get(id)

Returns the segment matching the given ID.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.segment import Segment
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
    api_instance = openapi_client.SegmentsApi(api_client)
    id = 56 # int | 

    try:
        # Returns the segment matching the given ID.
        api_response = api_instance.api_v2_segments_id_get(id)
        print("The response of SegmentsApi->api_v2_segments_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SegmentsApi->api_v2_segments_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**Segment**](Segment.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The segment with the given ID. |  -  |
**403** | Authorization failed, or the user is not permitted to view the segment. |  -  |
**404** | The segment information cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_segments_post**
> Segment api_v2_segments_post(cd_drive_uri, episode_id, segment_number, in_cue=in_cue, out_cue=out_cue)

Creates a new segment.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.segment import Segment
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
    api_instance = openapi_client.SegmentsApi(api_client)
    cd_drive_uri = 'cd_drive_uri_example' # str | The URI to the segment content in CD Drive. Format should be 'cddrive:id:{value}' or 'cddrive://{path}'.
    episode_id = 56 # int | The ID of the episode that owns the segment.
    segment_number = 56 # int | The segment number of the segment.
    in_cue = 'in_cue_example' # str | The incue for the segment. Defaults to the program segment incue. (optional)
    out_cue = 'out_cue_example' # str | The outcue for the segment. Defaults to the program segment outcue. (optional)

    try:
        # Creates a new segment.
        api_response = api_instance.api_v2_segments_post(cd_drive_uri, episode_id, segment_number, in_cue=in_cue, out_cue=out_cue)
        print("The response of SegmentsApi->api_v2_segments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SegmentsApi->api_v2_segments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cd_drive_uri** | **str**| The URI to the segment content in CD Drive. Format should be &#39;cddrive:id:{value}&#39; or &#39;cddrive://{path}&#39;. | 
 **episode_id** | **int**| The ID of the episode that owns the segment. | 
 **segment_number** | **int**| The segment number of the segment. | 
 **in_cue** | **str**| The incue for the segment. Defaults to the program segment incue. | [optional] 
 **out_cue** | **str**| The outcue for the segment. Defaults to the program segment outcue. | [optional] 

### Return type

[**Segment**](Segment.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created segment with fields populated. |  -  |
**400** | The request is missing required data or invalid. |  -  |
**403** | Authorization failed, or the user is not permitted to create the segment. |  -  |
**404** | The information for creating the segment cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

