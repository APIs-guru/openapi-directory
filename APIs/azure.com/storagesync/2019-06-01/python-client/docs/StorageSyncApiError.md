# StorageSyncApiError

Error type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code of the given entry. | [optional] 
**details** | [**StorageSyncErrorDetails**](StorageSyncErrorDetails.md) |  | [optional] 
**message** | **str** | Error message of the given entry. | [optional] 
**target** | **str** | Target of the given error entry. | [optional] 

## Example

```python
from openapi_client.models.storage_sync_api_error import StorageSyncApiError

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSyncApiError from a JSON string
storage_sync_api_error_instance = StorageSyncApiError.from_json(json)
# print the JSON string representation of the object
print(StorageSyncApiError.to_json())

# convert the object into a dict
storage_sync_api_error_dict = storage_sync_api_error_instance.to_dict()
# create an instance of StorageSyncApiError from a dict
storage_sync_api_error_from_dict = StorageSyncApiError.from_dict(storage_sync_api_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


