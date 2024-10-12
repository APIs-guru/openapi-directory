# openapi_client.CatalogsApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_app_catalog**](CatalogsApi.md#delete_app_catalog) | **DELETE** /api/rest/v1/catalogs/{id} | Delete a catalog
[**get_app_catalog**](CatalogsApi.md#get_app_catalog) | **GET** /api/rest/v1/catalogs/{id} | Get a catalog
[**get_app_catalogs**](CatalogsApi.md#get_app_catalogs) | **GET** /api/rest/v1/catalogs | Get the list of owned catalogs
[**patch_app_catalog**](CatalogsApi.md#patch_app_catalog) | **PATCH** /api/rest/v1/catalogs/{id} | Update a catalog
[**post_app_catalog**](CatalogsApi.md#post_app_catalog) | **POST** /api/rest/v1/catalogs | Create a new catalog


# **delete_app_catalog**
> delete_app_catalog(id)

Delete a catalog

This endpoint allows you to delete a catalog.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogsApi(api_client)
    id = 'id_example' # str | Catalog ID

    try:
        # Delete a catalog
        api_instance.delete_app_catalog(id)
    except Exception as e:
        print("Exception when calling CatalogsApi->delete_app_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Catalog ID | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Deleted |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Catalog not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_app_catalog**
> PostAppCatalog201Response get_app_catalog(id)

Get a catalog

This endpoint allows you to get the information about a catalog.

### Example


```python
import openapi_client
from openapi_client.models.post_app_catalog201_response import PostAppCatalog201Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogsApi(api_client)
    id = 'id_example' # str | Catalog ID

    try:
        # Get a catalog
        api_response = api_instance.get_app_catalog(id)
        print("The response of CatalogsApi->get_app_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->get_app_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Catalog ID | 

### Return type

[**PostAppCatalog201Response**](PostAppCatalog201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the catalog |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Catalog not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_app_catalogs**
> Catalogs get_app_catalogs(page=page, limit=limit)

Get the list of owned catalogs

This endpoint allows you to get the list of catalogs you owned.

### Example


```python
import openapi_client
from openapi_client.models.catalogs import Catalogs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogsApi(api_client)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 100 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 100)

    try:
        # Get the list of owned catalogs
        api_response = api_instance.get_app_catalogs(page=page, limit=limit)
        print("The response of CatalogsApi->get_app_catalogs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->get_app_catalogs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 100]

### Return type

[**Catalogs**](Catalogs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the paginated catalogs owned by the user making the request |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_app_catalog**
> PostAppCatalog201Response patch_app_catalog(id, body=body)

Update a catalog

This endpoint allows you to update a catalog.

### Example


```python
import openapi_client
from openapi_client.models.post_app_catalog201_response import PostAppCatalog201Response
from openapi_client.models.post_app_catalog_request import PostAppCatalogRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogsApi(api_client)
    id = 'id_example' # str | Catalog ID
    body = openapi_client.PostAppCatalogRequest() # PostAppCatalogRequest |  (optional)

    try:
        # Update a catalog
        api_response = api_instance.patch_app_catalog(id, body=body)
        print("The response of CatalogsApi->patch_app_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->patch_app_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Catalog ID | 
 **body** | [**PostAppCatalogRequest**](PostAppCatalogRequest.md)|  | [optional] 

### Return type

[**PostAppCatalog201Response**](PostAppCatalog201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Catalog not found |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_app_catalog**
> PostAppCatalog201Response post_app_catalog(body=body)

Create a new catalog

This endpoint allows you to create a new catalog.

### Example


```python
import openapi_client
from openapi_client.models.post_app_catalog201_response import PostAppCatalog201Response
from openapi_client.models.post_app_catalog_request import PostAppCatalogRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogsApi(api_client)
    body = openapi_client.PostAppCatalogRequest() # PostAppCatalogRequest |  (optional)

    try:
        # Create a new catalog
        api_response = api_instance.post_app_catalog(body=body)
        print("The response of CatalogsApi->post_app_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->post_app_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostAppCatalogRequest**](PostAppCatalogRequest.md)|  | [optional] 

### Return type

[**PostAppCatalog201Response**](PostAppCatalog201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

