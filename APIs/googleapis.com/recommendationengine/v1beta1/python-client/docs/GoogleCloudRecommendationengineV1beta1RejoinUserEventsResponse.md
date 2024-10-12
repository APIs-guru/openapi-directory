# GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse

Response message for RejoinUserEvents method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rejoined_user_events_count** | **str** | Number of user events that were joined with latest catalog items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_rejoin_user_events_response import GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse from a JSON string
google_cloud_recommendationengine_v1beta1_rejoin_user_events_response_instance = GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_rejoin_user_events_response_dict = google_cloud_recommendationengine_v1beta1_rejoin_user_events_response_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse from a dict
google_cloud_recommendationengine_v1beta1_rejoin_user_events_response_from_dict = GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse.from_dict(google_cloud_recommendationengine_v1beta1_rejoin_user_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


