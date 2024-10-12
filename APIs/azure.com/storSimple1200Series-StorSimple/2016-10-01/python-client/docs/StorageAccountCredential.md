# StorageAccountCredential

The storage account credential

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageAccountCredentialProperties**](StorageAccountCredentialProperties.md) |  | 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_credential import StorageAccountCredential

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountCredential from a JSON string
storage_account_credential_instance = StorageAccountCredential.from_json(json)
# print the JSON string representation of the object
print(StorageAccountCredential.to_json())

# convert the object into a dict
storage_account_credential_dict = storage_account_credential_instance.to_dict()
# create an instance of StorageAccountCredential from a dict
storage_account_credential_from_dict = StorageAccountCredential.from_dict(storage_account_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


