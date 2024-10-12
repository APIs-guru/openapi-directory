# openapi_client.PAMAssetTagApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_asset_tags**](PAMAssetTagApi.md#get_asset_tags) | **GET** /api/rest/v1/asset-tags | Get list of PAM asset tags
[**get_asset_tags_code**](PAMAssetTagApi.md#get_asset_tags_code) | **GET** /api/rest/v1/asset-tags/{code} | Get a PAM asset tag
[**patch_asset_tags_code**](PAMAssetTagApi.md#patch_asset_tags_code) | **PATCH** /api/rest/v1/asset-tags/{code} | Update/create a PAM asset tag


# **get_asset_tags**
> PAMAssetTags get_asset_tags(page=page, limit=limit, with_count=with_count)

Get list of PAM asset tags

This endpoint allows you to get a list of PAM asset tags. PAM asset tags are paginated.

### Example


```python
import openapi_client
from openapi_client.models.pam_asset_tags import PAMAssetTags
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
    api_instance = openapi_client.PAMAssetTagApi(api_client)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)

    try:
        # Get list of PAM asset tags
        api_response = api_instance.get_asset_tags(page=page, limit=limit, with_count=with_count)
        print("The response of PAMAssetTagApi->get_asset_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PAMAssetTagApi->get_asset_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]

### Return type

[**PAMAssetTags**](PAMAssetTags.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns PAM asset tags paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_asset_tags_code**
> GetAssetTagsCode200Response get_asset_tags_code(code)

Get a PAM asset tag

This endpoint allows you to get the information about a given PAM asset tag.

### Example


```python
import openapi_client
from openapi_client.models.get_asset_tags_code200_response import GetAssetTagsCode200Response
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
    api_instance = openapi_client.PAMAssetTagApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get a PAM asset tag
        api_response = api_instance.get_asset_tags_code(code)
        print("The response of PAMAssetTagApi->get_asset_tags_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PAMAssetTagApi->get_asset_tags_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**GetAssetTagsCode200Response**](GetAssetTagsCode200Response.md)

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

# **patch_asset_tags_code**
> patch_asset_tags_code(code, body)

Update/create a PAM asset tag

This endpoint allows you to update a given PAM asset tag. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no tag exists for the given code, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.get_asset_tags_code200_response import GetAssetTagsCode200Response
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
    api_instance = openapi_client.PAMAssetTagApi(api_client)
    code = 'code_example' # str | Code of the resource
    body = openapi_client.GetAssetTagsCode200Response() # GetAssetTagsCode200Response | 

    try:
        # Update/create a PAM asset tag
        api_instance.patch_asset_tags_code(code, body)
    except Exception as e:
        print("Exception when calling PAMAssetTagApi->patch_asset_tags_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **body** | [**GetAssetTagsCode200Response**](GetAssetTagsCode200Response.md)|  | 

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

