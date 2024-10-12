# User

A representation of a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_deleted** | **bool** | A boolean which indicates whether the specified User was deleted. If true, name, photo and permission_id will be omitted. | [optional] 
**is_me** | **bool** | Whether the user is the authenticated user. | [optional] 
**name** | **str** | The displayable name of the user. | [optional] 
**permission_id** | **str** | The permission ID associated with this user. Equivalent to the Drive API&#39;s permission ID for this user, returned as part of the Drive Permissions resource. | [optional] 
**photo** | [**Photo**](Photo.md) |  | [optional] 

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


