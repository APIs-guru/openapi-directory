# OverlayPosition

The location an object is overlaid on top of a grid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchor_cell** | [**GridCoordinate**](GridCoordinate.md) |  | [optional] 
**height_pixels** | **int** | The height of the object, in pixels. Defaults to 371. | [optional] 
**offset_x_pixels** | **int** | The horizontal offset, in pixels, that the object is offset from the anchor cell. | [optional] 
**offset_y_pixels** | **int** | The vertical offset, in pixels, that the object is offset from the anchor cell. | [optional] 
**width_pixels** | **int** | The width of the object, in pixels. Defaults to 600. | [optional] 

## Example

```python
from openapi_client.models.overlay_position import OverlayPosition

# TODO update the JSON string below
json = "{}"
# create an instance of OverlayPosition from a JSON string
overlay_position_instance = OverlayPosition.from_json(json)
# print the JSON string representation of the object
print(OverlayPosition.to_json())

# convert the object into a dict
overlay_position_dict = overlay_position_instance.to_dict()
# create an instance of OverlayPosition from a dict
overlay_position_from_dict = OverlayPosition.from_dict(overlay_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


