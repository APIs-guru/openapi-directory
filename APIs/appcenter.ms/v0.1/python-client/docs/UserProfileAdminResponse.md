# UserProfileAdminResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The avatar URL of the user | [optional] 
**can_change_password** | **bool** | User is required to send an old password in order to change the password. | [optional] 
**display_name** | **str** | The full name of the user. Might for example be first and last name | 
**email** | **str** | The email address of the user | 
**id** | **str** | The unique id (UUID) of the user | 
**name** | **str** | The unique name that is used to identify the user. | 
**origin** | **str** | The creation origin of this user | 
**permissions** | **List[str]** | The permissions the user has for the app | [optional] 
**role** | **str** | The user&#39;s role in the organization | [optional] 

## Example

```python
from openapi_client.models.user_profile_admin_response import UserProfileAdminResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileAdminResponse from a JSON string
user_profile_admin_response_instance = UserProfileAdminResponse.from_json(json)
# print the JSON string representation of the object
print(UserProfileAdminResponse.to_json())

# convert the object into a dict
user_profile_admin_response_dict = user_profile_admin_response_instance.to_dict()
# create an instance of UserProfileAdminResponse from a dict
user_profile_admin_response_from_dict = UserProfileAdminResponse.from_dict(user_profile_admin_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


