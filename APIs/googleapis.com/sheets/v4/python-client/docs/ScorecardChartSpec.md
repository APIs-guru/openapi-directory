# ScorecardChartSpec

A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_type** | **str** | The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source charts. This field is optional. | [optional] 
**baseline_value_data** | [**ChartData**](ChartData.md) |  | [optional] 
**baseline_value_format** | [**BaselineValueFormat**](BaselineValueFormat.md) |  | [optional] 
**custom_format_options** | [**ChartCustomNumberFormatOptions**](ChartCustomNumberFormatOptions.md) |  | [optional] 
**key_value_data** | [**ChartData**](ChartData.md) |  | [optional] 
**key_value_format** | [**KeyValueFormat**](KeyValueFormat.md) |  | [optional] 
**number_format_source** | **str** | The number format source used in the scorecard chart. This field is optional. | [optional] 
**scale_factor** | **float** | Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the chart by 10. This field is optional. | [optional] 

## Example

```python
from openapi_client.models.scorecard_chart_spec import ScorecardChartSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ScorecardChartSpec from a JSON string
scorecard_chart_spec_instance = ScorecardChartSpec.from_json(json)
# print the JSON string representation of the object
print(ScorecardChartSpec.to_json())

# convert the object into a dict
scorecard_chart_spec_dict = scorecard_chart_spec_instance.to_dict()
# create an instance of ScorecardChartSpec from a dict
scorecard_chart_spec_from_dict = ScorecardChartSpec.from_dict(scorecard_chart_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


