# openapi_client.WebfontsApi

All URIs are relative to *https://webfonts.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webfonts_webfonts_list**](WebfontsApi.md#webfonts_webfonts_list) | **GET** /v1/webfonts | 


# **webfonts_webfonts_list**
> WebfontList webfonts_webfonts_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, capability=capability, family=family, sort=sort, subset=subset)



Retrieves the list of fonts currently served by the Google Fonts Developer API.

### Example


```python
import openapi_client
from openapi_client.models.webfont_list import WebfontList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://webfonts.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://webfonts.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebfontsApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    capability = ['capability_example'] # List[str] | Controls the font urls in `Webfont.files`, by default, static ttf fonts are sent. (optional)
    family = ['family_example'] # List[str] | Filters by Webfont.family, using literal match. If not set, returns all families (optional)
    sort = 'sort_example' # str | Enables sorting of the list. (optional)
    subset = 'subset_example' # str | Filters by Webfont.subset, if subset is found in Webfont.subsets. If not set, returns all families. (optional)

    try:
        api_response = api_instance.webfonts_webfonts_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, capability=capability, family=family, sort=sort, subset=subset)
        print("The response of WebfontsApi->webfonts_webfonts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebfontsApi->webfonts_webfonts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **capability** | [**List[str]**](str.md)| Controls the font urls in &#x60;Webfont.files&#x60;, by default, static ttf fonts are sent. | [optional] 
 **family** | [**List[str]**](str.md)| Filters by Webfont.family, using literal match. If not set, returns all families | [optional] 
 **sort** | **str**| Enables sorting of the list. | [optional] 
 **subset** | **str**| Filters by Webfont.subset, if subset is found in Webfont.subsets. If not set, returns all families. | [optional] 

### Return type

[**WebfontList**](WebfontList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

