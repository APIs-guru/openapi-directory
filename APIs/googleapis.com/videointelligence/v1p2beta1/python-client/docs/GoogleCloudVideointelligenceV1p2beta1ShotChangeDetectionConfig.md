# GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig

Config for SHOT_CHANGE_DETECTION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Model to use for shot change detection. Supported values: \&quot;builtin/stable\&quot; (the default if unset), \&quot;builtin/latest\&quot;, and \&quot;builtin/legacy\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p2beta1_shot_change_detection_config import GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig from a JSON string
google_cloud_videointelligence_v1p2beta1_shot_change_detection_config_instance = GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p2beta1_shot_change_detection_config_dict = google_cloud_videointelligence_v1p2beta1_shot_change_detection_config_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig from a dict
google_cloud_videointelligence_v1p2beta1_shot_change_detection_config_from_dict = GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig.from_dict(google_cloud_videointelligence_v1p2beta1_shot_change_detection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


