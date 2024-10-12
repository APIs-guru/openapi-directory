# MonitoringBreakdownTimeseriesValues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** |  | [optional] 
**values** | [**List[MonitoringBreakdownTimeseriesDatapoint]**](MonitoringBreakdownTimeseriesDatapoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.monitoring_breakdown_timeseries_values import MonitoringBreakdownTimeseriesValues

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringBreakdownTimeseriesValues from a JSON string
monitoring_breakdown_timeseries_values_instance = MonitoringBreakdownTimeseriesValues.from_json(json)
# print the JSON string representation of the object
print(MonitoringBreakdownTimeseriesValues.to_json())

# convert the object into a dict
monitoring_breakdown_timeseries_values_dict = monitoring_breakdown_timeseries_values_instance.to_dict()
# create an instance of MonitoringBreakdownTimeseriesValues from a dict
monitoring_breakdown_timeseries_values_from_dict = MonitoringBreakdownTimeseriesValues.from_dict(monitoring_breakdown_timeseries_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


