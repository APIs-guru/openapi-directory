# StorageSyncError

Error type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**StorageSyncApiError**](StorageSyncApiError.md) |  | [optional] 
**innererror** | [**StorageSyncApiError**](StorageSyncApiError.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_sync_error import StorageSyncError

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSyncError from a JSON string
storage_sync_error_instance = StorageSyncError.from_json(json)
# print the JSON string representation of the object
print(StorageSyncError.to_json())

# convert the object into a dict
storage_sync_error_dict = storage_sync_error_instance.to_dict()
# create an instance of StorageSyncError from a dict
storage_sync_error_from_dict = StorageSyncError.from_dict(storage_sync_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


