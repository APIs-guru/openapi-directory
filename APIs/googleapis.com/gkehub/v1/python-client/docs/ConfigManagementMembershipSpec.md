# ConfigManagementMembershipSpec

**Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | **str** | The user-specified cluster name used by Config Sync cluster-name-selector annotation or ClusterSelector, for applying configs to only a subset of clusters. Omit this field if the cluster&#39;s fleet membership name is used by Config Sync cluster-name-selector annotation or ClusterSelector. Set this field if a name different from the cluster&#39;s fleet membership name is used by Config Sync cluster-name-selector annotation or ClusterSelector. | [optional] 
**config_sync** | [**ConfigManagementConfigSync**](ConfigManagementConfigSync.md) |  | [optional] 
**hierarchy_controller** | [**ConfigManagementHierarchyControllerConfig**](ConfigManagementHierarchyControllerConfig.md) |  | [optional] 
**management** | **str** | Enables automatic Feature management. | [optional] 
**policy_controller** | [**ConfigManagementPolicyController**](ConfigManagementPolicyController.md) |  | [optional] 
**version** | **str** | Version of ACM installed. | [optional] 

## Example

```python
from openapi_client.models.config_management_membership_spec import ConfigManagementMembershipSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementMembershipSpec from a JSON string
config_management_membership_spec_instance = ConfigManagementMembershipSpec.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementMembershipSpec.to_json())

# convert the object into a dict
config_management_membership_spec_dict = config_management_membership_spec_instance.to_dict()
# create an instance of ConfigManagementMembershipSpec from a dict
config_management_membership_spec_from_dict = ConfigManagementMembershipSpec.from_dict(config_management_membership_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


