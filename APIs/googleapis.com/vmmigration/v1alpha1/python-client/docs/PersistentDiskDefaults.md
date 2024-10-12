# PersistentDiskDefaults

Details for creation of a Persistent Disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_labels** | **Dict[str, str]** | A map of labels to associate with the Persistent Disk. | [optional] 
**disk_name** | **str** | Optional. The name of the Persistent Disk to create. | [optional] 
**disk_type** | **str** | The disk type to use. | [optional] 
**encryption** | [**Encryption**](Encryption.md) |  | [optional] 
**source_disk_number** | **int** | Required. The ordinal number of the source VM disk. | [optional] 
**vm_attachment_details** | [**VmAttachmentDetails**](VmAttachmentDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.persistent_disk_defaults import PersistentDiskDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of PersistentDiskDefaults from a JSON string
persistent_disk_defaults_instance = PersistentDiskDefaults.from_json(json)
# print the JSON string representation of the object
print(PersistentDiskDefaults.to_json())

# convert the object into a dict
persistent_disk_defaults_dict = persistent_disk_defaults_instance.to_dict()
# create an instance of PersistentDiskDefaults from a dict
persistent_disk_defaults_from_dict = PersistentDiskDefaults.from_dict(persistent_disk_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


