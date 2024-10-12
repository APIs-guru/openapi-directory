# MoveOrganizationLicensingCotermLicensesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**MoveOrganizationLicensingCotermLicensesRequestDestination**](MoveOrganizationLicensingCotermLicensesRequestDestination.md) |  | 
**licenses** | [**List[MoveOrganizationLicensingCotermLicensesRequestLicensesInner]**](MoveOrganizationLicensingCotermLicensesRequestLicensesInner.md) | The list of licenses to move | 

## Example

```python
from openapi_client.models.move_organization_licensing_coterm_licenses_request import MoveOrganizationLicensingCotermLicensesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveOrganizationLicensingCotermLicensesRequest from a JSON string
move_organization_licensing_coterm_licenses_request_instance = MoveOrganizationLicensingCotermLicensesRequest.from_json(json)
# print the JSON string representation of the object
print(MoveOrganizationLicensingCotermLicensesRequest.to_json())

# convert the object into a dict
move_organization_licensing_coterm_licenses_request_dict = move_organization_licensing_coterm_licenses_request_instance.to_dict()
# create an instance of MoveOrganizationLicensingCotermLicensesRequest from a dict
move_organization_licensing_coterm_licenses_request_from_dict = MoveOrganizationLicensingCotermLicensesRequest.from_dict(move_organization_licensing_coterm_licenses_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


