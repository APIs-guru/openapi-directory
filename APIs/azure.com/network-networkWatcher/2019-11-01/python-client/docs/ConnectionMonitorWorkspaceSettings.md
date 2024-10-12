# ConnectionMonitorWorkspaceSettings

Describes the settings for producing output into a log analytics workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace_resource_id** | **str** | Log analytics workspace resource ID. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_workspace_settings import ConnectionMonitorWorkspaceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorWorkspaceSettings from a JSON string
connection_monitor_workspace_settings_instance = ConnectionMonitorWorkspaceSettings.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorWorkspaceSettings.to_json())

# convert the object into a dict
connection_monitor_workspace_settings_dict = connection_monitor_workspace_settings_instance.to_dict()
# create an instance of ConnectionMonitorWorkspaceSettings from a dict
connection_monitor_workspace_settings_from_dict = ConnectionMonitorWorkspaceSettings.from_dict(connection_monitor_workspace_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


