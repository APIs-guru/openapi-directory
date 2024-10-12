# openapi_client.ReadinglistApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_readinglist**](ReadinglistApi.md#get_readinglist) | **GET** /api/readinglist | Readinglist


# **get_readinglist**
> List[ArticleIndex] get_readinglist(page=page, per_page=per_page)

Readinglist

This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.         It supports pagination, each page will contain `30` articles by default

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReadinglistApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # Readinglist
        api_response = api_instance.get_readinglist(page=page, per_page=per_page)
        print("The response of ReadinglistApi->get_readinglist:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReadinglistApi->get_readinglist: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of articles in the users readinglist |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

