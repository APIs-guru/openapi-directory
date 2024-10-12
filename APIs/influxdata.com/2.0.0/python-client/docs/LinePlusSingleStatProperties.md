# LinePlusSingleStatProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**axes** | [**Axes**](Axes.md) |  | 
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | 
**decimal_places** | [**DecimalPlaces**](DecimalPlaces.md) |  | 
**generate_x_axis_ticks** | **List[str]** |  | [optional] 
**generate_y_axis_ticks** | **List[str]** |  | [optional] 
**hover_dimension** | **str** |  | [optional] 
**legend_colorize_rows** | **bool** |  | [optional] 
**legend_hide** | **bool** |  | [optional] 
**legend_opacity** | **float** |  | [optional] 
**legend_orientation_threshold** | **int** |  | [optional] 
**note** | **str** |  | 
**position** | **str** |  | 
**prefix** | **str** |  | 
**queries** | [**List[DashboardQuery]**](DashboardQuery.md) |  | 
**shade_below** | **bool** |  | [optional] 
**shape** | **str** |  | 
**show_note_when_empty** | **bool** | If true, will display note when empty | 
**static_legend** | [**StaticLegend**](StaticLegend.md) |  | [optional] 
**suffix** | **str** |  | 
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
from openapi_client.models.line_plus_single_stat_properties import LinePlusSingleStatProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LinePlusSingleStatProperties from a JSON string
line_plus_single_stat_properties_instance = LinePlusSingleStatProperties.from_json(json)
# print the JSON string representation of the object
print(LinePlusSingleStatProperties.to_json())

# convert the object into a dict
line_plus_single_stat_properties_dict = line_plus_single_stat_properties_instance.to_dict()
# create an instance of LinePlusSingleStatProperties from a dict
line_plus_single_stat_properties_from_dict = LinePlusSingleStatProperties.from_dict(line_plus_single_stat_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


