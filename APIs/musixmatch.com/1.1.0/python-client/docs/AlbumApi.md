# openapi_client.AlbumApi

All URIs are relative to *https://api.musixmatch.com/ws/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**album_get_get**](AlbumApi.md#album_get_get) | **GET** /album.get | 
[**artist_albums_get_get**](AlbumApi.md#artist_albums_get_get) | **GET** /artist.albums.get | 


# **album_get_get**
> AlbumGetGet200Response album_get_get(album_id, format=format, param_callback=param_callback)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.models.album_get_get200_response import AlbumGetGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.musixmatch.com/ws/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.musixmatch.com/ws/1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlbumApi(api_client)
    album_id = 'album_id_example' # str | The musiXmatch album id
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)

    try:
        api_response = api_instance.album_get_get(album_id, format=format, param_callback=param_callback)
        print("The response of AlbumApi->album_get_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumApi->album_get_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **album_id** | **str**| The musiXmatch album id | 
 **format** | **str**| output format: json, jsonp, xml. | [optional] [default to &#39;json&#39;]
 **param_callback** | **str**| jsonp callback | [optional] 

### Return type

[**AlbumGetGet200Response**](AlbumGetGet200Response.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artist_albums_get_get**
> ArtistAlbumsGetGet200Response artist_albums_get_get(artist_id, format=format, param_callback=param_callback, s_release_date=s_release_date, g_album_name=g_album_name, page_size=page_size, page=page)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.models.artist_albums_get_get200_response import ArtistAlbumsGetGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.musixmatch.com/ws/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.musixmatch.com/ws/1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlbumApi(api_client)
    artist_id = 'artist_id_example' # str | The musiXmatch artist id
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)
    s_release_date = 's_release_date_example' # str | Sort by release date (asc|desc) (optional)
    g_album_name = 'g_album_name_example' # str | Group by Album Name (optional)
    page_size = 3.4 # float | Define the page size for paginated results.Range is 1 to 100. (optional)
    page = 3.4 # float | Define the page number for paginated results (optional)

    try:
        api_response = api_instance.artist_albums_get_get(artist_id, format=format, param_callback=param_callback, s_release_date=s_release_date, g_album_name=g_album_name, page_size=page_size, page=page)
        print("The response of AlbumApi->artist_albums_get_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlbumApi->artist_albums_get_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artist_id** | **str**| The musiXmatch artist id | 
 **format** | **str**| output format: json, jsonp, xml. | [optional] [default to &#39;json&#39;]
 **param_callback** | **str**| jsonp callback | [optional] 
 **s_release_date** | **str**| Sort by release date (asc|desc) | [optional] 
 **g_album_name** | **str**| Group by Album Name | [optional] 
 **page_size** | **float**| Define the page size for paginated results.Range is 1 to 100. | [optional] 
 **page** | **float**| Define the page number for paginated results | [optional] 

### Return type

[**ArtistAlbumsGetGet200Response**](ArtistAlbumsGetGet200Response.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

