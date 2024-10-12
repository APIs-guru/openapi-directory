# BandViewProperties


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
**lower_column** | **str** |  | [optional] 
**main_column** | **str** |  | [optional] 
**note** | **str** |  | 
**queries** | [**List[DashboardQuery]**](DashboardQuery.md) |  | 
**shape** | **str** |  | 
**show_note_when_empty** | **bool** | If true, will display note when empty | 
**static_legend** | [**StaticLegend**](StaticLegend.md) |  | [optional] 
**time_format** | **str** |  | [optional] 
**type** | **str** |  | 
**upper_column** | **str** |  | [optional] 
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
from openapi_client.models.band_view_properties import BandViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BandViewProperties from a JSON string
band_view_properties_instance = BandViewProperties.from_json(json)
# print the JSON string representation of the object
print(BandViewProperties.to_json())

# convert the object into a dict
band_view_properties_dict = band_view_properties_instance.to_dict()
# create an instance of BandViewProperties from a dict
band_view_properties_from_dict = BandViewProperties.from_dict(band_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


