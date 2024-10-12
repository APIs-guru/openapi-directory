# BubbleChartSpec

A bubble chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bubble_border_color** | [**Color**](Color.md) |  | [optional] 
**bubble_border_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**bubble_labels** | [**ChartData**](ChartData.md) |  | [optional] 
**bubble_max_radius_size** | **int** | The max radius size of the bubbles, in pixels. If specified, the field must be a positive value. | [optional] 
**bubble_min_radius_size** | **int** | The minimum radius size of the bubbles, in pixels. If specific, the field must be a positive value. | [optional] 
**bubble_opacity** | **float** | The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and 1 is fully opaque. | [optional] 
**bubble_sizes** | [**ChartData**](ChartData.md) |  | [optional] 
**bubble_text_style** | [**TextFormat**](TextFormat.md) |  | [optional] 
**domain** | [**ChartData**](ChartData.md) |  | [optional] 
**group_ids** | [**ChartData**](ChartData.md) |  | [optional] 
**legend_position** | **str** | Where the legend of the chart should be drawn. | [optional] 
**series** | [**ChartData**](ChartData.md) |  | [optional] 

## Example

```python
from openapi_client.models.bubble_chart_spec import BubbleChartSpec

# TODO update the JSON string below
json = "{}"
# create an instance of BubbleChartSpec from a JSON string
bubble_chart_spec_instance = BubbleChartSpec.from_json(json)
# print the JSON string representation of the object
print(BubbleChartSpec.to_json())

# convert the object into a dict
bubble_chart_spec_dict = bubble_chart_spec_instance.to_dict()
# create an instance of BubbleChartSpec from a dict
bubble_chart_spec_from_dict = BubbleChartSpec.from_dict(bubble_chart_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


