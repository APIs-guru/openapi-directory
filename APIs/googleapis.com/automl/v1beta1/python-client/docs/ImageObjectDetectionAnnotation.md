# ImageObjectDetectionAnnotation

Annotation details for image object detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | [**BoundingPoly**](BoundingPoly.md) |  | [optional] 
**score** | **float** | Output only. The confidence that this annotation is positive for the parent example, value in [0, 1], higher means higher positivity confidence. | [optional] 

## Example

```python
from openapi_client.models.image_object_detection_annotation import ImageObjectDetectionAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of ImageObjectDetectionAnnotation from a JSON string
image_object_detection_annotation_instance = ImageObjectDetectionAnnotation.from_json(json)
# print the JSON string representation of the object
print(ImageObjectDetectionAnnotation.to_json())

# convert the object into a dict
image_object_detection_annotation_dict = image_object_detection_annotation_instance.to_dict()
# create an instance of ImageObjectDetectionAnnotation from a dict
image_object_detection_annotation_from_dict = ImageObjectDetectionAnnotation.from_dict(image_object_detection_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


