# GetMonitoringBreakdownResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[MonitoringBreakdownValue]**](MonitoringBreakdownValue.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_monitoring_breakdown_response import GetMonitoringBreakdownResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetMonitoringBreakdownResponse from a JSON string
get_monitoring_breakdown_response_instance = GetMonitoringBreakdownResponse.from_json(json)
# print the JSON string representation of the object
print(GetMonitoringBreakdownResponse.to_json())

# convert the object into a dict
get_monitoring_breakdown_response_dict = get_monitoring_breakdown_response_instance.to_dict()
# create an instance of GetMonitoringBreakdownResponse from a dict
get_monitoring_breakdown_response_from_dict = GetMonitoringBreakdownResponse.from_dict(get_monitoring_breakdown_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


