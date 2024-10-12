# openapi_client.AssetApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_assets_code**](AssetApi.md#delete_assets_code) | **DELETE** /api/rest/v1/asset-families/{asset_family_code}/assets/{code} | Delete an asset
[**get_assets**](AssetApi.md#get_assets) | **GET** /api/rest/v1/asset-families/{asset_family_code}/assets | Get the list of the assets of a given asset family
[**get_assets_code**](AssetApi.md#get_assets_code) | **GET** /api/rest/v1/asset-families/{asset_family_code}/assets/{code} | Get an asset of a given asset family
[**patch_asset_code**](AssetApi.md#patch_asset_code) | **PATCH** /api/rest/v1/asset-families/{asset_family_code}/assets/{code} | Update/create an asset
[**patch_assets**](AssetApi.md#patch_assets) | **PATCH** /api/rest/v1/asset-families/{asset_family_code}/assets | Update/create several assets


# **delete_assets_code**
> delete_assets_code(asset_family_code, code)

Delete an asset

This endpoint allows you to delete a given asset. This endpoint is case sensitive on the asset family code.

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
    api_instance = openapi_client.AssetApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family
    code = 'code_example' # str | Code of the resource

    try:
        # Delete an asset
        api_instance.delete_assets_code(asset_family_code, code)
    except Exception as e:
        print("Exception when calling AssetApi->delete_assets_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 
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
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_assets**
> Asset get_assets(asset_family_code, search=search, channel=channel, locales=locales, search_after=search_after)

Get the list of the assets of a given asset family

This endpoint allows you to get a list of assets of a given asset family. Assets are paginated. This endpoint is case sensitive on the asset family code.

### Example


```python
import openapi_client
from openapi_client.models.asset import Asset
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
    api_instance = openapi_client.AssetApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family
    search = 'search_example' # str | Filter assets, for more details see the <a href=\"/documentation/filter.html#filter-assets\">Asset filters</a> section (optional)
    channel = 'channel_example' # str | Filter asset values to return scopable asset attributes for the given channel as well as the non localizable/non scopable asset attributes, for more details see the <a href=\"/documentation/filter.html#asset-values-by-channel\">Filter asset values by channel</a> section (optional)
    locales = 'locales_example' # str | Filter asset values to return localizable attributes for the given locales as well as the non localizable/non scopable asset attributes, for more details see the <a href=\"/documentation/filter.html#asset-values-by-locale\">Filter asset values by locale</a> section (optional)
    search_after = 'cursor to the first page' # str | Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 'cursor to the first page')

    try:
        # Get the list of the assets of a given asset family
        api_response = api_instance.get_assets(asset_family_code, search=search, channel=channel, locales=locales, search_after=search_after)
        print("The response of AssetApi->get_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->get_assets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 
 **search** | **str**| Filter assets, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#filter-assets\&quot;&gt;Asset filters&lt;/a&gt; section | [optional] 
 **channel** | **str**| Filter asset values to return scopable asset attributes for the given channel as well as the non localizable/non scopable asset attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#asset-values-by-channel\&quot;&gt;Filter asset values by channel&lt;/a&gt; section | [optional] 
 **locales** | **str**| Filter asset values to return localizable attributes for the given locales as well as the non localizable/non scopable asset attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#asset-values-by-locale\&quot;&gt;Filter asset values by locale&lt;/a&gt; section | [optional] 
 **search_after** | **str**| Cursor when using the &#x60;search_after&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to &#39;cursor to the first page&#39;]

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the assets of the given asset family paginated |  -  |
**401** | Authentication required |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_assets_code**
> PatchAssetsRequestInner get_assets_code(asset_family_code, code)

Get an asset of a given asset family

This endpoint allows you to get the information about a given asset for a given asset family. This endpoint is case sensitive on the asset family code.

### Example


```python
import openapi_client
from openapi_client.models.patch_assets_request_inner import PatchAssetsRequestInner
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
    api_instance = openapi_client.AssetApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family
    code = 'code_example' # str | Code of the resource

    try:
        # Get an asset of a given asset family
        api_response = api_instance.get_assets_code(asset_family_code, code)
        print("The response of AssetApi->get_assets_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->get_assets_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 
 **code** | **str**| Code of the resource | 

### Return type

[**PatchAssetsRequestInner**](PatchAssetsRequestInner.md)

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

# **patch_asset_code**
> patch_asset_code(asset_family_code, code, body)

Update/create an asset

This endpoint allows you to update a given asset of a given asset family. Learn more about the <a href=\"/documentation/update.html#patch-asset-attribute-values\">Update behavior</a>. Note that if the asset does not already exist for the given asset family, it creates it. This endpoint is case sensitive on the asset family code.

### Example


```python
import openapi_client
from openapi_client.models.patch_assets_request_inner import PatchAssetsRequestInner
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
    api_instance = openapi_client.AssetApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PatchAssetsRequestInner() # PatchAssetsRequestInner | 

    try:
        # Update/create an asset
        api_instance.patch_asset_code(asset_family_code, code, body)
    except Exception as e:
        print("Exception when calling AssetApi->patch_asset_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 
 **code** | **str**| Code of the resource | 
 **body** | [**PatchAssetsRequestInner**](PatchAssetsRequestInner.md)|  | 

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
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_assets**
> List[PatchAssets200ResponseInner] patch_assets(asset_family_code, body)

Update/create several assets

This endpoint allows you to update and/or create several assets of one given asset family at once. Learn more about the <a href=\"/documentation/update.html#patch-asset-attribute-values\">Update behavior</a>. Note that if the asset does not already exist for the given asset family, it creates it. This endpoint is case sensitive on the asset family code.

### Example


```python
import openapi_client
from openapi_client.models.patch_assets200_response_inner import PatchAssets200ResponseInner
from openapi_client.models.patch_assets_request_inner import PatchAssetsRequestInner
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
    api_instance = openapi_client.AssetApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family
    body = [openapi_client.PatchAssetsRequestInner()] # List[PatchAssetsRequestInner] | 

    try:
        # Update/create several assets
        api_response = api_instance.patch_assets(asset_family_code, body)
        print("The response of AssetApi->patch_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->patch_assets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 
 **body** | [**List[PatchAssetsRequestInner]**](PatchAssetsRequestInner.md)|  | 

### Return type

[**List[PatchAssets200ResponseInner]**](PatchAssets200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**401** | Authentication required |  -  |
**413** | Request Entity Too Large |  -  |
**415** | Unsupported Media type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

