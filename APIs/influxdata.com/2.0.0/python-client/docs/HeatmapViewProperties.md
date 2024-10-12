# HeatmapViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bin_size** | **float** |  | 
**colors** | **List[str]** | Colors define color encoding of data into a visualization | 
**generate_x_axis_ticks** | **List[str]** |  | [optional] 
**generate_y_axis_ticks** | **List[str]** |  | [optional] 
**legend_colorize_rows** | **bool** |  | [optional] 
**legend_hide** | **bool** |  | [optional] 
**legend_opacity** | **float** |  | [optional] 
**legend_orientation_threshold** | **int** |  | [optional] 
**note** | **str** |  | 
**queries** | [**List[DashboardQuery]**](DashboardQuery.md) |  | 
**shape** | **str** |  | 
**show_note_when_empty** | **bool** | If true, will display note when empty | 
**time_format** | **str** |  | [optional] 
**type** | **str** |  | 
**x_axis_label** | **str** |  | 
**x_column** | **str** |  | 
**x_domain** | **List[float]** |  | 
**x_prefix** | **str** |  | 
**x_suffix** | **str** |  | 
**x_tick_start** | **float** |  | [optional] 
**x_tick_step** | **float** |  | [optional] 
**x_total_ticks** | **int** |  | [optional] 
**y_axis_label** | **str** |  | 
**y_column** | **str** |  | 
**y_domain** | **List[float]** |  | 
**y_prefix** | **str** |  | 
**y_suffix** | **str** |  | 
**y_tick_start** | **float** |  | [optional] 
**y_tick_step** | **float** |  | [optional] 
**y_total_ticks** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.heatmap_view_properties import HeatmapViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HeatmapViewProperties from a JSON string
heatmap_view_properties_instance = HeatmapViewProperties.from_json(json)
# print the JSON string representation of the object
print(HeatmapViewProperties.to_json())

# convert the object into a dict
heatmap_view_properties_dict = heatmap_view_properties_instance.to_dict()
# create an instance of HeatmapViewProperties from a dict
heatmap_view_properties_from_dict = HeatmapViewProperties.from_dict(heatmap_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


