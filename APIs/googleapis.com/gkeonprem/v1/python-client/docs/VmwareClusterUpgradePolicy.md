# VmwareClusterUpgradePolicy

VmwareClusterUpgradePolicy defines the cluster upgrade policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane_only** | **bool** | Controls whether the upgrade applies to the control plane only. | [optional] 

## Example

```python
from openapi_client.models.vmware_cluster_upgrade_policy import VmwareClusterUpgradePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareClusterUpgradePolicy from a JSON string
vmware_cluster_upgrade_policy_instance = VmwareClusterUpgradePolicy.from_json(json)
# print the JSON string representation of the object
print(VmwareClusterUpgradePolicy.to_json())

# convert the object into a dict
vmware_cluster_upgrade_policy_dict = vmware_cluster_upgrade_policy_instance.to_dict()
# create an instance of VmwareClusterUpgradePolicy from a dict
vmware_cluster_upgrade_policy_from_dict = VmwareClusterUpgradePolicy.from_dict(vmware_cluster_upgrade_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


