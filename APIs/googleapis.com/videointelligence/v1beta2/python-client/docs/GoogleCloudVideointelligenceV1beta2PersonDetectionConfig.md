# GoogleCloudVideointelligenceV1beta2PersonDetectionConfig

Config for PERSON_DETECTION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_attributes** | **bool** | Whether to enable person attributes detection, such as cloth color (black, blue, etc), type (coat, dress, etc), pattern (plain, floral, etc), hair, etc. Ignored if &#39;include_bounding_boxes&#39; is set to false. | [optional] 
**include_bounding_boxes** | **bool** | Whether bounding boxes are included in the person detection annotation output. | [optional] 
**include_pose_landmarks** | **bool** | Whether to enable pose landmarks detection. Ignored if &#39;include_bounding_boxes&#39; is set to false. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_person_detection_config import GoogleCloudVideointelligenceV1beta2PersonDetectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2PersonDetectionConfig from a JSON string
google_cloud_videointelligence_v1beta2_person_detection_config_instance = GoogleCloudVideointelligenceV1beta2PersonDetectionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2PersonDetectionConfig.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_person_detection_config_dict = google_cloud_videointelligence_v1beta2_person_detection_config_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2PersonDetectionConfig from a dict
google_cloud_videointelligence_v1beta2_person_detection_config_from_dict = GoogleCloudVideointelligenceV1beta2PersonDetectionConfig.from_dict(google_cloud_videointelligence_v1beta2_person_detection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


