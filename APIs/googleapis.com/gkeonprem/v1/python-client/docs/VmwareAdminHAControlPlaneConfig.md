# VmwareAdminHAControlPlaneConfig

Specifies HA admin control plane config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane_ip_block** | [**VmwareIpBlock**](VmwareIpBlock.md) |  | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_ha_control_plane_config import VmwareAdminHAControlPlaneConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminHAControlPlaneConfig from a JSON string
vmware_admin_ha_control_plane_config_instance = VmwareAdminHAControlPlaneConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminHAControlPlaneConfig.to_json())

# convert the object into a dict
vmware_admin_ha_control_plane_config_dict = vmware_admin_ha_control_plane_config_instance.to_dict()
# create an instance of VmwareAdminHAControlPlaneConfig from a dict
vmware_admin_ha_control_plane_config_from_dict = VmwareAdminHAControlPlaneConfig.from_dict(vmware_admin_ha_control_plane_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


