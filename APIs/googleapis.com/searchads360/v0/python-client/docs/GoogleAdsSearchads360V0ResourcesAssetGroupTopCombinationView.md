# GoogleAdsSearchads360V0ResourcesAssetGroupTopCombinationView

A view on the usage of ad group ad asset combination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_group_top_combinations** | [**List[GoogleAdsSearchads360V0ResourcesAssetGroupAssetCombinationData]**](GoogleAdsSearchads360V0ResourcesAssetGroupAssetCombinationData.md) | Output only. The top combinations of assets that served together. | [optional] [readonly] 
**resource_name** | **str** | Output only. The resource name of the asset group top combination view. AssetGroup Top Combination view resource names have the form: &#x60;\&quot;customers/{customer_id}/assetGroupTopCombinationViews/{asset_group_id}~{asset_combination_category}\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_asset_group_top_combination_view import GoogleAdsSearchads360V0ResourcesAssetGroupTopCombinationView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAssetGroupTopCombinationView from a JSON string
google_ads_searchads360_v0_resources_asset_group_top_combination_view_instance = GoogleAdsSearchads360V0ResourcesAssetGroupTopCombinationView.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAssetGroupTopCombinationView.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_asset_group_top_combination_view_dict = google_ads_searchads360_v0_resources_asset_group_top_combination_view_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAssetGroupTopCombinationView from a dict
google_ads_searchads360_v0_resources_asset_group_top_combination_view_from_dict = GoogleAdsSearchads360V0ResourcesAssetGroupTopCombinationView.from_dict(google_ads_searchads360_v0_resources_asset_group_top_combination_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


