# GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionPath

The path defining of dimensions defining a listing group filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[GoogleAdsSearchads360V0ResourcesListingGroupFilterDimension]**](GoogleAdsSearchads360V0ResourcesListingGroupFilterDimension.md) | Output only. The complete path of dimensions through the listing group filter hierarchy (excluding the root node) to this listing group filter. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_listing_group_filter_dimension_path import GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionPath

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionPath from a JSON string
google_ads_searchads360_v0_resources_listing_group_filter_dimension_path_instance = GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionPath.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionPath.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_listing_group_filter_dimension_path_dict = google_ads_searchads360_v0_resources_listing_group_filter_dimension_path_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionPath from a dict
google_ads_searchads360_v0_resources_listing_group_filter_dimension_path_from_dict = GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionPath.from_dict(google_ads_searchads360_v0_resources_listing_group_filter_dimension_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


