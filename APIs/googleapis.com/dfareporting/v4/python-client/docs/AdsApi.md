# openapi_client.AdsApi

All URIs are relative to *https://dfareporting.googleapis.com/dfareporting/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dfareporting_ads_get**](AdsApi.md#dfareporting_ads_get) | **GET** /userprofiles/{profileId}/ads/{id} | 
[**dfareporting_ads_insert**](AdsApi.md#dfareporting_ads_insert) | **POST** /userprofiles/{profileId}/ads | 
[**dfareporting_ads_list**](AdsApi.md#dfareporting_ads_list) | **GET** /userprofiles/{profileId}/ads | 
[**dfareporting_ads_patch**](AdsApi.md#dfareporting_ads_patch) | **PATCH** /userprofiles/{profileId}/ads | 
[**dfareporting_ads_update**](AdsApi.md#dfareporting_ads_update) | **PUT** /userprofiles/{profileId}/ads | 


# **dfareporting_ads_get**
> Ad dfareporting_ads_get(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets one ad by ID.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.ad import Ad
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.AdsApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
    id = 'id_example' # str | Ad ID.
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

    try:
        api_response = api_instance.dfareporting_ads_get(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdsApi->dfareporting_ads_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdsApi->dfareporting_ads_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
 **id** | **str**| Ad ID. | 
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

### Return type

[**Ad**](Ad.md)

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

# **dfareporting_ads_insert**
> Ad dfareporting_ads_insert(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad=ad)



Inserts a new ad.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.ad import Ad
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.AdsApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
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
    ad = openapi_client.Ad() # Ad |  (optional)

    try:
        api_response = api_instance.dfareporting_ads_insert(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad=ad)
        print("The response of AdsApi->dfareporting_ads_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdsApi->dfareporting_ads_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
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
 **ad** | [**Ad**](Ad.md)|  | [optional] 

### Return type

[**Ad**](Ad.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dfareporting_ads_list**
> AdsListResponse dfareporting_ads_list(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, active=active, advertiser_id=advertiser_id, archived=archived, audience_segment_ids=audience_segment_ids, campaign_ids=campaign_ids, compatibility=compatibility, creative_ids=creative_ids, creative_optimization_configuration_ids=creative_optimization_configuration_ids, dynamic_click_tracker=dynamic_click_tracker, ids=ids, landing_page_ids=landing_page_ids, max_results=max_results, overridden_event_tag_id=overridden_event_tag_id, page_token=page_token, placement_ids=placement_ids, remarketing_list_ids=remarketing_list_ids, search_string=search_string, size_ids=size_ids, sort_field=sort_field, sort_order=sort_order, ssl_compliant=ssl_compliant, ssl_required=ssl_required, type=type)



Retrieves a list of ads, possibly filtered. This method supports paging.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.ads_list_response import AdsListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.AdsApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
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
    active = True # bool | Select only active ads. (optional)
    advertiser_id = 'advertiser_id_example' # str | Select only ads with this advertiser ID. (optional)
    archived = True # bool | Select only archived ads. (optional)
    audience_segment_ids = ['audience_segment_ids_example'] # List[str] | Select only ads with these audience segment IDs. (optional)
    campaign_ids = ['campaign_ids_example'] # List[str] | Select only ads with these campaign IDs. (optional)
    compatibility = 'compatibility_example' # str | Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard. (optional)
    creative_ids = ['creative_ids_example'] # List[str] | Select only ads with these creative IDs assigned. (optional)
    creative_optimization_configuration_ids = ['creative_optimization_configuration_ids_example'] # List[str] | Select only ads with these creative optimization configuration IDs. (optional)
    dynamic_click_tracker = True # bool | Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both. (optional)
    ids = ['ids_example'] # List[str] | Select only ads with these IDs. (optional)
    landing_page_ids = ['landing_page_ids_example'] # List[str] | Select only ads with these landing page IDs. (optional)
    max_results = 56 # int | Maximum number of results to return. (optional)
    overridden_event_tag_id = 'overridden_event_tag_id_example' # str | Select only ads with this event tag override ID. (optional)
    page_token = 'page_token_example' # str | Value of the nextPageToken from the previous result page. (optional)
    placement_ids = ['placement_ids_example'] # List[str] | Select only ads with these placement IDs assigned. (optional)
    remarketing_list_ids = ['remarketing_list_ids_example'] # List[str] | Select only ads whose list targeting expression use these remarketing list IDs. (optional)
    search_string = 'search_string_example' # str | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"ad*2015\" will return objects with names like \"ad June 2015\", \"ad April 2015\", or simply \"ad 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"ad\" will match objects with name \"my ad\", \"ad 2015\", or simply \"ad\". (optional)
    size_ids = ['size_ids_example'] # List[str] | Select only ads with these size IDs. (optional)
    sort_field = 'sort_field_example' # str | Field by which to sort the list. (optional)
    sort_order = 'sort_order_example' # str | Order of sorted results. (optional)
    ssl_compliant = True # bool | Select only ads that are SSL-compliant. (optional)
    ssl_required = True # bool | Select only ads that require SSL. (optional)
    type = ['type_example'] # List[str] | Select only ads with these types. (optional)

    try:
        api_response = api_instance.dfareporting_ads_list(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, active=active, advertiser_id=advertiser_id, archived=archived, audience_segment_ids=audience_segment_ids, campaign_ids=campaign_ids, compatibility=compatibility, creative_ids=creative_ids, creative_optimization_configuration_ids=creative_optimization_configuration_ids, dynamic_click_tracker=dynamic_click_tracker, ids=ids, landing_page_ids=landing_page_ids, max_results=max_results, overridden_event_tag_id=overridden_event_tag_id, page_token=page_token, placement_ids=placement_ids, remarketing_list_ids=remarketing_list_ids, search_string=search_string, size_ids=size_ids, sort_field=sort_field, sort_order=sort_order, ssl_compliant=ssl_compliant, ssl_required=ssl_required, type=type)
        print("The response of AdsApi->dfareporting_ads_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdsApi->dfareporting_ads_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
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
 **active** | **bool**| Select only active ads. | [optional] 
 **advertiser_id** | **str**| Select only ads with this advertiser ID. | [optional] 
 **archived** | **bool**| Select only archived ads. | [optional] 
 **audience_segment_ids** | [**List[str]**](str.md)| Select only ads with these audience segment IDs. | [optional] 
 **campaign_ids** | [**List[str]**](str.md)| Select only ads with these campaign IDs. | [optional] 
 **compatibility** | **str**| Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard. | [optional] 
 **creative_ids** | [**List[str]**](str.md)| Select only ads with these creative IDs assigned. | [optional] 
 **creative_optimization_configuration_ids** | [**List[str]**](str.md)| Select only ads with these creative optimization configuration IDs. | [optional] 
 **dynamic_click_tracker** | **bool**| Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both. | [optional] 
 **ids** | [**List[str]**](str.md)| Select only ads with these IDs. | [optional] 
 **landing_page_ids** | [**List[str]**](str.md)| Select only ads with these landing page IDs. | [optional] 
 **max_results** | **int**| Maximum number of results to return. | [optional] 
 **overridden_event_tag_id** | **str**| Select only ads with this event tag override ID. | [optional] 
 **page_token** | **str**| Value of the nextPageToken from the previous result page. | [optional] 
 **placement_ids** | [**List[str]**](str.md)| Select only ads with these placement IDs assigned. | [optional] 
 **remarketing_list_ids** | [**List[str]**](str.md)| Select only ads whose list targeting expression use these remarketing list IDs. | [optional] 
 **search_string** | **str**| Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \&quot;ad*2015\&quot; will return objects with names like \&quot;ad June 2015\&quot;, \&quot;ad April 2015\&quot;, or simply \&quot;ad 2015\&quot;. Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \&quot;ad\&quot; will match objects with name \&quot;my ad\&quot;, \&quot;ad 2015\&quot;, or simply \&quot;ad\&quot;. | [optional] 
 **size_ids** | [**List[str]**](str.md)| Select only ads with these size IDs. | [optional] 
 **sort_field** | **str**| Field by which to sort the list. | [optional] 
 **sort_order** | **str**| Order of sorted results. | [optional] 
 **ssl_compliant** | **bool**| Select only ads that are SSL-compliant. | [optional] 
 **ssl_required** | **bool**| Select only ads that require SSL. | [optional] 
 **type** | [**List[str]**](str.md)| Select only ads with these types. | [optional] 

### Return type

[**AdsListResponse**](AdsListResponse.md)

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

# **dfareporting_ads_patch**
> Ad dfareporting_ads_patch(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad=ad)



Updates an existing event tag. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.ad import Ad
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.AdsApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
    id = 'id_example' # str | Required. RemarketingList ID.
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
    ad = openapi_client.Ad() # Ad |  (optional)

    try:
        api_response = api_instance.dfareporting_ads_patch(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad=ad)
        print("The response of AdsApi->dfareporting_ads_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdsApi->dfareporting_ads_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
 **id** | **str**| Required. RemarketingList ID. | 
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
 **ad** | [**Ad**](Ad.md)|  | [optional] 

### Return type

[**Ad**](Ad.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dfareporting_ads_update**
> Ad dfareporting_ads_update(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad=ad)



Updates an existing ad.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.ad import Ad
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.AdsApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
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
    ad = openapi_client.Ad() # Ad |  (optional)

    try:
        api_response = api_instance.dfareporting_ads_update(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad=ad)
        print("The response of AdsApi->dfareporting_ads_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdsApi->dfareporting_ads_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
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
 **ad** | [**Ad**](Ad.md)|  | [optional] 

### Return type

[**Ad**](Ad.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

