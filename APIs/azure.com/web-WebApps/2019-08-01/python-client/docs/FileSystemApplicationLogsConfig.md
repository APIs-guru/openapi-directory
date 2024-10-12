# FileSystemApplicationLogsConfig

Application logs to file system configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **str** | Log level. | [optional] [default to 'Off']

## Example

```python
from openapi_client.models.file_system_application_logs_config import FileSystemApplicationLogsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FileSystemApplicationLogsConfig from a JSON string
file_system_application_logs_config_instance = FileSystemApplicationLogsConfig.from_json(json)
# print the JSON string representation of the object
print(FileSystemApplicationLogsConfig.to_json())

# convert the object into a dict
file_system_application_logs_config_dict = file_system_application_logs_config_instance.to_dict()
# create an instance of FileSystemApplicationLogsConfig from a dict
file_system_application_logs_config_from_dict = FileSystemApplicationLogsConfig.from_dict(file_system_application_logs_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


