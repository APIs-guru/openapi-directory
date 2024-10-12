# RealTimeTimeseriesDatapoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_viewers** | **int** |  | [optional] 
**var_date** | **str** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.real_time_timeseries_datapoint import RealTimeTimeseriesDatapoint

# TODO update the JSON string below
json = "{}"
# create an instance of RealTimeTimeseriesDatapoint from a JSON string
real_time_timeseries_datapoint_instance = RealTimeTimeseriesDatapoint.from_json(json)
# print the JSON string representation of the object
print(RealTimeTimeseriesDatapoint.to_json())

# convert the object into a dict
real_time_timeseries_datapoint_dict = real_time_timeseries_datapoint_instance.to_dict()
# create an instance of RealTimeTimeseriesDatapoint from a dict
real_time_timeseries_datapoint_from_dict = RealTimeTimeseriesDatapoint.from_dict(real_time_timeseries_datapoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


