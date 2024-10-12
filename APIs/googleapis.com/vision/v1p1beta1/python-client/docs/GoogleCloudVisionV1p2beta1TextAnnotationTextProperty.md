# GoogleCloudVisionV1p2beta1TextAnnotationTextProperty

Additional information detected on the structural component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_break** | [**GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak**](GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak.md) |  | [optional] 
**detected_languages** | [**List[GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage]**](GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_text_annotation_text_property import GoogleCloudVisionV1p2beta1TextAnnotationTextProperty

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1TextAnnotationTextProperty from a JSON string
google_cloud_vision_v1p2beta1_text_annotation_text_property_instance = GoogleCloudVisionV1p2beta1TextAnnotationTextProperty.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1TextAnnotationTextProperty.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_text_annotation_text_property_dict = google_cloud_vision_v1p2beta1_text_annotation_text_property_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1TextAnnotationTextProperty from a dict
google_cloud_vision_v1p2beta1_text_annotation_text_property_from_dict = GoogleCloudVisionV1p2beta1TextAnnotationTextProperty.from_dict(google_cloud_vision_v1p2beta1_text_annotation_text_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


