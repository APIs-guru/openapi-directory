# ExistingDisk

A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment** | [**DiskAttachment**](DiskAttachment.md) |  | [optional] 
**source** | **str** | The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool. | [optional] 

## Example

```python
from openapi_client.models.existing_disk import ExistingDisk

# TODO update the JSON string below
json = "{}"
# create an instance of ExistingDisk from a JSON string
existing_disk_instance = ExistingDisk.from_json(json)
# print the JSON string representation of the object
print(ExistingDisk.to_json())

# convert the object into a dict
existing_disk_dict = existing_disk_instance.to_dict()
# create an instance of ExistingDisk from a dict
existing_disk_from_dict = ExistingDisk.from_dict(existing_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


