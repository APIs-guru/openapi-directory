# openapi_client.CategoryApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_categories**](CategoryApi.md#get_categories) | **GET** /api/rest/v1/categories | Get list of categories
[**get_categories_code**](CategoryApi.md#get_categories_code) | **GET** /api/rest/v1/categories/{code} | Get a category
[**get_category_media_files_code_download**](CategoryApi.md#get_category_media_files_code_download) | **GET** /api/rest/v1/category-media-files/{code}/download | Download a category media file
[**patch_categories**](CategoryApi.md#patch_categories) | **PATCH** /api/rest/v1/categories | Update/create several categories
[**patch_categories_code**](CategoryApi.md#patch_categories_code) | **PATCH** /api/rest/v1/categories/{code} | Update/create a category
[**post_categories**](CategoryApi.md#post_categories) | **POST** /api/rest/v1/categories | Create a new category


# **get_categories**
> Categories get_categories(search=search, page=page, limit=limit, with_count=with_count, with_position=with_position, with_enriched_attributes=with_enriched_attributes)

Get list of categories

This endpoint allows you to get a list of categories. Categories are paginated and sorted by `root/left`.

### Example


```python
import openapi_client
from openapi_client.models.categories import Categories
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
    api_instance = openapi_client.CategoryApi(api_client)
    search = 'search_example' # str | Filter categories, for more details see the <a href=\"/documentation/filter.html#filter-categories\">Filters</a> section. (optional)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)
    with_position = True # bool | Return information about category position into its category tree (only available since the 7.0 version) (optional)
    with_enriched_attributes = True # bool | Return attribute values of the category (only available on SaaS platforms) (optional)

    try:
        # Get list of categories
        api_response = api_instance.get_categories(search=search, page=page, limit=limit, with_count=with_count, with_position=with_position, with_enriched_attributes=with_enriched_attributes)
        print("The response of CategoryApi->get_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->get_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Filter categories, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#filter-categories\&quot;&gt;Filters&lt;/a&gt; section. | [optional] 
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]
 **with_position** | **bool**| Return information about category position into its category tree (only available since the 7.0 version) | [optional] 
 **with_enriched_attributes** | **bool**| Return attribute values of the category (only available on SaaS platforms) | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return categories paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_categories_code**
> PostCategoriesRequest get_categories_code(code, with_position=with_position, with_enriched_attributes=with_enriched_attributes)

Get a category

This endpoint allows you to get the information about a given category.

### Example


```python
import openapi_client
from openapi_client.models.post_categories_request import PostCategoriesRequest
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
    api_instance = openapi_client.CategoryApi(api_client)
    code = 'code_example' # str | Code of the resource
    with_position = True # bool | Return information about category position into its category tree (only available since the 7.0 version) (optional)
    with_enriched_attributes = True # bool | Return attribute values of the category (only available on SaaS platforms) (optional)

    try:
        # Get a category
        api_response = api_instance.get_categories_code(code, with_position=with_position, with_enriched_attributes=with_enriched_attributes)
        print("The response of CategoryApi->get_categories_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->get_categories_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **with_position** | **bool**| Return information about category position into its category tree (only available since the 7.0 version) | [optional] 
 **with_enriched_attributes** | **bool**| Return attribute values of the category (only available on SaaS platforms) | [optional] 

### Return type

[**PostCategoriesRequest**](PostCategoriesRequest.md)

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

# **get_category_media_files_code_download**
> get_category_media_files_code_download(code)

Download a category media file

This endpoint allows you to download a given media file that is used as an attribute value of a enriched category.

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
    api_instance = openapi_client.CategoryApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Download a category media file
        api_instance.get_category_media_files_code_download(code)
    except Exception as e:
        print("Exception when calling CategoryApi->get_category_media_files_code_download: %s\n" % e)
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
**200** | OK |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_categories**
> PatchAssetCategories200Response patch_categories(body=body)

Update/create several categories

This endpoint allows you to update several categories at once.

### Example


```python
import openapi_client
from openapi_client.models.patch_asset_categories200_response import PatchAssetCategories200Response
from openapi_client.models.patch_categories_request import PatchCategoriesRequest
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
    api_instance = openapi_client.CategoryApi(api_client)
    body = openapi_client.PatchCategoriesRequest() # PatchCategoriesRequest |  (optional)

    try:
        # Update/create several categories
        api_response = api_instance.patch_categories(body=body)
        print("The response of CategoryApi->patch_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->patch_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PatchCategoriesRequest**](PatchCategoriesRequest.md)|  | [optional] 

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

# **patch_categories_code**
> patch_categories_code(code, body)

Update/create a category

This endpoint allows you to update a given category. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no category exists for the given code, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.post_categories_request import PostCategoriesRequest
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
    api_instance = openapi_client.CategoryApi(api_client)
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PostCategoriesRequest() # PostCategoriesRequest | 

    try:
        # Update/create a category
        api_instance.patch_categories_code(code, body)
    except Exception as e:
        print("Exception when calling CategoryApi->patch_categories_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **body** | [**PostCategoriesRequest**](PostCategoriesRequest.md)|  | 

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
**400** | Bad request |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_categories**
> post_categories(body=body)

Create a new category

This endpoint allows you to create a new category.

### Example


```python
import openapi_client
from openapi_client.models.post_categories_request import PostCategoriesRequest
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
    api_instance = openapi_client.CategoryApi(api_client)
    body = openapi_client.PostCategoriesRequest() # PostCategoriesRequest |  (optional)

    try:
        # Create a new category
        api_instance.post_categories(body=body)
    except Exception as e:
        print("Exception when calling CategoryApi->post_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostCategoriesRequest**](PostCategoriesRequest.md)|  | [optional] 

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

