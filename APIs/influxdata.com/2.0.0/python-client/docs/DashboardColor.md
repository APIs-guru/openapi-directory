# DashboardColor

Defines an encoding of data value into color space.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hex** | **str** | The hex number of the color | 
**id** | **str** | The unique ID of the view color. | 
**name** | **str** | The user-facing name of the hex color. | 
**type** | **str** | Type is how the color is used. | 
**value** | **float** | The data value mapped to this color. | 

## Example

```python
from openapi_client.models.dashboard_color import DashboardColor

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardColor from a JSON string
dashboard_color_instance = DashboardColor.from_json(json)
# print the JSON string representation of the object
print(DashboardColor.to_json())

# convert the object into a dict
dashboard_color_dict = dashboard_color_instance.to_dict()
# create an instance of DashboardColor from a dict
dashboard_color_from_dict = DashboardColor.from_dict(dashboard_color_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


