# MaskPosition

This object describes the position on faces where a mask should be placed by default.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**point** | **str** | The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. | 
**scale** | **float** | Mask scaling coefficient. For example, 2.0 means double size. | 
**x_shift** | **float** | Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. | 
**y_shift** | **float** | Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. | 

## Example

```python
from openapi_client.models.mask_position import MaskPosition

# TODO update the JSON string below
json = "{}"
# create an instance of MaskPosition from a JSON string
mask_position_instance = MaskPosition.from_json(json)
# print the JSON string representation of the object
print(MaskPosition.to_json())

# convert the object into a dict
mask_position_dict = mask_position_instance.to_dict()
# create an instance of MaskPosition from a dict
mask_position_from_dict = MaskPosition.from_dict(mask_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


