# openapi_client.SearchApi

All URIs are relative to *https://codesearch.debian.net/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **GET** /search | Searches through source code
[**searchperpackage**](SearchApi.md#searchperpackage) | **GET** /searchperpackage | Like /search, but aggregates per package


# **search**
> List[SearchResult] search(query, match_mode=match_mode)

Searches through source code

Performs a search through the full Debian Code Search corpus, blocking until all results are available (might take a few seconds depending on the search query).  Search results are ordered by their ranking (best results come first).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.search_result import SearchResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://codesearch.debian.net/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://codesearch.debian.net/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    query = 'query_example' # str | The search query, for example `who knows...` (literal) or `who knows\\.\\.\\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt
    match_mode = regexp # str | Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful. (optional) (default to regexp)

    try:
        # Searches through source code
        api_response = api_instance.search(query, match_mode=match_mode)
        print("The response of SearchApi->search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The search query, for example &#x60;who knows...&#x60; (literal) or &#x60;who knows\\.\\.\\.&#x60; (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt | 
 **match_mode** | **str**| Whether the query is to be interpreted as a literal (&#x60;literal&#x60;) instead of as an RE2 regular expression (&#x60;regexp&#x60;). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful. | [optional] [default to regexp]

### Return type

[**List[SearchResult]**](SearchResult.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All search results |  -  |
**403** | The x-dcs-apikey header was either not set at all, or contained an invalid (no longer valid?) API key. Please see https://codesearch.debian.net/apikeys/ for obtaining a key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchperpackage**
> List[PackageSearchResult] searchperpackage(query, match_mode=match_mode)

Like /search, but aggregates per package

The search results are currently sorted arbitrarily, but we intend to sort them by ranking eventually: https://github.com/Debian/dcs/blob/51338e934eb7ee18d00c5c18531c0790a83cb698/cmd/dcs-web/querymanager.go#L719

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.package_search_result import PackageSearchResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://codesearch.debian.net/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://codesearch.debian.net/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    query = 'query_example' # str | The search query, for example `who knows...` (literal) or `who knows\\.\\.\\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt
    match_mode = regexp # str | Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful. (optional) (default to regexp)

    try:
        # Like /search, but aggregates per package
        api_response = api_instance.searchperpackage(query, match_mode=match_mode)
        print("The response of SearchApi->searchperpackage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->searchperpackage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The search query, for example &#x60;who knows...&#x60; (literal) or &#x60;who knows\\.\\.\\.&#x60; (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt | 
 **match_mode** | **str**| Whether the query is to be interpreted as a literal (&#x60;literal&#x60;) instead of as an RE2 regular expression (&#x60;regexp&#x60;). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful. | [optional] [default to regexp]

### Return type

[**List[PackageSearchResult]**](PackageSearchResult.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All search results |  -  |
**403** | The x-dcs-apikey header was either not set at all, or contained an invalid (no longer valid?) API key. Please see https://codesearch.debian.net/apikeys/ for obtaining a key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

