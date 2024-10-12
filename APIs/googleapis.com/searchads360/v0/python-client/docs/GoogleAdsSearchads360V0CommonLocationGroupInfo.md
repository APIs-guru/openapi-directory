# GoogleAdsSearchads360V0CommonLocationGroupInfo

A radius around a list of locations specified through a feed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feed_item_sets** | **List[str]** | FeedItemSets whose FeedItems are targeted. If multiple IDs are specified, then all items that appear in at least one set are targeted. This field cannot be used with geo_target_constants. This is optional and can only be set in CREATE operations. | [optional] 
**geo_target_constants** | **List[str]** | Geo target constant(s) restricting the scope of the geographic area within the feed. Currently only one geo target constant is allowed. | [optional] 
**radius** | **str** | Distance in units specifying the radius around targeted locations. This is required and must be set in CREATE operations. | [optional] 
**radius_units** | **str** | Unit of the radius. Miles and meters are supported for geo target constants. Milli miles and meters are supported for feed item sets. This is required and must be set in CREATE operations. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_location_group_info import GoogleAdsSearchads360V0CommonLocationGroupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonLocationGroupInfo from a JSON string
google_ads_searchads360_v0_common_location_group_info_instance = GoogleAdsSearchads360V0CommonLocationGroupInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonLocationGroupInfo.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_location_group_info_dict = google_ads_searchads360_v0_common_location_group_info_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonLocationGroupInfo from a dict
google_ads_searchads360_v0_common_location_group_info_from_dict = GoogleAdsSearchads360V0CommonLocationGroupInfo.from_dict(google_ads_searchads360_v0_common_location_group_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


