# SqlStorageUpdateSettings

Set disk storage settings for SQL Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_configuration_type** | **str** | Disk configuration to apply to SQL Server. | [optional] 
**disk_count** | **int** | Virtual machine disk count. | [optional] 
**starting_device_id** | **int** | Device id of the first disk to be updated. | [optional] 

## Example

```python
from openapi_client.models.sql_storage_update_settings import SqlStorageUpdateSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SqlStorageUpdateSettings from a JSON string
sql_storage_update_settings_instance = SqlStorageUpdateSettings.from_json(json)
# print the JSON string representation of the object
print(SqlStorageUpdateSettings.to_json())

# convert the object into a dict
sql_storage_update_settings_dict = sql_storage_update_settings_instance.to_dict()
# create an instance of SqlStorageUpdateSettings from a dict
sql_storage_update_settings_from_dict = SqlStorageUpdateSettings.from_dict(sql_storage_update_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


