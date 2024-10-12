# PieChart

A widget that displays timeseries data as a pie or a donut.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_type** | **str** | Required. Indicates the visualization type for the PieChart. | [optional] 
**data_sets** | [**List[PieChartDataSet]**](PieChartDataSet.md) | Required. The queries for the chart&#39;s data. | [optional] 
**show_labels** | **bool** | Optional. Indicates whether or not the pie chart should show slices&#39; labels | [optional] 

## Example

```python
from openapi_client.models.pie_chart import PieChart

# TODO update the JSON string below
json = "{}"
# create an instance of PieChart from a JSON string
pie_chart_instance = PieChart.from_json(json)
# print the JSON string representation of the object
print(PieChart.to_json())

# convert the object into a dict
pie_chart_dict = pie_chart_instance.to_dict()
# create an instance of PieChart from a dict
pie_chart_from_dict = PieChart.from_dict(pie_chart_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


