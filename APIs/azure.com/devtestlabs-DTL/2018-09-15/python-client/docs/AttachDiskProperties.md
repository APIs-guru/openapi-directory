# AttachDiskProperties

Properties of the disk to attach.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**leased_by_lab_vm_id** | **str** | The resource ID of the Lab virtual machine to which the disk is attached. | [optional] 

## Example

```python
from openapi_client.models.attach_disk_properties import AttachDiskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AttachDiskProperties from a JSON string
attach_disk_properties_instance = AttachDiskProperties.from_json(json)
# print the JSON string representation of the object
print(AttachDiskProperties.to_json())

# convert the object into a dict
attach_disk_properties_dict = attach_disk_properties_instance.to_dict()
# create an instance of AttachDiskProperties from a dict
attach_disk_properties_from_dict = AttachDiskProperties.from_dict(attach_disk_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


