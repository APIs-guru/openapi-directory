# openapi_client.WatchlistApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**watchlist_search_read**](WatchlistApi.md#watchlist_search_read) | **GET** /api/v1/watchlist/search/{movie_title} | Return watchlist search result
[**watchlist_searchall_read**](WatchlistApi.md#watchlist_searchall_read) | **GET** /api/v1/watchlist/searchall/{param} | Return watchlist search result


# **watchlist_search_read**
> watchlist_search_read(movie_title)

Return watchlist search result

Return watchlist search result  ### Response Class (Status 200)  * __{movie_title}__: Used as a key word to search movies on watchlist * You can use both Amharic or English charset/font to search  For more details on how watchlist are listed [see here][ref]. [ref]: https://etmdb.com/en/movies/watchlist/id

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
    api_instance = openapi_client.WatchlistApi(api_client)
    movie_title = 'movie_title_example' # str | 

    try:
        # Return watchlist search result
        api_instance.watchlist_search_read(movie_title)
    except Exception as e:
        print("Exception when calling WatchlistApi->watchlist_search_read: %s\n" % e)
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

# **watchlist_searchall_read**
> watchlist_searchall_read(param)

Return watchlist search result

Return watchlist search result  ### Response Class (Status 200) __{param}__ argument can be * artist first name * artist last name * artist username * movie title or  For more details on how watchlist are listed [see here][ref]. [ref]: https://etmdb.com/en/movies/watchlist/id

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
    api_instance = openapi_client.WatchlistApi(api_client)
    param = 'param_example' # str | 

    try:
        # Return watchlist search result
        api_instance.watchlist_searchall_read(param)
    except Exception as e:
        print("Exception when calling WatchlistApi->watchlist_searchall_read: %s\n" % e)
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

