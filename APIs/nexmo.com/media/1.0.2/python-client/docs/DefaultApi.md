# openapi_client.DefaultApi

All URIs are relative to *https://api.nexmo.com/v3/media*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_a_media_item**](DefaultApi.md#delete_a_media_item) | **DELETE** /:id | Delete a media item
[**list_and_search_media_items**](DefaultApi.md#list_and_search_media_items) | **GET** / | List and search media items
[**retrieve_a_media_item**](DefaultApi.md#retrieve_a_media_item) | **GET** /:id/info | Retrieve a media item
[**update_a_media_item**](DefaultApi.md#update_a_media_item) | **PUT** /:id/info | Update a media item


# **delete_a_media_item**
> delete_a_media_item()

Delete a media item

Delete a previously created media item by ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v3/media
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v3/media"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Delete a media item
        api_instance.delete_a_media_item()
    except Exception as e:
        print("Exception when calling DefaultApi->delete_a_media_item: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successfully deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_and_search_media_items**
> ListAndSearchMediaItems200Response list_and_search_media_items(order=order, page_index=page_index, page_size=page_size, start_time=start_time, end_time=end_time)

List and search media items

Retrieve information about multiple media items with the ability to search and paginate.

### Example


```python
import openapi_client
from openapi_client.models.list_and_search_media_items200_response import ListAndSearchMediaItems200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v3/media
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v3/media"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    order = descending # str | The order of search results. (optional) (default to descending)
    page_index = 0 # int | Which page to retrieve in pagination (optional) (default to 0)
    page_size = 20 # int | How many items at most per page (optional) (default to 20)
    start_time = '1 week ago' # str | Retrieve results created on or after this timestap. (optional) (default to '1 week ago')
    end_time = '2020-01-01T14:00:00.000Z' # str | Retrieve results created on or before this timestamp. (optional)

    try:
        # List and search media items
        api_response = api_instance.list_and_search_media_items(order=order, page_index=page_index, page_size=page_size, start_time=start_time, end_time=end_time)
        print("The response of DefaultApi->list_and_search_media_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_and_search_media_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **str**| The order of search results. | [optional] [default to descending]
 **page_index** | **int**| Which page to retrieve in pagination | [optional] [default to 0]
 **page_size** | **int**| How many items at most per page | [optional] [default to 20]
 **start_time** | **str**| Retrieve results created on or after this timestap. | [optional] [default to &#39;1 week ago&#39;]
 **end_time** | **str**| Retrieve results created on or before this timestamp. | [optional] 

### Return type

[**ListAndSearchMediaItems200Response**](ListAndSearchMediaItems200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_a_media_item**
> Media retrieve_a_media_item()

Retrieve a media item

Retrieve information about a single media item

### Example


```python
import openapi_client
from openapi_client.models.media import Media
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v3/media
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v3/media"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Retrieve a media item
        api_response = api_instance.retrieve_a_media_item()
        print("The response of DefaultApi->retrieve_a_media_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->retrieve_a_media_item: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Media**](Media.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_a_media_item**
> update_a_media_item(description=description, max_downloads_allowed=max_downloads_allowed, metadata_primary=metadata_primary, metadata_secondary=metadata_secondary, mime_type=mime_type, public=public, title=title)

Update a media item

Update a previously created media item by ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v3/media
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v3/media"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    description = 'description_example' # str | A description of the media file. (optional)
    max_downloads_allowed = 56 # int | The maximum number of times the file may be downloaded. Unlimited when not provided. (optional)
    metadata_primary = 'metadata_primary_example' # str | A string containing metadata about the media file. (optional)
    metadata_secondary = 'metadata_secondary_example' # str | A string containing further metadata about the media file. (optional)
    mime_type = 'mime_type_example' # str | The MIME type of the media file. (optional)
    public = True # bool | Whether the item is publicly available without authentication. (optional)
    title = 'title_example' # str | A string containing a title for the media file. (optional)

    try:
        # Update a media item
        api_instance.update_a_media_item(description=description, max_downloads_allowed=max_downloads_allowed, metadata_primary=metadata_primary, metadata_secondary=metadata_secondary, mime_type=mime_type, public=public, title=title)
    except Exception as e:
        print("Exception when calling DefaultApi->update_a_media_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | **str**| A description of the media file. | [optional] 
 **max_downloads_allowed** | **int**| The maximum number of times the file may be downloaded. Unlimited when not provided. | [optional] 
 **metadata_primary** | **str**| A string containing metadata about the media file. | [optional] 
 **metadata_secondary** | **str**| A string containing further metadata about the media file. | [optional] 
 **mime_type** | **str**| The MIME type of the media file. | [optional] 
 **public** | **bool**| Whether the item is publicly available without authentication. | [optional] 
 **title** | **str**| A string containing a title for the media file. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

