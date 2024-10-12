# DiskAttachment

Specifies how to attach a disk to a Replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_name** | **str** | The device name of this disk. | [optional] 
**index** | **int** | A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server. | [optional] 

## Example

```python
from openapi_client.models.disk_attachment import DiskAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of DiskAttachment from a JSON string
disk_attachment_instance = DiskAttachment.from_json(json)
# print the JSON string representation of the object
print(DiskAttachment.to_json())

# convert the object into a dict
disk_attachment_dict = disk_attachment_instance.to_dict()
# create an instance of DiskAttachment from a dict
disk_attachment_from_dict = DiskAttachment.from_dict(disk_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


