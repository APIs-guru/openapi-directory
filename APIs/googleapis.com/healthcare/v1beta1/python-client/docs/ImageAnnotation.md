# ImageAnnotation

Image annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_polys** | [**List[BoundingPoly]**](BoundingPoly.md) | The list of polygons outlining the sensitive regions in the image. | [optional] 
**frame_index** | **int** | 0-based index of the image frame. For example, an image frame in a DICOM instance. | [optional] 

## Example

```python
from openapi_client.models.image_annotation import ImageAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of ImageAnnotation from a JSON string
image_annotation_instance = ImageAnnotation.from_json(json)
# print the JSON string representation of the object
print(ImageAnnotation.to_json())

# convert the object into a dict
image_annotation_dict = image_annotation_instance.to_dict()
# create an instance of ImageAnnotation from a dict
image_annotation_from_dict = ImageAnnotation.from_dict(image_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


