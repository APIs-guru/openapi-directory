# openapi_client.DetailedInfoApi

All URIs are relative to *http://api.rottentomatoes.com/api/public/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cast_info_detailed_info**](DetailedInfoApi.md#cast_info_detailed_info) | **GET** /movies/{id}/cast.json | 
[**movie_clips_detailed_info**](DetailedInfoApi.md#movie_clips_detailed_info) | **GET** /movies/{id}/clips.json | 
[**movies_alias_detailed_info**](DetailedInfoApi.md#movies_alias_detailed_info) | **GET** /movie_alias.json | 
[**movies_info_detailed_info**](DetailedInfoApi.md#movies_info_detailed_info) | **GET** /movies/{id}.json | 
[**movies_reviews_detailed_info**](DetailedInfoApi.md#movies_reviews_detailed_info) | **GET** /movies/{id}/reviews.json | 
[**movies_similar_detailed_info**](DetailedInfoApi.md#movies_similar_detailed_info) | **GET** /movies/{id}/similar.json | 


# **cast_info_detailed_info**
> cast_info_detailed_info(id)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.rottentomatoes.com/api/public/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DetailedInfoApi(api_client)
    id = '770672122' # str | Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID (default to '770672122')

    try:
        api_instance.cast_info_detailed_info(id)
    except Exception as e:
        print("Exception when calling DetailedInfoApi->cast_info_detailed_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID | [default to &#39;770672122&#39;]

### Return type

void (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **movie_clips_detailed_info**
> movie_clips_detailed_info(id)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.rottentomatoes.com/api/public/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DetailedInfoApi(api_client)
    id = '770672122' # str | Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID (default to '770672122')

    try:
        api_instance.movie_clips_detailed_info(id)
    except Exception as e:
        print("Exception when calling DetailedInfoApi->movie_clips_detailed_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID | [default to &#39;770672122&#39;]

### Return type

void (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **movies_alias_detailed_info**
> movies_alias_detailed_info(id=id, type=type)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.rottentomatoes.com/api/public/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DetailedInfoApi(api_client)
    id = '0031381' # str | Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID (optional) (default to '0031381')
    type = 'imdb' # str | Only supports imdb lookup at this time (optional) (default to 'imdb')

    try:
        api_instance.movies_alias_detailed_info(id=id, type=type)
    except Exception as e:
        print("Exception when calling DetailedInfoApi->movies_alias_detailed_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID | [optional] [default to &#39;0031381&#39;]
 **type** | **str**| Only supports imdb lookup at this time | [optional] [default to &#39;imdb&#39;]

### Return type

void (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **movies_info_detailed_info**
> movies_info_detailed_info(id)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.rottentomatoes.com/api/public/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DetailedInfoApi(api_client)
    id = '770672122' # str | Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID (default to '770672122')

    try:
        api_instance.movies_info_detailed_info(id)
    except Exception as e:
        print("Exception when calling DetailedInfoApi->movies_info_detailed_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID | [default to &#39;770672122&#39;]

### Return type

void (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **movies_reviews_detailed_info**
> movies_reviews_detailed_info(id, review_type=review_type, page_limit=page_limit, page=page, country=country)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.rottentomatoes.com/api/public/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DetailedInfoApi(api_client)
    id = '770672122' # str | Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID (default to '770672122')
    review_type = 'top_critic' # str | 3 different review types are possible: 'all', 'top_critic' and 'dvd'. 'top_critic' shows all the Rotten Tomatoes designated top critics. 'dvd' pulls the reviews given on the DVD of the movie. 'all' as the name implies retrieves all reviews. (optional) (default to 'top_critic')
    page_limit = '20' # str | The number of reviews to show per page (optional) (default to '20')
    page = '1' # str | The selected page of reviews (optional) (default to '1')
    country = 'us' # str | Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. (optional) (default to 'us')

    try:
        api_instance.movies_reviews_detailed_info(id, review_type=review_type, page_limit=page_limit, page=page, country=country)
    except Exception as e:
        print("Exception when calling DetailedInfoApi->movies_reviews_detailed_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID | [default to &#39;770672122&#39;]
 **review_type** | **str**| 3 different review types are possible: &#39;all&#39;, &#39;top_critic&#39; and &#39;dvd&#39;. &#39;top_critic&#39; shows all the Rotten Tomatoes designated top critics. &#39;dvd&#39; pulls the reviews given on the DVD of the movie. &#39;all&#39; as the name implies retrieves all reviews. | [optional] [default to &#39;top_critic&#39;]
 **page_limit** | **str**| The number of reviews to show per page | [optional] [default to &#39;20&#39;]
 **page** | **str**| The selected page of reviews | [optional] [default to &#39;1&#39;]
 **country** | **str**| Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. | [optional] [default to &#39;us&#39;]

### Return type

void (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **movies_similar_detailed_info**
> movies_similar_detailed_info(id, limit=limit)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.rottentomatoes.com/api/public/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DetailedInfoApi(api_client)
    id = '770672122' # str | Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID (default to '770672122')
    limit = '5' # str | Limit the number of similar movies to show (optional) (default to '5')

    try:
        api_instance.movies_similar_detailed_info(id, limit=limit)
    except Exception as e:
        print("Exception when calling DetailedInfoApi->movies_similar_detailed_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID | [default to &#39;770672122&#39;]
 **limit** | **str**| Limit the number of similar movies to show | [optional] [default to &#39;5&#39;]

### Return type

void (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

