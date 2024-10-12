# MoveOrganizationLicenses200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest_organization_id** | **str** | The ID of the organization to move the licenses to | [optional] 
**license_ids** | **List[str]** | A list of IDs of licenses to move to the new organization | [optional] 

## Example

```python
from openapi_client.models.move_organization_licenses200_response import MoveOrganizationLicenses200Response

# TODO update the JSON string below
json = "{}"
# create an instance of MoveOrganizationLicenses200Response from a JSON string
move_organization_licenses200_response_instance = MoveOrganizationLicenses200Response.from_json(json)
# print the JSON string representation of the object
print(MoveOrganizationLicenses200Response.to_json())

# convert the object into a dict
move_organization_licenses200_response_dict = move_organization_licenses200_response_instance.to_dict()
# create an instance of MoveOrganizationLicenses200Response from a dict
move_organization_licenses200_response_from_dict = MoveOrganizationLicenses200Response.from_dict(move_organization_licenses200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


