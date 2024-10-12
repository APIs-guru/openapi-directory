# BalanceSheetLiabilities


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[BalanceSheetLiabilitiesAccountsInner]**](BalanceSheetLiabilitiesAccountsInner.md) |  | 
**total** | **float** | Total liabilities | 

## Example

```python
from openapi_client.models.balance_sheet_liabilities import BalanceSheetLiabilities

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceSheetLiabilities from a JSON string
balance_sheet_liabilities_instance = BalanceSheetLiabilities.from_json(json)
# print the JSON string representation of the object
print(BalanceSheetLiabilities.to_json())

# convert the object into a dict
balance_sheet_liabilities_dict = balance_sheet_liabilities_instance.to_dict()
# create an instance of BalanceSheetLiabilities from a dict
balance_sheet_liabilities_from_dict = BalanceSheetLiabilities.from_dict(balance_sheet_liabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


