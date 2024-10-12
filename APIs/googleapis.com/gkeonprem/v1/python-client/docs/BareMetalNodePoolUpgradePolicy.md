# BareMetalNodePoolUpgradePolicy

BareMetalNodePoolUpgradePolicy defines the node pool upgrade policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parallel_upgrade_config** | [**BareMetalParallelUpgradeConfig**](BareMetalParallelUpgradeConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_node_pool_upgrade_policy import BareMetalNodePoolUpgradePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalNodePoolUpgradePolicy from a JSON string
bare_metal_node_pool_upgrade_policy_instance = BareMetalNodePoolUpgradePolicy.from_json(json)
# print the JSON string representation of the object
print(BareMetalNodePoolUpgradePolicy.to_json())

# convert the object into a dict
bare_metal_node_pool_upgrade_policy_dict = bare_metal_node_pool_upgrade_policy_instance.to_dict()
# create an instance of BareMetalNodePoolUpgradePolicy from a dict
bare_metal_node_pool_upgrade_policy_from_dict = BareMetalNodePoolUpgradePolicy.from_dict(bare_metal_node_pool_upgrade_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


