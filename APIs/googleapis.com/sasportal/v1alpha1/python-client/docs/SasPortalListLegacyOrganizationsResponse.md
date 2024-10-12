# SasPortalListLegacyOrganizationsResponse

Response for [ListLegacyOrganizations]. [spectrum.sas.portal.v1alpha1.Provisioning.ListLegacyOrganizations].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizations** | [**List[SasPortalOrganization]**](SasPortalOrganization.md) | Optional. Legacy SAS organizations. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_list_legacy_organizations_response import SasPortalListLegacyOrganizationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalListLegacyOrganizationsResponse from a JSON string
sas_portal_list_legacy_organizations_response_instance = SasPortalListLegacyOrganizationsResponse.from_json(json)
# print the JSON string representation of the object
print(SasPortalListLegacyOrganizationsResponse.to_json())

# convert the object into a dict
sas_portal_list_legacy_organizations_response_dict = sas_portal_list_legacy_organizations_response_instance.to_dict()
# create an instance of SasPortalListLegacyOrganizationsResponse from a dict
sas_portal_list_legacy_organizations_response_from_dict = SasPortalListLegacyOrganizationsResponse.from_dict(sas_portal_list_legacy_organizations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


