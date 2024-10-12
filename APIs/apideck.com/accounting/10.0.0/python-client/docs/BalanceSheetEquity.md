# BalanceSheetEquity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[BalanceSheetEquityItemsInner]**](BalanceSheetEquityItemsInner.md) |  | 
**total** | **float** | Total equity | 

## Example

```python
from openapi_client.models.balance_sheet_equity import BalanceSheetEquity

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceSheetEquity from a JSON string
balance_sheet_equity_instance = BalanceSheetEquity.from_json(json)
# print the JSON string representation of the object
print(BalanceSheetEquity.to_json())

# convert the object into a dict
balance_sheet_equity_dict = balance_sheet_equity_instance.to_dict()
# create an instance of BalanceSheetEquity from a dict
balance_sheet_equity_from_dict = BalanceSheetEquity.from_dict(balance_sheet_equity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


