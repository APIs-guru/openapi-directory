# openapi_client.AuthorApi

All URIs are relative to *https://api.isbndb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**author_name_get**](AuthorApi.md#author_name_get) | **GET** /author/{name} | Gets author details
[**authors_query_get**](AuthorApi.md#authors_query_get) | **GET** /authors/{query} | Search authors


# **author_name_get**
> Author author_name_get(name, page=page, page_size=page_size)

Gets author details

Returns the name and a list of books by the author.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.author import Author
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.isbndb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.isbndb.com"
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
    api_instance = openapi_client.AuthorApi(api_client)
    name = 'name_example' # str | The name of an author in the Author's database
    page = 'page_example' # str | The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them (optional)
    page_size = 'page_size_example' # str | How many items should be returned per page, maximum of 1,000 (optional)

    try:
        # Gets author details
        api_response = api_instance.author_name_get(name, page=page, page_size=page_size)
        print("The response of AuthorApi->author_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->author_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of an author in the Author&#39;s database | 
 **page** | **str**| The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them | [optional] 
 **page_size** | **str**| How many items should be returned per page, maximum of 1,000 | [optional] 

### Return type

[**Author**](Author.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The author name was found in the database |  * Access-Control-Allow-Origin - CORS Header to allow different origin responses <br>  |
**404** | Author not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authors_query_get**
> AuthorQueryResults authors_query_get(query, page_size=page_size, page=page)

Search authors

This returns a list of authors whos name matches the given query

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.author_query_results import AuthorQueryResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.isbndb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.isbndb.com"
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
    api_instance = openapi_client.AuthorApi(api_client)
    query = 'query_example' # str | A string to search for in the Author’s database
    page_size = 'page_size_example' # str | How many items should be returned per page, maximum of 1,000 (optional)
    page = 'page_example' # str | The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them (optional)

    try:
        # Search authors
        api_response = api_instance.authors_query_get(query, page_size=page_size, page=page)
        print("The response of AuthorApi->authors_query_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->authors_query_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| A string to search for in the Author’s database | 
 **page_size** | **str**| How many items should be returned per page, maximum of 1,000 | [optional] 
 **page** | **str**| The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them | [optional] 

### Return type

[**AuthorQueryResults**](AuthorQueryResults.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The query string found results in the author&#39;s database |  * Access-Control-Allow-Origin - CORS Header to allow different origin responses <br>  |
**404** | There are no results in the author&#39;s database for the given query |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

