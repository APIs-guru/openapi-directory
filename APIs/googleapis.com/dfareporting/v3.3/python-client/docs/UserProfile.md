# UserProfile

A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID to which this profile belongs. | [optional] 
**account_name** | **str** | The account name this profile belongs to. | [optional] 
**etag** | **str** | Etag of this resource. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#userProfile\&quot;. | [optional] 
**profile_id** | **str** | The unique ID of the user profile. | [optional] 
**sub_account_id** | **str** | The sub account ID this profile belongs to if applicable. | [optional] 
**sub_account_name** | **str** | The sub account name this profile belongs to if applicable. | [optional] 
**user_name** | **str** | The user name. | [optional] 

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


