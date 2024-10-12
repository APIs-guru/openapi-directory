# AzureStorageCredentialsInfo

Azure storage account credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_key** | **str** | Storage account key. One of accountKey or accountKeySecretReference must be specified. | [optional] 
**account_key_secret_reference** | [**KeyVaultSecretReference**](KeyVaultSecretReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_storage_credentials_info import AzureStorageCredentialsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureStorageCredentialsInfo from a JSON string
azure_storage_credentials_info_instance = AzureStorageCredentialsInfo.from_json(json)
# print the JSON string representation of the object
print(AzureStorageCredentialsInfo.to_json())

# convert the object into a dict
azure_storage_credentials_info_dict = azure_storage_credentials_info_instance.to_dict()
# create an instance of AzureStorageCredentialsInfo from a dict
azure_storage_credentials_info_from_dict = AzureStorageCredentialsInfo.from_dict(azure_storage_credentials_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


