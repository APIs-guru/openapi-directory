# ListClientUsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results. | [optional] 
**users** | [**List[ClientUser]**](ClientUser.md) | The returned list of client users. | [optional] 

## Example

```python
from openapi_client.models.list_client_users_response import ListClientUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListClientUsersResponse from a JSON string
list_client_users_response_instance = ListClientUsersResponse.from_json(json)
# print the JSON string representation of the object
print(ListClientUsersResponse.to_json())

# convert the object into a dict
list_client_users_response_dict = list_client_users_response_instance.to_dict()
# create an instance of ListClientUsersResponse from a dict
list_client_users_response_from_dict = ListClientUsersResponse.from_dict(list_client_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


