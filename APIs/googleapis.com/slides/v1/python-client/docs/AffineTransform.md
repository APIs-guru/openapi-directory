# AffineTransform

AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scale_x** | **float** | The X coordinate scaling element. | [optional] 
**scale_y** | **float** | The Y coordinate scaling element. | [optional] 
**shear_x** | **float** | The X coordinate shearing element. | [optional] 
**shear_y** | **float** | The Y coordinate shearing element. | [optional] 
**translate_x** | **float** | The X coordinate translation element. | [optional] 
**translate_y** | **float** | The Y coordinate translation element. | [optional] 
**unit** | **str** | The units for translate elements. | [optional] 

## Example

```python
from openapi_client.models.affine_transform import AffineTransform

# TODO update the JSON string below
json = "{}"
# create an instance of AffineTransform from a JSON string
affine_transform_instance = AffineTransform.from_json(json)
# print the JSON string representation of the object
print(AffineTransform.to_json())

# convert the object into a dict
affine_transform_dict = affine_transform_instance.to_dict()
# create an instance of AffineTransform from a dict
affine_transform_from_dict = AffineTransform.from_dict(affine_transform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


