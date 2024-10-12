# UsersFollowingCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_user_id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 

## Example

```python
from openapi_client.models.users_following_create_request import UsersFollowingCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UsersFollowingCreateRequest from a JSON string
users_following_create_request_instance = UsersFollowingCreateRequest.from_json(json)
# print the JSON string representation of the object
print(UsersFollowingCreateRequest.to_json())

# convert the object into a dict
users_following_create_request_dict = users_following_create_request_instance.to_dict()
# create an instance of UsersFollowingCreateRequest from a dict
users_following_create_request_from_dict = UsersFollowingCreateRequest.from_dict(users_following_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


