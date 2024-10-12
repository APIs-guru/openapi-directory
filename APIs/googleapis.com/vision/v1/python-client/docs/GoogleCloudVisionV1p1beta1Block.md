# GoogleCloudVisionV1p1beta1Block

Logical element on the page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_type** | **str** | Detected block type (text, image etc) for this block. | [optional] 
**bounding_box** | [**GoogleCloudVisionV1p1beta1BoundingPoly**](GoogleCloudVisionV1p1beta1BoundingPoly.md) |  | [optional] 
**confidence** | **float** | Confidence of the OCR results on the block. Range [0, 1]. | [optional] 
**paragraphs** | [**List[GoogleCloudVisionV1p1beta1Paragraph]**](GoogleCloudVisionV1p1beta1Paragraph.md) | List of paragraphs in this block (if this blocks is of type text). | [optional] 
**var_property** | [**GoogleCloudVisionV1p1beta1TextAnnotationTextProperty**](GoogleCloudVisionV1p1beta1TextAnnotationTextProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_block import GoogleCloudVisionV1p1beta1Block

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1Block from a JSON string
google_cloud_vision_v1p1beta1_block_instance = GoogleCloudVisionV1p1beta1Block.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1Block.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_block_dict = google_cloud_vision_v1p1beta1_block_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1Block from a dict
google_cloud_vision_v1p1beta1_block_from_dict = GoogleCloudVisionV1p1beta1Block.from_dict(google_cloud_vision_v1p1beta1_block_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


