# openapi_client.DefaultApi

All URIs are relative to *https://api.archive.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_v1_fields_get**](DefaultApi.md#search_v1_fields_get) | **GET** /search/v1/fields | 
[**search_v1_organic_get**](DefaultApi.md#search_v1_organic_get) | **GET** /search/v1/organic | 
[**search_v1_scrape_get**](DefaultApi.md#search_v1_scrape_get) | **GET** /search/v1/scrape | 


# **search_v1_fields_get**
> List[str] search_v1_fields_get(param_callback=param_callback)



Fields that can be requested

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.archive.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.archive.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    param_callback = 'param_callback_example' # str | Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument. (optional)

    try:
        api_response = api_instance.search_v1_fields_get(param_callback=param_callback)
        print("The response of DefaultApi->search_v1_fields_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->search_v1_fields_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param_callback** | **str**| Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as &#x60;callback(data)&#x60;, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument. | [optional] 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/javascript, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Fields that can be requested |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_v1_organic_get**
> OrganicResult search_v1_organic_get(q=q, var_field=var_field, size=size, total_only=total_only, param_callback=param_callback)



Return relevance-based results from search queries 

### Example


```python
import openapi_client
from openapi_client.models.organic_result import OrganicResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.archive.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.archive.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    q = 'q_example' # str | Lucene-type search query (optional)
    var_field = 'identifier' # str | Metadata field (optional) (default to 'identifier')
    size = 1000 # int | Number of query results to return (optional) (default to 1000)
    total_only = False # bool | Request total only; do not return hits (optional) (default to False)
    param_callback = 'param_callback_example' # str | Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument. (optional)

    try:
        api_response = api_instance.search_v1_organic_get(q=q, var_field=var_field, size=size, total_only=total_only, param_callback=param_callback)
        print("The response of DefaultApi->search_v1_organic_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->search_v1_organic_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Lucene-type search query | [optional] 
 **var_field** | **str**| Metadata field | [optional] [default to &#39;identifier&#39;]
 **size** | **int**| Number of query results to return | [optional] [default to 1000]
 **total_only** | **bool**| Request total only; do not return hits | [optional] [default to False]
 **param_callback** | **str**| Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as &#x60;callback(data)&#x60;, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument. | [optional] 

### Return type

[**OrganicResult**](OrganicResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/javascript, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organic Search API. Returns results in descending relevance order |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_v1_scrape_get**
> ScrapeResult search_v1_scrape_get(q=q, var_field=var_field, sort=sort, size=size, cursor=cursor, total_only=total_only, param_callback=param_callback)



Scrape search results from Internet Archive, allowing a scrolling cursor 

### Example


```python
import openapi_client
from openapi_client.models.scrape_result import ScrapeResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.archive.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.archive.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    q = 'q_example' # str | Lucene-type search query (optional)
    var_field = 'identifier' # str | Metadata field (optional) (default to 'identifier')
    sort = 'sort_example' # str | sort collations (optional)
    size = 1000 # int | Number of query results to return (optional) (default to 1000)
    cursor = 'cursor_example' # str | Cursor for scrolling (used for subsequent calls) (optional)
    total_only = False # bool | Request total only; do not return hits (optional) (default to False)
    param_callback = 'param_callback_example' # str | Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument. (optional)

    try:
        api_response = api_instance.search_v1_scrape_get(q=q, var_field=var_field, sort=sort, size=size, cursor=cursor, total_only=total_only, param_callback=param_callback)
        print("The response of DefaultApi->search_v1_scrape_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->search_v1_scrape_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Lucene-type search query | [optional] 
 **var_field** | **str**| Metadata field | [optional] [default to &#39;identifier&#39;]
 **sort** | **str**| sort collations | [optional] 
 **size** | **int**| Number of query results to return | [optional] [default to 1000]
 **cursor** | **str**| Cursor for scrolling (used for subsequent calls) | [optional] 
 **total_only** | **bool**| Request total only; do not return hits | [optional] [default to False]
 **param_callback** | **str**| Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as &#x60;callback(data)&#x60;, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument. | [optional] 

### Return type

[**ScrapeResult**](ScrapeResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/javascript, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Scaping API |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

