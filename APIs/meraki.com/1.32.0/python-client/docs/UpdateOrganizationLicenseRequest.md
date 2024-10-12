# UpdateOrganizationLicenseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_serial** | **str** | The serial number of the device to assign this license to. Set this to  null to unassign the license. If a different license is already active on the device, this parameter will control queueing/dequeuing this license. | [optional] 

## Example

```python
from openapi_client.models.update_organization_license_request import UpdateOrganizationLicenseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationLicenseRequest from a JSON string
update_organization_license_request_instance = UpdateOrganizationLicenseRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationLicenseRequest.to_json())

# convert the object into a dict
update_organization_license_request_dict = update_organization_license_request_instance.to_dict()
# create an instance of UpdateOrganizationLicenseRequest from a dict
update_organization_license_request_from_dict = UpdateOrganizationLicenseRequest.from_dict(update_organization_license_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


