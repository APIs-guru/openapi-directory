# PolicyControllerHubConfig

Configuration for Policy Controller

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_interval_seconds** | **str** | Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. | [optional] 
**constraint_violation_limit** | **str** | The maximum number of audit violations to be stored in a constraint. If not set, the internal default (currently 20) will be used. | [optional] 
**deployment_configs** | [**Dict[str, PolicyControllerPolicyControllerDeploymentConfig]**](PolicyControllerPolicyControllerDeploymentConfig.md) | Map of deployment configs to deployments (\&quot;admission\&quot;, \&quot;audit\&quot;, \&quot;mutation&#39;). | [optional] 
**exemptable_namespaces** | **List[str]** | The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster. | [optional] 
**install_spec** | **str** | The install_spec represents the intended state specified by the latest request that mutated install_spec in the feature spec, not the lifecycle state of the feature observed by the Hub feature controller that is reported in the feature state. | [optional] 
**log_denies_enabled** | **bool** | Logs all denies and dry run failures. | [optional] 
**monitoring** | [**PolicyControllerMonitoringConfig**](PolicyControllerMonitoringConfig.md) |  | [optional] 
**mutation_enabled** | **bool** | Enables the ability to mutate resources using Policy Controller. | [optional] 
**policy_content** | [**PolicyControllerPolicyContentSpec**](PolicyControllerPolicyContentSpec.md) |  | [optional] 
**referential_rules_enabled** | **bool** | Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. | [optional] 

## Example

```python
from openapi_client.models.policy_controller_hub_config import PolicyControllerHubConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerHubConfig from a JSON string
policy_controller_hub_config_instance = PolicyControllerHubConfig.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerHubConfig.to_json())

# convert the object into a dict
policy_controller_hub_config_dict = policy_controller_hub_config_instance.to_dict()
# create an instance of PolicyControllerHubConfig from a dict
policy_controller_hub_config_from_dict = PolicyControllerHubConfig.from_dict(policy_controller_hub_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


