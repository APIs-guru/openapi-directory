# GoogleAdsSearchads360V0CommonUnifiedSitelinkAsset

A unified sitelink asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_schedule_targets** | [**List[GoogleAdsSearchads360V0CommonAdScheduleInfo]**](GoogleAdsSearchads360V0CommonAdScheduleInfo.md) | List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total. | [optional] 
**description1** | **str** | First line of the description for the sitelink. If set, the length should be between 1 and 35, inclusive, and description2 must also be set. | [optional] 
**description2** | **str** | Second line of the description for the sitelink. If set, the length should be between 1 and 35, inclusive, and description1 must also be set. | [optional] 
**end_date** | **str** | Last date of when this asset is effective and still serving, in yyyy-MM-dd format. | [optional] 
**link_text** | **str** | URL display text for the sitelink. The length of this string should be between 1 and 25, inclusive. | [optional] 
**mobile_preferred** | **bool** | Whether the preference is for the sitelink asset to be displayed on mobile devices. Applies to Microsoft Ads. | [optional] 
**start_date** | **str** | Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. | [optional] 
**tracking_id** | **str** | ID used for tracking clicks for the sitelink asset. This is a Yahoo! Japan only field. | [optional] 
**use_searcher_time_zone** | **bool** | Whether to show the sitelink asset in search user&#39;s time zone. Applies to Microsoft Ads. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_unified_sitelink_asset import GoogleAdsSearchads360V0CommonUnifiedSitelinkAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonUnifiedSitelinkAsset from a JSON string
google_ads_searchads360_v0_common_unified_sitelink_asset_instance = GoogleAdsSearchads360V0CommonUnifiedSitelinkAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonUnifiedSitelinkAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_unified_sitelink_asset_dict = google_ads_searchads360_v0_common_unified_sitelink_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonUnifiedSitelinkAsset from a dict
google_ads_searchads360_v0_common_unified_sitelink_asset_from_dict = GoogleAdsSearchads360V0CommonUnifiedSitelinkAsset.from_dict(google_ads_searchads360_v0_common_unified_sitelink_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


