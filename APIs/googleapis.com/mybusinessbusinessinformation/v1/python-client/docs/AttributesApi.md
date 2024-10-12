# openapi_client.AttributesApi

All URIs are relative to *https://mybusinessbusinessinformation.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mybusinessbusinessinformation_attributes_list**](AttributesApi.md#mybusinessbusinessinformation_attributes_list) | **GET** /v1/attributes | 


# **mybusinessbusinessinformation_attributes_list**
> ListAttributeMetadataResponse mybusinessbusinessinformation_attributes_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, category_name=category_name, language_code=language_code, page_size=page_size, page_token=page_token, parent=parent, region_code=region_code, show_all=show_all)



Returns the list of attributes that would be available for a location with the given primary category and country.

### Example


```python
import openapi_client
from openapi_client.models.list_attribute_metadata_response import ListAttributeMetadataResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://mybusinessbusinessinformation.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://mybusinessbusinessinformation.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttributesApi(api_client)
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
    category_name = 'category_name_example' # str | The primary category stable ID to find available attributes. Must be of the format categories/{category_id}. (optional)
    language_code = 'language_code_example' # str | The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English. (optional)
    page_size = 56 # int | How many attributes to include per page. Default is 200, minimum is 1. (optional)
    page_token = 'page_token_example' # str | If specified, the next page of attribute metadata is retrieved. (optional)
    parent = 'parent_example' # str | Resource name of the location to look up available attributes. If this field is set, category_name, region_code, language_code and show_all are not required and must not be set. (optional)
    region_code = 'region_code_example' # str | The ISO 3166-1 alpha-2 country code to find available attributes. (optional)
    show_all = True # bool | Metadata for all available attributes are returned when this field is set to true, disregarding parent and category_name fields. language_code and region_code are required when show_all is set to true. (optional)

    try:
        api_response = api_instance.mybusinessbusinessinformation_attributes_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, category_name=category_name, language_code=language_code, page_size=page_size, page_token=page_token, parent=parent, region_code=region_code, show_all=show_all)
        print("The response of AttributesApi->mybusinessbusinessinformation_attributes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributesApi->mybusinessbusinessinformation_attributes_list: %s\n" % e)
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
 **category_name** | **str**| The primary category stable ID to find available attributes. Must be of the format categories/{category_id}. | [optional] 
 **language_code** | **str**| The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English. | [optional] 
 **page_size** | **int**| How many attributes to include per page. Default is 200, minimum is 1. | [optional] 
 **page_token** | **str**| If specified, the next page of attribute metadata is retrieved. | [optional] 
 **parent** | **str**| Resource name of the location to look up available attributes. If this field is set, category_name, region_code, language_code and show_all are not required and must not be set. | [optional] 
 **region_code** | **str**| The ISO 3166-1 alpha-2 country code to find available attributes. | [optional] 
 **show_all** | **bool**| Metadata for all available attributes are returned when this field is set to true, disregarding parent and category_name fields. language_code and region_code are required when show_all is set to true. | [optional] 

### Return type

[**ListAttributeMetadataResponse**](ListAttributeMetadataResponse.md)

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

