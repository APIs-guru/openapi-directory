# ConfigManagementGatekeeperDeploymentState

State of Policy Controller installation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gatekeeper_audit** | **str** | Status of gatekeeper-audit deployment. | [optional] 
**gatekeeper_controller_manager_state** | **str** | Status of gatekeeper-controller-manager pod. | [optional] 
**gatekeeper_mutation** | **str** | Status of the pod serving the mutation webhook. | [optional] 

## Example

```python
from openapi_client.models.config_management_gatekeeper_deployment_state import ConfigManagementGatekeeperDeploymentState

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementGatekeeperDeploymentState from a JSON string
config_management_gatekeeper_deployment_state_instance = ConfigManagementGatekeeperDeploymentState.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementGatekeeperDeploymentState.to_json())

# convert the object into a dict
config_management_gatekeeper_deployment_state_dict = config_management_gatekeeper_deployment_state_instance.to_dict()
# create an instance of ConfigManagementGatekeeperDeploymentState from a dict
config_management_gatekeeper_deployment_state_from_dict = ConfigManagementGatekeeperDeploymentState.from_dict(config_management_gatekeeper_deployment_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


