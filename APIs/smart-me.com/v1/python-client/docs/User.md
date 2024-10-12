# User

Container Class for the Web API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_users** | [**List[User]**](User.md) | The Users created by this users. | [optional] 
**email** | **str** | The EMail Address of the User | [optional] 
**id** | **int** | The ID of the User | [optional] 
**id_as_string** | **str** | The ID of the user as string | [optional] 
**is_admin** | **bool** | Flag if this User is an Admin User | [optional] 
**permissions** | **List[str]** | Additional Permissions | [optional] 
**username** | **str** | The Username of the User | [optional] 

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


