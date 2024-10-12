# DiagnosticsStorageAccountConfig

Diagnostics storage account config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_endpoint** | **str** | Diagnostics storage account blob endpoint | 
**protected_account_key_name** | **str** | Protected Diagnostics storage key name | 
**queue_endpoint** | **str** | Diagnostics storage account queue endpoint | 
**storage_account_name** | **str** | Diagnostics storage account name | 
**table_endpoint** | **str** | Diagnostics storage account table endpoint | 

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


