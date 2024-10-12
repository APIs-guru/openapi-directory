# GoogleAdsSearchads360V0ResourcesCampaignAsset

A link between a Campaign and an Asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** | Immutable. The asset which is linked to the campaign. | [optional] 
**campaign** | **str** | Immutable. The campaign to which the asset is linked. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the campaign asset. CampaignAsset resource names have the form: &#x60;customers/{customer_id}/campaignAssets/{campaign_id}~{asset_id}~{field_type}&#x60; | [optional] 
**status** | **str** | Output only. Status of the campaign asset. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign_asset import GoogleAdsSearchads360V0ResourcesCampaignAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignAsset from a JSON string
google_ads_searchads360_v0_resources_campaign_asset_instance = GoogleAdsSearchads360V0ResourcesCampaignAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaignAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_asset_dict = google_ads_searchads360_v0_resources_campaign_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignAsset from a dict
google_ads_searchads360_v0_resources_campaign_asset_from_dict = GoogleAdsSearchads360V0ResourcesCampaignAsset.from_dict(google_ads_searchads360_v0_resources_campaign_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


