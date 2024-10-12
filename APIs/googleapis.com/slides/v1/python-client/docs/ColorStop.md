# ColorStop

A color and position in a gradient band.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alpha** | **float** | The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque. | [optional] 
**color** | [**OpaqueColor**](OpaqueColor.md) |  | [optional] 
**position** | **float** | The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0]. | [optional] 

## Example

```python
from openapi_client.models.color_stop import ColorStop

# TODO update the JSON string below
json = "{}"
# create an instance of ColorStop from a JSON string
color_stop_instance = ColorStop.from_json(json)
# print the JSON string representation of the object
print(ColorStop.to_json())

# convert the object into a dict
color_stop_dict = color_stop_instance.to_dict()
# create an instance of ColorStop from a dict
color_stop_from_dict = ColorStop.from_dict(color_stop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


