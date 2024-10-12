# NewDisk

A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment** | [**DiskAttachment**](DiskAttachment.md) |  | [optional] 
**auto_delete** | **bool** | If true, then this disk will be deleted when the instance is deleted. The default value is true. | [optional] 
**boot** | **bool** | If true, indicates that this is the root persistent disk. | [optional] 
**initialize_params** | [**NewDiskInitializeParams**](NewDiskInitializeParams.md) |  | [optional] 

## Example

```python
from openapi_client.models.new_disk import NewDisk

# TODO update the JSON string below
json = "{}"
# create an instance of NewDisk from a JSON string
new_disk_instance = NewDisk.from_json(json)
# print the JSON string representation of the object
print(NewDisk.to_json())

# convert the object into a dict
new_disk_dict = new_disk_instance.to_dict()
# create an instance of NewDisk from a dict
new_disk_from_dict = NewDisk.from_dict(new_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


