# PagedListingRecommendationCollection

The high-level object used to return a set of Promoted Listings ad recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URI of the current page of results from the result set. | [optional] 
**limit** | **int** | The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter. | [optional] 
**listing_recommendations** | [**List[ListingRecommendation]**](ListingRecommendation.md) | Returns a list of listingRecommendations, where each element in the list offers recommendations for the associated listingId. Which elements are returned depend on how you structure the request. For example, if you request recommendations for all of a sellers listings (by leaving the request payload empty), ad recommendations are returned only for those listings where promoteWithAd is set to RECOMMENDED. | [optional] 
**next** | **str** | The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048 | [optional] 
**offset** | **int** | The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0. | [optional] 
**prev** | **str** | The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048 | [optional] 
**total** | **int** | The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0. | [optional] 

## Example

```python
from openapi_client.models.paged_listing_recommendation_collection import PagedListingRecommendationCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PagedListingRecommendationCollection from a JSON string
paged_listing_recommendation_collection_instance = PagedListingRecommendationCollection.from_json(json)
# print the JSON string representation of the object
print(PagedListingRecommendationCollection.to_json())

# convert the object into a dict
paged_listing_recommendation_collection_dict = paged_listing_recommendation_collection_instance.to_dict()
# create an instance of PagedListingRecommendationCollection from a dict
paged_listing_recommendation_collection_from_dict = PagedListingRecommendationCollection.from_dict(paged_listing_recommendation_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


