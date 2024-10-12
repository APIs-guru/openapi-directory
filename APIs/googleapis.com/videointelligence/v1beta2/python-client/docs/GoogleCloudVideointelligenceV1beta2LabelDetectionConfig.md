# GoogleCloudVideointelligenceV1beta2LabelDetectionConfig

Config for LABEL_DETECTION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frame_confidence_threshold** | **float** | The confidence threshold we perform filtering on the labels from frame-level detection. If not set, it is set to 0.4 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model. | [optional] 
**label_detection_mode** | **str** | What labels should be detected with LABEL_DETECTION, in addition to video-level labels or segment-level labels. If unspecified, defaults to &#x60;SHOT_MODE&#x60;. | [optional] 
**model** | **str** | Model to use for label detection. Supported values: \&quot;builtin/stable\&quot; (the default if unset) and \&quot;builtin/latest\&quot;. | [optional] 
**stationary_camera** | **bool** | Whether the video has been shot from a stationary (i.e., non-moving) camera. When set to true, might improve detection accuracy for moving objects. Should be used with &#x60;SHOT_AND_FRAME_MODE&#x60; enabled. | [optional] 
**video_confidence_threshold** | **float** | The confidence threshold we perform filtering on the labels from video-level and shot-level detections. If not set, it&#39;s set to 0.3 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_label_detection_config import GoogleCloudVideointelligenceV1beta2LabelDetectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2LabelDetectionConfig from a JSON string
google_cloud_videointelligence_v1beta2_label_detection_config_instance = GoogleCloudVideointelligenceV1beta2LabelDetectionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2LabelDetectionConfig.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_label_detection_config_dict = google_cloud_videointelligence_v1beta2_label_detection_config_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2LabelDetectionConfig from a dict
google_cloud_videointelligence_v1beta2_label_detection_config_from_dict = GoogleCloudVideointelligenceV1beta2LabelDetectionConfig.from_dict(google_cloud_videointelligence_v1beta2_label_detection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


