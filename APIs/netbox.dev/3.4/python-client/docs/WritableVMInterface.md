# WritableVMInterface


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bridge** | **int** |  | [optional] 
**count_fhrp_groups** | **int** |  | [optional] [readonly] 
**count_ipaddresses** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**enabled** | **bool** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**l2vpn_termination** | **str** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**mac_address** | **str** |  | [optional] 
**mode** | **str** |  | [optional] 
**mtu** | **int** |  | [optional] 
**name** | **str** |  | 
**parent** | **int** |  | [optional] 
**tagged_vlans** | **List[int]** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**untagged_vlan** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**virtual_machine** | **int** |  | 
**vrf** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.writable_vm_interface import WritableVMInterface

# TODO update the JSON string below
json = "{}"
# create an instance of WritableVMInterface from a JSON string
writable_vm_interface_instance = WritableVMInterface.from_json(json)
# print the JSON string representation of the object
print(WritableVMInterface.to_json())

# convert the object into a dict
writable_vm_interface_dict = writable_vm_interface_instance.to_dict()
# create an instance of WritableVMInterface from a dict
writable_vm_interface_from_dict = WritableVMInterface.from_dict(writable_vm_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


