# GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig

Config for EXPLICIT_CONTENT_DETECTION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Model to use for explicit content detection. Supported values: \&quot;builtin/stable\&quot; (the default if unset) and \&quot;builtin/latest\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_explicit_content_detection_config import GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig from a JSON string
google_cloud_videointelligence_v1p3beta1_explicit_content_detection_config_instance = GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_explicit_content_detection_config_dict = google_cloud_videointelligence_v1p3beta1_explicit_content_detection_config_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig from a dict
google_cloud_videointelligence_v1p3beta1_explicit_content_detection_config_from_dict = GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig.from_dict(google_cloud_videointelligence_v1p3beta1_explicit_content_detection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


