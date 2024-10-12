# TaskLogsRetentionConfig

The configuration setting for Task Logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_mode** | **str** | Optional. The mode of storage for Airflow workers task logs. For details, see go/composer-store-task-logs-in-cloud-logging-only-design-doc | [optional] 

## Example

```python
from openapi_client.models.task_logs_retention_config import TaskLogsRetentionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TaskLogsRetentionConfig from a JSON string
task_logs_retention_config_instance = TaskLogsRetentionConfig.from_json(json)
# print the JSON string representation of the object
print(TaskLogsRetentionConfig.to_json())

# convert the object into a dict
task_logs_retention_config_dict = task_logs_retention_config_instance.to_dict()
# create an instance of TaskLogsRetentionConfig from a dict
task_logs_retention_config_from_dict = TaskLogsRetentionConfig.from_dict(task_logs_retention_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


