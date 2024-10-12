# ListUsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListUsers&#x60; method to retrieve the next page of results. This token will be absent if there are no more results to return. | [optional] 
**users** | [**List[User]**](User.md) | The list of users. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.list_users_response import ListUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUsersResponse from a JSON string
list_users_response_instance = ListUsersResponse.from_json(json)
# print the JSON string representation of the object
print(ListUsersResponse.to_json())

# convert the object into a dict
list_users_response_dict = list_users_response_instance.to_dict()
# create an instance of ListUsersResponse from a dict
list_users_response_from_dict = ListUsersResponse.from_dict(list_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


