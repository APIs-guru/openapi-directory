# GuestDiagnosticSettingsAssociationList

A list of guest diagnostic settings association.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Provides the link to retrieve the next set of elements. | [optional] 
**value** | [**List[GuestDiagnosticSettingsAssociationResource]**](GuestDiagnosticSettingsAssociationResource.md) | The list of guest diagnostic settings association. | [optional] 

## Example

```python
from openapi_client.models.guest_diagnostic_settings_association_list import GuestDiagnosticSettingsAssociationList

# TODO update the JSON string below
json = "{}"
# create an instance of GuestDiagnosticSettingsAssociationList from a JSON string
guest_diagnostic_settings_association_list_instance = GuestDiagnosticSettingsAssociationList.from_json(json)
# print the JSON string representation of the object
print(GuestDiagnosticSettingsAssociationList.to_json())

# convert the object into a dict
guest_diagnostic_settings_association_list_dict = guest_diagnostic_settings_association_list_instance.to_dict()
# create an instance of GuestDiagnosticSettingsAssociationList from a dict
guest_diagnostic_settings_association_list_from_dict = GuestDiagnosticSettingsAssociationList.from_dict(guest_diagnostic_settings_association_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


