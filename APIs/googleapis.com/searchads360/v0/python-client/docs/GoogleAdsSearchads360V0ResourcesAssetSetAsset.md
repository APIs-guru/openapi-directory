# GoogleAdsSearchads360V0ResourcesAssetSetAsset

AssetSetAsset is the link between an asset and an asset set. Adding an AssetSetAsset links an asset with an asset set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** | Immutable. The asset which this asset set asset is linking to. | [optional] 
**asset_set** | **str** | Immutable. The asset set which this asset set asset is linking to. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the asset set asset. Asset set asset resource names have the form: &#x60;customers/{customer_id}/assetSetAssets/{asset_set_id}~{asset_id}&#x60; | [optional] 
**status** | **str** | Output only. The status of the asset set asset. Read-only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_asset_set_asset import GoogleAdsSearchads360V0ResourcesAssetSetAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAssetSetAsset from a JSON string
google_ads_searchads360_v0_resources_asset_set_asset_instance = GoogleAdsSearchads360V0ResourcesAssetSetAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAssetSetAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_asset_set_asset_dict = google_ads_searchads360_v0_resources_asset_set_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAssetSetAsset from a dict
google_ads_searchads360_v0_resources_asset_set_asset_from_dict = GoogleAdsSearchads360V0ResourcesAssetSetAsset.from_dict(google_ads_searchads360_v0_resources_asset_set_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


