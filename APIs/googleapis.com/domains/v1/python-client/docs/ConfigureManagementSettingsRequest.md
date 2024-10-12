# ConfigureManagementSettingsRequest

Request for the `ConfigureManagementSettings` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**management_settings** | [**ManagementSettings**](ManagementSettings.md) |  | [optional] 
**update_mask** | **str** | Required. The field mask describing which fields to update as a comma-separated list. For example, if only the transfer lock is being updated, the &#x60;update_mask&#x60; is &#x60;\&quot;transfer_lock_state\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.configure_management_settings_request import ConfigureManagementSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigureManagementSettingsRequest from a JSON string
configure_management_settings_request_instance = ConfigureManagementSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(ConfigureManagementSettingsRequest.to_json())

# convert the object into a dict
configure_management_settings_request_dict = configure_management_settings_request_instance.to_dict()
# create an instance of ConfigureManagementSettingsRequest from a dict
configure_management_settings_request_from_dict = ConfigureManagementSettingsRequest.from_dict(configure_management_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


