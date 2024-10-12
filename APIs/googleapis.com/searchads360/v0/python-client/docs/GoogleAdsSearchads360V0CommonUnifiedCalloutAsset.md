# GoogleAdsSearchads360V0CommonUnifiedCalloutAsset

A unified callout asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_schedule_targets** | [**List[GoogleAdsSearchads360V0CommonAdScheduleInfo]**](GoogleAdsSearchads360V0CommonAdScheduleInfo.md) | List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total. | [optional] 
**callout_text** | **str** | The callout text. The length of this string should be between 1 and 25, inclusive. | [optional] 
**end_date** | **str** | Last date of when this asset is effective and still serving, in yyyy-MM-dd format. | [optional] 
**start_date** | **str** | Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. | [optional] 
**use_searcher_time_zone** | **bool** | Whether to show the asset in search user&#39;s time zone. Applies to Microsoft Ads. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_unified_callout_asset import GoogleAdsSearchads360V0CommonUnifiedCalloutAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonUnifiedCalloutAsset from a JSON string
google_ads_searchads360_v0_common_unified_callout_asset_instance = GoogleAdsSearchads360V0CommonUnifiedCalloutAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonUnifiedCalloutAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_unified_callout_asset_dict = google_ads_searchads360_v0_common_unified_callout_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonUnifiedCalloutAsset from a dict
google_ads_searchads360_v0_common_unified_callout_asset_from_dict = GoogleAdsSearchads360V0CommonUnifiedCalloutAsset.from_dict(google_ads_searchads360_v0_common_unified_callout_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


