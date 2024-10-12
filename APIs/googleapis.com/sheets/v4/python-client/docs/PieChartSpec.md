# PieChartSpec

A pie chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | [**ChartData**](ChartData.md) |  | [optional] 
**legend_position** | **str** | Where the legend of the pie chart should be drawn. | [optional] 
**pie_hole** | **float** | The size of the hole in the pie chart. | [optional] 
**series** | [**ChartData**](ChartData.md) |  | [optional] 
**three_dimensional** | **bool** | True if the pie is three dimensional. | [optional] 

## Example

```python
from openapi_client.models.pie_chart_spec import PieChartSpec

# TODO update the JSON string below
json = "{}"
# create an instance of PieChartSpec from a JSON string
pie_chart_spec_instance = PieChartSpec.from_json(json)
# print the JSON string representation of the object
print(PieChartSpec.to_json())

# convert the object into a dict
pie_chart_spec_dict = pie_chart_spec_instance.to_dict()
# create an instance of PieChartSpec from a dict
pie_chart_spec_from_dict = PieChartSpec.from_dict(pie_chart_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


