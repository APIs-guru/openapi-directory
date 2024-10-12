# SQLStorageSettings

Set disk storage settings for SQL Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_file_path** | **str** | SQL Server default file path | [optional] 
**luns** | **List[int]** | Logical Unit Numbers for the disks. | [optional] 

## Example

```python
from openapi_client.models.sql_storage_settings import SQLStorageSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SQLStorageSettings from a JSON string
sql_storage_settings_instance = SQLStorageSettings.from_json(json)
# print the JSON string representation of the object
print(SQLStorageSettings.to_json())

# convert the object into a dict
sql_storage_settings_dict = sql_storage_settings_instance.to_dict()
# create an instance of SQLStorageSettings from a dict
sql_storage_settings_from_dict = SQLStorageSettings.from_dict(sql_storage_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


