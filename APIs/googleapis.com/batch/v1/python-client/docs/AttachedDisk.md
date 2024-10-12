# AttachedDisk

A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_name** | **str** | Device name that the guest operating system will see. It is used by Runnable.volumes field to mount disks. So please specify the device_name if you want Batch to help mount the disk, and it should match the device_name field in volumes. | [optional] 
**existing_disk** | **str** | Name of an existing PD. | [optional] 
**new_disk** | [**Disk**](Disk.md) |  | [optional] 

## Example

```python
from openapi_client.models.attached_disk import AttachedDisk

# TODO update the JSON string below
json = "{}"
# create an instance of AttachedDisk from a JSON string
attached_disk_instance = AttachedDisk.from_json(json)
# print the JSON string representation of the object
print(AttachedDisk.to_json())

# convert the object into a dict
attached_disk_dict = attached_disk_instance.to_dict()
# create an instance of AttachedDisk from a dict
attached_disk_from_dict = AttachedDisk.from_dict(attached_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


