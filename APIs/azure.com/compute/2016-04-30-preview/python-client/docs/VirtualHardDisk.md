# VirtualHardDisk

Describes the uri of a disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Specifies the virtual hard disk&#39;s uri. | [optional] 

## Example

```python
from openapi_client.models.virtual_hard_disk import VirtualHardDisk

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualHardDisk from a JSON string
virtual_hard_disk_instance = VirtualHardDisk.from_json(json)
# print the JSON string representation of the object
print(VirtualHardDisk.to_json())

# convert the object into a dict
virtual_hard_disk_dict = virtual_hard_disk_instance.to_dict()
# create an instance of VirtualHardDisk from a dict
virtual_hard_disk_from_dict = VirtualHardDisk.from_dict(virtual_hard_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


