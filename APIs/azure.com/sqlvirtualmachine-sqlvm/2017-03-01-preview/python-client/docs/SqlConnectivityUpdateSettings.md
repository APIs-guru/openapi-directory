# SqlConnectivityUpdateSettings

Set the access level and network port settings for SQL Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectivity_type** | **str** | SQL Server connectivity option. | [optional] 
**port** | **int** | SQL Server port. | [optional] 
**sql_auth_update_password** | **str** | SQL Server sysadmin login password. | [optional] 
**sql_auth_update_user_name** | **str** | SQL Server sysadmin login to create. | [optional] 

## Example

```python
from openapi_client.models.sql_connectivity_update_settings import SqlConnectivityUpdateSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SqlConnectivityUpdateSettings from a JSON string
sql_connectivity_update_settings_instance = SqlConnectivityUpdateSettings.from_json(json)
# print the JSON string representation of the object
print(SqlConnectivityUpdateSettings.to_json())

# convert the object into a dict
sql_connectivity_update_settings_dict = sql_connectivity_update_settings_instance.to_dict()
# create an instance of SqlConnectivityUpdateSettings from a dict
sql_connectivity_update_settings_from_dict = SqlConnectivityUpdateSettings.from_dict(sql_connectivity_update_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


