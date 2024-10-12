# CropProperties

The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's 4 edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angle are 0, the image is not cropped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle** | **float** | The clockwise rotation angle of the crop rectangle around its center, in radians. Rotation is applied after the offsets. | [optional] 
**offset_bottom** | **float** | The offset specifies how far inwards the bottom edge of the crop rectangle is from the bottom edge of the original content as a fraction of the original content&#39;s height. | [optional] 
**offset_left** | **float** | The offset specifies how far inwards the left edge of the crop rectangle is from the left edge of the original content as a fraction of the original content&#39;s width. | [optional] 
**offset_right** | **float** | The offset specifies how far inwards the right edge of the crop rectangle is from the right edge of the original content as a fraction of the original content&#39;s width. | [optional] 
**offset_top** | **float** | The offset specifies how far inwards the top edge of the crop rectangle is from the top edge of the original content as a fraction of the original content&#39;s height. | [optional] 

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


