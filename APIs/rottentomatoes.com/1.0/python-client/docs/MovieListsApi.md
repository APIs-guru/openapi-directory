# openapi_client.MovieListsApi

All URIs are relative to *http://api.rottentomatoes.com/api/public/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**box_office_movie_lists**](MovieListsApi.md#box_office_movie_lists) | **GET** /lists/movies/box_office.json | 
[**in_theaters_movie_lists**](MovieListsApi.md#in_theaters_movie_lists) | **GET** /lists/movies/in_theaters.json | 
[**opening_movies_movie_lists**](MovieListsApi.md#opening_movies_movie_lists) | **GET** /lists/movies/opening.json | 
[**upcoming_movies_movie_lists**](MovieListsApi.md#upcoming_movies_movie_lists) | **GET** /lists/movies/upcoming.json | 


# **box_office_movie_lists**
> box_office_movie_lists(limit=limit, country=country)



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
    api_instance = openapi_client.MovieListsApi(api_client)
    limit = '16' # str | Limits the number of movies returned (optional) (default to '16')
    country = 'us' # str | Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. (optional) (default to 'us')

    try:
        api_instance.box_office_movie_lists(limit=limit, country=country)
    except Exception as e:
        print("Exception when calling MovieListsApi->box_office_movie_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **str**| Limits the number of movies returned | [optional] [default to &#39;16&#39;]
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

# **in_theaters_movie_lists**
> in_theaters_movie_lists(page_limit=page_limit, page=page, country=country)



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
    api_instance = openapi_client.MovieListsApi(api_client)
    page_limit = '16' # str | The amount of movies in theaters to show per page (optional) (default to '16')
    page = '1' # str | The selected page of in theaters movies (optional) (default to '1')
    country = 'us' # str | Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. (optional) (default to 'us')

    try:
        api_instance.in_theaters_movie_lists(page_limit=page_limit, page=page, country=country)
    except Exception as e:
        print("Exception when calling MovieListsApi->in_theaters_movie_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| The amount of movies in theaters to show per page | [optional] [default to &#39;16&#39;]
 **page** | **str**| The selected page of in theaters movies | [optional] [default to &#39;1&#39;]
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

# **opening_movies_movie_lists**
> opening_movies_movie_lists(limit=limit, country=country)



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
    api_instance = openapi_client.MovieListsApi(api_client)
    limit = '16' # str | Limits the number of opening movies returned (optional) (default to '16')
    country = 'us' # str | Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. (optional) (default to 'us')

    try:
        api_instance.opening_movies_movie_lists(limit=limit, country=country)
    except Exception as e:
        print("Exception when calling MovieListsApi->opening_movies_movie_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **str**| Limits the number of opening movies returned | [optional] [default to &#39;16&#39;]
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

# **upcoming_movies_movie_lists**
> upcoming_movies_movie_lists(page_limit=page_limit, page=page, country=country)



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
    api_instance = openapi_client.MovieListsApi(api_client)
    page_limit = '16' # str | The amount of upcoming movies to show per page (optional) (default to '16')
    page = '1' # str | The selected page of upcoming movies (optional) (default to '1')
    country = 'us' # str | Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. (optional) (default to 'us')

    try:
        api_instance.upcoming_movies_movie_lists(page_limit=page_limit, page=page, country=country)
    except Exception as e:
        print("Exception when calling MovieListsApi->upcoming_movies_movie_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| The amount of upcoming movies to show per page | [optional] [default to &#39;16&#39;]
 **page** | **str**| The selected page of upcoming movies | [optional] [default to &#39;1&#39;]
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

