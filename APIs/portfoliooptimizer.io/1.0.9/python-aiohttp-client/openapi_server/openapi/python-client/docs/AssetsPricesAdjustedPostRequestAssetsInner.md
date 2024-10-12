# AssetsPricesAdjustedPostRequestAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_dividends** | [**List[AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner]**](AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner.md) | assetDividends[t] contains dividend information for the asset at the date t | [optional] 
**asset_prices** | [**List[AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner]**](AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner.md) | assetPrices[t] contains price information for the asset at the date t | 
**asset_splits** | [**List[AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner]**](AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner.md) | assetSplits[t] contains split information for the asset at the date t | [optional] 

## Example

```python
from openapi_client.models.assets_prices_adjusted_post_request_assets_inner import AssetsPricesAdjustedPostRequestAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsPricesAdjustedPostRequestAssetsInner from a JSON string
assets_prices_adjusted_post_request_assets_inner_instance = AssetsPricesAdjustedPostRequestAssetsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsPricesAdjustedPostRequestAssetsInner.to_json())

# convert the object into a dict
assets_prices_adjusted_post_request_assets_inner_dict = assets_prices_adjusted_post_request_assets_inner_instance.to_dict()
# create an instance of AssetsPricesAdjustedPostRequestAssetsInner from a dict
assets_prices_adjusted_post_request_assets_inner_from_dict = AssetsPricesAdjustedPostRequestAssetsInner.from_dict(assets_prices_adjusted_post_request_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


