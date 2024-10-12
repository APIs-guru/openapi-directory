# SqlWorkloadTypeUpdateSettings

Set workload type to optimize storage for SQL Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql_workload_type** | **str** | SQL Server workload type. | [optional] 

## Example

```python
from openapi_client.models.sql_workload_type_update_settings import SqlWorkloadTypeUpdateSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SqlWorkloadTypeUpdateSettings from a JSON string
sql_workload_type_update_settings_instance = SqlWorkloadTypeUpdateSettings.from_json(json)
# print the JSON string representation of the object
print(SqlWorkloadTypeUpdateSettings.to_json())

# convert the object into a dict
sql_workload_type_update_settings_dict = sql_workload_type_update_settings_instance.to_dict()
# create an instance of SqlWorkloadTypeUpdateSettings from a dict
sql_workload_type_update_settings_from_dict = SqlWorkloadTypeUpdateSettings.from_dict(sql_workload_type_update_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


