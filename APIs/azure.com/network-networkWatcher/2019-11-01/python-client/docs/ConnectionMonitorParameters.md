# ConnectionMonitorParameters

Parameters that define the operation to create a connection monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_start** | **bool** | Determines if the connection monitor will start automatically once created. | [optional] [default to True]
**destination** | [**ConnectionMonitorDestination**](ConnectionMonitorDestination.md) |  | [optional] 
**endpoints** | [**List[ConnectionMonitorEndpoint]**](ConnectionMonitorEndpoint.md) | List of connection monitor endpoints. | [optional] 
**monitoring_interval_in_seconds** | **int** | Monitoring interval in seconds. | [optional] 
**notes** | **str** | Optional notes to be associated with the connection monitor. | [optional] 
**outputs** | [**List[ConnectionMonitorOutput]**](ConnectionMonitorOutput.md) | List of connection monitor outputs. | [optional] 
**source** | [**ConnectionMonitorSource**](ConnectionMonitorSource.md) |  | [optional] 
**test_configurations** | [**List[ConnectionMonitorTestConfiguration]**](ConnectionMonitorTestConfiguration.md) | List of connection monitor test configurations. | [optional] 
**test_groups** | [**List[ConnectionMonitorTestGroup]**](ConnectionMonitorTestGroup.md) | List of connection monitor test groups. | [optional] 

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


