# GoogleCloudRecommendationengineV1beta1ListUserEventsResponse

Response message for ListUserEvents method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If empty, the list is complete. If nonempty, the token to pass to the next request&#39;s ListUserEvents.page_token. | [optional] 
**user_events** | [**List[GoogleCloudRecommendationengineV1beta1UserEvent]**](GoogleCloudRecommendationengineV1beta1UserEvent.md) | The user events. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_list_user_events_response import GoogleCloudRecommendationengineV1beta1ListUserEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ListUserEventsResponse from a JSON string
google_cloud_recommendationengine_v1beta1_list_user_events_response_instance = GoogleCloudRecommendationengineV1beta1ListUserEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ListUserEventsResponse.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_list_user_events_response_dict = google_cloud_recommendationengine_v1beta1_list_user_events_response_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ListUserEventsResponse from a dict
google_cloud_recommendationengine_v1beta1_list_user_events_response_from_dict = GoogleCloudRecommendationengineV1beta1ListUserEventsResponse.from_dict(google_cloud_recommendationengine_v1beta1_list_user_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


