# BasicChartSpec

The specification for a basic chart. See BasicChartType for the list of charts this supports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**axis** | [**List[BasicChartAxis]**](BasicChartAxis.md) | The axis on the chart. | [optional] 
**chart_type** | **str** | The type of the chart. | [optional] 
**compare_mode** | **str** | The behavior of tooltips and data highlighting when hovering on data and chart area. | [optional] 
**domains** | [**List[BasicChartDomain]**](BasicChartDomain.md) | The domain of data this is charting. Only a single domain is supported. | [optional] 
**header_count** | **int** | The number of rows or columns in the data that are \&quot;headers\&quot;. If not set, Google Sheets will guess how many rows are headers based on the data. (Note that BasicChartAxis.title may override the axis title inferred from the header values.) | [optional] 
**interpolate_nulls** | **bool** | If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts. | [optional] 
**legend_position** | **str** | The position of the chart legend. | [optional] 
**line_smoothing** | **bool** | Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts. | [optional] 
**series** | [**List[BasicChartSeries]**](BasicChartSeries.md) | The data this chart is visualizing. | [optional] 
**stacked_type** | **str** | The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts. | [optional] 
**three_dimensional** | **bool** | True to make the chart 3D. Applies to Bar and Column charts. | [optional] 
**total_data_label** | [**DataLabel**](DataLabel.md) |  | [optional] 

## Example

```python
from openapi_client.models.basic_chart_spec import BasicChartSpec

# TODO update the JSON string below
json = "{}"
# create an instance of BasicChartSpec from a JSON string
basic_chart_spec_instance = BasicChartSpec.from_json(json)
# print the JSON string representation of the object
print(BasicChartSpec.to_json())

# convert the object into a dict
basic_chart_spec_dict = basic_chart_spec_instance.to_dict()
# create an instance of BasicChartSpec from a dict
basic_chart_spec_from_dict = BasicChartSpec.from_dict(basic_chart_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


