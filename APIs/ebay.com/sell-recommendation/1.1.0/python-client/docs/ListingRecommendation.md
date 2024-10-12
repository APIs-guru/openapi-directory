# ListingRecommendation

A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listing_id** | **str** | An ID that identifies the active listing associated with the eBay recommendations. | [optional] 
**marketing** | [**MarketingRecommendation**](MarketingRecommendation.md) |  | [optional] 

## Example

```python
from openapi_client.models.listing_recommendation import ListingRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of ListingRecommendation from a JSON string
listing_recommendation_instance = ListingRecommendation.from_json(json)
# print the JSON string representation of the object
print(ListingRecommendation.to_json())

# convert the object into a dict
listing_recommendation_dict = listing_recommendation_instance.to_dict()
# create an instance of ListingRecommendation from a dict
listing_recommendation_from_dict = ListingRecommendation.from_dict(listing_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


