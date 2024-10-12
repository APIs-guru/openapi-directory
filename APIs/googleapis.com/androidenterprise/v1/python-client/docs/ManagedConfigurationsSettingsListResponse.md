# ManagedConfigurationsSettingsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_configurations_settings** | [**List[ManagedConfigurationsSettings]**](ManagedConfigurationsSettings.md) | A managed configurations settings for an app that may be assigned to a group of users in an enterprise. | [optional] 

## Example

```python
from openapi_client.models.managed_configurations_settings_list_response import ManagedConfigurationsSettingsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedConfigurationsSettingsListResponse from a JSON string
managed_configurations_settings_list_response_instance = ManagedConfigurationsSettingsListResponse.from_json(json)
# print the JSON string representation of the object
print(ManagedConfigurationsSettingsListResponse.to_json())

# convert the object into a dict
managed_configurations_settings_list_response_dict = managed_configurations_settings_list_response_instance.to_dict()
# create an instance of ManagedConfigurationsSettingsListResponse from a dict
managed_configurations_settings_list_response_from_dict = ManagedConfigurationsSettingsListResponse.from_dict(managed_configurations_settings_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


