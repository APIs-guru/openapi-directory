# StorageAccountCredentialProperties

Storage account properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | [optional] 
**cloud_type** | **str** | The cloud service provider | 
**enable_ssl** | **str** | SSL needs to be enabled or not | 
**end_point** | **str** | The storage endpoint | 
**location** | **str** | The storage account&#39;s geo location | [optional] 
**login** | **str** | The storage account login | 

## Example

```python
from openapi_client.models.storage_account_credential_properties import StorageAccountCredentialProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountCredentialProperties from a JSON string
storage_account_credential_properties_instance = StorageAccountCredentialProperties.from_json(json)
# print the JSON string representation of the object
print(StorageAccountCredentialProperties.to_json())

# convert the object into a dict
storage_account_credential_properties_dict = storage_account_credential_properties_instance.to_dict()
# create an instance of StorageAccountCredentialProperties from a dict
storage_account_credential_properties_from_dict = StorageAccountCredentialProperties.from_dict(storage_account_credential_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


