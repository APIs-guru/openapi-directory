# GoogleAdsSearchads360V0ResourcesAssetGroup

An asset group. AssetGroupAsset is used to link an asset to the asset group. AssetGroupSignal is used to associate a signal to an asset group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_strength** | **str** | Output only. Overall ad strength of this asset group. | [optional] [readonly] 
**campaign** | **str** | Immutable. The campaign with which this asset group is associated. The asset which is linked to the asset group. | [optional] 
**final_mobile_urls** | **List[str]** | A list of final mobile URLs after all cross domain redirects. In performance max, by default, the urls are eligible for expansion unless opted out. | [optional] 
**final_urls** | **List[str]** | A list of final URLs after all cross domain redirects. In performance max, by default, the urls are eligible for expansion unless opted out. | [optional] 
**id** | **str** | Output only. The ID of the asset group. | [optional] [readonly] 
**name** | **str** | Required. Name of the asset group. Required. It must have a minimum length of 1 and maximum length of 128. It must be unique under a campaign. | [optional] 
**path1** | **str** | First part of text that may appear appended to the url displayed in the ad. | [optional] 
**path2** | **str** | Second part of text that may appear appended to the url displayed in the ad. This field can only be set when path1 is set. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the asset group. Asset group resource names have the form: &#x60;customers/{customer_id}/assetGroups/{asset_group_id}&#x60; | [optional] 
**status** | **str** | The status of the asset group. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_asset_group import GoogleAdsSearchads360V0ResourcesAssetGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAssetGroup from a JSON string
google_ads_searchads360_v0_resources_asset_group_instance = GoogleAdsSearchads360V0ResourcesAssetGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAssetGroup.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_asset_group_dict = google_ads_searchads360_v0_resources_asset_group_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAssetGroup from a dict
google_ads_searchads360_v0_resources_asset_group_from_dict = GoogleAdsSearchads360V0ResourcesAssetGroup.from_dict(google_ads_searchads360_v0_resources_asset_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


