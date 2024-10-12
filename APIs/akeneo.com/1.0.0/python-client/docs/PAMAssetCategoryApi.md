# openapi_client.PAMAssetCategoryApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_asset_categories**](PAMAssetCategoryApi.md#get_asset_categories) | **GET** /api/rest/v1/asset-categories | Get list of PAM asset categories
[**get_asset_categories_code**](PAMAssetCategoryApi.md#get_asset_categories_code) | **GET** /api/rest/v1/asset-categories/{code} | Get a PAM asset category
[**patch_asset_categories**](PAMAssetCategoryApi.md#patch_asset_categories) | **PATCH** /api/rest/v1/asset-categories | Update/create several PAM asset categories
[**patch_asset_categories_code**](PAMAssetCategoryApi.md#patch_asset_categories_code) | **PATCH** /api/rest/v1/asset-categories/{code} | Update/create a PAM asset category
[**post_asset_categories**](PAMAssetCategoryApi.md#post_asset_categories) | **POST** /api/rest/v1/asset-categories | Create a new PAM asset category


# **get_asset_categories**
> PAMAssetCategories get_asset_categories(page=page, limit=limit, with_count=with_count)

Get list of PAM asset categories

This endpoint allows you to get a list of PAM asset categories. PAM asset categories are paginated and sorted by `root/left`.

### Example


```python
import openapi_client
from openapi_client.models.pam_asset_categories import PAMAssetCategories
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
    api_instance = openapi_client.PAMAssetCategoryApi(api_client)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)

    try:
        # Get list of PAM asset categories
        api_response = api_instance.get_asset_categories(page=page, limit=limit, with_count=with_count)
        print("The response of PAMAssetCategoryApi->get_asset_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PAMAssetCategoryApi->get_asset_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]

### Return type

[**PAMAssetCategories**](PAMAssetCategories.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns PAM asset categories paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_asset_categories_code**
> PostAssetCategoriesRequest get_asset_categories_code(code)

Get a PAM asset category

This endpoint allows you to get the information about a given PAM asset category.

### Example


```python
import openapi_client
from openapi_client.models.post_asset_categories_request import PostAssetCategoriesRequest
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
    api_instance = openapi_client.PAMAssetCategoryApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get a PAM asset category
        api_response = api_instance.get_asset_categories_code(code)
        print("The response of PAMAssetCategoryApi->get_asset_categories_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PAMAssetCategoryApi->get_asset_categories_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**PostAssetCategoriesRequest**](PostAssetCategoriesRequest.md)

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

# **patch_asset_categories**
> PatchAssetCategories200Response patch_asset_categories(body=body)

Update/create several PAM asset categories

This endpoint allows you to update several PAM asset categories at once.

### Example


```python
import openapi_client
from openapi_client.models.patch_asset_categories200_response import PatchAssetCategories200Response
from openapi_client.models.patch_asset_categories_request import PatchAssetCategoriesRequest
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
    api_instance = openapi_client.PAMAssetCategoryApi(api_client)
    body = openapi_client.PatchAssetCategoriesRequest() # PatchAssetCategoriesRequest |  (optional)

    try:
        # Update/create several PAM asset categories
        api_response = api_instance.patch_asset_categories(body=body)
        print("The response of PAMAssetCategoryApi->patch_asset_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PAMAssetCategoryApi->patch_asset_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PatchAssetCategoriesRequest**](PatchAssetCategoriesRequest.md)|  | [optional] 

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

# **patch_asset_categories_code**
> patch_asset_categories_code(code, body)

Update/create a PAM asset category

This endpoint allows you to update a given PAM asset category. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no category exists for the given code, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.post_asset_categories_request import PostAssetCategoriesRequest
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
    api_instance = openapi_client.PAMAssetCategoryApi(api_client)
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PostAssetCategoriesRequest() # PostAssetCategoriesRequest | 

    try:
        # Update/create a PAM asset category
        api_instance.patch_asset_categories_code(code, body)
    except Exception as e:
        print("Exception when calling PAMAssetCategoryApi->patch_asset_categories_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **body** | [**PostAssetCategoriesRequest**](PostAssetCategoriesRequest.md)|  | 

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

# **post_asset_categories**
> post_asset_categories(body=body)

Create a new PAM asset category

This endpoint allows you to create a new PAM asset category.

### Example


```python
import openapi_client
from openapi_client.models.post_asset_categories_request import PostAssetCategoriesRequest
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
    api_instance = openapi_client.PAMAssetCategoryApi(api_client)
    body = openapi_client.PostAssetCategoriesRequest() # PostAssetCategoriesRequest |  (optional)

    try:
        # Create a new PAM asset category
        api_instance.post_asset_categories(body=body)
    except Exception as e:
        print("Exception when calling PAMAssetCategoryApi->post_asset_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostAssetCategoriesRequest**](PostAssetCategoriesRequest.md)|  | [optional] 

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

