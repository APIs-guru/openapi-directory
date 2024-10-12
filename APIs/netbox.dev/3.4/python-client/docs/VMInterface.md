# VMInterface


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bridge** | [**NestedVMInterface**](NestedVMInterface.md) |  | [optional] 
**count_fhrp_groups** | **int** |  | [optional] [readonly] 
**count_ipaddresses** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**enabled** | **bool** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**l2vpn_termination** | [**NestedL2VPNTermination**](NestedL2VPNTermination.md) |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**mac_address** | **str** |  | [optional] 
**mode** | [**Mode**](Mode.md) |  | [optional] 
**mtu** | **int** |  | [optional] 
**name** | **str** |  | 
**parent** | [**NestedVMInterface**](NestedVMInterface.md) |  | [optional] 
**tagged_vlans** | [**List[NestedVLAN]**](NestedVLAN.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**untagged_vlan** | [**NestedVLAN**](NestedVLAN.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**virtual_machine** | [**NestedVirtualMachine**](NestedVirtualMachine.md) |  | 
**vrf** | [**NestedVRF**](NestedVRF.md) |  | [optional] 

## Example

```python
from openapi_client.models.vm_interface import VMInterface

# TODO update the JSON string below
json = "{}"
# create an instance of VMInterface from a JSON string
vm_interface_instance = VMInterface.from_json(json)
# print the JSON string representation of the object
print(VMInterface.to_json())

# convert the object into a dict
vm_interface_dict = vm_interface_instance.to_dict()
# create an instance of VMInterface from a dict
vm_interface_from_dict = VMInterface.from_dict(vm_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


