# openapi_client.ProductUuidApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_products_uuid_uuid**](ProductUuidApi.md#delete_products_uuid_uuid) | **DELETE** /api/rest/v1/products-uuid/{uuid} | Delete a product
[**get_draft_uuid_uuid**](ProductUuidApi.md#get_draft_uuid_uuid) | **GET** /api/rest/v1/products-uuid/{uuid}/draft | Get a draft
[**get_products_uuid**](ProductUuidApi.md#get_products_uuid) | **GET** /api/rest/v1/products-uuid | Get list of products
[**get_products_uuid_uuid**](ProductUuidApi.md#get_products_uuid_uuid) | **GET** /api/rest/v1/products-uuid/{uuid} | Get a product
[**patch_products_uuid**](ProductUuidApi.md#patch_products_uuid) | **PATCH** /api/rest/v1/products-uuid | Update/create several products
[**patch_products_uuid_uuid**](ProductUuidApi.md#patch_products_uuid_uuid) | **PATCH** /api/rest/v1/products-uuid/{uuid} | Update/create a product
[**post_products_uuid**](ProductUuidApi.md#post_products_uuid) | **POST** /api/rest/v1/products-uuid | Create a new product
[**post_proposal_uuid**](ProductUuidApi.md#post_proposal_uuid) | **POST** /api/rest/v1/products-uuid/{uuid}/proposal | Submit a draft for approval


# **delete_products_uuid_uuid**
> delete_products_uuid_uuid(uuid)

Delete a product

This endpoint allows you to delete a given product. In the Enterprise Edition, permissions based on your user groups are applied to the product you try to delete.

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
    api_instance = openapi_client.ProductUuidApi(api_client)
    uuid = 'uuid_example' # str | Uuid of the resource

    try:
        # Delete a product
        api_instance.delete_products_uuid_uuid(uuid)
    except Exception as e:
        print("Exception when calling ProductUuidApi->delete_products_uuid_uuid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| Uuid of the resource | 

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
**204** | No content to return |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_draft_uuid_uuid**
> PostProductsUuidRequest get_draft_uuid_uuid(uuid)

Get a draft

This endpoint allows you to get the information about a given draft.

### Example


```python
import openapi_client
from openapi_client.models.post_products_uuid_request import PostProductsUuidRequest
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
    api_instance = openapi_client.ProductUuidApi(api_client)
    uuid = 'uuid_example' # str | Uuid of the resource

    try:
        # Get a draft
        api_response = api_instance.get_draft_uuid_uuid(uuid)
        print("The response of ProductUuidApi->get_draft_uuid_uuid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductUuidApi->get_draft_uuid_uuid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| Uuid of the resource | 

### Return type

[**PostProductsUuidRequest**](PostProductsUuidRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_uuid**
> Products2 get_products_uuid(search=search, scope=scope, locales=locales, attributes=attributes, pagination_type=pagination_type, page=page, search_after=search_after, limit=limit, with_count=with_count, with_attribute_options=with_attribute_options, with_quality_scores=with_quality_scores, with_completenesses=with_completenesses)

Get list of products

This endpoint allows you to get a list of products. Products are paginated and they can be filtered. In the Enterprise Edition, permissions based on your user groups are applied to the set of products you request.

### Example


```python
import openapi_client
from openapi_client.models.products2 import Products2
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
    api_instance = openapi_client.ProductUuidApi(api_client)
    search = 'search_example' # str | Filter products, for more details see the <a href=\"/documentation/filter.html\">Filters</a> section (optional)
    scope = 'scope_example' # str | Filter product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href=\"/documentation/filter.html#via-channel\">Filter product values via channel</a> section (optional)
    locales = 'locales_example' # str | Filter product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href=\"/documentation/filter.html#via-locale\">Filter product values via locale</a> section (optional)
    attributes = 'attributes_example' # str | Filter product values to only return those concerning the given attributes, for more details see the <a href=\"/documentation/filter.html#filter-product-values\">Filter on product values</a> section (optional)
    pagination_type = page # str | Pagination method type, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to page)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    search_after = 'cursor to the first page' # str | Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 'cursor to the first page')
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)
    with_attribute_options = False # bool | Return labels of attribute options in the response. (Only available since the 5.0 version) (optional) (default to False)
    with_quality_scores = False # bool | Return product quality scores in the response. (Only available since the 5.0 version) (optional) (default to False)
    with_completenesses = False # bool | Return product completenesses in the response. (Only available since the 6.0 version) (optional) (default to False)

    try:
        # Get list of products
        api_response = api_instance.get_products_uuid(search=search, scope=scope, locales=locales, attributes=attributes, pagination_type=pagination_type, page=page, search_after=search_after, limit=limit, with_count=with_count, with_attribute_options=with_attribute_options, with_quality_scores=with_quality_scores, with_completenesses=with_completenesses)
        print("The response of ProductUuidApi->get_products_uuid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductUuidApi->get_products_uuid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Filter products, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html\&quot;&gt;Filters&lt;/a&gt; section | [optional] 
 **scope** | **str**| Filter product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#via-channel\&quot;&gt;Filter product values via channel&lt;/a&gt; section | [optional] 
 **locales** | **str**| Filter product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#via-locale\&quot;&gt;Filter product values via locale&lt;/a&gt; section | [optional] 
 **attributes** | **str**| Filter product values to only return those concerning the given attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#filter-product-values\&quot;&gt;Filter on product values&lt;/a&gt; section | [optional] 
 **pagination_type** | **str**| Pagination method type, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to page]
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **search_after** | **str**| Cursor when using the &#x60;search_after&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to &#39;cursor to the first page&#39;]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]
 **with_attribute_options** | **bool**| Return labels of attribute options in the response. (Only available since the 5.0 version) | [optional] [default to False]
 **with_quality_scores** | **bool**| Return product quality scores in the response. (Only available since the 5.0 version) | [optional] [default to False]
 **with_completenesses** | **bool**| Return product completenesses in the response. (Only available since the 6.0 version) | [optional] [default to False]

### Return type

[**Products2**](Products2.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message, _links

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return products paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_uuid_uuid**
> PostProductsUuidRequest get_products_uuid_uuid(uuid, with_attribute_options=with_attribute_options, with_quality_scores=with_quality_scores, with_completenesses=with_completenesses)

Get a product

This endpoint allows you to get the information about a given product. In the Entreprise Edition, permissions based on your user groups are applied to the product you request.

### Example


```python
import openapi_client
from openapi_client.models.post_products_uuid_request import PostProductsUuidRequest
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
    api_instance = openapi_client.ProductUuidApi(api_client)
    uuid = 'uuid_example' # str | Uuid of the resource
    with_attribute_options = False # bool | Return labels of attribute options in the response. (Only available since the 5.0 version) (optional) (default to False)
    with_quality_scores = False # bool | Return product quality scores in the response. (Only available since the 5.0 version) (optional) (default to False)
    with_completenesses = False # bool | Return product completenesses in the response. (Only available since the 6.0 version) (optional) (default to False)

    try:
        # Get a product
        api_response = api_instance.get_products_uuid_uuid(uuid, with_attribute_options=with_attribute_options, with_quality_scores=with_quality_scores, with_completenesses=with_completenesses)
        print("The response of ProductUuidApi->get_products_uuid_uuid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductUuidApi->get_products_uuid_uuid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| Uuid of the resource | 
 **with_attribute_options** | **bool**| Return labels of attribute options in the response. (Only available since the 5.0 version) | [optional] [default to False]
 **with_quality_scores** | **bool**| Return product quality scores in the response. (Only available since the 5.0 version) | [optional] [default to False]
 **with_completenesses** | **bool**| Return product completenesses in the response. (Only available since the 6.0 version) | [optional] [default to False]

### Return type

[**PostProductsUuidRequest**](PostProductsUuidRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_products_uuid**
> PatchProductsUuid200Response patch_products_uuid(body=body)

Update/create several products

This endpoint allows you to update and/or create several products at once. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product exists for the given uuid, it creates it. In the Enterprise Edition, permissions based on your user groups are applied to the products you try to update. It may result in the creation of drafts if you only have edit rights through the product's categories.

### Example


```python
import openapi_client
from openapi_client.models.patch_products_uuid200_response import PatchProductsUuid200Response
from openapi_client.models.patch_products_uuid_request import PatchProductsUuidRequest
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
    api_instance = openapi_client.ProductUuidApi(api_client)
    body = openapi_client.PatchProductsUuidRequest() # PatchProductsUuidRequest |  (optional)

    try:
        # Update/create several products
        api_response = api_instance.patch_products_uuid(body=body)
        print("The response of ProductUuidApi->patch_products_uuid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductUuidApi->patch_products_uuid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PatchProductsUuidRequest**](PatchProductsUuidRequest.md)|  | [optional] 

### Return type

[**PatchProductsUuid200Response**](PatchProductsUuid200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, x-example-1, x-example-2, x-example-3, code, message, _links

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**413** | Request Entity Too Large |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_products_uuid_uuid**
> patch_products_uuid_uuid(uuid, body)

Update/create a product

This endpoint allows you to update a given product. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product exists for the given uuid, it creates it. In the Entreprise Edition, permissions based on your user groups are applied to the product you try to update. It may result in the creation of a draft if you only have edit rights through the product's categories.

### Example


```python
import openapi_client
from openapi_client.models.post_products_uuid_request import PostProductsUuidRequest
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
    api_instance = openapi_client.ProductUuidApi(api_client)
    uuid = 'uuid_example' # str | Uuid of the resource
    body = openapi_client.PostProductsUuidRequest() # PostProductsUuidRequest | 

    try:
        # Update/create a product
        api_instance.patch_products_uuid_uuid(uuid, body)
    except Exception as e:
        print("Exception when calling ProductUuidApi->patch_products_uuid_uuid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| Uuid of the resource | 
 **body** | [**PostProductsUuidRequest**](PostProductsUuidRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message, _links

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location - URI of the created resource <br>  |
**204** | No content to return |  * Location - URI of the created resource <br>  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_products_uuid**
> post_products_uuid(body=body)

Create a new product

This endpoint allows you to create a new product. In the Enterprise Edition, permissions based on your user groups are applied to the product you try to create. If no uuid is provided, the PIM will generate one for you.

### Example


```python
import openapi_client
from openapi_client.models.post_products_uuid_request import PostProductsUuidRequest
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
    api_instance = openapi_client.ProductUuidApi(api_client)
    body = openapi_client.PostProductsUuidRequest() # PostProductsUuidRequest |  (optional)

    try:
        # Create a new product
        api_instance.post_products_uuid(body=body)
    except Exception as e:
        print("Exception when calling ProductUuidApi->post_products_uuid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostProductsUuidRequest**](PostProductsUuidRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message, _links

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location - URI of the created resource <br>  |
**400** | Bad request |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_proposal_uuid**
> post_proposal_uuid(uuid)

Submit a draft for approval

This endpoint allows you to submit a draft for approval.

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
    api_instance = openapi_client.ProductUuidApi(api_client)
    uuid = 'uuid_example' # str | Uuid of the resource

    try:
        # Submit a draft for approval
        api_instance.post_proposal_uuid(uuid)
    except Exception as e:
        print("Exception when calling ProductUuidApi->post_proposal_uuid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| Uuid of the resource | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message, _links

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Submitted |  * Location - URI of the created resource <br>  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

