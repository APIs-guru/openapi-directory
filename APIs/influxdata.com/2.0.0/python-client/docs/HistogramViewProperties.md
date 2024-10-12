# HistogramViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bin_count** | **int** |  | 
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | 
**fill_columns** | **List[str]** |  | 
**legend_colorize_rows** | **bool** |  | [optional] 
**legend_hide** | **bool** |  | [optional] 
**legend_opacity** | **float** |  | [optional] 
**legend_orientation_threshold** | **int** |  | [optional] 
**note** | **str** |  | 
**position** | **str** |  | 
**queries** | [**List[DashboardQuery]**](DashboardQuery.md) |  | 
**shape** | **str** |  | 
**show_note_when_empty** | **bool** | If true, will display note when empty | 
**type** | **str** |  | 
**x_axis_label** | **str** |  | 
**x_column** | **str** |  | 
**x_domain** | **List[float]** |  | 

## Example

```python
from openapi_client.models.histogram_view_properties import HistogramViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramViewProperties from a JSON string
histogram_view_properties_instance = HistogramViewProperties.from_json(json)
# print the JSON string representation of the object
print(HistogramViewProperties.to_json())

# convert the object into a dict
histogram_view_properties_dict = histogram_view_properties_instance.to_dict()
# create an instance of HistogramViewProperties from a dict
histogram_view_properties_from_dict = HistogramViewProperties.from_dict(histogram_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


