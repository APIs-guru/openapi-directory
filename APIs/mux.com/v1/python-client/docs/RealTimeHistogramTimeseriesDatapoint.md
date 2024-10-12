# RealTimeHistogramTimeseriesDatapoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** |  | [optional] 
**bucket_values** | [**List[RealTimeHistogramTimeseriesBucketValues]**](RealTimeHistogramTimeseriesBucketValues.md) |  | [optional] 
**max_percentage** | **float** |  | [optional] 
**median** | **float** |  | [optional] 
**p95** | **float** |  | [optional] 
**sum** | **int** |  | [optional] 
**timestamp** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.real_time_histogram_timeseries_datapoint import RealTimeHistogramTimeseriesDatapoint

# TODO update the JSON string below
json = "{}"
# create an instance of RealTimeHistogramTimeseriesDatapoint from a JSON string
real_time_histogram_timeseries_datapoint_instance = RealTimeHistogramTimeseriesDatapoint.from_json(json)
# print the JSON string representation of the object
print(RealTimeHistogramTimeseriesDatapoint.to_json())

# convert the object into a dict
real_time_histogram_timeseries_datapoint_dict = real_time_histogram_timeseries_datapoint_instance.to_dict()
# create an instance of RealTimeHistogramTimeseriesDatapoint from a dict
real_time_histogram_timeseries_datapoint_from_dict = RealTimeHistogramTimeseriesDatapoint.from_dict(real_time_histogram_timeseries_datapoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


