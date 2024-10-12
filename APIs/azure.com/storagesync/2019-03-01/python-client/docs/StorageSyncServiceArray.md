# StorageSyncServiceArray

Array of StorageSyncServices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[StorageSyncService]**](StorageSyncService.md) | Collection of StorageSyncServices. | [optional] 

## Example

```python
from openapi_client.models.storage_sync_service_array import StorageSyncServiceArray

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSyncServiceArray from a JSON string
storage_sync_service_array_instance = StorageSyncServiceArray.from_json(json)
# print the JSON string representation of the object
print(StorageSyncServiceArray.to_json())

# convert the object into a dict
storage_sync_service_array_dict = storage_sync_service_array_instance.to_dict()
# create an instance of StorageSyncServiceArray from a dict
storage_sync_service_array_from_dict = StorageSyncServiceArray.from_dict(storage_sync_service_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


