# CropProperties

The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped. After cropping, the content in the crop rectangle will be stretched to fit its container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle** | **float** | The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset. | [optional] 
**bottom_offset** | **float** | The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object&#39;s original height. | [optional] 
**left_offset** | **float** | The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object&#39;s original width. | [optional] 
**right_offset** | **float** | The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object&#39;s original width. | [optional] 
**top_offset** | **float** | The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object&#39;s original height. | [optional] 

## Example

```python
from openapi_client.models.crop_properties import CropProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CropProperties from a JSON string
crop_properties_instance = CropProperties.from_json(json)
# print the JSON string representation of the object
print(CropProperties.to_json())

# convert the object into a dict
crop_properties_dict = crop_properties_instance.to_dict()
# create an instance of CropProperties from a dict
crop_properties_from_dict = CropProperties.from_dict(crop_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


