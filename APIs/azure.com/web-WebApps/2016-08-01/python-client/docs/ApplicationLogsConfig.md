# ApplicationLogsConfig

Application logs configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_blob_storage** | [**AzureBlobStorageApplicationLogsConfig**](AzureBlobStorageApplicationLogsConfig.md) |  | [optional] 
**azure_table_storage** | [**AzureTableStorageApplicationLogsConfig**](AzureTableStorageApplicationLogsConfig.md) |  | [optional] 
**file_system** | [**FileSystemApplicationLogsConfig**](FileSystemApplicationLogsConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_logs_config import ApplicationLogsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationLogsConfig from a JSON string
application_logs_config_instance = ApplicationLogsConfig.from_json(json)
# print the JSON string representation of the object
print(ApplicationLogsConfig.to_json())

# convert the object into a dict
application_logs_config_dict = application_logs_config_instance.to_dict()
# create an instance of ApplicationLogsConfig from a dict
application_logs_config_from_dict = ApplicationLogsConfig.from_dict(application_logs_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


