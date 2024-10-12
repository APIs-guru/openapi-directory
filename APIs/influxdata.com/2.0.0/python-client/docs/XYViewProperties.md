# XYViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**axes** | [**Axes**](Axes.md) |  | 
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | 
**generate_x_axis_ticks** | **List[str]** |  | [optional] 
**generate_y_axis_ticks** | **List[str]** |  | [optional] 
**geom** | [**XYGeom**](XYGeom.md) |  | 
**hover_dimension** | **str** |  | [optional] 
**legend_colorize_rows** | **bool** |  | [optional] 
**legend_hide** | **bool** |  | [optional] 
**legend_opacity** | **float** |  | [optional] 
**legend_orientation_threshold** | **int** |  | [optional] 
**note** | **str** |  | 
**position** | **str** |  | 
**queries** | [**List[DashboardQuery]**](DashboardQuery.md) |  | 
**shade_below** | **bool** |  | [optional] 
**shape** | **str** |  | 
**show_note_when_empty** | **bool** | If true, will display note when empty | 
**static_legend** | [**StaticLegend**](StaticLegend.md) |  | [optional] 
**time_format** | **str** |  | [optional] 
**type** | **str** |  | 
**x_column** | **str** |  | [optional] 
**x_tick_start** | **float** |  | [optional] 
**x_tick_step** | **float** |  | [optional] 
**x_total_ticks** | **int** |  | [optional] 
**y_column** | **str** |  | [optional] 
**y_tick_start** | **float** |  | [optional] 
**y_tick_step** | **float** |  | [optional] 
**y_total_ticks** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.xy_view_properties import XYViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of XYViewProperties from a JSON string
xy_view_properties_instance = XYViewProperties.from_json(json)
# print the JSON string representation of the object
print(XYViewProperties.to_json())

# convert the object into a dict
xy_view_properties_dict = xy_view_properties_instance.to_dict()
# create an instance of XYViewProperties from a dict
xy_view_properties_from_dict = XYViewProperties.from_dict(xy_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


