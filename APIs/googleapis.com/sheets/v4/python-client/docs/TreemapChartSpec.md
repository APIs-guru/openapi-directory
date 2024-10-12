# TreemapChartSpec

A Treemap chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_data** | [**ChartData**](ChartData.md) |  | [optional] 
**color_scale** | [**TreemapChartColorScale**](TreemapChartColorScale.md) |  | [optional] 
**header_color** | [**Color**](Color.md) |  | [optional] 
**header_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**hide_tooltips** | **bool** | True to hide tooltips. | [optional] 
**hinted_levels** | **int** | The number of additional data levels beyond the labeled levels to be shown on the treemap chart. These levels are not interactive and are shown without their labels. Defaults to 0 if not specified. | [optional] 
**labels** | [**ChartData**](ChartData.md) |  | [optional] 
**levels** | **int** | The number of data levels to show on the treemap chart. These levels are interactive and are shown with their labels. Defaults to 2 if not specified. | [optional] 
**max_value** | **float** | The maximum possible data value. Cells with values greater than this will have the same color as cells with this value. If not specified, defaults to the actual maximum value from color_data, or the maximum value from size_data if color_data is not specified. | [optional] 
**min_value** | **float** | The minimum possible data value. Cells with values less than this will have the same color as cells with this value. If not specified, defaults to the actual minimum value from color_data, or the minimum value from size_data if color_data is not specified. | [optional] 
**parent_labels** | [**ChartData**](ChartData.md) |  | [optional] 
**size_data** | [**ChartData**](ChartData.md) |  | [optional] 
**text_format** | [**TextFormat**](TextFormat.md) |  | [optional] 

## Example

```python
from openapi_client.models.treemap_chart_spec import TreemapChartSpec

# TODO update the JSON string below
json = "{}"
# create an instance of TreemapChartSpec from a JSON string
treemap_chart_spec_instance = TreemapChartSpec.from_json(json)
# print the JSON string representation of the object
print(TreemapChartSpec.to_json())

# convert the object into a dict
treemap_chart_spec_dict = treemap_chart_spec_instance.to_dict()
# create an instance of TreemapChartSpec from a dict
treemap_chart_spec_from_dict = TreemapChartSpec.from_dict(treemap_chart_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


