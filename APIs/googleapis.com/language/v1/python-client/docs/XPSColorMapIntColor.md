# XPSColorMapIntColor

RGB color and each channel is represented by an integer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blue** | **int** | The value should be in range of [0, 255]. | [optional] 
**green** | **int** | The value should be in range of [0, 255]. | [optional] 
**red** | **int** | The value should be in range of [0, 255]. | [optional] 

## Example

```python
from openapi_client.models.xps_color_map_int_color import XPSColorMapIntColor

# TODO update the JSON string below
json = "{}"
# create an instance of XPSColorMapIntColor from a JSON string
xps_color_map_int_color_instance = XPSColorMapIntColor.from_json(json)
# print the JSON string representation of the object
print(XPSColorMapIntColor.to_json())

# convert the object into a dict
xps_color_map_int_color_dict = xps_color_map_int_color_instance.to_dict()
# create an instance of XPSColorMapIntColor from a dict
xps_color_map_int_color_from_dict = XPSColorMapIntColor.from_dict(xps_color_map_int_color_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


