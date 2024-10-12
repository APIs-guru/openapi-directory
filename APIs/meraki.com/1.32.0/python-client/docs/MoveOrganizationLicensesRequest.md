# MoveOrganizationLicensesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest_organization_id** | **str** | The ID of the organization to move the licenses to | 
**license_ids** | **List[str]** | A list of IDs of licenses to move to the new organization | 

## Example

```python
from openapi_client.models.move_organization_licenses_request import MoveOrganizationLicensesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveOrganizationLicensesRequest from a JSON string
move_organization_licenses_request_instance = MoveOrganizationLicensesRequest.from_json(json)
# print the JSON string representation of the object
print(MoveOrganizationLicensesRequest.to_json())

# convert the object into a dict
move_organization_licenses_request_dict = move_organization_licenses_request_instance.to_dict()
# create an instance of MoveOrganizationLicensesRequest from a dict
move_organization_licenses_request_from_dict = MoveOrganizationLicensesRequest.from_dict(move_organization_licenses_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


