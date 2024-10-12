# AzureBlobStorageHttpLogsConfig

Http logs to azure blob storage configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | True if configuration is enabled, false if it is disabled and null if configuration is not set. | [optional] 
**retention_in_days** | **int** | Retention in days. Remove blobs older than X days. 0 or lower means no retention. | [optional] 
**sas_url** | **str** | SAS url to a azure blob container with read/write/list/delete permissions. | [optional] 

## Example

```python
from openapi_client.models.azure_blob_storage_http_logs_config import AzureBlobStorageHttpLogsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobStorageHttpLogsConfig from a JSON string
azure_blob_storage_http_logs_config_instance = AzureBlobStorageHttpLogsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureBlobStorageHttpLogsConfig.to_json())

# convert the object into a dict
azure_blob_storage_http_logs_config_dict = azure_blob_storage_http_logs_config_instance.to_dict()
# create an instance of AzureBlobStorageHttpLogsConfig from a dict
azure_blob_storage_http_logs_config_from_dict = AzureBlobStorageHttpLogsConfig.from_dict(azure_blob_storage_http_logs_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


