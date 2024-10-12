# GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting

Represents a collection of settings related to ads geotargeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative_geo_target_type** | **str** | The setting used for negative geotargeting in this particular campaign. | [optional] 
**positive_geo_target_type** | **str** | The setting used for positive geotargeting in this particular campaign. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign_geo_target_type_setting import GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting from a JSON string
google_ads_searchads360_v0_resources_campaign_geo_target_type_setting_instance = GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_geo_target_type_setting_dict = google_ads_searchads360_v0_resources_campaign_geo_target_type_setting_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting from a dict
google_ads_searchads360_v0_resources_campaign_geo_target_type_setting_from_dict = GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting.from_dict(google_ads_searchads360_v0_resources_campaign_geo_target_type_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


