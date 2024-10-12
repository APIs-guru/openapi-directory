# GuestDiagnosticSettingsAssociation

A guest diagnostic settings association.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guest_diagnostic_settings_name** | **str** | The guest diagnostic settings name. | 

## Example

```python
from openapi_client.models.guest_diagnostic_settings_association import GuestDiagnosticSettingsAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of GuestDiagnosticSettingsAssociation from a JSON string
guest_diagnostic_settings_association_instance = GuestDiagnosticSettingsAssociation.from_json(json)
# print the JSON string representation of the object
print(GuestDiagnosticSettingsAssociation.to_json())

# convert the object into a dict
guest_diagnostic_settings_association_dict = guest_diagnostic_settings_association_instance.to_dict()
# create an instance of GuestDiagnosticSettingsAssociation from a dict
guest_diagnostic_settings_association_from_dict = GuestDiagnosticSettingsAssociation.from_dict(guest_diagnostic_settings_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


