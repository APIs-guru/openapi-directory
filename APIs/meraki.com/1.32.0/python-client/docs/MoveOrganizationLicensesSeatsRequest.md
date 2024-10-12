# MoveOrganizationLicensesSeatsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest_organization_id** | **str** | The ID of the organization to move the SM seats to | 
**license_id** | **str** | The ID of the SM license to move the seats from | 
**seat_count** | **int** | The number of seats to move to the new organization. Must be less than or equal to the total number of seats of the license | 

## Example

```python
from openapi_client.models.move_organization_licenses_seats_request import MoveOrganizationLicensesSeatsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveOrganizationLicensesSeatsRequest from a JSON string
move_organization_licenses_seats_request_instance = MoveOrganizationLicensesSeatsRequest.from_json(json)
# print the JSON string representation of the object
print(MoveOrganizationLicensesSeatsRequest.to_json())

# convert the object into a dict
move_organization_licenses_seats_request_dict = move_organization_licenses_seats_request_instance.to_dict()
# create an instance of MoveOrganizationLicensesSeatsRequest from a dict
move_organization_licenses_seats_request_from_dict = MoveOrganizationLicensesSeatsRequest.from_dict(move_organization_licenses_seats_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


