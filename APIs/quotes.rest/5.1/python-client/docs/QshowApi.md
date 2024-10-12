# openapi_client.QshowApi

All URIs are relative to *https://quotes.rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**qshow_delete**](QshowApi.md#qshow_delete) | **DELETE** /qshow | 
[**qshow_get**](QshowApi.md#qshow_get) | **GET** /qshow | 
[**qshow_list_get**](QshowApi.md#qshow_list_get) | **GET** /qshow/list | 
[**qshow_patch**](QshowApi.md#qshow_patch) | **PATCH** /qshow | 
[**qshow_put**](QshowApi.md#qshow_put) | **PUT** /qshow | 
[**qshow_quotes_add_post**](QshowApi.md#qshow_quotes_add_post) | **POST** /qshow/quotes/add | 
[**qshow_quotes_get**](QshowApi.md#qshow_quotes_get) | **GET** /qshow/quotes | 
[**qshow_quotes_remove_post**](QshowApi.md#qshow_quotes_remove_post) | **POST** /qshow/quotes/remove | 


# **qshow_delete**
> qshow_delete(id)



Delete a qshow. 

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
    api_instance = openapi_client.QshowApi(api_client)
    id = 'id_example' # str | Qshow ID

    try:
        api_instance.qshow_delete(id)
    except Exception as e:
        print("Exception when calling QshowApi->qshow_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Qshow ID | 

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

# **qshow_get**
> qshow_get(id)



Gets a details about a qshow. 

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
    api_instance = openapi_client.QshowApi(api_client)
    id = 'id_example' # str | Qshow ID

    try:
        api_instance.qshow_get(id)
    except Exception as e:
        print("Exception when calling QshowApi->qshow_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Qshow ID | 

### Return type

void (empty response body)

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

# **qshow_list_get**
> qshow_list_get(start=start, public=public)



Get the list of Qshows in They Said So platform.

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
    api_instance = openapi_client.QshowApi(api_client)
    start = 0 # int | Response is paged. This parameter controls where response starts the listing at (optional) (default to 0)
    public = False # bool | Should include public qshows or not in the list (optional) (default to False)

    try:
        api_instance.qshow_list_get(start=start, public=public)
    except Exception as e:
        print("Exception when calling QshowApi->qshow_list_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| Response is paged. This parameter controls where response starts the listing at | [optional] [default to 0]
 **public** | **bool**| Should include public qshows or not in the list | [optional] [default to False]

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

# **qshow_patch**
> qshow_patch(id, title=title, description=description, tags=tags)



Update an existing qshow.

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
    api_instance = openapi_client.QshowApi(api_client)
    id = 'id_example' # str | Qshow ID
    title = 'title_example' # str | Qshow title (optional)
    description = 'description_example' # str | Qshow description (optional)
    tags = ['tags_example'] # List[str] | Tags for the qshow (optional)

    try:
        api_instance.qshow_patch(id, title=title, description=description, tags=tags)
    except Exception as e:
        print("Exception when calling QshowApi->qshow_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Qshow ID | 
 **title** | **str**| Qshow title | [optional] 
 **description** | **str**| Qshow description | [optional] 
 **tags** | [**List[str]**](str.md)| Tags for the qshow | [optional] 

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

# **qshow_put**
> qshow_put(title, description=description, tags=tags)



Create and add a new qshow to your private collection.

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
    api_instance = openapi_client.QshowApi(api_client)
    title = 'title_example' # str | Qshow title
    description = 'description_example' # str | Qshow description (optional)
    tags = ['tags_example'] # List[str] | Tags for the qshow (optional)

    try:
        api_instance.qshow_put(title, description=description, tags=tags)
    except Exception as e:
        print("Exception when calling QshowApi->qshow_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **str**| Qshow title | 
 **description** | **str**| Qshow description | [optional] 
 **tags** | [**List[str]**](str.md)| Tags for the qshow | [optional] 

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

# **qshow_quotes_add_post**
> qshow_quotes_add_post(id, quoteid)



Add a quote to a given Qshow.

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
    api_instance = openapi_client.QshowApi(api_client)
    id = 'id_example' # str | Qshow ID
    quoteid = 'quoteid_example' # str | Quote ID to add the qshow collection

    try:
        api_instance.qshow_quotes_add_post(id, quoteid)
    except Exception as e:
        print("Exception when calling QshowApi->qshow_quotes_add_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Qshow ID | 
 **quoteid** | **str**| Quote ID to add the qshow collection | 

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

# **qshow_quotes_get**
> qshow_quotes_get(id)



Get the quotes in a given Qshow.

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
    api_instance = openapi_client.QshowApi(api_client)
    id = 'id_example' # str | Qshow ID

    try:
        api_instance.qshow_quotes_get(id)
    except Exception as e:
        print("Exception when calling QshowApi->qshow_quotes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Qshow ID | 

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

# **qshow_quotes_remove_post**
> qshow_quotes_remove_post(id, quoteid)



Remove a quote to a given Qshow.

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
    api_instance = openapi_client.QshowApi(api_client)
    id = 'id_example' # str | Qshow ID
    quoteid = 'quoteid_example' # str | Quote ID to remove from the qshow collection

    try:
        api_instance.qshow_quotes_remove_post(id, quoteid)
    except Exception as e:
        print("Exception when calling QshowApi->qshow_quotes_remove_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Qshow ID | 
 **quoteid** | **str**| Quote ID to remove from the qshow collection | 

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

