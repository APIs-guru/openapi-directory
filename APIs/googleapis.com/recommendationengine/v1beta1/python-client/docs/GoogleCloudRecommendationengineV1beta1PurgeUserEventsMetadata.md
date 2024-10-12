# GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata

Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**operation_name** | **str** | The ID of the request / operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_purge_user_events_metadata import GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata from a JSON string
google_cloud_recommendationengine_v1beta1_purge_user_events_metadata_instance = GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_purge_user_events_metadata_dict = google_cloud_recommendationengine_v1beta1_purge_user_events_metadata_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata from a dict
google_cloud_recommendationengine_v1beta1_purge_user_events_metadata_from_dict = GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata.from_dict(google_cloud_recommendationengine_v1beta1_purge_user_events_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


