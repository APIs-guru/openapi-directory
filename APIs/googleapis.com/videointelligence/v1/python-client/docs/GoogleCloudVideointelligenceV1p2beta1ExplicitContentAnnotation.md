# GoogleCloudVideointelligenceV1p2beta1ExplicitContentAnnotation

Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frames** | [**List[GoogleCloudVideointelligenceV1p2beta1ExplicitContentFrame]**](GoogleCloudVideointelligenceV1p2beta1ExplicitContentFrame.md) | All video frames where explicit content was detected. | [optional] 
**version** | **str** | Feature version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p2beta1_explicit_content_annotation import GoogleCloudVideointelligenceV1p2beta1ExplicitContentAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p2beta1ExplicitContentAnnotation from a JSON string
google_cloud_videointelligence_v1p2beta1_explicit_content_annotation_instance = GoogleCloudVideointelligenceV1p2beta1ExplicitContentAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p2beta1ExplicitContentAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p2beta1_explicit_content_annotation_dict = google_cloud_videointelligence_v1p2beta1_explicit_content_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p2beta1ExplicitContentAnnotation from a dict
google_cloud_videointelligence_v1p2beta1_explicit_content_annotation_from_dict = GoogleCloudVideointelligenceV1p2beta1ExplicitContentAnnotation.from_dict(google_cloud_videointelligence_v1p2beta1_explicit_content_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


