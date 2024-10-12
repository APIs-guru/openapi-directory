# UserInfo

Template for an individual account info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | User creation timestamp. | [optional] 
**custom_attributes** | **str** | The custom attributes to be set in the user&#39;s id token. | [optional] 
**custom_auth** | **bool** | Whether the user is authenticated by the developer. | [optional] 
**disabled** | **bool** | Whether the user is disabled. | [optional] 
**display_name** | **str** | The name of the user. | [optional] 
**email** | **str** | The email of the user. | [optional] 
**email_verified** | **bool** | Whether the email has been verified. | [optional] 
**last_login_at** | **str** | last login timestamp. | [optional] 
**local_id** | **str** | The local ID of the user. | [optional] 
**password_hash** | **bytearray** | The user&#39;s hashed password. | [optional] 
**password_updated_at** | **float** | The timestamp when the password was last updated. | [optional] 
**phone_number** | **str** | User&#39;s phone number. | [optional] 
**photo_url** | **str** | The URL of the user profile photo. | [optional] 
**provider_user_info** | [**List[UserInfoProviderUserInfoInner]**](UserInfoProviderUserInfoInner.md) | The IDP of the user. | [optional] 
**raw_password** | **str** | The user&#39;s plain text password. | [optional] 
**salt** | **bytearray** | The user&#39;s password salt. | [optional] 
**screen_name** | **str** | User&#39;s screen name at Twitter or login name at Github. | [optional] 
**valid_since** | **str** | Timestamp in seconds for valid login token. | [optional] 
**version** | **int** | Version of the user&#39;s password. | [optional] 

## Example

```python
from openapi_client.models.user_info import UserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserInfo from a JSON string
user_info_instance = UserInfo.from_json(json)
# print the JSON string representation of the object
print(UserInfo.to_json())

# convert the object into a dict
user_info_dict = user_info_instance.to_dict()
# create an instance of UserInfo from a dict
user_info_from_dict = UserInfo.from_dict(user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


