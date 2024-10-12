# openapi_client.ProductModelApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_product_models_code**](ProductModelApi.md#delete_product_models_code) | **DELETE** /api/rest/v1/product-models/{code} | Delete a product model
[**get_product_model_draft_code**](ProductModelApi.md#get_product_model_draft_code) | **GET** /api/rest/v1/product-models/{code}/draft | Get a draft
[**get_product_models**](ProductModelApi.md#get_product_models) | **GET** /api/rest/v1/product-models | Get list of product models
[**get_product_models_code**](ProductModelApi.md#get_product_models_code) | **GET** /api/rest/v1/product-models/{code} | Get a product model
[**patch_product_models**](ProductModelApi.md#patch_product_models) | **PATCH** /api/rest/v1/product-models | Update/create several product models
[**patch_product_models_code**](ProductModelApi.md#patch_product_models_code) | **PATCH** /api/rest/v1/product-models/{code} | Update/create a product model
[**post_product_model_proposal**](ProductModelApi.md#post_product_model_proposal) | **POST** /api/rest/v1/product-models/{code}/proposal | Submit a draft for approval
[**post_product_models**](ProductModelApi.md#post_product_models) | **POST** /api/rest/v1/product-models | Create a new product model


# **delete_product_models_code**
> delete_product_models_code(code)

Delete a product model

This endpoint allows you to delete a given product model. All its children, product models and variant products, will be also deleted. In the Enterprise Edition, the permissions based on your connection user group are applied to the product model you try to delete.

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
    api_instance = openapi_client.ProductModelApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Delete a product model
        api_instance.delete_product_models_code(code)
    except Exception as e:
        print("Exception when calling ProductModelApi->delete_product_models_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

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

# **get_product_model_draft_code**
> PostProductModelsRequest get_product_model_draft_code(code)

Get a draft

This endpoint allows you to get the information about a given product model draft.

### Example


```python
import openapi_client
from openapi_client.models.post_product_models_request import PostProductModelsRequest
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
    api_instance = openapi_client.ProductModelApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get a draft
        api_response = api_instance.get_product_model_draft_code(code)
        print("The response of ProductModelApi->get_product_model_draft_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductModelApi->get_product_model_draft_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**PostProductModelsRequest**](PostProductModelsRequest.md)

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

# **get_product_models**
> ProductModels get_product_models(search=search, scope=scope, locales=locales, attributes=attributes, pagination_type=pagination_type, page=page, search_after=search_after, limit=limit, with_count=with_count, with_quality_scores=with_quality_scores)

Get list of product models

This endpoint allows you to get a list of product models. Product models are paginated. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.

### Example


```python
import openapi_client
from openapi_client.models.product_models import ProductModels
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
    api_instance = openapi_client.ProductModelApi(api_client)
    search = 'search_example' # str | Filter product models, for more details see the <a href=\"/documentation/filter.html\">Filters</a> section (optional)
    scope = 'scope_example' # str | Filter product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href=\"/documentation/filter.html#via-channel\">Filter product values via channel</a> section (optional)
    locales = 'locales_example' # str | Filter product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href=\"/documentation/filter.html#via-locale\">Filter product values via locale</a> section (optional)
    attributes = 'attributes_example' # str | Filter product values to only return those concerning the given attributes, for more details see the <a href=\"/documentation/filter.html#filter-product-values\">Filter on product values</a> section and the <a href=\"/documentation/filter.html#filter-on-product-model-properties\">Filter on product model properties</a> section (optional)
    pagination_type = page # str | Pagination method type, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to page)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    search_after = 'cursor to the first page' # str | Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 'cursor to the first page')
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)
    with_quality_scores = True # bool | Return product model quality scores in the response. <strong>(Only available since the 6.0 version)</strong> (optional)

    try:
        # Get list of product models
        api_response = api_instance.get_product_models(search=search, scope=scope, locales=locales, attributes=attributes, pagination_type=pagination_type, page=page, search_after=search_after, limit=limit, with_count=with_count, with_quality_scores=with_quality_scores)
        print("The response of ProductModelApi->get_product_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductModelApi->get_product_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Filter product models, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html\&quot;&gt;Filters&lt;/a&gt; section | [optional] 
 **scope** | **str**| Filter product values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#via-channel\&quot;&gt;Filter product values via channel&lt;/a&gt; section | [optional] 
 **locales** | **str**| Filter product values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#via-locale\&quot;&gt;Filter product values via locale&lt;/a&gt; section | [optional] 
 **attributes** | **str**| Filter product values to only return those concerning the given attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#filter-product-values\&quot;&gt;Filter on product values&lt;/a&gt; section and the &lt;a href&#x3D;\&quot;/documentation/filter.html#filter-on-product-model-properties\&quot;&gt;Filter on product model properties&lt;/a&gt; section | [optional] 
 **pagination_type** | **str**| Pagination method type, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to page]
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **search_after** | **str**| Cursor when using the &#x60;search_after&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to &#39;cursor to the first page&#39;]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]
 **with_quality_scores** | **bool**| Return product model quality scores in the response. &lt;strong&gt;(Only available since the 6.0 version)&lt;/strong&gt; | [optional] 

### Return type

[**ProductModels**](ProductModels.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return product models paginated |  -  |
**401** | Authentication required |  -  |
**406** | Not Acceptable |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_product_models_code**
> PostProductModelsRequest get_product_models_code(code, with_quality_scores=with_quality_scores)

Get a product model

This endpoint allows you to get the information about a given product model. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product model you request.

### Example


```python
import openapi_client
from openapi_client.models.post_product_models_request import PostProductModelsRequest
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
    api_instance = openapi_client.ProductModelApi(api_client)
    code = 'code_example' # str | Code of the resource
    with_quality_scores = True # bool | Return product model quality scores in the response. <strong>(Only available since the 6.0 version)</strong> (optional)

    try:
        # Get a product model
        api_response = api_instance.get_product_models_code(code, with_quality_scores=with_quality_scores)
        print("The response of ProductModelApi->get_product_models_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductModelApi->get_product_models_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **with_quality_scores** | **bool**| Return product model quality scores in the response. &lt;strong&gt;(Only available since the 6.0 version)&lt;/strong&gt; | [optional] 

### Return type

[**PostProductModelsRequest**](PostProductModelsRequest.md)

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
**404** | Resource not found |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_product_models**
> PatchAssetCategories200Response patch_product_models(body=body)

Update/create several product models

This endpoint allows you to update and/or create several product models at once. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product models exists for the given code, it creates it. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product models you try to update. It may result in the creation of drafts if you only have edit rights through the product model's categories.

### Example


```python
import openapi_client
from openapi_client.models.patch_asset_categories200_response import PatchAssetCategories200Response
from openapi_client.models.patch_product_models_request import PatchProductModelsRequest
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
    api_instance = openapi_client.ProductModelApi(api_client)
    body = openapi_client.PatchProductModelsRequest() # PatchProductModelsRequest |  (optional)

    try:
        # Update/create several product models
        api_response = api_instance.patch_product_models(body=body)
        print("The response of ProductModelApi->patch_product_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductModelApi->patch_product_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PatchProductModelsRequest**](PatchProductModelsRequest.md)|  | [optional] 

### Return type

[**PatchAssetCategories200Response**](PatchAssetCategories200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, x-example-1, x-example-2, x-example-3, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**413** | Request Entity Too Large |  -  |
**415** | Unsupported Media type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_product_models_code**
> patch_product_models_code(code, body)

Update/create a product model

This endpoint allows you to update a given product model. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product model exists for the given code, it creates it. In the Enterprise Edition PIM since the 2.3, permissions based on your user groups are applied to the product model you try to update. It may result in the creation of a draft if you only have edit rights through the product model's categories.

### Example


```python
import openapi_client
from openapi_client.models.post_product_models_request import PostProductModelsRequest
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
    api_instance = openapi_client.ProductModelApi(api_client)
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PostProductModelsRequest() # PostProductModelsRequest | 

    try:
        # Update/create a product model
        api_instance.patch_product_models_code(code, body)
    except Exception as e:
        print("Exception when calling ProductModelApi->patch_product_models_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **body** | [**PostProductModelsRequest**](PostProductModelsRequest.md)|  | 

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
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_product_model_proposal**
> post_product_model_proposal(code)

Submit a draft for approval

This endpoint allows you to submit a product model draft for approval.

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
    api_instance = openapi_client.ProductModelApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Submit a draft for approval
        api_instance.post_product_model_proposal(code)
    except Exception as e:
        print("Exception when calling ProductModelApi->post_product_model_proposal: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

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

# **post_product_models**
> post_product_models(body=body)

Create a new product model

This endpoint allows you to create a new product model. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product model you try to create.

### Example


```python
import openapi_client
from openapi_client.models.post_product_models_request import PostProductModelsRequest
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
    api_instance = openapi_client.ProductModelApi(api_client)
    body = openapi_client.PostProductModelsRequest() # PostProductModelsRequest |  (optional)

    try:
        # Create a new product model
        api_instance.post_product_models(body=body)
    except Exception as e:
        print("Exception when calling ProductModelApi->post_product_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostProductModelsRequest**](PostProductModelsRequest.md)|  | [optional] 

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
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

