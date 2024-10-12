# VmwareControlPlaneV2Config

Specifies control plane V2 config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane_ip_block** | [**VmwareIpBlock**](VmwareIpBlock.md) |  | [optional] 

## Example

```python
from openapi_client.models.vmware_control_plane_v2_config import VmwareControlPlaneV2Config

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareControlPlaneV2Config from a JSON string
vmware_control_plane_v2_config_instance = VmwareControlPlaneV2Config.from_json(json)
# print the JSON string representation of the object
print(VmwareControlPlaneV2Config.to_json())

# convert the object into a dict
vmware_control_plane_v2_config_dict = vmware_control_plane_v2_config_instance.to_dict()
# create an instance of VmwareControlPlaneV2Config from a dict
vmware_control_plane_v2_config_from_dict = VmwareControlPlaneV2Config.from_dict(vmware_control_plane_v2_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


