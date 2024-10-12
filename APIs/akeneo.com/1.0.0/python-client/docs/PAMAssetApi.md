# openapi_client.PAMAssetApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_pam_assets**](PAMAssetApi.md#get_pam_assets) | **GET** /api/rest/v1/assets | Get list of PAM assets
[**get_pam_assets_code**](PAMAssetApi.md#get_pam_assets_code) | **GET** /api/rest/v1/assets/{code} | Get a PAM asset
[**patch_pam_assets**](PAMAssetApi.md#patch_pam_assets) | **PATCH** /api/rest/v1/assets | Update/create several PAM assets
[**patch_pam_assets_code**](PAMAssetApi.md#patch_pam_assets_code) | **PATCH** /api/rest/v1/assets/{code} | Update/create a PAM asset
[**post_pam_assets**](PAMAssetApi.md#post_pam_assets) | **POST** /api/rest/v1/assets | Create a new PAM asset


# **get_pam_assets**
> PAMAssets get_pam_assets(pagination_type=pagination_type, page=page, search_after=search_after, limit=limit, with_count=with_count)

Get list of PAM assets

This endpoint allows you to get a list of PAM assets. PAM assets are paginated.

### Example


```python
import openapi_client
from openapi_client.models.pam_assets import PAMAssets
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
    api_instance = openapi_client.PAMAssetApi(api_client)
    pagination_type = page # str | Pagination method type, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to page)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    search_after = 'cursor to the first page' # str | Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 'cursor to the first page')
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)

    try:
        # Get list of PAM assets
        api_response = api_instance.get_pam_assets(pagination_type=pagination_type, page=page, search_after=search_after, limit=limit, with_count=with_count)
        print("The response of PAMAssetApi->get_pam_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PAMAssetApi->get_pam_assets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pagination_type** | **str**| Pagination method type, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to page]
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **search_after** | **str**| Cursor when using the &#x60;search_after&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to &#39;cursor to the first page&#39;]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]

### Return type

[**PAMAssets**](PAMAssets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns PAM assets paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pam_assets_code**
> PostPamAssetsRequest get_pam_assets_code(code)

Get a PAM asset

This endpoint allows you to get the information about a given PAM asset.

### Example


```python
import openapi_client
from openapi_client.models.post_pam_assets_request import PostPamAssetsRequest
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
    api_instance = openapi_client.PAMAssetApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get a PAM asset
        api_response = api_instance.get_pam_assets_code(code)
        print("The response of PAMAssetApi->get_pam_assets_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PAMAssetApi->get_pam_assets_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**PostPamAssetsRequest**](PostPamAssetsRequest.md)

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

# **patch_pam_assets**
> PatchAssetCategories200Response patch_pam_assets(body=body)

Update/create several PAM assets

This endpoint allows you to update several PAM assets at once.

### Example


```python
import openapi_client
from openapi_client.models.patch_asset_categories200_response import PatchAssetCategories200Response
from openapi_client.models.patch_pam_assets_request import PatchPamAssetsRequest
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
    api_instance = openapi_client.PAMAssetApi(api_client)
    body = openapi_client.PatchPamAssetsRequest() # PatchPamAssetsRequest |  (optional)

    try:
        # Update/create several PAM assets
        api_response = api_instance.patch_pam_assets(body=body)
        print("The response of PAMAssetApi->patch_pam_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PAMAssetApi->patch_pam_assets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PatchPamAssetsRequest**](PatchPamAssetsRequest.md)|  | [optional] 

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

# **patch_pam_assets_code**
> patch_pam_assets_code(code, body)

Update/create a PAM asset

This endpoint allows you to update a given PAM asset. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no asset exists for the given code, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.post_pam_assets_request import PostPamAssetsRequest
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
    api_instance = openapi_client.PAMAssetApi(api_client)
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PostPamAssetsRequest() # PostPamAssetsRequest | 

    try:
        # Update/create a PAM asset
        api_instance.patch_pam_assets_code(code, body)
    except Exception as e:
        print("Exception when calling PAMAssetApi->patch_pam_assets_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **body** | [**PostPamAssetsRequest**](PostPamAssetsRequest.md)|  | 

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

# **post_pam_assets**
> post_pam_assets(body=body)

Create a new PAM asset

This endpoint allows you to create a new PAM asset.

### Example


```python
import openapi_client
from openapi_client.models.post_pam_assets_request import PostPamAssetsRequest
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
    api_instance = openapi_client.PAMAssetApi(api_client)
    body = openapi_client.PostPamAssetsRequest() # PostPamAssetsRequest |  (optional)

    try:
        # Create a new PAM asset
        api_instance.post_pam_assets(body=body)
    except Exception as e:
        print("Exception when calling PAMAssetApi->post_pam_assets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostPamAssetsRequest**](PostPamAssetsRequest.md)|  | [optional] 

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

