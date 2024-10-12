# ConnectionMonitorOutput

Describes a connection monitor output destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Connection monitor output destination type. Currently, only \&quot;Workspace\&quot; is supported. | [optional] 
**workspace_settings** | [**ConnectionMonitorWorkspaceSettings**](ConnectionMonitorWorkspaceSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_output import ConnectionMonitorOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorOutput from a JSON string
connection_monitor_output_instance = ConnectionMonitorOutput.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorOutput.to_json())

# convert the object into a dict
connection_monitor_output_dict = connection_monitor_output_instance.to_dict()
# create an instance of ConnectionMonitorOutput from a dict
connection_monitor_output_from_dict = ConnectionMonitorOutput.from_dict(connection_monitor_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


