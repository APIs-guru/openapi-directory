# openapi_client.CatalogProductsApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_app_catalog_mapped_products**](CatalogProductsApi.md#get_app_catalog_mapped_products) | **GET** /api/rest/v1/catalogs/{id}/mapped-products | Get the list of mapped products related to a catalog
[**get_app_catalog_product_uuids**](CatalogProductsApi.md#get_app_catalog_product_uuids) | **GET** /api/rest/v1/catalogs/{id}/product-uuids | Get the list of product uuids
[**get_app_catalog_products**](CatalogProductsApi.md#get_app_catalog_products) | **GET** /api/rest/v1/catalogs/{id}/products | Get the list of products related to a catalog
[**get_app_catalog_products_uuid**](CatalogProductsApi.md#get_app_catalog_products_uuid) | **GET** /api/rest/v1/catalogs/{id}/products/{uuid} | Get a product related to a catalog


# **get_app_catalog_mapped_products**
> Products get_app_catalog_mapped_products(id, search_after=search_after, limit=limit, updated_before=updated_before, updated_after=updated_after)

Get the list of mapped products related to a catalog

This endpoint allows you to get the list of products related to a catalog when the mapping is enabled. Please, note that a disabled catalog can return an HTTP 200 with a payload containing an error message, for more details see the <a href=\"apps/catalogs.html#troubleshooting\">App Catalog</a> section.

### Example


```python
import openapi_client
from openapi_client.models.products import Products
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
    api_instance = openapi_client.CatalogProductsApi(api_client)
    id = 'id_example' # str | Catalog ID
    search_after = 'cursor to the first page' # str | Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 'cursor to the first page')
    limit = 100 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 100)
    updated_before = '2013-10-20' # date | Filter products that have been updated BEFORE the provided date (Only available on Catalogs endpoints) (optional)
    updated_after = '2013-10-20' # date | Filter products that have been updated AFTER the provided date (Only available on Catalogs endpoints) (optional)

    try:
        # Get the list of mapped products related to a catalog
        api_response = api_instance.get_app_catalog_mapped_products(id, search_after=search_after, limit=limit, updated_before=updated_before, updated_after=updated_after)
        print("The response of CatalogProductsApi->get_app_catalog_mapped_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogProductsApi->get_app_catalog_mapped_products: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Catalog ID | 
 **search_after** | **str**| Cursor when using the &#x60;search_after&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to &#39;cursor to the first page&#39;]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 100]
 **updated_before** | **date**| Filter products that have been updated BEFORE the provided date (Only available on Catalogs endpoints) | [optional] 
 **updated_after** | **date**| Filter products that have been updated AFTER the provided date (Only available on Catalogs endpoints) | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the paginated **mapped** products |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Catalog not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_app_catalog_product_uuids**
> ProductUuids get_app_catalog_product_uuids(id, search_after=search_after, limit=limit, updated_before=updated_before, updated_after=updated_after)

Get the list of product uuids

This endpoint allows you to get the list of uuids of products contained in a catalog. Please, note that a disabled catalog can return an HTTP 200 with a payload containing an error message, for more details see the <a href=\"apps/catalogs.html#troubleshooting\">App Catalog</a> section.

### Example


```python
import openapi_client
from openapi_client.models.product_uuids import ProductUuids
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
    api_instance = openapi_client.CatalogProductsApi(api_client)
    id = 'id_example' # str | Id of the catalog
    search_after = 'cursor to the first page' # str | Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 'cursor to the first page')
    limit = 100 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 100)
    updated_before = '2013-10-20' # date | Filter products that have been updated BEFORE the provided date (Only available on Catalogs endpoints) (optional)
    updated_after = '2013-10-20' # date | Filter products that have been updated AFTER the provided date (Only available on Catalogs endpoints) (optional)

    try:
        # Get the list of product uuids
        api_response = api_instance.get_app_catalog_product_uuids(id, search_after=search_after, limit=limit, updated_before=updated_before, updated_after=updated_after)
        print("The response of CatalogProductsApi->get_app_catalog_product_uuids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogProductsApi->get_app_catalog_product_uuids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id of the catalog | 
 **search_after** | **str**| Cursor when using the &#x60;search_after&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to &#39;cursor to the first page&#39;]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 100]
 **updated_before** | **date**| Filter products that have been updated BEFORE the provided date (Only available on Catalogs endpoints) | [optional] 
 **updated_after** | **date**| Filter products that have been updated AFTER the provided date (Only available on Catalogs endpoints) | [optional] 

### Return type

[**ProductUuids**](ProductUuids.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the paginated product uuids |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Catalog not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_app_catalog_products**
> Products get_app_catalog_products(id, search_after=search_after, limit=limit, updated_before=updated_before, updated_after=updated_after)

Get the list of products related to a catalog

This endpoint allows you to get the list of products related to a catalog. Products are paginated and they can be filtered. In the Enterprise Edition, permissions based on your app settings are applied to the set of products you request. Please, note that a disabled catalog can return an HTTP 200 with a payload containing an error message, for more details see the <a href=\"apps/catalogs.html#troubleshooting\">App Catalog</a> section.

### Example


```python
import openapi_client
from openapi_client.models.products import Products
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
    api_instance = openapi_client.CatalogProductsApi(api_client)
    id = 'id_example' # str | Catalog ID
    search_after = 'cursor to the first page' # str | Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 'cursor to the first page')
    limit = 100 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 100)
    updated_before = '2013-10-20' # date | Filter products that have been updated BEFORE the provided date (Only available on Catalogs endpoints) (optional)
    updated_after = '2013-10-20' # date | Filter products that have been updated AFTER the provided date (Only available on Catalogs endpoints) (optional)

    try:
        # Get the list of products related to a catalog
        api_response = api_instance.get_app_catalog_products(id, search_after=search_after, limit=limit, updated_before=updated_before, updated_after=updated_after)
        print("The response of CatalogProductsApi->get_app_catalog_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogProductsApi->get_app_catalog_products: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Catalog ID | 
 **search_after** | **str**| Cursor when using the &#x60;search_after&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to &#39;cursor to the first page&#39;]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 100]
 **updated_before** | **date**| Filter products that have been updated BEFORE the provided date (Only available on Catalogs endpoints) | [optional] 
 **updated_after** | **date**| Filter products that have been updated AFTER the provided date (Only available on Catalogs endpoints) | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the paginated products |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Catalog not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_app_catalog_products_uuid**
> get_app_catalog_products_uuid(id, uuid)

Get a product related to a catalog

This endpoint allows you to get a specific product related to a catalog. In the Enterprise Edition, permissions based on your app settings are applied on the product you request. Please, note that a disabled catalog can return an HTTP 200 with a payload containing an error message, for more details see the <a href=\"apps/catalogs.html#troubleshooting\">App Catalog</a> section.

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
    api_instance = openapi_client.CatalogProductsApi(api_client)
    id = 'id_example' # str | Catalog ID
    uuid = 'uuid_example' # str | Product UUID

    try:
        # Get a product related to a catalog
        api_instance.get_app_catalog_products_uuid(id, uuid)
    except Exception as e:
        print("Exception when calling CatalogProductsApi->get_app_catalog_products_uuid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Catalog ID | 
 **uuid** | **str**| Product UUID | 

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
**200** | Return the product |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Catalog not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

