# UsersFollowingCreateResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**following** | **bool** |  | [optional] 
**pending_follow** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.users_following_create_response_data import UsersFollowingCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of UsersFollowingCreateResponseData from a JSON string
users_following_create_response_data_instance = UsersFollowingCreateResponseData.from_json(json)
# print the JSON string representation of the object
print(UsersFollowingCreateResponseData.to_json())

# convert the object into a dict
users_following_create_response_data_dict = users_following_create_response_data_instance.to_dict()
# create an instance of UsersFollowingCreateResponseData from a dict
users_following_create_response_data_from_dict = UsersFollowingCreateResponseData.from_dict(users_following_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


