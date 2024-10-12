# openapi_client.DefaultApi

All URIs are relative to *https://api.json2video.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_movies**](DefaultApi.md#get_movies) | **GET** /movies | Get the status of your movies
[**new_movie**](DefaultApi.md#new_movie) | **POST** /movies | Create a new movie


# **get_movies**
> get_movies()

Get the status of your movies

Get the status any of your movies by passing your project ID in the <code>project</code> query parameter. You can get your project ID from the response of the POST request.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.json2video.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.json2video.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Get the status of your movies
        api_instance.get_movies()
    except Exception as e:
        print("Exception when calling DefaultApi->get_movies: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **new_movie**
> new_movie(movie)

Create a new movie

Submit a new movie rendering job.

### Example


```python
import openapi_client
from openapi_client.models.movie import Movie
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.json2video.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.json2video.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    movie = openapi_client.Movie() # Movie | 

    try:
        # Create a new movie
        api_instance.new_movie(movie)
    except Exception as e:
        print("Exception when calling DefaultApi->new_movie: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movie** | [**Movie**](Movie.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Added |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

