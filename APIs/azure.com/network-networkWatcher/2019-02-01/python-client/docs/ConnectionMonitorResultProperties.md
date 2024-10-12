# ConnectionMonitorResultProperties

Describes the properties of a connection monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monitoring_status** | **str** | The monitoring status of the connection monitor. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**start_time** | **datetime** | The date and time when the connection monitor was started. | [optional] 
**auto_start** | **bool** | Determines if the connection monitor will start automatically once created. | [optional] [default to True]
**destination** | [**ConnectionMonitorDestination**](ConnectionMonitorDestination.md) |  | 
**monitoring_interval_in_seconds** | **int** | Monitoring interval in seconds. | [optional] 
**source** | [**ConnectionMonitorSource**](ConnectionMonitorSource.md) |  | 

## Example

```python
from openapi_client.models.connection_monitor_result_properties import ConnectionMonitorResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorResultProperties from a JSON string
connection_monitor_result_properties_instance = ConnectionMonitorResultProperties.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorResultProperties.to_json())

# convert the object into a dict
connection_monitor_result_properties_dict = connection_monitor_result_properties_instance.to_dict()
# create an instance of ConnectionMonitorResultProperties from a dict
connection_monitor_result_properties_from_dict = ConnectionMonitorResultProperties.from_dict(connection_monitor_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


