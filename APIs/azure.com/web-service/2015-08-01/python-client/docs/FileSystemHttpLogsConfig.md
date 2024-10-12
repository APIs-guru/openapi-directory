# FileSystemHttpLogsConfig

Http logs to file system configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enabled | [optional] 
**retention_in_days** | **int** | Retention in days.              Remove files older than X days.              0 or lower means no retention. | [optional] 
**retention_in_mb** | **int** | Maximum size in megabytes that http log files can use.              When reached old log files will be removed to make space for new ones.              Value can range between 25 and 100. | [optional] 

## Example

```python
from openapi_client.models.file_system_http_logs_config import FileSystemHttpLogsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FileSystemHttpLogsConfig from a JSON string
file_system_http_logs_config_instance = FileSystemHttpLogsConfig.from_json(json)
# print the JSON string representation of the object
print(FileSystemHttpLogsConfig.to_json())

# convert the object into a dict
file_system_http_logs_config_dict = file_system_http_logs_config_instance.to_dict()
# create an instance of FileSystemHttpLogsConfig from a dict
file_system_http_logs_config_from_dict = FileSystemHttpLogsConfig.from_dict(file_system_http_logs_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


