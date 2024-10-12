# AppMembershipsValidationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_users_with_missing_memberships** | [**List[AppMembershipsValidationResponseAppUsersWithMissingMembershipsInner]**](AppMembershipsValidationResponseAppUsersWithMissingMembershipsInner.md) |  | [optional] 
**distribution_group_users_with_missing_memberships** | [**List[AppMembershipsValidationResponseDistributionGroupUsersWithMissingMembershipsInner]**](AppMembershipsValidationResponseDistributionGroupUsersWithMissingMembershipsInner.md) |  | [optional] 
**excess_app_memberships** | [**AppMembershipsValidationResponseExcessAppMemberships**](AppMembershipsValidationResponseExcessAppMemberships.md) |  | [optional] 
**organization_admins_with_missing_memberships** | [**List[AppMembershipsValidationResponseOrganizationAdminsWithMissingMembershipsInner]**](AppMembershipsValidationResponseOrganizationAdminsWithMissingMembershipsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_memberships_validation_response import AppMembershipsValidationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppMembershipsValidationResponse from a JSON string
app_memberships_validation_response_instance = AppMembershipsValidationResponse.from_json(json)
# print the JSON string representation of the object
print(AppMembershipsValidationResponse.to_json())

# convert the object into a dict
app_memberships_validation_response_dict = app_memberships_validation_response_instance.to_dict()
# create an instance of AppMembershipsValidationResponse from a dict
app_memberships_validation_response_from_dict = AppMembershipsValidationResponse.from_dict(app_memberships_validation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


