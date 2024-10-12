# OrganizationsListAdministered200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizations** | [**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md) |  | 

## Example

```python
from openapi_client.models.organizations_list_administered200_response import OrganizationsListAdministered200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsListAdministered200Response from a JSON string
organizations_list_administered200_response_instance = OrganizationsListAdministered200Response.from_json(json)
# print the JSON string representation of the object
print(OrganizationsListAdministered200Response.to_json())

# convert the object into a dict
organizations_list_administered200_response_dict = organizations_list_administered200_response_instance.to_dict()
# create an instance of OrganizationsListAdministered200Response from a dict
organizations_list_administered200_response_from_dict = OrganizationsListAdministered200Response.from_dict(organizations_list_administered200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


