# ManagedDiskParameters

The parameters of a managed disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_account_type** | [**StorageAccountType**](StorageAccountType.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.managed_disk_parameters import ManagedDiskParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedDiskParameters from a JSON string
managed_disk_parameters_instance = ManagedDiskParameters.from_json(json)
# print the JSON string representation of the object
print(ManagedDiskParameters.to_json())

# convert the object into a dict
managed_disk_parameters_dict = managed_disk_parameters_instance.to_dict()
# create an instance of ManagedDiskParameters from a dict
managed_disk_parameters_from_dict = ManagedDiskParameters.from_dict(managed_disk_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


