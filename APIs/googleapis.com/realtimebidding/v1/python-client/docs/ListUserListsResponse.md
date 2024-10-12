# ListUserListsResponse

The list user list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The continuation page token to send back to the server in a subsequent request. Due to a currently known issue, it is recommended that the caller keep invoking the list method until the time a next page token is not returned, even if the result set is empty. | [optional] 
**user_lists** | [**List[UserList]**](UserList.md) | List of user lists from the search. | [optional] 

## Example

```python
from openapi_client.models.list_user_lists_response import ListUserListsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserListsResponse from a JSON string
list_user_lists_response_instance = ListUserListsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUserListsResponse.to_json())

# convert the object into a dict
list_user_lists_response_dict = list_user_lists_response_instance.to_dict()
# create an instance of ListUserListsResponse from a dict
list_user_lists_response_from_dict = ListUserListsResponse.from_dict(list_user_lists_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


