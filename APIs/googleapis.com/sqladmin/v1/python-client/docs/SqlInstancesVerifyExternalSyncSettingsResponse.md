# SqlInstancesVerifyExternalSyncSettingsResponse

Instance verify external sync settings response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[SqlExternalSyncSettingError]**](SqlExternalSyncSettingError.md) | List of migration violations. | [optional] 
**kind** | **str** | This is always &#x60;sql#migrationSettingErrorList&#x60;. | [optional] 
**warnings** | [**List[SqlExternalSyncSettingError]**](SqlExternalSyncSettingError.md) | List of migration warnings. | [optional] 

## Example

```python
from openapi_client.models.sql_instances_verify_external_sync_settings_response import SqlInstancesVerifyExternalSyncSettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SqlInstancesVerifyExternalSyncSettingsResponse from a JSON string
sql_instances_verify_external_sync_settings_response_instance = SqlInstancesVerifyExternalSyncSettingsResponse.from_json(json)
# print the JSON string representation of the object
print(SqlInstancesVerifyExternalSyncSettingsResponse.to_json())

# convert the object into a dict
sql_instances_verify_external_sync_settings_response_dict = sql_instances_verify_external_sync_settings_response_instance.to_dict()
# create an instance of SqlInstancesVerifyExternalSyncSettingsResponse from a dict
sql_instances_verify_external_sync_settings_response_from_dict = SqlInstancesVerifyExternalSyncSettingsResponse.from_dict(sql_instances_verify_external_sync_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


