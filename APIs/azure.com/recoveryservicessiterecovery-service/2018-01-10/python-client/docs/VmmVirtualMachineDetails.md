# VmmVirtualMachineDetails

VMM fabric provider specific VM settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_details** | [**List[DiskDetails]**](DiskDetails.md) | The Last successful failover time. | [optional] 
**generation** | **str** | The id of the object in fabric. | [optional] 
**has_fibre_channel_adapter** | **str** | A value indicating whether the VM has a fibre channel adapter attached. String value of {SrsDataContract.PresenceStatus} enum. | [optional] 
**has_physical_disk** | **str** | A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum. | [optional] 
**has_shared_vhd** | **str** | A value indicating whether the VM has a shared VHD attached. String value of {SrsDataContract.PresenceStatus} enum. | [optional] 
**os_details** | [**OSDetails**](OSDetails.md) |  | [optional] 
**source_item_id** | **str** | The source id of the object. | [optional] 

## Example

```python
from openapi_client.models.vmm_virtual_machine_details import VmmVirtualMachineDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VmmVirtualMachineDetails from a JSON string
vmm_virtual_machine_details_instance = VmmVirtualMachineDetails.from_json(json)
# print the JSON string representation of the object
print(VmmVirtualMachineDetails.to_json())

# convert the object into a dict
vmm_virtual_machine_details_dict = vmm_virtual_machine_details_instance.to_dict()
# create an instance of VmmVirtualMachineDetails from a dict
vmm_virtual_machine_details_from_dict = VmmVirtualMachineDetails.from_dict(vmm_virtual_machine_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


