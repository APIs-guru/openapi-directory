# FindListingRecommendationRequest

An list of listing ID values for which you want Promoted Listings ad configuration information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listing_ids** | **List[str]** | A comma-separated list of listing IDs for which you want Promoted Listings ad configuration information. Currently, this method accepts only listingId values from the Trading API. Max: 500 listing IDs | [optional] 

## Example

```python
from openapi_client.models.find_listing_recommendation_request import FindListingRecommendationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FindListingRecommendationRequest from a JSON string
find_listing_recommendation_request_instance = FindListingRecommendationRequest.from_json(json)
# print the JSON string representation of the object
print(FindListingRecommendationRequest.to_json())

# convert the object into a dict
find_listing_recommendation_request_dict = find_listing_recommendation_request_instance.to_dict()
# create an instance of FindListingRecommendationRequest from a dict
find_listing_recommendation_request_from_dict = FindListingRecommendationRequest.from_dict(find_listing_recommendation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


