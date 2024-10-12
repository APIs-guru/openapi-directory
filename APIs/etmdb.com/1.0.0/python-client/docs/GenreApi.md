# openapi_client.GenreApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**genre_search_read**](GenreApi.md#genre_search_read) | **GET** /api/v1/genre/search/{movie_title} | Return movie genre search result
[**genre_searchall_read**](GenreApi.md#genre_searchall_read) | **GET** /api/v1/genre/searchall/{movie_genre_type} | Return movie genre search result


# **genre_search_read**
> genre_search_read(movie_title)

Return movie genre search result

Return movie genre search result  ### Response Class (Status 200)  * __{movie_title}__: Used as a key word to search movie genres * You can use both Amharic or English charset/font to search  For more details on how movies are listed [see here][ref]. [ref]: https://etmdb.com/en/movie-list/-updated_date

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
    api_instance = openapi_client.GenreApi(api_client)
    movie_title = 'movie_title_example' # str | 

    try:
        # Return movie genre search result
        api_instance.genre_search_read(movie_title)
    except Exception as e:
        print("Exception when calling GenreApi->genre_search_read: %s\n" % e)
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

# **genre_searchall_read**
> genre_searchall_read(movie_genre_type)

Return movie genre search result

Return movie genre search result  ### Response Class (Status 200)  * __{movie_genre_type}__: Used as a key word to search movie genres  For more details on how movies are listed [see here][ref]. [ref]: https://etmdb.com/en/movie-list/-updated_date

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
    api_instance = openapi_client.GenreApi(api_client)
    movie_genre_type = 'movie_genre_type_example' # str | 

    try:
        # Return movie genre search result
        api_instance.genre_searchall_read(movie_genre_type)
    except Exception as e:
        print("Exception when calling GenreApi->genre_searchall_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movie_genre_type** | **str**|  | 

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

