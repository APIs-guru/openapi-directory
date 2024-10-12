# GuestDiagnosticSettingsAssociationResource

Virtual machine guest diagnostic settings resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GuestDiagnosticSettingsAssociation**](GuestDiagnosticSettingsAssociation.md) |  | 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.guest_diagnostic_settings_association_resource import GuestDiagnosticSettingsAssociationResource

# TODO update the JSON string below
json = "{}"
# create an instance of GuestDiagnosticSettingsAssociationResource from a JSON string
guest_diagnostic_settings_association_resource_instance = GuestDiagnosticSettingsAssociationResource.from_json(json)
# print the JSON string representation of the object
print(GuestDiagnosticSettingsAssociationResource.to_json())

# convert the object into a dict
guest_diagnostic_settings_association_resource_dict = guest_diagnostic_settings_association_resource_instance.to_dict()
# create an instance of GuestDiagnosticSettingsAssociationResource from a dict
guest_diagnostic_settings_association_resource_from_dict = GuestDiagnosticSettingsAssociationResource.from_dict(guest_diagnostic_settings_association_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


