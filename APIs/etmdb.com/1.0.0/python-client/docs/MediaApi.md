# openapi_client.MediaApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**media_search_read**](MediaApi.md#media_search_read) | **GET** /api/v1/media/search/{movie_title} | Return movie media search result
[**media_searchall_read**](MediaApi.md#media_searchall_read) | **GET** /api/v1/media/searchall/{user} | Return cast media search result


# **media_search_read**
> media_search_read(movie_title)

Return movie media search result

Return movie media search result  ### Response Class (Status 200)  * __{movie_title}__: Used as a key word to search media for movies * You can use both Amharic or English charset/font to search  For more details on how media is listed [see here][ref]. [ref]: https://etmdb.com/en/movie-list/-updated_date

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
    api_instance = openapi_client.MediaApi(api_client)
    movie_title = 'movie_title_example' # str | 

    try:
        # Return movie media search result
        api_instance.media_search_read(movie_title)
    except Exception as e:
        print("Exception when calling MediaApi->media_search_read: %s\n" % e)
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

# **media_searchall_read**
> media_searchall_read(user)

Return cast media search result

Return cast media search result  ### Response Class (Status 200) __{user}__ argument can be * artist first name * artist last name * artist username  For more details on how cast media is listed [see here][ref]. [ref]: https://etmdb.com/en/cast-list/-updated_date

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
    api_instance = openapi_client.MediaApi(api_client)
    user = 'user_example' # str | 

    try:
        # Return cast media search result
        api_instance.media_searchall_read(user)
    except Exception as e:
        print("Exception when calling MediaApi->media_searchall_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **str**|  | 

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

