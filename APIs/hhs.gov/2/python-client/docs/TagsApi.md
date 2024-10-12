# openapi_client.TagsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_tags_format_get**](TagsApi.md#resources_tags_format_get) | **GET** /resources/tags.{format} | Get Tags
[**resources_tags_id_format_get**](TagsApi.md#resources_tags_id_format_get) | **GET** /resources/tags/{id}.{format} | Get Tag by ID
[**resources_tags_id_media_format_get**](TagsApi.md#resources_tags_id_media_format_get) | **GET** /resources/tags/{id}/media.{format} | Get MediaItems for Tag
[**resources_tags_id_related_format_get**](TagsApi.md#resources_tags_id_related_format_get) | **GET** /resources/tags/{id}/related.{format} | Get related Tags by ID
[**resources_tags_id_syndicate_format_get**](TagsApi.md#resources_tags_id_syndicate_format_get) | **GET** /resources/tags/{id}/syndicate.{format} | Get MediaItems for Tag
[**resources_tags_tag_languages_format_get**](TagsApi.md#resources_tags_tag_languages_format_get) | **GET** /resources/tags/tagLanguages.{format} | Get TagLanguages
[**resources_tags_tag_types_format_get**](TagsApi.md#resources_tags_tag_types_format_get) | **GET** /resources/tags/tagTypes.{format} | Get MediaItems for Tag


# **resources_tags_format_get**
> List[TagMarshallerWrapped] resources_tags_format_get(format, sort=sort, max=max, offset=offset, name=name, name_contains=name_contains, media_id=media_id, type_id=type_id, type_name=type_name)

Get Tags

List of Tags

### Example


```python
import openapi_client
from openapi_client.models.tag_marshaller_wrapped import TagMarshallerWrapped
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
    api_instance = openapi_client.TagsApi(api_client)
    format = 'format_example' # str | Automatically added
    sort = 'sort_example' # str | The name of the property to which sorting will be applied (optional)
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | Return records starting at the offset index. (optional)
    name = 'name_example' # str | Return tags[s] matching the supplied name (optional)
    name_contains = 'name_contains_example' # str | Return tags which contain the supplied partial name. (optional)
    media_id = 56 # int | Return tags associated with the supplied media id. (optional)
    type_id = 56 # int | Return tags belonging to the supplied tag type id. (optional)
    type_name = 'type_name_example' # str | Return tags belonging to the supplied tag type name. (optional)

    try:
        # Get Tags
        api_response = api_instance.resources_tags_format_get(format, sort=sort, max=max, offset=offset, name=name, name_contains=name_contains, media_id=media_id, type_id=type_id, type_name=type_name)
        print("The response of TagsApi->resources_tags_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->resources_tags_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| Automatically added | 
 **sort** | **str**| The name of the property to which sorting will be applied | [optional] 
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| Return records starting at the offset index. | [optional] 
 **name** | **str**| Return tags[s] matching the supplied name | [optional] 
 **name_contains** | **str**| Return tags which contain the supplied partial name. | [optional] 
 **media_id** | **int**| Return tags associated with the supplied media id. | [optional] 
 **type_id** | **int**| Return tags belonging to the supplied tag type id. | [optional] 
 **type_name** | **str**| Return tags belonging to the supplied tag type name. | [optional] 

### Return type

[**List[TagMarshallerWrapped]**](TagMarshallerWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of Tags matching the specified query parameters in the specified &#39;format&#39;. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_tags_id_format_get**
> List[TagMarshallerWrapped] resources_tags_id_format_get(id, format)

Get Tag by ID

Information about a specific tag

### Example


```python
import openapi_client
from openapi_client.models.tag_marshaller_wrapped import TagMarshallerWrapped
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
    api_instance = openapi_client.TagsApi(api_client)
    id = 56 # int | The id of the record to look up
    format = 'format_example' # str | Automatically added

    try:
        # Get Tag by ID
        api_response = api_instance.resources_tags_id_format_get(id, format)
        print("The response of TagsApi->resources_tags_id_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->resources_tags_id_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the record to look up | 
 **format** | **str**| Automatically added | 

### Return type

[**List[TagMarshallerWrapped]**](TagMarshallerWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the Tag identified by the &#39;id&#39; in the specified &#39;format&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_tags_id_media_format_get**
> List[MediaItemWrapped] resources_tags_id_media_format_get(id, format, sort=sort, max=max, offset=offset)

Get MediaItems for Tag

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
    api_instance = openapi_client.TagsApi(api_client)
    id = 56 # int | The id of the tag to look up
    format = 'format_example' # str | Automatically added
    sort = 'sort_example' # str | The name of the property to which sorting will be applied (optional)
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | Return records starting at the offset index. (optional)

    try:
        # Get MediaItems for Tag
        api_response = api_instance.resources_tags_id_media_format_get(id, format, sort=sort, max=max, offset=offset)
        print("The response of TagsApi->resources_tags_id_media_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->resources_tags_id_media_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the tag to look up | 
 **format** | **str**| Automatically added | 
 **sort** | **str**| The name of the property to which sorting will be applied | [optional] 
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| Return records starting at the offset index. | [optional] 

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
**200** | Returns the list of MediaItems associated with the Tag identified by the &#39;id&#39;. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_tags_id_related_format_get**
> List[TagMarshallerWrapped] resources_tags_id_related_format_get(id, format, sort=sort, max=max, offset=offset)

Get related Tags by ID

Information about related tags to a specific tag

### Example


```python
import openapi_client
from openapi_client.models.tag_marshaller_wrapped import TagMarshallerWrapped
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
    api_instance = openapi_client.TagsApi(api_client)
    id = 56 # int | The id of the tag to look up
    format = 'format_example' # str | Automatically added
    sort = 'sort_example' # str | The name of the property to which sorting will be applied (optional)
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | Return records starting at the offset index. (optional)

    try:
        # Get related Tags by ID
        api_response = api_instance.resources_tags_id_related_format_get(id, format, sort=sort, max=max, offset=offset)
        print("The response of TagsApi->resources_tags_id_related_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->resources_tags_id_related_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the tag to look up | 
 **format** | **str**| Automatically added | 
 **sort** | **str**| The name of the property to which sorting will be applied | [optional] 
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| Return records starting at the offset index. | [optional] 

### Return type

[**List[TagMarshallerWrapped]**](TagMarshallerWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of Tags related to the Tag identified by the &#39;id&#39; in the specified format. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_tags_id_syndicate_format_get**
> str resources_tags_id_syndicate_format_get(id, format, display_method=display_method)

Get MediaItems for Tag

MediaItem

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
    api_instance = openapi_client.TagsApi(api_client)
    id = 56 # int | The id of the record to look up
    format = 'format_example' # str | Automatically added
    display_method = 'display_method_example' # str | Method used to render an html request. Accepts one: [mv, list, feed] (optional)

    try:
        # Get MediaItems for Tag
        api_response = api_instance.resources_tags_id_syndicate_format_get(id, format, display_method=display_method)
        print("The response of TagsApi->resources_tags_id_syndicate_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->resources_tags_id_syndicate_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the record to look up | 
 **format** | **str**| Automatically added | 
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
**200** | Renders the list of MediaItems associated with the Tag identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_tags_tag_languages_format_get**
> List[TagLanguageMarshallerWrapped] resources_tags_tag_languages_format_get(format)

Get TagLanguages

List of Tag Languages

### Example


```python
import openapi_client
from openapi_client.models.tag_language_marshaller_wrapped import TagLanguageMarshallerWrapped
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
    api_instance = openapi_client.TagsApi(api_client)
    format = 'format_example' # str | Automatically added

    try:
        # Get TagLanguages
        api_response = api_instance.resources_tags_tag_languages_format_get(format)
        print("The response of TagsApi->resources_tags_tag_languages_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->resources_tags_tag_languages_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| Automatically added | 

### Return type

[**List[TagLanguageMarshallerWrapped]**](TagLanguageMarshallerWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of TagLanguages |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_tags_tag_types_format_get**
> List[TagTypeMarshallerWrapped] resources_tags_tag_types_format_get(format)

Get MediaItems for Tag

List of Types

### Example


```python
import openapi_client
from openapi_client.models.tag_type_marshaller_wrapped import TagTypeMarshallerWrapped
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
    api_instance = openapi_client.TagsApi(api_client)
    format = 'format_example' # str | Automatically added

    try:
        # Get MediaItems for Tag
        api_response = api_instance.resources_tags_tag_types_format_get(format)
        print("The response of TagsApi->resources_tags_tag_types_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->resources_tags_tag_types_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| Automatically added | 

### Return type

[**List[TagTypeMarshallerWrapped]**](TagTypeMarshallerWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Renders the list of MediaItems associated with the Tag identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

