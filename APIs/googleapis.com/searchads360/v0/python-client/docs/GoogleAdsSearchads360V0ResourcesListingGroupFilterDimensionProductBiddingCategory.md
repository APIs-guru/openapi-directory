# GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionProductBiddingCategory

One element of a bidding category at a certain level. Top-level categories are at level 1, their children at level 2, and so on. We currently support up to 5 levels. The user must specify a dimension type that indicates the level of the category. All cases of the same subdivision must have the same dimension type (category level).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436 | [optional] 
**level** | **str** | Indicates the level of the category in the taxonomy. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_listing_group_filter_dimension_product_bidding_category import GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionProductBiddingCategory

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionProductBiddingCategory from a JSON string
google_ads_searchads360_v0_resources_listing_group_filter_dimension_product_bidding_category_instance = GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionProductBiddingCategory.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionProductBiddingCategory.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_listing_group_filter_dimension_product_bidding_category_dict = google_ads_searchads360_v0_resources_listing_group_filter_dimension_product_bidding_category_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionProductBiddingCategory from a dict
google_ads_searchads360_v0_resources_listing_group_filter_dimension_product_bidding_category_from_dict = GoogleAdsSearchads360V0ResourcesListingGroupFilterDimensionProductBiddingCategory.from_dict(google_ads_searchads360_v0_resources_listing_group_filter_dimension_product_bidding_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


