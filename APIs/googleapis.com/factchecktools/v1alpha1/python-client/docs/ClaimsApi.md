# openapi_client.ClaimsApi

All URIs are relative to *https://factchecktools.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**factchecktools_claims_search**](ClaimsApi.md#factchecktools_claims_search) | **GET** /v1alpha1/claims:search | 


# **factchecktools_claims_search**
> GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse factchecktools_claims_search(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, language_code=language_code, max_age_days=max_age_days, offset=offset, page_size=page_size, page_token=page_token, query=query, review_publisher_site_filter=review_publisher_site_filter)



Search through fact-checked claims.

### Example


```python
import openapi_client
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_fact_checked_claim_search_response import GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://factchecktools.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://factchecktools.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClaimsApi(api_client)
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
    language_code = 'language_code_example' # str | The BCP-47 language code, such as \"en-US\" or \"sr-Latn\". Can be used to restrict results by language, though we do not currently consider the region. (optional)
    max_age_days = 56 # int | The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer. (optional)
    offset = 56 # int | An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result. (optional)
    page_size = 56 # int | The pagination size. We will return up to that many results. Defaults to 10 if not set. (optional)
    page_token = 'page_token_example' # str | The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request. (optional)
    query = 'query_example' # str | Textual query string. Required unless `review_publisher_site_filter` is specified. (optional)
    review_publisher_site_filter = 'review_publisher_site_filter_example' # str | The review publisher site to filter results by, e.g. nytimes.com. (optional)

    try:
        api_response = api_instance.factchecktools_claims_search(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, language_code=language_code, max_age_days=max_age_days, offset=offset, page_size=page_size, page_token=page_token, query=query, review_publisher_site_filter=review_publisher_site_filter)
        print("The response of ClaimsApi->factchecktools_claims_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClaimsApi->factchecktools_claims_search: %s\n" % e)
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
 **language_code** | **str**| The BCP-47 language code, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. Can be used to restrict results by language, though we do not currently consider the region. | [optional] 
 **max_age_days** | **int**| The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer. | [optional] 
 **offset** | **int**| An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if &#x60;page_token&#x60; is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result. | [optional] 
 **page_size** | **int**| The pagination size. We will return up to that many results. Defaults to 10 if not set. | [optional] 
 **page_token** | **str**| The pagination token. You may provide the &#x60;next_page_token&#x60; returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request. | [optional] 
 **query** | **str**| Textual query string. Required unless &#x60;review_publisher_site_filter&#x60; is specified. | [optional] 
 **review_publisher_site_filter** | **str**| The review publisher site to filter results by, e.g. nytimes.com. | [optional] 

### Return type

[**GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse**](GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse.md)

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

