# AssignOrganizationLicensesSeats200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resulting_licenses** | [**List[GetOrganizationLicenses200ResponseInner]**](GetOrganizationLicenses200ResponseInner.md) | Resulting licenses from the move | [optional] 

## Example

```python
from openapi_client.models.assign_organization_licenses_seats200_response import AssignOrganizationLicensesSeats200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AssignOrganizationLicensesSeats200Response from a JSON string
assign_organization_licenses_seats200_response_instance = AssignOrganizationLicensesSeats200Response.from_json(json)
# print the JSON string representation of the object
print(AssignOrganizationLicensesSeats200Response.to_json())

# convert the object into a dict
assign_organization_licenses_seats200_response_dict = assign_organization_licenses_seats200_response_instance.to_dict()
# create an instance of AssignOrganizationLicensesSeats200Response from a dict
assign_organization_licenses_seats200_response_from_dict = AssignOrganizationLicensesSeats200Response.from_dict(assign_organization_licenses_seats200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


