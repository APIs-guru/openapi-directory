# DenyAssignmentPermission

Deny assignment permissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | Actions to which the deny assignment does not grant access. | [optional] 
**data_actions** | **List[str]** | Data actions to which the deny assignment does not grant access. | [optional] 
**not_actions** | **List[str]** | Actions to exclude from that the deny assignment does not grant access. | [optional] 
**not_data_actions** | **List[str]** | Data actions to exclude from that the deny assignment does not grant access. | [optional] 

## Example

```python
from openapi_client.models.deny_assignment_permission import DenyAssignmentPermission

# TODO update the JSON string below
json = "{}"
# create an instance of DenyAssignmentPermission from a JSON string
deny_assignment_permission_instance = DenyAssignmentPermission.from_json(json)
# print the JSON string representation of the object
print(DenyAssignmentPermission.to_json())

# convert the object into a dict
deny_assignment_permission_dict = deny_assignment_permission_instance.to_dict()
# create an instance of DenyAssignmentPermission from a dict
deny_assignment_permission_from_dict = DenyAssignmentPermission.from_dict(deny_assignment_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


