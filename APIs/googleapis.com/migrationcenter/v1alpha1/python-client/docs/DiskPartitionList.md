# DiskPartitionList

Disk partition list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[DiskPartition]**](DiskPartition.md) | Partition entries. | [optional] 

## Example

```python
from openapi_client.models.disk_partition_list import DiskPartitionList

# TODO update the JSON string below
json = "{}"
# create an instance of DiskPartitionList from a JSON string
disk_partition_list_instance = DiskPartitionList.from_json(json)
# print the JSON string representation of the object
print(DiskPartitionList.to_json())

# convert the object into a dict
disk_partition_list_dict = disk_partition_list_instance.to_dict()
# create an instance of DiskPartitionList from a dict
disk_partition_list_from_dict = DiskPartitionList.from_dict(disk_partition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


