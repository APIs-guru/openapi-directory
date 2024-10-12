# ListAccountUsersResponse

List AccountUsers Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_access** | [**List[UserAccess]**](UserAccess.md) | All GTM AccountUsers of a GTM Account. | [optional] 

## Example

```python
from openapi_client.models.list_account_users_response import ListAccountUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccountUsersResponse from a JSON string
list_account_users_response_instance = ListAccountUsersResponse.from_json(json)
# print the JSON string representation of the object
print(ListAccountUsersResponse.to_json())

# convert the object into a dict
list_account_users_response_dict = list_account_users_response_instance.to_dict()
# create an instance of ListAccountUsersResponse from a dict
list_account_users_response_from_dict = ListAccountUsersResponse.from_dict(list_account_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


