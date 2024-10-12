# openapi_client.DefaultApi

All URIs are relative to *https://dev.to*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_articles**](DefaultApi.md#get_articles) | **GET** /api/articles/search | Get a list of filtered articles


# **get_articles**
> GetArticlesResponse get_articles(q=q, page=page, per_page=per_page, top=top)

Get a list of filtered articles

### Example


```python
import openapi_client
from openapi_client.models.get_articles_response import GetArticlesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    q = 'q_example' # str | Accepts keywords to use as a search query. (optional)
    page = 0 # int | Pagination Page (optional) (default to 0)
    per_page = 60 # int | Page size (the number of items to return per page). (optional) (default to 60)
    top = 'top_example' # str | Returns the most popular articles in the last N days. 'top' indicates the number of days since publication of the articles returned. This param can be used in conjuction with q or tag. (optional)

    try:
        # Get a list of filtered articles
        api_response = api_instance.get_articles(q=q, page=page, per_page=per_page, top=top)
        print("The response of DefaultApi->get_articles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_articles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Accepts keywords to use as a search query. | [optional] 
 **page** | **int**| Pagination Page | [optional] [default to 0]
 **per_page** | **int**| Page size (the number of items to return per page). | [optional] [default to 60]
 **top** | **str**| Returns the most popular articles in the last N days. &#39;top&#39; indicates the number of days since publication of the articles returned. This param can be used in conjuction with q or tag. | [optional] 

### Return type

[**GetArticlesResponse**](GetArticlesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.forem.api-v1+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

