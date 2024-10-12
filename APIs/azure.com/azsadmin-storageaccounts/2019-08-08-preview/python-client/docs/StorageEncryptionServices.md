# StorageEncryptionServices

Services for which encryption setting is mentioned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob** | [**StorageEncryptionSetting**](StorageEncryptionSetting.md) |  | [optional] 
**queue** | [**StorageEncryptionSetting**](StorageEncryptionSetting.md) |  | [optional] 
**table** | [**StorageEncryptionSetting**](StorageEncryptionSetting.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_encryption_services import StorageEncryptionServices

# TODO update the JSON string below
json = "{}"
# create an instance of StorageEncryptionServices from a JSON string
storage_encryption_services_instance = StorageEncryptionServices.from_json(json)
# print the JSON string representation of the object
print(StorageEncryptionServices.to_json())

# convert the object into a dict
storage_encryption_services_dict = storage_encryption_services_instance.to_dict()
# create an instance of StorageEncryptionServices from a dict
storage_encryption_services_from_dict = StorageEncryptionServices.from_dict(storage_encryption_services_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


