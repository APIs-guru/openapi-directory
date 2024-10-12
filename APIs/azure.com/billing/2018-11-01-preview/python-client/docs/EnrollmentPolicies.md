# EnrollmentPolicies

The attributes associated with legacy enrollment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_owner_view_charges** | **bool** | The accountOwnerViewCharges flag for Enrollment | [optional] [readonly] 
**department_admin_view_charges** | **bool** | The departmentAdminViewCharges flag for Enrollment | [optional] [readonly] 
**marketplaces_enabled** | **bool** | The marketplaces flag for Enrollment | [optional] [readonly] 
**reserved_instances_enabled** | **bool** | The reserved instances flag for Enrollment | [optional] [readonly] 

## Example

```python
from openapi_client.models.enrollment_policies import EnrollmentPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollmentPolicies from a JSON string
enrollment_policies_instance = EnrollmentPolicies.from_json(json)
# print the JSON string representation of the object
print(EnrollmentPolicies.to_json())

# convert the object into a dict
enrollment_policies_dict = enrollment_policies_instance.to_dict()
# create an instance of EnrollmentPolicies from a dict
enrollment_policies_from_dict = EnrollmentPolicies.from_dict(enrollment_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


