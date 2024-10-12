# AssignOrganizationLicensesSeatsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license_id** | **str** | The ID of the SM license to assign seats from | 
**network_id** | **str** | The ID of the SM network to assign the seats to | 
**seat_count** | **int** | The number of seats to assign to the SM network. Must be less than or equal to the total number of seats of the license | 

## Example

```python
from openapi_client.models.assign_organization_licenses_seats_request import AssignOrganizationLicensesSeatsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssignOrganizationLicensesSeatsRequest from a JSON string
assign_organization_licenses_seats_request_instance = AssignOrganizationLicensesSeatsRequest.from_json(json)
# print the JSON string representation of the object
print(AssignOrganizationLicensesSeatsRequest.to_json())

# convert the object into a dict
assign_organization_licenses_seats_request_dict = assign_organization_licenses_seats_request_instance.to_dict()
# create an instance of AssignOrganizationLicensesSeatsRequest from a dict
assign_organization_licenses_seats_request_from_dict = AssignOrganizationLicensesSeatsRequest.from_dict(assign_organization_licenses_seats_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


