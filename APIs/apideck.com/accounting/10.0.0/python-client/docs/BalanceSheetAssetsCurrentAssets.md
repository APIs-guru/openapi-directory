# BalanceSheetAssetsCurrentAssets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[BalanceSheetAssetsCurrentAssetsAccountsInner]**](BalanceSheetAssetsCurrentAssetsAccountsInner.md) |  | 
**total** | **float** | Total current assets | 

## Example

```python
from openapi_client.models.balance_sheet_assets_current_assets import BalanceSheetAssetsCurrentAssets

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceSheetAssetsCurrentAssets from a JSON string
balance_sheet_assets_current_assets_instance = BalanceSheetAssetsCurrentAssets.from_json(json)
# print the JSON string representation of the object
print(BalanceSheetAssetsCurrentAssets.to_json())

# convert the object into a dict
balance_sheet_assets_current_assets_dict = balance_sheet_assets_current_assets_instance.to_dict()
# create an instance of BalanceSheetAssetsCurrentAssets from a dict
balance_sheet_assets_current_assets_from_dict = BalanceSheetAssetsCurrentAssets.from_dict(balance_sheet_assets_current_assets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


