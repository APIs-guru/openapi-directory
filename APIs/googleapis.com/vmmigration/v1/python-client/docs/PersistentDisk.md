# PersistentDisk

Details of a created Persistent Disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_uri** | **str** | The URI of the Persistent Disk. | [optional] 
**source_disk_number** | **int** | The ordinal number of the source VM disk. | [optional] 

## Example

```python
from openapi_client.models.persistent_disk import PersistentDisk

# TODO update the JSON string below
json = "{}"
# create an instance of PersistentDisk from a JSON string
persistent_disk_instance = PersistentDisk.from_json(json)
# print the JSON string representation of the object
print(PersistentDisk.to_json())

# convert the object into a dict
persistent_disk_dict = persistent_disk_instance.to_dict()
# create an instance of PersistentDisk from a dict
persistent_disk_from_dict = PersistentDisk.from_dict(persistent_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


