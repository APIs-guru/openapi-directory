# openapi_client.TelevisionShowsEpisodesStatusesApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_tv_show_post**](TelevisionShowsEpisodesStatusesApi.md#add_tv_show_post) | **POST** /AddTVShow | Add new show to database
[**episodes_by_id_get**](TelevisionShowsEpisodesStatusesApi.md#episodes_by_id_get) | **GET** /Episodes/ByID/{AccessToken}/{ID} | Gets all episodes for selected ID
[**episodes_by_season_get**](TelevisionShowsEpisodesStatusesApi.md#episodes_by_season_get) | **GET** /Episodes/BySeason/{AccessToken}/{ID}/{Season} | Gets list of episodes for specified imdbID and Season number
[**episodes_get**](TelevisionShowsEpisodesStatusesApi.md#episodes_get) | **GET** /Episodes/ByShowName/{AccessToken}/{Showname} | Gets all episodes for selected show
[**episodes_last_available_season_get**](TelevisionShowsEpisodesStatusesApi.md#episodes_last_available_season_get) | **GET** /Episodes/LatestSeason/{AccessToken}/{ID} | Returns last available season number in database, based on passed imdbID
[**episodes_last_available_seasonby_name_get**](TelevisionShowsEpisodesStatusesApi.md#episodes_last_available_seasonby_name_get) | **GET** /Episodes/LatestSeason/Show/{AccessToken}/{Name} | Gets latest season number based on show name
[**episodes_season_count_get**](TelevisionShowsEpisodesStatusesApi.md#episodes_season_count_get) | **GET** /Episodes/SeasonCount/{AccessToken}/{ID} | Returns number of available seasons and episodes
[**show_status_get**](TelevisionShowsEpisodesStatusesApi.md#show_status_get) | **GET** /Status/{AccessToken}/{Query} | Returns status of queried show (query can be IMDB, TVDB, or showname)
[**t_v_show_by_name_get**](TelevisionShowsEpisodesStatusesApi.md#t_v_show_by_name_get) | **GET** /TV/ByName/{AccessToken}/{Query} | Returns results based on query, result set limited to 5 records
[**t_v_show_id_get**](TelevisionShowsEpisodesStatusesApi.md#t_v_show_id_get) | **GET** /TV/ByID/{accesstoken}/{imdbID} | Returns TVShow information based on IMDBid


# **add_tv_show_post**
> PostResult add_tv_show_post(value)

Add new show to database

### Example


```python
import openapi_client
from openapi_client.models.post_result import PostResult
from openapi_client.models.tv_information_post import TVInformationPost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelevisionShowsEpisodesStatusesApi(api_client)
    value = openapi_client.TVInformationPost() # TVInformationPost | 

    try:
        # Add new show to database
        api_response = api_instance.add_tv_show_post(value)
        print("The response of TelevisionShowsEpisodesStatusesApi->add_tv_show_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelevisionShowsEpisodesStatusesApi->add_tv_show_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**TVInformationPost**](TVInformationPost.md)|  | 

### Return type

[**PostResult**](PostResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Result |  -  |
**204** | Result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **episodes_by_id_get**
> List[Episode] episodes_by_id_get(access_token, id)

Gets all episodes for selected ID

### Example


```python
import openapi_client
from openapi_client.models.episode import Episode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelevisionShowsEpisodesStatusesApi(api_client)
    access_token = 'access_token_example' # str | 
    id = 'id_example' # str | imdbID

    try:
        # Gets all episodes for selected ID
        api_response = api_instance.episodes_by_id_get(access_token, id)
        print("The response of TelevisionShowsEpisodesStatusesApi->episodes_by_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelevisionShowsEpisodesStatusesApi->episodes_by_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **id** | **str**| imdbID | 

### Return type

[**List[Episode]**](Episode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of episodes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **episodes_by_season_get**
> List[Episode] episodes_by_season_get(access_token, id, season)

Gets list of episodes for specified imdbID and Season number

### Example


```python
import openapi_client
from openapi_client.models.episode import Episode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelevisionShowsEpisodesStatusesApi(api_client)
    access_token = 'access_token_example' # str | 
    id = 'id_example' # str | imdbID
    season = 'season_example' # str | Season number

    try:
        # Gets list of episodes for specified imdbID and Season number
        api_response = api_instance.episodes_by_season_get(access_token, id, season)
        print("The response of TelevisionShowsEpisodesStatusesApi->episodes_by_season_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelevisionShowsEpisodesStatusesApi->episodes_by_season_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **id** | **str**| imdbID | 
 **season** | **str**| Season number | 

### Return type

[**List[Episode]**](Episode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of episodes for specified season |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **episodes_get**
> List[Episode] episodes_get(access_token, showname)

Gets all episodes for selected show

### Example


```python
import openapi_client
from openapi_client.models.episode import Episode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelevisionShowsEpisodesStatusesApi(api_client)
    access_token = 'access_token_example' # str | 
    showname = 'showname_example' # str | 

    try:
        # Gets all episodes for selected show
        api_response = api_instance.episodes_get(access_token, showname)
        print("The response of TelevisionShowsEpisodesStatusesApi->episodes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelevisionShowsEpisodesStatusesApi->episodes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **showname** | **str**|  | 

### Return type

[**List[Episode]**](Episode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of episodes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **episodes_last_available_season_get**
> LastAvailableSeason episodes_last_available_season_get(access_token, id)

Returns last available season number in database, based on passed imdbID

### Example


```python
import openapi_client
from openapi_client.models.last_available_season import LastAvailableSeason
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelevisionShowsEpisodesStatusesApi(api_client)
    access_token = 'access_token_example' # str | 
    id = 'id_example' # str | imdbID

    try:
        # Returns last available season number in database, based on passed imdbID
        api_response = api_instance.episodes_last_available_season_get(access_token, id)
        print("The response of TelevisionShowsEpisodesStatusesApi->episodes_last_available_season_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelevisionShowsEpisodesStatusesApi->episodes_last_available_season_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **id** | **str**| imdbID | 

### Return type

[**LastAvailableSeason**](LastAvailableSeason.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns last available Season Number for passed imdbID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **episodes_last_available_seasonby_name_get**
> LastAvailableSeason episodes_last_available_seasonby_name_get(access_token, name)

Gets latest season number based on show name

### Example


```python
import openapi_client
from openapi_client.models.last_available_season import LastAvailableSeason
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelevisionShowsEpisodesStatusesApi(api_client)
    access_token = 'access_token_example' # str | 
    name = 'name_example' # str | 

    try:
        # Gets latest season number based on show name
        api_response = api_instance.episodes_last_available_seasonby_name_get(access_token, name)
        print("The response of TelevisionShowsEpisodesStatusesApi->episodes_last_available_seasonby_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelevisionShowsEpisodesStatusesApi->episodes_last_available_seasonby_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **name** | **str**|  | 

### Return type

[**LastAvailableSeason**](LastAvailableSeason.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns last available Season Number for passed showname |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **episodes_season_count_get**
> TVShowSeasons episodes_season_count_get(access_token, id)

Returns number of available seasons and episodes

### Example


```python
import openapi_client
from openapi_client.models.tv_show_seasons import TVShowSeasons
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelevisionShowsEpisodesStatusesApi(api_client)
    access_token = 'access_token_example' # str | 
    id = 'id_example' # str | imdbID

    try:
        # Returns number of available seasons and episodes
        api_response = api_instance.episodes_season_count_get(access_token, id)
        print("The response of TelevisionShowsEpisodesStatusesApi->episodes_season_count_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelevisionShowsEpisodesStatusesApi->episodes_season_count_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **id** | **str**| imdbID | 

### Return type

[**TVShowSeasons**](TVShowSeasons.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns number of seasons available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_status_get**
> List[ShowStatus] show_status_get(access_token, query)

Returns status of queried show (query can be IMDB, TVDB, or showname)

### Example


```python
import openapi_client
from openapi_client.models.show_status import ShowStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelevisionShowsEpisodesStatusesApi(api_client)
    access_token = 'access_token_example' # str | 
    query = 'query_example' # str | Query can be IMDB, TVDB, or Show name

    try:
        # Returns status of queried show (query can be IMDB, TVDB, or showname)
        api_response = api_instance.show_status_get(access_token, query)
        print("The response of TelevisionShowsEpisodesStatusesApi->show_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelevisionShowsEpisodesStatusesApi->show_status_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **query** | **str**| Query can be IMDB, TVDB, or Show name | 

### Return type

[**List[ShowStatus]**](ShowStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of statuses |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **t_v_show_by_name_get**
> List[TVInformation] t_v_show_by_name_get(access_token, query)

Returns results based on query, result set limited to 5 records

### Example


```python
import openapi_client
from openapi_client.models.tv_information import TVInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelevisionShowsEpisodesStatusesApi(api_client)
    access_token = 'access_token_example' # str | 
    query = 'query_example' # str | 

    try:
        # Returns results based on query, result set limited to 5 records
        api_response = api_instance.t_v_show_by_name_get(access_token, query)
        print("The response of TelevisionShowsEpisodesStatusesApi->t_v_show_by_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelevisionShowsEpisodesStatusesApi->t_v_show_by_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **query** | **str**|  | 

### Return type

[**List[TVInformation]**](TVInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of television show information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **t_v_show_id_get**
> TVInformation t_v_show_id_get(accesstoken, id, imdb_id)

Returns TVShow information based on IMDBid

### Example


```python
import openapi_client
from openapi_client.models.tv_information import TVInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelevisionShowsEpisodesStatusesApi(api_client)
    accesstoken = 'accesstoken_example' # str | 
    id = 'id_example' # str | imdbID of show you want info on
    imdb_id = 'imdb_id_example' # str | 

    try:
        # Returns TVShow information based on IMDBid
        api_response = api_instance.t_v_show_id_get(accesstoken, id, imdb_id)
        print("The response of TelevisionShowsEpisodesStatusesApi->t_v_show_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelevisionShowsEpisodesStatusesApi->t_v_show_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accesstoken** | **str**|  | 
 **id** | **str**| imdbID of show you want info on | 
 **imdb_id** | **str**|  | 

### Return type

[**TVInformation**](TVInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Television show information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

