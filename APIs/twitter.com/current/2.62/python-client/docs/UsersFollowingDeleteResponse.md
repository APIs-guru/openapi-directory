# UsersFollowingDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListFollowedResponseData**](ListFollowedResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.users_following_delete_response import UsersFollowingDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsersFollowingDeleteResponse from a JSON string
users_following_delete_response_instance = UsersFollowingDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(UsersFollowingDeleteResponse.to_json())

# convert the object into a dict
users_following_delete_response_dict = users_following_delete_response_instance.to_dict()
# create an instance of UsersFollowingDeleteResponse from a dict
users_following_delete_response_from_dict = UsersFollowingDeleteResponse.from_dict(users_following_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


