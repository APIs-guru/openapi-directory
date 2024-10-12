# StorageAccountCredentialList

Collection of Storage account credential entities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[StorageAccountCredential]**](StorageAccountCredential.md) | The value. | 

## Example

```python
from openapi_client.models.storage_account_credential_list import StorageAccountCredentialList

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountCredentialList from a JSON string
storage_account_credential_list_instance = StorageAccountCredentialList.from_json(json)
# print the JSON string representation of the object
print(StorageAccountCredentialList.to_json())

# convert the object into a dict
storage_account_credential_list_dict = storage_account_credential_list_instance.to_dict()
# create an instance of StorageAccountCredentialList from a dict
storage_account_credential_list_from_dict = StorageAccountCredentialList.from_dict(storage_account_credential_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


