# RoleAssignmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | **str** | The &#x60;id&#x60; of a contact the role is assigned to.  | 
**role** | **str** | The &#x60;id&#x60; of a role the contact is assigned to.  | 

## Example

```python
from openapi_client.models.role_assignment_request import RoleAssignmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentRequest from a JSON string
role_assignment_request_instance = RoleAssignmentRequest.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentRequest.to_json())

# convert the object into a dict
role_assignment_request_dict = role_assignment_request_instance.to_dict()
# create an instance of RoleAssignmentRequest from a dict
role_assignment_request_from_dict = RoleAssignmentRequest.from_dict(role_assignment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


