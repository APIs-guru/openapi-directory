# openapi_client.PrivateQuotesApi

All URIs are relative to *https://quotes.rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quote_delete**](PrivateQuotesApi.md#quote_delete) | **DELETE** /quote | 
[**quote_get_0**](PrivateQuotesApi.md#quote_get_0) | **GET** /quote | 
[**quote_list_get**](PrivateQuotesApi.md#quote_list_get) | **GET** /quote/list | 
[**quote_patch**](PrivateQuotesApi.md#quote_patch) | **PATCH** /quote | 
[**quote_post**](PrivateQuotesApi.md#quote_post) | **POST** /quote | 
[**quote_put**](PrivateQuotesApi.md#quote_put) | **PUT** /quote | 
[**quote_tags_add_post**](PrivateQuotesApi.md#quote_tags_add_post) | **POST** /quote/tags/add | 
[**quote_tags_remove_post**](PrivateQuotesApi.md#quote_tags_remove_post) | **POST** /quote/tags/remove | 


# **quote_delete**
> quote_delete(id)



Delete a quote. The user needs to be the owner of the quote to be able to delete it. 

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
    api_instance = openapi_client.PrivateQuotesApi(api_client)
    id = 'id_example' # str | Quote ID

    try:
        api_instance.quote_delete(id)
    except Exception as e:
        print("Exception when calling PrivateQuotesApi->quote_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Quote ID | 

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |
**404** | 404  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_get_0**
> QuoteResponse quote_get_0(id=id)



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
    api_instance = openapi_client.PrivateQuotesApi(api_client)
    id = 'id_example' # str | Quote ID (optional)

    try:
        api_response = api_instance.quote_get_0(id=id)
        print("The response of PrivateQuotesApi->quote_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateQuotesApi->quote_get_0: %s\n" % e)
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

# **quote_list_get**
> quote_list_get(start=start, limit=limit)



Get the list of quotes in your private collection.

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
    api_instance = openapi_client.PrivateQuotesApi(api_client)
    start = 0 # int | Response is paged. This parameter controls where response starts the listing at (optional) (default to 0)
    limit = 10 # int | Response is paged. This parameter controls how many is returned in the result. (optional) (default to 10)

    try:
        api_instance.quote_list_get(start=start, limit=limit)
    except Exception as e:
        print("Exception when calling PrivateQuotesApi->quote_list_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| Response is paged. This parameter controls where response starts the listing at | [optional] [default to 0]
 **limit** | **int**| Response is paged. This parameter controls how many is returned in the result. | [optional] [default to 10]

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_patch**
> quote_patch(id, quote=quote, author=author, language=language, tags=tags)



Update a quote

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
    api_instance = openapi_client.PrivateQuotesApi(api_client)
    id = 'id_example' # str | Quote ID
    quote = 'quote_example' # str | Quote (optional)
    author = 'author_example' # str | Quote Author (optional)
    language = 'en' # str | Language. If not supplied an auto detection mechanism will be used to detect a language. (optional) (default to 'en')
    tags = 'tags_example' # str | Comma Separated tags (optional)

    try:
        api_instance.quote_patch(id, quote=quote, author=author, language=language, tags=tags)
    except Exception as e:
        print("Exception when calling PrivateQuotesApi->quote_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Quote ID | 
 **quote** | **str**| Quote | [optional] 
 **author** | **str**| Quote Author | [optional] 
 **language** | **str**| Language. If not supplied an auto detection mechanism will be used to detect a language. | [optional] [default to &#39;en&#39;]
 **tags** | **str**| Comma Separated tags | [optional] 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_post**
> quote_post(quote, author=author, tags=tags, language=language)



Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.

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
    api_instance = openapi_client.PrivateQuotesApi(api_client)
    quote = 'quote_example' # str | Quote
    author = 'author_example' # str | Quote Author (optional)
    tags = 'tags_example' # str | Comma Separated tags (optional)
    language = 'en' # str | Language. If not supplied an auto detection mechanism will be used to detect a language. (optional) (default to 'en')

    try:
        api_instance.quote_post(quote, author=author, tags=tags, language=language)
    except Exception as e:
        print("Exception when calling PrivateQuotesApi->quote_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quote** | **str**| Quote | 
 **author** | **str**| Quote Author | [optional] 
 **tags** | **str**| Comma Separated tags | [optional] 
 **language** | **str**| Language. If not supplied an auto detection mechanism will be used to detect a language. | [optional] [default to &#39;en&#39;]

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_put**
> quote_put(quote, author=author, tags=tags, language=language)



Add a new quote to your private collection.

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
    api_instance = openapi_client.PrivateQuotesApi(api_client)
    quote = 'quote_example' # str | Quote
    author = 'author_example' # str | Quote Author (optional)
    tags = 'tags_example' # str | Comma Separated tags (optional)
    language = 'en' # str | Language. If not supplied an auto detection mechanism will be used to detect a language. (optional) (default to 'en')

    try:
        api_instance.quote_put(quote, author=author, tags=tags, language=language)
    except Exception as e:
        print("Exception when calling PrivateQuotesApi->quote_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quote** | **str**| Quote | 
 **author** | **str**| Quote Author | [optional] 
 **tags** | **str**| Comma Separated tags | [optional] 
 **language** | **str**| Language. If not supplied an auto detection mechanism will be used to detect a language. | [optional] [default to &#39;en&#39;]

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_tags_add_post**
> quote_tags_add_post(id, tags)



Add a tag to a given Quote.

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
    api_instance = openapi_client.PrivateQuotesApi(api_client)
    id = 'id_example' # str | Quote ID
    tags = 'tags_example' # str | Comma Separated tags

    try:
        api_instance.quote_tags_add_post(id, tags)
    except Exception as e:
        print("Exception when calling PrivateQuotesApi->quote_tags_add_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Quote ID | 
 **tags** | **str**| Comma Separated tags | 

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

# **quote_tags_remove_post**
> quote_tags_remove_post(id, tags)



Remove a tag from a given quote.

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
    api_instance = openapi_client.PrivateQuotesApi(api_client)
    id = 'id_example' # str | Quote ID
    tags = 'tags_example' # str | Comma Separated tags

    try:
        api_instance.quote_tags_remove_post(id, tags)
    except Exception as e:
        print("Exception when calling PrivateQuotesApi->quote_tags_remove_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Quote ID | 
 **tags** | **str**| Comma Separated tags | 

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

