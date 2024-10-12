# AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** | The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date | 
**factor** | **float** | The split factor of the asset at the date t | 

## Example

```python
from openapi_client.models.assets_prices_adjusted_post_request_assets_inner_asset_splits_inner import AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner from a JSON string
assets_prices_adjusted_post_request_assets_inner_asset_splits_inner_instance = AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner.to_json())

# convert the object into a dict
assets_prices_adjusted_post_request_assets_inner_asset_splits_inner_dict = assets_prices_adjusted_post_request_assets_inner_asset_splits_inner_instance.to_dict()
# create an instance of AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner from a dict
assets_prices_adjusted_post_request_assets_inner_asset_splits_inner_from_dict = AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner.from_dict(assets_prices_adjusted_post_request_assets_inner_asset_splits_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


