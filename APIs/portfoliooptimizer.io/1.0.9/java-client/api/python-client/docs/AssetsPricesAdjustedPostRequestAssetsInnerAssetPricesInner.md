# AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**close** | **float** | The unadjusted close price of the asset at the date t | 
**var_date** | **str** | The date corresponding to the date t in format YYYY-MM-DD | 

## Example

```python
from openapi_client.models.assets_prices_adjusted_post_request_assets_inner_asset_prices_inner import AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner from a JSON string
assets_prices_adjusted_post_request_assets_inner_asset_prices_inner_instance = AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner.from_json(json)
# print the JSON string representation of the object
print(AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner.to_json())

# convert the object into a dict
assets_prices_adjusted_post_request_assets_inner_asset_prices_inner_dict = assets_prices_adjusted_post_request_assets_inner_asset_prices_inner_instance.to_dict()
# create an instance of AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner from a dict
assets_prices_adjusted_post_request_assets_inner_asset_prices_inner_from_dict = AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner.from_dict(assets_prices_adjusted_post_request_assets_inner_asset_prices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


