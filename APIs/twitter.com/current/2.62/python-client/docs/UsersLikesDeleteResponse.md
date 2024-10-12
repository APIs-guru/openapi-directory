# UsersLikesDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UsersLikesCreateResponseData**](UsersLikesCreateResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.users_likes_delete_response import UsersLikesDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsersLikesDeleteResponse from a JSON string
users_likes_delete_response_instance = UsersLikesDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(UsersLikesDeleteResponse.to_json())

# convert the object into a dict
users_likes_delete_response_dict = users_likes_delete_response_instance.to_dict()
# create an instance of UsersLikesDeleteResponse from a dict
users_likes_delete_response_from_dict = UsersLikesDeleteResponse.from_dict(users_likes_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


