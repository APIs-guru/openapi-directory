# RestoreConfig

Configuration of a restore. Next id: 14

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_namespaces** | **bool** | Restore all namespaced resources in the Backup if set to \&quot;True\&quot;. Specifying this field to \&quot;False\&quot; is an error. | [optional] 
**cluster_resource_conflict_policy** | **str** | Optional. Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster. This MUST be set to a value other than CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED if cluster_resource_restore_scope is not empty. | [optional] 
**cluster_resource_restore_scope** | [**ClusterResourceRestoreScope**](ClusterResourceRestoreScope.md) |  | [optional] 
**excluded_namespaces** | [**Namespaces**](Namespaces.md) |  | [optional] 
**namespaced_resource_restore_mode** | **str** | Optional. Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster. This MUST be set to a value other than NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED. | [optional] 
**no_namespaces** | **bool** | Do not restore any namespaced resources if set to \&quot;True\&quot;. Specifying this field to \&quot;False\&quot; is not allowed. | [optional] 
**selected_applications** | [**NamespacedNames**](NamespacedNames.md) |  | [optional] 
**selected_namespaces** | [**Namespaces**](Namespaces.md) |  | [optional] 
**substitution_rules** | [**List[SubstitutionRule]**](SubstitutionRule.md) | Optional. A list of transformation rules to be applied against Kubernetes resources as they are selected for restoration from a Backup. Rules are executed in order defined - this order matters, as changes made by a rule may impact the filtering logic of subsequent rules. An empty list means no substitution will occur. | [optional] 
**transformation_rules** | [**List[TransformationRule]**](TransformationRule.md) | Optional. A list of transformation rules to be applied against Kubernetes resources as they are selected for restoration from a Backup. Rules are executed in order defined - this order matters, as changes made by a rule may impact the filtering logic of subsequent rules. An empty list means no transformation will occur. | [optional] 
**volume_data_restore_policy** | **str** | Optional. Specifies the mechanism to be used to restore volume data. Default: VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED (will be treated as NO_VOLUME_DATA_RESTORATION). | [optional] 

## Example

```python
from openapi_client.models.restore_config import RestoreConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreConfig from a JSON string
restore_config_instance = RestoreConfig.from_json(json)
# print the JSON string representation of the object
print(RestoreConfig.to_json())

# convert the object into a dict
restore_config_dict = restore_config_instance.to_dict()
# create an instance of RestoreConfig from a dict
restore_config_from_dict = RestoreConfig.from_dict(restore_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


