# GuestDiagnosticSettingsList

A list of guest diagnostic settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Provides the link to retrieve the next set of elements. | [optional] 
**value** | [**List[GuestDiagnosticSettingsResource]**](GuestDiagnosticSettingsResource.md) | The list of guest diagnostic settings. | [optional] 

## Example

```python
from openapi_client.models.guest_diagnostic_settings_list import GuestDiagnosticSettingsList

# TODO update the JSON string below
json = "{}"
# create an instance of GuestDiagnosticSettingsList from a JSON string
guest_diagnostic_settings_list_instance = GuestDiagnosticSettingsList.from_json(json)
# print the JSON string representation of the object
print(GuestDiagnosticSettingsList.to_json())

# convert the object into a dict
guest_diagnostic_settings_list_dict = guest_diagnostic_settings_list_instance.to_dict()
# create an instance of GuestDiagnosticSettingsList from a dict
guest_diagnostic_settings_list_from_dict = GuestDiagnosticSettingsList.from_dict(guest_diagnostic_settings_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


