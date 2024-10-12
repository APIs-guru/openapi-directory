# StorageCapability

The storage account type capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**storage_account_type** | **str** | The storage account type for the database&#39;s backups. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_capability import StorageCapability

# TODO update the JSON string below
json = "{}"
# create an instance of StorageCapability from a JSON string
storage_capability_instance = StorageCapability.from_json(json)
# print the JSON string representation of the object
print(StorageCapability.to_json())

# convert the object into a dict
storage_capability_dict = storage_capability_instance.to_dict()
# create an instance of StorageCapability from a dict
storage_capability_from_dict = StorageCapability.from_dict(storage_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


