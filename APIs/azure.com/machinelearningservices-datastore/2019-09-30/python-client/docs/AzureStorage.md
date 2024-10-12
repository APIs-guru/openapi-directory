# AzureStorage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_key** | **str** | Storage Account Key (Deprecated) | [optional] 
**account_name** | **str** | Storage Account Name | [optional] 
**are_workspace_managed_identities_allowed** | **bool** | Indicate if we are using Workspace ManagedIdentities/MSI token | [optional] 
**blob_cache_timeout** | **int** | If this is an Microsoft.MachineLearning.DataStore.Contracts.DataStoreType.AzureBlob, the length of time (in seconds) to cache files locally after they are accessed (downloaded). | [optional] 
**client_credentials** | [**ClientCredentials**](ClientCredentials.md) |  | [optional] 
**container_name** | **str** | The storage container name | [optional] 
**credential** | **str** | The credential | [optional] 
**credential_type** | **str** | The credential type | [optional] 
**endpoint** | **str** | The host of the container | [optional] 
**is_sas** | **bool** | Indicate if we are using SAS token or Account Key (Deprecated) | [optional] 
**protocol** | **str** | The protocol to use. Defaults to https | [optional] 
**resource_group** | **str** | Resource Group Name | [optional] 
**sas_token** | **str** | SAS Token for the container (Deprecated) | [optional] 
**subscription_id** | **str** | Subscription Id | [optional] 

## Example

```python
from openapi_client.models.azure_storage import AzureStorage

# TODO update the JSON string below
json = "{}"
# create an instance of AzureStorage from a JSON string
azure_storage_instance = AzureStorage.from_json(json)
# print the JSON string representation of the object
print(AzureStorage.to_json())

# convert the object into a dict
azure_storage_dict = azure_storage_instance.to_dict()
# create an instance of AzureStorage from a dict
azure_storage_from_dict = AzureStorage.from_dict(azure_storage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


