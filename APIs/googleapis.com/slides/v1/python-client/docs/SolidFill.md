# SolidFill

A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alpha** | **float** | The fraction of this &#x60;color&#x60; that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color &#x3D; alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. | [optional] 
**color** | [**OpaqueColor**](OpaqueColor.md) |  | [optional] 

## Example

```python
from openapi_client.models.solid_fill import SolidFill

# TODO update the JSON string below
json = "{}"
# create an instance of SolidFill from a JSON string
solid_fill_instance = SolidFill.from_json(json)
# print the JSON string representation of the object
print(SolidFill.to_json())

# convert the object into a dict
solid_fill_dict = solid_fill_instance.to_dict()
# create an instance of SolidFill from a dict
solid_fill_from_dict = SolidFill.from_dict(solid_fill_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


