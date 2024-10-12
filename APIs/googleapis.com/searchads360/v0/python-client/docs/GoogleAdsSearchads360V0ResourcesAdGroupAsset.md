# GoogleAdsSearchads360V0ResourcesAdGroupAsset

A link between an ad group and an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group** | **str** | Required. Immutable. The ad group to which the asset is linked. | [optional] 
**asset** | **str** | Required. Immutable. The asset which is linked to the ad group. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the ad group asset. AdGroupAsset resource names have the form: &#x60;customers/{customer_id}/adGroupAssets/{ad_group_id}~{asset_id}~{field_type}&#x60; | [optional] 
**status** | **str** | Status of the ad group asset. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_ad_group_asset import GoogleAdsSearchads360V0ResourcesAdGroupAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupAsset from a JSON string
google_ads_searchads360_v0_resources_ad_group_asset_instance = GoogleAdsSearchads360V0ResourcesAdGroupAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAdGroupAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_ad_group_asset_dict = google_ads_searchads360_v0_resources_ad_group_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupAsset from a dict
google_ads_searchads360_v0_resources_ad_group_asset_from_dict = GoogleAdsSearchads360V0ResourcesAdGroupAsset.from_dict(google_ads_searchads360_v0_resources_ad_group_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


