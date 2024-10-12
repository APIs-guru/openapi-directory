# AzureTableStorageApplicationLogsConfig

Application logs to Azure table storage configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **str** | Log level. | [optional] 
**sas_url** | **str** | SAS URL to an Azure table with add/query/delete permissions. | 

## Example

```python
from openapi_client.models.azure_table_storage_application_logs_config import AzureTableStorageApplicationLogsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureTableStorageApplicationLogsConfig from a JSON string
azure_table_storage_application_logs_config_instance = AzureTableStorageApplicationLogsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureTableStorageApplicationLogsConfig.to_json())

# convert the object into a dict
azure_table_storage_application_logs_config_dict = azure_table_storage_application_logs_config_instance.to_dict()
# create an instance of AzureTableStorageApplicationLogsConfig from a dict
azure_table_storage_application_logs_config_from_dict = AzureTableStorageApplicationLogsConfig.from_dict(azure_table_storage_application_logs_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


