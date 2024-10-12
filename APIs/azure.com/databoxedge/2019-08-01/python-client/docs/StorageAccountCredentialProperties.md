# StorageAccountCredentialProperties

The storage account credential properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_key** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | [optional] 
**account_type** | **str** | Type of storage accessed on the storage account. | 
**alias** | **str** | Alias for the storage account. | 
**blob_domain_name** | **str** | Blob end point for private clouds. | [optional] 
**connection_string** | **str** | Connection string for the storage account. Use this string if username and account key are not specified. | [optional] 
**ssl_status** | **str** | Signifies whether SSL needs to be enabled or not. | 
**storage_account_id** | **str** | Id of the storage account. | [optional] 
**user_name** | **str** | Username for the storage account. | [optional] 

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


