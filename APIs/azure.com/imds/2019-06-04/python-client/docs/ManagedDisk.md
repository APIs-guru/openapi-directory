# ManagedDisk

This is managed disk parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | This is the resource ID. | [optional] 
**storage_account_type** | **str** | This is the storage account type for the managed disk. | [optional] 

## Example

```python
from openapi_client.models.managed_disk import ManagedDisk

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedDisk from a JSON string
managed_disk_instance = ManagedDisk.from_json(json)
# print the JSON string representation of the object
print(ManagedDisk.to_json())

# convert the object into a dict
managed_disk_dict = managed_disk_instance.to_dict()
# create an instance of ManagedDisk from a dict
managed_disk_from_dict = ManagedDisk.from_dict(managed_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


