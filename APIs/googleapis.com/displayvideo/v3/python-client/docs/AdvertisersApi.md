# openapi_client.AdvertisersApi

All URIs are relative to *https://displayvideo.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**displayvideo_advertisers_ad_group_ads_get**](AdvertisersApi.md#displayvideo_advertisers_ad_group_ads_get) | **GET** /v3/advertisers/{advertiserId}/adGroupAds/{adGroupAdId} | 
[**displayvideo_advertisers_ad_group_ads_list**](AdvertisersApi.md#displayvideo_advertisers_ad_group_ads_list) | **GET** /v3/advertisers/{advertiserId}/adGroupAds | 
[**displayvideo_advertisers_ad_groups_bulk_list_ad_group_assigned_targeting_options**](AdvertisersApi.md#displayvideo_advertisers_ad_groups_bulk_list_ad_group_assigned_targeting_options) | **GET** /v3/advertisers/{advertiserId}/adGroups:bulkListAdGroupAssignedTargetingOptions | 
[**displayvideo_advertisers_ad_groups_get**](AdvertisersApi.md#displayvideo_advertisers_ad_groups_get) | **GET** /v3/advertisers/{advertiserId}/adGroups/{adGroupId} | 
[**displayvideo_advertisers_ad_groups_list**](AdvertisersApi.md#displayvideo_advertisers_ad_groups_list) | **GET** /v3/advertisers/{advertiserId}/adGroups | 
[**displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_get**](AdvertisersApi.md#displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_get) | **GET** /v3/advertisers/{advertiserId}/adGroups/{adGroupId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId} | 
[**displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_list**](AdvertisersApi.md#displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_list) | **GET** /v3/advertisers/{advertiserId}/adGroups/{adGroupId}/targetingTypes/{targetingType}/assignedTargetingOptions | 
[**displayvideo_advertisers_assets_upload**](AdvertisersApi.md#displayvideo_advertisers_assets_upload) | **POST** /v3/advertisers/{advertiserId}/assets | 
[**displayvideo_advertisers_audit**](AdvertisersApi.md#displayvideo_advertisers_audit) | **GET** /v3/advertisers/{advertiserId}:audit | 
[**displayvideo_advertisers_campaigns_create**](AdvertisersApi.md#displayvideo_advertisers_campaigns_create) | **POST** /v3/advertisers/{advertiserId}/campaigns | 
[**displayvideo_advertisers_campaigns_delete**](AdvertisersApi.md#displayvideo_advertisers_campaigns_delete) | **DELETE** /v3/advertisers/{advertiserId}/campaigns/{campaignId} | 
[**displayvideo_advertisers_campaigns_get**](AdvertisersApi.md#displayvideo_advertisers_campaigns_get) | **GET** /v3/advertisers/{advertiserId}/campaigns/{campaignId} | 
[**displayvideo_advertisers_campaigns_list**](AdvertisersApi.md#displayvideo_advertisers_campaigns_list) | **GET** /v3/advertisers/{advertiserId}/campaigns | 
[**displayvideo_advertisers_campaigns_list_assigned_targeting_options**](AdvertisersApi.md#displayvideo_advertisers_campaigns_list_assigned_targeting_options) | **GET** /v3/advertisers/{advertiserId}/campaigns/{campaignId}:listAssignedTargetingOptions | 
[**displayvideo_advertisers_campaigns_patch**](AdvertisersApi.md#displayvideo_advertisers_campaigns_patch) | **PATCH** /v3/advertisers/{advertiserId}/campaigns/{campaignId} | 
[**displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_get**](AdvertisersApi.md#displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_get) | **GET** /v3/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId} | 
[**displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_list**](AdvertisersApi.md#displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_list) | **GET** /v3/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions | 
[**displayvideo_advertisers_channels_create**](AdvertisersApi.md#displayvideo_advertisers_channels_create) | **POST** /v3/advertisers/{advertiserId}/channels | 
[**displayvideo_advertisers_channels_list**](AdvertisersApi.md#displayvideo_advertisers_channels_list) | **GET** /v3/advertisers/{advertiserId}/channels | 
[**displayvideo_advertisers_channels_patch**](AdvertisersApi.md#displayvideo_advertisers_channels_patch) | **PATCH** /v3/advertisers/{advertiserId}/channels/{channelId} | 
[**displayvideo_advertisers_channels_sites_bulk_edit**](AdvertisersApi.md#displayvideo_advertisers_channels_sites_bulk_edit) | **POST** /v3/advertisers/{advertiserId}/channels/{channelId}/sites:bulkEdit | 
[**displayvideo_advertisers_channels_sites_delete**](AdvertisersApi.md#displayvideo_advertisers_channels_sites_delete) | **DELETE** /v3/advertisers/{advertiserId}/channels/{channelId}/sites/{urlOrAppId} | 
[**displayvideo_advertisers_channels_sites_list**](AdvertisersApi.md#displayvideo_advertisers_channels_sites_list) | **GET** /v3/advertisers/{advertiserId}/channels/{channelId}/sites | 
[**displayvideo_advertisers_channels_sites_replace**](AdvertisersApi.md#displayvideo_advertisers_channels_sites_replace) | **POST** /v3/advertisers/{advertiserId}/channels/{channelId}/sites:replace | 
[**displayvideo_advertisers_create**](AdvertisersApi.md#displayvideo_advertisers_create) | **POST** /v3/advertisers | 
[**displayvideo_advertisers_creatives_create**](AdvertisersApi.md#displayvideo_advertisers_creatives_create) | **POST** /v3/advertisers/{advertiserId}/creatives | 
[**displayvideo_advertisers_creatives_delete**](AdvertisersApi.md#displayvideo_advertisers_creatives_delete) | **DELETE** /v3/advertisers/{advertiserId}/creatives/{creativeId} | 
[**displayvideo_advertisers_creatives_get**](AdvertisersApi.md#displayvideo_advertisers_creatives_get) | **GET** /v3/advertisers/{advertiserId}/creatives/{creativeId} | 
[**displayvideo_advertisers_creatives_list**](AdvertisersApi.md#displayvideo_advertisers_creatives_list) | **GET** /v3/advertisers/{advertiserId}/creatives | 
[**displayvideo_advertisers_creatives_patch**](AdvertisersApi.md#displayvideo_advertisers_creatives_patch) | **PATCH** /v3/advertisers/{advertiserId}/creatives/{creativeId} | 
[**displayvideo_advertisers_delete**](AdvertisersApi.md#displayvideo_advertisers_delete) | **DELETE** /v3/advertisers/{advertiserId} | 
[**displayvideo_advertisers_edit_assigned_targeting_options**](AdvertisersApi.md#displayvideo_advertisers_edit_assigned_targeting_options) | **POST** /v3/advertisers/{advertiserId}:editAssignedTargetingOptions | 
[**displayvideo_advertisers_get**](AdvertisersApi.md#displayvideo_advertisers_get) | **GET** /v3/advertisers/{advertiserId} | 
[**displayvideo_advertisers_insertion_orders_create**](AdvertisersApi.md#displayvideo_advertisers_insertion_orders_create) | **POST** /v3/advertisers/{advertiserId}/insertionOrders | 
[**displayvideo_advertisers_insertion_orders_delete**](AdvertisersApi.md#displayvideo_advertisers_insertion_orders_delete) | **DELETE** /v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId} | 
[**displayvideo_advertisers_insertion_orders_get**](AdvertisersApi.md#displayvideo_advertisers_insertion_orders_get) | **GET** /v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId} | 
[**displayvideo_advertisers_insertion_orders_list**](AdvertisersApi.md#displayvideo_advertisers_insertion_orders_list) | **GET** /v3/advertisers/{advertiserId}/insertionOrders | 
[**displayvideo_advertisers_insertion_orders_list_assigned_targeting_options**](AdvertisersApi.md#displayvideo_advertisers_insertion_orders_list_assigned_targeting_options) | **GET** /v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}:listAssignedTargetingOptions | 
[**displayvideo_advertisers_insertion_orders_patch**](AdvertisersApi.md#displayvideo_advertisers_insertion_orders_patch) | **PATCH** /v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId} | 
[**displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_create**](AdvertisersApi.md#displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_create) | **POST** /v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions | 
[**displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_delete**](AdvertisersApi.md#displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_delete) | **DELETE** /v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId} | 
[**displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_get**](AdvertisersApi.md#displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_get) | **GET** /v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId} | 
[**displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_list**](AdvertisersApi.md#displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_list) | **GET** /v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions | 
[**displayvideo_advertisers_invoices_list**](AdvertisersApi.md#displayvideo_advertisers_invoices_list) | **GET** /v3/advertisers/{advertiserId}/invoices | 
[**displayvideo_advertisers_invoices_lookup_invoice_currency**](AdvertisersApi.md#displayvideo_advertisers_invoices_lookup_invoice_currency) | **GET** /v3/advertisers/{advertiserId}/invoices:lookupInvoiceCurrency | 
[**displayvideo_advertisers_line_items_bulk_edit_assigned_targeting_options**](AdvertisersApi.md#displayvideo_advertisers_line_items_bulk_edit_assigned_targeting_options) | **POST** /v3/advertisers/{advertiserId}/lineItems:bulkEditAssignedTargetingOptions | 
[**displayvideo_advertisers_line_items_bulk_list_assigned_targeting_options**](AdvertisersApi.md#displayvideo_advertisers_line_items_bulk_list_assigned_targeting_options) | **GET** /v3/advertisers/{advertiserId}/lineItems:bulkListAssignedTargetingOptions | 
[**displayvideo_advertisers_line_items_bulk_update**](AdvertisersApi.md#displayvideo_advertisers_line_items_bulk_update) | **POST** /v3/advertisers/{advertiserId}/lineItems:bulkUpdate | 
[**displayvideo_advertisers_line_items_create**](AdvertisersApi.md#displayvideo_advertisers_line_items_create) | **POST** /v3/advertisers/{advertiserId}/lineItems | 
[**displayvideo_advertisers_line_items_delete**](AdvertisersApi.md#displayvideo_advertisers_line_items_delete) | **DELETE** /v3/advertisers/{advertiserId}/lineItems/{lineItemId} | 
[**displayvideo_advertisers_line_items_duplicate**](AdvertisersApi.md#displayvideo_advertisers_line_items_duplicate) | **POST** /v3/advertisers/{advertiserId}/lineItems/{lineItemId}:duplicate | 
[**displayvideo_advertisers_line_items_generate_default**](AdvertisersApi.md#displayvideo_advertisers_line_items_generate_default) | **POST** /v3/advertisers/{advertiserId}/lineItems:generateDefault | 
[**displayvideo_advertisers_line_items_get**](AdvertisersApi.md#displayvideo_advertisers_line_items_get) | **GET** /v3/advertisers/{advertiserId}/lineItems/{lineItemId} | 
[**displayvideo_advertisers_line_items_list**](AdvertisersApi.md#displayvideo_advertisers_line_items_list) | **GET** /v3/advertisers/{advertiserId}/lineItems | 
[**displayvideo_advertisers_line_items_patch**](AdvertisersApi.md#displayvideo_advertisers_line_items_patch) | **PATCH** /v3/advertisers/{advertiserId}/lineItems/{lineItemId} | 
[**displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_create**](AdvertisersApi.md#displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_create) | **POST** /v3/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions | 
[**displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_delete**](AdvertisersApi.md#displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_delete) | **DELETE** /v3/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId} | 
[**displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_get**](AdvertisersApi.md#displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_get) | **GET** /v3/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId} | 
[**displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_list**](AdvertisersApi.md#displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_list) | **GET** /v3/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions | 
[**displayvideo_advertisers_list**](AdvertisersApi.md#displayvideo_advertisers_list) | **GET** /v3/advertisers | 
[**displayvideo_advertisers_list_assigned_targeting_options**](AdvertisersApi.md#displayvideo_advertisers_list_assigned_targeting_options) | **GET** /v3/advertisers/{advertiserId}:listAssignedTargetingOptions | 
[**displayvideo_advertisers_location_lists_assigned_locations_bulk_edit**](AdvertisersApi.md#displayvideo_advertisers_location_lists_assigned_locations_bulk_edit) | **POST** /v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations:bulkEdit | 
[**displayvideo_advertisers_location_lists_assigned_locations_create**](AdvertisersApi.md#displayvideo_advertisers_location_lists_assigned_locations_create) | **POST** /v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations | 
[**displayvideo_advertisers_location_lists_assigned_locations_delete**](AdvertisersApi.md#displayvideo_advertisers_location_lists_assigned_locations_delete) | **DELETE** /v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{assignedLocationId} | 
[**displayvideo_advertisers_location_lists_assigned_locations_list**](AdvertisersApi.md#displayvideo_advertisers_location_lists_assigned_locations_list) | **GET** /v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations | 
[**displayvideo_advertisers_location_lists_create**](AdvertisersApi.md#displayvideo_advertisers_location_lists_create) | **POST** /v3/advertisers/{advertiserId}/locationLists | 
[**displayvideo_advertisers_location_lists_list**](AdvertisersApi.md#displayvideo_advertisers_location_lists_list) | **GET** /v3/advertisers/{advertiserId}/locationLists | 
[**displayvideo_advertisers_location_lists_patch**](AdvertisersApi.md#displayvideo_advertisers_location_lists_patch) | **PATCH** /v3/advertisers/{advertiserId}/locationLists/{locationListId} | 
[**displayvideo_advertisers_negative_keyword_lists_create**](AdvertisersApi.md#displayvideo_advertisers_negative_keyword_lists_create) | **POST** /v3/advertisers/{advertiserId}/negativeKeywordLists | 
[**displayvideo_advertisers_negative_keyword_lists_list**](AdvertisersApi.md#displayvideo_advertisers_negative_keyword_lists_list) | **GET** /v3/advertisers/{advertiserId}/negativeKeywordLists | 
[**displayvideo_advertisers_negative_keyword_lists_negative_keywords_bulk_edit**](AdvertisersApi.md#displayvideo_advertisers_negative_keyword_lists_negative_keywords_bulk_edit) | **POST** /v3/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:bulkEdit | 
[**displayvideo_advertisers_negative_keyword_lists_negative_keywords_delete**](AdvertisersApi.md#displayvideo_advertisers_negative_keyword_lists_negative_keywords_delete) | **DELETE** /v3/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords/{keywordValue} | 
[**displayvideo_advertisers_negative_keyword_lists_negative_keywords_list**](AdvertisersApi.md#displayvideo_advertisers_negative_keyword_lists_negative_keywords_list) | **GET** /v3/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords | 
[**displayvideo_advertisers_negative_keyword_lists_negative_keywords_replace**](AdvertisersApi.md#displayvideo_advertisers_negative_keyword_lists_negative_keywords_replace) | **POST** /v3/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:replace | 
[**displayvideo_advertisers_negative_keyword_lists_patch**](AdvertisersApi.md#displayvideo_advertisers_negative_keyword_lists_patch) | **PATCH** /v3/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId} | 
[**displayvideo_advertisers_patch**](AdvertisersApi.md#displayvideo_advertisers_patch) | **PATCH** /v3/advertisers/{advertiserId} | 
[**displayvideo_advertisers_targeting_types_assigned_targeting_options_create**](AdvertisersApi.md#displayvideo_advertisers_targeting_types_assigned_targeting_options_create) | **POST** /v3/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions | 
[**displayvideo_advertisers_targeting_types_assigned_targeting_options_delete**](AdvertisersApi.md#displayvideo_advertisers_targeting_types_assigned_targeting_options_delete) | **DELETE** /v3/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId} | 
[**displayvideo_advertisers_targeting_types_assigned_targeting_options_get**](AdvertisersApi.md#displayvideo_advertisers_targeting_types_assigned_targeting_options_get) | **GET** /v3/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId} | 
[**displayvideo_advertisers_targeting_types_assigned_targeting_options_list**](AdvertisersApi.md#displayvideo_advertisers_targeting_types_assigned_targeting_options_list) | **GET** /v3/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions | 


# **displayvideo_advertisers_ad_group_ads_get**
> AdGroupAd displayvideo_advertisers_ad_group_ads_get(advertiser_id, ad_group_ad_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets an ad group ad.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.ad_group_ad import AdGroupAd
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser this ad group ad belongs to.
    ad_group_ad_id = 'ad_group_ad_id_example' # str | Required. The ID of the ad group ad to fetch.
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
        api_response = api_instance.displayvideo_advertisers_ad_group_ads_get(advertiser_id, ad_group_ad_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_ad_group_ads_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_ad_group_ads_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser this ad group ad belongs to. | 
 **ad_group_ad_id** | **str**| Required. The ID of the ad group ad to fetch. | 
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

[**AdGroupAd**](AdGroupAd.md)

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

# **displayvideo_advertisers_ad_group_ads_list**
> ListAdGroupAdsResponse displayvideo_advertisers_ad_group_ads_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists ad group ads.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_ad_group_ads_response import ListAdGroupAdsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the ad groups belongs to.
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
    filter = 'filter_example' # str | Optional. Allows filtering by custom ad group ad fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `adGroupId` * `displayName` * `entityStatus` * `adGroupAdId` Examples: * All ad group ads under an ad group: `adGroupId=\"1234\"` * All ad group ads under an ad group with an entityStatus of `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED`: `(entityStatus=\"ENTITY_STATUS_ACTIVE\" OR entityStatus=\"ENTITY_STATUS_PAUSED\") AND adGroupId=\"12345\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `displayName desc`. (optional)
    page_size = 56 # int | Optional. Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroupAds` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_ad_group_ads_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_ad_group_ads_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_ad_group_ads_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the ad groups belongs to. | 
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
 **filter** | **str**| Optional. Allows filtering by custom ad group ad fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by &#x60;AND&#x60; and &#x60;OR&#x60;. A sequence of restrictions implicitly uses &#x60;AND&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;adGroupId&#x60; * &#x60;displayName&#x60; * &#x60;entityStatus&#x60; * &#x60;adGroupAdId&#x60; Examples: * All ad group ads under an ad group: &#x60;adGroupId&#x3D;\&quot;1234\&quot;&#x60; * All ad group ads under an ad group with an entityStatus of &#x60;ENTITY_STATUS_ACTIVE&#x60; or &#x60;ENTITY_STATUS_PAUSED&#x60;: &#x60;(entityStatus&#x3D;\&quot;ENTITY_STATUS_ACTIVE\&quot; OR entityStatus&#x3D;\&quot;ENTITY_STATUS_PAUSED\&quot;) AND adGroupId&#x3D;\&quot;12345\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Optional. Field by which to sort the list. Acceptable values are: * &#x60;displayName&#x60; (default) * &#x60;entityStatus&#x60; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Optional. Requested page size. Must be between &#x60;1&#x60; and &#x60;100&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListAdGroupAds&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListAdGroupAdsResponse**](ListAdGroupAdsResponse.md)

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

# **displayvideo_advertisers_ad_groups_bulk_list_ad_group_assigned_targeting_options**
> BulkListAdGroupAssignedTargetingOptionsResponse displayvideo_advertisers_ad_groups_bulk_list_ad_group_assigned_targeting_options(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad_group_ids=ad_group_ids, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists assigned targeting options for multiple ad groups across targeting types. Inherited assigned targeting options are not included.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_list_ad_group_assigned_targeting_options_response import BulkListAdGroupAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the line items belongs to.
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
    ad_group_ids = ['ad_group_ids_example'] # List[str] | Required. The IDs of the ad groups to list assigned targeting options for. (optional)
    filter = 'filter_example' # str | Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_YOUTUBE_VIDEO` or `TARGETING_TYPE_YOUTUBE_CHANNEL`: `targetingType=\"TARGETING_TYPE_YOUTUBE_VIDEO\" OR targetingType=\"TARGETING_TYPE_YOUTUBE_CHANNEL\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Optional. Field by which to sort the list. Acceptable values are: * `adGroupId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `targetingType desc`. (optional)
    page_size = 56 # int | Optional. Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | Optional. A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_ad_groups_bulk_list_ad_group_assigned_targeting_options(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ad_group_ids=ad_group_ids, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_ad_groups_bulk_list_ad_group_assigned_targeting_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_ad_groups_bulk_list_ad_group_assigned_targeting_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the line items belongs to. | 
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
 **ad_group_ids** | [**List[str]**](str.md)| Required. The IDs of the ad groups to list assigned targeting options for. | [optional] 
 **filter** | **str**| Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator &#x60;OR&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;targetingType&#x60; Examples: * &#x60;AssignedTargetingOption&#x60; resources of targeting type &#x60;TARGETING_TYPE_YOUTUBE_VIDEO&#x60; or &#x60;TARGETING_TYPE_YOUTUBE_CHANNEL&#x60;: &#x60;targetingType&#x3D;\&quot;TARGETING_TYPE_YOUTUBE_VIDEO\&quot; OR targetingType&#x3D;\&quot;TARGETING_TYPE_YOUTUBE_CHANNEL\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Optional. Field by which to sort the list. Acceptable values are: * &#x60;adGroupId&#x60; (default) * &#x60;assignedTargetingOption.targetingType&#x60; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;targetingType desc&#x60;. | [optional] 
 **page_size** | **int**| Optional. Requested page size. The size must be an integer between &#x60;1&#x60; and &#x60;5000&#x60;. If unspecified, the default is &#x60;5000&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| Optional. A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the &#x60;BulkListAdGroupAssignedTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**BulkListAdGroupAssignedTargetingOptionsResponse**](BulkListAdGroupAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_ad_groups_get**
> AdGroup displayvideo_advertisers_ad_groups_get(advertiser_id, ad_group_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets an ad group.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.ad_group import AdGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser this ad group belongs to.
    ad_group_id = 'ad_group_id_example' # str | Required. The ID of the ad group to fetch.
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
        api_response = api_instance.displayvideo_advertisers_ad_groups_get(advertiser_id, ad_group_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_ad_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_ad_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser this ad group belongs to. | 
 **ad_group_id** | **str**| Required. The ID of the ad group to fetch. | 
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

[**AdGroup**](AdGroup.md)

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

# **displayvideo_advertisers_ad_groups_list**
> ListAdGroupsResponse displayvideo_advertisers_ad_groups_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists ad groups.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_ad_groups_response import ListAdGroupsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the ad groups belongs to.
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
    filter = 'filter_example' # str | Optional. Allows filtering by custom ad group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported properties: * `adGroupId` * `displayName` * `entityStatus` * `lineItemId` * `adGroupFormat` Examples: * All ad groups under an line item: `lineItemId=\"1234\"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` `AD_GROUP_FORMAT_IN_STREAM` ad groups under an advertiser: `(entityStatus=\"ENTITY_STATUS_ACTIVE\" OR entityStatus=\"ENTITY_STATUS_PAUSED\") AND adGroupFormat=\"AD_GROUP_FORMAT_IN_STREAM\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `displayName desc`. (optional)
    page_size = 56 # int | Optional. Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroups` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_ad_groups_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_ad_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_ad_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the ad groups belongs to. | 
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
 **filter** | **str**| Optional. Allows filtering by custom ad group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by &#x60;AND&#x60; and &#x60;OR&#x60;. A sequence of restrictions implicitly uses &#x60;AND&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported properties: * &#x60;adGroupId&#x60; * &#x60;displayName&#x60; * &#x60;entityStatus&#x60; * &#x60;lineItemId&#x60; * &#x60;adGroupFormat&#x60; Examples: * All ad groups under an line item: &#x60;lineItemId&#x3D;\&quot;1234\&quot;&#x60; * All &#x60;ENTITY_STATUS_ACTIVE&#x60; or &#x60;ENTITY_STATUS_PAUSED&#x60; &#x60;AD_GROUP_FORMAT_IN_STREAM&#x60; ad groups under an advertiser: &#x60;(entityStatus&#x3D;\&quot;ENTITY_STATUS_ACTIVE\&quot; OR entityStatus&#x3D;\&quot;ENTITY_STATUS_PAUSED\&quot;) AND adGroupFormat&#x3D;\&quot;AD_GROUP_FORMAT_IN_STREAM\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Optional. Field by which to sort the list. Acceptable values are: * &#x60;displayName&#x60; (default) * &#x60;entityStatus&#x60; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Optional. Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListAdGroups&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListAdGroupsResponse**](ListAdGroupsResponse.md)

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

# **displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_get**
> AssignedTargetingOption displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_get(advertiser_id, ad_group_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets a single targeting option assigned to an ad group. Inherited assigned targeting options are not included.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.assigned_targeting_option import AssignedTargetingOption
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the ad group belongs to.
    ad_group_id = 'ad_group_id_example' # str | Required. The ID of the ad group the assigned targeting option belongs to.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO`
    assigned_targeting_option_id = 'assigned_targeting_option_id_example' # str | Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested.
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
        api_response = api_instance.displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_get(advertiser_id, ad_group_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the ad group belongs to. | 
 **ad_group_id** | **str**| Required. The ID of the ad group the assigned targeting option belongs to. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types include: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_APP&#x60; * &#x60;TARGETING_TYPE_APP_CATEGORY&#x60; * &#x60;TARGETING_TYPE_AUDIENCE_GROUP&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_SESSION_POSITION&#x60; * &#x60;TARGETING_TYPE_URL&#x60; * &#x60;TARGETING_TYPE_YOUTUBE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_YOUTUBE_VIDEO&#x60; | 
 **assigned_targeting_option_id** | **str**| Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested. | 
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

[**AssignedTargetingOption**](AssignedTargetingOption.md)

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

# **displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_list**
> ListAdGroupAssignedTargetingOptionsResponse displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_list(advertiser_id, ad_group_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists the targeting options assigned to an ad group. Inherited assigned targeting options are not included.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_ad_group_assigned_targeting_options_response import ListAdGroupAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the ad group belongs to.
    ad_group_id = 'ad_group_id_example' # str | Required. The ID of the ad group to list assigned targeting options for.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO`
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
    filter = 'filter_example' # str | Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId=\"1\" OR assignedTargetingOptionId=\"2\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Optional. Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `assignedTargetingOptionId desc`. (optional)
    page_size = 56 # int | Optional. Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_list(advertiser_id, ad_group_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_ad_groups_targeting_types_assigned_targeting_options_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the ad group belongs to. | 
 **ad_group_id** | **str**| Required. The ID of the ad group to list assigned targeting options for. | 
 **targeting_type** | **str**| Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_APP&#x60; * &#x60;TARGETING_TYPE_APP_CATEGORY&#x60; * &#x60;TARGETING_TYPE_AUDIENCE_GROUP&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_SESSION_POSITION&#x60; * &#x60;TARGETING_TYPE_URL&#x60; * &#x60;TARGETING_TYPE_YOUTUBE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_YOUTUBE_VIDEO&#x60; | 
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
 **filter** | **str**| Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator &#x60;OR&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;assignedTargetingOptionId&#x60; Examples: * &#x60;AssignedTargetingOption&#x60; resources with ID 1 or 2: &#x60;assignedTargetingOptionId&#x3D;\&quot;1\&quot; OR assignedTargetingOptionId&#x3D;\&quot;2\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Optional. Field by which to sort the list. Acceptable values are: * &#x60;assignedTargetingOptionId&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;assignedTargetingOptionId desc&#x60;. | [optional] 
 **page_size** | **int**| Optional. Requested page size. Must be between &#x60;1&#x60; and &#x60;5000&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListAdGroupAssignedTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListAdGroupAssignedTargetingOptionsResponse**](ListAdGroupAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_assets_upload**
> CreateAssetResponse displayvideo_advertisers_assets_upload(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, create_asset_request=create_asset_request)



Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.create_asset_request import CreateAssetRequest
from openapi_client.models.create_asset_response import CreateAssetResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser this asset belongs to.
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
    create_asset_request = openapi_client.CreateAssetRequest() # CreateAssetRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_assets_upload(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, create_asset_request=create_asset_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_assets_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_assets_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser this asset belongs to. | 
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
 **create_asset_request** | [**CreateAssetRequest**](CreateAssetRequest.md)|  | [optional] 

### Return type

[**CreateAssetResponse**](CreateAssetResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **displayvideo_advertisers_audit**
> AuditAdvertiserResponse displayvideo_advertisers_audit(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, read_mask=read_mask)



Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.audit_advertiser_response import AuditAdvertiserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser to audit.
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
    read_mask = 'read_mask_example' # str | Optional. The specific fields to return. If no mask is specified, all fields in the response proto will be filled. Valid values are: * usedLineItemsCount * usedInsertionOrdersCount * usedCampaignsCount * channelsCount * negativelyTargetedChannelsCount * negativeKeywordListsCount * adGroupCriteriaCount * campaignCriteriaCount (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_audit(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, read_mask=read_mask)
        print("The response of AdvertisersApi->displayvideo_advertisers_audit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_audit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser to audit. | 
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
 **read_mask** | **str**| Optional. The specific fields to return. If no mask is specified, all fields in the response proto will be filled. Valid values are: * usedLineItemsCount * usedInsertionOrdersCount * usedCampaignsCount * channelsCount * negativelyTargetedChannelsCount * negativeKeywordListsCount * adGroupCriteriaCount * campaignCriteriaCount | [optional] 

### Return type

[**AuditAdvertiserResponse**](AuditAdvertiserResponse.md)

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

# **displayvideo_advertisers_campaigns_create**
> Campaign displayvideo_advertisers_campaigns_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, campaign=campaign)



Creates a new campaign. Returns the newly created campaign if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.campaign import Campaign
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Output only. The unique ID of the advertiser the campaign belongs to.
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
    campaign = openapi_client.Campaign() # Campaign |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_campaigns_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, campaign=campaign)
        print("The response of AdvertisersApi->displayvideo_advertisers_campaigns_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_campaigns_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Output only. The unique ID of the advertiser the campaign belongs to. | 
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
 **campaign** | [**Campaign**](Campaign.md)|  | [optional] 

### Return type

[**Campaign**](Campaign.md)

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

# **displayvideo_advertisers_campaigns_delete**
> object displayvideo_advertisers_campaigns_delete(advertiser_id, campaign_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser this campaign belongs to.
    campaign_id = 'campaign_id_example' # str | The ID of the campaign we need to delete.
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
        api_response = api_instance.displayvideo_advertisers_campaigns_delete(advertiser_id, campaign_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_campaigns_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_campaigns_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser this campaign belongs to. | 
 **campaign_id** | **str**| The ID of the campaign we need to delete. | 
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

**object**

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

# **displayvideo_advertisers_campaigns_get**
> Campaign displayvideo_advertisers_campaigns_get(advertiser_id, campaign_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets a campaign.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.campaign import Campaign
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser this campaign belongs to.
    campaign_id = 'campaign_id_example' # str | Required. The ID of the campaign to fetch.
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
        api_response = api_instance.displayvideo_advertisers_campaigns_get(advertiser_id, campaign_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_campaigns_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_campaigns_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser this campaign belongs to. | 
 **campaign_id** | **str**| Required. The ID of the campaign to fetch. | 
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

[**Campaign**](Campaign.md)

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

# **displayvideo_advertisers_campaigns_list**
> ListCampaignsResponse displayvideo_advertisers_campaigns_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_campaigns_response import ListCampaignsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser to list campaigns for.
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
    filter = 'filter_example' # str | Allows filtering by campaign fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` campaigns under an advertiser: `(entityStatus=\"ENTITY_STATUS_ACTIVE\" OR entityStatus=\"ENTITY_STATUS_PAUSED\")` * All campaigns with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<=\"2020-11-04T18:54:47Z\"` * All campaigns with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>=\"2020-11-04T18:54:47Z\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `displayName desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaigns` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_campaigns_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_campaigns_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_campaigns_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser to list campaigns for. | 
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
 **filter** | **str**| Allows filtering by campaign fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by &#x60;AND&#x60; or &#x60;OR&#x60; logical operators. A sequence of restrictions implicitly uses &#x60;AND&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * The &#x60;updateTime&#x60; field must use the &#x60;GREATER THAN OR EQUAL TO (&gt;&#x3D;)&#x60; or &#x60;LESS THAN OR EQUAL TO (&lt;&#x3D;)&#x60; operators. * All other fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;campaignId&#x60; * &#x60;displayName&#x60; * &#x60;entityStatus&#x60; * &#x60;updateTime&#x60; (input in ISO 8601 format, or &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;) Examples: * All &#x60;ENTITY_STATUS_ACTIVE&#x60; or &#x60;ENTITY_STATUS_PAUSED&#x60; campaigns under an advertiser: &#x60;(entityStatus&#x3D;\&quot;ENTITY_STATUS_ACTIVE\&quot; OR entityStatus&#x3D;\&quot;ENTITY_STATUS_PAUSED\&quot;)&#x60; * All campaigns with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): &#x60;updateTime&lt;&#x3D;\&quot;2020-11-04T18:54:47Z\&quot;&#x60; * All campaigns with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): &#x60;updateTime&gt;&#x3D;\&quot;2020-11-04T18:54:47Z\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;displayName&#x60; (default) * &#x60;entityStatus&#x60; * &#x60;updateTime&#x60; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListCampaigns&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListCampaignsResponse**](ListCampaignsResponse.md)

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

# **displayvideo_advertisers_campaigns_list_assigned_targeting_options**
> BulkListCampaignAssignedTargetingOptionsResponse displayvideo_advertisers_campaigns_list_assigned_targeting_options(advertiser_id, campaign_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists assigned targeting options of a campaign across targeting types.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_list_campaign_assigned_targeting_options_response import BulkListCampaignAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the campaign belongs to.
    campaign_id = 'campaign_id_example' # str | Required. The ID of the campaign to list assigned targeting options for.
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
    filter = 'filter_example' # str | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_LANGUAGE` or `TARGETING_TYPE_GENDER`: `targetingType=\"TARGETING_TYPE_LANGUAGE\" OR targetingType=\"TARGETING_TYPE_GENDER\"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance=\"NOT_INHERITED\" OR inheritance=\"INHERITED_FROM_PARTNER\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `targetingType desc`. (optional)
    page_size = 56 # int | Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_campaigns_list_assigned_targeting_options(advertiser_id, campaign_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_campaigns_list_assigned_targeting_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_campaigns_list_assigned_targeting_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the campaign belongs to. | 
 **campaign_id** | **str**| Required. The ID of the campaign to list assigned targeting options for. | 
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
 **filter** | **str**| Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the &#x60;OR&#x60; logical operator. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;targetingType&#x60; * &#x60;inheritance&#x60; Examples: * &#x60;AssignedTargetingOption&#x60; resources of targeting type &#x60;TARGETING_TYPE_LANGUAGE&#x60; or &#x60;TARGETING_TYPE_GENDER&#x60;: &#x60;targetingType&#x3D;\&quot;TARGETING_TYPE_LANGUAGE\&quot; OR targetingType&#x3D;\&quot;TARGETING_TYPE_GENDER\&quot;&#x60; * &#x60;AssignedTargetingOption&#x60; resources with inheritance status of &#x60;NOT_INHERITED&#x60; or &#x60;INHERITED_FROM_PARTNER&#x60;: &#x60;inheritance&#x3D;\&quot;NOT_INHERITED\&quot; OR inheritance&#x3D;\&quot;INHERITED_FROM_PARTNER\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;targetingType&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;targetingType desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. The size must be an integer between &#x60;1&#x60; and &#x60;5000&#x60;. If unspecified, the default is &#x60;5000&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to &#x60;BulkListCampaignAssignedTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**BulkListCampaignAssignedTargetingOptionsResponse**](BulkListCampaignAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_campaigns_patch**
> Campaign displayvideo_advertisers_campaigns_patch(advertiser_id, campaign_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, campaign=campaign)



Updates an existing campaign. Returns the updated campaign if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.campaign import Campaign
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Output only. The unique ID of the advertiser the campaign belongs to.
    campaign_id = 'campaign_id_example' # str | Output only. The unique ID of the campaign. Assigned by the system.
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
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. (optional)
    campaign = openapi_client.Campaign() # Campaign |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_campaigns_patch(advertiser_id, campaign_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, campaign=campaign)
        print("The response of AdvertisersApi->displayvideo_advertisers_campaigns_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_campaigns_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Output only. The unique ID of the advertiser the campaign belongs to. | 
 **campaign_id** | **str**| Output only. The unique ID of the campaign. Assigned by the system. | 
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
 **update_mask** | **str**| Required. The mask to control which fields to update. | [optional] 
 **campaign** | [**Campaign**](Campaign.md)|  | [optional] 

### Return type

[**Campaign**](Campaign.md)

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

# **displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_get**
> AssignedTargetingOption displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_get(advertiser_id, campaign_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets a single targeting option assigned to a campaign.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.assigned_targeting_option import AssignedTargetingOption
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the campaign belongs to.
    campaign_id = 'campaign_id_example' # str | Required. The ID of the campaign the assigned targeting option belongs to.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`
    assigned_targeting_option_id = 'assigned_targeting_option_id_example' # str | Required. An identifier unique to the targeting type in this campaign that identifies the assigned targeting option being requested.
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
        api_response = api_instance.displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_get(advertiser_id, campaign_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the campaign belongs to. | 
 **campaign_id** | **str**| Required. The ID of the campaign the assigned targeting option belongs to. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60; * &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_GEO_REGION&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE_GROUP&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_THIRD_PARTY_VERIFIER&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; | 
 **assigned_targeting_option_id** | **str**| Required. An identifier unique to the targeting type in this campaign that identifies the assigned targeting option being requested. | 
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

[**AssignedTargetingOption**](AssignedTargetingOption.md)

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

# **displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_list**
> ListCampaignAssignedTargetingOptionsResponse displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_list(advertiser_id, campaign_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists the targeting options assigned to a campaign for a specified targeting type.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_campaign_assigned_targeting_options_response import ListCampaignAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the campaign belongs to.
    campaign_id = 'campaign_id_example' # str | Required. The ID of the campaign to list assigned targeting options for.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`
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
    filter = 'filter_example' # str | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2 `assignedTargetingOptionId=\"1\" OR assignedTargetingOptionId=\"2\"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER` `inheritance=\"NOT_INHERITED\" OR inheritance=\"INHERITED_FROM_PARTNER\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `assignedTargetingOptionId desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_list(advertiser_id, campaign_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the campaign belongs to. | 
 **campaign_id** | **str**| Required. The ID of the campaign to list assigned targeting options for. | 
 **targeting_type** | **str**| Required. Identifies the type of assigned targeting options to list. Supported targeting types: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60; * &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_GEO_REGION&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE_GROUP&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_THIRD_PARTY_VERIFIER&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; | 
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
 **filter** | **str**| Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the &#x60;OR&#x60; logical operator. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;assignedTargetingOptionId&#x60; * &#x60;inheritance&#x60; Examples: * &#x60;AssignedTargetingOption&#x60; resources with ID 1 or 2 &#x60;assignedTargetingOptionId&#x3D;\&quot;1\&quot; OR assignedTargetingOptionId&#x3D;\&quot;2\&quot;&#x60; * &#x60;AssignedTargetingOption&#x60; resources with inheritance status of &#x60;NOT_INHERITED&#x60; or &#x60;INHERITED_FROM_PARTNER&#x60; &#x60;inheritance&#x3D;\&quot;NOT_INHERITED\&quot; OR inheritance&#x3D;\&quot;INHERITED_FROM_PARTNER\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;assignedTargetingOptionId&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;assignedTargetingOptionId desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;5000&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListCampaignAssignedTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListCampaignAssignedTargetingOptionsResponse**](ListCampaignAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_channels_create**
> Channel displayvideo_advertisers_channels_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, partner_id=partner_id, channel=channel)



Creates a new channel. Returns the newly created channel if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.channel import Channel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the created channel.
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
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the created channel. (optional)
    channel = openapi_client.Channel() # Channel |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_channels_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, partner_id=partner_id, channel=channel)
        print("The response of AdvertisersApi->displayvideo_advertisers_channels_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_channels_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser that owns the created channel. | 
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
 **partner_id** | **str**| The ID of the partner that owns the created channel. | [optional] 
 **channel** | [**Channel**](Channel.md)|  | [optional] 

### Return type

[**Channel**](Channel.md)

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

# **displayvideo_advertisers_channels_list**
> ListChannelsResponse displayvideo_advertisers_channels_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)



Lists channels for a partner or advertiser.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_channels_response import ListChannelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the channels.
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
    filter = 'filter_example' # str | Allows filtering by channel fields. Supported syntax: * Filter expressions for channel can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All channels for which the display name contains \"google\": `displayName : \"google\"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix \" desc\" should be added to the field name. Example: `displayName desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the channels. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_channels_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)
        print("The response of AdvertisersApi->displayvideo_advertisers_channels_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_channels_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser that owns the channels. | 
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
 **filter** | **str**| Allows filtering by channel fields. Supported syntax: * Filter expressions for channel can only contain at most one restriction. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;HAS (:)&#x60; operator. Supported fields: * &#x60;displayName&#x60; Examples: * All channels for which the display name contains \&quot;google\&quot;: &#x60;displayName : \&quot;google\&quot;&#x60;. The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;displayName&#x60; (default) * &#x60;channelId&#x60; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot; desc\&quot; should be added to the field name. Example: &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListChannels&#x60; method. If not specified, the first page of results will be returned. | [optional] 
 **partner_id** | **str**| The ID of the partner that owns the channels. | [optional] 

### Return type

[**ListChannelsResponse**](ListChannelsResponse.md)

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

# **displayvideo_advertisers_channels_patch**
> Channel displayvideo_advertisers_channels_patch(advertiser_id, channel_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, partner_id=partner_id, update_mask=update_mask, channel=channel)



Updates a channel. Returns the updated channel if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.channel import Channel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the created channel.
    channel_id = 'channel_id_example' # str | Output only. The unique ID of the channel. Assigned by the system.
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
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the created channel. (optional)
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. (optional)
    channel = openapi_client.Channel() # Channel |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_channels_patch(advertiser_id, channel_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, partner_id=partner_id, update_mask=update_mask, channel=channel)
        print("The response of AdvertisersApi->displayvideo_advertisers_channels_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_channels_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser that owns the created channel. | 
 **channel_id** | **str**| Output only. The unique ID of the channel. Assigned by the system. | 
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
 **partner_id** | **str**| The ID of the partner that owns the created channel. | [optional] 
 **update_mask** | **str**| Required. The mask to control which fields to update. | [optional] 
 **channel** | [**Channel**](Channel.md)|  | [optional] 

### Return type

[**Channel**](Channel.md)

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

# **displayvideo_advertisers_channels_sites_bulk_edit**
> BulkEditSitesResponse displayvideo_advertisers_channels_sites_bulk_edit(advertiser_id, channel_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_edit_sites_request=bulk_edit_sites_request)



Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_edit_sites_request import BulkEditSitesRequest
from openapi_client.models.bulk_edit_sites_response import BulkEditSitesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent channel.
    channel_id = 'channel_id_example' # str | Required. The ID of the parent channel to which the sites belong.
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
    bulk_edit_sites_request = openapi_client.BulkEditSitesRequest() # BulkEditSitesRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_channels_sites_bulk_edit(advertiser_id, channel_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_edit_sites_request=bulk_edit_sites_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_channels_sites_bulk_edit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_channels_sites_bulk_edit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent channel. | 
 **channel_id** | **str**| Required. The ID of the parent channel to which the sites belong. | 
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
 **bulk_edit_sites_request** | [**BulkEditSitesRequest**](BulkEditSitesRequest.md)|  | [optional] 

### Return type

[**BulkEditSitesResponse**](BulkEditSitesResponse.md)

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

# **displayvideo_advertisers_channels_sites_delete**
> object displayvideo_advertisers_channels_sites_delete(advertiser_id, channel_id, url_or_app_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, partner_id=partner_id)



Deletes a site from a channel.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent channel.
    channel_id = 'channel_id_example' # str | Required. The ID of the parent channel to which the site belongs.
    url_or_app_id = 'url_or_app_id_example' # str | Required. The URL or app ID of the site to delete.
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
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the parent channel. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_channels_sites_delete(advertiser_id, channel_id, url_or_app_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, partner_id=partner_id)
        print("The response of AdvertisersApi->displayvideo_advertisers_channels_sites_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_channels_sites_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent channel. | 
 **channel_id** | **str**| Required. The ID of the parent channel to which the site belongs. | 
 **url_or_app_id** | **str**| Required. The URL or app ID of the site to delete. | 
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
 **partner_id** | **str**| The ID of the partner that owns the parent channel. | [optional] 

### Return type

**object**

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

# **displayvideo_advertisers_channels_sites_list**
> ListSitesResponse displayvideo_advertisers_channels_sites_list(advertiser_id, channel_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)



Lists sites in a channel.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_sites_response import ListSitesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent channel.
    channel_id = 'channel_id_example' # str | Required. The ID of the parent channel to which the requested sites belong.
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
    filter = 'filter_example' # str | Allows filtering by site fields. Supported syntax: * Filter expressions for site retrieval can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `urlOrAppId` Examples: * All sites for which the URL or app ID contains \"google\": `urlOrAppId : \"google\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \" desc\" should be added to the field name. Example: `urlOrAppId desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the parent channel. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_channels_sites_list(advertiser_id, channel_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)
        print("The response of AdvertisersApi->displayvideo_advertisers_channels_sites_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_channels_sites_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent channel. | 
 **channel_id** | **str**| Required. The ID of the parent channel to which the requested sites belong. | 
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
 **filter** | **str**| Allows filtering by site fields. Supported syntax: * Filter expressions for site retrieval can only contain at most one restriction. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;HAS (:)&#x60; operator. Supported fields: * &#x60;urlOrAppId&#x60; Examples: * All sites for which the URL or app ID contains \&quot;google\&quot;: &#x60;urlOrAppId : \&quot;google\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;urlOrAppId&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot; desc\&quot; should be added to the field name. Example: &#x60;urlOrAppId desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;10000&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListSites&#x60; method. If not specified, the first page of results will be returned. | [optional] 
 **partner_id** | **str**| The ID of the partner that owns the parent channel. | [optional] 

### Return type

[**ListSitesResponse**](ListSitesResponse.md)

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

# **displayvideo_advertisers_channels_sites_replace**
> ReplaceSitesResponse displayvideo_advertisers_channels_sites_replace(advertiser_id, channel_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, replace_sites_request=replace_sites_request)



Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.replace_sites_request import ReplaceSitesRequest
from openapi_client.models.replace_sites_response import ReplaceSitesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent channel.
    channel_id = 'channel_id_example' # str | Required. The ID of the parent channel whose sites will be replaced.
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
    replace_sites_request = openapi_client.ReplaceSitesRequest() # ReplaceSitesRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_channels_sites_replace(advertiser_id, channel_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, replace_sites_request=replace_sites_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_channels_sites_replace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_channels_sites_replace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent channel. | 
 **channel_id** | **str**| Required. The ID of the parent channel whose sites will be replaced. | 
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
 **replace_sites_request** | [**ReplaceSitesRequest**](ReplaceSitesRequest.md)|  | [optional] 

### Return type

[**ReplaceSitesResponse**](ReplaceSitesResponse.md)

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

# **displayvideo_advertisers_create**
> Advertiser displayvideo_advertisers_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser=advertiser)



Creates a new advertiser. Returns the newly created advertiser if successful. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.advertiser import Advertiser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
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
    advertiser = openapi_client.Advertiser() # Advertiser |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser=advertiser)
        print("The response of AdvertisersApi->displayvideo_advertisers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_create: %s\n" % e)
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
 **advertiser** | [**Advertiser**](Advertiser.md)|  | [optional] 

### Return type

[**Advertiser**](Advertiser.md)

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

# **displayvideo_advertisers_creatives_create**
> Creative displayvideo_advertisers_creatives_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, creative=creative)



Creates a new creative. Returns the newly created creative if successful. A [\"Standard\" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.creative import Creative
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Output only. The unique ID of the advertiser the creative belongs to.
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
    creative = openapi_client.Creative() # Creative |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_creatives_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, creative=creative)
        print("The response of AdvertisersApi->displayvideo_advertisers_creatives_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_creatives_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Output only. The unique ID of the advertiser the creative belongs to. | 
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
 **creative** | [**Creative**](Creative.md)|  | [optional] 

### Return type

[**Creative**](Creative.md)

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

# **displayvideo_advertisers_creatives_delete**
> object displayvideo_advertisers_creatives_delete(advertiser_id, creative_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted. A [\"Standard\" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser this creative belongs to.
    creative_id = 'creative_id_example' # str | The ID of the creative to be deleted.
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
        api_response = api_instance.displayvideo_advertisers_creatives_delete(advertiser_id, creative_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_creatives_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_creatives_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser this creative belongs to. | 
 **creative_id** | **str**| The ID of the creative to be deleted. | 
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

**object**

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

# **displayvideo_advertisers_creatives_get**
> Creative displayvideo_advertisers_creatives_get(advertiser_id, creative_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets a creative.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.creative import Creative
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser this creative belongs to.
    creative_id = 'creative_id_example' # str | Required. The ID of the creative to fetch.
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
        api_response = api_instance.displayvideo_advertisers_creatives_get(advertiser_id, creative_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_creatives_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_creatives_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser this creative belongs to. | 
 **creative_id** | **str**| Required. The ID of the creative to fetch. | 
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

[**Creative**](Creative.md)

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

# **displayvideo_advertisers_creatives_list**
> ListCreativesResponse displayvideo_advertisers_creatives_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_creatives_response import ListCreativesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser to list creatives for.
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
    filter = 'filter_example' # str | Allows filtering by creative fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `lineItemIds` field must use the `HAS (:)` operator. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. * For `entityStatus`, `minDuration`, `maxDuration`, `updateTime`, and `dynamic` fields, there may be at most one restriction. Supported Fields: * `approvalStatus` * `creativeId` * `creativeType` * `dimensions` (input in the form of `{width}x{height}`) * `dynamic` * `entityStatus` * `exchangeReviewStatus` (input in the form of `{exchange}-{reviewStatus}`) * `lineItemIds` * `maxDuration` (input in the form of `{duration}s`. Only seconds are supported) * `minDuration` (input in the form of `{duration}s`. Only seconds are supported) * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Notes: * For `updateTime`, a creative resource's field value reflects the last time that a creative has been updated, which includes updates made by the system (e.g. creative review updates). Examples: * All native creatives: `creativeType=\"CREATIVE_TYPE_NATIVE\"` * All active creatives with 300x400 or 50x100 dimensions: `entityStatus=\"ENTITY_STATUS_ACTIVE\" AND (dimensions=\"300x400\" OR dimensions=\"50x100\")` * All dynamic creatives that are approved by AdX or AppNexus, with a minimum duration of 5 seconds and 200ms: `dynamic=\"true\" AND minDuration=\"5.2s\" AND (exchangeReviewStatus=\"EXCHANGE_GOOGLE_AD_MANAGER-REVIEW_STATUS_APPROVED\" OR exchangeReviewStatus=\"EXCHANGE_APPNEXUS-REVIEW_STATUS_APPROVED\")` * All video creatives that are associated with line item ID 1 or 2: `creativeType=\"CREATIVE_TYPE_VIDEO\" AND (lineItemIds:1 OR lineItemIds:2)` * Find creatives by multiple creative IDs: `creativeId=1 OR creativeId=2` * All creatives with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>=\"2020-11-04T18:54:47Z\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `creativeId` (default) * `createTime` * `mediaDuration` * `dimensions` (sorts by width first, then by height) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `createTime desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCreatives` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_creatives_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_creatives_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_creatives_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser to list creatives for. | 
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
 **filter** | **str**| Allows filtering by creative fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by &#x60;AND&#x60; or &#x60;OR&#x60; logical operators. A sequence of restrictions implicitly uses &#x60;AND&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * The &#x60;lineItemIds&#x60; field must use the &#x60;HAS (:)&#x60; operator. * The &#x60;updateTime&#x60; field must use the &#x60;GREATER THAN OR EQUAL TO (&gt;&#x3D;)&#x60; or &#x60;LESS THAN OR EQUAL TO (&lt;&#x3D;)&#x60; operators. * All other fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. * For &#x60;entityStatus&#x60;, &#x60;minDuration&#x60;, &#x60;maxDuration&#x60;, &#x60;updateTime&#x60;, and &#x60;dynamic&#x60; fields, there may be at most one restriction. Supported Fields: * &#x60;approvalStatus&#x60; * &#x60;creativeId&#x60; * &#x60;creativeType&#x60; * &#x60;dimensions&#x60; (input in the form of &#x60;{width}x{height}&#x60;) * &#x60;dynamic&#x60; * &#x60;entityStatus&#x60; * &#x60;exchangeReviewStatus&#x60; (input in the form of &#x60;{exchange}-{reviewStatus}&#x60;) * &#x60;lineItemIds&#x60; * &#x60;maxDuration&#x60; (input in the form of &#x60;{duration}s&#x60;. Only seconds are supported) * &#x60;minDuration&#x60; (input in the form of &#x60;{duration}s&#x60;. Only seconds are supported) * &#x60;updateTime&#x60; (input in ISO 8601 format, or &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;) Notes: * For &#x60;updateTime&#x60;, a creative resource&#39;s field value reflects the last time that a creative has been updated, which includes updates made by the system (e.g. creative review updates). Examples: * All native creatives: &#x60;creativeType&#x3D;\&quot;CREATIVE_TYPE_NATIVE\&quot;&#x60; * All active creatives with 300x400 or 50x100 dimensions: &#x60;entityStatus&#x3D;\&quot;ENTITY_STATUS_ACTIVE\&quot; AND (dimensions&#x3D;\&quot;300x400\&quot; OR dimensions&#x3D;\&quot;50x100\&quot;)&#x60; * All dynamic creatives that are approved by AdX or AppNexus, with a minimum duration of 5 seconds and 200ms: &#x60;dynamic&#x3D;\&quot;true\&quot; AND minDuration&#x3D;\&quot;5.2s\&quot; AND (exchangeReviewStatus&#x3D;\&quot;EXCHANGE_GOOGLE_AD_MANAGER-REVIEW_STATUS_APPROVED\&quot; OR exchangeReviewStatus&#x3D;\&quot;EXCHANGE_APPNEXUS-REVIEW_STATUS_APPROVED\&quot;)&#x60; * All video creatives that are associated with line item ID 1 or 2: &#x60;creativeType&#x3D;\&quot;CREATIVE_TYPE_VIDEO\&quot; AND (lineItemIds:1 OR lineItemIds:2)&#x60; * Find creatives by multiple creative IDs: &#x60;creativeId&#x3D;1 OR creativeId&#x3D;2&#x60; * All creatives with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): &#x60;updateTime&gt;&#x3D;\&quot;2020-11-04T18:54:47Z\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;creativeId&#x60; (default) * &#x60;createTime&#x60; * &#x60;mediaDuration&#x60; * &#x60;dimensions&#x60; (sorts by width first, then by height) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;createTime desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListCreatives&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListCreativesResponse**](ListCreativesResponse.md)

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

# **displayvideo_advertisers_creatives_patch**
> Creative displayvideo_advertisers_creatives_patch(advertiser_id, creative_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, creative=creative)



Updates an existing creative. Returns the updated creative if successful. A [\"Standard\" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.creative import Creative
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Output only. The unique ID of the advertiser the creative belongs to.
    creative_id = 'creative_id_example' # str | Output only. The unique ID of the creative. Assigned by the system.
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
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. (optional)
    creative = openapi_client.Creative() # Creative |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_creatives_patch(advertiser_id, creative_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, creative=creative)
        print("The response of AdvertisersApi->displayvideo_advertisers_creatives_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_creatives_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Output only. The unique ID of the advertiser the creative belongs to. | 
 **creative_id** | **str**| Output only. The unique ID of the creative. Assigned by the system. | 
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
 **update_mask** | **str**| Required. The mask to control which fields to update. | [optional] 
 **creative** | [**Creative**](Creative.md)|  | [optional] 

### Return type

[**Creative**](Creative.md)

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

# **displayvideo_advertisers_delete**
> object displayvideo_advertisers_delete(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser we need to delete.
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
        api_response = api_instance.displayvideo_advertisers_delete(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser we need to delete. | 
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

**object**

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

# **displayvideo_advertisers_edit_assigned_targeting_options**
> BulkEditAdvertiserAssignedTargetingOptionsResponse displayvideo_advertisers_edit_assigned_targeting_options(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_edit_advertiser_assigned_targeting_options_request=bulk_edit_advertiser_assigned_targeting_options_request)



Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_edit_advertiser_assigned_targeting_options_request import BulkEditAdvertiserAssignedTargetingOptionsRequest
from openapi_client.models.bulk_edit_advertiser_assigned_targeting_options_response import BulkEditAdvertiserAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser.
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
    bulk_edit_advertiser_assigned_targeting_options_request = openapi_client.BulkEditAdvertiserAssignedTargetingOptionsRequest() # BulkEditAdvertiserAssignedTargetingOptionsRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_edit_assigned_targeting_options(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_edit_advertiser_assigned_targeting_options_request=bulk_edit_advertiser_assigned_targeting_options_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_edit_assigned_targeting_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_edit_assigned_targeting_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser. | 
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
 **bulk_edit_advertiser_assigned_targeting_options_request** | [**BulkEditAdvertiserAssignedTargetingOptionsRequest**](BulkEditAdvertiserAssignedTargetingOptionsRequest.md)|  | [optional] 

### Return type

[**BulkEditAdvertiserAssignedTargetingOptionsResponse**](BulkEditAdvertiserAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_get**
> Advertiser displayvideo_advertisers_get(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets an advertiser.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.advertiser import Advertiser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser to fetch.
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
        api_response = api_instance.displayvideo_advertisers_get(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser to fetch. | 
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

[**Advertiser**](Advertiser.md)

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

# **displayvideo_advertisers_insertion_orders_create**
> InsertionOrder displayvideo_advertisers_insertion_orders_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, insertion_order=insertion_order)



Creates a new insertion order. Returns the newly created insertion order if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.insertion_order import InsertionOrder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Output only. The unique ID of the advertiser the insertion order belongs to.
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
    insertion_order = openapi_client.InsertionOrder() # InsertionOrder |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_insertion_orders_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, insertion_order=insertion_order)
        print("The response of AdvertisersApi->displayvideo_advertisers_insertion_orders_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_insertion_orders_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Output only. The unique ID of the advertiser the insertion order belongs to. | 
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
 **insertion_order** | [**InsertionOrder**](InsertionOrder.md)|  | [optional] 

### Return type

[**InsertionOrder**](InsertionOrder.md)

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

# **displayvideo_advertisers_insertion_orders_delete**
> object displayvideo_advertisers_insertion_orders_delete(advertiser_id, insertion_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser this insertion order belongs to.
    insertion_order_id = 'insertion_order_id_example' # str | The ID of the insertion order to delete.
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
        api_response = api_instance.displayvideo_advertisers_insertion_orders_delete(advertiser_id, insertion_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_insertion_orders_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_insertion_orders_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser this insertion order belongs to. | 
 **insertion_order_id** | **str**| The ID of the insertion order to delete. | 
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

**object**

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

# **displayvideo_advertisers_insertion_orders_get**
> InsertionOrder displayvideo_advertisers_insertion_orders_get(advertiser_id, insertion_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.insertion_order import InsertionOrder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser this insertion order belongs to.
    insertion_order_id = 'insertion_order_id_example' # str | Required. The ID of the insertion order to fetch.
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
        api_response = api_instance.displayvideo_advertisers_insertion_orders_get(advertiser_id, insertion_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_insertion_orders_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_insertion_orders_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser this insertion order belongs to. | 
 **insertion_order_id** | **str**| Required. The ID of the insertion order to fetch. | 
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

[**InsertionOrder**](InsertionOrder.md)

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

# **displayvideo_advertisers_insertion_orders_list**
> ListInsertionOrdersResponse displayvideo_advertisers_insertion_orders_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_insertion_orders_response import ListInsertionOrdersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser to list insertion orders for.
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
    filter = 'filter_example' # str | Allows filtering by insertion order fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All insertion orders under a campaign: `campaignId=\"1234\"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` insertion orders under an advertiser: `(entityStatus=\"ENTITY_STATUS_ACTIVE\" OR entityStatus=\"ENTITY_STATUS_PAUSED\")` * All insertion orders with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<=\"2020-11-04T18:54:47Z\"` * All insertion orders with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>=\"2020-11-04T18:54:47Z\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * \"displayName\" (default) * \"entityStatus\" * \"updateTime\" The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `displayName desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrders` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_insertion_orders_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_insertion_orders_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_insertion_orders_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser to list insertion orders for. | 
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
 **filter** | **str**| Allows filtering by insertion order fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by &#x60;AND&#x60; or &#x60;OR&#x60; logical operators. A sequence of restrictions implicitly uses &#x60;AND&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * The &#x60;updateTime&#x60; field must use the &#x60;GREATER THAN OR EQUAL TO (&gt;&#x3D;)&#x60; or &#x60;LESS THAN OR EQUAL TO (&lt;&#x3D;)&#x60; operators. * All other fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;campaignId&#x60; * &#x60;displayName&#x60; * &#x60;entityStatus&#x60; * &#x60;updateTime&#x60; (input in ISO 8601 format, or &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;) Examples: * All insertion orders under a campaign: &#x60;campaignId&#x3D;\&quot;1234\&quot;&#x60; * All &#x60;ENTITY_STATUS_ACTIVE&#x60; or &#x60;ENTITY_STATUS_PAUSED&#x60; insertion orders under an advertiser: &#x60;(entityStatus&#x3D;\&quot;ENTITY_STATUS_ACTIVE\&quot; OR entityStatus&#x3D;\&quot;ENTITY_STATUS_PAUSED\&quot;)&#x60; * All insertion orders with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): &#x60;updateTime&lt;&#x3D;\&quot;2020-11-04T18:54:47Z\&quot;&#x60; * All insertion orders with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): &#x60;updateTime&gt;&#x3D;\&quot;2020-11-04T18:54:47Z\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * \&quot;displayName\&quot; (default) * \&quot;entityStatus\&quot; * \&quot;updateTime\&quot; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;100&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListInsertionOrders&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListInsertionOrdersResponse**](ListInsertionOrdersResponse.md)

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

# **displayvideo_advertisers_insertion_orders_list_assigned_targeting_options**
> BulkListInsertionOrderAssignedTargetingOptionsResponse displayvideo_advertisers_insertion_orders_list_assigned_targeting_options(advertiser_id, insertion_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists assigned targeting options of an insertion order across targeting types.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_list_insertion_order_assigned_targeting_options_response import BulkListInsertionOrderAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the insertion order belongs to.
    insertion_order_id = 'insertion_order_id_example' # str | Required. The ID of the insertion order to list assigned targeting options for.
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
    filter = 'filter_example' # str | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` or `TARGETING_TYPE_CHANNEL`: `targetingType=\"TARGETING_TYPE_PROXIMITY_LOCATION_LIST\" OR targetingType=\"TARGETING_TYPE_CHANNEL\"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance=\"NOT_INHERITED\" OR inheritance=\"INHERITED_FROM_PARTNER\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `targetingType desc`. (optional)
    page_size = 56 # int | Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListInsertionOrderAssignedTargetingOptions` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_insertion_orders_list_assigned_targeting_options(advertiser_id, insertion_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_insertion_orders_list_assigned_targeting_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_insertion_orders_list_assigned_targeting_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the insertion order belongs to. | 
 **insertion_order_id** | **str**| Required. The ID of the insertion order to list assigned targeting options for. | 
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
 **filter** | **str**| Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator &#x60;OR&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;targetingType&#x60; * &#x60;inheritance&#x60; Examples: * &#x60;AssignedTargetingOption&#x60; resources of targeting type &#x60;TARGETING_TYPE_PROXIMITY_LOCATION_LIST&#x60; or &#x60;TARGETING_TYPE_CHANNEL&#x60;: &#x60;targetingType&#x3D;\&quot;TARGETING_TYPE_PROXIMITY_LOCATION_LIST\&quot; OR targetingType&#x3D;\&quot;TARGETING_TYPE_CHANNEL\&quot;&#x60; * &#x60;AssignedTargetingOption&#x60; resources with inheritance status of &#x60;NOT_INHERITED&#x60; or &#x60;INHERITED_FROM_PARTNER&#x60;: &#x60;inheritance&#x3D;\&quot;NOT_INHERITED\&quot; OR inheritance&#x3D;\&quot;INHERITED_FROM_PARTNER\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;targetingType&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;targetingType desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. The size must be an integer between &#x60;1&#x60; and &#x60;5000&#x60;. If unspecified, the default is &#x60;5000&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to &#x60;BulkListInsertionOrderAssignedTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**BulkListInsertionOrderAssignedTargetingOptionsResponse**](BulkListInsertionOrderAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_insertion_orders_patch**
> InsertionOrder displayvideo_advertisers_insertion_orders_patch(advertiser_id, insertion_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, insertion_order=insertion_order)



Updates an existing insertion order. Returns the updated insertion order if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.insertion_order import InsertionOrder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Output only. The unique ID of the advertiser the insertion order belongs to.
    insertion_order_id = 'insertion_order_id_example' # str | Output only. The unique ID of the insertion order. Assigned by the system.
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
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. (optional)
    insertion_order = openapi_client.InsertionOrder() # InsertionOrder |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_insertion_orders_patch(advertiser_id, insertion_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, insertion_order=insertion_order)
        print("The response of AdvertisersApi->displayvideo_advertisers_insertion_orders_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_insertion_orders_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Output only. The unique ID of the advertiser the insertion order belongs to. | 
 **insertion_order_id** | **str**| Output only. The unique ID of the insertion order. Assigned by the system. | 
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
 **update_mask** | **str**| Required. The mask to control which fields to update. | [optional] 
 **insertion_order** | [**InsertionOrder**](InsertionOrder.md)|  | [optional] 

### Return type

[**InsertionOrder**](InsertionOrder.md)

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

# **displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_create**
> AssignedTargetingOption displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_create(advertiser_id, insertion_order_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, assigned_targeting_option=assigned_targeting_option)



Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.assigned_targeting_option import AssignedTargetingOption
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the insertion order belongs to.
    insertion_order_id = 'insertion_order_id_example' # str | Required. The ID of the insertion order the assigned targeting option will belong to.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
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
    assigned_targeting_option = openapi_client.AssignedTargetingOption() # AssignedTargetingOption |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_create(advertiser_id, insertion_order_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, assigned_targeting_option=assigned_targeting_option)
        print("The response of AdvertisersApi->displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the insertion order belongs to. | 
 **insertion_order_id** | **str**| Required. The ID of the insertion order the assigned targeting option will belong to. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_BROWSER&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_NEGATIVE_KEYWORD_LIST&#x60; * &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; | 
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
 **assigned_targeting_option** | [**AssignedTargetingOption**](AssignedTargetingOption.md)|  | [optional] 

### Return type

[**AssignedTargetingOption**](AssignedTargetingOption.md)

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

# **displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_delete**
> object displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_delete(advertiser_id, insertion_order_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the insertion order belongs to.
    insertion_order_id = 'insertion_order_id_example' # str | Required. The ID of the insertion order the assigned targeting option belongs to.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
    assigned_targeting_option_id = 'assigned_targeting_option_id_example' # str | Required. The ID of the assigned targeting option to delete.
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
        api_response = api_instance.displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_delete(advertiser_id, insertion_order_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the insertion order belongs to. | 
 **insertion_order_id** | **str**| Required. The ID of the insertion order the assigned targeting option belongs to. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_BROWSER&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_NEGATIVE_KEYWORD_LIST&#x60; * &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; | 
 **assigned_targeting_option_id** | **str**| Required. The ID of the assigned targeting option to delete. | 
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

**object**

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

# **displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_get**
> AssignedTargetingOption displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_get(advertiser_id, insertion_order_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets a single targeting option assigned to an insertion order.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.assigned_targeting_option import AssignedTargetingOption
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the insertion order belongs to.
    insertion_order_id = 'insertion_order_id_example' # str | Required. The ID of the insertion order the assigned targeting option belongs to.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
    assigned_targeting_option_id = 'assigned_targeting_option_id_example' # str | Required. An identifier unique to the targeting type in this insertion order that identifies the assigned targeting option being requested.
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
        api_response = api_instance.displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_get(advertiser_id, insertion_order_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the insertion order belongs to. | 
 **insertion_order_id** | **str**| Required. The ID of the insertion order the assigned targeting option belongs to. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types include: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_APP&#x60; * &#x60;TARGETING_TYPE_APP_CATEGORY&#x60; * &#x60;TARGETING_TYPE_AUDIENCE_GROUP&#x60; * &#x60;TARGETING_TYPE_AUDIO_CONTENT_TYPE&#x60; * &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60; * &#x60;TARGETING_TYPE_BROWSER&#x60; * &#x60;TARGETING_TYPE_BUSINESS_CHAIN&#x60; * &#x60;TARGETING_TYPE_CARRIER_AND_ISP&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_CONTENT_DURATION&#x60; * &#x60;TARGETING_TYPE_CONTENT_GENRE&#x60; * &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_STREAM_TYPE&#x60; * &#x60;TARGETING_TYPE_DAY_AND_TIME&#x60; * &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60; * &#x60;TARGETING_TYPE_DEVICE_TYPE&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_GEO_REGION&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE_GROUP&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_NATIVE_CONTENT_POSITION&#x60; * &#x60;TARGETING_TYPE_NEGATIVE_KEYWORD_LIST&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60; * &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_POI&#x60; * &#x60;TARGETING_TYPE_PROXIMITY_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_REGIONAL_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_THIRD_PARTY_VERIFIER&#x60; * &#x60;TARGETING_TYPE_URL&#x60; * &#x60;TARGETING_TYPE_USER_REWARDED_CONTENT&#x60; * &#x60;TARGETING_TYPE_VIDEO_PLAYER_SIZE&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; | 
 **assigned_targeting_option_id** | **str**| Required. An identifier unique to the targeting type in this insertion order that identifies the assigned targeting option being requested. | 
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

[**AssignedTargetingOption**](AssignedTargetingOption.md)

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

# **displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_list**
> ListInsertionOrderAssignedTargetingOptionsResponse displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_list(advertiser_id, insertion_order_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists the targeting options assigned to an insertion order.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_insertion_order_assigned_targeting_options_response import ListInsertionOrderAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the insertion order belongs to.
    insertion_order_id = 'insertion_order_id_example' # str | Required. The ID of the insertion order to list assigned targeting options for.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
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
    filter = 'filter_example' # str | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId=\"1\" OR assignedTargetingOptionId=\"2\"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance=\"NOT_INHERITED\" OR inheritance=\"INHERITED_FROM_PARTNER\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `assignedTargetingOptionId desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrderAssignedTargetingOptions` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_list(advertiser_id, insertion_order_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the insertion order belongs to. | 
 **insertion_order_id** | **str**| Required. The ID of the insertion order to list assigned targeting options for. | 
 **targeting_type** | **str**| Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_APP&#x60; * &#x60;TARGETING_TYPE_APP_CATEGORY&#x60; * &#x60;TARGETING_TYPE_AUDIENCE_GROUP&#x60; * &#x60;TARGETING_TYPE_AUDIO_CONTENT_TYPE&#x60; * &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60; * &#x60;TARGETING_TYPE_BROWSER&#x60; * &#x60;TARGETING_TYPE_BUSINESS_CHAIN&#x60; * &#x60;TARGETING_TYPE_CARRIER_AND_ISP&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_CONTENT_DURATION&#x60; * &#x60;TARGETING_TYPE_CONTENT_GENRE&#x60; * &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_STREAM_TYPE&#x60; * &#x60;TARGETING_TYPE_DAY_AND_TIME&#x60; * &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60; * &#x60;TARGETING_TYPE_DEVICE_TYPE&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_GEO_REGION&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE_GROUP&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_NATIVE_CONTENT_POSITION&#x60; * &#x60;TARGETING_TYPE_NEGATIVE_KEYWORD_LIST&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60; * &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_POI&#x60; * &#x60;TARGETING_TYPE_PROXIMITY_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_REGIONAL_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_THIRD_PARTY_VERIFIER&#x60; * &#x60;TARGETING_TYPE_URL&#x60; * &#x60;TARGETING_TYPE_USER_REWARDED_CONTENT&#x60; * &#x60;TARGETING_TYPE_VIDEO_PLAYER_SIZE&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; | 
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
 **filter** | **str**| Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator &#x60;OR&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;assignedTargetingOptionId&#x60; * &#x60;inheritance&#x60; Examples: * &#x60;AssignedTargetingOption&#x60; resources with ID 1 or 2: &#x60;assignedTargetingOptionId&#x3D;\&quot;1\&quot; OR assignedTargetingOptionId&#x3D;\&quot;2\&quot;&#x60; * &#x60;AssignedTargetingOption&#x60; resources with inheritance status of &#x60;NOT_INHERITED&#x60; or &#x60;INHERITED_FROM_PARTNER&#x60;: &#x60;inheritance&#x3D;\&quot;NOT_INHERITED\&quot; OR inheritance&#x3D;\&quot;INHERITED_FROM_PARTNER\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;assignedTargetingOptionId&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;assignedTargetingOptionId desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;5000&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListInsertionOrderAssignedTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListInsertionOrderAssignedTargetingOptionsResponse**](ListInsertionOrderAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_invoices_list**
> ListInvoicesResponse displayvideo_advertisers_invoices_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, issue_month=issue_month, loi_sapin_invoice_type=loi_sapin_invoice_type, page_size=page_size, page_token=page_token)



Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a \"Partner\" invoice level are not retrievable through this method.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_invoices_response import ListInvoicesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser to list invoices for.
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
    issue_month = 'issue_month_example' # str | The month to list the invoices for. If not set, the request will retrieve invoices for the previous month. Must be in the format YYYYMM. (optional)
    loi_sapin_invoice_type = 'loi_sapin_invoice_type_example' # str | Select type of invoice to retrieve for Loi Sapin advertisers. Only applicable to Loi Sapin advertisers. Will be ignored otherwise. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInvoices` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_invoices_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, issue_month=issue_month, loi_sapin_invoice_type=loi_sapin_invoice_type, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_invoices_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_invoices_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser to list invoices for. | 
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
 **issue_month** | **str**| The month to list the invoices for. If not set, the request will retrieve invoices for the previous month. Must be in the format YYYYMM. | [optional] 
 **loi_sapin_invoice_type** | **str**| Select type of invoice to retrieve for Loi Sapin advertisers. Only applicable to Loi Sapin advertisers. Will be ignored otherwise. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListInvoices&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListInvoicesResponse**](ListInvoicesResponse.md)

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

# **displayvideo_advertisers_invoices_lookup_invoice_currency**
> LookupInvoiceCurrencyResponse displayvideo_advertisers_invoices_lookup_invoice_currency(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, invoice_month=invoice_month)



Retrieves the invoice currency used by an advertiser in a given month.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.lookup_invoice_currency_response import LookupInvoiceCurrencyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser to lookup currency for.
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
    invoice_month = 'invoice_month_example' # str | Month for which the currency is needed. If not set, the request will return existing currency settings for the advertiser. Must be in the format YYYYMM. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_invoices_lookup_invoice_currency(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, invoice_month=invoice_month)
        print("The response of AdvertisersApi->displayvideo_advertisers_invoices_lookup_invoice_currency:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_invoices_lookup_invoice_currency: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser to lookup currency for. | 
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
 **invoice_month** | **str**| Month for which the currency is needed. If not set, the request will return existing currency settings for the advertiser. Must be in the format YYYYMM. | [optional] 

### Return type

[**LookupInvoiceCurrencyResponse**](LookupInvoiceCurrencyResponse.md)

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

# **displayvideo_advertisers_line_items_bulk_edit_assigned_targeting_options**
> BulkEditAssignedTargetingOptionsResponse displayvideo_advertisers_line_items_bulk_edit_assigned_targeting_options(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_edit_assigned_targeting_options_request=bulk_edit_assigned_targeting_options_request)



Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkUpdate * lineItems.patch * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_edit_assigned_targeting_options_request import BulkEditAssignedTargetingOptionsRequest
from openapi_client.models.bulk_edit_assigned_targeting_options_response import BulkEditAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the line items belong to.
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
    bulk_edit_assigned_targeting_options_request = openapi_client.BulkEditAssignedTargetingOptionsRequest() # BulkEditAssignedTargetingOptionsRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_line_items_bulk_edit_assigned_targeting_options(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_edit_assigned_targeting_options_request=bulk_edit_assigned_targeting_options_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_bulk_edit_assigned_targeting_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_bulk_edit_assigned_targeting_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the line items belong to. | 
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
 **bulk_edit_assigned_targeting_options_request** | [**BulkEditAssignedTargetingOptionsRequest**](BulkEditAssignedTargetingOptionsRequest.md)|  | [optional] 

### Return type

[**BulkEditAssignedTargetingOptionsResponse**](BulkEditAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_line_items_bulk_list_assigned_targeting_options**
> BulkListAssignedTargetingOptionsResponse displayvideo_advertisers_line_items_bulk_list_assigned_targeting_options(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, line_item_ids=line_item_ids, order_by=order_by, page_size=page_size, page_token=page_token)



Lists assigned targeting options for multiple line items across targeting types.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_list_assigned_targeting_options_response import BulkListAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the line items belongs to.
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
    filter = 'filter_example' # str | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR` on the same field. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` or `TARGETING_TYPE_CHANNEL`: `targetingType=\"TARGETING_TYPE_PROXIMITY_LOCATION_LIST\" OR targetingType=\"TARGETING_TYPE_CHANNEL\"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance=\"NOT_INHERITED\" OR inheritance=\"INHERITED_FROM_PARTNER\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    line_item_ids = ['line_item_ids_example'] # List[str] | Required. The IDs of the line items to list assigned targeting options for. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `lineItemId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `targetingType desc`. (optional)
    page_size = 56 # int | Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAssignedTargetingOptions` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_line_items_bulk_list_assigned_targeting_options(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, line_item_ids=line_item_ids, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_bulk_list_assigned_targeting_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_bulk_list_assigned_targeting_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the line items belongs to. | 
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
 **filter** | **str**| Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator &#x60;OR&#x60; on the same field. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;targetingType&#x60; * &#x60;inheritance&#x60; Examples: * &#x60;AssignedTargetingOption&#x60; resources of targeting type &#x60;TARGETING_TYPE_PROXIMITY_LOCATION_LIST&#x60; or &#x60;TARGETING_TYPE_CHANNEL&#x60;: &#x60;targetingType&#x3D;\&quot;TARGETING_TYPE_PROXIMITY_LOCATION_LIST\&quot; OR targetingType&#x3D;\&quot;TARGETING_TYPE_CHANNEL\&quot;&#x60; * &#x60;AssignedTargetingOption&#x60; resources with inheritance status of &#x60;NOT_INHERITED&#x60; or &#x60;INHERITED_FROM_PARTNER&#x60;: &#x60;inheritance&#x3D;\&quot;NOT_INHERITED\&quot; OR inheritance&#x3D;\&quot;INHERITED_FROM_PARTNER\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **line_item_ids** | [**List[str]**](str.md)| Required. The IDs of the line items to list assigned targeting options for. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;lineItemId&#x60; (default) * &#x60;assignedTargetingOption.targetingType&#x60; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;targetingType desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. The size must be an integer between &#x60;1&#x60; and &#x60;5000&#x60;. If unspecified, the default is &#x60;5000&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the &#x60;BulkListAssignedTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**BulkListAssignedTargetingOptionsResponse**](BulkListAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_line_items_bulk_update**
> BulkUpdateLineItemsResponse displayvideo_advertisers_line_items_bulk_update(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_update_line_items_request=bulk_update_line_items_request)



Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_update_line_items_request import BulkUpdateLineItemsRequest
from openapi_client.models.bulk_update_line_items_response import BulkUpdateLineItemsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser this line item belongs to.
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
    bulk_update_line_items_request = openapi_client.BulkUpdateLineItemsRequest() # BulkUpdateLineItemsRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_line_items_bulk_update(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_update_line_items_request=bulk_update_line_items_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser this line item belongs to. | 
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
 **bulk_update_line_items_request** | [**BulkUpdateLineItemsRequest**](BulkUpdateLineItemsRequest.md)|  | [optional] 

### Return type

[**BulkUpdateLineItemsResponse**](BulkUpdateLineItemsResponse.md)

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

# **displayvideo_advertisers_line_items_create**
> LineItem displayvideo_advertisers_line_items_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, line_item=line_item)



Creates a new line item. Returns the newly created line item if successful. YouTube & Partners line items cannot be created or updated using the API.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.line_item import LineItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Output only. The unique ID of the advertiser the line item belongs to.
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
    line_item = openapi_client.LineItem() # LineItem |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_line_items_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, line_item=line_item)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Output only. The unique ID of the advertiser the line item belongs to. | 
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
 **line_item** | [**LineItem**](LineItem.md)|  | [optional] 

### Return type

[**LineItem**](LineItem.md)

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

# **displayvideo_advertisers_line_items_delete**
> object displayvideo_advertisers_line_items_delete(advertiser_id, line_item_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. YouTube & Partners line items cannot be created or updated using the API.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser this line item belongs to.
    line_item_id = 'line_item_id_example' # str | The ID of the line item to delete.
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
        api_response = api_instance.displayvideo_advertisers_line_items_delete(advertiser_id, line_item_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| The ID of the advertiser this line item belongs to. | 
 **line_item_id** | **str**| The ID of the line item to delete. | 
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

**object**

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

# **displayvideo_advertisers_line_items_duplicate**
> DuplicateLineItemResponse displayvideo_advertisers_line_items_duplicate(advertiser_id, line_item_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, duplicate_line_item_request=duplicate_line_item_request)



Duplicates a line item. Returns the ID of the created line item if successful. YouTube & Partners line items cannot be created or updated using the API. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.duplicate_line_item_request import DuplicateLineItemRequest
from openapi_client.models.duplicate_line_item_response import DuplicateLineItemResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser this line item belongs to.
    line_item_id = 'line_item_id_example' # str | Required. The ID of the line item to duplicate.
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
    duplicate_line_item_request = openapi_client.DuplicateLineItemRequest() # DuplicateLineItemRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_line_items_duplicate(advertiser_id, line_item_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, duplicate_line_item_request=duplicate_line_item_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_duplicate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_duplicate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser this line item belongs to. | 
 **line_item_id** | **str**| Required. The ID of the line item to duplicate. | 
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
 **duplicate_line_item_request** | [**DuplicateLineItemRequest**](DuplicateLineItemRequest.md)|  | [optional] 

### Return type

[**DuplicateLineItemResponse**](DuplicateLineItemResponse.md)

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

# **displayvideo_advertisers_line_items_generate_default**
> LineItem displayvideo_advertisers_line_items_generate_default(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, generate_default_line_item_request=generate_default_line_item_request)



Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type YouTube & Partners line items cannot be created or updated using the API.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.generate_default_line_item_request import GenerateDefaultLineItemRequest
from openapi_client.models.line_item import LineItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser this line item belongs to.
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
    generate_default_line_item_request = openapi_client.GenerateDefaultLineItemRequest() # GenerateDefaultLineItemRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_line_items_generate_default(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, generate_default_line_item_request=generate_default_line_item_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_generate_default:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_generate_default: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser this line item belongs to. | 
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
 **generate_default_line_item_request** | [**GenerateDefaultLineItemRequest**](GenerateDefaultLineItemRequest.md)|  | [optional] 

### Return type

[**LineItem**](LineItem.md)

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

# **displayvideo_advertisers_line_items_get**
> LineItem displayvideo_advertisers_line_items_get(advertiser_id, line_item_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets a line item.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.line_item import LineItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser this line item belongs to.
    line_item_id = 'line_item_id_example' # str | Required. The ID of the line item to fetch.
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
        api_response = api_instance.displayvideo_advertisers_line_items_get(advertiser_id, line_item_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser this line item belongs to. | 
 **line_item_id** | **str**| Required. The ID of the line item to fetch. | 
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

[**LineItem**](LineItem.md)

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

# **displayvideo_advertisers_line_items_list**
> ListLineItemsResponse displayvideo_advertisers_line_items_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_line_items_response import ListLineItemsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser to list line items for.
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
    filter = 'filter_example' # str | Allows filtering by line item fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `insertionOrderId` * `lineItemId` * `lineItemType` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All line items under an insertion order: `insertionOrderId=\"1234\"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` and `LINE_ITEM_TYPE_DISPLAY_DEFAULT` line items under an advertiser: `(entityStatus=\"ENTITY_STATUS_ACTIVE\" OR entityStatus=\"ENTITY_STATUS_PAUSED\") AND lineItemType=\"LINE_ITEM_TYPE_DISPLAY_DEFAULT\"` * All line items with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<=\"2020-11-04T18:54:47Z\"` * All line items with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>=\"2020-11-04T18:54:47Z\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `displayName desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItems` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_line_items_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser to list line items for. | 
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
 **filter** | **str**| Allows filtering by line item fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by &#x60;AND&#x60; or &#x60;OR&#x60; logical operators. A sequence of restrictions implicitly uses &#x60;AND&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * The &#x60;updateTime&#x60; field must use the &#x60;GREATER THAN OR EQUAL TO (&gt;&#x3D;)&#x60; or &#x60;LESS THAN OR EQUAL TO (&lt;&#x3D;)&#x60; operators. * All other fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;campaignId&#x60; * &#x60;displayName&#x60; * &#x60;entityStatus&#x60; * &#x60;insertionOrderId&#x60; * &#x60;lineItemId&#x60; * &#x60;lineItemType&#x60; * &#x60;updateTime&#x60; (input in ISO 8601 format, or &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;) Examples: * All line items under an insertion order: &#x60;insertionOrderId&#x3D;\&quot;1234\&quot;&#x60; * All &#x60;ENTITY_STATUS_ACTIVE&#x60; or &#x60;ENTITY_STATUS_PAUSED&#x60; and &#x60;LINE_ITEM_TYPE_DISPLAY_DEFAULT&#x60; line items under an advertiser: &#x60;(entityStatus&#x3D;\&quot;ENTITY_STATUS_ACTIVE\&quot; OR entityStatus&#x3D;\&quot;ENTITY_STATUS_PAUSED\&quot;) AND lineItemType&#x3D;\&quot;LINE_ITEM_TYPE_DISPLAY_DEFAULT\&quot;&#x60; * All line items with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): &#x60;updateTime&lt;&#x3D;\&quot;2020-11-04T18:54:47Z\&quot;&#x60; * All line items with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): &#x60;updateTime&gt;&#x3D;\&quot;2020-11-04T18:54:47Z\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;displayName&#x60; (default) * &#x60;entityStatus&#x60; * &#x60;updateTime&#x60; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListLineItems&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListLineItemsResponse**](ListLineItemsResponse.md)

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

# **displayvideo_advertisers_line_items_patch**
> LineItem displayvideo_advertisers_line_items_patch(advertiser_id, line_item_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, line_item=line_item)



Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.line_item import LineItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Output only. The unique ID of the advertiser the line item belongs to.
    line_item_id = 'line_item_id_example' # str | Output only. The unique ID of the line item. Assigned by the system.
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
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. (optional)
    line_item = openapi_client.LineItem() # LineItem |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_line_items_patch(advertiser_id, line_item_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, line_item=line_item)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Output only. The unique ID of the advertiser the line item belongs to. | 
 **line_item_id** | **str**| Output only. The unique ID of the line item. Assigned by the system. | 
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
 **update_mask** | **str**| Required. The mask to control which fields to update. | [optional] 
 **line_item** | [**LineItem**](LineItem.md)|  | [optional] 

### Return type

[**LineItem**](LineItem.md)

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

# **displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_create**
> AssignedTargetingOption displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_create(advertiser_id, line_item_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, assigned_targeting_option=assigned_targeting_option)



Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkEditAssignedTargetingOptions * lineItems.bulkUpdate * lineItems.patch * DeleteLineItemAssignedTargetingOption YouTube & Partners line items cannot be created or updated using the API.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.assigned_targeting_option import AssignedTargetingOption
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the line item belongs to.
    line_item_id = 'line_item_id_example' # str | Required. The ID of the line item the assigned targeting option will belong to.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
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
    assigned_targeting_option = openapi_client.AssignedTargetingOption() # AssignedTargetingOption |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_create(advertiser_id, line_item_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, assigned_targeting_option=assigned_targeting_option)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the line item belongs to. | 
 **line_item_id** | **str**| Required. The ID of the line item the assigned targeting option will belong to. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types include: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_APP&#x60; * &#x60;TARGETING_TYPE_APP_CATEGORY&#x60; * &#x60;TARGETING_TYPE_AUDIENCE_GROUP&#x60; * &#x60;TARGETING_TYPE_AUDIO_CONTENT_TYPE&#x60; * &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60; * &#x60;TARGETING_TYPE_BROWSER&#x60; * &#x60;TARGETING_TYPE_BUSINESS_CHAIN&#x60; * &#x60;TARGETING_TYPE_CARRIER_AND_ISP&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_CONTENT_DURATION&#x60; * &#x60;TARGETING_TYPE_CONTENT_GENRE&#x60; * &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_STREAM_TYPE&#x60; * &#x60;TARGETING_TYPE_DAY_AND_TIME&#x60; * &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60; * &#x60;TARGETING_TYPE_DEVICE_TYPE&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_GEO_REGION&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE_GROUP&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_NATIVE_CONTENT_POSITION&#x60; * &#x60;TARGETING_TYPE_NEGATIVE_KEYWORD_LIST&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60; * &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_POI&#x60; * &#x60;TARGETING_TYPE_PROXIMITY_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_REGIONAL_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_THIRD_PARTY_VERIFIER&#x60; * &#x60;TARGETING_TYPE_URL&#x60; * &#x60;TARGETING_TYPE_USER_REWARDED_CONTENT&#x60; * &#x60;TARGETING_TYPE_VIDEO_PLAYER_SIZE&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; | 
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
 **assigned_targeting_option** | [**AssignedTargetingOption**](AssignedTargetingOption.md)|  | [optional] 

### Return type

[**AssignedTargetingOption**](AssignedTargetingOption.md)

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

# **displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_delete**
> object displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_delete(advertiser_id, line_item_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkEditAssignedTargetingOptions * lineItems.bulkUpdate * lineItems.patch * CreateLineItemAssignedTargetingOption YouTube & Partners line items cannot be created or updated using the API.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the line item belongs to.
    line_item_id = 'line_item_id_example' # str | Required. The ID of the line item the assigned targeting option belongs to.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
    assigned_targeting_option_id = 'assigned_targeting_option_id_example' # str | Required. The ID of the assigned targeting option to delete.
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
        api_response = api_instance.displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_delete(advertiser_id, line_item_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the line item belongs to. | 
 **line_item_id** | **str**| Required. The ID of the line item the assigned targeting option belongs to. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types include: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_APP&#x60; * &#x60;TARGETING_TYPE_APP_CATEGORY&#x60; * &#x60;TARGETING_TYPE_AUDIENCE_GROUP&#x60; * &#x60;TARGETING_TYPE_AUDIO_CONTENT_TYPE&#x60; * &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60; * &#x60;TARGETING_TYPE_BROWSER&#x60; * &#x60;TARGETING_TYPE_BUSINESS_CHAIN&#x60; * &#x60;TARGETING_TYPE_CARRIER_AND_ISP&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_CONTENT_DURATION&#x60; * &#x60;TARGETING_TYPE_CONTENT_GENRE&#x60; * &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_STREAM_TYPE&#x60; * &#x60;TARGETING_TYPE_DAY_AND_TIME&#x60; * &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60; * &#x60;TARGETING_TYPE_DEVICE_TYPE&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_GEO_REGION&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE_GROUP&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_NATIVE_CONTENT_POSITION&#x60; * &#x60;TARGETING_TYPE_NEGATIVE_KEYWORD_LIST&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60; * &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_POI&#x60; * &#x60;TARGETING_TYPE_PROXIMITY_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_REGIONAL_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_THIRD_PARTY_VERIFIER&#x60; * &#x60;TARGETING_TYPE_URL&#x60; * &#x60;TARGETING_TYPE_USER_REWARDED_CONTENT&#x60; * &#x60;TARGETING_TYPE_VIDEO_PLAYER_SIZE&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; | 
 **assigned_targeting_option_id** | **str**| Required. The ID of the assigned targeting option to delete. | 
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

**object**

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

# **displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_get**
> AssignedTargetingOption displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_get(advertiser_id, line_item_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets a single targeting option assigned to a line item.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.assigned_targeting_option import AssignedTargetingOption
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the line item belongs to.
    line_item_id = 'line_item_id_example' # str | Required. The ID of the line item the assigned targeting option belongs to.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items)
    assigned_targeting_option_id = 'assigned_targeting_option_id_example' # str | Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested.
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
        api_response = api_instance.displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_get(advertiser_id, line_item_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the line item belongs to. | 
 **line_item_id** | **str**| Required. The ID of the line item the assigned targeting option belongs to. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types include: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_APP&#x60; * &#x60;TARGETING_TYPE_APP_CATEGORY&#x60; * &#x60;TARGETING_TYPE_AUDIENCE_GROUP&#x60; * &#x60;TARGETING_TYPE_AUDIO_CONTENT_TYPE&#x60; * &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60; * &#x60;TARGETING_TYPE_BROWSER&#x60; * &#x60;TARGETING_TYPE_BUSINESS_CHAIN&#x60; * &#x60;TARGETING_TYPE_CARRIER_AND_ISP&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_CONTENT_DURATION&#x60; * &#x60;TARGETING_TYPE_CONTENT_GENRE&#x60; * &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_STREAM_TYPE&#x60; * &#x60;TARGETING_TYPE_DAY_AND_TIME&#x60; * &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60; * &#x60;TARGETING_TYPE_DEVICE_TYPE&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_GEO_REGION&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE_GROUP&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_NATIVE_CONTENT_POSITION&#x60; * &#x60;TARGETING_TYPE_NEGATIVE_KEYWORD_LIST&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60; * &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_POI&#x60; * &#x60;TARGETING_TYPE_PROXIMITY_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_REGIONAL_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_THIRD_PARTY_VERIFIER&#x60; * &#x60;TARGETING_TYPE_URL&#x60; * &#x60;TARGETING_TYPE_USER_REWARDED_CONTENT&#x60; * &#x60;TARGETING_TYPE_VIDEO_PLAYER_SIZE&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; * &#x60;TARGETING_TYPE_YOUTUBE_CHANNEL&#x60; (only for &#x60;LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE&#x60; line items) * &#x60;TARGETING_TYPE_YOUTUBE_VIDEO&#x60; (only for &#x60;LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE&#x60; line items) | 
 **assigned_targeting_option_id** | **str**| Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested. | 
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

[**AssignedTargetingOption**](AssignedTargetingOption.md)

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

# **displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_list**
> ListLineItemAssignedTargetingOptionsResponse displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_list(advertiser_id, line_item_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists the targeting options assigned to a line item.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_line_item_assigned_targeting_options_response import ListLineItemAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the line item belongs to.
    line_item_id = 'line_item_id_example' # str | Required. The ID of the line item to list assigned targeting options for.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items)
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
    filter = 'filter_example' # str | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId=\"1\" OR assignedTargetingOptionId=\"2\"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance=\"NOT_INHERITED\" OR inheritance=\"INHERITED_FROM_PARTNER\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `assignedTargetingOptionId desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItemAssignedTargetingOptions` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_list(advertiser_id, line_item_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the line item belongs to. | 
 **line_item_id** | **str**| Required. The ID of the line item to list assigned targeting options for. | 
 **targeting_type** | **str**| Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_APP&#x60; * &#x60;TARGETING_TYPE_APP_CATEGORY&#x60; * &#x60;TARGETING_TYPE_AUDIENCE_GROUP&#x60; * &#x60;TARGETING_TYPE_AUDIO_CONTENT_TYPE&#x60; * &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60; * &#x60;TARGETING_TYPE_BROWSER&#x60; * &#x60;TARGETING_TYPE_BUSINESS_CHAIN&#x60; * &#x60;TARGETING_TYPE_CARRIER_AND_ISP&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_CONTENT_DURATION&#x60; * &#x60;TARGETING_TYPE_CONTENT_GENRE&#x60; * &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_STREAM_TYPE&#x60; * &#x60;TARGETING_TYPE_DAY_AND_TIME&#x60; * &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60; * &#x60;TARGETING_TYPE_DEVICE_TYPE&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_GEO_REGION&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE_GROUP&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_NATIVE_CONTENT_POSITION&#x60; * &#x60;TARGETING_TYPE_NEGATIVE_KEYWORD_LIST&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60; * &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_POI&#x60; * &#x60;TARGETING_TYPE_PROXIMITY_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_REGIONAL_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_THIRD_PARTY_VERIFIER&#x60; * &#x60;TARGETING_TYPE_URL&#x60; * &#x60;TARGETING_TYPE_USER_REWARDED_CONTENT&#x60; * &#x60;TARGETING_TYPE_VIDEO_PLAYER_SIZE&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; * &#x60;TARGETING_TYPE_YOUTUBE_CHANNEL&#x60; (only for &#x60;LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE&#x60; line items) * &#x60;TARGETING_TYPE_YOUTUBE_VIDEO&#x60; (only for &#x60;LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE&#x60; line items) | 
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
 **filter** | **str**| Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator &#x60;OR&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;assignedTargetingOptionId&#x60; * &#x60;inheritance&#x60; Examples: * &#x60;AssignedTargetingOption&#x60; resources with ID 1 or 2: &#x60;assignedTargetingOptionId&#x3D;\&quot;1\&quot; OR assignedTargetingOptionId&#x3D;\&quot;2\&quot;&#x60; * &#x60;AssignedTargetingOption&#x60; resources with inheritance status of &#x60;NOT_INHERITED&#x60; or &#x60;INHERITED_FROM_PARTNER&#x60;: &#x60;inheritance&#x3D;\&quot;NOT_INHERITED\&quot; OR inheritance&#x3D;\&quot;INHERITED_FROM_PARTNER\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;assignedTargetingOptionId&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;assignedTargetingOptionId desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;5000&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListLineItemAssignedTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListLineItemAssignedTargetingOptionsResponse**](ListLineItemAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_list**
> ListAdvertisersResponse displayvideo_advertisers_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)



Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_advertisers_response import ListAdvertisersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
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
    filter = 'filter_example' # str | Allows filtering by advertiser fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `advertiserId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All active advertisers under a partner: `entityStatus=\"ENTITY_STATUS_ACTIVE\"` * All advertisers with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<=\"2020-11-04T18:54:47Z\"` * All advertisers with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>=\"2020-11-04T18:54:47Z\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. For example, `displayName desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertisers` method. If not specified, the first page of results will be returned. (optional)
    partner_id = 'partner_id_example' # str | Required. The ID of the partner that the fetched advertisers should all belong to. The system only supports listing advertisers for one partner at a time. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)
        print("The response of AdvertisersApi->displayvideo_advertisers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_list: %s\n" % e)
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
 **filter** | **str**| Allows filtering by advertiser fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by &#x60;AND&#x60; or &#x60;OR&#x60; logical operators. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * The &#x60;updateTime&#x60; field must use the &#x60;GREATER THAN OR EQUAL TO (&gt;&#x3D;)&#x60; or &#x60;LESS THAN OR EQUAL TO (&lt;&#x3D;)&#x60; operators. * All other fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;advertiserId&#x60; * &#x60;displayName&#x60; * &#x60;entityStatus&#x60; * &#x60;updateTime&#x60; (input in ISO 8601 format, or &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;) Examples: * All active advertisers under a partner: &#x60;entityStatus&#x3D;\&quot;ENTITY_STATUS_ACTIVE\&quot;&#x60; * All advertisers with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): &#x60;updateTime&lt;&#x3D;\&quot;2020-11-04T18:54:47Z\&quot;&#x60; * All advertisers with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): &#x60;updateTime&gt;&#x3D;\&quot;2020-11-04T18:54:47Z\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;displayName&#x60; (default) * &#x60;entityStatus&#x60; * &#x60;updateTime&#x60; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. For example, &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListAdvertisers&#x60; method. If not specified, the first page of results will be returned. | [optional] 
 **partner_id** | **str**| Required. The ID of the partner that the fetched advertisers should all belong to. The system only supports listing advertisers for one partner at a time. | [optional] 

### Return type

[**ListAdvertisersResponse**](ListAdvertisersResponse.md)

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

# **displayvideo_advertisers_list_assigned_targeting_options**
> BulkListAdvertiserAssignedTargetingOptionsResponse displayvideo_advertisers_list_assigned_targeting_options(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists assigned targeting options of an advertiser across targeting types.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_list_advertiser_assigned_targeting_options_response import BulkListAdvertiserAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser the line item belongs to.
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
    filter = 'filter_example' # str | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=) operator`. Supported fields: * `targetingType` Examples: * targetingType with value TARGETING_TYPE_CHANNEL `targetingType=\"TARGETING_TYPE_CHANNEL\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `targetingType desc`. (optional)
    page_size = 56 # int | Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is '5000'. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_list_assigned_targeting_options(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_list_assigned_targeting_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_list_assigned_targeting_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser the line item belongs to. | 
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
 **filter** | **str**| Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the &#x60;OR&#x60; logical operator. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;) operator&#x60;. Supported fields: * &#x60;targetingType&#x60; Examples: * targetingType with value TARGETING_TYPE_CHANNEL &#x60;targetingType&#x3D;\&quot;TARGETING_TYPE_CHANNEL\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;targetingType&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;targetingType desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. The size must be an integer between &#x60;1&#x60; and &#x60;5000&#x60;. If unspecified, the default is &#39;5000&#39;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to &#x60;BulkListAdvertiserAssignedTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**BulkListAdvertiserAssignedTargetingOptionsResponse**](BulkListAdvertiserAssignedTargetingOptionsResponse.md)

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

# **displayvideo_advertisers_location_lists_assigned_locations_bulk_edit**
> BulkEditAssignedLocationsResponse displayvideo_advertisers_location_lists_assigned_locations_bulk_edit(advertiser_id, location_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_edit_assigned_locations_request=bulk_edit_assigned_locations_request)



Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in deletedAssignedLocations and then create the assigned locations provided in createdAssignedLocations.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_edit_assigned_locations_request import BulkEditAssignedLocationsRequest
from openapi_client.models.bulk_edit_assigned_locations_response import BulkEditAssignedLocationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the location list belongs.
    location_list_id = 'location_list_id_example' # str | Required. The ID of the location list to which these assignments are assigned.
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
    bulk_edit_assigned_locations_request = openapi_client.BulkEditAssignedLocationsRequest() # BulkEditAssignedLocationsRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_location_lists_assigned_locations_bulk_edit(advertiser_id, location_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_edit_assigned_locations_request=bulk_edit_assigned_locations_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_location_lists_assigned_locations_bulk_edit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_location_lists_assigned_locations_bulk_edit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the location list belongs. | 
 **location_list_id** | **str**| Required. The ID of the location list to which these assignments are assigned. | 
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
 **bulk_edit_assigned_locations_request** | [**BulkEditAssignedLocationsRequest**](BulkEditAssignedLocationsRequest.md)|  | [optional] 

### Return type

[**BulkEditAssignedLocationsResponse**](BulkEditAssignedLocationsResponse.md)

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

# **displayvideo_advertisers_location_lists_assigned_locations_create**
> AssignedLocation displayvideo_advertisers_location_lists_assigned_locations_create(advertiser_id, location_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, assigned_location=assigned_location)



Creates an assignment between a location and a location list.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.assigned_location import AssignedLocation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the location list belongs.
    location_list_id = 'location_list_id_example' # str | Required. The ID of the location list for which the assignment will be created.
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
    assigned_location = openapi_client.AssignedLocation() # AssignedLocation |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_location_lists_assigned_locations_create(advertiser_id, location_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, assigned_location=assigned_location)
        print("The response of AdvertisersApi->displayvideo_advertisers_location_lists_assigned_locations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_location_lists_assigned_locations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the location list belongs. | 
 **location_list_id** | **str**| Required. The ID of the location list for which the assignment will be created. | 
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
 **assigned_location** | [**AssignedLocation**](AssignedLocation.md)|  | [optional] 

### Return type

[**AssignedLocation**](AssignedLocation.md)

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

# **displayvideo_advertisers_location_lists_assigned_locations_delete**
> object displayvideo_advertisers_location_lists_assigned_locations_delete(advertiser_id, location_list_id, assigned_location_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes the assignment between a location and a location list.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the location list belongs.
    location_list_id = 'location_list_id_example' # str | Required. The ID of the location list to which this assignment is assigned.
    assigned_location_id = 'assigned_location_id_example' # str | Required. The ID of the assigned location to delete.
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
        api_response = api_instance.displayvideo_advertisers_location_lists_assigned_locations_delete(advertiser_id, location_list_id, assigned_location_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_location_lists_assigned_locations_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_location_lists_assigned_locations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the location list belongs. | 
 **location_list_id** | **str**| Required. The ID of the location list to which this assignment is assigned. | 
 **assigned_location_id** | **str**| Required. The ID of the assigned location to delete. | 
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

**object**

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

# **displayvideo_advertisers_location_lists_assigned_locations_list**
> ListAssignedLocationsResponse displayvideo_advertisers_location_lists_assigned_locations_list(advertiser_id, location_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists locations assigned to a location list.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_assigned_locations_response import ListAssignedLocationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the location list belongs.
    location_list_id = 'location_list_id_example' # str | Required. The ID of the location list to which these assignments are assigned.
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
    filter = 'filter_example' # str | Allows filtering by location list assignment fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedLocationId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `assignedLocationId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \" desc\" should be added to the field name. Example: `assignedLocationId desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedLocations` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_location_lists_assigned_locations_list(advertiser_id, location_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_location_lists_assigned_locations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_location_lists_assigned_locations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the location list belongs. | 
 **location_list_id** | **str**| Required. The ID of the location list to which these assignments are assigned. | 
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
 **filter** | **str**| Allows filtering by location list assignment fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the &#x60;OR&#x60; logical operator. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;assignedLocationId&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;assignedLocationId&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot; desc\&quot; should be added to the field name. Example: &#x60;assignedLocationId desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListAssignedLocations&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListAssignedLocationsResponse**](ListAssignedLocationsResponse.md)

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

# **displayvideo_advertisers_location_lists_create**
> LocationList displayvideo_advertisers_location_lists_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, location_list=location_list)



Creates a new location list. Returns the newly created location list if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.location_list import LocationList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the location list belongs.
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
    location_list = openapi_client.LocationList() # LocationList |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_location_lists_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, location_list=location_list)
        print("The response of AdvertisersApi->displayvideo_advertisers_location_lists_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_location_lists_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the location list belongs. | 
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
 **location_list** | [**LocationList**](LocationList.md)|  | [optional] 

### Return type

[**LocationList**](LocationList.md)

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

# **displayvideo_advertisers_location_lists_list**
> ListLocationListsResponse displayvideo_advertisers_location_lists_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists location lists based on a given advertiser id.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_location_lists_response import ListLocationListsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the fetched location lists belong.
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
    filter = 'filter_example' # str | Allows filtering by location list fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `locationType` Examples: * All regional location list: `locationType=\"TARGETING_LOCATION_TYPE_REGIONAL\"` * All proximity location list: `locationType=\"TARGETING_LOCATION_TYPE_PROXIMITY\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `locationListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `displayName desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLocationLists` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_location_lists_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_location_lists_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_location_lists_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the fetched location lists belong. | 
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
 **filter** | **str**| Allows filtering by location list fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by &#x60;AND&#x60; or &#x60;OR&#x60; logical operators. A sequence of restrictions implicitly uses &#x60;AND&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;locationType&#x60; Examples: * All regional location list: &#x60;locationType&#x3D;\&quot;TARGETING_LOCATION_TYPE_REGIONAL\&quot;&#x60; * All proximity location list: &#x60;locationType&#x3D;\&quot;TARGETING_LOCATION_TYPE_PROXIMITY\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;locationListId&#x60; (default) * &#x60;displayName&#x60; The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. Defaults to &#x60;100&#x60; if not set. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListLocationLists&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListLocationListsResponse**](ListLocationListsResponse.md)

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

# **displayvideo_advertisers_location_lists_patch**
> LocationList displayvideo_advertisers_location_lists_patch(advertiser_id, location_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, location_list=location_list)



Updates a location list. Returns the updated location list if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.location_list import LocationList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the location lists belongs.
    location_list_id = 'location_list_id_example' # str | Output only. The unique ID of the location list. Assigned by the system.
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
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. (optional)
    location_list = openapi_client.LocationList() # LocationList |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_location_lists_patch(advertiser_id, location_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, location_list=location_list)
        print("The response of AdvertisersApi->displayvideo_advertisers_location_lists_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_location_lists_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the location lists belongs. | 
 **location_list_id** | **str**| Output only. The unique ID of the location list. Assigned by the system. | 
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
 **update_mask** | **str**| Required. The mask to control which fields to update. | [optional] 
 **location_list** | [**LocationList**](LocationList.md)|  | [optional] 

### Return type

[**LocationList**](LocationList.md)

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

# **displayvideo_advertisers_negative_keyword_lists_create**
> NegativeKeywordList displayvideo_advertisers_negative_keyword_lists_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, negative_keyword_list=negative_keyword_list)



Creates a new negative keyword list. Returns the newly created negative keyword list if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.negative_keyword_list import NegativeKeywordList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the negative keyword list will belong.
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
    negative_keyword_list = openapi_client.NegativeKeywordList() # NegativeKeywordList |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_negative_keyword_lists_create(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, negative_keyword_list=negative_keyword_list)
        print("The response of AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the negative keyword list will belong. | 
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
 **negative_keyword_list** | [**NegativeKeywordList**](NegativeKeywordList.md)|  | [optional] 

### Return type

[**NegativeKeywordList**](NegativeKeywordList.md)

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

# **displayvideo_advertisers_negative_keyword_lists_list**
> ListNegativeKeywordListsResponse displayvideo_advertisers_negative_keyword_lists_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists negative keyword lists based on a given advertiser id.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_negative_keyword_lists_response import ListNegativeKeywordListsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the fetched negative keyword lists belong.
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
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywordLists` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_negative_keyword_lists_list(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the fetched negative keyword lists belong. | 
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
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. Defaults to &#x60;100&#x60; if not set. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListNegativeKeywordLists&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListNegativeKeywordListsResponse**](ListNegativeKeywordListsResponse.md)

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

# **displayvideo_advertisers_negative_keyword_lists_negative_keywords_bulk_edit**
> BulkEditNegativeKeywordsResponse displayvideo_advertisers_negative_keyword_lists_negative_keywords_bulk_edit(advertiser_id, negative_keyword_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_edit_negative_keywords_request=bulk_edit_negative_keywords_request)



Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_edit_negative_keywords_request import BulkEditNegativeKeywordsRequest
from openapi_client.models.bulk_edit_negative_keywords_response import BulkEditNegativeKeywordsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
    negative_keyword_list_id = 'negative_keyword_list_id_example' # str | Required. The ID of the parent negative keyword list to which the negative keywords belong.
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
    bulk_edit_negative_keywords_request = openapi_client.BulkEditNegativeKeywordsRequest() # BulkEditNegativeKeywordsRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_negative_keyword_lists_negative_keywords_bulk_edit(advertiser_id, negative_keyword_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_edit_negative_keywords_request=bulk_edit_negative_keywords_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_negative_keywords_bulk_edit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_negative_keywords_bulk_edit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs. | 
 **negative_keyword_list_id** | **str**| Required. The ID of the parent negative keyword list to which the negative keywords belong. | 
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
 **bulk_edit_negative_keywords_request** | [**BulkEditNegativeKeywordsRequest**](BulkEditNegativeKeywordsRequest.md)|  | [optional] 

### Return type

[**BulkEditNegativeKeywordsResponse**](BulkEditNegativeKeywordsResponse.md)

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

# **displayvideo_advertisers_negative_keyword_lists_negative_keywords_delete**
> object displayvideo_advertisers_negative_keyword_lists_negative_keywords_delete(advertiser_id, negative_keyword_list_id, keyword_value, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes a negative keyword from a negative keyword list.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
    negative_keyword_list_id = 'negative_keyword_list_id_example' # str | Required. The ID of the parent negative keyword list to which the negative keyword belongs.
    keyword_value = 'keyword_value_example' # str | Required. The keyword value of the negative keyword to delete.
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
        api_response = api_instance.displayvideo_advertisers_negative_keyword_lists_negative_keywords_delete(advertiser_id, negative_keyword_list_id, keyword_value, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_negative_keywords_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_negative_keywords_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs. | 
 **negative_keyword_list_id** | **str**| Required. The ID of the parent negative keyword list to which the negative keyword belongs. | 
 **keyword_value** | **str**| Required. The keyword value of the negative keyword to delete. | 
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

**object**

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

# **displayvideo_advertisers_negative_keyword_lists_negative_keywords_list**
> ListNegativeKeywordsResponse displayvideo_advertisers_negative_keyword_lists_negative_keywords_list(advertiser_id, negative_keyword_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists negative keywords in a negative keyword list.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_negative_keywords_response import ListNegativeKeywordsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
    negative_keyword_list_id = 'negative_keyword_list_id_example' # str | Required. The ID of the parent negative keyword list to which the requested negative keywords belong.
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
    filter = 'filter_example' # str | Allows filtering by negative keyword fields. Supported syntax: * Filter expressions for negative keywords can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `keywordValue` Examples: * All negative keywords for which the keyword value contains \"google\": `keywordValue : \"google\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `keywordValue` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \" desc\" should be added to the field name. Example: `keywordValue desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `1000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywords` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_negative_keyword_lists_negative_keywords_list(advertiser_id, negative_keyword_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_negative_keywords_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_negative_keywords_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs. | 
 **negative_keyword_list_id** | **str**| Required. The ID of the parent negative keyword list to which the requested negative keywords belong. | 
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
 **filter** | **str**| Allows filtering by negative keyword fields. Supported syntax: * Filter expressions for negative keywords can only contain at most one restriction. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;HAS (:)&#x60; operator. Supported fields: * &#x60;keywordValue&#x60; Examples: * All negative keywords for which the keyword value contains \&quot;google\&quot;: &#x60;keywordValue : \&quot;google\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;keywordValue&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot; desc\&quot; should be added to the field name. Example: &#x60;keywordValue desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;1000&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListNegativeKeywords&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListNegativeKeywordsResponse**](ListNegativeKeywordsResponse.md)

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

# **displayvideo_advertisers_negative_keyword_lists_negative_keywords_replace**
> ReplaceNegativeKeywordsResponse displayvideo_advertisers_negative_keyword_lists_negative_keywords_replace(advertiser_id, negative_keyword_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, replace_negative_keywords_request=replace_negative_keywords_request)



Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.replace_negative_keywords_request import ReplaceNegativeKeywordsRequest
from openapi_client.models.replace_negative_keywords_response import ReplaceNegativeKeywordsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
    negative_keyword_list_id = 'negative_keyword_list_id_example' # str | Required. The ID of the parent negative keyword list to which the negative keywords belong.
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
    replace_negative_keywords_request = openapi_client.ReplaceNegativeKeywordsRequest() # ReplaceNegativeKeywordsRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_negative_keyword_lists_negative_keywords_replace(advertiser_id, negative_keyword_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, replace_negative_keywords_request=replace_negative_keywords_request)
        print("The response of AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_negative_keywords_replace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_negative_keywords_replace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs. | 
 **negative_keyword_list_id** | **str**| Required. The ID of the parent negative keyword list to which the negative keywords belong. | 
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
 **replace_negative_keywords_request** | [**ReplaceNegativeKeywordsRequest**](ReplaceNegativeKeywordsRequest.md)|  | [optional] 

### Return type

[**ReplaceNegativeKeywordsResponse**](ReplaceNegativeKeywordsResponse.md)

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

# **displayvideo_advertisers_negative_keyword_lists_patch**
> NegativeKeywordList displayvideo_advertisers_negative_keyword_lists_patch(advertiser_id, negative_keyword_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, negative_keyword_list=negative_keyword_list)



Updates a negative keyword list. Returns the updated negative keyword list if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.negative_keyword_list import NegativeKeywordList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the DV360 advertiser to which the negative keyword list belongs.
    negative_keyword_list_id = 'negative_keyword_list_id_example' # str | Output only. The unique ID of the negative keyword list. Assigned by the system.
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
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. (optional)
    negative_keyword_list = openapi_client.NegativeKeywordList() # NegativeKeywordList |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_negative_keyword_lists_patch(advertiser_id, negative_keyword_list_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, negative_keyword_list=negative_keyword_list)
        print("The response of AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_negative_keyword_lists_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the DV360 advertiser to which the negative keyword list belongs. | 
 **negative_keyword_list_id** | **str**| Output only. The unique ID of the negative keyword list. Assigned by the system. | 
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
 **update_mask** | **str**| Required. The mask to control which fields to update. | [optional] 
 **negative_keyword_list** | [**NegativeKeywordList**](NegativeKeywordList.md)|  | [optional] 

### Return type

[**NegativeKeywordList**](NegativeKeywordList.md)

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

# **displayvideo_advertisers_patch**
> Advertiser displayvideo_advertisers_patch(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, advertiser=advertiser)



Updates an existing advertiser. Returns the updated advertiser if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.advertiser import Advertiser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Output only. The unique ID of the advertiser. Assigned by the system.
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
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. (optional)
    advertiser = openapi_client.Advertiser() # Advertiser |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_patch(advertiser_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, advertiser=advertiser)
        print("The response of AdvertisersApi->displayvideo_advertisers_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Output only. The unique ID of the advertiser. Assigned by the system. | 
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
 **update_mask** | **str**| Required. The mask to control which fields to update. | [optional] 
 **advertiser** | [**Advertiser**](Advertiser.md)|  | [optional] 

### Return type

[**Advertiser**](Advertiser.md)

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

# **displayvideo_advertisers_targeting_types_assigned_targeting_options_create**
> AssignedTargetingOption displayvideo_advertisers_targeting_types_assigned_targeting_options_create(advertiser_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, assigned_targeting_option=assigned_targeting_option)



Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.assigned_targeting_option import AssignedTargetingOption
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`
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
    assigned_targeting_option = openapi_client.AssignedTargetingOption() # AssignedTargetingOption |  (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_targeting_types_assigned_targeting_options_create(advertiser_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, assigned_targeting_option=assigned_targeting_option)
        print("The response of AdvertisersApi->displayvideo_advertisers_targeting_types_assigned_targeting_options_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_targeting_types_assigned_targeting_options_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types: * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; | 
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
 **assigned_targeting_option** | [**AssignedTargetingOption**](AssignedTargetingOption.md)|  | [optional] 

### Return type

[**AssignedTargetingOption**](AssignedTargetingOption.md)

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

# **displayvideo_advertisers_targeting_types_assigned_targeting_options_delete**
> object displayvideo_advertisers_targeting_types_assigned_targeting_options_delete(advertiser_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes an assigned targeting option from an advertiser.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`
    assigned_targeting_option_id = 'assigned_targeting_option_id_example' # str | Required. The ID of the assigned targeting option to delete.
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
        api_response = api_instance.displayvideo_advertisers_targeting_types_assigned_targeting_options_delete(advertiser_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_targeting_types_assigned_targeting_options_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_targeting_types_assigned_targeting_options_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types: * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; | 
 **assigned_targeting_option_id** | **str**| Required. The ID of the assigned targeting option to delete. | 
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

**object**

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

# **displayvideo_advertisers_targeting_types_assigned_targeting_options_get**
> AssignedTargetingOption displayvideo_advertisers_targeting_types_assigned_targeting_options_get(advertiser_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets a single targeting option assigned to an advertiser.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.assigned_targeting_option import AssignedTargetingOption
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL`
    assigned_targeting_option_id = 'assigned_targeting_option_id_example' # str | Required. An identifier unique to the targeting type in this advertiser that identifies the assigned targeting option being requested.
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
        api_response = api_instance.displayvideo_advertisers_targeting_types_assigned_targeting_options_get(advertiser_id, targeting_type, assigned_targeting_option_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertisersApi->displayvideo_advertisers_targeting_types_assigned_targeting_options_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_targeting_types_assigned_targeting_options_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser. | 
 **targeting_type** | **str**| Required. Identifies the type of this assigned targeting option. Supported targeting types: * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_YOUTUBE_VIDEO&#x60; * &#x60;TARGETING_TYPE_YOUTUBE_CHANNEL&#x60; | 
 **assigned_targeting_option_id** | **str**| Required. An identifier unique to the targeting type in this advertiser that identifies the assigned targeting option being requested. | 
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

[**AssignedTargetingOption**](AssignedTargetingOption.md)

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

# **displayvideo_advertisers_targeting_types_assigned_targeting_options_list**
> ListAdvertiserAssignedTargetingOptionsResponse displayvideo_advertisers_targeting_types_assigned_targeting_options_list(advertiser_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists the targeting options assigned to an advertiser.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_advertiser_assigned_targeting_options_response import ListAdvertiserAssignedTargetingOptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
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
    api_instance = openapi_client.AdvertisersApi(api_client)
    advertiser_id = 'advertiser_id_example' # str | Required. The ID of the advertiser.
    targeting_type = 'targeting_type_example' # str | Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL`
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
    filter = 'filter_example' # str | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` with ID 123456: `assignedTargetingOptionId=\"123456\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `assignedTargetingOptionId desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned. (optional)

    try:
        api_response = api_instance.displayvideo_advertisers_targeting_types_assigned_targeting_options_list(advertiser_id, targeting_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AdvertisersApi->displayvideo_advertisers_targeting_types_assigned_targeting_options_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertisersApi->displayvideo_advertisers_targeting_types_assigned_targeting_options_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advertiser_id** | **str**| Required. The ID of the advertiser. | 
 **targeting_type** | **str**| Required. Identifies the type of assigned targeting options to list. Supported targeting types: * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_YOUTUBE_VIDEO&#x60; * &#x60;TARGETING_TYPE_YOUTUBE_CHANNEL&#x60; | 
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
 **filter** | **str**| Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the &#x60;OR&#x60; logical operator. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;assignedTargetingOptionId&#x60; Examples: * &#x60;AssignedTargetingOption&#x60; with ID 123456: &#x60;assignedTargetingOptionId&#x3D;\&quot;123456\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;assignedTargetingOptionId&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;assignedTargetingOptionId desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;5000&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListAdvertiserAssignedTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 

### Return type

[**ListAdvertiserAssignedTargetingOptionsResponse**](ListAdvertiserAssignedTargetingOptionsResponse.md)

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

