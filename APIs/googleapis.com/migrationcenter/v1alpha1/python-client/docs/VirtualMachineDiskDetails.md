# VirtualMachineDiskDetails

Details of VM disks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disks** | [**DiskEntryList**](DiskEntryList.md) |  | [optional] 
**hdd_total_capacity_bytes** | **str** | Disk total Capacity. | [optional] 
**hdd_total_free_bytes** | **str** | Total Disk Free Space. | [optional] 
**lsblk_json** | **str** | Raw lsblk output in json. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_disk_details import VirtualMachineDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineDiskDetails from a JSON string
virtual_machine_disk_details_instance = VirtualMachineDiskDetails.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineDiskDetails.to_json())

# convert the object into a dict
virtual_machine_disk_details_dict = virtual_machine_disk_details_instance.to_dict()
# create an instance of VirtualMachineDiskDetails from a dict
virtual_machine_disk_details_from_dict = VirtualMachineDiskDetails.from_dict(virtual_machine_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


