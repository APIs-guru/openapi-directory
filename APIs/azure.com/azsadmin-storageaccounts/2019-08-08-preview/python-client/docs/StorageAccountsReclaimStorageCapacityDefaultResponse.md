# StorageAccountsReclaimStorageCapacityDefaultResponse

The error response for request which failed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error description code. | [optional] [readonly] 
**details** | **List[str]** | The error details information. | [optional] [readonly] 
**message** | **str** | The error description message. | [optional] [readonly] 
**target** | **str** | The error target description. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_accounts_reclaim_storage_capacity_default_response import StorageAccountsReclaimStorageCapacityDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountsReclaimStorageCapacityDefaultResponse from a JSON string
storage_accounts_reclaim_storage_capacity_default_response_instance = StorageAccountsReclaimStorageCapacityDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(StorageAccountsReclaimStorageCapacityDefaultResponse.to_json())

# convert the object into a dict
storage_accounts_reclaim_storage_capacity_default_response_dict = storage_accounts_reclaim_storage_capacity_default_response_instance.to_dict()
# create an instance of StorageAccountsReclaimStorageCapacityDefaultResponse from a dict
storage_accounts_reclaim_storage_capacity_default_response_from_dict = StorageAccountsReclaimStorageCapacityDefaultResponse.from_dict(storage_accounts_reclaim_storage_capacity_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


