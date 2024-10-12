# GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig

Config for SHOT_CHANGE_DETECTION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Model to use for shot change detection. Supported values: \&quot;builtin/stable\&quot; (the default if unset), \&quot;builtin/latest\&quot;, and \&quot;builtin/legacy\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_shot_change_detection_config import GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig from a JSON string
google_cloud_videointelligence_v1beta2_shot_change_detection_config_instance = GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_shot_change_detection_config_dict = google_cloud_videointelligence_v1beta2_shot_change_detection_config_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig from a dict
google_cloud_videointelligence_v1beta2_shot_change_detection_config_from_dict = GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig.from_dict(google_cloud_videointelligence_v1beta2_shot_change_detection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


