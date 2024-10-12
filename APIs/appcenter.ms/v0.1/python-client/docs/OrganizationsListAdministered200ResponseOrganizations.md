# OrganizationsListAdministered200ResponseOrganizations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The URL to a user-uploaded Avatar image | [optional] 
**created_at** | **str** | The creation date of this organization | 
**display_name** | **str** | The display name of the organization | 
**id** | **str** | The internal unique id (UUID) of the organization. | 
**name** | **str** | The slug name of the organization | 
**origin** | **str** | The creation origin of this organization | 
**updated_at** | **str** | The date the organization was last updated at | 

## Example

```python
from openapi_client.models.organizations_list_administered200_response_organizations import OrganizationsListAdministered200ResponseOrganizations

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsListAdministered200ResponseOrganizations from a JSON string
organizations_list_administered200_response_organizations_instance = OrganizationsListAdministered200ResponseOrganizations.from_json(json)
# print the JSON string representation of the object
print(OrganizationsListAdministered200ResponseOrganizations.to_json())

# convert the object into a dict
organizations_list_administered200_response_organizations_dict = organizations_list_administered200_response_organizations_instance.to_dict()
# create an instance of OrganizationsListAdministered200ResponseOrganizations from a dict
organizations_list_administered200_response_organizations_from_dict = OrganizationsListAdministered200ResponseOrganizations.from_dict(organizations_list_administered200_response_organizations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


