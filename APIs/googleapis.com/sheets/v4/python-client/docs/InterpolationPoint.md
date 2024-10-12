# InterpolationPoint

A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**Color**](Color.md) |  | [optional] 
**color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**type** | **str** | How the value should be interpreted. | [optional] 
**value** | **str** | The value this interpolation point uses. May be a formula. Unused if type is MIN or MAX. | [optional] 

## Example

```python
from openapi_client.models.interpolation_point import InterpolationPoint

# TODO update the JSON string below
json = "{}"
# create an instance of InterpolationPoint from a JSON string
interpolation_point_instance = InterpolationPoint.from_json(json)
# print the JSON string representation of the object
print(InterpolationPoint.to_json())

# convert the object into a dict
interpolation_point_dict = interpolation_point_instance.to_dict()
# create an instance of InterpolationPoint from a dict
interpolation_point_from_dict = InterpolationPoint.from_dict(interpolation_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


