# UsersFollowingCreateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UsersFollowingCreateResponseData**](UsersFollowingCreateResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.users_following_create_response import UsersFollowingCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsersFollowingCreateResponse from a JSON string
users_following_create_response_instance = UsersFollowingCreateResponse.from_json(json)
# print the JSON string representation of the object
print(UsersFollowingCreateResponse.to_json())

# convert the object into a dict
users_following_create_response_dict = users_following_create_response_instance.to_dict()
# create an instance of UsersFollowingCreateResponse from a dict
users_following_create_response_from_dict = UsersFollowingCreateResponse.from_dict(users_following_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


