# StorageAccountCredentials

Access information for the storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | The primary key of the storage account. | [optional] [readonly] 
**resource_id** | **str** | The ARM resource ID of the storage account. | [optional] [readonly] 
**secondary_key** | **str** | The secondary key of the storage account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_credentials import StorageAccountCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountCredentials from a JSON string
storage_account_credentials_instance = StorageAccountCredentials.from_json(json)
# print the JSON string representation of the object
print(StorageAccountCredentials.to_json())

# convert the object into a dict
storage_account_credentials_dict = storage_account_credentials_instance.to_dict()
# create an instance of StorageAccountCredentials from a dict
storage_account_credentials_from_dict = StorageAccountCredentials.from_dict(storage_account_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


