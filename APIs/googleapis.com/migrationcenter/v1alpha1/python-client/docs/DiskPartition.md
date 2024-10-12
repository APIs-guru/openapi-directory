# DiskPartition

Disk Partition details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_bytes** | **str** | Partition capacity. | [optional] 
**file_system** | **str** | Partition file system. | [optional] 
**free_bytes** | **str** | Partition free space. | [optional] 
**mount_point** | **str** | Mount pount (Linux/Windows) or drive letter (Windows). | [optional] 
**sub_partitions** | [**DiskPartitionList**](DiskPartitionList.md) |  | [optional] 
**type** | **str** | Partition type (e.g. BIOS boot). | [optional] 
**uuid** | **str** | Partition UUID. | [optional] 

## Example

```python
from openapi_client.models.disk_partition import DiskPartition

# TODO update the JSON string below
json = "{}"
# create an instance of DiskPartition from a JSON string
disk_partition_instance = DiskPartition.from_json(json)
# print the JSON string representation of the object
print(DiskPartition.to_json())

# convert the object into a dict
disk_partition_dict = disk_partition_instance.to_dict()
# create an instance of DiskPartition from a dict
disk_partition_from_dict = DiskPartition.from_dict(disk_partition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


