# BalanceSheetLiabilitiesAccountsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | The name of the liability account | [optional] 
**value** | **float** | The value of the liability | [optional] 

## Example

```python
from openapi_client.models.balance_sheet_liabilities_accounts_inner import BalanceSheetLiabilitiesAccountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceSheetLiabilitiesAccountsInner from a JSON string
balance_sheet_liabilities_accounts_inner_instance = BalanceSheetLiabilitiesAccountsInner.from_json(json)
# print the JSON string representation of the object
print(BalanceSheetLiabilitiesAccountsInner.to_json())

# convert the object into a dict
balance_sheet_liabilities_accounts_inner_dict = balance_sheet_liabilities_accounts_inner_instance.to_dict()
# create an instance of BalanceSheetLiabilitiesAccountsInner from a dict
balance_sheet_liabilities_accounts_inner_from_dict = BalanceSheetLiabilitiesAccountsInner.from_dict(balance_sheet_liabilities_accounts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


