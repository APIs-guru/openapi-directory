# GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage

Detected language for a structural component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence of detected language. Range [0, 1]. | [optional] 
**language_code** | **str** | The BCP-47 language code, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_text_annotation_detected_language import GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage from a JSON string
google_cloud_vision_v1p2beta1_text_annotation_detected_language_instance = GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_text_annotation_detected_language_dict = google_cloud_vision_v1p2beta1_text_annotation_detected_language_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage from a dict
google_cloud_vision_v1p2beta1_text_annotation_detected_language_from_dict = GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage.from_dict(google_cloud_vision_v1p2beta1_text_annotation_detected_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


