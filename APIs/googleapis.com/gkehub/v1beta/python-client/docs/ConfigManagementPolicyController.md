# ConfigManagementPolicyController

Configuration for Policy Controller

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_interval_seconds** | **str** | Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. | [optional] 
**enabled** | **bool** | Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. | [optional] 
**exemptable_namespaces** | **List[str]** | The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster. | [optional] 
**log_denies_enabled** | **bool** | Logs all denies and dry run failures. | [optional] 
**monitoring** | [**ConfigManagementPolicyControllerMonitoring**](ConfigManagementPolicyControllerMonitoring.md) |  | [optional] 
**mutation_enabled** | **bool** | Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster. | [optional] 
**referential_rules_enabled** | **bool** | Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. | [optional] 
**template_library_installed** | **bool** | Installs the default template library along with Policy Controller. | [optional] 
**update_time** | **str** | Output only. Last time this membership spec was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.config_management_policy_controller import ConfigManagementPolicyController

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementPolicyController from a JSON string
config_management_policy_controller_instance = ConfigManagementPolicyController.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementPolicyController.to_json())

# convert the object into a dict
config_management_policy_controller_dict = config_management_policy_controller_instance.to_dict()
# create an instance of ConfigManagementPolicyController from a dict
config_management_policy_controller_from_dict = ConfigManagementPolicyController.from_dict(config_management_policy_controller_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


