# openapi_client.PagesApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_pages_get**](PagesApi.md#api_pages_get) | **GET** /api/pages | show details for all pages
[**api_pages_id_delete**](PagesApi.md#api_pages_id_delete) | **DELETE** /api/pages/{id} | remove a page
[**api_pages_id_get**](PagesApi.md#api_pages_id_get) | **GET** /api/pages/{id} | show details for a page
[**api_pages_id_put**](PagesApi.md#api_pages_id_put) | **PUT** /api/pages/{id} | update details for a page
[**api_pages_post**](PagesApi.md#api_pages_post) | **POST** /api/pages | pages


# **api_pages_get**
> List[Page] api_pages_get()

show details for all pages

This endpoint allows the client to retrieve details for all Page objects.

### Example


```python
import openapi_client
from openapi_client.models.page import Page
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PagesApi(api_client)

    try:
        # show details for all pages
        api_response = api_instance.api_pages_get()
        print("The response of PagesApi->api_pages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PagesApi->api_pages_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Page]**](Page.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_pages_id_delete**
> Page api_pages_id_delete(id)

remove a page

This endpoint allows the client to delete a single Page object, specified by ID.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.page import Page
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PagesApi(api_client)
    id = 1 # int | The ID of the page.

    try:
        # remove a page
        api_response = api_instance.api_pages_id_delete(id)
        print("The response of PagesApi->api_pages_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PagesApi->api_pages_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the page. | 

### Return type

[**Page**](Page.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**401** | unauthorized |  -  |
**422** | unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_pages_id_get**
> Page api_pages_id_get(id)

show details for a page

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

### Example


```python
import openapi_client
from openapi_client.models.page import Page
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PagesApi(api_client)
    id = 1 # int | The ID of the page.

    try:
        # show details for a page
        api_response = api_instance.api_pages_id_get(id)
        print("The response of PagesApi->api_pages_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PagesApi->api_pages_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the page. | 

### Return type

[**Page**](Page.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_pages_id_put**
> Page api_pages_id_put(id, page=page)

update details for a page

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.page import Page
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PagesApi(api_client)
    id = 1 # int | The ID of the page.
    page = openapi_client.Page() # Page |  (optional)

    try:
        # update details for a page
        api_response = api_instance.api_pages_id_put(id, page=page)
        print("The response of PagesApi->api_pages_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PagesApi->api_pages_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the page. | 
 **page** | [**Page**](Page.md)|  | [optional] 

### Return type

[**Page**](Page.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**401** | unauthorized |  -  |
**422** | unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_pages_post**
> api_pages_post(api_pages_post_request=api_pages_post_request)

pages

This endpoint allows the client to create a new page.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.api_pages_post_request import ApiPagesPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PagesApi(api_client)
    api_pages_post_request = openapi_client.ApiPagesPostRequest() # ApiPagesPostRequest |  (optional)

    try:
        # pages
        api_instance.api_pages_post(api_pages_post_request=api_pages_post_request)
    except Exception as e:
        print("Exception when calling PagesApi->api_pages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_pages_post_request** | [**ApiPagesPostRequest**](ApiPagesPostRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**401** | unauthorized |  -  |
**422** | unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

