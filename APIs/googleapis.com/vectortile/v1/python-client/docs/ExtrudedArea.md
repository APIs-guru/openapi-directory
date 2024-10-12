# ExtrudedArea

Represents a height-extruded area: a 3D prism with a constant X-Y plane cross section. Used to represent extruded buildings. A single building may consist of several extruded areas. The min_z and max_z fields are scaled to the size of the tile. An extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | [**Area**](Area.md) |  | [optional] 
**max_z** | **int** | The z-value in local tile coordinates where the extruded area ends. | [optional] 
**min_z** | **int** | The z-value in local tile coordinates where the extruded area begins. This is non-zero for extruded areas that begin off the ground. For example, a building with a skybridge may have an extruded area component with a non-zero min_z. | [optional] 

## Example

```python
from openapi_client.models.extruded_area import ExtrudedArea

# TODO update the JSON string below
json = "{}"
# create an instance of ExtrudedArea from a JSON string
extruded_area_instance = ExtrudedArea.from_json(json)
# print the JSON string representation of the object
print(ExtrudedArea.to_json())

# convert the object into a dict
extruded_area_dict = extruded_area_instance.to_dict()
# create an instance of ExtrudedArea from a dict
extruded_area_from_dict = ExtrudedArea.from_dict(extruded_area_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


