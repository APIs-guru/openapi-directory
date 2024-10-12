# RoleAssignmentUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | **str** | The &#x60;id&#x60; of a contact the role is assigned to.  | 
**role** | **str** | The &#x60;id&#x60; of a role the contact is assigned to.  | 

## Example

```python
from openapi_client.models.role_assignment_update import RoleAssignmentUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentUpdate from a JSON string
role_assignment_update_instance = RoleAssignmentUpdate.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentUpdate.to_json())

# convert the object into a dict
role_assignment_update_dict = role_assignment_update_instance.to_dict()
# create an instance of RoleAssignmentUpdate from a dict
role_assignment_update_from_dict = RoleAssignmentUpdate.from_dict(role_assignment_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


