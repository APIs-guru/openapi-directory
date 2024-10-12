# RoleAssignment

Defines an assignment of a role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_to** | **str** | The unique ID of the entity this role is assigned to—either the &#x60;user_id&#x60; of a user, the &#x60;group_id&#x60; of a group, or the &#x60;uniqueId&#x60; of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts). | [optional] 
**assignee_type** | **str** | Output only. The type of the assignee (&#x60;USER&#x60; or &#x60;GROUP&#x60;). | [optional] [readonly] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | The type of the API resource. This is always &#x60;admin#directory#roleAssignment&#x60;. | [optional] [default to 'admin#directory#roleAssignment']
**org_unit_id** | **str** | If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to. | [optional] 
**role_assignment_id** | **str** | ID of this roleAssignment. | [optional] 
**role_id** | **str** | The ID of the role that is assigned. | [optional] 
**scope_type** | **str** | The scope in which this role is assigned. | [optional] 

## Example

```python
from openapi_client.models.role_assignment import RoleAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignment from a JSON string
role_assignment_instance = RoleAssignment.from_json(json)
# print the JSON string representation of the object
print(RoleAssignment.to_json())

# convert the object into a dict
role_assignment_dict = role_assignment_instance.to_dict()
# create an instance of RoleAssignment from a dict
role_assignment_from_dict = RoleAssignment.from_dict(role_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


