# WaterfallChartSeries

A single series of data for a waterfall chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_subtotals** | [**List[WaterfallChartCustomSubtotal]**](WaterfallChartCustomSubtotal.md) | Custom subtotal columns appearing in this series. The order in which subtotals are defined is not significant. Only one subtotal may be defined for each data point. | [optional] 
**data** | [**ChartData**](ChartData.md) |  | [optional] 
**data_label** | [**DataLabel**](DataLabel.md) |  | [optional] 
**hide_trailing_subtotal** | **bool** | True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of each series. Setting this field to true will hide that subtotal column for this series. | [optional] 
**negative_columns_style** | [**WaterfallChartColumnStyle**](WaterfallChartColumnStyle.md) |  | [optional] 
**positive_columns_style** | [**WaterfallChartColumnStyle**](WaterfallChartColumnStyle.md) |  | [optional] 
**subtotal_columns_style** | [**WaterfallChartColumnStyle**](WaterfallChartColumnStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.waterfall_chart_series import WaterfallChartSeries

# TODO update the JSON string below
json = "{}"
# create an instance of WaterfallChartSeries from a JSON string
waterfall_chart_series_instance = WaterfallChartSeries.from_json(json)
# print the JSON string representation of the object
print(WaterfallChartSeries.to_json())

# convert the object into a dict
waterfall_chart_series_dict = waterfall_chart_series_instance.to_dict()
# create an instance of WaterfallChartSeries from a dict
waterfall_chart_series_from_dict = WaterfallChartSeries.from_dict(waterfall_chart_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


