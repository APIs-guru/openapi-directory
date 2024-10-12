# GuestDiagnosticSettingsResource

Virtual machine guest diagnostics settings resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GuestDiagnosticSettings**](GuestDiagnosticSettings.md) |  | 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.guest_diagnostic_settings_resource import GuestDiagnosticSettingsResource

# TODO update the JSON string below
json = "{}"
# create an instance of GuestDiagnosticSettingsResource from a JSON string
guest_diagnostic_settings_resource_instance = GuestDiagnosticSettingsResource.from_json(json)
# print the JSON string representation of the object
print(GuestDiagnosticSettingsResource.to_json())

# convert the object into a dict
guest_diagnostic_settings_resource_dict = guest_diagnostic_settings_resource_instance.to_dict()
# create an instance of GuestDiagnosticSettingsResource from a dict
guest_diagnostic_settings_resource_from_dict = GuestDiagnosticSettingsResource.from_dict(guest_diagnostic_settings_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


