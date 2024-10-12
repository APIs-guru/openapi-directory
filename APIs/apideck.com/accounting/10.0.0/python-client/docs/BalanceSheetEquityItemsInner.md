# BalanceSheetEquityItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | The type of the equity | [optional] 
**value** | **float** | The equity amount | [optional] 

## Example

```python
from openapi_client.models.balance_sheet_equity_items_inner import BalanceSheetEquityItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceSheetEquityItemsInner from a JSON string
balance_sheet_equity_items_inner_instance = BalanceSheetEquityItemsInner.from_json(json)
# print the JSON string representation of the object
print(BalanceSheetEquityItemsInner.to_json())

# convert the object into a dict
balance_sheet_equity_items_inner_dict = balance_sheet_equity_items_inner_instance.to_dict()
# create an instance of BalanceSheetEquityItemsInner from a dict
balance_sheet_equity_items_inner_from_dict = BalanceSheetEquityItemsInner.from_dict(balance_sheet_equity_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


