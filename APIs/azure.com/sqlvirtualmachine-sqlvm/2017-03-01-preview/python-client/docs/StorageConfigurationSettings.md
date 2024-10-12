# StorageConfigurationSettings

Storage Configurations for SQL Data, Log and TempDb.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_configuration_type** | **str** | Disk configuration to apply to SQL Server. | [optional] 
**sql_data_settings** | [**SQLStorageSettings**](SQLStorageSettings.md) |  | [optional] 
**sql_log_settings** | [**SQLStorageSettings**](SQLStorageSettings.md) |  | [optional] 
**sql_temp_db_settings** | [**SQLStorageSettings**](SQLStorageSettings.md) |  | [optional] 
**storage_workload_type** | **str** | Storage workload type. | [optional] 

## Example

```python
from openapi_client.models.storage_configuration_settings import StorageConfigurationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of StorageConfigurationSettings from a JSON string
storage_configuration_settings_instance = StorageConfigurationSettings.from_json(json)
# print the JSON string representation of the object
print(StorageConfigurationSettings.to_json())

# convert the object into a dict
storage_configuration_settings_dict = storage_configuration_settings_instance.to_dict()
# create an instance of StorageConfigurationSettings from a dict
storage_configuration_settings_from_dict = StorageConfigurationSettings.from_dict(storage_configuration_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


