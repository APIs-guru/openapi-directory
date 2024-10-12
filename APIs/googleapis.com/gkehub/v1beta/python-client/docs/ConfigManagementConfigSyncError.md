# ConfigManagementConfigSyncError

Errors pertaining to the installation of Config Sync

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | A string representing the user facing error message | [optional] 

## Example

```python
from openapi_client.models.config_management_config_sync_error import ConfigManagementConfigSyncError

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementConfigSyncError from a JSON string
config_management_config_sync_error_instance = ConfigManagementConfigSyncError.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementConfigSyncError.to_json())

# convert the object into a dict
config_management_config_sync_error_dict = config_management_config_sync_error_instance.to_dict()
# create an instance of ConfigManagementConfigSyncError from a dict
config_management_config_sync_error_from_dict = ConfigManagementConfigSyncError.from_dict(config_management_config_sync_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


