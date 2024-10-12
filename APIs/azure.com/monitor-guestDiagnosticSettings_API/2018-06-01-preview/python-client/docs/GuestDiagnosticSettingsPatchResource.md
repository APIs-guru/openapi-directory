# GuestDiagnosticSettingsPatchResource

An diagnostic settings object for the body of patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GuestDiagnosticSettings**](GuestDiagnosticSettings.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.guest_diagnostic_settings_patch_resource import GuestDiagnosticSettingsPatchResource

# TODO update the JSON string below
json = "{}"
# create an instance of GuestDiagnosticSettingsPatchResource from a JSON string
guest_diagnostic_settings_patch_resource_instance = GuestDiagnosticSettingsPatchResource.from_json(json)
# print the JSON string representation of the object
print(GuestDiagnosticSettingsPatchResource.to_json())

# convert the object into a dict
guest_diagnostic_settings_patch_resource_dict = guest_diagnostic_settings_patch_resource_instance.to_dict()
# create an instance of GuestDiagnosticSettingsPatchResource from a dict
guest_diagnostic_settings_patch_resource_from_dict = GuestDiagnosticSettingsPatchResource.from_dict(guest_diagnostic_settings_patch_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


