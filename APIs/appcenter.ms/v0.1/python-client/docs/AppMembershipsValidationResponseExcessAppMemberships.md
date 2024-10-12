# AppMembershipsValidationResponseExcessAppMemberships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_users_memberships** | [**List[AppMembershipsResponseMembershipsInner]**](AppMembershipsResponseMembershipsInner.md) |  | [optional] 
**distribution_group_memberships** | [**List[AppMembershipsResponseMembershipsInner]**](AppMembershipsResponseMembershipsInner.md) |  | [optional] 
**organization_admin_memberships** | [**List[AppMembershipsResponseMembershipsInner]**](AppMembershipsResponseMembershipsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_memberships_validation_response_excess_app_memberships import AppMembershipsValidationResponseExcessAppMemberships

# TODO update the JSON string below
json = "{}"
# create an instance of AppMembershipsValidationResponseExcessAppMemberships from a JSON string
app_memberships_validation_response_excess_app_memberships_instance = AppMembershipsValidationResponseExcessAppMemberships.from_json(json)
# print the JSON string representation of the object
print(AppMembershipsValidationResponseExcessAppMemberships.to_json())

# convert the object into a dict
app_memberships_validation_response_excess_app_memberships_dict = app_memberships_validation_response_excess_app_memberships_instance.to_dict()
# create an instance of AppMembershipsValidationResponseExcessAppMemberships from a dict
app_memberships_validation_response_excess_app_memberships_from_dict = AppMembershipsValidationResponseExcessAppMemberships.from_dict(app_memberships_validation_response_excess_app_memberships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


