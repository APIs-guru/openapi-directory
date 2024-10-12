# MoveOrganizationLicensingCotermLicensesRequestDestination

Destination data for the license move

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | The claim mode of the moved license | [optional] 
**organization_id** | **str** | The organization to move the license to | [optional] 

## Example

```python
from openapi_client.models.move_organization_licensing_coterm_licenses_request_destination import MoveOrganizationLicensingCotermLicensesRequestDestination

# TODO update the JSON string below
json = "{}"
# create an instance of MoveOrganizationLicensingCotermLicensesRequestDestination from a JSON string
move_organization_licensing_coterm_licenses_request_destination_instance = MoveOrganizationLicensingCotermLicensesRequestDestination.from_json(json)
# print the JSON string representation of the object
print(MoveOrganizationLicensingCotermLicensesRequestDestination.to_json())

# convert the object into a dict
move_organization_licensing_coterm_licenses_request_destination_dict = move_organization_licensing_coterm_licenses_request_destination_instance.to_dict()
# create an instance of MoveOrganizationLicensingCotermLicensesRequestDestination from a dict
move_organization_licensing_coterm_licenses_request_destination_from_dict = MoveOrganizationLicensingCotermLicensesRequestDestination.from_dict(move_organization_licensing_coterm_licenses_request_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


