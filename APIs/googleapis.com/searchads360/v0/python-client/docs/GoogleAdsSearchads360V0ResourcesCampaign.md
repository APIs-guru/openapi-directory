# GoogleAdsSearchads360V0ResourcesCampaign

A campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_serving_optimization_status** | **str** | The ad serving optimization status of the campaign. | [optional] 
**advertising_channel_sub_type** | **str** | Immutable. Optional refinement to &#x60;advertising_channel_type&#x60;. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed. | [optional] 
**advertising_channel_type** | **str** | Immutable. The primary serving target for ads within the campaign. The targeting options can be refined in &#x60;network_settings&#x60;. This field is required and should not be empty when creating new campaigns. Can be set only when creating campaigns. After the campaign is created, the field can not be changed. | [optional] 
**bidding_strategy** | **str** | Portfolio bidding strategy used by campaign. | [optional] 
**bidding_strategy_system_status** | **str** | Output only. The system status of the campaign&#39;s bidding strategy. | [optional] [readonly] 
**bidding_strategy_type** | **str** | Output only. The type of bidding strategy. A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the &#x60;bidding_strategy&#x60; field to create a portfolio bidding strategy. This field is read-only. | [optional] [readonly] 
**campaign_budget** | **str** | The budget of the campaign. | [optional] 
**create_time** | **str** | Output only. The timestamp when this campaign was created. The timestamp is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss\&quot; format. create_time will be deprecated in v1. Use creation_time instead. | [optional] [readonly] 
**creation_time** | **str** | Output only. The timestamp when this campaign was created. The timestamp is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss\&quot; format. | [optional] [readonly] 
**dynamic_search_ads_setting** | [**GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting**](GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting.md) |  | [optional] 
**end_date** | **str** | The last day of the campaign in serving customer&#39;s timezone in YYYY-MM-DD format. On create, defaults to 2037-12-30, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 2037-12-30. | [optional] 
**engine_id** | **str** | Output only. ID of the campaign in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use \&quot;campaign.id\&quot; instead. | [optional] [readonly] 
**excluded_parent_asset_field_types** | **List[str]** | The asset field types that should be excluded from this campaign. Asset links with these field types will not be inherited by this campaign from the upper level. | [optional] 
**final_url_suffix** | **str** | Suffix used to append query parameters to landing pages that are served with parallel tracking. | [optional] 
**frequency_caps** | **List[object]** | A list that limits how often each user will see this campaign&#39;s ads. | [optional] 
**geo_target_type_setting** | [**GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting**](GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting.md) |  | [optional] 
**id** | **str** | Output only. The ID of the campaign. | [optional] [readonly] 
**labels** | **List[str]** | Output only. The resource names of labels attached to this campaign. | [optional] [readonly] 
**last_modified_time** | **str** | Output only. The datetime when this campaign was last modified. The datetime is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss.ssssss\&quot; format. | [optional] [readonly] 
**manual_cpa** | **object** | Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action. | [optional] 
**manual_cpc** | [**GoogleAdsSearchads360V0CommonManualCpc**](GoogleAdsSearchads360V0CommonManualCpc.md) |  | [optional] 
**manual_cpm** | **object** | Manual impression-based bidding where user pays per thousand impressions. | [optional] 
**maximize_conversion_value** | [**GoogleAdsSearchads360V0CommonMaximizeConversionValue**](GoogleAdsSearchads360V0CommonMaximizeConversionValue.md) |  | [optional] 
**maximize_conversions** | [**GoogleAdsSearchads360V0CommonMaximizeConversions**](GoogleAdsSearchads360V0CommonMaximizeConversions.md) |  | [optional] 
**name** | **str** | The name of the campaign. This field is required and should not be empty when creating new campaigns. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. | [optional] 
**network_settings** | [**GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings**](GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings.md) |  | [optional] 
**optimization_goal_setting** | [**GoogleAdsSearchads360V0ResourcesCampaignOptimizationGoalSetting**](GoogleAdsSearchads360V0ResourcesCampaignOptimizationGoalSetting.md) |  | [optional] 
**percent_cpc** | [**GoogleAdsSearchads360V0CommonPercentCpc**](GoogleAdsSearchads360V0CommonPercentCpc.md) |  | [optional] 
**real_time_bidding_setting** | [**GoogleAdsSearchads360V0CommonRealTimeBiddingSetting**](GoogleAdsSearchads360V0CommonRealTimeBiddingSetting.md) |  | [optional] 
**resource_name** | **str** | Immutable. The resource name of the campaign. Campaign resource names have the form: &#x60;customers/{customer_id}/campaigns/{campaign_id}&#x60; | [optional] 
**selective_optimization** | [**GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization**](GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization.md) |  | [optional] 
**serving_status** | **str** | Output only. The ad serving status of the campaign. | [optional] [readonly] 
**shopping_setting** | [**GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting**](GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting.md) |  | [optional] 
**start_date** | **str** | The date when campaign started in serving customer&#39;s timezone in YYYY-MM-DD format. | [optional] 
**status** | **str** | The status of the campaign. When a new campaign is added, the status defaults to ENABLED. | [optional] 
**target_cpa** | [**GoogleAdsSearchads360V0CommonTargetCpa**](GoogleAdsSearchads360V0CommonTargetCpa.md) |  | [optional] 
**target_cpm** | **object** | Target CPM (cost per thousand impressions) is an automated bidding strategy that sets bids to optimize performance given the target CPM you set. | [optional] 
**target_impression_share** | [**GoogleAdsSearchads360V0CommonTargetImpressionShare**](GoogleAdsSearchads360V0CommonTargetImpressionShare.md) |  | [optional] 
**target_roas** | [**GoogleAdsSearchads360V0CommonTargetRoas**](GoogleAdsSearchads360V0CommonTargetRoas.md) |  | [optional] 
**target_spend** | [**GoogleAdsSearchads360V0CommonTargetSpend**](GoogleAdsSearchads360V0CommonTargetSpend.md) |  | [optional] 
**tracking_setting** | [**GoogleAdsSearchads360V0ResourcesCampaignTrackingSetting**](GoogleAdsSearchads360V0ResourcesCampaignTrackingSetting.md) |  | [optional] 
**tracking_url_template** | **str** | The URL template for constructing a tracking URL. | [optional] 
**url_custom_parameters** | [**List[GoogleAdsSearchads360V0CommonCustomParameter]**](GoogleAdsSearchads360V0CommonCustomParameter.md) | The list of mappings used to substitute custom parameter tags in a &#x60;tracking_url_template&#x60;, &#x60;final_urls&#x60;, or &#x60;mobile_final_urls&#x60;. | [optional] 
**url_expansion_opt_out** | **bool** | Represents opting out of URL expansion to more targeted URLs. If opted out (true), only the final URLs in the asset group or URLs specified in the advertiser&#39;s Google Merchant Center or business data feeds are targeted. If opted in (false), the entire domain will be targeted. This field can only be set for Performance Max campaigns, where the default value is false. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign import GoogleAdsSearchads360V0ResourcesCampaign

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaign from a JSON string
google_ads_searchads360_v0_resources_campaign_instance = GoogleAdsSearchads360V0ResourcesCampaign.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaign.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_dict = google_ads_searchads360_v0_resources_campaign_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaign from a dict
google_ads_searchads360_v0_resources_campaign_from_dict = GoogleAdsSearchads360V0ResourcesCampaign.from_dict(google_ads_searchads360_v0_resources_campaign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


