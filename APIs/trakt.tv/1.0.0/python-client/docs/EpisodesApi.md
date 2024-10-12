# openapi_client.EpisodesApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_a_single_episode_for_a_show**](EpisodesApi.md#get_a_single_episode_for_a_show) | **GET** /shows/{id}/seasons/{season}/episodes/{episode} | Get a single episode for a show
[**get_all_episode_comments**](EpisodesApi.md#get_all_episode_comments) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort} | Get all episode comments
[**get_all_episode_translations**](EpisodesApi.md#get_all_episode_translations) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/translations/{language} | Get all episode translations
[**get_all_people_for_an_episode**](EpisodesApi.md#get_all_people_for_an_episode) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/people | Get all people for an episode
[**get_episode_ratings**](EpisodesApi.md#get_episode_ratings) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/ratings | Get episode ratings
[**get_episode_stats**](EpisodesApi.md#get_episode_stats) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/stats | Get episode stats
[**get_lists_containing_this_episode**](EpisodesApi.md#get_lists_containing_this_episode) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort} | Get lists containing this episode
[**shows_id_seasons_season_episodes_episode_watching_get**](EpisodesApi.md#shows_id_seasons_season_episodes_episode_watching_get) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/watching | Get users watching right now


# **get_a_single_episode_for_a_show**
> get_a_single_episode_for_a_show(id, season, episode, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get a single episode for a show

#### &#10024; Extended Info  Returns a single episode's details. All date and times are in UTC and were calculated using the episode's `air_date` and show's `country` and `air_time`.  **Note:** If the `first_aired` is unknown, it will be set to `null`.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EpisodesApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    episode = 1 # int | episode number
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get a single episode for a show
        api_instance.get_a_single_episode_for_a_show(id, season, episode, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling EpisodesApi->get_a_single_episode_for_a_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
 **episode** | **int**| episode number | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /shows/game-of-thrones/seasons/1/episodes/1?extended&#x3D;full &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_episode_comments**
> get_all_episode_comments(id, season, episode, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all episode comments

#### &#128196; Pagination &#128513; Emojis  Returns all top level comments for an episode. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, and most `plays`.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EpisodesApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    episode = 1 # int | episode number
    sort = 'newest' # str | how to sort
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all episode comments
        api_instance.get_all_episode_comments(id, season, episode, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling EpisodesApi->get_all_episode_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
 **episode** | **int**| episode number | 
 **sort** | **str**| how to sort | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_episode_translations**
> get_all_episode_translations(id, season, episode, language, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all episode translations

Returns all translations for an episode, including language and translated values for title and overview.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EpisodesApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    episode = 1 # int | episode number
    language = 'es' # str | 2 character language code
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all episode translations
        api_instance.get_all_episode_translations(id, season, episode, language, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling EpisodesApi->get_all_episode_translations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
 **episode** | **int**| episode number | 
 **language** | **str**| 2 character language code | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

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

# **get_all_people_for_an_episode**
> get_all_people_for_an_episode(id, season, episode, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all people for an episode

#### &#10024; Extended Info  Returns all `cast` and `crew` for an episode. Each `cast` member will have a `characters` array and a standard `person` object.  The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.  #### Guest Stars  If you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in the episode.  **Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EpisodesApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    episode = 1 # int | episode number
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all people for an episode
        api_instance.get_all_people_for_an_episode(id, season, episode, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling EpisodesApi->get_all_people_for_an_episode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
 **episode** | **int**| episode number | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /shows/game-of-thrones/seasons/1/episodes/1/people?extended&#x3D;guest_stars &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_episode_ratings**
> get_episode_ratings(id, season, episode, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get episode ratings

Returns rating (between 0 and 10) and distribution for an episode.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EpisodesApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    episode = 12 # int | episode number
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get episode ratings
        api_instance.get_episode_ratings(id, season, episode, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling EpisodesApi->get_episode_ratings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
 **episode** | **int**| episode number | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

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

# **get_episode_stats**
> get_episode_stats(id, season, episode, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get episode stats

Returns lots of episode stats.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EpisodesApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    episode = 1 # int | episode number
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get episode stats
        api_instance.get_episode_stats(id, season, episode, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling EpisodesApi->get_episode_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
 **episode** | **int**| episode number | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

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

# **get_lists_containing_this_episode**
> get_lists_containing_this_episode(id, season, episode, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get lists containing this episode

#### &#128196; Pagination &#128513; Emojis  Returns all lists that contain this episode. By default, `personal` lists are returned sorted by the most `popular`.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EpisodesApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    episode = 1 # int | episode number
    type = 'personal' # str | Filter for a specific list type
    sort = 'popular' # str | How to sort
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get lists containing this episode
        api_instance.get_lists_containing_this_episode(id, season, episode, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling EpisodesApi->get_lists_containing_this_episode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
 **episode** | **int**| episode number | 
 **type** | **str**| Filter for a specific list type | 
 **sort** | **str**| How to sort | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shows_id_seasons_season_episodes_episode_watching_get**
> shows_id_seasons_season_episodes_episode_watching_get(id, season, episode, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get users watching right now

#### &#10024; Extended Info  Returns all users watching this episode right now.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EpisodesApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    episode = 1 # int | episode number
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get users watching right now
        api_instance.shows_id_seasons_season_episodes_episode_watching_get(id, season, episode, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling EpisodesApi->shows_id_seasons_season_episodes_episode_watching_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
 **episode** | **int**| episode number | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

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

