# openapi_client.SeasonsApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_all_people_for_a_season**](SeasonsApi.md#get_all_people_for_a_season) | **GET** /shows/{id}/seasons/{season}/people | Get all people for a season
[**get_all_season_comments**](SeasonsApi.md#get_all_season_comments) | **GET** /shows/{id}/seasons/{season}/comments/{sort} | Get all season comments
[**get_all_season_translations**](SeasonsApi.md#get_all_season_translations) | **GET** /shows/{id}/seasons/{season}/translations/{language} | Get all season translations
[**get_all_seasons_for_a_show**](SeasonsApi.md#get_all_seasons_for_a_show) | **GET** /shows/{id}/seasons | Get all seasons for a show
[**get_lists_containing_this_season**](SeasonsApi.md#get_lists_containing_this_season) | **GET** /shows/{id}/seasons/{season}/lists/{type}/{sort} | Get lists containing this season
[**get_season_ratings**](SeasonsApi.md#get_season_ratings) | **GET** /shows/{id}/seasons/{season}/ratings | Get season ratings
[**get_season_stats**](SeasonsApi.md#get_season_stats) | **GET** /shows/{id}/seasons/{season}/stats | Get season stats
[**get_single_season_for_a_show**](SeasonsApi.md#get_single_season_for_a_show) | **GET** /shows/{id}/seasons/{season} | Get single season for a show
[**shows_id_seasons_season_watching_get**](SeasonsApi.md#shows_id_seasons_season_watching_get) | **GET** /shows/{id}/seasons/{season}/watching | Get users watching right now


# **get_all_people_for_a_season**
> get_all_people_for_a_season(id, season, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all people for a season

#### &#10024; Extended Info  Returns all `cast` and `crew` for a season, including the `episode_count` for which they appear. Each `cast` member will have a `characters` array and a standard `person` object.  The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions).. Each of those members will have a `jobs` array and a standard `person` object.  #### Guest Stars  If you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in at least 1 episode of the season.  **Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!

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
    api_instance = openapi_client.SeasonsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all people for a season
        api_instance.get_all_people_for_a_season(id, season, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SeasonsApi->get_all_people_for_a_season: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
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
**200** | &#x60;&#x60;&#x60; /shows/game-of-thrones/seasons/1/people?extended&#x3D;guest_stars &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_season_comments**
> get_all_season_comments(id, season, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all season comments

#### &#128196; Pagination &#128513; Emojis  Returns all top level comments for a season. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, most `plays`, and highest `watched` percentage.

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
    api_instance = openapi_client.SeasonsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    sort = 'newest' # str | how to sort
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all season comments
        api_instance.get_all_season_comments(id, season, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SeasonsApi->get_all_season_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
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

# **get_all_season_translations**
> get_all_season_translations(id, season, language, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all season translations

Returns all translations for an season, including language and translated values for title and overview.

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
    api_instance = openapi_client.SeasonsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    language = 'es' # str | 2 character language code
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all season translations
        api_instance.get_all_season_translations(id, season, language, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SeasonsApi->get_all_season_translations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
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

# **get_all_seasons_for_a_show**
> get_all_seasons_for_a_show(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all seasons for a show

#### &#10024; Extended Info  Returns all seasons for a show including the number of episodes in each season.  #### Episodes  If you add `?extended=episodes` to the URL, it will return all episodes for all seasons.  **Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!

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
    api_instance = openapi_client.SeasonsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all seasons for a show
        api_instance.get_all_seasons_for_a_show(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SeasonsApi->get_all_seasons_for_a_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
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
**200** | &#x60;&#x60;&#x60; /shows/game-of-thrones/seasons?extended&#x3D;episodes &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_lists_containing_this_season**
> get_lists_containing_this_season(id, season, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get lists containing this season

#### &#128196; Pagination &#128513; Emojis  Returns all lists that contain this season. By default, `personal` lists are returned sorted by the most `popular`.

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
    api_instance = openapi_client.SeasonsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    type = 'personal' # str | Filter for a specific list type
    sort = 'popular' # str | How to sort
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get lists containing this season
        api_instance.get_lists_containing_this_season(id, season, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SeasonsApi->get_lists_containing_this_season: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
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

# **get_season_ratings**
> get_season_ratings(id, season, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get season ratings

Returns rating (between 0 and 10) and distribution for a season.

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
    api_instance = openapi_client.SeasonsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get season ratings
        api_instance.get_season_ratings(id, season, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SeasonsApi->get_season_ratings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
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

# **get_season_stats**
> get_season_stats(id, season, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get season stats

Returns lots of season stats.

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
    api_instance = openapi_client.SeasonsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get season stats
        api_instance.get_season_stats(id, season, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SeasonsApi->get_season_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
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

# **get_single_season_for_a_show**
> get_single_season_for_a_show(id, season, translations=translations, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get single season for a show

#### &#10024; Extended Info  Returns all episodes for a specific season of a show.  #### Translations  If you'd like to included translated episode titles and overviews in the response, include the `translations` parameter in the URL. Include all languages by setting the parameter to `all` or use a specific 2 digit country language code to further limit it.  **Note:** This returns a lot of data, so please only use this parameter if you actually need it!

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
    api_instance = openapi_client.SeasonsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    translations = 'es' # str | include episode translations (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get single season for a show
        api_instance.get_single_season_for_a_show(id, season, translations=translations, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SeasonsApi->get_single_season_for_a_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
 **translations** | **str**| include episode translations | [optional] 
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

# **shows_id_seasons_season_watching_get**
> shows_id_seasons_season_watching_get(id, season, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get users watching right now

#### &#10024; Extended Info  Returns all users watching this season right now.

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
    api_instance = openapi_client.SeasonsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    season = 1 # int | season number
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get users watching right now
        api_instance.shows_id_seasons_season_watching_get(id, season, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SeasonsApi->shows_id_seasons_season_watching_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **season** | **int**| season number | 
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

