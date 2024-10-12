# GoogleAdsSearchads360V0ResourcesAssetGroupAsset

AssetGroupAsset is the link between an asset and an asset group. Adding an AssetGroupAsset links an asset with an asset group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** | Immutable. The asset which this asset group asset is linking. | [optional] 
**asset_group** | **str** | Immutable. The asset group which this asset group asset is linking. | [optional] 
**field_type** | **str** | The description of the placement of the asset within the asset group. For example: HEADLINE, YOUTUBE_VIDEO etc | [optional] 
**resource_name** | **str** | Immutable. The resource name of the asset group asset. Asset group asset resource name have the form: &#x60;customers/{customer_id}/assetGroupAssets/{asset_group_id}~{asset_id}~{field_type}&#x60; | [optional] 
**status** | **str** | The status of the link between an asset and asset group. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_asset_group_asset import GoogleAdsSearchads360V0ResourcesAssetGroupAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAssetGroupAsset from a JSON string
google_ads_searchads360_v0_resources_asset_group_asset_instance = GoogleAdsSearchads360V0ResourcesAssetGroupAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAssetGroupAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_asset_group_asset_dict = google_ads_searchads360_v0_resources_asset_group_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAssetGroupAsset from a dict
google_ads_searchads360_v0_resources_asset_group_asset_from_dict = GoogleAdsSearchads360V0ResourcesAssetGroupAsset.from_dict(google_ads_searchads360_v0_resources_asset_group_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


