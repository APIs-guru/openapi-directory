# AssetsReturnsLogarithmicPost200ResponseAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_returns** | **List[float]** | assetReturns[t] is the logarithmic return of the asset from the time t-1 to the time t, in percentage | 

## Example

```python
from openapi_client.models.assets_returns_logarithmic_post200_response_assets_inner import AssetsReturnsLogarithmicPost200ResponseAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsLogarithmicPost200ResponseAssetsInner from a JSON string
assets_returns_logarithmic_post200_response_assets_inner_instance = AssetsReturnsLogarithmicPost200ResponseAssetsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsLogarithmicPost200ResponseAssetsInner.to_json())

# convert the object into a dict
assets_returns_logarithmic_post200_response_assets_inner_dict = assets_returns_logarithmic_post200_response_assets_inner_instance.to_dict()
# create an instance of AssetsReturnsLogarithmicPost200ResponseAssetsInner from a dict
assets_returns_logarithmic_post200_response_assets_inner_from_dict = AssetsReturnsLogarithmicPost200ResponseAssetsInner.from_dict(assets_returns_logarithmic_post200_response_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


