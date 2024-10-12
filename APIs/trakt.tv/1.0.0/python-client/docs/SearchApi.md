# openapi_client.SearchApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_id_lookup_results**](SearchApi.md#get_id_lookup_results) | **GET** /search/{id_type}/{id} | Get ID lookup results
[**get_text_query_results**](SearchApi.md#get_text_query_results) | **GET** /search/{type} | Get text query results


# **get_id_lookup_results**
> get_id_lookup_results(id_type, id, type=type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get ID lookup results

#### &#128196; Pagination &#10024; Extended Info  Lookup items by their Trakt, IMDB, TMDB, or TVDB ID. If you use the search url without a `type` it might return multiple items if the `id_type` is not globally unique. Specify the `type` of results by sending a single value or a comma delimited string for multiple types.  | Type | URL | |---|---| | `trakt` | `/search/trakt/:id` | |  | `/search/trakt/:id?type=movie` | |  | `/search/trakt/:id?type=show` | |  | `/search/trakt/:id?type=episode` | |  | `/search/trakt/:id?type=person` | | `imdb` | `/search/imdb/:id` | | `tmdb` | `/search/tmdb/:id` | |  | `/search/tmdb/:id?type=movie` | |  | `/search/tmdb/:id?type=show` | |  | `/search/tmdb/:id?type=episode` | |  | `/search/tmdb/:id?type=person` | | `tvdb` | `/search/tvdb/:id` | |  | `/search/tvdb/:id?type=show` | |  | `/search/tvdb/:id?type=episode` |

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    id_type = 'imdb' # str | Type of ID to lookup.
    id = 'tt0848228' # str | ID that matches with the type.
    type = 'movie' # str | Search type. (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get ID lookup results
        api_instance.get_id_lookup_results(id_type, id, type=type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling SearchApi->get_id_lookup_results: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_type** | **str**| Type of ID to lookup. | 
 **id** | **str**| ID that matches with the type. | 
 **type** | **str**| Search type. | [optional] 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /search/trakt/12601?type&#x3D;movie /search/imdb/tt1104001 &#x60;&#x60;&#x60; |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_text_query_results**
> get_text_query_results(type, query, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, body=body)

Get text query results

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters  Search all text fields that a media object contains (i.e. title, overview, etc). Results are ordered by the most relevant score. Specify the `type` of results by sending a single value or a comma delimited string for multiple types.  #### Special Characters  Our search engine (Solr) gives the following characters special meaning when they appear in a query:  `+ - && || ! ( ) { } [ ] ^ \" ~ * ? : /`  To interpret any of these characters literally (and not as a special character), precede the character with a backslash `\\` character.  #### Search Fields  By default, all text fields are used to search for the `query`. You can optionally specify the `fields` parameter with a single value or comma delimited string for multiple fields. Each `type` has specific `fields` that can be specified. This can be useful if you want to support more strict searches (i.e. title only).  | Type | Field | |---|---| | `movie` | `title` | |  | `tagline` | |  | `overview` | |  | `people` | |  | `translations` | |  | `aliases` | | `show` | `title` | |  | `overview` | |  | `people` | |  | `translations` | |  | `aliases` | | `episode` | `title` | |  | `overview` | | `person` | `name` | |  | `biography` | | `list` | `name` | |  | `description` |

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    type = 'movie' # str | Search type.
    query = 'tron' # str | Search all text based fields.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    body = 'body_example' # str | Specific text fields. (optional)

    try:
        # Get text query results
        api_instance.get_text_query_results(type, query, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, body=body)
    except Exception as e:
        print("Exception when calling SearchApi->get_text_query_results: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Search type. | 
 **query** | **str**| Search all text based fields. | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **body** | **str**| Specific text fields. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /search/movie,show,episode,person,list?query&#x3D;tron &#x60;&#x60;&#x60; |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

