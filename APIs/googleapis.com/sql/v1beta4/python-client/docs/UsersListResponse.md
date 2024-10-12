# UsersListResponse

User list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[User]**](User.md) | List of user resources in the instance. | [optional] 
**kind** | **str** | This is always *sql#usersList*. | [optional] 
**next_page_token** | **str** | Unused. | [optional] 

## Example

```python
from openapi_client.models.users_list_response import UsersListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsersListResponse from a JSON string
users_list_response_instance = UsersListResponse.from_json(json)
# print the JSON string representation of the object
print(UsersListResponse.to_json())

# convert the object into a dict
users_list_response_dict = users_list_response_instance.to_dict()
# create an instance of UsersListResponse from a dict
users_list_response_from_dict = UsersListResponse.from_dict(users_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


