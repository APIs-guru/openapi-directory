# openapi_client.MoviesApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_a_movie**](MoviesApi.md#get_a_movie) | **GET** /movies/{id} | Get a movie
[**get_all_movie_aliases**](MoviesApi.md#get_all_movie_aliases) | **GET** /movies/{id}/aliases | Get all movie aliases
[**get_all_movie_comments**](MoviesApi.md#get_all_movie_comments) | **GET** /movies/{id}/comments/{sort} | Get all movie comments
[**get_all_movie_releases**](MoviesApi.md#get_all_movie_releases) | **GET** /movies/{id}/releases/{country} | Get all movie releases
[**get_all_movie_translations**](MoviesApi.md#get_all_movie_translations) | **GET** /movies/{id}/translations/{language} | Get all movie translations
[**get_all_people_for_a_movie**](MoviesApi.md#get_all_people_for_a_movie) | **GET** /movies/{id}/people | Get all people for a movie
[**get_lists_containing_this_movie**](MoviesApi.md#get_lists_containing_this_movie) | **GET** /movies/{id}/lists/{type}/{sort} | Get lists containing this movie
[**get_movie_ratings**](MoviesApi.md#get_movie_ratings) | **GET** /movies/{id}/ratings | Get movie ratings
[**get_movie_stats**](MoviesApi.md#get_movie_stats) | **GET** /movies/{id}/stats | Get movie stats
[**get_movie_studios**](MoviesApi.md#get_movie_studios) | **GET** /movies/{id}/studios | Get movie studios
[**get_popular_movies**](MoviesApi.md#get_popular_movies) | **GET** /movies/popular | Get popular movies
[**get_recently_updated_movie_trakt_ids**](MoviesApi.md#get_recently_updated_movie_trakt_ids) | **GET** /movies/updates/id/{start_date} | Get recently updated movie Trakt IDs
[**get_recently_updated_movies**](MoviesApi.md#get_recently_updated_movies) | **GET** /movies/updates/{start_date} | Get recently updated movies
[**get_related_movies**](MoviesApi.md#get_related_movies) | **GET** /movies/{id}/related | Get related movies
[**get_the_most_anticipated_movies**](MoviesApi.md#get_the_most_anticipated_movies) | **GET** /movies/anticipated | Get the most anticipated movies
[**get_the_most_collected_movies**](MoviesApi.md#get_the_most_collected_movies) | **GET** /movies/collected/{period} | Get the most Collected movies
[**get_the_most_played_movies**](MoviesApi.md#get_the_most_played_movies) | **GET** /movies/played/{period} | Get the most played movies
[**get_the_most_recommended_movies**](MoviesApi.md#get_the_most_recommended_movies) | **GET** /movies/recommended/{period} | Get the most recommended movies
[**get_the_most_watched_movies**](MoviesApi.md#get_the_most_watched_movies) | **GET** /movies/watched/{period} | Get the most watched movies
[**get_the_weekend_box_office**](MoviesApi.md#get_the_weekend_box_office) | **GET** /movies/boxoffice | Get the weekend box office
[**get_trending_movies**](MoviesApi.md#get_trending_movies) | **GET** /movies/trending | Get trending movies
[**get_users_watching_right_now**](MoviesApi.md#get_users_watching_right_now) | **GET** /movies/{id}/watching | Get users watching right now


# **get_a_movie**
> get_a_movie(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get a movie

#### &#10024; Extended Info  Returns a single movie's details.  **Note:** When getting `full` extended info, the `status` field can have a value of `released`, `in production`, `post production`, `planned`, `rumored`, or `canceled`.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get a movie
        api_instance.get_a_movie(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_a_movie: %s\n" % e)
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
**200** | &#x60;&#x60;&#x60; /movies/tron-legacy-2010?extended&#x3D;full &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_movie_aliases**
> get_all_movie_aliases(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all movie aliases

Returns all title aliases for a movie.  Includes country where name is different.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all movie aliases
        api_instance.get_all_movie_aliases(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_all_movie_aliases: %s\n" % e)
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

# **get_all_movie_comments**
> get_all_movie_comments(id, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all movie comments

#### &#128196; Pagination &#128513; Emojis  Returns all top level comments for a movie. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, and most `plays`.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    sort = 'newest' # str | how to sort
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all movie comments
        api_instance.get_all_movie_comments(id, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_all_movie_comments: %s\n" % e)
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

# **get_all_movie_releases**
> get_all_movie_releases(id, country, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all movie releases

Returns all releases for a movie including country, certification, release date, release type, and note. The release type can be set to `unknown`, `premiere`, `limited`, `theatrical`, `digital`, `physical`, or `tv`. The `note` might have optional info such as the film festival name for a `premiere` release or Blu-ray specs for a `physical` release. We pull this info from [TMDB](https://developers.themoviedb.org/3/movies/get-movie-release-dates).

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    country = 'us' # str | 2 character country code
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all movie releases
        api_instance.get_all_movie_releases(id, country, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_all_movie_releases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Trakt ID, Trakt slug, or IMDB ID | 
 **country** | **str**| 2 character country code | 
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

# **get_all_movie_translations**
> get_all_movie_translations(id, language, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all movie translations

Returns all translations for a movie, including language and translated values for title, tagline and overview.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    language = 'es' # str | 2 character language code
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all movie translations
        api_instance.get_all_movie_translations(id, language, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_all_movie_translations: %s\n" % e)
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

# **get_all_people_for_a_movie**
> get_all_people_for_a_movie(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all people for a movie

#### &#10024; Extended Info  Returns all `cast` and `crew` for a movie. Each `cast` member will have a `characters` array and a standard `person` object.  The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all people for a movie
        api_instance.get_all_people_for_a_movie(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_all_people_for_a_movie: %s\n" % e)
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

# **get_lists_containing_this_movie**
> get_lists_containing_this_movie(id, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get lists containing this movie

#### &#128196; Pagination &#128513; Emojis  Returns all lists that contain this movie. By default, `personal` lists are returned sorted by the most `popular`.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    type = 'personal' # str | Filter for a specific list type
    sort = 'popular' # str | How to sort
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get lists containing this movie
        api_instance.get_lists_containing_this_movie(id, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_lists_containing_this_movie: %s\n" % e)
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

# **get_movie_ratings**
> get_movie_ratings(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get movie ratings

Returns rating (between 0 and 10) and distribution for a movie.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get movie ratings
        api_instance.get_movie_ratings(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_movie_ratings: %s\n" % e)
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

# **get_movie_stats**
> get_movie_stats(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get movie stats

Returns lots of movie stats.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get movie stats
        api_instance.get_movie_stats(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_movie_stats: %s\n" % e)
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

# **get_movie_studios**
> get_movie_studios(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get movie studios

Returns all studios for a movie.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get movie studios
        api_instance.get_movie_studios(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_movie_studios: %s\n" % e)
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

# **get_popular_movies**
> get_popular_movies(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get popular movies

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most popular movies. Popularity is calculated using the rating percentage and the number of ratings.

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
    api_instance = openapi_client.MoviesApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get popular movies
        api_instance.get_popular_movies(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_popular_movies: %s\n" % e)
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

# **get_recently_updated_movie_trakt_ids**
> get_recently_updated_movie_trakt_ids(start_date, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get recently updated movie Trakt IDs

#### &#128196; Pagination  Returns all movie Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.  **Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.  **Note:** The `start_date` can only be a maximum of 30 days in the past.

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
    api_instance = openapi_client.MoviesApi(api_client)
    start_date = '2020-11-27T00:00:00Z' # str | Updated since this date and time.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get recently updated movie Trakt IDs
        api_instance.get_recently_updated_movie_trakt_ids(start_date, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_recently_updated_movie_trakt_ids: %s\n" % e)
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

# **get_recently_updated_movies**
> get_recently_updated_movies(start_date, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get recently updated movies

#### &#128196; Pagination &#10024; Extended Info  Returns all movies updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.  **Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.  **Note:** The `start_date` can only be a maximum of 30 days in the past.

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
    api_instance = openapi_client.MoviesApi(api_client)
    start_date = '2020-11-27T00:00:00Z' # str | Updated since this date and time.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get recently updated movies
        api_instance.get_recently_updated_movies(start_date, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_recently_updated_movies: %s\n" % e)
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

# **get_related_movies**
> get_related_movies(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get related movies

#### &#128196; Pagination &#10024; Extended Info  Returns related and similar movies.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get related movies
        api_instance.get_related_movies(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_related_movies: %s\n" % e)
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

# **get_the_most_anticipated_movies**
> get_the_most_anticipated_movies(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the most anticipated movies

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most anticipated movies based on the number of lists a movie appears on.

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
    api_instance = openapi_client.MoviesApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the most anticipated movies
        api_instance.get_the_most_anticipated_movies(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_the_most_anticipated_movies: %s\n" % e)
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

# **get_the_most_collected_movies**
> get_the_most_collected_movies(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the most Collected movies

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most collected (unique users) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

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
    api_instance = openapi_client.MoviesApi(api_client)
    period = 'weekly' # str | Time period.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the most Collected movies
        api_instance.get_the_most_collected_movies(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_the_most_collected_movies: %s\n" % e)
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

# **get_the_most_played_movies**
> get_the_most_played_movies(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the most played movies

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most played (a single user can watch multiple times) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

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
    api_instance = openapi_client.MoviesApi(api_client)
    period = 'weekly' # str | Time period.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the most played movies
        api_instance.get_the_most_played_movies(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_the_most_played_movies: %s\n" % e)
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

# **get_the_most_recommended_movies**
> get_the_most_recommended_movies(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the most recommended movies

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most recommended movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

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
    api_instance = openapi_client.MoviesApi(api_client)
    period = 'weekly' # str | Time period.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the most recommended movies
        api_instance.get_the_most_recommended_movies(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_the_most_recommended_movies: %s\n" % e)
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

# **get_the_most_watched_movies**
> get_the_most_watched_movies(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the most watched movies

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns the most watched (unique users) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

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
    api_instance = openapi_client.MoviesApi(api_client)
    period = 'weekly' # str | Time period.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the most watched movies
        api_instance.get_the_most_watched_movies(period, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_the_most_watched_movies: %s\n" % e)
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

# **get_the_weekend_box_office**
> get_the_weekend_box_office(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the weekend box office

#### &#10024; Extended Info  Returns the top 10 grossing movies in the U.S. box office last weekend. Updated every Monday morning.

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
    api_instance = openapi_client.MoviesApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the weekend box office
        api_instance.get_the_weekend_box_office(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_the_weekend_box_office: %s\n" % e)
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_trending_movies**
> get_trending_movies(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get trending movies

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Returns all movies being watched right now. Movies with the most users are returned first.

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
    api_instance = openapi_client.MoviesApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get trending movies
        api_instance.get_trending_movies(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_trending_movies: %s\n" % e)
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

# **get_users_watching_right_now**
> get_users_watching_right_now(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get users watching right now

#### &#10024; Extended Info  Returns all users watching this movie right now.

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
    api_instance = openapi_client.MoviesApi(api_client)
    id = 'tron-legacy-2010' # str | Trakt ID, Trakt slug, or IMDB ID
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get users watching right now
        api_instance.get_users_watching_right_now(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling MoviesApi->get_users_watching_right_now: %s\n" % e)
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

