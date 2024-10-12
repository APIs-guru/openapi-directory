# AccountBalance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_reload** | **bool** | Whether the account has auto-reloading enabled | [optional] 
**value** | **float** | The balance of the account, in EUR | [optional] 

## Example

```python
from openapi_client.models.account_balance import AccountBalance

# TODO update the JSON string below
json = "{}"
# create an instance of AccountBalance from a JSON string
account_balance_instance = AccountBalance.from_json(json)
# print the JSON string representation of the object
print(AccountBalance.to_json())

# convert the object into a dict
account_balance_dict = account_balance_instance.to_dict()
# create an instance of AccountBalance from a dict
account_balance_from_dict = AccountBalance.from_dict(account_balance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


