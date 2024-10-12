# openapi_client.CategoriesApi

All URIs are relative to *https://mybusinessbusinessinformation.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mybusinessbusinessinformation_categories_batch_get**](CategoriesApi.md#mybusinessbusinessinformation_categories_batch_get) | **GET** /v1/categories:batchGet | 
[**mybusinessbusinessinformation_categories_list**](CategoriesApi.md#mybusinessbusinessinformation_categories_list) | **GET** /v1/categories | 


# **mybusinessbusinessinformation_categories_batch_get**
> BatchGetCategoriesResponse mybusinessbusinessinformation_categories_batch_get(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, language_code=language_code, names=names, region_code=region_code, view=view)



Returns a list of business categories for the provided language and GConcept ids.

### Example


```python
import openapi_client
from openapi_client.models.batch_get_categories_response import BatchGetCategoriesResponse
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
    api_instance = openapi_client.CategoriesApi(api_client)
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
    language_code = 'language_code_example' # str | Required. The BCP 47 code of language that the category names should be returned in. (optional)
    names = ['names_example'] # List[str] | Required. At least one name must be set. The GConcept ids the localized category names should be returned for. To return details for more than one category, repeat this parameter in the request. (optional)
    region_code = 'region_code_example' # str | Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language. (optional)
    view = 'view_example' # str | Required. Specifies which parts to the Category resource should be returned in the response. (optional)

    try:
        api_response = api_instance.mybusinessbusinessinformation_categories_batch_get(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, language_code=language_code, names=names, region_code=region_code, view=view)
        print("The response of CategoriesApi->mybusinessbusinessinformation_categories_batch_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->mybusinessbusinessinformation_categories_batch_get: %s\n" % e)
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
 **language_code** | **str**| Required. The BCP 47 code of language that the category names should be returned in. | [optional] 
 **names** | [**List[str]**](str.md)| Required. At least one name must be set. The GConcept ids the localized category names should be returned for. To return details for more than one category, repeat this parameter in the request. | [optional] 
 **region_code** | **str**| Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language. | [optional] 
 **view** | **str**| Required. Specifies which parts to the Category resource should be returned in the response. | [optional] 

### Return type

[**BatchGetCategoriesResponse**](BatchGetCategoriesResponse.md)

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

# **mybusinessbusinessinformation_categories_list**
> ListCategoriesResponse mybusinessbusinessinformation_categories_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, language_code=language_code, page_size=page_size, page_token=page_token, region_code=region_code, view=view)



Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### Example


```python
import openapi_client
from openapi_client.models.list_categories_response import ListCategoriesResponse
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
    api_instance = openapi_client.CategoriesApi(api_client)
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
    filter = 'filter_example' # str | Optional. Filter string from user. The only field that supported is `displayName`. Eg: `filter=displayName=foo`. (optional)
    language_code = 'language_code_example' # str | Required. The BCP 47 code of language. (optional)
    page_size = 56 # int | Optional. How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100. (optional)
    page_token = 'page_token_example' # str | Optional. If specified, the next page of categories will be fetched. (optional)
    region_code = 'region_code_example' # str | Required. The ISO 3166-1 alpha-2 country code. (optional)
    view = 'view_example' # str | Required. Specifies which parts to the Category resource should be returned in the response. (optional)

    try:
        api_response = api_instance.mybusinessbusinessinformation_categories_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, language_code=language_code, page_size=page_size, page_token=page_token, region_code=region_code, view=view)
        print("The response of CategoriesApi->mybusinessbusinessinformation_categories_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->mybusinessbusinessinformation_categories_list: %s\n" % e)
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
 **filter** | **str**| Optional. Filter string from user. The only field that supported is &#x60;displayName&#x60;. Eg: &#x60;filter&#x3D;displayName&#x3D;foo&#x60;. | [optional] 
 **language_code** | **str**| Required. The BCP 47 code of language. | [optional] 
 **page_size** | **int**| Optional. How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100. | [optional] 
 **page_token** | **str**| Optional. If specified, the next page of categories will be fetched. | [optional] 
 **region_code** | **str**| Required. The ISO 3166-1 alpha-2 country code. | [optional] 
 **view** | **str**| Required. Specifies which parts to the Category resource should be returned in the response. | [optional] 

### Return type

[**ListCategoriesResponse**](ListCategoriesResponse.md)

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

