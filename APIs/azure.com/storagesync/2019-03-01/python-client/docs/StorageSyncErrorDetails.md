# StorageSyncErrorDetails

Error Details object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code of the given entry. | [optional] 
**message** | **str** | Error message of the given entry. | [optional] 
**target** | **str** | Target of the given entry. | [optional] 

## Example

```python
from openapi_client.models.storage_sync_error_details import StorageSyncErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSyncErrorDetails from a JSON string
storage_sync_error_details_instance = StorageSyncErrorDetails.from_json(json)
# print the JSON string representation of the object
print(StorageSyncErrorDetails.to_json())

# convert the object into a dict
storage_sync_error_details_dict = storage_sync_error_details_instance.to_dict()
# create an instance of StorageSyncErrorDetails from a dict
storage_sync_error_details_from_dict = StorageSyncErrorDetails.from_dict(storage_sync_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


