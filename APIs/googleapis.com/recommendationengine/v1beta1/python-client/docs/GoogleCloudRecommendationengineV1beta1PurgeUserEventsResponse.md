# GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse

Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purged_events_count** | **str** | The total count of events purged as a result of the operation. | [optional] 
**user_events_sample** | [**List[GoogleCloudRecommendationengineV1beta1UserEvent]**](GoogleCloudRecommendationengineV1beta1UserEvent.md) | A sampling of events deleted (or will be deleted) depending on the &#x60;force&#x60; property in the request. Max of 500 items will be returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_purge_user_events_response import GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse from a JSON string
google_cloud_recommendationengine_v1beta1_purge_user_events_response_instance = GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_purge_user_events_response_dict = google_cloud_recommendationengine_v1beta1_purge_user_events_response_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse from a dict
google_cloud_recommendationengine_v1beta1_purge_user_events_response_from_dict = GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse.from_dict(google_cloud_recommendationengine_v1beta1_purge_user_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


