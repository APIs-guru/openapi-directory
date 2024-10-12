# User

A single user in Display & Video 360.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_user_roles** | [**List[AssignedUserRole]**](AssignedUserRole.md) | The assigned user roles. Required in CreateUser. Output only in UpdateUser. Can only be updated through BulkEditAssignedUserRoles. | [optional] 
**display_name** | **str** | Required. The display name of the user. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**email** | **str** | Required. Immutable. The email address used to identify the user. | [optional] 
**last_login_time** | **str** | Output only. The timestamp when the user last logged in DV360 UI. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the user. | [optional] [readonly] 
**user_id** | **str** | Output only. The unique ID of the user. Assigned by the system. | [optional] [readonly] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


