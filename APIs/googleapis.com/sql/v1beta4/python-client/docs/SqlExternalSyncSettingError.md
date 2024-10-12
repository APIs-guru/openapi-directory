# SqlExternalSyncSettingError

External primary instance migration setting error/warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error encountered. | [optional] 
**kind** | **str** | Can be &#x60;sql#externalSyncSettingError&#x60; or &#x60;sql#externalSyncSettingWarning&#x60;. | [optional] 
**type** | **str** | Identifies the specific error that occurred. | [optional] 

## Example

```python
from openapi_client.models.sql_external_sync_setting_error import SqlExternalSyncSettingError

# TODO update the JSON string below
json = "{}"
# create an instance of SqlExternalSyncSettingError from a JSON string
sql_external_sync_setting_error_instance = SqlExternalSyncSettingError.from_json(json)
# print the JSON string representation of the object
print(SqlExternalSyncSettingError.to_json())

# convert the object into a dict
sql_external_sync_setting_error_dict = sql_external_sync_setting_error_instance.to_dict()
# create an instance of SqlExternalSyncSettingError from a dict
sql_external_sync_setting_error_from_dict = SqlExternalSyncSettingError.from_dict(sql_external_sync_setting_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


