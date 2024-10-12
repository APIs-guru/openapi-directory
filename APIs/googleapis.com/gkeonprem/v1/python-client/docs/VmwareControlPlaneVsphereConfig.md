# VmwareControlPlaneVsphereConfig

Specifies control plane node config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datastore** | **str** | The Vsphere datastore used by the control plane Node. | [optional] 
**storage_policy_name** | **str** | The Vsphere storage policy used by the control plane Node. | [optional] 

## Example

```python
from openapi_client.models.vmware_control_plane_vsphere_config import VmwareControlPlaneVsphereConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareControlPlaneVsphereConfig from a JSON string
vmware_control_plane_vsphere_config_instance = VmwareControlPlaneVsphereConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareControlPlaneVsphereConfig.to_json())

# convert the object into a dict
vmware_control_plane_vsphere_config_dict = vmware_control_plane_vsphere_config_instance.to_dict()
# create an instance of VmwareControlPlaneVsphereConfig from a dict
vmware_control_plane_vsphere_config_from_dict = VmwareControlPlaneVsphereConfig.from_dict(vmware_control_plane_vsphere_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


