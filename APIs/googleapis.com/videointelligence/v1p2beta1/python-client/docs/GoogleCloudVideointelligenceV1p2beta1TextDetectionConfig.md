# GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig

Config for TEXT_DETECTION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_hints** | **List[str]** | Language hint can be specified if the language to be detected is known a priori. It can increase the accuracy of the detection. Language hint must be language code in BCP-47 format. Automatic language detection is performed if no hint is provided. | [optional] 
**model** | **str** | Model to use for text detection. Supported values: \&quot;builtin/stable\&quot; (the default if unset) and \&quot;builtin/latest\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p2beta1_text_detection_config import GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig from a JSON string
google_cloud_videointelligence_v1p2beta1_text_detection_config_instance = GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p2beta1_text_detection_config_dict = google_cloud_videointelligence_v1p2beta1_text_detection_config_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig from a dict
google_cloud_videointelligence_v1p2beta1_text_detection_config_from_dict = GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig.from_dict(google_cloud_videointelligence_v1p2beta1_text_detection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


