# SyncStorageKeysInput

The input to the sync storage keys request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the storage account resource. | [optional] 

## Example

```python
from openapi_client.models.sync_storage_keys_input import SyncStorageKeysInput

# TODO update the JSON string below
json = "{}"
# create an instance of SyncStorageKeysInput from a JSON string
sync_storage_keys_input_instance = SyncStorageKeysInput.from_json(json)
# print the JSON string representation of the object
print(SyncStorageKeysInput.to_json())

# convert the object into a dict
sync_storage_keys_input_dict = sync_storage_keys_input_instance.to_dict()
# create an instance of SyncStorageKeysInput from a dict
sync_storage_keys_input_from_dict = SyncStorageKeysInput.from_dict(sync_storage_keys_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


