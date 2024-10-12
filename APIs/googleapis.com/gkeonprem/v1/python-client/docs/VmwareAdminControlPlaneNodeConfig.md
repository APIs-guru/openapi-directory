# VmwareAdminControlPlaneNodeConfig

VmwareAdminControlPlaneNodeConfig contains control plane node configuration for VMware admin cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpus** | **str** | The number of vCPUs for the control-plane node of the admin cluster. | [optional] 
**memory** | **str** | The number of mebibytes of memory for the control-plane node of the admin cluster. | [optional] 
**replicas** | **str** | The number of control plane nodes for this VMware admin cluster. (default: 1 replica). | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_control_plane_node_config import VmwareAdminControlPlaneNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminControlPlaneNodeConfig from a JSON string
vmware_admin_control_plane_node_config_instance = VmwareAdminControlPlaneNodeConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminControlPlaneNodeConfig.to_json())

# convert the object into a dict
vmware_admin_control_plane_node_config_dict = vmware_admin_control_plane_node_config_instance.to_dict()
# create an instance of VmwareAdminControlPlaneNodeConfig from a dict
vmware_admin_control_plane_node_config_from_dict = VmwareAdminControlPlaneNodeConfig.from_dict(vmware_admin_control_plane_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


