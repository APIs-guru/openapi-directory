# UserFullProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**about** | **str** |  | [optional] 
**counts** | [**UserCounts**](UserCounts.md) |  | [optional] 
**header_picture** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**location** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**picture_url** | **str** |  | [optional] 
**screen_name** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_full_profile import UserFullProfile

# TODO update the JSON string below
json = "{}"
# create an instance of UserFullProfile from a JSON string
user_full_profile_instance = UserFullProfile.from_json(json)
# print the JSON string representation of the object
print(UserFullProfile.to_json())

# convert the object into a dict
user_full_profile_dict = user_full_profile_instance.to_dict()
# create an instance of UserFullProfile from a dict
user_full_profile_from_dict = UserFullProfile.from_dict(user_full_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


