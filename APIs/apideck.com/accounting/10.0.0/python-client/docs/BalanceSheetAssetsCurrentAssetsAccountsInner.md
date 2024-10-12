# BalanceSheetAssetsCurrentAssetsAccountsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | The name of the current asset account | [optional] 
**value** | **float** | The value of the current asset | [optional] 

## Example

```python
from openapi_client.models.balance_sheet_assets_current_assets_accounts_inner import BalanceSheetAssetsCurrentAssetsAccountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceSheetAssetsCurrentAssetsAccountsInner from a JSON string
balance_sheet_assets_current_assets_accounts_inner_instance = BalanceSheetAssetsCurrentAssetsAccountsInner.from_json(json)
# print the JSON string representation of the object
print(BalanceSheetAssetsCurrentAssetsAccountsInner.to_json())

# convert the object into a dict
balance_sheet_assets_current_assets_accounts_inner_dict = balance_sheet_assets_current_assets_accounts_inner_instance.to_dict()
# create an instance of BalanceSheetAssetsCurrentAssetsAccountsInner from a dict
balance_sheet_assets_current_assets_accounts_inner_from_dict = BalanceSheetAssetsCurrentAssetsAccountsInner.from_dict(balance_sheet_assets_current_assets_accounts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


