# openapi_client.QuoteImagesApi

All URIs are relative to *https://quotes.rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quote_image_background_delete**](QuoteImagesApi.md#quote_image_background_delete) | **DELETE** /quote/image/background | 
[**quote_image_background_list_get**](QuoteImagesApi.md#quote_image_background_list_get) | **GET** /quote/image/background/list | 
[**quote_image_background_post**](QuoteImagesApi.md#quote_image_background_post) | **POST** /quote/image/background | 
[**quote_image_background_search_get**](QuoteImagesApi.md#quote_image_background_search_get) | **GET** /quote/image/background/search | 
[**quote_image_background_tags_add_post**](QuoteImagesApi.md#quote_image_background_tags_add_post) | **POST** /quote/image/background/tags/add | 
[**quote_image_background_tags_remove_post**](QuoteImagesApi.md#quote_image_background_tags_remove_post) | **POST** /quote/image/background/tags/remove | 
[**quote_image_delete**](QuoteImagesApi.md#quote_image_delete) | **DELETE** /quote/image | 
[**quote_image_font_delete**](QuoteImagesApi.md#quote_image_font_delete) | **DELETE** /quote/image/font | 
[**quote_image_font_list_get**](QuoteImagesApi.md#quote_image_font_list_get) | **GET** /quote/image/font/list | 
[**quote_image_font_post**](QuoteImagesApi.md#quote_image_font_post) | **POST** /quote/image/font | 
[**quote_image_font_search_get**](QuoteImagesApi.md#quote_image_font_search_get) | **GET** /quote/image/font/search | 
[**quote_image_font_tags_add_post**](QuoteImagesApi.md#quote_image_font_tags_add_post) | **POST** /quote/image/font/tags/add | 
[**quote_image_font_tags_remove_post**](QuoteImagesApi.md#quote_image_font_tags_remove_post) | **POST** /quote/image/font/tags/remove | 
[**quote_image_get**](QuoteImagesApi.md#quote_image_get) | **GET** /quote/image | 
[**quote_image_put**](QuoteImagesApi.md#quote_image_put) | **PUT** /quote/image | 
[**quote_image_search_get**](QuoteImagesApi.md#quote_image_search_get) | **GET** /quote/image/search | 


# **quote_image_background_delete**
> quote_image_background_delete(id)



Delete a background image file. The user needs to be the owner of the background image to be able to delete it. 

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    id = 'id_example' # str | Font ID

    try:
        api_instance.quote_image_background_delete(id)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_background_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Font ID | 

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

# **quote_image_background_list_get**
> quote_image_background_list_get(start=start)



Lists background images in your private collection.  

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    start = 56 # int | Response is paged. This parameter determines where the response should start. (optional)

    try:
        api_instance.quote_image_background_list_get(start=start)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_background_list_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| Response is paged. This parameter determines where the response should start. | [optional] 

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

# **quote_image_background_post**
> quote_image_background_post(image, tags=tags)



Add an image for use later as a quote background image.

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    image = None # bytearray | Image file to add to your collection (png/jpg/gif are supported)
    tags = 'tags_example' # str | Optional comma separated tags (optional)

    try:
        api_instance.quote_image_background_post(image, tags=tags)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_background_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **bytearray**| Image file to add to your collection (png/jpg/gif are supported) | 
 **tags** | **str**| Optional comma separated tags | [optional] 

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_image_background_search_get**
> quote_image_background_search_get(query=query)



Searches for a background image with a given tag.  

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    query = 'query_example' # str | Tag string (optional)

    try:
        api_instance.quote_image_background_search_get(query=query)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_background_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Tag string | [optional] 

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

# **quote_image_background_tags_add_post**
> quote_image_background_tags_add_post(id, tags)



Add a tag to a given Image.

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    id = 'id_example' # str | Image ID
    tags = 'tags_example' # str | Comma Separated tags

    try:
        api_instance.quote_image_background_tags_add_post(id, tags)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_background_tags_add_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Image ID | 
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

# **quote_image_background_tags_remove_post**
> quote_image_background_tags_remove_post(id, tags)



Remove a tag from a given Image.

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    id = 'id_example' # str | Image ID
    tags = 'tags_example' # str | Comma Separated tags

    try:
        api_instance.quote_image_background_tags_remove_post(id, tags)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_background_tags_remove_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Image ID | 
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

# **quote_image_delete**
> quote_image_delete(id)



Delete a quote image. The user needs to be the owner of the quote image to be able to delete it. 

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    id = 'id_example' # str | Quote Image ID

    try:
        api_instance.quote_image_delete(id)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Quote Image ID | 

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

# **quote_image_font_delete**
> quote_image_font_delete(id)



Delete a font file. The user needs to be the owner of the font to be able to delete it. 

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    id = 'id_example' # str | Font ID

    try:
        api_instance.quote_image_font_delete(id)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_font_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Font ID | 

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

# **quote_image_font_list_get**
> quote_image_font_list_get(start=start)



Lists background images in your private collection.  

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    start = 56 # int | Response is paged. This parameter determines where the response should start. (optional)

    try:
        api_instance.quote_image_font_list_get(start=start)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_font_list_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| Response is paged. This parameter determines where the response should start. | [optional] 

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

# **quote_image_font_post**
> quote_image_font_post(font, tags=tags)



Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    font = None # bytearray | Font file to add to your collection (ttf/otf are supported)
    tags = 'tags_example' # str | Optional comma separated tags (optional)

    try:
        api_instance.quote_image_font_post(font, tags=tags)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_font_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **font** | **bytearray**| Font file to add to your collection (ttf/otf are supported) | 
 **tags** | **str**| Optional comma separated tags | [optional] 

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quote_image_font_search_get**
> quote_image_font_search_get(query=query)



Searches for a font with a given tag.  

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    query = 'query_example' # str | Tag string (optional)

    try:
        api_instance.quote_image_font_search_get(query=query)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_font_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Tag string | [optional] 

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

# **quote_image_font_tags_add_post**
> quote_image_font_tags_add_post(id, tags)



Add a tag to a given font.

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    id = 'id_example' # str | Font ID
    tags = 'tags_example' # str | Comma Separated tags

    try:
        api_instance.quote_image_font_tags_add_post(id, tags)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_font_tags_add_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Font ID | 
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

# **quote_image_font_tags_remove_post**
> quote_image_font_tags_remove_post(id, tags)



Remove a tag from a given Font.

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    id = 'id_example' # str | Font ID
    tags = 'tags_example' # str | Comma Separated tags

    try:
        api_instance.quote_image_font_tags_remove_post(id, tags)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_font_tags_remove_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Font ID | 
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

# **quote_image_get**
> quote_image_get(id, binary=binary)



Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO` 

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    id = 'id_example' # str | Quote Image id
    binary = True # bool | Should the response be a direct file download of the image or a base64 encoded image file wrapped in json? (optional) (default to True)

    try:
        api_instance.quote_image_get(id, binary=binary)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Quote Image id | 
 **binary** | **bool**| Should the response be a direct file download of the image or a base64 encoded image file wrapped in json? | [optional] [default to True]

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

# **quote_image_put**
> quote_image_put(quote_id, bgimage_id=bgimage_id, bg_color=bg_color, font_id=font_id, text_color=text_color, text_size=text_size, halign=halign, valign=valign, width=width, height=height, branding=branding, include_transparent_layer=include_transparent_layer)



Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?! 

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    quote_id = 'quote_id_example' # str | Quote id
    bgimage_id = 'theysaidso_default_background_image' # str | Background Image id ( Will override bgcolor if supplied) (optional) (default to 'theysaidso_default_background_image')
    bg_color = 'bg_color_example' # str | Background Color(if background image id is not supplied) (optional)
    font_id = 'theysaidso_default_font' # str | Font id (optional) (default to 'theysaidso_default_font')
    text_color = 'text_color_example' # str | Text Color (optional)
    text_size = 'text_size_example' # str | Text/font size (optional)
    halign = 'center' # str | Horizontal text Alignment Value (optional) (default to 'center')
    valign = 'center' # str | Vertical text Alignment Value (optional) (default to 'center')
    width = 56 # int | Image Width(By default this takes the width of the background image) (optional)
    height = 56 # int | Image Height(By default this takes the height of the background image) (optional)
    branding = False # bool | Disable They Said So branding (Only available in certain subscription levels. Ignored in other levels) (optional) (default to False)
    include_transparent_layer = True # bool | Should include a transparent layer between the text and the background image? This helps when the background image is bright and obscures the text. (optional) (default to True)

    try:
        api_instance.quote_image_put(quote_id, bgimage_id=bgimage_id, bg_color=bg_color, font_id=font_id, text_color=text_color, text_size=text_size, halign=halign, valign=valign, width=width, height=height, branding=branding, include_transparent_layer=include_transparent_layer)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quote_id** | **str**| Quote id | 
 **bgimage_id** | **str**| Background Image id ( Will override bgcolor if supplied) | [optional] [default to &#39;theysaidso_default_background_image&#39;]
 **bg_color** | **str**| Background Color(if background image id is not supplied) | [optional] 
 **font_id** | **str**| Font id | [optional] [default to &#39;theysaidso_default_font&#39;]
 **text_color** | **str**| Text Color | [optional] 
 **text_size** | **str**| Text/font size | [optional] 
 **halign** | **str**| Horizontal text Alignment Value | [optional] [default to &#39;center&#39;]
 **valign** | **str**| Vertical text Alignment Value | [optional] [default to &#39;center&#39;]
 **width** | **int**| Image Width(By default this takes the width of the background image) | [optional] 
 **height** | **int**| Image Height(By default this takes the height of the background image) | [optional] 
 **branding** | **bool**| Disable They Said So branding (Only available in certain subscription levels. Ignored in other levels) | [optional] [default to False]
 **include_transparent_layer** | **bool**| Should include a transparent layer between the text and the background image? This helps when the background image is bright and obscures the text. | [optional] [default to True]

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

# **quote_image_search_get**
> quote_image_search_get(category=category, author=author, private=private)



Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author.  

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
    api_instance = openapi_client.QuoteImagesApi(api_client)
    category = 'category_example' # str | Quote Category (optional)
    author = 'author_example' # str | Quote Author (optional)
    private = False # bool | Should search private collection. Default searches public image collection. (optional) (default to False)

    try:
        api_instance.quote_image_search_get(category=category, author=author, private=private)
    except Exception as e:
        print("Exception when calling QuoteImagesApi->quote_image_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **str**| Quote Category | [optional] 
 **author** | **str**| Quote Author | [optional] 
 **private** | **bool**| Should search private collection. Default searches public image collection. | [optional] [default to False]

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

