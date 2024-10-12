# ListHeldAccountsResponse

Returns a list of the accounts covered by a hold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[HeldAccount]**](HeldAccount.md) | The held accounts on a hold. | [optional] 

## Example

```python
from openapi_client.models.list_held_accounts_response import ListHeldAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListHeldAccountsResponse from a JSON string
list_held_accounts_response_instance = ListHeldAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListHeldAccountsResponse.to_json())

# convert the object into a dict
list_held_accounts_response_dict = list_held_accounts_response_instance.to_dict()
# create an instance of ListHeldAccountsResponse from a dict
list_held_accounts_response_from_dict = ListHeldAccountsResponse.from_dict(list_held_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


