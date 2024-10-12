# RemoveHeldAccountsRequest

Remove a list of accounts from a hold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ids** | **List[str]** | The account IDs of the accounts to remove from the hold. | [optional] 

## Example

```python
from openapi_client.models.remove_held_accounts_request import RemoveHeldAccountsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveHeldAccountsRequest from a JSON string
remove_held_accounts_request_instance = RemoveHeldAccountsRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveHeldAccountsRequest.to_json())

# convert the object into a dict
remove_held_accounts_request_dict = remove_held_accounts_request_instance.to_dict()
# create an instance of RemoveHeldAccountsRequest from a dict
remove_held_accounts_request_from_dict = RemoveHeldAccountsRequest.from_dict(remove_held_accounts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


