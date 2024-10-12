# GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting

DoubleClick Campaign Manager (DCM) setting for a manager customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | Output only. ID of the Campaign Manager advertiser associated with this customer. | [optional] [readonly] 
**network_id** | **str** | Output only. ID of the Campaign Manager network associated with this customer. | [optional] [readonly] 
**time_zone** | **str** | Output only. Time zone of the Campaign Manager network associated with this customer in IANA Time Zone Database format, such as America/New_York. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_double_click_campaign_manager_setting import GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting from a JSON string
google_ads_searchads360_v0_resources_double_click_campaign_manager_setting_instance = GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_double_click_campaign_manager_setting_dict = google_ads_searchads360_v0_resources_double_click_campaign_manager_setting_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting from a dict
google_ads_searchads360_v0_resources_double_click_campaign_manager_setting_from_dict = GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting.from_dict(google_ads_searchads360_v0_resources_double_click_campaign_manager_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


