# BalanceSheetAssets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_assets** | [**BalanceSheetAssetsCurrentAssets**](BalanceSheetAssetsCurrentAssets.md) |  | 
**fixed_assets** | [**BalanceSheetAssetsFixedAssets**](BalanceSheetAssetsFixedAssets.md) |  | 
**total** | **float** | Total assets | 

## Example

```python
from openapi_client.models.balance_sheet_assets import BalanceSheetAssets

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceSheetAssets from a JSON string
balance_sheet_assets_instance = BalanceSheetAssets.from_json(json)
# print the JSON string representation of the object
print(BalanceSheetAssets.to_json())

# convert the object into a dict
balance_sheet_assets_dict = balance_sheet_assets_instance.to_dict()
# create an instance of BalanceSheetAssets from a dict
balance_sheet_assets_from_dict = BalanceSheetAssets.from_dict(balance_sheet_assets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


