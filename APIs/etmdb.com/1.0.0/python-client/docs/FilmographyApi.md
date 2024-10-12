# openapi_client.FilmographyApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filmography_search_read**](FilmographyApi.md#filmography_search_read) | **GET** /api/v1/filmography/search/{movie_title} | Return filmography search result
[**filmography_searchall_read**](FilmographyApi.md#filmography_searchall_read) | **GET** /api/v1/filmography/searchall/{param} | Return filmography search result


# **filmography_search_read**
> filmography_search_read(movie_title)

Return filmography search result

Return filmography search result  ### Response Class (Status 200)  * __{movie_title}__: Used as a key word to search movies * You can use both Amharic or English charset/font to search  For more details on how filmographies are listed [see here][ref]. [ref]: https://etmdb.com/en/movie-list/-updated_date

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://etmdb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://etmdb.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilmographyApi(api_client)
    movie_title = 'movie_title_example' # str | 

    try:
        # Return filmography search result
        api_instance.filmography_search_read(movie_title)
    except Exception as e:
        print("Exception when calling FilmographyApi->filmography_search_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movie_title** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filmography_searchall_read**
> filmography_searchall_read(param)

Return filmography search result

Return filmography search result  ### Response Class (Status 200) __{param}__ argument can be * artist first name * artist last name * artist username * movie title or * filmography description (such as director, actor, producer, etc)  For more details on how filmographies are listed [see here][ref]. [ref]: https://etmdb.com/en/movie-list/-updated_date

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://etmdb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://etmdb.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilmographyApi(api_client)
    param = 'param_example' # str | 

    try:
        # Return filmography search result
        api_instance.filmography_searchall_read(param)
    except Exception as e:
        print("Exception when calling FilmographyApi->filmography_searchall_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

