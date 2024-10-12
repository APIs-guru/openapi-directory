# AccountsList

An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Account]**](Account.md) | A list of accounts. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#accountsList']

## Example

```python
from openapi_client.models.accounts_list import AccountsList

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsList from a JSON string
accounts_list_instance = AccountsList.from_json(json)
# print the JSON string representation of the object
print(AccountsList.to_json())

# convert the object into a dict
accounts_list_dict = accounts_list_instance.to_dict()
# create an instance of AccountsList from a dict
accounts_list_from_dict = AccountsList.from_dict(accounts_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


