# openapi_client.TrailersMovieTelevisionShowTrailersApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trailer_count_by_id_get**](TrailersMovieTelevisionShowTrailersApi.md#trailer_count_by_id_get) | **GET** /Trailers/CountByID/{AccessToken}/{imdbID} | Get trailer count for passed ID
[**trailer_count_by_name_get**](TrailersMovieTelevisionShowTrailersApi.md#trailer_count_by_name_get) | **GET** /Trailers/CountByName/{AccessToken}/{Name} | Get trailer count for passed name (Movie title or TVShow name)
[**trailer_search_get**](TrailersMovieTelevisionShowTrailersApi.md#trailer_search_get) | **GET** /Trailers/Search/{AccessToken}/{Phrase} | Gets trailers by search phrase (limited to 10 records)
[**trailersby_id_get**](TrailersMovieTelevisionShowTrailersApi.md#trailersby_id_get) | **GET** /Trailers/ByID/{AccessToken}/{imdbID} | Get Trailers for passed imdbID


# **trailer_count_by_id_get**
> TrailerCount trailer_count_by_id_get(access_token, imdb_id)

Get trailer count for passed ID

### Example


```python
import openapi_client
from openapi_client.models.trailer_count import TrailerCount
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
    api_instance = openapi_client.TrailersMovieTelevisionShowTrailersApi(api_client)
    access_token = 'access_token_example' # str | 
    imdb_id = 'imdb_id_example' # str | 

    try:
        # Get trailer count for passed ID
        api_response = api_instance.trailer_count_by_id_get(access_token, imdb_id)
        print("The response of TrailersMovieTelevisionShowTrailersApi->trailer_count_by_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrailersMovieTelevisionShowTrailersApi->trailer_count_by_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **imdb_id** | **str**|  | 

### Return type

[**TrailerCount**](TrailerCount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of trailers available for imdbID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trailer_count_by_name_get**
> TrailerCount trailer_count_by_name_get(access_token, name)

Get trailer count for passed name (Movie title or TVShow name)

### Example


```python
import openapi_client
from openapi_client.models.trailer_count import TrailerCount
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
    api_instance = openapi_client.TrailersMovieTelevisionShowTrailersApi(api_client)
    access_token = 'access_token_example' # str | 
    name = 'name_example' # str | 

    try:
        # Get trailer count for passed name (Movie title or TVShow name)
        api_response = api_instance.trailer_count_by_name_get(access_token, name)
        print("The response of TrailersMovieTelevisionShowTrailersApi->trailer_count_by_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrailersMovieTelevisionShowTrailersApi->trailer_count_by_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **name** | **str**|  | 

### Return type

[**TrailerCount**](TrailerCount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of trailers available for passed name |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trailer_search_get**
> List[Trailer] trailer_search_get(access_token, phrase)

Gets trailers by search phrase (limited to 10 records)

### Example


```python
import openapi_client
from openapi_client.models.trailer import Trailer
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
    api_instance = openapi_client.TrailersMovieTelevisionShowTrailersApi(api_client)
    access_token = 'access_token_example' # str | 
    phrase = 'phrase_example' # str | Trailer you like to search for

    try:
        # Gets trailers by search phrase (limited to 10 records)
        api_response = api_instance.trailer_search_get(access_token, phrase)
        print("The response of TrailersMovieTelevisionShowTrailersApi->trailer_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrailersMovieTelevisionShowTrailersApi->trailer_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **phrase** | **str**| Trailer you like to search for | 

### Return type

[**List[Trailer]**](Trailer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of trailers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trailersby_id_get**
> List[Trailer] trailersby_id_get(access_token, imdb_id)

Get Trailers for passed imdbID

### Example


```python
import openapi_client
from openapi_client.models.trailer import Trailer
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
    api_instance = openapi_client.TrailersMovieTelevisionShowTrailersApi(api_client)
    access_token = 'access_token_example' # str | 
    imdb_id = 'imdb_id_example' # str | 

    try:
        # Get Trailers for passed imdbID
        api_response = api_instance.trailersby_id_get(access_token, imdb_id)
        print("The response of TrailersMovieTelevisionShowTrailersApi->trailersby_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrailersMovieTelevisionShowTrailersApi->trailersby_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **imdb_id** | **str**|  | 

### Return type

[**List[Trailer]**](Trailer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of trailers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

