# AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The dividend amount distributed by the asset at the date t | 
**var_date** | **str** | The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date | 

## Example

```python
from openapi_client.models.assets_prices_adjusted_post_request_assets_inner_asset_dividends_inner import AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner from a JSON string
assets_prices_adjusted_post_request_assets_inner_asset_dividends_inner_instance = AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner.to_json())

# convert the object into a dict
assets_prices_adjusted_post_request_assets_inner_asset_dividends_inner_dict = assets_prices_adjusted_post_request_assets_inner_asset_dividends_inner_instance.to_dict()
# create an instance of AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner from a dict
assets_prices_adjusted_post_request_assets_inner_asset_dividends_inner_from_dict = AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner.from_dict(assets_prices_adjusted_post_request_assets_inner_asset_dividends_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


