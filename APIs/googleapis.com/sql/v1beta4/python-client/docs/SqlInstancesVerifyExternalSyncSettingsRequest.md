# SqlInstancesVerifyExternalSyncSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mysql_sync_config** | [**MySqlSyncConfig**](MySqlSyncConfig.md) |  | [optional] 
**sync_mode** | **str** | External sync mode | [optional] 
**verify_connection_only** | **bool** | Flag to enable verifying connection only | [optional] 
**verify_replication_only** | **bool** | Optional. Flag to verify settings required by replication setup only | [optional] 

## Example

```python
from openapi_client.models.sql_instances_verify_external_sync_settings_request import SqlInstancesVerifyExternalSyncSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SqlInstancesVerifyExternalSyncSettingsRequest from a JSON string
sql_instances_verify_external_sync_settings_request_instance = SqlInstancesVerifyExternalSyncSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(SqlInstancesVerifyExternalSyncSettingsRequest.to_json())

# convert the object into a dict
sql_instances_verify_external_sync_settings_request_dict = sql_instances_verify_external_sync_settings_request_instance.to_dict()
# create an instance of SqlInstancesVerifyExternalSyncSettingsRequest from a dict
sql_instances_verify_external_sync_settings_request_from_dict = SqlInstancesVerifyExternalSyncSettingsRequest.from_dict(sql_instances_verify_external_sync_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


