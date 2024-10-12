# openapi_client.NewsApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**news_search_read**](NewsApi.md#news_search_read) | **GET** /api/v1/news/search/{title} | Return news or article search result


# **news_search_read**
> news_search_read(title)

Return news or article search result

Return news or article search result  ### Response Class (Status 200)  * __{title}__: Used as a key word to search news and articles,  For more details on how news & articles are listed [see here][ref]. [ref]: https://etmdb.com/en/news-list/-updated_date

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://etmdb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://etmdb.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NewsApi(api_client)
    title = 'title_example' # str | 

    try:
        # Return news or article search result
        api_instance.news_search_read(title)
    except Exception as e:
        print("Exception when calling NewsApi->news_search_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **str**|  | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

