# GoogleAdsSearchads360V0ResourcesCampaignAssetSet

CampaignAssetSet is the linkage between a campaign and an asset set. Adding a CampaignAssetSet links an asset set with a campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_set** | **str** | Immutable. The asset set which is linked to the campaign. | [optional] 
**campaign** | **str** | Immutable. The campaign to which this asset set is linked. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the campaign asset set. Asset set asset resource names have the form: &#x60;customers/{customer_id}/campaignAssetSets/{campaign_id}~{asset_set_id}&#x60; | [optional] 
**status** | **str** | Output only. The status of the campaign asset set asset. Read-only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign_asset_set import GoogleAdsSearchads360V0ResourcesCampaignAssetSet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignAssetSet from a JSON string
google_ads_searchads360_v0_resources_campaign_asset_set_instance = GoogleAdsSearchads360V0ResourcesCampaignAssetSet.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaignAssetSet.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_asset_set_dict = google_ads_searchads360_v0_resources_campaign_asset_set_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignAssetSet from a dict
google_ads_searchads360_v0_resources_campaign_asset_set_from_dict = GoogleAdsSearchads360V0ResourcesCampaignAssetSet.from_dict(google_ads_searchads360_v0_resources_campaign_asset_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


