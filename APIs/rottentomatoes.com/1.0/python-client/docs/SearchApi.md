# openapi_client.SearchApi

All URIs are relative to *http://api.rottentomatoes.com/api/public/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movies_search_search**](SearchApi.md#movies_search_search) | **GET** /movies.json | 


# **movies_search_search**
> movies_search_search(q=q, page_limit=page_limit, page=page)



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
    api_instance = openapi_client.SearchApi(api_client)
    q = 'q_example' # str | The plain text search query to search for a movie. Remember to URI encode this! (optional)
    page_limit = '10' # str | The amount of movie search results to show per page (optional) (default to '10')
    page = '1' # str | The selected page of movie search results (optional) (default to '1')

    try:
        api_instance.movies_search_search(q=q, page_limit=page_limit, page=page)
    except Exception as e:
        print("Exception when calling SearchApi->movies_search_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| The plain text search query to search for a movie. Remember to URI encode this! | [optional] 
 **page_limit** | **str**| The amount of movie search results to show per page | [optional] [default to &#39;10&#39;]
 **page** | **str**| The selected page of movie search results | [optional] [default to &#39;1&#39;]

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

