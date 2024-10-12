# GoogleAdsSearchads360V0CommonAssetInteractionTarget

An AssetInteractionTarget segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** | The asset resource name. | [optional] 
**interaction_on_this_asset** | **bool** | Only used with CustomerAsset, CampaignAsset and AdGroupAsset metrics. Indicates whether the interaction metrics occurred on the asset itself or a different asset or ad unit. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_asset_interaction_target import GoogleAdsSearchads360V0CommonAssetInteractionTarget

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonAssetInteractionTarget from a JSON string
google_ads_searchads360_v0_common_asset_interaction_target_instance = GoogleAdsSearchads360V0CommonAssetInteractionTarget.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonAssetInteractionTarget.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_asset_interaction_target_dict = google_ads_searchads360_v0_common_asset_interaction_target_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonAssetInteractionTarget from a dict
google_ads_searchads360_v0_common_asset_interaction_target_from_dict = GoogleAdsSearchads360V0CommonAssetInteractionTarget.from_dict(google_ads_searchads360_v0_common_asset_interaction_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


