# BalanceSheetAssetsFixedAssets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[BalanceSheetAssetsFixedAssetsAccountsInner]**](BalanceSheetAssetsFixedAssetsAccountsInner.md) |  | 
**total** | **float** | Total fixed assets | 

## Example

```python
from openapi_client.models.balance_sheet_assets_fixed_assets import BalanceSheetAssetsFixedAssets

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceSheetAssetsFixedAssets from a JSON string
balance_sheet_assets_fixed_assets_instance = BalanceSheetAssetsFixedAssets.from_json(json)
# print the JSON string representation of the object
print(BalanceSheetAssetsFixedAssets.to_json())

# convert the object into a dict
balance_sheet_assets_fixed_assets_dict = balance_sheet_assets_fixed_assets_instance.to_dict()
# create an instance of BalanceSheetAssetsFixedAssets from a dict
balance_sheet_assets_fixed_assets_from_dict = BalanceSheetAssetsFixedAssets.from_dict(balance_sheet_assets_fixed_assets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


