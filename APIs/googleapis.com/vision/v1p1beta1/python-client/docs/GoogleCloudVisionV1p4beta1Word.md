# GoogleCloudVisionV1p4beta1Word

A word representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | [**GoogleCloudVisionV1p4beta1BoundingPoly**](GoogleCloudVisionV1p4beta1BoundingPoly.md) |  | [optional] 
**confidence** | **float** | Confidence of the OCR results for the word. Range [0, 1]. | [optional] 
**var_property** | [**GoogleCloudVisionV1p4beta1TextAnnotationTextProperty**](GoogleCloudVisionV1p4beta1TextAnnotationTextProperty.md) |  | [optional] 
**symbols** | [**List[GoogleCloudVisionV1p4beta1Symbol]**](GoogleCloudVisionV1p4beta1Symbol.md) | List of symbols in the word. The order of the symbols follows the natural reading order. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_word import GoogleCloudVisionV1p4beta1Word

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1Word from a JSON string
google_cloud_vision_v1p4beta1_word_instance = GoogleCloudVisionV1p4beta1Word.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1Word.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_word_dict = google_cloud_vision_v1p4beta1_word_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1Word from a dict
google_cloud_vision_v1p4beta1_word_from_dict = GoogleCloudVisionV1p4beta1Word.from_dict(google_cloud_vision_v1p4beta1_word_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


