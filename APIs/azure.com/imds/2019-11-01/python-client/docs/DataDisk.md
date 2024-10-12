# DataDisk

This contains information about the data disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching** | **str** | This is the caching requirements. | [optional] 
**create_option** | **str** | This is information about how the VM was created. | [optional] 
**disk_size_gb** | **str** | This is the size of the disk in GB. | [optional] 
**image** | [**DiskImage**](DiskImage.md) |  | [optional] 
**lun** | **str** | This is the logical unit number of the disk. | [optional] 
**managed_disk** | [**ManagedDisk**](ManagedDisk.md) |  | [optional] 
**name** | **str** | This is the disk name. | [optional] 
**vhd** | [**VirtualHardDisk**](VirtualHardDisk.md) |  | [optional] 
**write_accelerator_enabled** | **str** | This specifies whether or not writeAccelerator is enabled on the disk. | [optional] 

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


