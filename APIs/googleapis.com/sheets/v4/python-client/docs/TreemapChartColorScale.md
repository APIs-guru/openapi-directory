# TreemapChartColorScale

A color scale for a treemap chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_value_color** | [**Color**](Color.md) |  | [optional] 
**max_value_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**mid_value_color** | [**Color**](Color.md) |  | [optional] 
**mid_value_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**min_value_color** | [**Color**](Color.md) |  | [optional] 
**min_value_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**no_data_color** | [**Color**](Color.md) |  | [optional] 
**no_data_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.treemap_chart_color_scale import TreemapChartColorScale

# TODO update the JSON string below
json = "{}"
# create an instance of TreemapChartColorScale from a JSON string
treemap_chart_color_scale_instance = TreemapChartColorScale.from_json(json)
# print the JSON string representation of the object
print(TreemapChartColorScale.to_json())

# convert the object into a dict
treemap_chart_color_scale_dict = treemap_chart_color_scale_instance.to_dict()
# create an instance of TreemapChartColorScale from a dict
treemap_chart_color_scale_from_dict = TreemapChartColorScale.from_dict(treemap_chart_color_scale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


