# MoveOrganizationLicensesSeats200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest_organization_id** | **str** | The ID of the organization to move the SM seats to | [optional] 
**license_id** | **str** | The ID of the SM license to move the seats from | [optional] 
**seat_count** | **int** | The number of seats to move to the new organization. Must be less than or equal to the total number of seats of the license | [optional] 

## Example

```python
from openapi_client.models.move_organization_licenses_seats200_response import MoveOrganizationLicensesSeats200Response

# TODO update the JSON string below
json = "{}"
# create an instance of MoveOrganizationLicensesSeats200Response from a JSON string
move_organization_licenses_seats200_response_instance = MoveOrganizationLicensesSeats200Response.from_json(json)
# print the JSON string representation of the object
print(MoveOrganizationLicensesSeats200Response.to_json())

# convert the object into a dict
move_organization_licenses_seats200_response_dict = move_organization_licenses_seats200_response_instance.to_dict()
# create an instance of MoveOrganizationLicensesSeats200Response from a dict
move_organization_licenses_seats200_response_from_dict = MoveOrganizationLicensesSeats200Response.from_dict(move_organization_licenses_seats200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


