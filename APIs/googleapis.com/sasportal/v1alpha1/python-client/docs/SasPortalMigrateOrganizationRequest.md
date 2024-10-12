# SasPortalMigrateOrganizationRequest

Request for [MigrateOrganization]. [spectrum.sas.portal.v1alpha1.Provisioning.MigrateOrganization]. GCP Project, Organization Info, and caller's GAIA ID should be retrieved from the RPC handler, and used to check authorization on SAS Portal organization and to create GCP Projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization_id** | **str** | Required. Id of the SAS organization to be migrated. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_migrate_organization_request import SasPortalMigrateOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalMigrateOrganizationRequest from a JSON string
sas_portal_migrate_organization_request_instance = SasPortalMigrateOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalMigrateOrganizationRequest.to_json())

# convert the object into a dict
sas_portal_migrate_organization_request_dict = sas_portal_migrate_organization_request_instance.to_dict()
# create an instance of SasPortalMigrateOrganizationRequest from a dict
sas_portal_migrate_organization_request_from_dict = SasPortalMigrateOrganizationRequest.from_dict(sas_portal_migrate_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


