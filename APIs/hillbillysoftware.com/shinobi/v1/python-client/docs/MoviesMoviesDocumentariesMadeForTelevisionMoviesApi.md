# openapi_client.MoviesMoviesDocumentariesMadeForTelevisionMoviesApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movie_id_get**](MoviesMoviesDocumentariesMadeForTelevisionMoviesApi.md#movie_id_get) | **GET** /Movie/ByID/{accesstoken}/{imdbID} | 
[**movie_search_get_async**](MoviesMoviesDocumentariesMadeForTelevisionMoviesApi.md#movie_search_get_async) | **GET** /Movie/Search/{AccessToken}/{Query} | Searches for movies, result set limited to 5 records


# **movie_id_get**
> MovieInformation movie_id_get(accesstoken, imdb_id)



### Example


```python
import openapi_client
from openapi_client.models.movie_information import MovieInformation
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
    api_instance = openapi_client.MoviesMoviesDocumentariesMadeForTelevisionMoviesApi(api_client)
    accesstoken = 'accesstoken_example' # str | 
    imdb_id = 'imdb_id_example' # str | 

    try:
        api_response = api_instance.movie_id_get(accesstoken, imdb_id)
        print("The response of MoviesMoviesDocumentariesMadeForTelevisionMoviesApi->movie_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MoviesMoviesDocumentariesMadeForTelevisionMoviesApi->movie_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accesstoken** | **str**|  | 
 **imdb_id** | **str**|  | 

### Return type

[**MovieInformation**](MovieInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Movie information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **movie_search_get_async**
> List[MovieInformation] movie_search_get_async(access_token, query)

Searches for movies, result set limited to 5 records

### Example


```python
import openapi_client
from openapi_client.models.movie_information import MovieInformation
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
    api_instance = openapi_client.MoviesMoviesDocumentariesMadeForTelevisionMoviesApi(api_client)
    access_token = 'access_token_example' # str | 
    query = 'query_example' # str | 

    try:
        # Searches for movies, result set limited to 5 records
        api_response = api_instance.movie_search_get_async(access_token, query)
        print("The response of MoviesMoviesDocumentariesMadeForTelevisionMoviesApi->movie_search_get_async:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MoviesMoviesDocumentariesMadeForTelevisionMoviesApi->movie_search_get_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **query** | **str**|  | 

### Return type

[**List[MovieInformation]**](MovieInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of information about queried movie(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

