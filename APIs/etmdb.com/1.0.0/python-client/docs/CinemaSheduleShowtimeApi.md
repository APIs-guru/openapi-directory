# openapi_client.CinemaSheduleShowtimeApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cinema_shedule_showtime_search_read**](CinemaSheduleShowtimeApi.md#cinema_shedule_showtime_search_read) | **GET** /api/v1/cinema-shedule-showtime/search/{movie_title} | Return cinema schedule and showtime search result
[**cinema_shedule_showtime_searchall_read**](CinemaSheduleShowtimeApi.md#cinema_shedule_showtime_searchall_read) | **GET** /api/v1/cinema-shedule-showtime/searchall/{param} | Return cinema schedule and showtime search result


# **cinema_shedule_showtime_search_read**
> cinema_shedule_showtime_search_read(movie_title)

Return cinema schedule and showtime search result

Return cinema schedule and showtime search result  ### Response Class (Status 200) * __{movie_title}__: Used as a key word to search movie cast * You can use both Amharic or English charset/font to search  For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref]. [ref]: https://etmdb.com/en/movie-list/-updated_date

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
    api_instance = openapi_client.CinemaSheduleShowtimeApi(api_client)
    movie_title = 'movie_title_example' # str | 

    try:
        # Return cinema schedule and showtime search result
        api_instance.cinema_shedule_showtime_search_read(movie_title)
    except Exception as e:
        print("Exception when calling CinemaSheduleShowtimeApi->cinema_shedule_showtime_search_read: %s\n" % e)
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

# **cinema_shedule_showtime_searchall_read**
> cinema_shedule_showtime_searchall_read(param)

Return cinema schedule and showtime search result

Return cinema schedule and showtime search result  ### Response Class (Status 200) __{param}__ argument can be * movie title * cinema name * cinema hall name * showtime starting date * showtime ending date or * cinema technology  For more details about cinema schedule, check each cinema from the cinema list [see here][ref]. [ref]: https://etmdb.com/en/movie-list/-updated_date

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
    api_instance = openapi_client.CinemaSheduleShowtimeApi(api_client)
    param = 'param_example' # str | 

    try:
        # Return cinema schedule and showtime search result
        api_instance.cinema_shedule_showtime_searchall_read(param)
    except Exception as e:
        print("Exception when calling CinemaSheduleShowtimeApi->cinema_shedule_showtime_searchall_read: %s\n" % e)
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

