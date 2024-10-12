# openapi_client.QuoteApi

All URIs are relative to *https://quotes.rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quote_authors_popular_get**](QuoteApi.md#quote_authors_popular_get) | **GET** /quote/authors/popular | 
[**quote_authors_search_get**](QuoteApi.md#quote_authors_search_get) | **GET** /quote/authors/search | 
[**quote_bookmark_toggle_get**](QuoteApi.md#quote_bookmark_toggle_get) | **GET** /quote/bookmark/toggle | 
[**quote_categories_popular_get**](QuoteApi.md#quote_categories_popular_get) | **GET** /quote/categories/popular | 
[**quote_categories_search_get**](QuoteApi.md#quote_categories_search_get) | **GET** /quote/categories/search | 
[**quote_get**](QuoteApi.md#quote_get) | **GET** /quote | 
[**quote_like_toggle_get**](QuoteApi.md#quote_like_toggle_get) | **GET** /quote/like/toggle | 
[**quote_random_get**](QuoteApi.md#quote_random_get) | **GET** /quote/random | 
[**quote_search_get**](QuoteApi.md#quote_search_get) | **GET** /quote/search | 


# **quote_authors_popular_get**
> quote_authors_popular_get(language=language, detailed=detailed, start=start, limit=limit)



Gets a list of popular author names in the system.  

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteApi(api_client)
    language = 'en' # str | Language. A same author may have quotes in two or more different languages. So for example 'Mahatma Gandhi' may be returned for language \"en\"(English), and \"மஹாத்மா காந்தி\" may be returned when the language is \"ta\" (Tamil). (optional) (default to 'en')
    detailed = False # bool | Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels. (optional) (default to False)
    start = 0 # int | Response is paged. This parameter controls where response starts the listing at (optional) (default to 0)
    limit = 5 # int | Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level. (optional) (default to 5)

    try:
        api_instance.quote_authors_popular_get(language=language, detailed=detailed, start=start, limit=limit)
    except Exception as e:
        print("Exception when calling QuoteApi->quote_authors_popular_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| Language. A same author may have quotes in two or more different languages. So for example &#39;Mahatma Gandhi&#39; may be returned for language \&quot;en\&quot;(English), and \&quot;மஹாத்மா காந்தி\&quot; may be returned when the language is \&quot;ta\&quot; (Tamil). | [optional] [default to &#39;en&#39;]
 **detailed** | **bool**| Should return detailed author information such as &#x60;birthday&#x60;, &#x60;death date&#x60;, &#x60;occupation&#x60;, &#x60;description&#x60; etc. Only available at certain subscription levels. | [optional] [default to False]
 **start** | **int**| Response is paged. This parameter controls where response starts the listing at | [optional] [default to 0]
 **limit** | **int**| Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level. | [optional] [default to 5]

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**400** | 400  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_authors_search_get**
> quote_authors_search_get(query=query, language=language, detailed=detailed, start=start, limit=limit)



Gets a list of author names in the system.  

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteApi(api_client)
    query = 'query_example' # str | Text string to search for in author names (optional)
    language = 'en' # str | Language. A same author may have quotes in two or more different languages. So for example 'Mahatma Gandhi' may be returned for language \"en\"(English), and \"மஹாத்மா காந்தி\" may be returned when the language is \"ta\" (Tamil). (optional) (default to 'en')
    detailed = False # bool | Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels. (optional) (default to False)
    start = 0 # int | Response is paged. This parameter controls where response starts the listing at (optional) (default to 0)
    limit = 1 # int | Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level. (optional) (default to 1)

    try:
        api_instance.quote_authors_search_get(query=query, language=language, detailed=detailed, start=start, limit=limit)
    except Exception as e:
        print("Exception when calling QuoteApi->quote_authors_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Text string to search for in author names | [optional] 
 **language** | **str**| Language. A same author may have quotes in two or more different languages. So for example &#39;Mahatma Gandhi&#39; may be returned for language \&quot;en\&quot;(English), and \&quot;மஹாத்மா காந்தி\&quot; may be returned when the language is \&quot;ta\&quot; (Tamil). | [optional] [default to &#39;en&#39;]
 **detailed** | **bool**| Should return detailed author information such as &#x60;birthday&#x60;, &#x60;death date&#x60;, &#x60;occupation&#x60;, &#x60;description&#x60; etc. Only available at certain subscription levels. | [optional] [default to False]
 **start** | **int**| Response is paged. This parameter controls where response starts the listing at | [optional] [default to 0]
 **limit** | **int**| Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level. | [optional] [default to 1]

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**400** | 400  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_bookmark_toggle_get**
> quote_bookmark_toggle_get(quote_id)



Toggle the user bookmark of the given Quote as a user of the API Key.

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteApi(api_client)
    quote_id = 'quote_id_example' # str | Quote ID

    try:
        api_instance.quote_bookmark_toggle_get(quote_id)
    except Exception as e:
        print("Exception when calling QuoteApi->quote_bookmark_toggle_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quote_id** | **str**| Quote ID | 

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |
**404** | 404  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_categories_popular_get**
> quote_categories_popular_get(start=start, limit=limit)



Gets a list of popular `Quote` Categories. 

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteApi(api_client)
    start = 0 # int | Response is paged. This parameter controls where response starts the listing at (optional) (default to 0)
    limit = 5 # int | Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level. (optional) (default to 5)

    try:
        api_instance.quote_categories_popular_get(start=start, limit=limit)
    except Exception as e:
        print("Exception when calling QuoteApi->quote_categories_popular_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| Response is paged. This parameter controls where response starts the listing at | [optional] [default to 0]
 **limit** | **int**| Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level. | [optional] [default to 5]

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_categories_search_get**
> quote_categories_search_get(query=query, start=start, limit=limit)



Gets a list of `Quote` Categories matching the query string. 

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteApi(api_client)
    query = '0' # str | Text string to search for in the categories (optional) (default to '0')
    start = 0 # int | Response is paged. This parameter controls where response starts the listing at (optional) (default to 0)
    limit = 2 # int | Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level. (optional) (default to 2)

    try:
        api_instance.quote_categories_search_get(query=query, start=start, limit=limit)
    except Exception as e:
        print("Exception when calling QuoteApi->quote_categories_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Text string to search for in the categories | [optional] [default to &#39;0&#39;]
 **start** | **int**| Response is paged. This parameter controls where response starts the listing at | [optional] [default to 0]
 **limit** | **int**| Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level. | [optional] [default to 2]

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_get**
> QuoteResponse quote_get(id=id)



Gets a `Quote` with a given `id`.

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.models.quote_response import QuoteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteApi(api_client)
    id = 'id_example' # str | Quote ID (optional)

    try:
        api_response = api_instance.quote_get(id=id)
        print("The response of QuoteApi->quote_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuoteApi->quote_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Quote ID | [optional] 

### Return type

[**QuoteResponse**](QuoteResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_like_toggle_get**
> quote_like_toggle_get(quote_id)



Toggle the user like of the given Quote as a user of the API Key.

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteApi(api_client)
    quote_id = 'quote_id_example' # str | Quote ID

    try:
        api_instance.quote_like_toggle_get(quote_id)
    except Exception as e:
        print("Exception when calling QuoteApi->quote_like_toggle_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quote_id** | **str**| Quote ID | 

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |
**404** | 404  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_random_get**
> QuoteResponse quote_random_get(language=language, limit=limit)



Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.models.quote_response import QuoteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteApi(api_client)
    language = 'en' # str | Language of the Quote. The language must be supported in our system. (optional) (default to 'en')
    limit = 1 # int | No of quotes to return. The max limit depends on the subscription level. (optional) (default to 1)

    try:
        api_response = api_instance.quote_random_get(language=language, limit=limit)
        print("The response of QuoteApi->quote_random_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuoteApi->quote_random_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| Language of the Quote. The language must be supported in our system. | [optional] [default to &#39;en&#39;]
 **limit** | **int**| No of quotes to return. The max limit depends on the subscription level. | [optional] [default to 1]

### Return type

[**QuoteResponse**](QuoteResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_search_get**
> QuoteResponse quote_search_get(category=category, author=author, minlength=minlength, maxlength=maxlength, query=query, private=private, language=language, limit=limit, sfw=sfw)



Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.models.quote_response import QuoteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteApi(api_client)
    category = 'category_example' # str | Quote Category (optional)
    author = 'author_example' # str | Quote Author (optional)
    minlength = 100 # int | Quote minimum Length (optional) (default to 100)
    maxlength = 300 # int | Quote maximum Length (optional) (default to 300)
    query = 'query_example' # str | keyword to search for in the quote (optional)
    private = False # bool | Should search private collection? Default searches public collection. (optional) (default to False)
    language = 'en' # str | Language of the Quote. The language must be supported in our system. (optional) (default to 'en')
    limit = 1 # int | No of quotes to return. The max limit depends on the subscription level. (optional) (default to 1)
    sfw = False # bool | Should search only SFW (Safe For Work) quotes? (optional) (default to False)

    try:
        api_response = api_instance.quote_search_get(category=category, author=author, minlength=minlength, maxlength=maxlength, query=query, private=private, language=language, limit=limit, sfw=sfw)
        print("The response of QuoteApi->quote_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuoteApi->quote_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **str**| Quote Category | [optional] 
 **author** | **str**| Quote Author | [optional] 
 **minlength** | **int**| Quote minimum Length | [optional] [default to 100]
 **maxlength** | **int**| Quote maximum Length | [optional] [default to 300]
 **query** | **str**| keyword to search for in the quote | [optional] 
 **private** | **bool**| Should search private collection? Default searches public collection. | [optional] [default to False]
 **language** | **str**| Language of the Quote. The language must be supported in our system. | [optional] [default to &#39;en&#39;]
 **limit** | **int**| No of quotes to return. The max limit depends on the subscription level. | [optional] [default to 1]
 **sfw** | **bool**| Should search only SFW (Safe For Work) quotes? | [optional] [default to False]

### Return type

[**QuoteResponse**](QuoteResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |
**404** | 404  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

