# openapi_client.MembersApi

All URIs are relative to *https://youtube.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**youtube_members_list**](MembersApi.md#youtube_members_list) | **GET** /youtube/v3/members | 


# **youtube_members_list**
> MemberListResponse youtube_members_list(part, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter_by_member_channel_id=filter_by_member_channel_id, has_access_to_level=has_access_to_level, max_results=max_results, mode=mode, page_token=page_token)



Retrieves a list of members that match the request criteria for a channel.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.member_list_response import MemberListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://youtube.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://youtube.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MembersApi(api_client)
    part = ['part_example'] # List[str] | The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.
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
    filter_by_member_channel_id = 'filter_by_member_channel_id_example' # str | Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response. (optional)
    has_access_to_level = 'has_access_to_level_example' # str | Filter members in the results set to the ones that have access to a level. (optional)
    max_results = 56 # int | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. (optional)
    mode = 'mode_example' # str | Parameter that specifies which channel members to return. (optional)
    page_token = 'page_token_example' # str | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. (optional)

    try:
        api_response = api_instance.youtube_members_list(part, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter_by_member_channel_id=filter_by_member_channel_id, has_access_to_level=has_access_to_level, max_results=max_results, mode=mode, page_token=page_token)
        print("The response of MembersApi->youtube_members_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MembersApi->youtube_members_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **part** | [**List[str]**](str.md)| The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet. | 
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
 **filter_by_member_channel_id** | **str**| Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response. | [optional] 
 **has_access_to_level** | **str**| Filter members in the results set to the ones that have access to a level. | [optional] 
 **max_results** | **int**| The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. | [optional] 
 **mode** | **str**| Parameter that specifies which channel members to return. | [optional] 
 **page_token** | **str**| The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. | [optional] 

### Return type

[**MemberListResponse**](MemberListResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

