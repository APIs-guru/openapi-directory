# RoleAssignmentRequestPartial

A role assignment request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | **str** | The &#x60;id&#x60; of a contact the role is assigned to.  | [optional] 
**role** | **str** | The &#x60;id&#x60; of a role the contact is assigned to.  | [optional] 

## Example

```python
from openapi_client.models.role_assignment_request_partial import RoleAssignmentRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentRequestPartial from a JSON string
role_assignment_request_partial_instance = RoleAssignmentRequestPartial.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentRequestPartial.to_json())

# convert the object into a dict
role_assignment_request_partial_dict = role_assignment_request_partial_instance.to_dict()
# create an instance of RoleAssignmentRequestPartial from a dict
role_assignment_request_partial_from_dict = RoleAssignmentRequestPartial.from_dict(role_assignment_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


