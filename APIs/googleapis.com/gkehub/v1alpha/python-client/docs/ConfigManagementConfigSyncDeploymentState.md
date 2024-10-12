# ConfigManagementConfigSyncDeploymentState

The state of ConfigSync's deployment on a cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admission_webhook** | **str** | Deployment state of admission-webhook | [optional] 
**git_sync** | **str** | Deployment state of the git-sync pod | [optional] 
**importer** | **str** | Deployment state of the importer pod | [optional] 
**monitor** | **str** | Deployment state of the monitor pod | [optional] 
**reconciler_manager** | **str** | Deployment state of reconciler-manager pod | [optional] 
**root_reconciler** | **str** | Deployment state of root-reconciler | [optional] 
**syncer** | **str** | Deployment state of the syncer pod | [optional] 

## Example

```python
from openapi_client.models.config_management_config_sync_deployment_state import ConfigManagementConfigSyncDeploymentState

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementConfigSyncDeploymentState from a JSON string
config_management_config_sync_deployment_state_instance = ConfigManagementConfigSyncDeploymentState.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementConfigSyncDeploymentState.to_json())

# convert the object into a dict
config_management_config_sync_deployment_state_dict = config_management_config_sync_deployment_state_instance.to_dict()
# create an instance of ConfigManagementConfigSyncDeploymentState from a dict
config_management_config_sync_deployment_state_from_dict = ConfigManagementConfigSyncDeploymentState.from_dict(config_management_config_sync_deployment_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


