# TimeSeriesBaseline

The baseline values for a single time series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **str** | The aggregation type of the metric. | 
**data** | [**List[SingleBaseline]**](SingleBaseline.md) | The baseline values for each sensitivity. | 
**dimensions** | [**List[MetricSingleDimension]**](MetricSingleDimension.md) | The dimensions of this time series. | [optional] 
**metadata** | [**List[BaselineMetadata]**](BaselineMetadata.md) | The baseline metadata values. | [optional] 
**timestamps** | **List[datetime]** | The list of timestamps of the baselines. | 

## Example

```python
from openapi_client.models.time_series_baseline import TimeSeriesBaseline

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesBaseline from a JSON string
time_series_baseline_instance = TimeSeriesBaseline.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesBaseline.to_json())

# convert the object into a dict
time_series_baseline_dict = time_series_baseline_instance.to_dict()
# create an instance of TimeSeriesBaseline from a dict
time_series_baseline_from_dict = TimeSeriesBaseline.from_dict(time_series_baseline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


