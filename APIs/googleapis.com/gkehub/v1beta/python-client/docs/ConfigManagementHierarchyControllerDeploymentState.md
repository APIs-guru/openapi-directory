# ConfigManagementHierarchyControllerDeploymentState

Deployment state for Hierarchy Controller

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension** | **str** | The deployment state for Hierarchy Controller extension (e.g. v0.7.0-hc.1) | [optional] 
**hnc** | **str** | The deployment state for open source HNC (e.g. v0.7.0-hc.0) | [optional] 

## Example

```python
from openapi_client.models.config_management_hierarchy_controller_deployment_state import ConfigManagementHierarchyControllerDeploymentState

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementHierarchyControllerDeploymentState from a JSON string
config_management_hierarchy_controller_deployment_state_instance = ConfigManagementHierarchyControllerDeploymentState.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementHierarchyControllerDeploymentState.to_json())

# convert the object into a dict
config_management_hierarchy_controller_deployment_state_dict = config_management_hierarchy_controller_deployment_state_instance.to_dict()
# create an instance of ConfigManagementHierarchyControllerDeploymentState from a dict
config_management_hierarchy_controller_deployment_state_from_dict = ConfigManagementHierarchyControllerDeploymentState.from_dict(config_management_hierarchy_controller_deployment_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


