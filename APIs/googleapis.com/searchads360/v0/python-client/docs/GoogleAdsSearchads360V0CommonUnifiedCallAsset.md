# GoogleAdsSearchads360V0CommonUnifiedCallAsset

A unified call asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_schedule_targets** | [**List[GoogleAdsSearchads360V0CommonAdScheduleInfo]**](GoogleAdsSearchads360V0CommonAdScheduleInfo.md) | List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total. | [optional] 
**call_conversion_action** | **str** | The conversion action to attribute a call conversion to. If not set, the default conversion action is used. This field only has effect if call_conversion_reporting_state is set to USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION. | [optional] 
**call_conversion_reporting_state** | **str** | Output only. Indicates whether this CallAsset should use its own call conversion setting, follow the account level setting, or disable call conversion. | [optional] [readonly] 
**call_only** | **bool** | Whether the call only shows the phone number without a link to the website. Applies to Microsoft Ads. | [optional] 
**call_tracking_enabled** | **bool** | Whether the call should be enabled on call tracking. Applies to Microsoft Ads. | [optional] 
**country_code** | **str** | Two-letter country code of the phone number. Examples: &#39;US&#39;, &#39;us&#39;. | [optional] 
**end_date** | **str** | Last date of when this asset is effective and still serving, in yyyy-MM-dd format. | [optional] 
**phone_number** | **str** | The advertiser&#39;s raw phone number. Examples: &#39;1234567890&#39;, &#39;(123)456-7890&#39; | [optional] 
**start_date** | **str** | Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. | [optional] 
**use_searcher_time_zone** | **bool** | Whether to show the call extension in search user&#39;s time zone. Applies to Microsoft Ads. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_unified_call_asset import GoogleAdsSearchads360V0CommonUnifiedCallAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonUnifiedCallAsset from a JSON string
google_ads_searchads360_v0_common_unified_call_asset_instance = GoogleAdsSearchads360V0CommonUnifiedCallAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonUnifiedCallAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_unified_call_asset_dict = google_ads_searchads360_v0_common_unified_call_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonUnifiedCallAsset from a dict
google_ads_searchads360_v0_common_unified_call_asset_from_dict = GoogleAdsSearchads360V0CommonUnifiedCallAsset.from_dict(google_ads_searchads360_v0_common_unified_call_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


