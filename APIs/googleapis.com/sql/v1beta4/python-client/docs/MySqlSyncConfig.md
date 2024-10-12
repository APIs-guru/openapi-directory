# MySqlSyncConfig

MySQL-specific external server sync settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_sync_flags** | [**List[SyncFlags]**](SyncFlags.md) | Flags to use for the initial dump. | [optional] 

## Example

```python
from openapi_client.models.my_sql_sync_config import MySqlSyncConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MySqlSyncConfig from a JSON string
my_sql_sync_config_instance = MySqlSyncConfig.from_json(json)
# print the JSON string representation of the object
print(MySqlSyncConfig.to_json())

# convert the object into a dict
my_sql_sync_config_dict = my_sql_sync_config_instance.to_dict()
# create an instance of MySqlSyncConfig from a dict
my_sql_sync_config_from_dict = MySqlSyncConfig.from_dict(my_sql_sync_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


