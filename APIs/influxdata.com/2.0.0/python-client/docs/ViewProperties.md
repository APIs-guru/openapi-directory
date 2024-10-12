# ViewProperties


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
**time_format** | **str** |  | 
**type** | **str** |  | 
**x_column** | **str** |  | 
**x_tick_start** | **float** |  | [optional] 
**x_tick_step** | **float** |  | [optional] 
**x_total_ticks** | **int** |  | [optional] 
**y_column** | **str** |  | 
**y_tick_start** | **float** |  | [optional] 
**y_tick_step** | **float** |  | [optional] 
**y_total_ticks** | **int** |  | [optional] 
**geom** | [**XYGeom**](XYGeom.md) |  | 
**tick_prefix** | **str** |  | 
**tick_suffix** | **str** |  | 
**bin_count** | **int** |  | 
**fill_columns** | **List[str]** |  | 
**x_axis_label** | **str** |  | 
**x_domain** | **List[float]** |  | 
**field_options** | [**List[RenamableField]**](RenamableField.md) | fieldOptions represent the fields retrieved by the query with customization options | 
**table_options** | [**TableViewPropertiesTableOptions**](TableViewPropertiesTableOptions.md) |  | 
**check** | [**Check**](Check.md) |  | [optional] 
**check_id** | **str** |  | 
**symbol_columns** | **List[str]** |  | 
**x_prefix** | **str** |  | 
**x_suffix** | **str** |  | 
**y_axis_label** | **str** |  | 
**y_domain** | **List[float]** |  | 
**y_prefix** | **str** |  | 
**y_suffix** | **str** |  | 
**bin_size** | **float** |  | 
**y_label_column_separator** | **str** |  | [optional] 
**y_label_columns** | **List[str]** |  | [optional] 
**y_series_columns** | **List[str]** |  | 
**lower_column** | **str** |  | [optional] 
**main_column** | **str** |  | [optional] 
**upper_column** | **str** |  | [optional] 
**allow_pan_and_zoom** | **bool** | If true, map zoom and pan controls are enabled on the dashboard view | [default to True]
**center** | [**GeoViewPropertiesCenter**](GeoViewPropertiesCenter.md) |  | 
**detect_coordinate_fields** | **bool** | If true, search results get automatically regroupped so that lon,lat and value are treated as columns | [default to True]
**layers** | [**List[GeoViewLayer]**](GeoViewLayer.md) | List of individual layers shown in the map | 
**map_style** | **str** | Define map type - regular, satellite etc. | [optional] 
**zoom** | **float** | Zoom level used for initial display of the map | 

## Example

```python
from openapi_client.models.view_properties import ViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ViewProperties from a JSON string
view_properties_instance = ViewProperties.from_json(json)
# print the JSON string representation of the object
print(ViewProperties.to_json())

# convert the object into a dict
view_properties_dict = view_properties_instance.to_dict()
# create an instance of ViewProperties from a dict
view_properties_from_dict = ViewProperties.from_dict(view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


