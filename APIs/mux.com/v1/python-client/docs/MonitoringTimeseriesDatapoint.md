# MonitoringTimeseriesDatapoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_viewers** | **int** |  | [optional] 
**var_date** | **str** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.monitoring_timeseries_datapoint import MonitoringTimeseriesDatapoint

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringTimeseriesDatapoint from a JSON string
monitoring_timeseries_datapoint_instance = MonitoringTimeseriesDatapoint.from_json(json)
# print the JSON string representation of the object
print(MonitoringTimeseriesDatapoint.to_json())

# convert the object into a dict
monitoring_timeseries_datapoint_dict = monitoring_timeseries_datapoint_instance.to_dict()
# create an instance of MonitoringTimeseriesDatapoint from a dict
monitoring_timeseries_datapoint_from_dict = MonitoringTimeseriesDatapoint.from_dict(monitoring_timeseries_datapoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


