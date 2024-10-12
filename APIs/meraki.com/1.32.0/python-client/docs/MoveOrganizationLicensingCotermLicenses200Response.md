# MoveOrganizationLicensingCotermLicenses200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**moved_licenses** | [**List[GetOrganizationLicensingCotermLicenses200ResponseInner]**](GetOrganizationLicensingCotermLicenses200ResponseInner.md) | Newly moved licenses created in the destination organization of the license move operation | [optional] 
**remainder_licenses** | [**List[GetOrganizationLicensingCotermLicenses200ResponseInner]**](GetOrganizationLicensingCotermLicenses200ResponseInner.md) | Remainder licenses created in the source organization as a result of moving a subset of the counts of a license | [optional] 

## Example

```python
from openapi_client.models.move_organization_licensing_coterm_licenses200_response import MoveOrganizationLicensingCotermLicenses200Response

# TODO update the JSON string below
json = "{}"
# create an instance of MoveOrganizationLicensingCotermLicenses200Response from a JSON string
move_organization_licensing_coterm_licenses200_response_instance = MoveOrganizationLicensingCotermLicenses200Response.from_json(json)
# print the JSON string representation of the object
print(MoveOrganizationLicensingCotermLicenses200Response.to_json())

# convert the object into a dict
move_organization_licensing_coterm_licenses200_response_dict = move_organization_licensing_coterm_licenses200_response_instance.to_dict()
# create an instance of MoveOrganizationLicensingCotermLicenses200Response from a dict
move_organization_licensing_coterm_licenses200_response_from_dict = MoveOrganizationLicensingCotermLicenses200Response.from_dict(move_organization_licensing_coterm_licenses200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


