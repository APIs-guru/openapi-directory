# openapi_client.AssetAttributeOptionApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_asset_attributes_attribute_code_options_code**](AssetAttributeOptionApi.md#get_asset_attributes_attribute_code_options_code) | **GET** /api/rest/v1/asset-families/{asset_family_code}/attributes/{attribute_code}/options/{code} | Get an attribute option for a given attribute of a given asset family
[**get_asset_family_attributes_attribute_code_options**](AssetAttributeOptionApi.md#get_asset_family_attributes_attribute_code_options) | **GET** /api/rest/v1/asset-families/{asset_family_code}/attributes/{attribute_code}/options | Get a list of attribute options of a given attribute for a given asset family
[**patch_asset_attributes_attribute_code_options_code**](AssetAttributeOptionApi.md#patch_asset_attributes_attribute_code_options_code) | **PATCH** /api/rest/v1/asset-families/{asset_family_code}/attributes/{attribute_code}/options/{code} | Update/create an asset attribute option for a given asset family


# **get_asset_attributes_attribute_code_options_code**
> GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner get_asset_attributes_attribute_code_options_code(asset_family_code, attribute_code, code)

Get an attribute option for a given attribute of a given asset family

This endpoint allows you to get the information about a given asset attribute option.

### Example


```python
import openapi_client
from openapi_client.models.get_asset_family_attributes_attribute_code_options200_response_inner import GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner
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
    api_instance = openapi_client.AssetAttributeOptionApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family
    attribute_code = 'attribute_code_example' # str | Code of the attribute
    code = 'code_example' # str | Code of the resource

    try:
        # Get an attribute option for a given attribute of a given asset family
        api_response = api_instance.get_asset_attributes_attribute_code_options_code(asset_family_code, attribute_code, code)
        print("The response of AssetAttributeOptionApi->get_asset_attributes_attribute_code_options_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetAttributeOptionApi->get_asset_attributes_attribute_code_options_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 
 **attribute_code** | **str**| Code of the attribute | 
 **code** | **str**| Code of the resource | 

### Return type

[**GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner**](GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner.md)

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

# **get_asset_family_attributes_attribute_code_options**
> List[GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner] get_asset_family_attributes_attribute_code_options(asset_family_code, attribute_code)

Get a list of attribute options of a given attribute for a given asset family

This endpoint allows you to get a list of attribute options for a given asset family.

### Example


```python
import openapi_client
from openapi_client.models.get_asset_family_attributes_attribute_code_options200_response_inner import GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner
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
    api_instance = openapi_client.AssetAttributeOptionApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family
    attribute_code = 'attribute_code_example' # str | Code of the attribute

    try:
        # Get a list of attribute options of a given attribute for a given asset family
        api_response = api_instance.get_asset_family_attributes_attribute_code_options(asset_family_code, attribute_code)
        print("The response of AssetAttributeOptionApi->get_asset_family_attributes_attribute_code_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetAttributeOptionApi->get_asset_family_attributes_attribute_code_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 
 **attribute_code** | **str**| Code of the attribute | 

### Return type

[**List[GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner]**](GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the options of the given attribute of the given asset family |  -  |
**401** | Authentication required |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_asset_attributes_attribute_code_options_code**
> patch_asset_attributes_attribute_code_options_code(asset_family_code, attribute_code, code, body)

Update/create an asset attribute option for a given asset family

This endpoint allows you to update a given option for a given attribute and a given asset family. Learn more about the <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if the option does not already exist for the given attribute of the given asset family, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.get_asset_family_attributes_attribute_code_options200_response_inner import GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner
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
    api_instance = openapi_client.AssetAttributeOptionApi(api_client)
    asset_family_code = 'asset_family_code_example' # str | Code of the asset family
    attribute_code = 'attribute_code_example' # str | Code of the attribute
    code = 'code_example' # str | Code of the resource
    body = openapi_client.GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner() # GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner | 

    try:
        # Update/create an asset attribute option for a given asset family
        api_instance.patch_asset_attributes_attribute_code_options_code(asset_family_code, attribute_code, code, body)
    except Exception as e:
        print("Exception when calling AssetAttributeOptionApi->patch_asset_attributes_attribute_code_options_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_family_code** | **str**| Code of the asset family | 
 **attribute_code** | **str**| Code of the attribute | 
 **code** | **str**| Code of the resource | 
 **body** | [**GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner**](GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner.md)|  | 

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

