# AssetsReturnsPostRequestAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_prices** | **List[float]** | assetPrices[t] is the price of the asset at the time t | 

## Example

```python
from openapi_client.models.assets_returns_post_request_assets_inner import AssetsReturnsPostRequestAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsPostRequestAssetsInner from a JSON string
assets_returns_post_request_assets_inner_instance = AssetsReturnsPostRequestAssetsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsPostRequestAssetsInner.to_json())

# convert the object into a dict
assets_returns_post_request_assets_inner_dict = assets_returns_post_request_assets_inner_instance.to_dict()
# create an instance of AssetsReturnsPostRequestAssetsInner from a dict
assets_returns_post_request_assets_inner_from_dict = AssetsReturnsPostRequestAssetsInner.from_dict(assets_returns_post_request_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


