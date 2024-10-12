# openapi_client.SyncApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_items_to_collection**](SyncApi.md#add_items_to_collection) | **POST** /sync/collection | Add items to collection
[**add_items_to_personal_recommendations**](SyncApi.md#add_items_to_personal_recommendations) | **POST** /sync/recommendations | Add items to personal recommendations
[**add_items_to_watched_history**](SyncApi.md#add_items_to_watched_history) | **POST** /sync/history | Add items to watched history
[**add_items_to_watchlist**](SyncApi.md#add_items_to_watchlist) | **POST** /sync/watchlist | Add items to watchlist
[**add_new_ratings**](SyncApi.md#add_new_ratings) | **POST** /sync/ratings | Add new ratings
[**get_collection**](SyncApi.md#get_collection) | **GET** /sync/collection/{type} | Get collection
[**get_last_activity**](SyncApi.md#get_last_activity) | **GET** /sync/last_activities | Get last activity
[**get_personal_recommendations**](SyncApi.md#get_personal_recommendations) | **GET** /sync/recommendations/{type}/{sort} | Get personal recommendations
[**get_playback_progress**](SyncApi.md#get_playback_progress) | **GET** /sync/playback/{type} | Get playback progress
[**get_ratings**](SyncApi.md#get_ratings) | **GET** /sync/ratings/{type}/{rating} | Get ratings
[**get_watched**](SyncApi.md#get_watched) | **GET** /sync/watched/{type} | Get watched
[**get_watched_history**](SyncApi.md#get_watched_history) | **GET** /sync/history/{type}/{id} | Get watched history
[**get_watchlist**](SyncApi.md#get_watchlist) | **GET** /sync/watchlist/{type}/{sort} | Get watchlist
[**remove_a_playback_item**](SyncApi.md#remove_a_playback_item) | **DELETE** /sync/playback/{id} | Remove a playback item
[**remove_items_from_collection**](SyncApi.md#remove_items_from_collection) | **POST** /sync/collection/remove | Remove items from collection
[**remove_items_from_history**](SyncApi.md#remove_items_from_history) | **POST** /sync/history/remove | Remove items from history
[**remove_items_from_personal_recommendations**](SyncApi.md#remove_items_from_personal_recommendations) | **POST** /sync/recommendations/remove | Remove items from personal recommendations
[**remove_items_from_watchlist**](SyncApi.md#remove_items_from_watchlist) | **POST** /sync/watchlist/remove | Remove items from watchlist
[**remove_ratings**](SyncApi.md#remove_ratings) | **POST** /sync/ratings/remove | Remove ratings
[**reorder_personally_recommended_items**](SyncApi.md#reorder_personally_recommended_items) | **POST** /sync/recommendations/reorder | Reorder personally recommended items
[**reorder_watchlist_items**](SyncApi.md#reorder_watchlist_items) | **POST** /sync/watchlist/reorder | Reorder watchlist items


# **add_items_to_collection**
> add_items_to_collection(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_items_to_collection_request=add_items_to_collection_request)

Add items to collection

#### &#128274; OAuth Required  Add items to a user's collection. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be collected. If seasons are specified, all episodes in those seasons will be collected.  Send a `collected_at` UTC datetime to mark items as collected in the past. You can also send additional metadata about the media itself to have a very accurate collection. Showcase what is available to watch from your epic HD DVD collection down to your downloaded iTunes movies.  **Note:** You can resend items already in your collection and they will be updated with any new values. This includes the `collected_at` and any other metadata.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. | | `collected_at` | datetime | UTC datetime when the item was collected. Set to `released` to automatically use the inital release date + runtime *(episodes only)*). | | `media_type` | string | Set to `digital`, `bluray`, `hddvd`, `dvd`, `vcd`, `vhs`, `betamax`, or `laserdisc`. | | `resolution` | string | Set to `uhd_4k`, `hd_1080p`, `hd_1080i`, `hd_720p`, `sd_480p`, `sd_480i`, `sd_576p`, or `sd_576i`. | | `hdr` | string | Set to `dolby_vision`, `hdr10`, `hdr10_plus`, or `hlg`. | | `audio` | string | Set to `dolby_digital`, `dolby_digital_plus`, `dolby_digital_plus_atmos`, `dolby_truehd`, `dolby_atmos` *(Dolby TrueHD Atmos)*, `dolby_prologic`, `dts`, `dts_ma`, `dts_hr`, `dts_x`, `auro_3d`, `mp3`, `mp2`, `aac`, `lpcm`, `ogg` *(Ogg Vorbis)*, `ogg_opus`, `wma`, or `flac`. | | `audio_channels` | string | Set to `1.0`, `2.0`, `2.1`, `3.0`, `3.1`, `4.0`, `4.1`, `5.0`, `5.1`, `5.1.2`, `5.1.4`, `6.1`, `7.1`, `7.1.2`, `7.1.4`, `9.1`, or `10.1` | | `3d` | boolean | Set `true` if in 3D. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.add_items_to_collection_request import AddItemsToCollectionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    add_items_to_collection_request = openapi_client.AddItemsToCollectionRequest() # AddItemsToCollectionRequest |  (optional)

    try:
        # Add items to collection
        api_instance.add_items_to_collection(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_items_to_collection_request=add_items_to_collection_request)
    except Exception as e:
        print("Exception when calling SyncApi->add_items_to_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **add_items_to_collection_request** | [**AddItemsToCollectionRequest**](AddItemsToCollectionRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_items_to_personal_recommendations**
> add_items_to_personal_recommendations(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_items_to_personal_recommendations_request=add_items_to_personal_recommendations_request)

Add items to personal recommendations

#### &#128274; OAuth Required &#128513; Emojis  If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### Notes  Each recommendation can optionally accept a `notes` *(255 maximum characters)* field explaining why the user recommended the item.  #### Limits  If the user has recommended 50 items already, a `420` HTTP error code is returned. This limit applies to all users.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.add_items_to_personal_recommendations_request import AddItemsToPersonalRecommendationsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    add_items_to_personal_recommendations_request = openapi_client.AddItemsToPersonalRecommendationsRequest() # AddItemsToPersonalRecommendationsRequest |  (optional)

    try:
        # Add items to personal recommendations
        api_instance.add_items_to_personal_recommendations(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_items_to_personal_recommendations_request=add_items_to_personal_recommendations_request)
    except Exception as e:
        print("Exception when calling SyncApi->add_items_to_personal_recommendations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **add_items_to_personal_recommendations_request** | [**AddItemsToPersonalRecommendationsRequest**](AddItemsToPersonalRecommendationsRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_items_to_watched_history**
> add_items_to_watched_history(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_items_to_watched_history_request=add_items_to_watched_history_request)

Add items to watched history

#### &#128274; OAuth Required  Add items to a user's watch history. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be added. If seasons are specified, only episodes in those seasons will be added.  Send a `watched_at` UTC datetime to mark items as watched in the past. This is useful for syncing past watches from a media center.  **Note:** Please be careful with sending duplicate data. We don't verify the `item` + `watched_at` to ensure it's unique, it is up to your app to veify this and not send duplicate plays.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. | | `watched_at` | datetime | UTC datetime when the item was watched. Set to `released` to automatically use the initial release date + runtime *(episodes only)*. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.add_items_to_watched_history_request import AddItemsToWatchedHistoryRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    add_items_to_watched_history_request = openapi_client.AddItemsToWatchedHistoryRequest() # AddItemsToWatchedHistoryRequest |  (optional)

    try:
        # Add items to watched history
        api_instance.add_items_to_watched_history(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_items_to_watched_history_request=add_items_to_watched_history_request)
    except Exception as e:
        print("Exception when calling SyncApi->add_items_to_watched_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **add_items_to_watched_history_request** | [**AddItemsToWatchedHistoryRequest**](AddItemsToWatchedHistoryRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_items_to_watchlist**
> add_items_to_watchlist(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_items_to_watchlist_request=add_items_to_watchlist_request)

Add items to watchlist

#### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced  Add one of more items to a user's watchlist. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be added. If seasons are specified, all of those seasons will be added.  #### Notes  Each watchlist item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.  #### Limits  If the user's watchlist limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.add_items_to_watchlist_request import AddItemsToWatchlistRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    add_items_to_watchlist_request = openapi_client.AddItemsToWatchlistRequest() # AddItemsToWatchlistRequest |  (optional)

    try:
        # Add items to watchlist
        api_instance.add_items_to_watchlist(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_items_to_watchlist_request=add_items_to_watchlist_request)
    except Exception as e:
        print("Exception when calling SyncApi->add_items_to_watchlist: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **add_items_to_watchlist_request** | [**AddItemsToWatchlistRequest**](AddItemsToWatchlistRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**420** |  |  * X-Account-Limit -  <br>  * X-Upgrade-URL -  <br>  * X-VIP-User -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_new_ratings**
> add_new_ratings(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_new_ratings_request=add_new_ratings_request)

Add new ratings

#### &#128274; OAuth Required  Rate one or more items. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be rated. If seasons are specified, all of those seasons will be rated.  Send a `rated_at` UTC datetime to mark items as rated in the past. This is useful for syncing ratings from a media center.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, `season`, or `episode` object. | | `rating` <span style=\"color:red;\">*</a> | integer | Between 1 and 10. | | `rated_at` | datetime | UTC datetime when the item was rated. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.add_new_ratings_request import AddNewRatingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    add_new_ratings_request = openapi_client.AddNewRatingsRequest() # AddNewRatingsRequest |  (optional)

    try:
        # Add new ratings
        api_instance.add_new_ratings(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_new_ratings_request=add_new_ratings_request)
    except Exception as e:
        print("Exception when calling SyncApi->add_new_ratings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **add_new_ratings_request** | [**AddNewRatingsRequest**](AddNewRatingsRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_collection**
> get_collection(type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get collection

#### &#128274; OAuth Required &#10024; Extended Info  Get all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.  Each `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.  Each `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.  If you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    type = 'movies' # str | 
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get collection
        api_instance.get_collection(type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SyncApi->get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /sync/collection/shows?extended&#x3D;metadata &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_last_activity**
> get_last_activity(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get last activity

#### &#128274; OAuth Required  This method is a useful first step in the syncing process. We recommended caching these dates locally, then you can compare to know exactly what data has changed recently. This can greatly optimize your syncs so you don't pull down a ton of data only to see nothing has actually changed.  #### Account  `settings_at` is set when the OAuth user updates any of their Trakt settings on the website. `followed_at` is set when another Trakt user follows or unfollows the OAuth user. `following_at` is set when the OAuth user follows or unfollows another Trakt user. `pending_at` is set when the OAuth user follows a private account, which requires their approval. `requested_at` is set when the OAuth user has a private account and someone requests to follow them.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get last activity
        api_instance.get_last_activity(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SyncApi->get_last_activity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_personal_recommendations**
> get_personal_recommendations(type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get personal recommendations

#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### Notes  Each recommendation contains a `notes` field explaining why the user recommended the item.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    type = 'movies' # str | Filter for a specific item type
    sort = 'rank' # str | How to sort (only if type is also sent)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get personal recommendations
        api_instance.get_personal_recommendations(type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SyncApi->get_personal_recommendations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Filter for a specific item type | 
 **sort** | **str**| How to sort (only if type is also sent) | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /sync/recommendations/shows &#x60;&#x60;&#x60; |  * X-Sort-By -  <br>  * X-Sort-How -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_playback_progress**
> get_playback_progress(type, start_at=start_at, end_at=end_at, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get playback progress

#### &#128274; OAuth Required &#128196; Pagination Optional  Whenever a scrobble is paused, the playback progress is saved. Use this progress to sync up playback across different media centers or apps. For example, you can start watching a movie in a media center, stop it, then resume on your tablet from the same spot. Each item will have the `progress` percentage between 0 and 100.  You can optionally specify a `type` to only get `movies` or `episodes`.  By default, all results will be returned. Pagination is optional and can be used for something like an \"on deck\" feature, or if you only need a limited data set.  **Note:** We only save playback progress for the last 6 months.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    type = 'movies' # str | 
    start_at = '2016-06-01T00:00:00.000Z' # str | Starting date. (optional)
    end_at = '2016-07-01T23:59:59.000Z' # str | Ending date. (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get playback progress
        api_instance.get_playback_progress(type, start_at=start_at, end_at=end_at, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SyncApi->get_playback_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 
 **start_at** | **str**| Starting date. | [optional] 
 **end_at** | **str**| Ending date. | [optional] 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ratings**
> get_ratings(type, rating, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get ratings

#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info  Get a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    type = 'movies' # str | 
    rating = 9 # int | Filter for a specific rating.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get ratings
        api_instance.get_ratings(type, rating, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SyncApi->get_ratings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 
 **rating** | **int**| Filter for a specific rating. | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /sync/ratings/episodes &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_watched**
> get_watched(type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get watched

#### &#128274; OAuth Required &#10024; Extended Info  Returns all movies or shows a user has watched sorted by most plays.  If `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.  Each `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.  Each `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    type = 'movies' # str | 
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get watched
        api_instance.get_watched(type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SyncApi->get_watched: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /sync/watched/shows?extended&#x3D;noseasons &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_watched_history**
> get_watched_history(type, id, start_at=start_at, end_at=end_at, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get watched history

#### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info  Returns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.  Specify a `type` and trakt `id` to limit the history for just that item. If the `id` is valid, but there is no history, an empty array will be returned.  | Example URL | Returns watches for... | |---|---| | `/history/movies/12601` | TRON: Legacy | | `/history/shows/1388` | All episodes of Breaking Bad | | `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 | | `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    type = 'movies' # str | 
    id = 123 # int | Trakt ID for a specific item.
    start_at = '2016-06-01T00:00:00.000Z' # str | Starting date. (optional)
    end_at = '2016-07-01T23:59:59.000Z' # str | Ending date. (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get watched history
        api_instance.get_watched_history(type, id, start_at=start_at, end_at=end_at, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SyncApi->get_watched_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 
 **id** | **int**| Trakt ID for a specific item. | 
 **start_at** | **str**| Starting date. | [optional] 
 **end_at** | **str**| Ending date. | [optional] 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /sync/history/episodes &#x60;&#x60;&#x60; |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_watchlist**
> get_watchlist(type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get watchlist

#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  Returns all items in a user's watchlist filtered by type.  #### Notes  Each watchlist item contains a `notes` field with text entered by the user.  #### Sorting Headers  By default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.  We also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.  #### Auto Removal  When an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.  _**The watchlist should not be used as a list of what the user is actively watching.**_  Use a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    type = 'movies' # str | Filter for a specific item type
    sort = 'rank' # str | How to sort (only if type is also sent)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get watchlist
        api_instance.get_watchlist(type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SyncApi->get_watchlist: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Filter for a specific item type | 
 **sort** | **str**| How to sort (only if type is also sent) | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /sync/watchlist/episodes &#x60;&#x60;&#x60; |  * X-Sort-By -  <br>  * X-Sort-How -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_a_playback_item**
> remove_a_playback_item(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Remove a playback item

#### &#128274; OAuth Required  Remove a playback item from a user's playback progress list. A `404` will be returned if the `id` is invalid.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    id = 13 # int | playback ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Remove a playback item
        api_instance.remove_a_playback_item(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SyncApi->remove_a_playback_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| playback ID | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_items_from_collection**
> remove_items_from_collection(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_collection_request=remove_items_from_collection_request)

Remove items from collection

#### &#128274; OAuth Required  Remove one or more items from a user's collection.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.remove_items_from_collection_request import RemoveItemsFromCollectionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    remove_items_from_collection_request = openapi_client.RemoveItemsFromCollectionRequest() # RemoveItemsFromCollectionRequest |  (optional)

    try:
        # Remove items from collection
        api_instance.remove_items_from_collection(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_collection_request=remove_items_from_collection_request)
    except Exception as e:
        print("Exception when calling SyncApi->remove_items_from_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **remove_items_from_collection_request** | [**RemoveItemsFromCollectionRequest**](RemoveItemsFromCollectionRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_items_from_history**
> remove_items_from_history(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_history_request=remove_items_from_history_request)

Remove items from history

#### &#128274; OAuth Required  Remove items from a user's watch history including all watches, scrobbles, and checkins. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be removed. If seasons are specified, only episodes in those seasons will be removed.  You can also send a list of raw history `ids` _(64-bit integers)_ to delete single plays from the watched history. The [**/sync/history**](#reference/sync/get-history) method will return an individual `id` _(64-bit integer)_ for each history item.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. | | `ids` | array | Array of history ids. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.remove_items_from_history_request import RemoveItemsFromHistoryRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    remove_items_from_history_request = openapi_client.RemoveItemsFromHistoryRequest() # RemoveItemsFromHistoryRequest |  (optional)

    try:
        # Remove items from history
        api_instance.remove_items_from_history(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_history_request=remove_items_from_history_request)
    except Exception as e:
        print("Exception when calling SyncApi->remove_items_from_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **remove_items_from_history_request** | [**RemoveItemsFromHistoryRequest**](RemoveItemsFromHistoryRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_items_from_personal_recommendations**
> remove_items_from_personal_recommendations(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_personal_recommendations_request=remove_items_from_personal_recommendations_request)

Remove items from personal recommendations

#### &#128274; OAuth Required  Remove items from a user's personal recommendations. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.remove_items_from_personal_recommendations_request import RemoveItemsFromPersonalRecommendationsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    remove_items_from_personal_recommendations_request = openapi_client.RemoveItemsFromPersonalRecommendationsRequest() # RemoveItemsFromPersonalRecommendationsRequest |  (optional)

    try:
        # Remove items from personal recommendations
        api_instance.remove_items_from_personal_recommendations(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_personal_recommendations_request=remove_items_from_personal_recommendations_request)
    except Exception as e:
        print("Exception when calling SyncApi->remove_items_from_personal_recommendations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **remove_items_from_personal_recommendations_request** | [**RemoveItemsFromPersonalRecommendationsRequest**](RemoveItemsFromPersonalRecommendationsRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_items_from_watchlist**
> remove_items_from_watchlist(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_collection_request=remove_items_from_collection_request)

Remove items from watchlist

#### &#128274; OAuth Required  Remove one or more items from a user's watchlist.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.remove_items_from_collection_request import RemoveItemsFromCollectionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    remove_items_from_collection_request = openapi_client.RemoveItemsFromCollectionRequest() # RemoveItemsFromCollectionRequest |  (optional)

    try:
        # Remove items from watchlist
        api_instance.remove_items_from_watchlist(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_collection_request=remove_items_from_collection_request)
    except Exception as e:
        print("Exception when calling SyncApi->remove_items_from_watchlist: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **remove_items_from_collection_request** | [**RemoveItemsFromCollectionRequest**](RemoveItemsFromCollectionRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_ratings**
> remove_ratings(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_collection_request=remove_items_from_collection_request)

Remove ratings

#### &#128274; OAuth Required  Remove ratings for one or more items.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.remove_items_from_collection_request import RemoveItemsFromCollectionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    remove_items_from_collection_request = openapi_client.RemoveItemsFromCollectionRequest() # RemoveItemsFromCollectionRequest |  (optional)

    try:
        # Remove ratings
        api_instance.remove_ratings(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_collection_request=remove_items_from_collection_request)
    except Exception as e:
        print("Exception when calling SyncApi->remove_ratings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **remove_items_from_collection_request** | [**RemoveItemsFromCollectionRequest**](RemoveItemsFromCollectionRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reorder_personally_recommended_items**
> reorder_personally_recommended_items(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, reorder_personally_recommended_items_request=reorder_personally_recommended_items_request)

Reorder personally recommended items

#### &#128274; OAuth Required  Reorder all items on a user's personal recommendations by sending the updated `rank` of list item ids. Use the [**/sync/recommendations**](#reference/sync/get-personal-recommendations) method to get all list item ids.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.reorder_personally_recommended_items_request import ReorderPersonallyRecommendedItemsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    reorder_personally_recommended_items_request = openapi_client.ReorderPersonallyRecommendedItemsRequest() # ReorderPersonallyRecommendedItemsRequest |  (optional)

    try:
        # Reorder personally recommended items
        api_instance.reorder_personally_recommended_items(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, reorder_personally_recommended_items_request=reorder_personally_recommended_items_request)
    except Exception as e:
        print("Exception when calling SyncApi->reorder_personally_recommended_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **reorder_personally_recommended_items_request** | [**ReorderPersonallyRecommendedItemsRequest**](ReorderPersonallyRecommendedItemsRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reorder_watchlist_items**
> reorder_watchlist_items(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, reorder_personally_recommended_items_request=reorder_personally_recommended_items_request)

Reorder watchlist items

#### &#128274; OAuth Required  Reorder all items on a user's watchlist by sending the updated `rank` of list item ids. Use the [**/sync/watchlist**](#reference/sync/get-watchlist) method to get all list item ids.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.reorder_personally_recommended_items_request import ReorderPersonallyRecommendedItemsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SyncApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    reorder_personally_recommended_items_request = openapi_client.ReorderPersonallyRecommendedItemsRequest() # ReorderPersonallyRecommendedItemsRequest |  (optional)

    try:
        # Reorder watchlist items
        api_instance.reorder_watchlist_items(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, reorder_personally_recommended_items_request=reorder_personally_recommended_items_request)
    except Exception as e:
        print("Exception when calling SyncApi->reorder_watchlist_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **reorder_personally_recommended_items_request** | [**ReorderPersonallyRecommendedItemsRequest**](ReorderPersonallyRecommendedItemsRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

