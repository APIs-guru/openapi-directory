# openapi_client.ShowsApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_a_single_show**](ShowsApi.md#get_a_single_show) | **GET** /shows/{id} | Get a single show
[**get_all_people_for_a_show**](ShowsApi.md#get_all_people_for_a_show) | **GET** /shows/{id}/people | Get all people for a show
[**get_all_show_aliases**](ShowsApi.md#get_all_show_aliases) | **GET** /shows/{id}/aliases | Get all show aliases
[**get_all_show_certifications**](ShowsApi.md#get_all_show_certifications) | **GET** /shows/{id}/certifications | Get all show certifications
[**get_all_show_comments**](ShowsApi.md#get_all_show_comments) | **GET** /shows/{id}/comments/{sort} | Get all show comments
[**get_all_show_translations**](ShowsApi.md#get_all_show_translations) | **GET** /shows/{id}/translations/{language} | Get all show translations
[**get_last_episode**](ShowsApi.md#get_last_episode) | **GET** /shows/{id}/last_episode | Get last episode
[**get_lists_containing_this_show**](ShowsApi.md#get_lists_containing_this_show) | **GET** /shows/{id}/lists/{type}/{sort} | Get lists containing this show
[**get_next_episode**](ShowsApi.md#get_next_episode) | **GET** /shows/{id}/next_episode | Get next episode
[**get_popular_shows**](ShowsApi.md#get_popular_shows) | **GET** /shows/popular | Get popular shows
[**get_recently_updated_show_trakt_ids**](ShowsApi.md#get_recently_updated_show_trakt_ids) | **GET** /shows/updates/id/{start_date} | Get recently updated show Trakt IDs
[**get_recently_updated_shows**](ShowsApi.md#get_recently_updated_shows) | **GET** /shows/updates/{start_date} | Get recently updated shows
[**get_related_shows**](ShowsApi.md#get_related_shows) | **GET** /shows/{id}/related | Get related shows
[**get_show_collection_progress**](ShowsApi.md#get_show_collection_progress) | **GET** /shows/{id}/progress/collection | Get show collection progress
[**get_show_ratings**](ShowsApi.md#get_show_ratings) | **GET** /shows/{id}/ratings | Get show ratings
[**get_show_stats**](ShowsApi.md#get_show_stats) | **GET** /shows/{id}/stats | Get show stats
[**get_show_studios**](ShowsApi.md#get_show_studios) | **GET** /shows/{id}/studios | Get show studios
[**get_show_watched_progress**](ShowsApi.md#get_show_watched_progress) | **GET** /shows/{id}/progress/watched | Get show watched progress
[**get_the_most_anticipated_shows**](ShowsApi.md#get_the_most_anticipated_shows) | **GET** /shows/anticipated | Get the most anticipated shows
[**get_the_most_collected_shows**](ShowsApi.md#get_the_most_collected_shows) | **GET** /shows/collected/{period} | Get the most collected shows
[**get_the_most_played_shows**](ShowsApi.md#get_the_most_played_shows) | **GET** /shows/played/{period} | Get the most played shows
[**get_the_most_recommended_shows**](ShowsApi.md#get_the_most_recommended_shows) | **GET** /shows/recommended/{period} | Get the most recommended shows
[**get_the_most_watched_shows**](ShowsApi.md#get_the_most_watched_shows) | **GET** /shows/watched/{period} | Get the most watched shows
[**get_trending_shows**](ShowsApi.md#get_trending_shows) | **GET** /shows/trending | Get trending shows
[**reset_show_progress**](ShowsApi.md#reset_show_progress) | **POST** /shows/{id}/progress/watched/reset | Reset show progress
[**shows_id_watching_get**](ShowsApi.md#shows_id_watching_get) | **GET** /shows/{id}/watching | Get users watching right now
[**undo_reset_show_progress**](ShowsApi.md#undo_reset_show_progress) | **DELETE** /shows/{id}/progress/watched/reset | Undo reset show progress


# **get_a_single_show**
> get_a_single_show(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get a single show

#### &#10024; Extended Info  Returns a single shows's details. If you request extended info, the `airs` object is relative to the show's country. You can use the `day`, `time`, and `timezone` to construct your own date then convert it to whatever timezone your user is in.  **Note:** When getting `full` extended info, the `status` field can have a value of `returning series` (airing right now),  `continuing` (airing right now), `in production` (airing soon), `planned` (in development), `upcoming` (in development),  `pilot`, `canceled`, or `ended`.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get a single show
        api_instance.get_a_single_show(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_a_single_show: %s\n" % e)
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
**200** | &#x60;&#x60;&#x60; /shows/game-of-thrones?extended&#x3D;full &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_people_for_a_show**
> get_all_people_for_a_show(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all people for a show

#### &#10024; Extended Info  Returns all `cast` and `crew` for a show, including the `episode_count` for which they appears. Each `cast` member will have a `characters` array and a standard `person` object.  The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, `editing`, and `created  by` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.  #### Guest Stars  If you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in at least 1 episode of the show.  **Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all people for a show
        api_instance.get_all_people_for_a_show(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_all_people_for_a_show: %s\n" % e)
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
**200** | &#x60;&#x60;&#x60; /shows/game-of-thrones/people?extended&#x3D;guest_stars &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_show_aliases**
> get_all_show_aliases(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all show aliases

Returns all title aliases for a show.  Includes country where name is different.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all show aliases
        api_instance.get_all_show_aliases(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_all_show_aliases: %s\n" % e)
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_show_certifications**
> get_all_show_certifications(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all show certifications

Returns all content certifications for a show, including the country.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all show certifications
        api_instance.get_all_show_certifications(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_all_show_certifications: %s\n" % e)
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_show_comments**
> get_all_show_comments(id, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all show comments

#### &#128196; Pagination &#128513; Emojis  Returns all top level comments for a show. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, most `plays`, and highest `watched` percentage.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    sort = 'newest' # str | how to sort
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all show comments
        api_instance.get_all_show_comments(id, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_all_show_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
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

# **get_all_show_translations**
> get_all_show_translations(id, language, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all show translations

Returns all translations for a show, including language and translated values for title and overview.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    language = 'es' # str | 2 character language code
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all show translations
        api_instance.get_all_show_translations(id, language, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_all_show_translations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
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

# **get_last_episode**
> get_last_episode(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get last episode

#### &#10024; Extended Info  Returns the most recently aired episode. If no episode is found, a `204` HTTP status code will be returned.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get last episode
        api_instance.get_last_episode(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_last_episode: %s\n" % e)
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_lists_containing_this_show**
> get_lists_containing_this_show(id, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get lists containing this show

#### &#128196; Pagination &#128513; Emojis  Returns all lists that contain this show. By default, `personal` lists are returned sorted by the most `popular`.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    type = 'personal' # str | Filter for a specific list type
    sort = 'popular' # str | How to sort
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get lists containing this show
        api_instance.get_lists_containing_this_show(id, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_lists_containing_this_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
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

# **get_next_episode**
> get_next_episode(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get next episode

#### &#10024; Extended Info  Returns the next scheduled to air episode. If no episode is found, a `204` HTTP status code will be returned.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get next episode
        api_instance.get_next_episode(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_next_episode: %s\n" % e)
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_popular_shows**
> get_popular_shows(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get popular shows

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most popular shows. Popularity is calculated using the rating percentage and the number of ratings.

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
    api_instance = openapi_client.ShowsApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get popular shows
        api_instance.get_popular_shows(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_popular_shows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**200** | OK |  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recently_updated_show_trakt_ids**
> get_recently_updated_show_trakt_ids(start_date, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get recently updated show Trakt IDs

#### &#128196; Pagination  Returns all show Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.  **Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.  **Note:** The `start_date` can only be a maximum of 30 days in the past.

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
    api_instance = openapi_client.ShowsApi(api_client)
    start_date = '2020-11-27T00:00:00Z' # str | Updated since this date and time.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get recently updated show Trakt IDs
        api_instance.get_recently_updated_show_trakt_ids(start_date, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_recently_updated_show_trakt_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Updated since this date and time. | 
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
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recently_updated_shows**
> get_recently_updated_shows(start_date, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get recently updated shows

#### &#128196; Pagination &#10024; Extended Info  Returns all shows updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.  **Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.  **Note:** The `start_date` can only be a maximum of 30 days in the past.

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
    api_instance = openapi_client.ShowsApi(api_client)
    start_date = '2020-11-27T00:00:00Z' # str | Updated since this date and time.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get recently updated shows
        api_instance.get_recently_updated_shows(start_date, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_recently_updated_shows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Updated since this date and time. | 
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
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_related_shows**
> get_related_shows(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get related shows

#### &#128196; Pagination &#10024; Extended Info  Returns related and similar shows.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get related shows
        api_instance.get_related_shows(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_related_shows: %s\n" % e)
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
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_show_collection_progress**
> get_show_collection_progress(id, body, hidden=hidden, specials=specials, count_specials=count_specials, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get show collection progress

#### &#128274; OAuth Required  Returns collection progress for a show including details on all aired seasons and episodes. The `next_episode` will be the next episode the user should collect, if there are no upcoming episodes it will be set to `null`.  By default, any hidden seasons will be removed from the response and stats. To include these and adjust the completion stats, set the `hidden` flag to `true`.  By default, specials will be excluded from the response. Set the `specials` flag to `true` to include season 0 and adjust the stats accordingly. If you'd like to include specials, but not adjust the stats, set `count_specials` to `false`.  By default, the `last_episode` and `next_episode` are calculated using the last `aired` episode the user has collected, even if they've collected older episodes more recently. To use their last collected episode for these calculations, set the `last_activity` flag to `collected`.  **Note:** Only aired episodes are used to calculate progress. Episodes in the future or without an air date are ignored.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    body = 'body_example' # str | 
    hidden = 'false' # str | include any hidden seasons (optional)
    specials = 'false' # str | include specials as season 0 (optional)
    count_specials = 'true' # str | count specials in the overall stats (only applies if specials are included) (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get show collection progress
        api_instance.get_show_collection_progress(id, body, hidden=hidden, specials=specials, count_specials=count_specials, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_show_collection_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **body** | **str**|  | 
 **hidden** | **str**| include any hidden seasons | [optional] 
 **specials** | **str**| include specials as season 0 | [optional] 
 **count_specials** | **str**| count specials in the overall stats (only applies if specials are included) | [optional] 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

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

# **get_show_ratings**
> get_show_ratings(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get show ratings

Returns rating (between 0 and 10) and distribution for a show.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get show ratings
        api_instance.get_show_ratings(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_show_ratings: %s\n" % e)
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_show_stats**
> get_show_stats(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get show stats

Returns lots of show stats.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get show stats
        api_instance.get_show_stats(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_show_stats: %s\n" % e)
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_show_studios**
> get_show_studios(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get show studios

Returns all studios for a show.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get show studios
        api_instance.get_show_studios(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_show_studios: %s\n" % e)
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_show_watched_progress**
> get_show_watched_progress(id, body, hidden=hidden, specials=specials, count_specials=count_specials, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get show watched progress

#### &#128274; OAuth Required  Returns watched progress for a show including details on all aired seasons and episodes. The `next_episode` will be the next episode the user should watch, if there are no upcoming episodes it will be set to `null`. If not `null`, the `reset_at` date is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.  By default, any hidden seasons will be removed from the response and stats. To include these and adjust the completion stats, set the `hidden` flag to `true`.  By default, specials will be excluded from the response. Set the `specials` flag to `true` to include season 0 and adjust the stats accordingly. If you'd like to include specials, but not adjust the stats, set `count_specials` to `false`.  By default, the `last_episode` and `next_episode` are calculated using the last `aired` episode the user has watched, even if they've watched older episodes more recently. To use their last watched episode for these calculations, set the `last_activity` flag to `watched`.  **Note:** Only aired episodes are used to calculate progress. Episodes in the future or without an air date are ignored.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    body = 'body_example' # str | 
    hidden = 'false' # str | include any hidden seasons (optional)
    specials = 'false' # str | include specials as season 0 (optional)
    count_specials = 'true' # str | count specials in the overall stats (only applies if specials are included) (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get show watched progress
        api_instance.get_show_watched_progress(id, body, hidden=hidden, specials=specials, count_specials=count_specials, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_show_watched_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **body** | **str**|  | 
 **hidden** | **str**| include any hidden seasons | [optional] 
 **specials** | **str**| include specials as season 0 | [optional] 
 **count_specials** | **str**| count specials in the overall stats (only applies if specials are included) | [optional] 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

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

# **get_the_most_anticipated_shows**
> get_the_most_anticipated_shows(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the most anticipated shows

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most anticipated shows based on the number of lists a show appears on.

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
    api_instance = openapi_client.ShowsApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the most anticipated shows
        api_instance.get_the_most_anticipated_shows(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_the_most_anticipated_shows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **get_the_most_collected_shows**
> get_the_most_collected_shows(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the most collected shows

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most collected (unique users) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

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
    api_instance = openapi_client.ShowsApi(api_client)
    period = 'weekly' # str | Time period.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the most collected shows
        api_instance.get_the_most_collected_shows(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_the_most_collected_shows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | **str**| Time period. | 
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

# **get_the_most_played_shows**
> get_the_most_played_shows(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the most played shows

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most played (a single user can watch multiple episodes multiple times) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

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
    api_instance = openapi_client.ShowsApi(api_client)
    period = 'weekly' # str | Time period.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the most played shows
        api_instance.get_the_most_played_shows(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_the_most_played_shows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | **str**| Time period. | 
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

# **get_the_most_recommended_shows**
> get_the_most_recommended_shows(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the most recommended shows

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most recommended shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

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
    api_instance = openapi_client.ShowsApi(api_client)
    period = 'weekly' # str | Time period.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the most recommended shows
        api_instance.get_the_most_recommended_shows(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_the_most_recommended_shows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | **str**| Time period. | 
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

# **get_the_most_watched_shows**
> get_the_most_watched_shows(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the most watched shows

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most watched (unique users) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

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
    api_instance = openapi_client.ShowsApi(api_client)
    period = 'weekly' # str | Time period.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the most watched shows
        api_instance.get_the_most_watched_shows(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_the_most_watched_shows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | **str**| Time period. | 
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

# **get_trending_shows**
> get_trending_shows(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get trending shows

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns all shows being watched right now. Shows with the most users are returned first.

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
    api_instance = openapi_client.ShowsApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get trending shows
        api_instance.get_trending_shows(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->get_trending_shows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  * X-Trending-User-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_show_progress**
> reset_show_progress(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Reset show progress

#### &#128274; OAuth Required 🔥 VIP Only  Reset a show's progress when the user started re-watching the show. You can optionally specify the `reset_at` date to have it calculate progress from that specific date onwards.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Reset show progress
        api_instance.reset_show_progress(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->reset_show_progress: %s\n" % e)
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

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shows_id_watching_get**
> shows_id_watching_get(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get users watching right now

#### &#10024; Extended Info  Returns all users watching this show right now.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'game-of-thrones' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get users watching right now
        api_instance.shows_id_watching_get(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->shows_id_watching_get: %s\n" % e)
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **undo_reset_show_progress**
> undo_reset_show_progress(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Undo reset show progress

#### &#128274; OAuth Required 🔥 VIP Only  Undo the reset and have watched progress use all watched history for the show.

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
    api_instance = openapi_client.ShowsApi(api_client)
    id = 'id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Undo reset show progress
        api_instance.undo_reset_show_progress(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling ShowsApi->undo_reset_show_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Automatically added | 
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

