# openapi_client.GenreTypeApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**genre_type_search_read**](GenreTypeApi.md#genre_type_search_read) | **GET** /api/v1/genre-type/search/{genre_description} | Return genre type search result


# **genre_type_search_read**
> genre_type_search_read(genre_description)

Return genre type search result

Return genre type search result  ### Response Class (Status 200)  * __{genre_description}__: Used as a key word to search genre types  For more details on how genre types are listed [see here][ref]. [ref]: https://etmdb.com/en/movie-list/-updated_date

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
    api_instance = openapi_client.GenreTypeApi(api_client)
    genre_description = 'genre_description_example' # str | 

    try:
        # Return genre type search result
        api_instance.genre_type_search_read(genre_description)
    except Exception as e:
        print("Exception when calling GenreTypeApi->genre_type_search_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genre_description** | **str**|  | 

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

