# PieChartDataSet

Groups a time series query definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[Dimension]**](Dimension.md) | A dimension is a structured label, class, or category for a set of measurements in your data. | [optional] 
**measures** | [**List[Measure]**](Measure.md) | A measure is a measured value of a property in your data. For example, rainfall in inches, number of units sold, revenue gained, etc. | [optional] 
**min_alignment_period** | **str** | Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. | [optional] 
**slice_name_template** | **str** | Optional. A template for the name of the slice. This name will be displayed in the legend and the tooltip of the pie chart. It replaces the auto-generated names for the slices. For example, if the template is set to ${resource.labels.zone}, the zone&#39;s value will be used for the name instead of the default name. | [optional] 
**time_series_query** | [**TimeSeriesQuery**](TimeSeriesQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.pie_chart_data_set import PieChartDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of PieChartDataSet from a JSON string
pie_chart_data_set_instance = PieChartDataSet.from_json(json)
# print the JSON string representation of the object
print(PieChartDataSet.to_json())

# convert the object into a dict
pie_chart_data_set_dict = pie_chart_data_set_instance.to_dict()
# create an instance of PieChartDataSet from a dict
pie_chart_data_set_from_dict = PieChartDataSet.from_dict(pie_chart_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


