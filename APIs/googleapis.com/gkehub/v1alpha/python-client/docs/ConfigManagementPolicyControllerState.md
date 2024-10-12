# ConfigManagementPolicyControllerState

State for PolicyControllerState.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_state** | [**ConfigManagementGatekeeperDeploymentState**](ConfigManagementGatekeeperDeploymentState.md) |  | [optional] 
**migration** | [**ConfigManagementPolicyControllerMigration**](ConfigManagementPolicyControllerMigration.md) |  | [optional] 
**version** | [**ConfigManagementPolicyControllerVersion**](ConfigManagementPolicyControllerVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.config_management_policy_controller_state import ConfigManagementPolicyControllerState

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementPolicyControllerState from a JSON string
config_management_policy_controller_state_instance = ConfigManagementPolicyControllerState.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementPolicyControllerState.to_json())

# convert the object into a dict
config_management_policy_controller_state_dict = config_management_policy_controller_state_instance.to_dict()
# create an instance of ConfigManagementPolicyControllerState from a dict
config_management_policy_controller_state_from_dict = ConfigManagementPolicyControllerState.from_dict(config_management_policy_controller_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


