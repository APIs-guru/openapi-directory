# openapi_client.SearchApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_messages**](SearchApi.md#search_messages) | **GET** /search.messages | 


# **search_messages**
> DefaultSuccessTemplate search_messages(token, query, count=count, highlight=highlight, page=page, sort=sort, sort_dir=sort_dir)



Searches for messages matching a query.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `search:read`
    query = 'query_example' # str | Search query.
    count = 56 # int | Pass the number of results you want per \"page\". Maximum of `100`. (optional)
    highlight = True # bool | Pass a value of `true` to enable query highlight markers (see below). (optional)
    page = 56 # int |  (optional)
    sort = 'sort_example' # str | Return matches sorted by either `score` or `timestamp`. (optional)
    sort_dir = 'sort_dir_example' # str | Change sort direction to ascending (`asc`) or descending (`desc`). (optional)

    try:
        api_response = api_instance.search_messages(token, query, count=count, highlight=highlight, page=page, sort=sort, sort_dir=sort_dir)
        print("The response of SearchApi->search_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;search:read&#x60; | 
 **query** | **str**| Search query. | 
 **count** | **int**| Pass the number of results you want per \&quot;page\&quot;. Maximum of &#x60;100&#x60;. | [optional] 
 **highlight** | **bool**| Pass a value of &#x60;true&#x60; to enable query highlight markers (see below). | [optional] 
 **page** | **int**|  | [optional] 
 **sort** | **str**| Return matches sorted by either &#x60;score&#x60; or &#x60;timestamp&#x60;. | [optional] 
 **sort_dir** | **str**| Change sort direction to ascending (&#x60;asc&#x60;) or descending (&#x60;desc&#x60;). | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

