# ConnectionMonitorDestination

Describes the destination of connection monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the connection monitor destination (IP or domain name). | [optional] 
**port** | **int** | The destination port used by connection monitor. | [optional] 
**resource_id** | **str** | The ID of the resource used as the destination by connection monitor. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_destination import ConnectionMonitorDestination

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorDestination from a JSON string
connection_monitor_destination_instance = ConnectionMonitorDestination.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorDestination.to_json())

# convert the object into a dict
connection_monitor_destination_dict = connection_monitor_destination_instance.to_dict()
# create an instance of ConnectionMonitorDestination from a dict
connection_monitor_destination_from_dict = ConnectionMonitorDestination.from_dict(connection_monitor_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


