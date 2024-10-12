# MoveOrganizationLicensingCotermLicensesRequestLicensesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**List[MoveOrganizationLicensingCotermLicensesRequestLicensesInnerCountsInner]**](MoveOrganizationLicensingCotermLicensesRequestLicensesInnerCountsInner.md) | The counts to move from the license by model type | 
**key** | **str** | The license key to move counts from | 

## Example

```python
from openapi_client.models.move_organization_licensing_coterm_licenses_request_licenses_inner import MoveOrganizationLicensingCotermLicensesRequestLicensesInner

# TODO update the JSON string below
json = "{}"
# create an instance of MoveOrganizationLicensingCotermLicensesRequestLicensesInner from a JSON string
move_organization_licensing_coterm_licenses_request_licenses_inner_instance = MoveOrganizationLicensingCotermLicensesRequestLicensesInner.from_json(json)
# print the JSON string representation of the object
print(MoveOrganizationLicensingCotermLicensesRequestLicensesInner.to_json())

# convert the object into a dict
move_organization_licensing_coterm_licenses_request_licenses_inner_dict = move_organization_licensing_coterm_licenses_request_licenses_inner_instance.to_dict()
# create an instance of MoveOrganizationLicensingCotermLicensesRequestLicensesInner from a dict
move_organization_licensing_coterm_licenses_request_licenses_inner_from_dict = MoveOrganizationLicensingCotermLicensesRequestLicensesInner.from_dict(move_organization_licensing_coterm_licenses_request_licenses_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


