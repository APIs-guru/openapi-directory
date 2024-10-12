# ConfigManagementHierarchyControllerState

State for Hierarchy Controller

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | [**ConfigManagementHierarchyControllerDeploymentState**](ConfigManagementHierarchyControllerDeploymentState.md) |  | [optional] 
**version** | [**ConfigManagementHierarchyControllerVersion**](ConfigManagementHierarchyControllerVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.config_management_hierarchy_controller_state import ConfigManagementHierarchyControllerState

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementHierarchyControllerState from a JSON string
config_management_hierarchy_controller_state_instance = ConfigManagementHierarchyControllerState.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementHierarchyControllerState.to_json())

# convert the object into a dict
config_management_hierarchy_controller_state_dict = config_management_hierarchy_controller_state_instance.to_dict()
# create an instance of ConfigManagementHierarchyControllerState from a dict
config_management_hierarchy_controller_state_from_dict = ConfigManagementHierarchyControllerState.from_dict(config_management_hierarchy_controller_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


