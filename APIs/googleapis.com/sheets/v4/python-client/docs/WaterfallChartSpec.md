# WaterfallChartSpec

A waterfall chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_line_style** | [**LineStyle**](LineStyle.md) |  | [optional] 
**domain** | [**WaterfallChartDomain**](WaterfallChartDomain.md) |  | [optional] 
**first_value_is_total** | **bool** | True to interpret the first value as a total. | [optional] 
**hide_connector_lines** | **bool** | True to hide connector lines between columns. | [optional] 
**series** | [**List[WaterfallChartSeries]**](WaterfallChartSeries.md) | The data this waterfall chart is visualizing. | [optional] 
**stacked_type** | **str** | The stacked type. | [optional] 
**total_data_label** | [**DataLabel**](DataLabel.md) |  | [optional] 

## Example

```python
from openapi_client.models.waterfall_chart_spec import WaterfallChartSpec

# TODO update the JSON string below
json = "{}"
# create an instance of WaterfallChartSpec from a JSON string
waterfall_chart_spec_instance = WaterfallChartSpec.from_json(json)
# print the JSON string representation of the object
print(WaterfallChartSpec.to_json())

# convert the object into a dict
waterfall_chart_spec_dict = waterfall_chart_spec_instance.to_dict()
# create an instance of WaterfallChartSpec from a dict
waterfall_chart_spec_from_dict = WaterfallChartSpec.from_dict(waterfall_chart_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


