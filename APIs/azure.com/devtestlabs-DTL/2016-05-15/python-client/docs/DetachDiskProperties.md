# DetachDiskProperties

Properties of the disk to detach.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**leased_by_lab_vm_id** | **str** | The resource ID of the Lab VM to which the disk is attached. | [optional] 

## Example

```python
from openapi_client.models.detach_disk_properties import DetachDiskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DetachDiskProperties from a JSON string
detach_disk_properties_instance = DetachDiskProperties.from_json(json)
# print the JSON string representation of the object
print(DetachDiskProperties.to_json())

# convert the object into a dict
detach_disk_properties_dict = detach_disk_properties_instance.to_dict()
# create an instance of DetachDiskProperties from a dict
detach_disk_properties_from_dict = DetachDiskProperties.from_dict(detach_disk_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


