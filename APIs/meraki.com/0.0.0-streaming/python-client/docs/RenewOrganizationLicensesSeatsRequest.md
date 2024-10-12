# RenewOrganizationLicensesSeatsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license_id_to_renew** | **str** | The ID of the SM license to renew. This license must already be assigned to an SM network | 
**unused_license_id** | **str** | The SM license to use to renew the seats on &#39;licenseIdToRenew&#39;. This license must have at least as many seats available as there are seats on &#39;licenseIdToRenew&#39; | 

## Example

```python
from openapi_client.models.renew_organization_licenses_seats_request import RenewOrganizationLicensesSeatsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RenewOrganizationLicensesSeatsRequest from a JSON string
renew_organization_licenses_seats_request_instance = RenewOrganizationLicensesSeatsRequest.from_json(json)
# print the JSON string representation of the object
print(RenewOrganizationLicensesSeatsRequest.to_json())

# convert the object into a dict
renew_organization_licenses_seats_request_dict = renew_organization_licenses_seats_request_instance.to_dict()
# create an instance of RenewOrganizationLicensesSeatsRequest from a dict
renew_organization_licenses_seats_request_from_dict = RenewOrganizationLicensesSeatsRequest.from_dict(renew_organization_licenses_seats_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


