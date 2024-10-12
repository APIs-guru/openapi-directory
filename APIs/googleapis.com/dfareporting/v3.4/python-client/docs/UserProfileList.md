# UserProfileList

Represents the list of user profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**items** | [**List[UserProfile]**](UserProfile.md) | The user profiles returned in this response. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#userProfileList\&quot;. | [optional] 

## Example

```python
from openapi_client.models.user_profile_list import UserProfileList

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileList from a JSON string
user_profile_list_instance = UserProfileList.from_json(json)
# print the JSON string representation of the object
print(UserProfileList.to_json())

# convert the object into a dict
user_profile_list_dict = user_profile_list_instance.to_dict()
# create an instance of UserProfileList from a dict
user_profile_list_from_dict = UserProfileList.from_dict(user_profile_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


