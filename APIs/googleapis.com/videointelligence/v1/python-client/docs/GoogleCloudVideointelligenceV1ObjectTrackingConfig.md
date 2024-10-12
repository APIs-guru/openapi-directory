# GoogleCloudVideointelligenceV1ObjectTrackingConfig

Config for OBJECT_TRACKING.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Model to use for object tracking. Supported values: \&quot;builtin/stable\&quot; (the default if unset) and \&quot;builtin/latest\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1_object_tracking_config import GoogleCloudVideointelligenceV1ObjectTrackingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1ObjectTrackingConfig from a JSON string
google_cloud_videointelligence_v1_object_tracking_config_instance = GoogleCloudVideointelligenceV1ObjectTrackingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1ObjectTrackingConfig.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1_object_tracking_config_dict = google_cloud_videointelligence_v1_object_tracking_config_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1ObjectTrackingConfig from a dict
google_cloud_videointelligence_v1_object_tracking_config_from_dict = GoogleCloudVideointelligenceV1ObjectTrackingConfig.from_dict(google_cloud_videointelligence_v1_object_tracking_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


