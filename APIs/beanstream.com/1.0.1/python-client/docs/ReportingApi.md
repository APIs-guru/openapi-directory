# openapi_client.ReportingApi

All URIs are relative to *https://www.beanstream.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reports_post**](ReportingApi.md#reports_post) | **POST** /reports | Search Query


# **reports_post**
> SearchResult reports_post(search_query=search_query)

Search Query

Query for transactions using a date range and optional search criteria. This method allows you to page your search results if you are expecting a lot of results to be returned. The page start value begins at 1. If no records are found the API will return a 404 error message. For details on the parameters and allowed values for Criteria please visit the documentation http://developer.beanstream.com/documentation/analyze-payments/search-specific-criteria/

### Example


```python
import openapi_client
from openapi_client.models.search_query import SearchQuery
from openapi_client.models.search_result import SearchResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    search_query = openapi_client.SearchQuery() # SearchQuery |  (optional)

    try:
        # Search Query
        api_response = api_instance.reports_post(search_query=search_query)
        print("The response of ReportingApi->reports_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reports_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_query** | [**SearchQuery**](SearchQuery.md)|  | [optional] 

### Return type

[**SearchResult**](SearchResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A transaction object. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

