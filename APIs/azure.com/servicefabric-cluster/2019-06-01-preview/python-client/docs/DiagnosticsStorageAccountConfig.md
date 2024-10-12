# DiagnosticsStorageAccountConfig

The storage account information for storing Service Fabric diagnostic logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_endpoint** | **str** | The blob endpoint of the azure storage account. | 
**protected_account_key_name** | **str** | The protected diagnostics storage key name. | 
**protected_account_key_name2** | **str** | The secondary protected diagnostics storage key name. | [optional] 
**queue_endpoint** | **str** | The queue endpoint of the azure storage account. | 
**storage_account_name** | **str** | The Azure storage account name. | 
**table_endpoint** | **str** | The table endpoint of the azure storage account. | 

## Example

```python
from openapi_client.models.diagnostics_storage_account_config import DiagnosticsStorageAccountConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsStorageAccountConfig from a JSON string
diagnostics_storage_account_config_instance = DiagnosticsStorageAccountConfig.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsStorageAccountConfig.to_json())

# convert the object into a dict
diagnostics_storage_account_config_dict = diagnostics_storage_account_config_instance.to_dict()
# create an instance of DiagnosticsStorageAccountConfig from a dict
diagnostics_storage_account_config_from_dict = DiagnosticsStorageAccountConfig.from_dict(diagnostics_storage_account_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


