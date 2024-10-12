# ConnectionMonitor

Parameters that define the operation to create a connection monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Connection monitor location. | [optional] 
**properties** | [**ConnectionMonitorParameters**](ConnectionMonitorParameters.md) |  | 
**tags** | **Dict[str, str]** | Connection monitor tags. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor import ConnectionMonitor

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitor from a JSON string
connection_monitor_instance = ConnectionMonitor.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitor.to_json())

# convert the object into a dict
connection_monitor_dict = connection_monitor_instance.to_dict()
# create an instance of ConnectionMonitor from a dict
connection_monitor_from_dict = ConnectionMonitor.from_dict(connection_monitor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


