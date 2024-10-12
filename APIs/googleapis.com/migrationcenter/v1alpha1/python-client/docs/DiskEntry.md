# DiskEntry

Single disk entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_label** | **str** | Disk label. | [optional] 
**disk_label_type** | **str** | Disk label type (e.g. BIOS/GPT) | [optional] 
**hw_address** | **str** | Disk hardware address (e.g. 0:1 for SCSI). | [optional] 
**interface_type** | **str** | Disks interface type (e.g. SATA/SCSI) | [optional] 
**partitions** | [**DiskPartitionList**](DiskPartitionList.md) |  | [optional] 
**status** | **str** | Disk status (e.g. online). | [optional] 
**total_capacity_bytes** | **str** | Disk capacity. | [optional] 
**total_free_bytes** | **str** | Disk free space. | [optional] 
**vmware_config** | [**VmwareDiskConfig**](VmwareDiskConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.disk_entry import DiskEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEntry from a JSON string
disk_entry_instance = DiskEntry.from_json(json)
# print the JSON string representation of the object
print(DiskEntry.to_json())

# convert the object into a dict
disk_entry_dict = disk_entry_instance.to_dict()
# create an instance of DiskEntry from a dict
disk_entry_from_dict = DiskEntry.from_dict(disk_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


