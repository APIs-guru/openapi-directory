# openapi_client.SourcesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_sources_id_json_get**](SourcesApi.md#resources_sources_id_json_get) | **GET** /resources/sources/{id}.json | Get Source by ID
[**resources_sources_id_syndicate_format_get**](SourcesApi.md#resources_sources_id_syndicate_format_get) | **GET** /resources/sources/{id}/syndicate.{format} | Get MediaItems for Source
[**resources_sources_json_get**](SourcesApi.md#resources_sources_json_get) | **GET** /resources/sources.json | Get Sources


# **resources_sources_id_json_get**
> List[SourceWrapped] resources_sources_id_json_get(id)

Get Source by ID

Information about a specific source.

### Example


```python
import openapi_client
from openapi_client.models.source_wrapped import SourceWrapped
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourcesApi(api_client)
    id = 56 # int | The id of the source to look up

    try:
        # Get Source by ID
        api_response = api_instance.resources_sources_id_json_get(id)
        print("The response of SourcesApi->resources_sources_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourcesApi->resources_sources_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the source to look up | 

### Return type

[**List[SourceWrapped]**](SourceWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the Source identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_sources_id_syndicate_format_get**
> List[MediaItemWrapped] resources_sources_id_syndicate_format_get(id, format, display_method=display_method)

Get MediaItems for Source

MediaItem

### Example


```python
import openapi_client
from openapi_client.models.media_item_wrapped import MediaItemWrapped
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourcesApi(api_client)
    id = 56 # int | The id of the record to look up
    format = 'format_example' # str | Automatically added
    display_method = 'display_method_example' # str | Method used to render an html request. Accepts one: [mv, list, feed] (optional)

    try:
        # Get MediaItems for Source
        api_response = api_instance.resources_sources_id_syndicate_format_get(id, format, display_method=display_method)
        print("The response of SourcesApi->resources_sources_id_syndicate_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourcesApi->resources_sources_id_syndicate_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the record to look up | 
 **format** | **str**| Automatically added | 
 **display_method** | **str**| Method used to render an html request. Accepts one: [mv, list, feed] | [optional] 

### Return type

[**List[MediaItemWrapped]**](MediaItemWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Renders the list of MediaItems associated with the Source identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_sources_json_get**
> List[SourceWrapped] resources_sources_json_get(max=max, offset=offset, sort=sort)

Get Sources

Source Listings

### Example


```python
import openapi_client
from openapi_client.models.source_wrapped import SourceWrapped
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourcesApi(api_client)
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | Return records starting at the offset index. (optional)
    sort = 'sort_example' # str | The name of the property to which sorting will be applied (optional)

    try:
        # Get Sources
        api_response = api_instance.resources_sources_json_get(max=max, offset=offset, sort=sort)
        print("The response of SourcesApi->resources_sources_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourcesApi->resources_sources_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| Return records starting at the offset index. | [optional] 
 **sort** | **str**| The name of the property to which sorting will be applied | [optional] 

### Return type

[**List[SourceWrapped]**](SourceWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of Sources. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

