# ConnectionMonitorSource

Describes the source of connection monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | The source port used by connection monitor. | [optional] 
**resource_id** | **str** | The ID of the resource used as the source by connection monitor. | 

## Example

```python
from openapi_client.models.connection_monitor_source import ConnectionMonitorSource

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorSource from a JSON string
connection_monitor_source_instance = ConnectionMonitorSource.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorSource.to_json())

# convert the object into a dict
connection_monitor_source_dict = connection_monitor_source_instance.to_dict()
# create an instance of ConnectionMonitorSource from a dict
connection_monitor_source_from_dict = ConnectionMonitorSource.from_dict(connection_monitor_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


