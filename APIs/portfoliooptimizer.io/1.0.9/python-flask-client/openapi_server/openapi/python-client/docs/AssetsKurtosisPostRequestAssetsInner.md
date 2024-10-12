# AssetsKurtosisPostRequestAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_returns** | **List[float]** | assetReturns[t] is the return of the asset at the time t | 

## Example

```python
from openapi_client.models.assets_kurtosis_post_request_assets_inner import AssetsKurtosisPostRequestAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsKurtosisPostRequestAssetsInner from a JSON string
assets_kurtosis_post_request_assets_inner_instance = AssetsKurtosisPostRequestAssetsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsKurtosisPostRequestAssetsInner.to_json())

# convert the object into a dict
assets_kurtosis_post_request_assets_inner_dict = assets_kurtosis_post_request_assets_inner_instance.to_dict()
# create an instance of AssetsKurtosisPostRequestAssetsInner from a dict
assets_kurtosis_post_request_assets_inner_from_dict = AssetsKurtosisPostRequestAssetsInner.from_dict(assets_kurtosis_post_request_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


