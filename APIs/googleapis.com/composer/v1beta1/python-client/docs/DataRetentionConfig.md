# DataRetentionConfig

The configuration setting for Airflow database data retention mechanism.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_logs_retention_config** | [**TaskLogsRetentionConfig**](TaskLogsRetentionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_retention_config import DataRetentionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DataRetentionConfig from a JSON string
data_retention_config_instance = DataRetentionConfig.from_json(json)
# print the JSON string representation of the object
print(DataRetentionConfig.to_json())

# convert the object into a dict
data_retention_config_dict = data_retention_config_instance.to_dict()
# create an instance of DataRetentionConfig from a dict
data_retention_config_from_dict = DataRetentionConfig.from_dict(data_retention_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


