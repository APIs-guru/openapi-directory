# GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest

Request message for CatalogRejoin method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_event_rejoin_scope** | **str** | Required. The type of the catalog rejoin to define the scope and range of the user events to be rejoined with catalog items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_rejoin_user_events_request import GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest from a JSON string
google_cloud_recommendationengine_v1beta1_rejoin_user_events_request_instance = GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_rejoin_user_events_request_dict = google_cloud_recommendationengine_v1beta1_rejoin_user_events_request_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest from a dict
google_cloud_recommendationengine_v1beta1_rejoin_user_events_request_from_dict = GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest.from_dict(google_cloud_recommendationengine_v1beta1_rejoin_user_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


