# GoogleCloudRecommenderV1MarkRecommendationDismissedRequest

Request for the `MarkRecommendationDismissed` Method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Fingerprint of the Recommendation. Provides optimistic locking. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_mark_recommendation_dismissed_request import GoogleCloudRecommenderV1MarkRecommendationDismissedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1MarkRecommendationDismissedRequest from a JSON string
google_cloud_recommender_v1_mark_recommendation_dismissed_request_instance = GoogleCloudRecommenderV1MarkRecommendationDismissedRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1MarkRecommendationDismissedRequest.to_json())

# convert the object into a dict
google_cloud_recommender_v1_mark_recommendation_dismissed_request_dict = google_cloud_recommender_v1_mark_recommendation_dismissed_request_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1MarkRecommendationDismissedRequest from a dict
google_cloud_recommender_v1_mark_recommendation_dismissed_request_from_dict = GoogleCloudRecommenderV1MarkRecommendationDismissedRequest.from_dict(google_cloud_recommender_v1_mark_recommendation_dismissed_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


