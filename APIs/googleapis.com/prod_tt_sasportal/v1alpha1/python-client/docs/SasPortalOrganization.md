# SasPortalOrganization

Organization details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of organization | [optional] 
**id** | **str** | Id of organization | [optional] 

## Example

```python
from openapi_client.models.sas_portal_organization import SasPortalOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalOrganization from a JSON string
sas_portal_organization_instance = SasPortalOrganization.from_json(json)
# print the JSON string representation of the object
print(SasPortalOrganization.to_json())

# convert the object into a dict
sas_portal_organization_dict = sas_portal_organization_instance.to_dict()
# create an instance of SasPortalOrganization from a dict
sas_portal_organization_from_dict = SasPortalOrganization.from_dict(sas_portal_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


