# openapi_client.MagnetsMagnetHashesOfMoviesTelevisionShowsApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**magnets_by_date_get_async**](MagnetsMagnetHashesOfMoviesTelevisionShowsApi.md#magnets_by_date_get_async) | **GET** /Magnets/ByDate/{AccessToken}/{Date} | Gets available magnet hashes on passed date (yyyy-mm-dd).  Feature not available on free plan, please donate to be able to use this feature.
[**magnets_byimdb_id_get_async**](MagnetsMagnetHashesOfMoviesTelevisionShowsApi.md#magnets_byimdb_id_get_async) | **GET** /Magnets/ByIMDB/{AccessToken}/{imdbID} | Returns list of magnet hashes for passed IMDBID.  Feature not available on free plan, please donate to be able to use this feature.
[**magnets_movie_by_id_get_async**](MagnetsMagnetHashesOfMoviesTelevisionShowsApi.md#magnets_movie_by_id_get_async) | **GET** /Magnets/Search/{AccessToken}/{Query} | Try and find magnet links for queried movie.  Feature not available on free plan, please donate to be able to use this feature
[**t_v_showsearch_get**](MagnetsMagnetHashesOfMoviesTelevisionShowsApi.md#t_v_showsearch_get) | **GET** /Magnets/TVShow/{AccessToken}/{TVShow} | Returns results based on query, Feature not available on free plan, please donate to be able to use this feature.


# **magnets_by_date_get_async**
> List[Magnets] magnets_by_date_get_async(access_token, var_date)

Gets available magnet hashes on passed date (yyyy-mm-dd).  Feature not available on free plan, please donate to be able to use this feature.

### Example


```python
import openapi_client
from openapi_client.models.magnets import Magnets
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
    api_instance = openapi_client.MagnetsMagnetHashesOfMoviesTelevisionShowsApi(api_client)
    access_token = 'access_token_example' # str | 
    var_date = 'var_date_example' # str | 

    try:
        # Gets available magnet hashes on passed date (yyyy-mm-dd).  Feature not available on free plan, please donate to be able to use this feature.
        api_response = api_instance.magnets_by_date_get_async(access_token, var_date)
        print("The response of MagnetsMagnetHashesOfMoviesTelevisionShowsApi->magnets_by_date_get_async:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MagnetsMagnetHashesOfMoviesTelevisionShowsApi->magnets_by_date_get_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **var_date** | **str**|  | 

### Return type

[**List[Magnets]**](Magnets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of magnet hashes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **magnets_byimdb_id_get_async**
> List[Magnets] magnets_byimdb_id_get_async(access_token, imdb_id)

Returns list of magnet hashes for passed IMDBID.  Feature not available on free plan, please donate to be able to use this feature.

### Example


```python
import openapi_client
from openapi_client.models.magnets import Magnets
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
    api_instance = openapi_client.MagnetsMagnetHashesOfMoviesTelevisionShowsApi(api_client)
    access_token = 'access_token_example' # str | 
    imdb_id = 'imdb_id_example' # str | ID with or without tt prefix

    try:
        # Returns list of magnet hashes for passed IMDBID.  Feature not available on free plan, please donate to be able to use this feature.
        api_response = api_instance.magnets_byimdb_id_get_async(access_token, imdb_id)
        print("The response of MagnetsMagnetHashesOfMoviesTelevisionShowsApi->magnets_byimdb_id_get_async:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MagnetsMagnetHashesOfMoviesTelevisionShowsApi->magnets_byimdb_id_get_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **imdb_id** | **str**| ID with or without tt prefix | 

### Return type

[**List[Magnets]**](Magnets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of magnet hashes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **magnets_movie_by_id_get_async**
> List[Magnets] magnets_movie_by_id_get_async(access_token, query)

Try and find magnet links for queried movie.  Feature not available on free plan, please donate to be able to use this feature

### Example


```python
import openapi_client
from openapi_client.models.magnets import Magnets
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
    api_instance = openapi_client.MagnetsMagnetHashesOfMoviesTelevisionShowsApi(api_client)
    access_token = 'access_token_example' # str | 
    query = 'query_example' # str | Name or part of name of movie or tv show

    try:
        # Try and find magnet links for queried movie.  Feature not available on free plan, please donate to be able to use this feature
        api_response = api_instance.magnets_movie_by_id_get_async(access_token, query)
        print("The response of MagnetsMagnetHashesOfMoviesTelevisionShowsApi->magnets_movie_by_id_get_async:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MagnetsMagnetHashesOfMoviesTelevisionShowsApi->magnets_movie_by_id_get_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **query** | **str**| Name or part of name of movie or tv show | 

### Return type

[**List[Magnets]**](Magnets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of magnet hashes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **t_v_showsearch_get**
> List[Magnets] t_v_showsearch_get(access_token, tv_show)

Returns results based on query, Feature not available on free plan, please donate to be able to use this feature.

### Example


```python
import openapi_client
from openapi_client.models.magnets import Magnets
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
    api_instance = openapi_client.MagnetsMagnetHashesOfMoviesTelevisionShowsApi(api_client)
    access_token = 'access_token_example' # str | 
    tv_show = 'tv_show_example' # str | 

    try:
        # Returns results based on query, Feature not available on free plan, please donate to be able to use this feature.
        api_response = api_instance.t_v_showsearch_get(access_token, tv_show)
        print("The response of MagnetsMagnetHashesOfMoviesTelevisionShowsApi->t_v_showsearch_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MagnetsMagnetHashesOfMoviesTelevisionShowsApi->t_v_showsearch_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **tv_show** | **str**|  | 

### Return type

[**List[Magnets]**](Magnets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of magnet hashes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

