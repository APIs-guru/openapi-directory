# BareMetalClusterUpgradePolicy

BareMetalClusterUpgradePolicy defines the cluster upgrade policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **str** | Specifies which upgrade policy to use. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_cluster_upgrade_policy import BareMetalClusterUpgradePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalClusterUpgradePolicy from a JSON string
bare_metal_cluster_upgrade_policy_instance = BareMetalClusterUpgradePolicy.from_json(json)
# print the JSON string representation of the object
print(BareMetalClusterUpgradePolicy.to_json())

# convert the object into a dict
bare_metal_cluster_upgrade_policy_dict = bare_metal_cluster_upgrade_policy_instance.to_dict()
# create an instance of BareMetalClusterUpgradePolicy from a dict
bare_metal_cluster_upgrade_policy_from_dict = BareMetalClusterUpgradePolicy.from_dict(bare_metal_cluster_upgrade_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


