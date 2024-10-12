# openapi_client.ArtistApi

All URIs are relative to *https://api.musixmatch.com/ws/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artist_get_get**](ArtistApi.md#artist_get_get) | **GET** /artist.get | 
[**artist_related_get_get**](ArtistApi.md#artist_related_get_get) | **GET** /artist.related.get | 
[**artist_search_get**](ArtistApi.md#artist_search_get) | **GET** /artist.search | 
[**chart_artists_get_get**](ArtistApi.md#chart_artists_get_get) | **GET** /chart.artists.get | 


# **artist_get_get**
> ArtistGetGet200Response artist_get_get(artist_id, format=format, param_callback=param_callback)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.models.artist_get_get200_response import ArtistGetGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.musixmatch.com/ws/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.musixmatch.com/ws/1.1"
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
    api_instance = openapi_client.ArtistApi(api_client)
    artist_id = 'artist_id_example' # str |  The musiXmatch artist id
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)

    try:
        api_response = api_instance.artist_get_get(artist_id, format=format, param_callback=param_callback)
        print("The response of ArtistApi->artist_get_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtistApi->artist_get_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artist_id** | **str**|  The musiXmatch artist id | 
 **format** | **str**| output format: json, jsonp, xml. | [optional] [default to &#39;json&#39;]
 **param_callback** | **str**| jsonp callback | [optional] 

### Return type

[**ArtistGetGet200Response**](ArtistGetGet200Response.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artist_related_get_get**
> ArtistRelatedGetGet200Response artist_related_get_get(artist_id, format=format, param_callback=param_callback, page_size=page_size, page=page)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.models.artist_related_get_get200_response import ArtistRelatedGetGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.musixmatch.com/ws/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.musixmatch.com/ws/1.1"
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
    api_instance = openapi_client.ArtistApi(api_client)
    artist_id = 'artist_id_example' # str | The musiXmatch artist id
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)
    page_size = 3.4 # float | Define the page size for paginated results.Range is 1 to 100. (optional)
    page = 3.4 # float | Define the page number for paginated results (optional)

    try:
        api_response = api_instance.artist_related_get_get(artist_id, format=format, param_callback=param_callback, page_size=page_size, page=page)
        print("The response of ArtistApi->artist_related_get_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtistApi->artist_related_get_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artist_id** | **str**| The musiXmatch artist id | 
 **format** | **str**| output format: json, jsonp, xml. | [optional] [default to &#39;json&#39;]
 **param_callback** | **str**| jsonp callback | [optional] 
 **page_size** | **float**| Define the page size for paginated results.Range is 1 to 100. | [optional] 
 **page** | **float**| Define the page number for paginated results | [optional] 

### Return type

[**ArtistRelatedGetGet200Response**](ArtistRelatedGetGet200Response.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artist_search_get**
> ArtistRelatedGetGet200Response artist_search_get(format=format, param_callback=param_callback, q_artist=q_artist, f_artist_id=f_artist_id, page=page, page_size=page_size)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.models.artist_related_get_get200_response import ArtistRelatedGetGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.musixmatch.com/ws/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.musixmatch.com/ws/1.1"
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
    api_instance = openapi_client.ArtistApi(api_client)
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)
    q_artist = 'q_artist_example' # str | The song artist (optional)
    f_artist_id = 3.4 # float | When set, filter by this artist id (optional)
    page = 3.4 # float | Define the page number for paginated results (optional)
    page_size = 3.4 # float | Define the page size for paginated results.Range is 1 to 100. (optional)

    try:
        api_response = api_instance.artist_search_get(format=format, param_callback=param_callback, q_artist=q_artist, f_artist_id=f_artist_id, page=page, page_size=page_size)
        print("The response of ArtistApi->artist_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtistApi->artist_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| output format: json, jsonp, xml. | [optional] [default to &#39;json&#39;]
 **param_callback** | **str**| jsonp callback | [optional] 
 **q_artist** | **str**| The song artist | [optional] 
 **f_artist_id** | **float**| When set, filter by this artist id | [optional] 
 **page** | **float**| Define the page number for paginated results | [optional] 
 **page_size** | **float**| Define the page size for paginated results.Range is 1 to 100. | [optional] 

### Return type

[**ArtistRelatedGetGet200Response**](ArtistRelatedGetGet200Response.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chart_artists_get_get**
> ChartArtistsGetGet200Response chart_artists_get_get(format=format, param_callback=param_callback, page=page, page_size=page_size, country=country)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.models.chart_artists_get_get200_response import ChartArtistsGetGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.musixmatch.com/ws/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.musixmatch.com/ws/1.1"
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
    api_instance = openapi_client.ArtistApi(api_client)
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)
    page = 3.4 # float | Define the page number for paginated results (optional)
    page_size = 3.4 # float | Define the page size for paginated results.Range is 1 to 100. (optional)
    country = 'us' # str | A valid ISO 3166 country code (optional) (default to 'us')

    try:
        api_response = api_instance.chart_artists_get_get(format=format, param_callback=param_callback, page=page, page_size=page_size, country=country)
        print("The response of ArtistApi->chart_artists_get_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtistApi->chart_artists_get_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| output format: json, jsonp, xml. | [optional] [default to &#39;json&#39;]
 **param_callback** | **str**| jsonp callback | [optional] 
 **page** | **float**| Define the page number for paginated results | [optional] 
 **page_size** | **float**| Define the page size for paginated results.Range is 1 to 100. | [optional] 
 **country** | **str**| A valid ISO 3166 country code | [optional] [default to &#39;us&#39;]

### Return type

[**ChartArtistsGetGet200Response**](ChartArtistsGetGet200Response.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

