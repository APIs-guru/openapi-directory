# UserProfileResponseManagement


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
**admin_role** | **str** | The new admin_role | [optional] 
**feature_flags** | **List[str]** | The feature flags that are enabled for this app | [optional] 
**settings** | **object** | The user&#39;s settings | [optional] 
**identity_providers** | [**List[UserProfileResponseManagementAllOfIdentityProviders]**](UserProfileResponseManagementAllOfIdentityProviders.md) | The identity providers associated with the user&#39;s account | [optional] 
**updated_at** | **str** | The date when the app was last updated | [optional] 
**verified** | **bool** | A boolean flag that indicates if the user is already verified | [optional] 

## Example

```python
from openapi_client.models.user_profile_response_management import UserProfileResponseManagement

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileResponseManagement from a JSON string
user_profile_response_management_instance = UserProfileResponseManagement.from_json(json)
# print the JSON string representation of the object
print(UserProfileResponseManagement.to_json())

# convert the object into a dict
user_profile_response_management_dict = user_profile_response_management_instance.to_dict()
# create an instance of UserProfileResponseManagement from a dict
user_profile_response_management_from_dict = UserProfileResponseManagement.from_dict(user_profile_response_management_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


