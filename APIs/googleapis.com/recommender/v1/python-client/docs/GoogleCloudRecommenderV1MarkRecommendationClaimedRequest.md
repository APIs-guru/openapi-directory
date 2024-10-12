# GoogleCloudRecommenderV1MarkRecommendationClaimedRequest

Request for the `MarkRecommendationClaimed` Method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Required. Fingerprint of the Recommendation. Provides optimistic locking. | [optional] 
**state_metadata** | **Dict[str, str]** | State properties to include with this state. Overwrites any existing &#x60;state_metadata&#x60;. Keys must match the regex &#x60;/^a-z0-9{0,62}$/&#x60;. Values must match the regex &#x60;/^[a-zA-Z0-9_./-]{0,255}$/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_mark_recommendation_claimed_request import GoogleCloudRecommenderV1MarkRecommendationClaimedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1MarkRecommendationClaimedRequest from a JSON string
google_cloud_recommender_v1_mark_recommendation_claimed_request_instance = GoogleCloudRecommenderV1MarkRecommendationClaimedRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1MarkRecommendationClaimedRequest.to_json())

# convert the object into a dict
google_cloud_recommender_v1_mark_recommendation_claimed_request_dict = google_cloud_recommender_v1_mark_recommendation_claimed_request_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1MarkRecommendationClaimedRequest from a dict
google_cloud_recommender_v1_mark_recommendation_claimed_request_from_dict = GoogleCloudRecommenderV1MarkRecommendationClaimedRequest.from_dict(google_cloud_recommender_v1_mark_recommendation_claimed_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


