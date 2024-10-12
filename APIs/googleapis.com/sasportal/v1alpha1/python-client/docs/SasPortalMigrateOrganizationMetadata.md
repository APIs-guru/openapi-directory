# SasPortalMigrateOrganizationMetadata

Long-running operation metadata message returned by the MigrateOrganization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_state** | **str** | Output only. Current operation state | [optional] [readonly] 

## Example

```python
from openapi_client.models.sas_portal_migrate_organization_metadata import SasPortalMigrateOrganizationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalMigrateOrganizationMetadata from a JSON string
sas_portal_migrate_organization_metadata_instance = SasPortalMigrateOrganizationMetadata.from_json(json)
# print the JSON string representation of the object
print(SasPortalMigrateOrganizationMetadata.to_json())

# convert the object into a dict
sas_portal_migrate_organization_metadata_dict = sas_portal_migrate_organization_metadata_instance.to_dict()
# create an instance of SasPortalMigrateOrganizationMetadata from a dict
sas_portal_migrate_organization_metadata_from_dict = SasPortalMigrateOrganizationMetadata.from_dict(sas_portal_migrate_organization_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


