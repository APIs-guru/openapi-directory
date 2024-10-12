# openapi_client.AssetAttributeApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_asset_families_code_attributes**](AssetAttributeApi.md#get_asset_families_code_attributes) | **GET** /api/rest/v1/asset-families/{asset_family_code}/attributes | Get the list of attributes of a given asset family
[**get_asset_family_attributes_code**](AssetAttributeApi.md#get_asset_family_attributes_code) | **GET** /api/rest/v1/asset-families/{asset_family_code}/attributes/{code} | Get an attribute of a given asset family
[**patch_asset_family_attributes_code**](AssetAttributeApi.md#patch_asset_family_attributes_code) | **PATCH** /api/rest/v1/asset-families/{asset_family_code}/attributes/{code} | Update/create an attribute of a given asset family


# **get_asset_families_code_attributes**
> List[GetAssetFamiliesCodeAttributes200ResponseInner] get_asset_families_code_attributes(asset_family_code)

Get the list of attributes of a given asset family

This endpoint allows you to get the list of attributes of a given asset family.

### Example


```python
import openapi_client
from openapi_client.models.get_asset_families_code_attributes200_response_inner import GetAssetFamiliesCodeAttributes200ResponseInner
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
    api_instance = openapi_client.AssetAttributeApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family

    try:
        # Get the list of attributes of a given asset family
        api_response = api_instance.get_asset_families_code_attributes(asset_family_code)
        print("The response of AssetAttributeApi->get_asset_families_code_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetAttributeApi->get_asset_families_code_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 

### Return type

[**List[GetAssetFamiliesCodeAttributes200ResponseInner]**](GetAssetFamiliesCodeAttributes200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the attributes of the given asset family |  -  |
**401** | Authentication required |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_asset_family_attributes_code**
> GetAssetFamiliesCodeAttributes200ResponseInner get_asset_family_attributes_code(asset_family_code, code)

Get an attribute of a given asset family

This endpoint allows you to get the information about a given attribute for a given asset family.

### Example


```python
import openapi_client
from openapi_client.models.get_asset_families_code_attributes200_response_inner import GetAssetFamiliesCodeAttributes200ResponseInner
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
    api_instance = openapi_client.AssetAttributeApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family
    code = 'code_example' # str | Code of the resource

    try:
        # Get an attribute of a given asset family
        api_response = api_instance.get_asset_family_attributes_code(asset_family_code, code)
        print("The response of AssetAttributeApi->get_asset_family_attributes_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetAttributeApi->get_asset_family_attributes_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 
 **code** | **str**| Code of the resource | 

### Return type

[**GetAssetFamiliesCodeAttributes200ResponseInner**](GetAssetFamiliesCodeAttributes200ResponseInner.md)

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

# **patch_asset_family_attributes_code**
> patch_asset_family_attributes_code(asset_family_code, code, body)

Update/create an attribute of a given asset family

This endpoint allows you to update a given attribute for a given asset family. Note that if the attribute does not already exist for the given asset family, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.get_asset_families_code_attributes200_response_inner import GetAssetFamiliesCodeAttributes200ResponseInner
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
    api_instance = openapi_client.AssetAttributeApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family
    code = 'code_example' # str | Code of the resource
    body = openapi_client.GetAssetFamiliesCodeAttributes200ResponseInner() # GetAssetFamiliesCodeAttributes200ResponseInner | 

    try:
        # Update/create an attribute of a given asset family
        api_instance.patch_asset_family_attributes_code(asset_family_code, code, body)
    except Exception as e:
        print("Exception when calling AssetAttributeApi->patch_asset_family_attributes_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 
 **code** | **str**| Code of the resource | 
 **body** | [**GetAssetFamiliesCodeAttributes200ResponseInner**](GetAssetFamiliesCodeAttributes200ResponseInner.md)|  | 

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

