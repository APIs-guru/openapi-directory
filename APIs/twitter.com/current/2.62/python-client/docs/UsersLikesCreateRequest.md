# UsersLikesCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tweet_id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 

## Example

```python
from openapi_client.models.users_likes_create_request import UsersLikesCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UsersLikesCreateRequest from a JSON string
users_likes_create_request_instance = UsersLikesCreateRequest.from_json(json)
# print the JSON string representation of the object
print(UsersLikesCreateRequest.to_json())

# convert the object into a dict
users_likes_create_request_dict = users_likes_create_request_instance.to_dict()
# create an instance of UsersLikesCreateRequest from a dict
users_likes_create_request_from_dict = UsersLikesCreateRequest.from_dict(users_likes_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


