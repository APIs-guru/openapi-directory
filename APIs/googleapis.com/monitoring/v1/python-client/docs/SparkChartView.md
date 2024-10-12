# SparkChartView

A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_alignment_period** | **str** | The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint. | [optional] 
**spark_chart_type** | **str** | Required. The type of sparkchart to show in this chartView. | [optional] 

## Example

```python
from openapi_client.models.spark_chart_view import SparkChartView

# TODO update the JSON string below
json = "{}"
# create an instance of SparkChartView from a JSON string
spark_chart_view_instance = SparkChartView.from_json(json)
# print the JSON string representation of the object
print(SparkChartView.to_json())

# convert the object into a dict
spark_chart_view_dict = spark_chart_view_instance.to_dict()
# create an instance of SparkChartView from a dict
spark_chart_view_from_dict = SparkChartView.from_dict(spark_chart_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


