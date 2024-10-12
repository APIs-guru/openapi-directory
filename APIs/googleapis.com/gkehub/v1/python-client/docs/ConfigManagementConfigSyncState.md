# ConfigManagementConfigSyncState

State information for ConfigSync

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_state** | [**ConfigManagementConfigSyncDeploymentState**](ConfigManagementConfigSyncDeploymentState.md) |  | [optional] 
**errors** | [**List[ConfigManagementConfigSyncError]**](ConfigManagementConfigSyncError.md) | Errors pertaining to the installation of Config Sync. | [optional] 
**reposync_crd** | **str** | The state of the Reposync CRD | [optional] 
**rootsync_crd** | **str** | The state of the RootSync CRD | [optional] 
**state** | **str** | The state of CS This field summarizes the other fields in this message. | [optional] 
**sync_state** | [**ConfigManagementSyncState**](ConfigManagementSyncState.md) |  | [optional] 
**version** | [**ConfigManagementConfigSyncVersion**](ConfigManagementConfigSyncVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.config_management_config_sync_state import ConfigManagementConfigSyncState

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementConfigSyncState from a JSON string
config_management_config_sync_state_instance = ConfigManagementConfigSyncState.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementConfigSyncState.to_json())

# convert the object into a dict
config_management_config_sync_state_dict = config_management_config_sync_state_instance.to_dict()
# create an instance of ConfigManagementConfigSyncState from a dict
config_management_config_sync_state_from_dict = ConfigManagementConfigSyncState.from_dict(config_management_config_sync_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


