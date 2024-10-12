# DataSet

Groups a time series query definition with charting options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakdowns** | [**List[Breakdown]**](Breakdown.md) | Optional. The collection of breakdowns to be applied to the dataset. | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | Optional. A collection of dimension columns. | [optional] 
**legend_template** | **str** | A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label&#39;s value. | [optional] 
**measures** | [**List[Measure]**](Measure.md) | Optional. A collection of measures. | [optional] 
**min_alignment_period** | **str** | Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. | [optional] 
**plot_type** | **str** | How this data should be plotted on the chart. | [optional] 
**target_axis** | **str** | Optional. The target axis to use for plotting the metric. | [optional] 
**time_series_query** | [**TimeSeriesQuery**](TimeSeriesQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_set import DataSet

# TODO update the JSON string below
json = "{}"
# create an instance of DataSet from a JSON string
data_set_instance = DataSet.from_json(json)
# print the JSON string representation of the object
print(DataSet.to_json())

# convert the object into a dict
data_set_dict = data_set_instance.to_dict()
# create an instance of DataSet from a dict
data_set_from_dict = DataSet.from_dict(data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


