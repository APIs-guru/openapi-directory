# ConnectionMonitorParameters

Parameters that define the operation to create a connection monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_start** | **bool** | Determines if the connection monitor will start automatically once created. | [optional] [default to True]
**destination** | [**ConnectionMonitorDestination**](ConnectionMonitorDestination.md) |  | 
**monitoring_interval_in_seconds** | **int** | Monitoring interval in seconds. | [optional] 
**source** | [**ConnectionMonitorSource**](ConnectionMonitorSource.md) |  | 

## Example

```python
from openapi_client.models.connection_monitor_parameters import ConnectionMonitorParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorParameters from a JSON string
connection_monitor_parameters_instance = ConnectionMonitorParameters.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorParameters.to_json())

# convert the object into a dict
connection_monitor_parameters_dict = connection_monitor_parameters_instance.to_dict()
# create an instance of ConnectionMonitorParameters from a dict
connection_monitor_parameters_from_dict = ConnectionMonitorParameters.from_dict(connection_monitor_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


