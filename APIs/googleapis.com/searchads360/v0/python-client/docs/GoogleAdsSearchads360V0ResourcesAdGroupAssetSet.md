# GoogleAdsSearchads360V0ResourcesAdGroupAssetSet

AdGroupAssetSet is the linkage between an ad group and an asset set. Creating an AdGroupAssetSet links an asset set with an ad group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group** | **str** | Immutable. The ad group to which this asset set is linked. | [optional] 
**asset_set** | **str** | Immutable. The asset set which is linked to the ad group. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the ad group asset set. Ad group asset set resource names have the form: &#x60;customers/{customer_id}/adGroupAssetSets/{ad_group_id}~{asset_set_id}&#x60; | [optional] 
**status** | **str** | Output only. The status of the ad group asset set. Read-only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_ad_group_asset_set import GoogleAdsSearchads360V0ResourcesAdGroupAssetSet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupAssetSet from a JSON string
google_ads_searchads360_v0_resources_ad_group_asset_set_instance = GoogleAdsSearchads360V0ResourcesAdGroupAssetSet.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAdGroupAssetSet.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_ad_group_asset_set_dict = google_ads_searchads360_v0_resources_ad_group_asset_set_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupAssetSet from a dict
google_ads_searchads360_v0_resources_ad_group_asset_set_from_dict = GoogleAdsSearchads360V0ResourcesAdGroupAssetSet.from_dict(google_ads_searchads360_v0_resources_ad_group_asset_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


