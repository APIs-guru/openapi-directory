# Disk

Specifies the disk information fo the HANA instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size_gb** | **int** | Specifies the size of an empty data disk in gigabytes. | [optional] 
**lun** | **int** | Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. | [optional] [readonly] 
**name** | **str** | The disk name. | [optional] 

## Example

```python
from openapi_client.models.disk import Disk

# TODO update the JSON string below
json = "{}"
# create an instance of Disk from a JSON string
disk_instance = Disk.from_json(json)
# print the JSON string representation of the object
print(Disk.to_json())

# convert the object into a dict
disk_dict = disk_instance.to_dict()
# create an instance of Disk from a dict
disk_from_dict = Disk.from_dict(disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


