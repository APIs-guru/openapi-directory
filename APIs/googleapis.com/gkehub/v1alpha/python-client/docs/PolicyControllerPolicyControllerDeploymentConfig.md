# PolicyControllerPolicyControllerDeploymentConfig

Deployment-specific configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_resources** | [**PolicyControllerResourceRequirements**](PolicyControllerResourceRequirements.md) |  | [optional] 
**pod_affinity** | **str** | Pod affinity configuration. | [optional] 
**pod_anti_affinity** | **bool** | Pod anti-affinity enablement. Deprecated: use &#x60;pod_affinity&#x60; instead. | [optional] 
**pod_tolerations** | [**List[PolicyControllerToleration]**](PolicyControllerToleration.md) | Pod tolerations of node taints. | [optional] 
**replica_count** | **str** | Pod replica count. | [optional] 

## Example

```python
from openapi_client.models.policy_controller_policy_controller_deployment_config import PolicyControllerPolicyControllerDeploymentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerPolicyControllerDeploymentConfig from a JSON string
policy_controller_policy_controller_deployment_config_instance = PolicyControllerPolicyControllerDeploymentConfig.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerPolicyControllerDeploymentConfig.to_json())

# convert the object into a dict
policy_controller_policy_controller_deployment_config_dict = policy_controller_policy_controller_deployment_config_instance.to_dict()
# create an instance of PolicyControllerPolicyControllerDeploymentConfig from a dict
policy_controller_policy_controller_deployment_config_from_dict = PolicyControllerPolicyControllerDeploymentConfig.from_dict(policy_controller_policy_controller_deployment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


