# GoogleCloudRecommenderV1MarkInsightAcceptedRequest

Request for the `MarkInsightAccepted` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Required. Fingerprint of the Insight. Provides optimistic locking. | [optional] 
**state_metadata** | **Dict[str, str]** | Optional. State properties user wish to include with this state. Full replace of the current state_metadata. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_mark_insight_accepted_request import GoogleCloudRecommenderV1MarkInsightAcceptedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1MarkInsightAcceptedRequest from a JSON string
google_cloud_recommender_v1_mark_insight_accepted_request_instance = GoogleCloudRecommenderV1MarkInsightAcceptedRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1MarkInsightAcceptedRequest.to_json())

# convert the object into a dict
google_cloud_recommender_v1_mark_insight_accepted_request_dict = google_cloud_recommender_v1_mark_insight_accepted_request_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1MarkInsightAcceptedRequest from a dict
google_cloud_recommender_v1_mark_insight_accepted_request_from_dict = GoogleCloudRecommenderV1MarkInsightAcceptedRequest.from_dict(google_cloud_recommender_v1_mark_insight_accepted_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


