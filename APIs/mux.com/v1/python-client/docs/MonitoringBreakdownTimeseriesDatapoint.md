# MonitoringBreakdownTimeseriesDatapoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_viewers** | **int** |  | [optional] 
**metric_value** | **float** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.monitoring_breakdown_timeseries_datapoint import MonitoringBreakdownTimeseriesDatapoint

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringBreakdownTimeseriesDatapoint from a JSON string
monitoring_breakdown_timeseries_datapoint_instance = MonitoringBreakdownTimeseriesDatapoint.from_json(json)
# print the JSON string representation of the object
print(MonitoringBreakdownTimeseriesDatapoint.to_json())

# convert the object into a dict
monitoring_breakdown_timeseries_datapoint_dict = monitoring_breakdown_timeseries_datapoint_instance.to_dict()
# create an instance of MonitoringBreakdownTimeseriesDatapoint from a dict
monitoring_breakdown_timeseries_datapoint_from_dict = MonitoringBreakdownTimeseriesDatapoint.from_dict(monitoring_breakdown_timeseries_datapoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


