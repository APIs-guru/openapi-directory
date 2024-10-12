# openapi_client.PublicApi

All URIs are relative to *https://api.flickr.com/services*

Method | HTTP request | Description
------------- | ------------- | -------------
[**echo**](PublicApi.md#echo) | **GET** /rest?method&#x3D;flickr.test.echo | 
[**get_access_token**](PublicApi.md#get_access_token) | **GET** /oauth/access_token | 
[**get_album_by_id**](PublicApi.md#get_album_by_id) | **GET** /rest?method&#x3D;flickr.photosets.getPhotos | 
[**get_album_context_by_id**](PublicApi.md#get_album_context_by_id) | **GET** /rest?method&#x3D;flickr.photosets.getContext | 
[**get_albums_by_person_id**](PublicApi.md#get_albums_by_person_id) | **GET** /rest?method&#x3D;flickr.photosets.getList | 
[**get_favorites_by_person_id**](PublicApi.md#get_favorites_by_person_id) | **GET** /rest?method&#x3D;flickr.favorites.getList | 
[**get_favorites_context_by_id**](PublicApi.md#get_favorites_context_by_id) | **GET** /rest?method&#x3D;flickr.favorites.getContext | 
[**get_gallery_photos_by_id**](PublicApi.md#get_gallery_photos_by_id) | **GET** /rest?method&#x3D;flickr.galleries.getPhotos | 
[**get_group_by_id**](PublicApi.md#get_group_by_id) | **GET** /rest?method&#x3D;flickr.groups.getInfo | 
[**get_group_discussions_by_id**](PublicApi.md#get_group_discussions_by_id) | **GET** /rest?method&#x3D;flickr.groups.discuss.topics.getList | 
[**get_group_photos_by_id**](PublicApi.md#get_group_photos_by_id) | **GET** /rest?method&#x3D;flickr.groups.pools.getPhotos | 
[**get_group_topic_by_id**](PublicApi.md#get_group_topic_by_id) | **GET** /rest?method&#x3D;flickr.groups.discuss.topics.getInfo | 
[**get_group_topic_replies_by_id**](PublicApi.md#get_group_topic_replies_by_id) | **GET** /rest?method&#x3D;flickr.groups.discuss.replies.getInfo | 
[**get_license_by_id**](PublicApi.md#get_license_by_id) | **GET** /rest?method&#x3D;flickr.photos.licenses.getInfo | 
[**get_media_by_person_id**](PublicApi.md#get_media_by_person_id) | **GET** /rest?method&#x3D;flickr.people.getPhotos | 
[**get_media_by_search**](PublicApi.md#get_media_by_search) | **GET** /rest?method&#x3D;flickr.photos.search | 
[**get_person_by_id**](PublicApi.md#get_person_by_id) | **GET** /rest?method&#x3D;flickr.people.getInfo | 
[**get_photo_by_id**](PublicApi.md#get_photo_by_id) | **GET** /rest?method&#x3D;flickr.photos.getInfo | 
[**get_photo_exif_by_id**](PublicApi.md#get_photo_exif_by_id) | **GET** /rest?method&#x3D;flickr.photos.getExif | 
[**get_photo_sizes_by_id**](PublicApi.md#get_photo_sizes_by_id) | **GET** /rest?method&#x3D;flickr.photos.getSizes | 
[**get_photolist_context_by_id**](PublicApi.md#get_photolist_context_by_id) | **GET** /rest?method&#x3D;flickr.photolist.getContext | 
[**get_photostream_context_by_id**](PublicApi.md#get_photostream_context_by_id) | **GET** /rest?method&#x3D;flickr.photos.getContext | 
[**get_request_token**](PublicApi.md#get_request_token) | **GET** /oauth/request_token | 
[**restmethodflickr_groups_pools_get_context_get**](PublicApi.md#restmethodflickr_groups_pools_get_context_get) | **GET** /rest?method&#x3D;flickr.groups.pools.getContext | 
[**upload_photo**](PublicApi.md#upload_photo) | **POST** /upload | 


# **echo**
> Echo200Response echo(api_key, echo=echo)



Echos the input parameters back in the response

### Example


```python
import openapi_client
from openapi_client.models.echo200_response import Echo200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    echo = 'echo_example' # str |  (optional)

    try:
        api_response = api_instance.echo(api_key, echo=echo)
        print("The response of PublicApi->echo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->echo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **echo** | **str**|  | [optional] 

### Return type

[**Echo200Response**](Echo200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_access_token**
> str get_access_token(oauth_consumer_key, oauth_nonce, oauth_timestamp, oauth_signature_method, oauth_version, oauth_signature, oauth_verifier, oauth_token)



Returns an access token

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    oauth_consumer_key = 'oauth_consumer_key_example' # str | 
    oauth_nonce = 'oauth_nonce_example' # str | 
    oauth_timestamp = 'oauth_timestamp_example' # str | 
    oauth_signature_method = 'oauth_signature_method_example' # str | 
    oauth_version = 'oauth_version_example' # str | 
    oauth_signature = 'oauth_signature_example' # str | 
    oauth_verifier = 'oauth_verifier_example' # str | 
    oauth_token = 'oauth_token_example' # str | 

    try:
        api_response = api_instance.get_access_token(oauth_consumer_key, oauth_nonce, oauth_timestamp, oauth_signature_method, oauth_version, oauth_signature, oauth_verifier, oauth_token)
        print("The response of PublicApi->get_access_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_consumer_key** | **str**|  | 
 **oauth_nonce** | **str**|  | 
 **oauth_timestamp** | **str**|  | 
 **oauth_signature_method** | **str**|  | 
 **oauth_version** | **str**|  | 
 **oauth_signature** | **str**|  | 
 **oauth_verifier** | **str**|  | 
 **oauth_token** | **str**|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_album_by_id**
> GetAlbumByID200Response get_album_by_id(api_key, photoset_id)



Returns a list of photos in an album.

### Example


```python
import openapi_client
from openapi_client.models.get_album_by_id200_response import GetAlbumByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    photoset_id = 'photoset_id_example' # str | 

    try:
        api_response = api_instance.get_album_by_id(api_key, photoset_id)
        print("The response of PublicApi->get_album_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_album_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **photoset_id** | **str**|  | 

### Return type

[**GetAlbumByID200Response**](GetAlbumByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_album_context_by_id**
> GetFavoritesContextByID200Response get_album_context_by_id(api_key, photo_id, photoset_id=photoset_id)



Returns next and previous photos for a photo in a set

### Example


```python
import openapi_client
from openapi_client.models.get_favorites_context_by_id200_response import GetFavoritesContextByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    photo_id = 'photo_id_example' # str | 
    photoset_id = 'photoset_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_album_context_by_id(api_key, photo_id, photoset_id=photoset_id)
        print("The response of PublicApi->get_album_context_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_album_context_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **photo_id** | **str**|  | 
 **photoset_id** | **str**|  | [optional] 

### Return type

[**GetFavoritesContextByID200Response**](GetFavoritesContextByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_albums_by_person_id**
> GetAlbumsByPersonID200Response get_albums_by_person_id(api_key, user_id, page=page, per_page=per_page)



Returns the albums belonging to the specified user

### Example


```python
import openapi_client
from openapi_client.models.get_albums_by_person_id200_response import GetAlbumsByPersonID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    user_id = 'user_id_example' # str | 
    page = 3.4 # float |  (optional)
    per_page = 3.4 # float |  (optional)

    try:
        api_response = api_instance.get_albums_by_person_id(api_key, user_id, page=page, per_page=per_page)
        print("The response of PublicApi->get_albums_by_person_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_albums_by_person_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **user_id** | **str**|  | 
 **page** | **float**|  | [optional] 
 **per_page** | **float**|  | [optional] 

### Return type

[**GetAlbumsByPersonID200Response**](GetAlbumsByPersonID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_favorites_by_person_id**
> GetFavoritesByPersonID200Response get_favorites_by_person_id(api_key, user_id, min_fave_date=min_fave_date, max_fave_date=max_fave_date, page=page, per_page=per_page)



Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.

### Example


```python
import openapi_client
from openapi_client.models.get_favorites_by_person_id200_response import GetFavoritesByPersonID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    user_id = 'user_id_example' # str | 
    min_fave_date = 3.4 # float |  (optional)
    max_fave_date = 3.4 # float |  (optional)
    page = 3.4 # float |  (optional)
    per_page = 3.4 # float |  (optional)

    try:
        api_response = api_instance.get_favorites_by_person_id(api_key, user_id, min_fave_date=min_fave_date, max_fave_date=max_fave_date, page=page, per_page=per_page)
        print("The response of PublicApi->get_favorites_by_person_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_favorites_by_person_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **user_id** | **str**|  | 
 **min_fave_date** | **float**|  | [optional] 
 **max_fave_date** | **float**|  | [optional] 
 **page** | **float**|  | [optional] 
 **per_page** | **float**|  | [optional] 

### Return type

[**GetFavoritesByPersonID200Response**](GetFavoritesByPersonID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_favorites_context_by_id**
> GetFavoritesContextByID200Response get_favorites_context_by_id(api_key, photo_id, user_id=user_id)



Returns next and previous favorites for a photo in a user's favorites

### Example


```python
import openapi_client
from openapi_client.models.get_favorites_context_by_id200_response import GetFavoritesContextByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    photo_id = 'photo_id_example' # str | 
    user_id = 'user_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_favorites_context_by_id(api_key, photo_id, user_id=user_id)
        print("The response of PublicApi->get_favorites_context_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_favorites_context_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **photo_id** | **str**|  | 
 **user_id** | **str**|  | [optional] 

### Return type

[**GetFavoritesContextByID200Response**](GetFavoritesContextByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_gallery_photos_by_id**
> GetGalleryPhotosByID200Response get_gallery_photos_by_id(api_key, gallery_id)



Returns a list of photos in a gallery.

### Example


```python
import openapi_client
from openapi_client.models.get_gallery_photos_by_id200_response import GetGalleryPhotosByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    gallery_id = 'gallery_id_example' # str | 

    try:
        api_response = api_instance.get_gallery_photos_by_id(api_key, gallery_id)
        print("The response of PublicApi->get_gallery_photos_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_gallery_photos_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **gallery_id** | **str**|  | 

### Return type

[**GetGalleryPhotosByID200Response**](GetGalleryPhotosByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_group_by_id**
> GetGroupByID200Response get_group_by_id(api_key, group_id=group_id, group_path_alias=group_path_alias, lang=lang)



Get information about a group

### Example


```python
import openapi_client
from openapi_client.models.get_group_by_id200_response import GetGroupByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    group_id = 'group_id_example' # str |  (optional)
    group_path_alias = 'group_path_alias_example' # str |  (optional)
    lang = 'lang_example' # str |  (optional)

    try:
        api_response = api_instance.get_group_by_id(api_key, group_id=group_id, group_path_alias=group_path_alias, lang=lang)
        print("The response of PublicApi->get_group_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_group_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **group_id** | **str**|  | [optional] 
 **group_path_alias** | **str**|  | [optional] 
 **lang** | **str**|  | [optional] 

### Return type

[**GetGroupByID200Response**](GetGroupByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_group_discussions_by_id**
> GetGroupDiscussionsByID200Response get_group_discussions_by_id(api_key, group_id=group_id, page=page, per_page=per_page)



Get a list of discussion topics in a group.

### Example


```python
import openapi_client
from openapi_client.models.get_group_discussions_by_id200_response import GetGroupDiscussionsByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    group_id = 'group_id_example' # str |  (optional)
    page = 3.4 # float |  (optional)
    per_page = 3.4 # float |  (optional)

    try:
        api_response = api_instance.get_group_discussions_by_id(api_key, group_id=group_id, page=page, per_page=per_page)
        print("The response of PublicApi->get_group_discussions_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_group_discussions_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **group_id** | **str**|  | [optional] 
 **page** | **float**|  | [optional] 
 **per_page** | **float**|  | [optional] 

### Return type

[**GetGroupDiscussionsByID200Response**](GetGroupDiscussionsByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_group_photos_by_id**
> GetGalleryPhotosByID200Response get_group_photos_by_id(api_key, group_id=group_id)



Returns a list of pool photos for a given group

### Example


```python
import openapi_client
from openapi_client.models.get_gallery_photos_by_id200_response import GetGalleryPhotosByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    group_id = 'group_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_group_photos_by_id(api_key, group_id=group_id)
        print("The response of PublicApi->get_group_photos_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_group_photos_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **group_id** | **str**|  | [optional] 

### Return type

[**GetGalleryPhotosByID200Response**](GetGalleryPhotosByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_group_topic_by_id**
> GetGroupTopicByID200Response get_group_topic_by_id(api_key, topic_id, group_id=group_id)



Get information about a group discussion topic

### Example


```python
import openapi_client
from openapi_client.models.get_group_topic_by_id200_response import GetGroupTopicByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    topic_id = 'topic_id_example' # str | 
    group_id = 'group_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_group_topic_by_id(api_key, topic_id, group_id=group_id)
        print("The response of PublicApi->get_group_topic_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_group_topic_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **topic_id** | **str**|  | 
 **group_id** | **str**|  | [optional] 

### Return type

[**GetGroupTopicByID200Response**](GetGroupTopicByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_group_topic_replies_by_id**
> GetGroupTopicRepliesByID200Response get_group_topic_replies_by_id(api_key, topic_id, reply_id, group_id=group_id)



Get information on a group topic reply

### Example


```python
import openapi_client
from openapi_client.models.get_group_topic_replies_by_id200_response import GetGroupTopicRepliesByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    topic_id = 'topic_id_example' # str | 
    reply_id = 'reply_id_example' # str | 
    group_id = 'group_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_group_topic_replies_by_id(api_key, topic_id, reply_id, group_id=group_id)
        print("The response of PublicApi->get_group_topic_replies_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_group_topic_replies_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **topic_id** | **str**|  | 
 **reply_id** | **str**|  | 
 **group_id** | **str**|  | [optional] 

### Return type

[**GetGroupTopicRepliesByID200Response**](GetGroupTopicRepliesByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_license_by_id**
> GetLicenseByID200Response get_license_by_id(api_key)



Fetches a list of available photo licenses for Flickr

### Example


```python
import openapi_client
from openapi_client.models.get_license_by_id200_response import GetLicenseByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 

    try:
        api_response = api_instance.get_license_by_id(api_key)
        print("The response of PublicApi->get_license_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_license_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 

### Return type

[**GetLicenseByID200Response**](GetLicenseByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_media_by_person_id**
> GetFavoritesByPersonID200Response get_media_by_person_id(api_key, user_id, safe_search=safe_search, min_upload_date=min_upload_date, max_upload_date=max_upload_date, min_taken_date=min_taken_date, max_taken_date=max_taken_date, content_type=content_type, privacy_filter=privacy_filter, page=page, per_page=per_page)



Return photos from the given user's photostream

### Example


```python
import openapi_client
from openapi_client.models.get_favorites_by_person_id200_response import GetFavoritesByPersonID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    user_id = 'user_id_example' # str | 
    safe_search = 3.4 # float |  (optional)
    min_upload_date = 3.4 # float |  (optional)
    max_upload_date = 3.4 # float |  (optional)
    min_taken_date = 3.4 # float |  (optional)
    max_taken_date = 3.4 # float |  (optional)
    content_type = 3.4 # float |  (optional)
    privacy_filter = 3.4 # float |  (optional)
    page = 3.4 # float |  (optional)
    per_page = 3.4 # float |  (optional)

    try:
        api_response = api_instance.get_media_by_person_id(api_key, user_id, safe_search=safe_search, min_upload_date=min_upload_date, max_upload_date=max_upload_date, min_taken_date=min_taken_date, max_taken_date=max_taken_date, content_type=content_type, privacy_filter=privacy_filter, page=page, per_page=per_page)
        print("The response of PublicApi->get_media_by_person_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_media_by_person_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **user_id** | **str**|  | 
 **safe_search** | **float**|  | [optional] 
 **min_upload_date** | **float**|  | [optional] 
 **max_upload_date** | **float**|  | [optional] 
 **min_taken_date** | **float**|  | [optional] 
 **max_taken_date** | **float**|  | [optional] 
 **content_type** | **float**|  | [optional] 
 **privacy_filter** | **float**|  | [optional] 
 **page** | **float**|  | [optional] 
 **per_page** | **float**|  | [optional] 

### Return type

[**GetFavoritesByPersonID200Response**](GetFavoritesByPersonID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_media_by_search**
> GetFavoritesByPersonID200Response get_media_by_search(api_key, text=text, tags=tags, user_id=user_id, min_upload_date=min_upload_date, max_upload_date=max_upload_date, min_taken_date=min_taken_date, max_taken_date=max_taken_date, license=license, sort=sort, privacy_filter=privacy_filter, bbox=bbox, accuracy=accuracy, safe_search=safe_search, content_type=content_type, machine_tags=machine_tags, machine_tag_mode=machine_tag_mode, group_id=group_id, contacts=contacts, woe_id=woe_id, place_id=place_id, media=media, has_geo=has_geo, geo_context=geo_context, lat=lat, lon=lon, radius=radius, radius_units=radius_units, is_commons=is_commons, in_gallery=in_gallery, is_getty=is_getty, per_page=per_page, page=page)



Return a list of photos matching some criteria.

### Example


```python
import openapi_client
from openapi_client.models.get_favorites_by_person_id200_response import GetFavoritesByPersonID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    text = 'text_example' # str | A free text search. Photos who's title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character. (optional)
    tags = 'tags_example' # str | A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character. (optional)
    user_id = 'user_id_example' # str | The NSID of the user who's photo to search. If this parameter isn't passed then everybody's public photos will be searched. A value of \"me\" will search against the calling user's photos for authenticated calls. (optional)
    min_upload_date = 'min_upload_date_example' # str | Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime. (optional)
    max_upload_date = 'max_upload_date_example' # str | Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime. (optional)
    min_taken_date = 'min_taken_date_example' # str | Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp. (optional)
    max_taken_date = 'max_taken_date_example' # str | Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp. (optional)
    license = 'license_example' # str | The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated. (optional)
    sort = 'sort_example' # str | The order in which to sort returned photos. Deafults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are:   date-posted-asc,   date-posted-desc,   date-taken-asc,   date-taken-desc,   interestingness-desc,   interestingness-asc, and   relevance.  (optional)
    privacy_filter = 3.4 # float | Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:,   1: public photos,   2: private photos visible to friends,   3: private photos visible to family,   4: private photos visible to friends & family,   5: completely private photos  (optional)
    bbox = 'bbox_example' # str | A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched. (optional)
    accuracy = 'accuracy_example' # str | Recorded accuracy level of the location information. Current range is 1-16:   World level is 1   Country is ~3   Region is ~6   City is ~11   Street is ~16  (optional)
    safe_search = 3.4 # float | Safe search setting:   1: for safe,   2: for moderate,   3: for restricted  (optional)
    content_type = 3.4 # float | Content Type setting:   1: photos only.   2: screenshots only.   3: 'other' only.   4: photos and screenshots.   5: screenshots and 'other'.   6: photos and 'other'.   7: photos, screenshots, and 'other' (all).  (optional)
    machine_tags = 'machine_tags_example' # str | Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties : Find photos using the 'dc' namespace : \"machine_tags\" => \"dc:\" Find photos with a title in the 'dc' namespace : \"machine_tags\" => \"dc:title=\" Find photos titled \"mr. camera\" in the 'dc' namespace : \"machine_tags\" => \"dc:title=\\\"mr. camera\\\" Find photos whose value is \"mr. camera\" : \"machine_tags\" => \"*:*=\\\"mr. camera\\\"\" Find photos that have a title, in any namespace : \"machine_tags\" => \"*:title=\" Find photos that have a title, in any namespace, whose value is \"mr. camera\" : \"machine_tags\" => \"*:title=\\\"mr. camera\\\"\" Find photos, in the 'dc' namespace whose value is \"mr. camera\" : \"machine_tags\" => \"dc:*=\\\"mr. camera\\\"\" Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. \"AND\" queries are limited to (16) machine tags. \"OR\" queries are limited to (8).  (optional)
    machine_tag_mode = 'machine_tag_mode_example' # str | Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified. (optional)
    group_id = 'group_id_example' # str | The id of a group who's pool to search. If specified, only matching photos posted to the group's pool will be returned. (optional)
    contacts = 'contacts_example' # str | Search your contacts. Either 'all' or 'ff' for just friends and family. (Experimental) (optional)
    woe_id = 'woe_id_example' # str | A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present). (optional)
    place_id = 'place_id_example' # str | A Flickr place id. (not used if bbox argument is present). Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).  (optional)
    media = 'media_example' # str | Filter results by media type. Possible values are all (default), photos or videos (optional)
    has_geo = 'has_geo_example' # str | Any photo that has been geotagged, or if the value is \"0\" any photo that has not been geotagged. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).  (optional)
    geo_context = 'geo_context_example' # str | Geo context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken \"indoors\" or \"outdoors\". The current list of context IDs is: 0, not defined. 1, indoors. 2, outdoors. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).  (optional)
    lat = 'lat_example' # str | A valid latitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).  (optional)
    lon = 'lon_example' # str | A valid longitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).  (optional)
    radius = 3.4 # float | A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km). (optional)
    radius_units = 'radius_units_example' # str | The unit of measure when doing radial geo queries. Valid options are \"mi\" (miles) and \"km\" (kilometers). The default is \"km\". (optional)
    is_commons = True # bool | Limit the scope of the search to only photos that are part of the Flickr Commons project. Default is false. (optional)
    in_gallery = True # bool | Limit the scope of the search to only photos that are in a gallery? Default is false, search all photos. (optional)
    is_getty = True # bool | Limit the scope of the search to only photos that are for sale on Getty. Default is false. (optional)
    per_page = 3.4 # float | Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500. (optional)
    page = 3.4 # float | The page of results to return. If this argument is omitted, it defaults to 1. (optional)

    try:
        api_response = api_instance.get_media_by_search(api_key, text=text, tags=tags, user_id=user_id, min_upload_date=min_upload_date, max_upload_date=max_upload_date, min_taken_date=min_taken_date, max_taken_date=max_taken_date, license=license, sort=sort, privacy_filter=privacy_filter, bbox=bbox, accuracy=accuracy, safe_search=safe_search, content_type=content_type, machine_tags=machine_tags, machine_tag_mode=machine_tag_mode, group_id=group_id, contacts=contacts, woe_id=woe_id, place_id=place_id, media=media, has_geo=has_geo, geo_context=geo_context, lat=lat, lon=lon, radius=radius, radius_units=radius_units, is_commons=is_commons, in_gallery=in_gallery, is_getty=is_getty, per_page=per_page, page=page)
        print("The response of PublicApi->get_media_by_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_media_by_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **text** | **str**| A free text search. Photos who&#39;s title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character. | [optional] 
 **tags** | **str**| A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character. | [optional] 
 **user_id** | **str**| The NSID of the user who&#39;s photo to search. If this parameter isn&#39;t passed then everybody&#39;s public photos will be searched. A value of \&quot;me\&quot; will search against the calling user&#39;s photos for authenticated calls. | [optional] 
 **min_upload_date** | **str**| Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime. | [optional] 
 **max_upload_date** | **str**| Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime. | [optional] 
 **min_taken_date** | **str**| Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp. | [optional] 
 **max_taken_date** | **str**| Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp. | [optional] 
 **license** | **str**| The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated. | [optional] 
 **sort** | **str**| The order in which to sort returned photos. Deafults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are:   date-posted-asc,   date-posted-desc,   date-taken-asc,   date-taken-desc,   interestingness-desc,   interestingness-asc, and   relevance.  | [optional] 
 **privacy_filter** | **float**| Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:,   1: public photos,   2: private photos visible to friends,   3: private photos visible to family,   4: private photos visible to friends &amp; family,   5: completely private photos  | [optional] 
 **bbox** | **str**| A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched. | [optional] 
 **accuracy** | **str**| Recorded accuracy level of the location information. Current range is 1-16:   World level is 1   Country is ~3   Region is ~6   City is ~11   Street is ~16  | [optional] 
 **safe_search** | **float**| Safe search setting:   1: for safe,   2: for moderate,   3: for restricted  | [optional] 
 **content_type** | **float**| Content Type setting:   1: photos only.   2: screenshots only.   3: &#39;other&#39; only.   4: photos and screenshots.   5: screenshots and &#39;other&#39;.   6: photos and &#39;other&#39;.   7: photos, screenshots, and &#39;other&#39; (all).  | [optional] 
 **machine_tags** | **str**| Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties : Find photos using the &#39;dc&#39; namespace : \&quot;machine_tags\&quot; &#x3D;&gt; \&quot;dc:\&quot; Find photos with a title in the &#39;dc&#39; namespace : \&quot;machine_tags\&quot; &#x3D;&gt; \&quot;dc:title&#x3D;\&quot; Find photos titled \&quot;mr. camera\&quot; in the &#39;dc&#39; namespace : \&quot;machine_tags\&quot; &#x3D;&gt; \&quot;dc:title&#x3D;\\\&quot;mr. camera\\\&quot; Find photos whose value is \&quot;mr. camera\&quot; : \&quot;machine_tags\&quot; &#x3D;&gt; \&quot;*:*&#x3D;\\\&quot;mr. camera\\\&quot;\&quot; Find photos that have a title, in any namespace : \&quot;machine_tags\&quot; &#x3D;&gt; \&quot;*:title&#x3D;\&quot; Find photos that have a title, in any namespace, whose value is \&quot;mr. camera\&quot; : \&quot;machine_tags\&quot; &#x3D;&gt; \&quot;*:title&#x3D;\\\&quot;mr. camera\\\&quot;\&quot; Find photos, in the &#39;dc&#39; namespace whose value is \&quot;mr. camera\&quot; : \&quot;machine_tags\&quot; &#x3D;&gt; \&quot;dc:*&#x3D;\\\&quot;mr. camera\\\&quot;\&quot; Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. \&quot;AND\&quot; queries are limited to (16) machine tags. \&quot;OR\&quot; queries are limited to (8).  | [optional] 
 **machine_tag_mode** | **str**| Either &#39;any&#39; for an OR combination of tags, or &#39;all&#39; for an AND combination. Defaults to &#39;any&#39; if not specified. | [optional] 
 **group_id** | **str**| The id of a group who&#39;s pool to search. If specified, only matching photos posted to the group&#39;s pool will be returned. | [optional] 
 **contacts** | **str**| Search your contacts. Either &#39;all&#39; or &#39;ff&#39; for just friends and family. (Experimental) | [optional] 
 **woe_id** | **str**| A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present). | [optional] 
 **place_id** | **str**| A Flickr place id. (not used if bbox argument is present). Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \&quot;parameterless searches\&quot; for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).  | [optional] 
 **media** | **str**| Filter results by media type. Possible values are all (default), photos or videos | [optional] 
 **has_geo** | **str**| Any photo that has been geotagged, or if the value is \&quot;0\&quot; any photo that has not been geotagged. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \&quot;parameterless searches\&quot; for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).  | [optional] 
 **geo_context** | **str**| Geo context is a numeric value representing the photo&#39;s geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken \&quot;indoors\&quot; or \&quot;outdoors\&quot;. The current list of context IDs is: 0, not defined. 1, indoors. 2, outdoors. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \&quot;parameterless searches\&quot; for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).  | [optional] 
 **lat** | **str**| A valid latitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \&quot;parameterless searches\&quot; for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).  | [optional] 
 **lon** | **str**| A valid longitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \&quot;parameterless searches\&quot; for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).  | [optional] 
 **radius** | **float**| A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km). | [optional] 
 **radius_units** | **str**| The unit of measure when doing radial geo queries. Valid options are \&quot;mi\&quot; (miles) and \&quot;km\&quot; (kilometers). The default is \&quot;km\&quot;. | [optional] 
 **is_commons** | **bool**| Limit the scope of the search to only photos that are part of the Flickr Commons project. Default is false. | [optional] 
 **in_gallery** | **bool**| Limit the scope of the search to only photos that are in a gallery? Default is false, search all photos. | [optional] 
 **is_getty** | **bool**| Limit the scope of the search to only photos that are for sale on Getty. Default is false. | [optional] 
 **per_page** | **float**| Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500. | [optional] 
 **page** | **float**| The page of results to return. If this argument is omitted, it defaults to 1. | [optional] 

### Return type

[**GetFavoritesByPersonID200Response**](GetFavoritesByPersonID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_person_by_id**
> GetPersonByID200Response get_person_by_id(api_key, user_id=user_id)



Returns a person

### Example


```python
import openapi_client
from openapi_client.models.get_person_by_id200_response import GetPersonByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    user_id = 'user_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_person_by_id(api_key, user_id=user_id)
        print("The response of PublicApi->get_person_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_person_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **user_id** | **str**|  | [optional] 

### Return type

[**GetPersonByID200Response**](GetPersonByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_photo_by_id**
> GetPhotoByID200Response get_photo_by_id(api_key, photo_id)



Returns a photo

### Example


```python
import openapi_client
from openapi_client.models.get_photo_by_id200_response import GetPhotoByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    photo_id = 'photo_id_example' # str | 

    try:
        api_response = api_instance.get_photo_by_id(api_key, photo_id)
        print("The response of PublicApi->get_photo_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_photo_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **photo_id** | **str**|  | 

### Return type

[**GetPhotoByID200Response**](GetPhotoByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a photo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_photo_exif_by_id**
> GetPhotoExifByID200Response get_photo_exif_by_id(api_key, photo_id, secret=secret)



Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.

### Example


```python
import openapi_client
from openapi_client.models.get_photo_exif_by_id200_response import GetPhotoExifByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    photo_id = 'photo_id_example' # str | 
    secret = 'secret_example' # str |  (optional)

    try:
        api_response = api_instance.get_photo_exif_by_id(api_key, photo_id, secret=secret)
        print("The response of PublicApi->get_photo_exif_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_photo_exif_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **photo_id** | **str**|  | 
 **secret** | **str**|  | [optional] 

### Return type

[**GetPhotoExifByID200Response**](GetPhotoExifByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_photo_sizes_by_id**
> GetPhotoSizesByID200Response get_photo_sizes_by_id(api_key, photo_id)



Returns photo sizes

### Example


```python
import openapi_client
from openapi_client.models.get_photo_sizes_by_id200_response import GetPhotoSizesByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    photo_id = 'photo_id_example' # str | 

    try:
        api_response = api_instance.get_photo_sizes_by_id(api_key, photo_id)
        print("The response of PublicApi->get_photo_sizes_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_photo_sizes_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **photo_id** | **str**|  | 

### Return type

[**GetPhotoSizesByID200Response**](GetPhotoSizesByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Photo sizes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_photolist_context_by_id**
> GetFavoritesContextByID200Response get_photolist_context_by_id(api_key, photo_id, photolist_id)



Returns next and previous photos in a photo list

### Example


```python
import openapi_client
from openapi_client.models.get_favorites_context_by_id200_response import GetFavoritesContextByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    photo_id = 'photo_id_example' # str | 
    photolist_id = 'photolist_id_example' # str | 

    try:
        api_response = api_instance.get_photolist_context_by_id(api_key, photo_id, photolist_id)
        print("The response of PublicApi->get_photolist_context_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_photolist_context_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **photo_id** | **str**|  | 
 **photolist_id** | **str**|  | 

### Return type

[**GetFavoritesContextByID200Response**](GetFavoritesContextByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_photostream_context_by_id**
> GetFavoritesContextByID200Response get_photostream_context_by_id(api_key, photo_id)



Returns next and previous photos for a photo in a photostream

### Example


```python
import openapi_client
from openapi_client.models.get_favorites_context_by_id200_response import GetFavoritesContextByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    photo_id = 'photo_id_example' # str | 

    try:
        api_response = api_instance.get_photostream_context_by_id(api_key, photo_id)
        print("The response of PublicApi->get_photostream_context_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_photostream_context_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **photo_id** | **str**|  | 

### Return type

[**GetFavoritesContextByID200Response**](GetFavoritesContextByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_request_token**
> str get_request_token(oauth_consumer_key, oauth_nonce, oauth_timestamp, oauth_signature_method, oauth_version, oauth_signature, oauth_callback)



Returns an oauth token and oauth token secret

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    oauth_consumer_key = 'oauth_consumer_key_example' # str | 
    oauth_nonce = 'oauth_nonce_example' # str | 
    oauth_timestamp = 'oauth_timestamp_example' # str | 
    oauth_signature_method = 'oauth_signature_method_example' # str | 
    oauth_version = 'oauth_version_example' # str | 
    oauth_signature = 'oauth_signature_example' # str | 
    oauth_callback = 'oauth_callback_example' # str | 

    try:
        api_response = api_instance.get_request_token(oauth_consumer_key, oauth_nonce, oauth_timestamp, oauth_signature_method, oauth_version, oauth_signature, oauth_callback)
        print("The response of PublicApi->get_request_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->get_request_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_consumer_key** | **str**|  | 
 **oauth_nonce** | **str**|  | 
 **oauth_timestamp** | **str**|  | 
 **oauth_signature_method** | **str**|  | 
 **oauth_version** | **str**|  | 
 **oauth_signature** | **str**|  | 
 **oauth_callback** | **str**|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restmethodflickr_groups_pools_get_context_get**
> GetFavoritesContextByID200Response restmethodflickr_groups_pools_get_context_get(api_key, photo_id, group_id=group_id)



Returns next and previous photos for a photo in a group pool

### Example


```python
import openapi_client
from openapi_client.models.get_favorites_context_by_id200_response import GetFavoritesContextByID200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    photo_id = 'photo_id_example' # str | 
    group_id = 'group_id_example' # str |  (optional)

    try:
        api_response = api_instance.restmethodflickr_groups_pools_get_context_get(api_key, photo_id, group_id=group_id)
        print("The response of PublicApi->restmethodflickr_groups_pools_get_context_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->restmethodflickr_groups_pools_get_context_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **photo_id** | **str**|  | 
 **group_id** | **str**|  | [optional] 

### Return type

[**GetFavoritesContextByID200Response**](GetFavoritesContextByID200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_photo**
> object upload_photo(api_key, photo, content_type=content_type, description=description, hidden=hidden, is_family=is_family, is_friend=is_friend, is_public=is_public, safety_level=safety_level, tags=tags, title=title)



Uploads a new photo to Flickr

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flickr.com/services
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flickr.com/services"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublicApi(api_client)
    api_key = 'api_key_example' # str | 
    photo = None # bytearray | 
    content_type = 'content_type_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    hidden = 'hidden_example' # str |  (optional)
    is_family = 'is_family_example' # str |  (optional)
    is_friend = 'is_friend_example' # str |  (optional)
    is_public = 'is_public_example' # str |  (optional)
    safety_level = 'safety_level_example' # str |  (optional)
    tags = 'tags_example' # str |  (optional)
    title = 'title_example' # str |  (optional)

    try:
        api_response = api_instance.upload_photo(api_key, photo, content_type=content_type, description=description, hidden=hidden, is_family=is_family, is_friend=is_friend, is_public=is_public, safety_level=safety_level, tags=tags, title=title)
        print("The response of PublicApi->upload_photo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->upload_photo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **photo** | **bytearray**|  | 
 **content_type** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **hidden** | **str**|  | [optional] 
 **is_family** | **str**|  | [optional] 
 **is_friend** | **str**|  | [optional] 
 **is_public** | **str**|  | [optional] 
 **safety_level** | **str**|  | [optional] 
 **tags** | **str**|  | [optional] 
 **title** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

