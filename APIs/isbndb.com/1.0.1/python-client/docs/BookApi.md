# openapi_client.BookApi

All URIs are relative to *https://api.isbndb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**book_isbn_get**](BookApi.md#book_isbn_get) | **GET** /book/{isbn} | Gets book details
[**books_query_get**](BookApi.md#books_query_get) | **GET** /books/{query} | Search books


# **book_isbn_get**
> Book book_isbn_get(isbn)

Gets book details

Returns the book details

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.book import Book
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
    api_instance = openapi_client.BookApi(api_client)
    isbn = 'isbn_example' # str | an ISBN 10 or ISBN 13 in the Books database

    try:
        # Gets book details
        api_response = api_instance.book_isbn_get(isbn)
        print("The response of BookApi->book_isbn_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookApi->book_isbn_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isbn** | **str**| an ISBN 10 or ISBN 13 in the Books database | 

### Return type

[**Book**](Book.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The book ISBN was found in the database |  * Access-Control-Allow-Origin - CORS Header to allow different origin responses <br>  |
**404** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **books_query_get**
> books_query_get(query, page=page, author=author, page_size=page_size)

Search books

This returns a list of books that match the query

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
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
    api_instance = openapi_client.BookApi(api_client)
    query = 'query_example' # str | A string to search for in the Book’s database
    page = 'page_example' # str | The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them (optional)
    author = 'author_example' # str | Filters the query results by author (optional)
    page_size = 'page_size_example' # str | How many items should be returned per page, maximum of 1,000 (optional)

    try:
        # Search books
        api_instance.books_query_get(query, page=page, author=author, page_size=page_size)
    except Exception as e:
        print("Exception when calling BookApi->books_query_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| A string to search for in the Book’s database | 
 **page** | **str**| The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them | [optional] 
 **author** | **str**| Filters the query results by author | [optional] 
 **page_size** | **str**| How many items should be returned per page, maximum of 1,000 | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The query string found results in the books&#39;s database |  * Access-Control-Allow-Origin - CORS Header to allow different origin responses <br>  |
**404** | There are no results in the book&#39;s database for the given query |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

