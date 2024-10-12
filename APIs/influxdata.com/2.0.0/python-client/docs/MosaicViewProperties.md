# MosaicViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colors** | **List[str]** | Colors define color encoding of data into a visualization | 
**fill_columns** | **List[str]** |  | 
**generate_x_axis_ticks** | **List[str]** |  | [optional] 
**hover_dimension** | **str** |  | [optional] 
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
**y_domain** | **List[float]** |  | 
**y_label_column_separator** | **str** |  | [optional] 
**y_label_columns** | **List[str]** |  | [optional] 
**y_prefix** | **str** |  | 
**y_series_columns** | **List[str]** |  | 
**y_suffix** | **str** |  | 

## Example

```python
from openapi_client.models.mosaic_view_properties import MosaicViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MosaicViewProperties from a JSON string
mosaic_view_properties_instance = MosaicViewProperties.from_json(json)
# print the JSON string representation of the object
print(MosaicViewProperties.to_json())

# convert the object into a dict
mosaic_view_properties_dict = mosaic_view_properties_instance.to_dict()
# create an instance of MosaicViewProperties from a dict
mosaic_view_properties_from_dict = MosaicViewProperties.from_dict(mosaic_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


