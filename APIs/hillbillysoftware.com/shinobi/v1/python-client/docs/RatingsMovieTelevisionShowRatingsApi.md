# openapi_client.RatingsMovieTelevisionShowRatingsApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rating_by_name_get**](RatingsMovieTelevisionShowRatingsApi.md#rating_by_name_get) | **GET** /Rating/ByName/{AccessToken}/{Name} | 
[**rating_get**](RatingsMovieTelevisionShowRatingsApi.md#rating_get) | **GET** /Rating/ByID/{AccessToken}/{imdbID} | Returns ratings from various resources(IMDB,Rotten Tomatoes, metaCritics, TVMaze etc) of passed IMDBid


# **rating_by_name_get**
> List[RatingItem] rating_by_name_get(access_token, name)



### Example


```python
import openapi_client
from openapi_client.models.rating_item import RatingItem
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
    api_instance = openapi_client.RatingsMovieTelevisionShowRatingsApi(api_client)
    access_token = 'access_token_example' # str | 
    name = 'name_example' # str | 

    try:
        api_response = api_instance.rating_by_name_get(access_token, name)
        print("The response of RatingsMovieTelevisionShowRatingsApi->rating_by_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RatingsMovieTelevisionShowRatingsApi->rating_by_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **name** | **str**|  | 

### Return type

[**List[RatingItem]**](RatingItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ratings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rating_get**
> RatingItem rating_get(access_token, imdb_id)

Returns ratings from various resources(IMDB,Rotten Tomatoes, metaCritics, TVMaze etc) of passed IMDBid

### Example


```python
import openapi_client
from openapi_client.models.rating_item import RatingItem
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
    api_instance = openapi_client.RatingsMovieTelevisionShowRatingsApi(api_client)
    access_token = 'access_token_example' # str | 
    imdb_id = 'imdb_id_example' # str | 

    try:
        # Returns ratings from various resources(IMDB,Rotten Tomatoes, metaCritics, TVMaze etc) of passed IMDBid
        api_response = api_instance.rating_get(access_token, imdb_id)
        print("The response of RatingsMovieTelevisionShowRatingsApi->rating_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RatingsMovieTelevisionShowRatingsApi->rating_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **imdb_id** | **str**|  | 

### Return type

[**RatingItem**](RatingItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ratings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

