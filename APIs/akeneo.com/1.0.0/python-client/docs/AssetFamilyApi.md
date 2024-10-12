# openapi_client.AssetFamilyApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_asset_families**](AssetFamilyApi.md#get_asset_families) | **GET** /api/rest/v1/asset-families | Get list of asset families
[**get_asset_family_code**](AssetFamilyApi.md#get_asset_family_code) | **GET** /api/rest/v1/asset-families/{code} | Get an asset family
[**patch_asset_family_code**](AssetFamilyApi.md#patch_asset_family_code) | **PATCH** /api/rest/v1/asset-families/{code} | Update/create an asset family


# **get_asset_families**
> AssetFamilies get_asset_families(search_after=search_after)

Get list of asset families

This endpoint allows you to get a list of asset families. Asset families are paginated.

### Example


```python
import openapi_client
from openapi_client.models.asset_families import AssetFamilies
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
    api_instance = openapi_client.AssetFamilyApi(api_client)
    search_after = 'cursor to the first page' # str | Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 'cursor to the first page')

    try:
        # Get list of asset families
        api_response = api_instance.get_asset_families(search_after=search_after)
        print("The response of AssetFamilyApi->get_asset_families:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetFamilyApi->get_asset_families: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_after** | **str**| Cursor when using the &#x60;search_after&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to &#39;cursor to the first page&#39;]

### Return type

[**AssetFamilies**](AssetFamilies.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return asset families paginated |  -  |
**401** | Authentication required |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_asset_family_code**
> GetAssetFamilyCode200Response get_asset_family_code(code)

Get an asset family

This endpoint allows you to get the information about a given asset family.

### Example


```python
import openapi_client
from openapi_client.models.get_asset_family_code200_response import GetAssetFamilyCode200Response
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
    api_instance = openapi_client.AssetFamilyApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get an asset family
        api_response = api_instance.get_asset_family_code(code)
        print("The response of AssetFamilyApi->get_asset_family_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetFamilyApi->get_asset_family_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**GetAssetFamilyCode200Response**](GetAssetFamilyCode200Response.md)

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

# **patch_asset_family_code**
> patch_asset_family_code(code, body)

Update/create an asset family

This endpoint allows you to update a given asset family. Note that if the asset family does not already exist, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.get_asset_family_code200_response import GetAssetFamilyCode200Response
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
    api_instance = openapi_client.AssetFamilyApi(api_client)
    code = 'code_example' # str | Code of the resource
    body = openapi_client.GetAssetFamilyCode200Response() # GetAssetFamilyCode200Response | 

    try:
        # Update/create an asset family
        api_instance.patch_asset_family_code(code, body)
    except Exception as e:
        print("Exception when calling AssetFamilyApi->patch_asset_family_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **body** | [**GetAssetFamilyCode200Response**](GetAssetFamilyCode200Response.md)|  | 

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

