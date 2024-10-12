# RoleAssignmentFilter

Role Assignments filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_delegate** | **bool** | The Delegation flag for the role assignment | [optional] 
**principal_id** | **str** | Returns role assignment of the specific principal. | [optional] 

## Example

```python
from openapi_client.models.role_assignment_filter import RoleAssignmentFilter

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentFilter from a JSON string
role_assignment_filter_instance = RoleAssignmentFilter.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentFilter.to_json())

# convert the object into a dict
role_assignment_filter_dict = role_assignment_filter_instance.to_dict()
# create an instance of RoleAssignmentFilter from a dict
role_assignment_filter_from_dict = RoleAssignmentFilter.from_dict(role_assignment_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


