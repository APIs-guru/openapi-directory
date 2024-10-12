# VmwareControlPlaneNodeConfig

Specifies control plane node config for the VMware user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_resize_config** | [**VmwareAutoResizeConfig**](VmwareAutoResizeConfig.md) |  | [optional] 
**cpus** | **str** | The number of CPUs for each admin cluster node that serve as control planes for this VMware user cluster. (default: 4 CPUs) | [optional] 
**memory** | **str** | The megabytes of memory for each admin cluster node that serves as a control plane for this VMware user cluster (default: 8192 MB memory). | [optional] 
**replicas** | **str** | The number of control plane nodes for this VMware user cluster. (default: 1 replica). | [optional] 
**vsphere_config** | [**VmwareControlPlaneVsphereConfig**](VmwareControlPlaneVsphereConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.vmware_control_plane_node_config import VmwareControlPlaneNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareControlPlaneNodeConfig from a JSON string
vmware_control_plane_node_config_instance = VmwareControlPlaneNodeConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareControlPlaneNodeConfig.to_json())

# convert the object into a dict
vmware_control_plane_node_config_dict = vmware_control_plane_node_config_instance.to_dict()
# create an instance of VmwareControlPlaneNodeConfig from a dict
vmware_control_plane_node_config_from_dict = VmwareControlPlaneNodeConfig.from_dict(vmware_control_plane_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


