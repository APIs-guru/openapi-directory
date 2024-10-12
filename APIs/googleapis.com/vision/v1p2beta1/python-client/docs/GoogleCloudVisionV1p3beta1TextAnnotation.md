# GoogleCloudVisionV1p3beta1TextAnnotation

TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pages** | [**List[GoogleCloudVisionV1p3beta1Page]**](GoogleCloudVisionV1p3beta1Page.md) | List of pages detected by OCR. | [optional] 
**text** | **str** | UTF-8 text detected on the pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_text_annotation import GoogleCloudVisionV1p3beta1TextAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1TextAnnotation from a JSON string
google_cloud_vision_v1p3beta1_text_annotation_instance = GoogleCloudVisionV1p3beta1TextAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1TextAnnotation.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_text_annotation_dict = google_cloud_vision_v1p3beta1_text_annotation_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1TextAnnotation from a dict
google_cloud_vision_v1p3beta1_text_annotation_from_dict = GoogleCloudVisionV1p3beta1TextAnnotation.from_dict(google_cloud_vision_v1p3beta1_text_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


