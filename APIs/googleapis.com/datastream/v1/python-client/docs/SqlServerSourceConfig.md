# SqlServerSourceConfig

SQLServer data source configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_objects** | [**SqlServerRdbms**](SqlServerRdbms.md) |  | [optional] 
**include_objects** | [**SqlServerRdbms**](SqlServerRdbms.md) |  | [optional] 
**max_concurrent_backfill_tasks** | **int** | Max concurrent backfill tasks. | [optional] 
**max_concurrent_cdc_tasks** | **int** | Max concurrent CDC tasks. | [optional] 

## Example

```python
from openapi_client.models.sql_server_source_config import SqlServerSourceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerSourceConfig from a JSON string
sql_server_source_config_instance = SqlServerSourceConfig.from_json(json)
# print the JSON string representation of the object
print(SqlServerSourceConfig.to_json())

# convert the object into a dict
sql_server_source_config_dict = sql_server_source_config_instance.to_dict()
# create an instance of SqlServerSourceConfig from a dict
sql_server_source_config_from_dict = SqlServerSourceConfig.from_dict(sql_server_source_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


