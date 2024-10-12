# GetMonitoringBreakdownTimeseriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[MonitoringBreakdownTimeseriesValues]**](MonitoringBreakdownTimeseriesValues.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_monitoring_breakdown_timeseries_response import GetMonitoringBreakdownTimeseriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetMonitoringBreakdownTimeseriesResponse from a JSON string
get_monitoring_breakdown_timeseries_response_instance = GetMonitoringBreakdownTimeseriesResponse.from_json(json)
# print the JSON string representation of the object
print(GetMonitoringBreakdownTimeseriesResponse.to_json())

# convert the object into a dict
get_monitoring_breakdown_timeseries_response_dict = get_monitoring_breakdown_timeseries_response_instance.to_dict()
# create an instance of GetMonitoringBreakdownTimeseriesResponse from a dict
get_monitoring_breakdown_timeseries_response_from_dict = GetMonitoringBreakdownTimeseriesResponse.from_dict(get_monitoring_breakdown_timeseries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


