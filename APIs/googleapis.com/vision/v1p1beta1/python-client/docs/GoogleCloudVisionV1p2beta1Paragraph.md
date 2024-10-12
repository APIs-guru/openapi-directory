# GoogleCloudVisionV1p2beta1Paragraph

Structural unit of text representing a number of words in certain order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | [**GoogleCloudVisionV1p2beta1BoundingPoly**](GoogleCloudVisionV1p2beta1BoundingPoly.md) |  | [optional] 
**confidence** | **float** | Confidence of the OCR results for the paragraph. Range [0, 1]. | [optional] 
**var_property** | [**GoogleCloudVisionV1p2beta1TextAnnotationTextProperty**](GoogleCloudVisionV1p2beta1TextAnnotationTextProperty.md) |  | [optional] 
**words** | [**List[GoogleCloudVisionV1p2beta1Word]**](GoogleCloudVisionV1p2beta1Word.md) | List of all words in this paragraph. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_paragraph import GoogleCloudVisionV1p2beta1Paragraph

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1Paragraph from a JSON string
google_cloud_vision_v1p2beta1_paragraph_instance = GoogleCloudVisionV1p2beta1Paragraph.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1Paragraph.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_paragraph_dict = google_cloud_vision_v1p2beta1_paragraph_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1Paragraph from a dict
google_cloud_vision_v1p2beta1_paragraph_from_dict = GoogleCloudVisionV1p2beta1Paragraph.from_dict(google_cloud_vision_v1p2beta1_paragraph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


