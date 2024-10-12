# GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization

Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards. This feature only applies to app campaigns that use MULTI_CHANNEL as AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as AdvertisingChannelSubType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_actions** | **List[str]** | The selected set of conversion actions for optimizing this campaign. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign_selective_optimization import GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization from a JSON string
google_ads_searchads360_v0_resources_campaign_selective_optimization_instance = GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_selective_optimization_dict = google_ads_searchads360_v0_resources_campaign_selective_optimization_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization from a dict
google_ads_searchads360_v0_resources_campaign_selective_optimization_from_dict = GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization.from_dict(google_ads_searchads360_v0_resources_campaign_selective_optimization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


