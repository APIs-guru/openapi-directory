# GuestDiagnosticSettingsAssociationResourcePatch

Guest diagnostic setting resource for patch operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GuestDiagnosticSettingsAssociation**](GuestDiagnosticSettingsAssociation.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.guest_diagnostic_settings_association_resource_patch import GuestDiagnosticSettingsAssociationResourcePatch

# TODO update the JSON string below
json = "{}"
# create an instance of GuestDiagnosticSettingsAssociationResourcePatch from a JSON string
guest_diagnostic_settings_association_resource_patch_instance = GuestDiagnosticSettingsAssociationResourcePatch.from_json(json)
# print the JSON string representation of the object
print(GuestDiagnosticSettingsAssociationResourcePatch.to_json())

# convert the object into a dict
guest_diagnostic_settings_association_resource_patch_dict = guest_diagnostic_settings_association_resource_patch_instance.to_dict()
# create an instance of GuestDiagnosticSettingsAssociationResourcePatch from a dict
guest_diagnostic_settings_association_resource_patch_from_dict = GuestDiagnosticSettingsAssociationResourcePatch.from_dict(guest_diagnostic_settings_association_resource_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


