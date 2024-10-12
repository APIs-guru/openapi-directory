# MonitoringHistogramTimeseriesDatapoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** |  | [optional] 
**bucket_values** | [**List[MonitoringHistogramTimeseriesBucketValues]**](MonitoringHistogramTimeseriesBucketValues.md) |  | [optional] 
**max_percentage** | **float** |  | [optional] 
**median** | **float** |  | [optional] 
**p95** | **float** |  | [optional] 
**sum** | **int** |  | [optional] 
**timestamp** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.monitoring_histogram_timeseries_datapoint import MonitoringHistogramTimeseriesDatapoint

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringHistogramTimeseriesDatapoint from a JSON string
monitoring_histogram_timeseries_datapoint_instance = MonitoringHistogramTimeseriesDatapoint.from_json(json)
# print the JSON string representation of the object
print(MonitoringHistogramTimeseriesDatapoint.to_json())

# convert the object into a dict
monitoring_histogram_timeseries_datapoint_dict = monitoring_histogram_timeseries_datapoint_instance.to_dict()
# create an instance of MonitoringHistogramTimeseriesDatapoint from a dict
monitoring_histogram_timeseries_datapoint_from_dict = MonitoringHistogramTimeseriesDatapoint.from_dict(monitoring_histogram_timeseries_datapoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


