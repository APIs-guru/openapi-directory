# HyperVVirtualMachineDetails

Single Host fabric provider specific VM settings.

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
from openapi_client.models.hyper_v_virtual_machine_details import HyperVVirtualMachineDetails

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVVirtualMachineDetails from a JSON string
hyper_v_virtual_machine_details_instance = HyperVVirtualMachineDetails.from_json(json)
# print the JSON string representation of the object
print(HyperVVirtualMachineDetails.to_json())

# convert the object into a dict
hyper_v_virtual_machine_details_dict = hyper_v_virtual_machine_details_instance.to_dict()
# create an instance of HyperVVirtualMachineDetails from a dict
hyper_v_virtual_machine_details_from_dict = HyperVVirtualMachineDetails.from_dict(hyper_v_virtual_machine_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


