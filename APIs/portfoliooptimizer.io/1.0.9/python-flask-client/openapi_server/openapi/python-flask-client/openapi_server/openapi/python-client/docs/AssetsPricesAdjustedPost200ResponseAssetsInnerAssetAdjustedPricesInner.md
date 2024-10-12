# AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** | The date corresponding to the date t in format YYYY-MM-DD | 
**dividend_adjusted_close** | **float** | The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided | [optional] 
**fully_adjusted_close** | **float** | The dividend(s) and split(s) adjusted close price of the asset at the date t | 
**split_adjusted_close** | **float** | The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided | [optional] 

## Example

```python
from openapi_client.models.assets_prices_adjusted_post200_response_assets_inner_asset_adjusted_prices_inner import AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner from a JSON string
assets_prices_adjusted_post200_response_assets_inner_asset_adjusted_prices_inner_instance = AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.from_json(json)
# print the JSON string representation of the object
print(AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.to_json())

# convert the object into a dict
assets_prices_adjusted_post200_response_assets_inner_asset_adjusted_prices_inner_dict = assets_prices_adjusted_post200_response_assets_inner_asset_adjusted_prices_inner_instance.to_dict()
# create an instance of AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner from a dict
assets_prices_adjusted_post200_response_assets_inner_asset_adjusted_prices_inner_from_dict = AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.from_dict(assets_prices_adjusted_post200_response_assets_inner_asset_adjusted_prices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


