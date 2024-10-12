# openapi_client.MediaApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_media_featured_json_get**](MediaApi.md#resources_media_featured_json_get) | **GET** /resources/media/featured.json | Get the list of featured content in the syndication system
[**resources_media_id_content_get**](MediaApi.md#resources_media_id_content_get) | **GET** /resources/media/{id}/content | Get content for MediaItem
[**resources_media_id_embed_json_get**](MediaApi.md#resources_media_id_embed_json_get) | **GET** /resources/media/{id}/embed.json | Get embed code for MediaItem
[**resources_media_id_json_get**](MediaApi.md#resources_media_id_json_get) | **GET** /resources/media/{id}.json | Get MediaItem by ID
[**resources_media_id_preview_jpg_get**](MediaApi.md#resources_media_id_preview_jpg_get) | **GET** /resources/media/{id}/preview.jpg | Get Tag by ID
[**resources_media_id_related_media_format_get**](MediaApi.md#resources_media_id_related_media_format_get) | **GET** /resources/media/{id}/relatedMedia.{format} | Get related MediaItems by ID
[**resources_media_id_syndicate_format_get**](MediaApi.md#resources_media_id_syndicate_format_get) | **GET** /resources/media/{id}/syndicate.{format} | Get syndicated content for MediaItem
[**resources_media_id_thumbnail_jpg_get**](MediaApi.md#resources_media_id_thumbnail_jpg_get) | **GET** /resources/media/{id}/thumbnail.jpg | Get JPG thumbnail for MediaItem
[**resources_media_id_youtube_meta_data_json_get**](MediaApi.md#resources_media_id_youtube_meta_data_json_get) | **GET** /resources/media/{id}/youtubeMetaData.json | Get Youtube metadata for MediaItem
[**resources_media_json_get**](MediaApi.md#resources_media_json_get) | **GET** /resources/media.json | Get MediaItems
[**resources_media_most_popular_media_format_get**](MediaApi.md#resources_media_most_popular_media_format_get) | **GET** /resources/media/mostPopularMedia.{format} | Get MediaItems by popularity
[**resources_media_search_results_json_get**](MediaApi.md#resources_media_search_results_json_get) | **GET** /resources/media/searchResults.json | Get MediaItems by search query


# **resources_media_featured_json_get**
> List[MediaItem] resources_media_featured_json_get(sort=sort, max=max, offset=offset)

Get the list of featured content in the syndication system

Get the list of featured content in the syndication system

### Example


```python
import openapi_client
from openapi_client.models.media_item import MediaItem
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
    api_instance = openapi_client.MediaApi(api_client)
    sort = 'sort_example' # str | The name of the property to which sorting will be applied (optional)
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | Return records starting at the offset index. (optional)

    try:
        # Get the list of featured content in the syndication system
        api_response = api_instance.resources_media_featured_json_get(sort=sort, max=max, offset=offset)
        print("The response of MediaApi->resources_media_featured_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_featured_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **str**| The name of the property to which sorting will be applied | [optional] 
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| Return records starting at the offset index. | [optional] 

### Return type

[**List[MediaItem]**](MediaItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get the list of featured content in the syndication system |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_id_content_get**
> str resources_media_id_content_get(id, called_by_build=called_by_build)

Get content for MediaItem

The actual media content (html, image, etc...)

### Example


```python
import openapi_client
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
    api_instance = openapi_client.MediaApi(api_client)
    id = 56 # int | The id of the media to show content for.
    called_by_build = True # bool | The method that called this method (optional)

    try:
        # Get content for MediaItem
        api_response = api_instance.resources_media_id_content_get(id, called_by_build=called_by_build)
        print("The response of MediaApi->resources_media_id_content_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_id_content_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the media to show content for. | 
 **called_by_build** | **bool**| The method that called this method | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the raw content (html, image, etc...) for the MediaItem identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_id_embed_json_get**
> str resources_media_id_embed_json_get(id, flavor=flavor, width=width, height=height, iframe_name=iframe_name, exclude_jquery=exclude_jquery, exclude_div=exclude_div, div_id=div_id, display_method=display_method)

Get embed code for MediaItem

Get the javascript or iframe embed code for this item (to embed it on a web page).

### Example


```python
import openapi_client
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
    api_instance = openapi_client.MediaApi(api_client)
    id = 56 # int | The id of the media to get embed code for.
    flavor = 'flavor_example' # str | Currently supports 'iframe', defaults to 'javascript'. (optional)
    width = 56 # int | The width of the generated iframe. (optional)
    height = 56 # int | The height of the generated iframe. (optional)
    iframe_name = 'iframe_name_example' # str | The name of the iframe element (optional)
    exclude_jquery = False # bool | Should a reference to the JQuery Library be omitted? (optional) (default to False)
    exclude_div = False # bool | Should the div to insert content into be omitted? (optional) (default to False)
    div_id = 'div_id_example' # str | Should the div to insert content into have a specific name? (optional)
    display_method = 'display_method_example' # str | Method used to render an html request. Accepts one: [mv, list, feed] (optional)

    try:
        # Get embed code for MediaItem
        api_response = api_instance.resources_media_id_embed_json_get(id, flavor=flavor, width=width, height=height, iframe_name=iframe_name, exclude_jquery=exclude_jquery, exclude_div=exclude_div, div_id=div_id, display_method=display_method)
        print("The response of MediaApi->resources_media_id_embed_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_id_embed_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the media to get embed code for. | 
 **flavor** | **str**| Currently supports &#39;iframe&#39;, defaults to &#39;javascript&#39;. | [optional] 
 **width** | **int**| The width of the generated iframe. | [optional] 
 **height** | **int**| The height of the generated iframe. | [optional] 
 **iframe_name** | **str**| The name of the iframe element | [optional] 
 **exclude_jquery** | **bool**| Should a reference to the JQuery Library be omitted? | [optional] [default to False]
 **exclude_div** | **bool**| Should the div to insert content into be omitted? | [optional] [default to False]
 **div_id** | **str**| Should the div to insert content into have a specific name? | [optional] 
 **display_method** | **str**| Method used to render an html request. Accepts one: [mv, list, feed] | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the javascript or iframe embed code for the MediaItem identified by &#39;id&#39;. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_id_json_get**
> List[MediaItemWrapped] resources_media_id_json_get(id)

Get MediaItem by ID

Information about a specific media item

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
    api_instance = openapi_client.MediaApi(api_client)
    id = 56 # int | The id of the record to look up

    try:
        # Get MediaItem by ID
        api_response = api_instance.resources_media_id_json_get(id)
        print("The response of MediaApi->resources_media_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the record to look up | 

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
**200** | Returns the MediaItem identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_id_preview_jpg_get**
> object resources_media_id_preview_jpg_get(id)

Get Tag by ID

Get the jpg preview of the content item where applicable.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.MediaApi(api_client)
    id = 56 # int | The id of the media to get a preview for.

    try:
        # Get Tag by ID
        api_response = api_instance.resources_media_id_preview_jpg_get(id)
        print("The response of MediaApi->resources_media_id_preview_jpg_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_id_preview_jpg_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the media to get a preview for. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the JPG preview, where applicable, for the MediaItem identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_id_related_media_format_get**
> List[MediaItemWrapped] resources_media_id_related_media_format_get(id, format, max=max, offset=offset, sort=sort)

Get related MediaItems by ID

Get the media related to the current media item.

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
    api_instance = openapi_client.MediaApi(api_client)
    id = 56 # int | The id of the media item to get related media for
    format = 'format_example' # str | Automatically added
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | Return records starting at the offset index. (optional)
    sort = 'sort_example' # str | The name of the property to which sorting will be applied (optional)

    try:
        # Get related MediaItems by ID
        api_response = api_instance.resources_media_id_related_media_format_get(id, format, max=max, offset=offset, sort=sort)
        print("The response of MediaApi->resources_media_id_related_media_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_id_related_media_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the media item to get related media for | 
 **format** | **str**| Automatically added | 
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| Return records starting at the offset index. | [optional] 
 **sort** | **str**| The name of the property to which sorting will be applied | [optional] 

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
**200** | Returns the list of MediaItems related to the MediaItem identified by the &#39;id&#39;. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_id_syndicate_format_get**
> SyndicateMarshallerWrapped resources_media_id_syndicate_format_get(id, format, css_class=css_class, strip_styles=strip_styles, strip_scripts=strip_scripts, strip_images=strip_images, strip_breaks=strip_breaks, strip_classes=strip_classes, font_size=font_size, image_float=image_float, image_margin=image_margin, autoplay=autoplay, rel=rel)

Get syndicated content for MediaItem

Get syndicated content.

### Example


```python
import openapi_client
from openapi_client.models.syndicate_marshaller_wrapped import SyndicateMarshallerWrapped
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
    api_instance = openapi_client.MediaApi(api_client)
    id = 56 # int | The id of the media to show embed code for.
    format = 'format_example' # str | Automatically added
    css_class = 'syndicate' # str | The css class to target for extraction. (optional) (default to 'syndicate')
    strip_styles = False # bool | Remove in-line styles from content. (optional) (default to False)
    strip_scripts = False # bool | Remove script tags from content. (optional) (default to False)
    strip_images = False # bool | Remove image tags from content. (optional) (default to False)
    strip_breaks = False # bool | Remove break tags from content. (optional) (default to False)
    strip_classes = False # bool | Remove class attributes from content (except 'syndicate'). (optional) (default to False)
    font_size = 56 # int | Set font size (in points) of p, div, and span tags. (optional)
    image_float = 'image_float_example' # str | Accepts valid CSS float options, such as 'left' or 'right'. Will inject a style into the content before rendering. (optional)
    image_margin = 'image_margin_example' # str | Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is 'north,east,south,west' - for example '0,10,10,0' would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering. (optional)
    autoplay = True # bool | If content is a video, the embeded video will auto play when loaded. (optional) (default to True)
    rel = False # bool | If content is a video, related items will be shown at the end of playback. (optional) (default to False)

    try:
        # Get syndicated content for MediaItem
        api_response = api_instance.resources_media_id_syndicate_format_get(id, format, css_class=css_class, strip_styles=strip_styles, strip_scripts=strip_scripts, strip_images=strip_images, strip_breaks=strip_breaks, strip_classes=strip_classes, font_size=font_size, image_float=image_float, image_margin=image_margin, autoplay=autoplay, rel=rel)
        print("The response of MediaApi->resources_media_id_syndicate_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_id_syndicate_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the media to show embed code for. | 
 **format** | **str**| Automatically added | 
 **css_class** | **str**| The css class to target for extraction. | [optional] [default to &#39;syndicate&#39;]
 **strip_styles** | **bool**| Remove in-line styles from content. | [optional] [default to False]
 **strip_scripts** | **bool**| Remove script tags from content. | [optional] [default to False]
 **strip_images** | **bool**| Remove image tags from content. | [optional] [default to False]
 **strip_breaks** | **bool**| Remove break tags from content. | [optional] [default to False]
 **strip_classes** | **bool**| Remove class attributes from content (except &#39;syndicate&#39;). | [optional] [default to False]
 **font_size** | **int**| Set font size (in points) of p, div, and span tags. | [optional] 
 **image_float** | **str**| Accepts valid CSS float options, such as &#39;left&#39; or &#39;right&#39;. Will inject a style into the content before rendering. | [optional] 
 **image_margin** | **str**| Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is &#39;north,east,south,west&#39; - for example &#39;0,10,10,0&#39; would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering. | [optional] 
 **autoplay** | **bool**| If content is a video, the embeded video will auto play when loaded. | [optional] [default to True]
 **rel** | **bool**| If content is a video, related items will be shown at the end of playback. | [optional] [default to False]

### Return type

[**SyndicateMarshallerWrapped**](SyndicateMarshallerWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the syndicated content for a given MediaItem in the specified &#39;format&#39; (HTML or JSON). |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_id_thumbnail_jpg_get**
> object resources_media_id_thumbnail_jpg_get(id)

Get JPG thumbnail for MediaItem

Get the jpg thumbnail of the content item where applicable.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.MediaApi(api_client)
    id = 56 # int | The id of the media to get a thumbnail for.

    try:
        # Get JPG thumbnail for MediaItem
        api_response = api_instance.resources_media_id_thumbnail_jpg_get(id)
        print("The response of MediaApi->resources_media_id_thumbnail_jpg_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_id_thumbnail_jpg_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the media to get a thumbnail for. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the JPG thumbnail, where applicable, for the MediaItem identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_id_youtube_meta_data_json_get**
> ResourcesMediaIdYoutubeMetaDataJsonGet200Response resources_media_id_youtube_meta_data_json_get(id)

Get Youtube metadata for MediaItem

Youtube meta-data for a video item.

### Example


```python
import openapi_client
from openapi_client.models.resources_media_id_youtube_meta_data_json_get200_response import ResourcesMediaIdYoutubeMetaDataJsonGet200Response
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
    api_instance = openapi_client.MediaApi(api_client)
    id = 56 # int | The id of the video to show meta data for.

    try:
        # Get Youtube metadata for MediaItem
        api_response = api_instance.resources_media_id_youtube_meta_data_json_get(id)
        print("The response of MediaApi->resources_media_id_youtube_meta_data_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_id_youtube_meta_data_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the video to show meta data for. | 

### Return type

[**ResourcesMediaIdYoutubeMetaDataJsonGet200Response**](ResourcesMediaIdYoutubeMetaDataJsonGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the Youtube metadata, where applicable, for the MediaItem identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_json_get**
> List[MediaItemWrapped] resources_media_json_get(max=max, offset=offset, sort=sort, order=order, media_types=media_types, name=name, collection_id=collection_id, name_contains=name_contains, description_contains=description_contains, source_url=source_url, source_url_contains=source_url_contains, custom_thumbnail_url=custom_thumbnail_url, custom_thumbnail_url_contains=custom_thumbnail_url_contains, date_content_authored=date_content_authored, date_content_updated=date_content_updated, date_content_published=date_content_published, date_content_reviewed=date_content_reviewed, date_syndication_captured=date_syndication_captured, date_syndication_updated=date_syndication_updated, content_authored_since_date=content_authored_since_date, content_authored_before_date=content_authored_before_date, content_authored_in_range=content_authored_in_range, content_updated_since_date=content_updated_since_date, content_updated_before_date=content_updated_before_date, content_updated_in_range=content_updated_in_range, content_published_since_date=content_published_since_date, content_published_before_date=content_published_before_date, content_published_in_range=content_published_in_range, content_reviewed_since_date=content_reviewed_since_date, content_reviewed_before_date=content_reviewed_before_date, content_reviewed_in_range=content_reviewed_in_range, syndication_captured_since_date=syndication_captured_since_date, syndication_captured_before_date=syndication_captured_before_date, syndication_captured_in_range=syndication_captured_in_range, syndication_updated_since_date=syndication_updated_since_date, syndication_updated_before_date=syndication_updated_before_date, syndication_updated_in_range=syndication_updated_in_range, syndication_visible_since_date=syndication_visible_since_date, syndication_visible_before_date=syndication_visible_before_date, syndication_visible_in_range=syndication_visible_in_range, language_id=language_id, language_name=language_name, language_iso_code=language_iso_code, hash=hash, hash_contains=hash_contains, source_id=source_id, source_name=source_name, source_name_contains=source_name_contains, source_acronym=source_acronym, source_acronym_contains=source_acronym_contains, tag_ids=tag_ids, restrict_to_set=restrict_to_set, created_by=created_by)

Get MediaItems

Media Items Listings

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
    api_instance = openapi_client.MediaApi(api_client)
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | The offset of the records set to return for pagination. (optional)
    sort = 'sort_example' # str | * Set of fields to sort the records by. (optional)
    order = 'order_example' # str | * The ascending or descending order. (optional)
    media_types = 'media_types_example' # str | Find all media items belonging to the specified media type[s]. (optional)
    name = 'name_example' # str | Find all media items containing the provided name, case insensitive. (optional)
    collection_id = 56 # int | Restrict filtering to media items in a specific collection. (optional)
    name_contains = 'name_contains_example' # str | Find all media items containing the partial name, case insensitive. (optional)
    description_contains = 'description_contains_example' # str | Find all media items containing the provided partial description, case insensitive. (optional)
    source_url = 'source_url_example' # str | Find all media items which have the provided sourceUrl, case insensitive. (optional)
    source_url_contains = 'source_url_contains_example' # str | Find all media items which contain the provided partial sourceUrl, case insensitive. (optional)
    custom_thumbnail_url = 'custom_thumbnail_url_example' # str | Find all media items which have the provided customThumbnailUrl, case insensitive. (optional)
    custom_thumbnail_url_contains = 'custom_thumbnail_url_contains_example' # str | Find all media items which contain the provided partial customThumbnailUrl, case insensitive. (optional)
    date_content_authored = '2013-10-20' # date | Find all media items authored on the provided day (RFC 3339, time ignored). (optional)
    date_content_updated = '2013-10-20' # date | Find all media items updated on the provided day (RFC 3339, time ignored). (optional)
    date_content_published = '2013-10-20' # date | Find all media items published on the provided day (RFC 3339, time ignored). (optional)
    date_content_reviewed = '2013-10-20' # date | Find all media items reviewed on the provided day (RFC 3339, time ignored). (optional)
    date_syndication_captured = '2013-10-20' # date | Find all media items syndicated on the provided day (RFC 3339, time ignored). (optional)
    date_syndication_updated = '2013-10-20' # date | Find all media items updated through the syndication system on the provided day, (RFC 3339, time ignored). (optional)
    content_authored_since_date = '2013-10-20' # date | Find all media items authored since the provided day (RFC 3339, time ignored). (optional)
    content_authored_before_date = '2013-10-20' # date | Find all media items authored before the provided day (RFC 3339, time ignored). (optional)
    content_authored_in_range = 'content_authored_in_range_example' # str | Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored). (optional)
    content_updated_since_date = '2013-10-20' # date | Find all media items updated since the provided day (RFC 3339, time ignored). (optional)
    content_updated_before_date = '2013-10-20' # date | Find all media items updated before the provided day (RFC 3339, time ignored). (optional)
    content_updated_in_range = 'content_updated_in_range_example' # str | Find all media items updated between the provided start and end days (RFC 3339, comma separated, time ignored). (optional)
    content_published_since_date = '2013-10-20' # date | Find all media items updated since the provided day (RFC 3339, time ignored). (optional)
    content_published_before_date = '2013-10-20' # date | Find all media items published before the provided day (RFC 3339, time ignored). (optional)
    content_published_in_range = 'content_published_in_range_example' # str | Find all media items published between the provided start and end days (RFC 3339, comma separated, time ignored). (optional)
    content_reviewed_since_date = '2013-10-20' # date | Find all media items reviewed since the provided day (RFC 3339, time ignored). (optional)
    content_reviewed_before_date = '2013-10-20' # date | Find all media items reviewed before the provided day (RFC 3339, time ignored). (optional)
    content_reviewed_in_range = 'content_reviewed_in_range_example' # str | Find all media items reviewed between the provided start and end days (RFC 3339, comma separated, time ignored). (optional)
    syndication_captured_since_date = '2013-10-20' # date | Find all media items authored since the provided day (RFC 3339, time ignored). (optional)
    syndication_captured_before_date = '2013-10-20' # date | Find all media items authored before the provided day (RFC 3339, time ignored). (optional)
    syndication_captured_in_range = 'syndication_captured_in_range_example' # str | Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored). (optional)
    syndication_updated_since_date = '2013-10-20' # date | Find all media items updated since the provided day, (RFC 3339, time ignored). (optional)
    syndication_updated_before_date = '2013-10-20' # date | Find all media items updated before the provided day, (RFC 3339, time ignored). (optional)
    syndication_updated_in_range = 'syndication_updated_in_range_example' # str | Find all media items updated between the provided start and end days, (RFC 3339, comma separated, time ignored). (optional)
    syndication_visible_since_date = '2013-10-20' # date | Find all media items visible since the provided day, (RFC 3339, time ignored). (optional)
    syndication_visible_before_date = '2013-10-20' # date | Find all media items visible before the provided day, (RFC 3339, time ignored). (optional)
    syndication_visible_in_range = '2013-10-20' # date | Find all media items visible between the provided start and end days, (RFC 3339, comma separated, time ignored). (optional)
    language_id = 56 # int | Find all media items written in the language specified by Id. (optional)
    language_name = 'language_name_example' # str | Find all media items written in the language specified by name, case insensitive. (optional)
    language_iso_code = 'language_iso_code_example' # str | Find all media items written in the language specified by 639-2 isoCode , case insensitive. (optional)
    hash = 'hash_example' # str | Find all media items which match the provided hash, case insensitive. (optional)
    hash_contains = 'hash_contains_example' # str | Find all media items which match the provided partial hash, case insensitive. (optional)
    source_id = 56 # int | Find all media items that belong to the source specified by Id. (optional)
    source_name = 'source_name_example' # str | Find all media items that belong to the source specified by name, case insensitive. (optional)
    source_name_contains = 'source_name_contains_example' # str | Find all media items that belong to the source specified by partial name, case insensitive. (optional)
    source_acronym = 'source_acronym_example' # str | Find all media items that belong to the source specified by acronym, case insensitive. (optional)
    source_acronym_contains = 'source_acronym_contains_example' # str | Find all media items that belong to the source specified by partial acronym, case insensitive. (optional)
    tag_ids = 'tag_ids_example' # str | Find only media items tagged with the specified tag Ids. (optional)
    restrict_to_set = 'restrict_to_set_example' # str | Find only media from within the supplied list of Ids. (optional)
    created_by = 'created_by_example' # str | Find all media items containing the createdBy value. (optional)

    try:
        # Get MediaItems
        api_response = api_instance.resources_media_json_get(max=max, offset=offset, sort=sort, order=order, media_types=media_types, name=name, collection_id=collection_id, name_contains=name_contains, description_contains=description_contains, source_url=source_url, source_url_contains=source_url_contains, custom_thumbnail_url=custom_thumbnail_url, custom_thumbnail_url_contains=custom_thumbnail_url_contains, date_content_authored=date_content_authored, date_content_updated=date_content_updated, date_content_published=date_content_published, date_content_reviewed=date_content_reviewed, date_syndication_captured=date_syndication_captured, date_syndication_updated=date_syndication_updated, content_authored_since_date=content_authored_since_date, content_authored_before_date=content_authored_before_date, content_authored_in_range=content_authored_in_range, content_updated_since_date=content_updated_since_date, content_updated_before_date=content_updated_before_date, content_updated_in_range=content_updated_in_range, content_published_since_date=content_published_since_date, content_published_before_date=content_published_before_date, content_published_in_range=content_published_in_range, content_reviewed_since_date=content_reviewed_since_date, content_reviewed_before_date=content_reviewed_before_date, content_reviewed_in_range=content_reviewed_in_range, syndication_captured_since_date=syndication_captured_since_date, syndication_captured_before_date=syndication_captured_before_date, syndication_captured_in_range=syndication_captured_in_range, syndication_updated_since_date=syndication_updated_since_date, syndication_updated_before_date=syndication_updated_before_date, syndication_updated_in_range=syndication_updated_in_range, syndication_visible_since_date=syndication_visible_since_date, syndication_visible_before_date=syndication_visible_before_date, syndication_visible_in_range=syndication_visible_in_range, language_id=language_id, language_name=language_name, language_iso_code=language_iso_code, hash=hash, hash_contains=hash_contains, source_id=source_id, source_name=source_name, source_name_contains=source_name_contains, source_acronym=source_acronym, source_acronym_contains=source_acronym_contains, tag_ids=tag_ids, restrict_to_set=restrict_to_set, created_by=created_by)
        print("The response of MediaApi->resources_media_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| The offset of the records set to return for pagination. | [optional] 
 **sort** | **str**| * Set of fields to sort the records by. | [optional] 
 **order** | **str**| * The ascending or descending order. | [optional] 
 **media_types** | **str**| Find all media items belonging to the specified media type[s]. | [optional] 
 **name** | **str**| Find all media items containing the provided name, case insensitive. | [optional] 
 **collection_id** | **int**| Restrict filtering to media items in a specific collection. | [optional] 
 **name_contains** | **str**| Find all media items containing the partial name, case insensitive. | [optional] 
 **description_contains** | **str**| Find all media items containing the provided partial description, case insensitive. | [optional] 
 **source_url** | **str**| Find all media items which have the provided sourceUrl, case insensitive. | [optional] 
 **source_url_contains** | **str**| Find all media items which contain the provided partial sourceUrl, case insensitive. | [optional] 
 **custom_thumbnail_url** | **str**| Find all media items which have the provided customThumbnailUrl, case insensitive. | [optional] 
 **custom_thumbnail_url_contains** | **str**| Find all media items which contain the provided partial customThumbnailUrl, case insensitive. | [optional] 
 **date_content_authored** | **date**| Find all media items authored on the provided day (RFC 3339, time ignored). | [optional] 
 **date_content_updated** | **date**| Find all media items updated on the provided day (RFC 3339, time ignored). | [optional] 
 **date_content_published** | **date**| Find all media items published on the provided day (RFC 3339, time ignored). | [optional] 
 **date_content_reviewed** | **date**| Find all media items reviewed on the provided day (RFC 3339, time ignored). | [optional] 
 **date_syndication_captured** | **date**| Find all media items syndicated on the provided day (RFC 3339, time ignored). | [optional] 
 **date_syndication_updated** | **date**| Find all media items updated through the syndication system on the provided day, (RFC 3339, time ignored). | [optional] 
 **content_authored_since_date** | **date**| Find all media items authored since the provided day (RFC 3339, time ignored). | [optional] 
 **content_authored_before_date** | **date**| Find all media items authored before the provided day (RFC 3339, time ignored). | [optional] 
 **content_authored_in_range** | **str**| Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored). | [optional] 
 **content_updated_since_date** | **date**| Find all media items updated since the provided day (RFC 3339, time ignored). | [optional] 
 **content_updated_before_date** | **date**| Find all media items updated before the provided day (RFC 3339, time ignored). | [optional] 
 **content_updated_in_range** | **str**| Find all media items updated between the provided start and end days (RFC 3339, comma separated, time ignored). | [optional] 
 **content_published_since_date** | **date**| Find all media items updated since the provided day (RFC 3339, time ignored). | [optional] 
 **content_published_before_date** | **date**| Find all media items published before the provided day (RFC 3339, time ignored). | [optional] 
 **content_published_in_range** | **str**| Find all media items published between the provided start and end days (RFC 3339, comma separated, time ignored). | [optional] 
 **content_reviewed_since_date** | **date**| Find all media items reviewed since the provided day (RFC 3339, time ignored). | [optional] 
 **content_reviewed_before_date** | **date**| Find all media items reviewed before the provided day (RFC 3339, time ignored). | [optional] 
 **content_reviewed_in_range** | **str**| Find all media items reviewed between the provided start and end days (RFC 3339, comma separated, time ignored). | [optional] 
 **syndication_captured_since_date** | **date**| Find all media items authored since the provided day (RFC 3339, time ignored). | [optional] 
 **syndication_captured_before_date** | **date**| Find all media items authored before the provided day (RFC 3339, time ignored). | [optional] 
 **syndication_captured_in_range** | **str**| Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored). | [optional] 
 **syndication_updated_since_date** | **date**| Find all media items updated since the provided day, (RFC 3339, time ignored). | [optional] 
 **syndication_updated_before_date** | **date**| Find all media items updated before the provided day, (RFC 3339, time ignored). | [optional] 
 **syndication_updated_in_range** | **str**| Find all media items updated between the provided start and end days, (RFC 3339, comma separated, time ignored). | [optional] 
 **syndication_visible_since_date** | **date**| Find all media items visible since the provided day, (RFC 3339, time ignored). | [optional] 
 **syndication_visible_before_date** | **date**| Find all media items visible before the provided day, (RFC 3339, time ignored). | [optional] 
 **syndication_visible_in_range** | **date**| Find all media items visible between the provided start and end days, (RFC 3339, comma separated, time ignored). | [optional] 
 **language_id** | **int**| Find all media items written in the language specified by Id. | [optional] 
 **language_name** | **str**| Find all media items written in the language specified by name, case insensitive. | [optional] 
 **language_iso_code** | **str**| Find all media items written in the language specified by 639-2 isoCode , case insensitive. | [optional] 
 **hash** | **str**| Find all media items which match the provided hash, case insensitive. | [optional] 
 **hash_contains** | **str**| Find all media items which match the provided partial hash, case insensitive. | [optional] 
 **source_id** | **int**| Find all media items that belong to the source specified by Id. | [optional] 
 **source_name** | **str**| Find all media items that belong to the source specified by name, case insensitive. | [optional] 
 **source_name_contains** | **str**| Find all media items that belong to the source specified by partial name, case insensitive. | [optional] 
 **source_acronym** | **str**| Find all media items that belong to the source specified by acronym, case insensitive. | [optional] 
 **source_acronym_contains** | **str**| Find all media items that belong to the source specified by partial acronym, case insensitive. | [optional] 
 **tag_ids** | **str**| Find only media items tagged with the specified tag Ids. | [optional] 
 **restrict_to_set** | **str**| Find only media from within the supplied list of Ids. | [optional] 
 **created_by** | **str**| Find all media items containing the createdBy value. | [optional] 

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
**200** | Returns the list of MediaItems matching the specified query parameters. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_most_popular_media_format_get**
> List[MediaItemWrapped] resources_media_most_popular_media_format_get(format, max=max, offset=offset)

Get MediaItems by popularity

Get the media with the highest ratings.

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
    api_instance = openapi_client.MediaApi(api_client)
    format = 'format_example' # str | Automatically added
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | The offset of the records set to return for pagination. (optional)

    try:
        # Get MediaItems by popularity
        api_response = api_instance.resources_media_most_popular_media_format_get(format, max=max, offset=offset)
        print("The response of MediaApi->resources_media_most_popular_media_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_most_popular_media_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| Automatically added | 
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| The offset of the records set to return for pagination. | [optional] 

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
**200** | Returns the list of MediaItems with the highest ratings. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_media_search_results_json_get**
> List[MediaItemWrapped] resources_media_search_results_json_get(q, max=max, offset=offset)

Get MediaItems by search query

Full search

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
    api_instance = openapi_client.MediaApi(api_client)
    q = 'q_example' # str | The search query supplied by the user
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | The offset of the records set to return for pagination. (optional)

    try:
        # Get MediaItems by search query
        api_response = api_instance.resources_media_search_results_json_get(q, max=max, offset=offset)
        print("The response of MediaApi->resources_media_search_results_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaApi->resources_media_search_results_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| The search query supplied by the user | 
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| The offset of the records set to return for pagination. | [optional] 

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
**200** | Returns the list of MediaItems matching the search query &#39;q&#39;.&lt;p&gt;Please enter keyword or URL in search query &#39;q&#39;. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

