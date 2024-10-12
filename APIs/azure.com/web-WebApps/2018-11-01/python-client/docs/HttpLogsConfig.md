# HttpLogsConfig

Http logs configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_blob_storage** | [**AzureBlobStorageHttpLogsConfig**](AzureBlobStorageHttpLogsConfig.md) |  | [optional] 
**file_system** | [**FileSystemHttpLogsConfig**](FileSystemHttpLogsConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.http_logs_config import HttpLogsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HttpLogsConfig from a JSON string
http_logs_config_instance = HttpLogsConfig.from_json(json)
# print the JSON string representation of the object
print(HttpLogsConfig.to_json())

# convert the object into a dict
http_logs_config_dict = http_logs_config_instance.to_dict()
# create an instance of HttpLogsConfig from a dict
http_logs_config_from_dict = HttpLogsConfig.from_dict(http_logs_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


