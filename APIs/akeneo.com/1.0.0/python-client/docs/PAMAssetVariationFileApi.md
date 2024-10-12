# openapi_client.PAMAssetVariationFileApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_variation_files_channel_code_locale_code**](PAMAssetVariationFileApi.md#get_variation_files_channel_code_locale_code) | **GET** /api/rest/v1/assets/{asset_code}/variation-files/{channel_code}/{locale_code} | Get a variation file
[**get_variation_files_channel_code_locale_code_download**](PAMAssetVariationFileApi.md#get_variation_files_channel_code_locale_code_download) | **GET** /api/rest/v1/assets/{asset_code}/variation-files/{channel_code}/{locale_code}/download | Download a variation file
[**post_variation_files_channel_code_locale_code**](PAMAssetVariationFileApi.md#post_variation_files_channel_code_locale_code) | **POST** /api/rest/v1/assets/{asset_code}/variation-files/{channel_code}/{locale_code} | Upload a new variation file


# **get_variation_files_channel_code_locale_code**
> GetVariationFilesChannelCodeLocaleCode200Response get_variation_files_channel_code_locale_code(asset_code, channel_code, locale_code)

Get a variation file

This endpoint allows you to get the information about a variation file of a given PAM asset.

### Example


```python
import openapi_client
from openapi_client.models.get_variation_files_channel_code_locale_code200_response import GetVariationFilesChannelCodeLocaleCode200Response
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
    api_instance = openapi_client.PAMAssetVariationFileApi(api_client)
    asset_code = 'asset_code_example' # str | Code of the asset
    channel_code = 'channel_code_example' # str | Code of the channel
    locale_code = 'locale_code_example' # str | Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable

    try:
        # Get a variation file
        api_response = api_instance.get_variation_files_channel_code_locale_code(asset_code, channel_code, locale_code)
        print("The response of PAMAssetVariationFileApi->get_variation_files_channel_code_locale_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PAMAssetVariationFileApi->get_variation_files_channel_code_locale_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_code** | **str**| Code of the asset | 
 **channel_code** | **str**| Code of the channel | 
 **locale_code** | **str**| Code of the locale if the asset is localizable or equal to &#x60;no-locale&#x60; if the asset is not localizable | 

### Return type

[**GetVariationFilesChannelCodeLocaleCode200Response**](GetVariationFilesChannelCodeLocaleCode200Response.md)

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

# **get_variation_files_channel_code_locale_code_download**
> get_variation_files_channel_code_locale_code_download(asset_code, channel_code, locale_code)

Download a variation file

This endpoint allows you to download a given variation file.

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
    api_instance = openapi_client.PAMAssetVariationFileApi(api_client)
    asset_code = 'asset_code_example' # str | Code of the asset
    channel_code = 'channel_code_example' # str | Code of the channel
    locale_code = 'locale_code_example' # str | Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable

    try:
        # Download a variation file
        api_instance.get_variation_files_channel_code_locale_code_download(asset_code, channel_code, locale_code)
    except Exception as e:
        print("Exception when calling PAMAssetVariationFileApi->get_variation_files_channel_code_locale_code_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_code** | **str**| Code of the asset | 
 **channel_code** | **str**| Code of the channel | 
 **locale_code** | **str**| Code of the locale if the asset is localizable or equal to &#x60;no-locale&#x60; if the asset is not localizable | 

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

# **post_variation_files_channel_code_locale_code**
> post_variation_files_channel_code_locale_code(asset_code, channel_code, locale_code, content_type, body=body)

Upload a new variation file

This endpoint allows you to upload a new variation file for a given PAM asset, channel and locale.

### Example


```python
import openapi_client
from openapi_client.models.post_reference_files_locale_code_request import PostReferenceFilesLocaleCodeRequest
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
    api_instance = openapi_client.PAMAssetVariationFileApi(api_client)
    asset_code = 'asset_code_example' # str | Code of the asset
    channel_code = 'channel_code_example' # str | Code of the channel
    locale_code = 'locale_code_example' # str | Code of the locale if the asset is localizable or equal to `no-locale` if the asset is not localizable
    content_type = 'content_type_example' # str | Equal to 'multipart/form-data', no other value allowed
    body = openapi_client.PostReferenceFilesLocaleCodeRequest() # PostReferenceFilesLocaleCodeRequest |  (optional)

    try:
        # Upload a new variation file
        api_instance.post_variation_files_channel_code_locale_code(asset_code, channel_code, locale_code, content_type, body=body)
    except Exception as e:
        print("Exception when calling PAMAssetVariationFileApi->post_variation_files_channel_code_locale_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_code** | **str**| Code of the asset | 
 **channel_code** | **str**| Code of the channel | 
 **locale_code** | **str**| Code of the locale if the asset is localizable or equal to &#x60;no-locale&#x60; if the asset is not localizable | 
 **content_type** | **str**| Equal to &#39;multipart/form-data&#39;, no other value allowed | 
 **body** | [**PostReferenceFilesLocaleCodeRequest**](PostReferenceFilesLocaleCodeRequest.md)|  | [optional] 

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
**404** | Resource not found |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

