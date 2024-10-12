# StorageEncryption

Storage encryption setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_source** | [**EncryptionKeySource**](EncryptionKeySource.md) |  | [optional] 
**services** | [**StorageEncryptionServices**](StorageEncryptionServices.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_encryption import StorageEncryption

# TODO update the JSON string below
json = "{}"
# create an instance of StorageEncryption from a JSON string
storage_encryption_instance = StorageEncryption.from_json(json)
# print the JSON string representation of the object
print(StorageEncryption.to_json())

# convert the object into a dict
storage_encryption_dict = storage_encryption_instance.to_dict()
# create an instance of StorageEncryption from a dict
storage_encryption_from_dict = StorageEncryption.from_dict(storage_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


