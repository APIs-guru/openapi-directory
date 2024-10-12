# GoogleAdsSearchads360V0ResourcesAssetSet

An asset set representing a collection of assets. Use AssetSetAsset to link an asset to the asset set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Output only. The ID of the asset set. | [optional] [readonly] 
**resource_name** | **str** | Immutable. The resource name of the asset set. Asset set resource names have the form: &#x60;customers/{customer_id}/assetSets/{asset_set_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_asset_set import GoogleAdsSearchads360V0ResourcesAssetSet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAssetSet from a JSON string
google_ads_searchads360_v0_resources_asset_set_instance = GoogleAdsSearchads360V0ResourcesAssetSet.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAssetSet.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_asset_set_dict = google_ads_searchads360_v0_resources_asset_set_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAssetSet from a dict
google_ads_searchads360_v0_resources_asset_set_from_dict = GoogleAdsSearchads360V0ResourcesAssetSet.from_dict(google_ads_searchads360_v0_resources_asset_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


