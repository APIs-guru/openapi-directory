# StorageAccount

The properties of a storage account associated with this resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts (isPrimary false). | 
**is_primary** | **bool** | Is this storage account resource the primary storage account for the Media Service resource. Blob only storage must set this to false. | 

## Example

```python
from openapi_client.models.storage_account import StorageAccount

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccount from a JSON string
storage_account_instance = StorageAccount.from_json(json)
# print the JSON string representation of the object
print(StorageAccount.to_json())

# convert the object into a dict
storage_account_dict = storage_account_instance.to_dict()
# create an instance of StorageAccount from a dict
storage_account_from_dict = StorageAccount.from_dict(storage_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


