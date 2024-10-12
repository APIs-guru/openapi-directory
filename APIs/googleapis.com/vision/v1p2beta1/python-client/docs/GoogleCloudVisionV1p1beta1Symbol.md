# GoogleCloudVisionV1p1beta1Symbol

A single symbol representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | [**GoogleCloudVisionV1p1beta1BoundingPoly**](GoogleCloudVisionV1p1beta1BoundingPoly.md) |  | [optional] 
**confidence** | **float** | Confidence of the OCR results for the symbol. Range [0, 1]. | [optional] 
**var_property** | [**GoogleCloudVisionV1p1beta1TextAnnotationTextProperty**](GoogleCloudVisionV1p1beta1TextAnnotationTextProperty.md) |  | [optional] 
**text** | **str** | The actual UTF-8 representation of the symbol. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_symbol import GoogleCloudVisionV1p1beta1Symbol

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1Symbol from a JSON string
google_cloud_vision_v1p1beta1_symbol_instance = GoogleCloudVisionV1p1beta1Symbol.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1Symbol.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_symbol_dict = google_cloud_vision_v1p1beta1_symbol_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1Symbol from a dict
google_cloud_vision_v1p1beta1_symbol_from_dict = GoogleCloudVisionV1p1beta1Symbol.from_dict(google_cloud_vision_v1p1beta1_symbol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


