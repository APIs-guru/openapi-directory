# AssetsPricesAdjustedPost200ResponseAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_adjusted_prices** | [**List[AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner]**](AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.md) | assetAdjustedPrices[t] contains adjusted price information for the asset at the date t | 

## Example

```python
from openapi_client.models.assets_prices_adjusted_post200_response_assets_inner import AssetsPricesAdjustedPost200ResponseAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsPricesAdjustedPost200ResponseAssetsInner from a JSON string
assets_prices_adjusted_post200_response_assets_inner_instance = AssetsPricesAdjustedPost200ResponseAssetsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsPricesAdjustedPost200ResponseAssetsInner.to_json())

# convert the object into a dict
assets_prices_adjusted_post200_response_assets_inner_dict = assets_prices_adjusted_post200_response_assets_inner_instance.to_dict()
# create an instance of AssetsPricesAdjustedPost200ResponseAssetsInner from a dict
assets_prices_adjusted_post200_response_assets_inner_from_dict = AssetsPricesAdjustedPost200ResponseAssetsInner.from_dict(assets_prices_adjusted_post200_response_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


