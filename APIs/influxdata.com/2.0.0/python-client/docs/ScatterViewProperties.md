# ScatterViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colors** | **List[str]** | Colors define color encoding of data into a visualization | 
**fill_columns** | **List[str]** |  | 
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
**symbol_columns** | **List[str]** |  | 
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
from openapi_client.models.scatter_view_properties import ScatterViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScatterViewProperties from a JSON string
scatter_view_properties_instance = ScatterViewProperties.from_json(json)
# print the JSON string representation of the object
print(ScatterViewProperties.to_json())

# convert the object into a dict
scatter_view_properties_dict = scatter_view_properties_instance.to_dict()
# create an instance of ScatterViewProperties from a dict
scatter_view_properties_from_dict = ScatterViewProperties.from_dict(scatter_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


