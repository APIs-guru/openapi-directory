# UserProfile

Global information for a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | Email address of the user. Must request &#x60;https://www.googleapis.com/auth/classroom.profile.emails&#x60; scope for this field to be populated in a response body. Read-only. | [optional] 
**id** | **str** | Identifier of the user. Read-only. | [optional] 
**name** | [**Name**](Name.md) |  | [optional] 
**permissions** | [**List[GlobalPermission]**](GlobalPermission.md) | Global permissions of the user. Read-only. | [optional] 
**photo_url** | **str** | URL of user&#39;s profile photo. Must request &#x60;https://www.googleapis.com/auth/classroom.profile.photos&#x60; scope for this field to be populated in a response body. Read-only. | [optional] 
**verified_teacher** | **bool** | Represents whether a Google Workspace for Education user&#39;s domain administrator has explicitly verified them as being a teacher. This field is always false if the user is not a member of a Google Workspace for Education domain. Read-only | [optional] 

## Example

```python
from openapi_client.models.user_profile import UserProfile

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfile from a JSON string
user_profile_instance = UserProfile.from_json(json)
# print the JSON string representation of the object
print(UserProfile.to_json())

# convert the object into a dict
user_profile_dict = user_profile_instance.to_dict()
# create an instance of UserProfile from a dict
user_profile_from_dict = UserProfile.from_dict(user_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


