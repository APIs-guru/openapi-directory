# DataDisk

Describes a data disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching** | [**Caching**](Caching.md) |  | [optional] 
**create_option** | [**CreateOption**](CreateOption.md) |  | 
**disk_size_gb** | **int** | Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. &lt;br&gt;&lt;br&gt; This value cannot be larger than 1023 GB | [optional] 
**image** | [**VirtualHardDisk**](VirtualHardDisk.md) |  | [optional] 
**lun** | **int** | Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. | 
**managed_disk** | [**ManagedDiskParameters**](ManagedDiskParameters.md) |  | [optional] 
**name** | **str** | The disk name. | [optional] 
**vhd** | [**VirtualHardDisk**](VirtualHardDisk.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_disk import DataDisk

# TODO update the JSON string below
json = "{}"
# create an instance of DataDisk from a JSON string
data_disk_instance = DataDisk.from_json(json)
# print the JSON string representation of the object
print(DataDisk.to_json())

# convert the object into a dict
data_disk_dict = data_disk_instance.to_dict()
# create an instance of DataDisk from a dict
data_disk_from_dict = DataDisk.from_dict(data_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


