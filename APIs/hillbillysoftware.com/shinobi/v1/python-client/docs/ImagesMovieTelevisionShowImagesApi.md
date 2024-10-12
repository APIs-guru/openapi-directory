# openapi_client.ImagesMovieTelevisionShowImagesApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**image_search_get**](ImagesMovieTelevisionShowImagesApi.md#image_search_get) | **GET** /Images/Search/{Accesstoken}/{Query} | Get images available for movie/tv show with passed query
[**images_get**](ImagesMovieTelevisionShowImagesApi.md#images_get) | **GET** /Images/ByID/{AccessToken}/{imdbID} | Get images available for movie/tv show with passed imdbID


# **image_search_get**
> List[ImdbImages] image_search_get(accesstoken, query, strictmatch=strictmatch)

Get images available for movie/tv show with passed query

### Example


```python
import openapi_client
from openapi_client.models.imdb_images import ImdbImages
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
    api_instance = openapi_client.ImagesMovieTelevisionShowImagesApi(api_client)
    accesstoken = 'accesstoken_example' # str | 
    query = 'query_example' # str | Name or part of name from Movie or Show
    strictmatch = True # bool |  (optional)

    try:
        # Get images available for movie/tv show with passed query
        api_response = api_instance.image_search_get(accesstoken, query, strictmatch=strictmatch)
        print("The response of ImagesMovieTelevisionShowImagesApi->image_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesMovieTelevisionShowImagesApi->image_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accesstoken** | **str**|  | 
 **query** | **str**| Name or part of name from Movie or Show | 
 **strictmatch** | **bool**|  | [optional] 

### Return type

[**List[ImdbImages]**](ImdbImages.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of images |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_get**
> List[ImdbImages] images_get(access_token, imdb_id)

Get images available for movie/tv show with passed imdbID

### Example


```python
import openapi_client
from openapi_client.models.imdb_images import ImdbImages
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
    api_instance = openapi_client.ImagesMovieTelevisionShowImagesApi(api_client)
    access_token = 'access_token_example' # str | 
    imdb_id = 'imdb_id_example' # str | 

    try:
        # Get images available for movie/tv show with passed imdbID
        api_response = api_instance.images_get(access_token, imdb_id)
        print("The response of ImagesMovieTelevisionShowImagesApi->images_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesMovieTelevisionShowImagesApi->images_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **imdb_id** | **str**|  | 

### Return type

[**List[ImdbImages]**](ImdbImages.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of images |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

