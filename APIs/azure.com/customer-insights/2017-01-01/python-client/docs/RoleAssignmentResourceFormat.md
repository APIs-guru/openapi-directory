# RoleAssignmentResourceFormat

The Role Assignment resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RoleAssignment**](RoleAssignment.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.role_assignment_resource_format import RoleAssignmentResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentResourceFormat from a JSON string
role_assignment_resource_format_instance = RoleAssignmentResourceFormat.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentResourceFormat.to_json())

# convert the object into a dict
role_assignment_resource_format_dict = role_assignment_resource_format_instance.to_dict()
# create an instance of RoleAssignmentResourceFormat from a dict
role_assignment_resource_format_from_dict = RoleAssignmentResourceFormat.from_dict(role_assignment_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


