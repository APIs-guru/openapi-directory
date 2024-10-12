# GkeBackupAgentConfig

Configuration for the Backup for GKE Agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the Backup for GKE agent is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.gke_backup_agent_config import GkeBackupAgentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GkeBackupAgentConfig from a JSON string
gke_backup_agent_config_instance = GkeBackupAgentConfig.from_json(json)
# print the JSON string representation of the object
print(GkeBackupAgentConfig.to_json())

# convert the object into a dict
gke_backup_agent_config_dict = gke_backup_agent_config_instance.to_dict()
# create an instance of GkeBackupAgentConfig from a dict
gke_backup_agent_config_from_dict = GkeBackupAgentConfig.from_dict(gke_backup_agent_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


