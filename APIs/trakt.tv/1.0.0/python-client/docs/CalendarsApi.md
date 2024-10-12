# openapi_client.CalendarsApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calendars_all_dvd_start_date_days_get**](CalendarsApi.md#calendars_all_dvd_start_date_days_get) | **GET** /calendars/all/dvd/{start_date}/{days} | Get DVD releases
[**calendars_all_movies_start_date_days_get**](CalendarsApi.md#calendars_all_movies_start_date_days_get) | **GET** /calendars/all/movies/{start_date}/{days} | Get movies
[**calendars_all_shows_new_start_date_days_get**](CalendarsApi.md#calendars_all_shows_new_start_date_days_get) | **GET** /calendars/all/shows/new/{start_date}/{days} | Get new shows
[**calendars_all_shows_premieres_start_date_days_get**](CalendarsApi.md#calendars_all_shows_premieres_start_date_days_get) | **GET** /calendars/all/shows/premieres/{start_date}/{days} | Get season premieres
[**calendars_all_shows_start_date_days_get**](CalendarsApi.md#calendars_all_shows_start_date_days_get) | **GET** /calendars/all/shows/{start_date}/{days} | Get shows
[**get_dvd_releases**](CalendarsApi.md#get_dvd_releases) | **GET** /calendars/my/dvd/{start_date}/{days} | Get DVD releases
[**get_movies**](CalendarsApi.md#get_movies) | **GET** /calendars/my/movies/{start_date}/{days} | Get movies
[**get_new_shows**](CalendarsApi.md#get_new_shows) | **GET** /calendars/my/shows/new/{start_date}/{days} | Get new shows
[**get_season_premieres**](CalendarsApi.md#get_season_premieres) | **GET** /calendars/my/shows/premieres/{start_date}/{days} | Get season premieres
[**get_shows**](CalendarsApi.md#get_shows) | **GET** /calendars/my/shows/{start_date}/{days} | Get shows


# **calendars_all_dvd_start_date_days_get**
> calendars_all_dvd_start_date_days_get(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get DVD releases

#### &#10024; Extended Info &#127898; Filters  Returns all movies with a DVD release date during the time period specified.

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
    api_instance = openapi_client.CalendarsApi(api_client)
    start_date = '2014-09-01' # str | Start the calendar on this date.
    days = 7 # int | Number of days to display.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get DVD releases
        api_instance.calendars_all_dvd_start_date_days_get(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CalendarsApi->calendars_all_dvd_start_date_days_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start the calendar on this date. | 
 **days** | **int**| Number of days to display. | 
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
**200** | OK |  * X-End-Date -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendars_all_movies_start_date_days_get**
> calendars_all_movies_start_date_days_get(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get movies

#### &#10024; Extended Info &#127898; Filters  Returns all movies with a release date during the time period specified.

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
    api_instance = openapi_client.CalendarsApi(api_client)
    start_date = '2014-09-01' # str | Start the calendar on this date.
    days = 7 # int | Number of days to display.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get movies
        api_instance.calendars_all_movies_start_date_days_get(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CalendarsApi->calendars_all_movies_start_date_days_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start the calendar on this date. | 
 **days** | **int**| Number of days to display. | 
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
**200** | OK |  * X-End-Date -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendars_all_shows_new_start_date_days_get**
> calendars_all_shows_new_start_date_days_get(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get new shows

#### &#10024; Extended Info &#127898; Filters  Returns all new show premieres (season 1, episode 1) airing during the time period specified.

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
    api_instance = openapi_client.CalendarsApi(api_client)
    start_date = '2014-09-01' # str | Start the calendar on this date.
    days = 7 # int | Number of days to display.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get new shows
        api_instance.calendars_all_shows_new_start_date_days_get(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CalendarsApi->calendars_all_shows_new_start_date_days_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start the calendar on this date. | 
 **days** | **int**| Number of days to display. | 
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
**200** | OK |  * X-End-Date -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendars_all_shows_premieres_start_date_days_get**
> calendars_all_shows_premieres_start_date_days_get(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get season premieres

#### &#10024; Extended Info &#127898; Filters  Returns all show premieres (any season, episode 1) airing during the time period specified.

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
    api_instance = openapi_client.CalendarsApi(api_client)
    start_date = '2014-09-01' # str | Start the calendar on this date.
    days = 7 # int | Number of days to display.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get season premieres
        api_instance.calendars_all_shows_premieres_start_date_days_get(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CalendarsApi->calendars_all_shows_premieres_start_date_days_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start the calendar on this date. | 
 **days** | **int**| Number of days to display. | 
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
**200** | OK |  * X-End-Date -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendars_all_shows_start_date_days_get**
> calendars_all_shows_start_date_days_get(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get shows

#### &#10024; Extended Info &#127898; Filters  Returns all shows airing during the time period specified.

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
    api_instance = openapi_client.CalendarsApi(api_client)
    start_date = '2014-09-01' # str | Start the calendar on this date.
    days = 7 # int | Number of days to display.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get shows
        api_instance.calendars_all_shows_start_date_days_get(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CalendarsApi->calendars_all_shows_start_date_days_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start the calendar on this date. | 
 **days** | **int**| Number of days to display. | 
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
**200** | OK |  * X-End-Date -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dvd_releases**
> get_dvd_releases(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get DVD releases

#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters  Returns all movies with a DVD release date during the time period specified.

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
    api_instance = openapi_client.CalendarsApi(api_client)
    start_date = '2014-09-01' # str | Start the calendar on this date.
    days = 7 # int | Number of days to display.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get DVD releases
        api_instance.get_dvd_releases(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CalendarsApi->get_dvd_releases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start the calendar on this date. | 
 **days** | **int**| Number of days to display. | 
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
**200** | OK |  * X-End-Date -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_movies**
> get_movies(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get movies

#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters  Returns all movies with a release date during the time period specified.

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
    api_instance = openapi_client.CalendarsApi(api_client)
    start_date = '2014-09-01' # str | Start the calendar on this date.
    days = 7 # int | Number of days to display.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get movies
        api_instance.get_movies(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CalendarsApi->get_movies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start the calendar on this date. | 
 **days** | **int**| Number of days to display. | 
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
**200** | OK |  * X-End-Date -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_new_shows**
> get_new_shows(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get new shows

#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters  Returns all new show premieres (season 1, episode 1) airing during the time period specified.

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
    api_instance = openapi_client.CalendarsApi(api_client)
    start_date = '2014-09-01' # str | Start the calendar on this date.
    days = 7 # int | Number of days to display.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get new shows
        api_instance.get_new_shows(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CalendarsApi->get_new_shows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start the calendar on this date. | 
 **days** | **int**| Number of days to display. | 
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
**200** | OK |  * X-End-Date -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_season_premieres**
> get_season_premieres(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get season premieres

#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters  Returns all show premieres (any season, episode 1) airing during the time period specified.

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
    api_instance = openapi_client.CalendarsApi(api_client)
    start_date = '2014-09-01' # str | Start the calendar on this date.
    days = 7 # int | Number of days to display.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get season premieres
        api_instance.get_season_premieres(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CalendarsApi->get_season_premieres: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start the calendar on this date. | 
 **days** | **int**| Number of days to display. | 
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
**200** | OK |  * X-End-Date -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_shows**
> get_shows(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get shows

#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters  Returns all shows airing during the time period specified.

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
    api_instance = openapi_client.CalendarsApi(api_client)
    start_date = '2014-09-01' # str | Start the calendar on this date.
    days = 7 # int | Number of days to display.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get shows
        api_instance.get_shows(start_date, days, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CalendarsApi->get_shows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start the calendar on this date. | 
 **days** | **int**| Number of days to display. | 
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
**200** | OK |  * X-End-Date -  <br>  * X-Start-Date -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

