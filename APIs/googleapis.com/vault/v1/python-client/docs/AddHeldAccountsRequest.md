# AddHeldAccountsRequest

Add a list of accounts to a hold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ids** | **List[str]** | A comma-separated list of the account IDs of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both. | [optional] 
**emails** | **List[str]** | A comma-separated list of the emails of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both. | [optional] 

## Example

```python
from openapi_client.models.add_held_accounts_request import AddHeldAccountsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddHeldAccountsRequest from a JSON string
add_held_accounts_request_instance = AddHeldAccountsRequest.from_json(json)
# print the JSON string representation of the object
print(AddHeldAccountsRequest.to_json())

# convert the object into a dict
add_held_accounts_request_dict = add_held_accounts_request_instance.to_dict()
# create an instance of AddHeldAccountsRequest from a dict
add_held_accounts_request_from_dict = AddHeldAccountsRequest.from_dict(add_held_accounts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


