# GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotation

Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frames** | [**List[GoogleCloudVideointelligenceV1beta2ExplicitContentFrame]**](GoogleCloudVideointelligenceV1beta2ExplicitContentFrame.md) | All video frames where explicit content was detected. | [optional] 
**version** | **str** | Feature version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_explicit_content_annotation import GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotation from a JSON string
google_cloud_videointelligence_v1beta2_explicit_content_annotation_instance = GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_explicit_content_annotation_dict = google_cloud_videointelligence_v1beta2_explicit_content_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotation from a dict
google_cloud_videointelligence_v1beta2_explicit_content_annotation_from_dict = GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotation.from_dict(google_cloud_videointelligence_v1beta2_explicit_content_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


