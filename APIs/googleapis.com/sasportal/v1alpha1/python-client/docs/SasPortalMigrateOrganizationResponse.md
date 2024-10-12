# SasPortalMigrateOrganizationResponse

Response for [MigrateOrganization]. [spectrum.sas.portal.v1alpha1.Provisioning.MigrateOrganization].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_association** | [**List[SasPortalDeploymentAssociation]**](SasPortalDeploymentAssociation.md) | Optional. A list of deployment association that were created for the migration, or current associations if they already exist. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_migrate_organization_response import SasPortalMigrateOrganizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalMigrateOrganizationResponse from a JSON string
sas_portal_migrate_organization_response_instance = SasPortalMigrateOrganizationResponse.from_json(json)
# print the JSON string representation of the object
print(SasPortalMigrateOrganizationResponse.to_json())

# convert the object into a dict
sas_portal_migrate_organization_response_dict = sas_portal_migrate_organization_response_instance.to_dict()
# create an instance of SasPortalMigrateOrganizationResponse from a dict
sas_portal_migrate_organization_response_from_dict = SasPortalMigrateOrganizationResponse.from_dict(sas_portal_migrate_organization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


