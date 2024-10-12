# GoogleAdsSearchads360V0ResourcesAssetGroupListingGroupFilter

AssetGroupListingGroupFilter represents a listing group filter tree node in an asset group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_group** | **str** | Immutable. The asset group which this asset group listing group filter is part of. | [optional] 
**case_value** | [**GoogleAdsSearchads360V0ResourcesListingGroupFilterDimension**](GoogleAdsSearchads360V0ResourcesListingGroupFilterDimension.md) |  | [optional] 
**id** | **str** | Output only. The ID of the ListingGroupFilter. | [optional] [readonly] 
**parent_listing_group_filter** | **str** | Immutable. Resource name of the parent listing group subdivision. Null for the root listing group filter node. | [optional] 
**path** | [**GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionPath**](GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionPath.md) |  | [optional] 
**resource_name** | **str** | Immutable. The resource name of the asset group listing group filter. Asset group listing group filter resource name have the form: &#x60;customers/{customer_id}/assetGroupListingGroupFilters/{asset_group_id}~{listing_group_filter_id}&#x60; | [optional] 
**type** | **str** | Immutable. Type of a listing group filter node. | [optional] 
**vertical** | **str** | Immutable. The vertical the current node tree represents. All nodes in the same tree must belong to the same vertical. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_asset_group_listing_group_filter import GoogleAdsSearchads360V0ResourcesAssetGroupListingGroupFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAssetGroupListingGroupFilter from a JSON string
google_ads_searchads360_v0_resources_asset_group_listing_group_filter_instance = GoogleAdsSearchads360V0ResourcesAssetGroupListingGroupFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAssetGroupListingGroupFilter.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_asset_group_listing_group_filter_dict = google_ads_searchads360_v0_resources_asset_group_listing_group_filter_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAssetGroupListingGroupFilter from a dict
google_ads_searchads360_v0_resources_asset_group_listing_group_filter_from_dict = GoogleAdsSearchads360V0ResourcesAssetGroupListingGroupFilter.from_dict(google_ads_searchads360_v0_resources_asset_group_listing_group_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


