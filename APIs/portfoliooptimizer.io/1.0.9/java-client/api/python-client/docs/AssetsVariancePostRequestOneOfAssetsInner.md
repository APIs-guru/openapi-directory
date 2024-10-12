# AssetsVariancePostRequestOneOfAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_returns** | **List[float]** | assetReturns[t] is the return of the asset at the time t | 

## Example

```python
from openapi_client.models.assets_variance_post_request_one_of_assets_inner import AssetsVariancePostRequestOneOfAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsVariancePostRequestOneOfAssetsInner from a JSON string
assets_variance_post_request_one_of_assets_inner_instance = AssetsVariancePostRequestOneOfAssetsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsVariancePostRequestOneOfAssetsInner.to_json())

# convert the object into a dict
assets_variance_post_request_one_of_assets_inner_dict = assets_variance_post_request_one_of_assets_inner_instance.to_dict()
# create an instance of AssetsVariancePostRequestOneOfAssetsInner from a dict
assets_variance_post_request_one_of_assets_inner_from_dict = AssetsVariancePostRequestOneOfAssetsInner.from_dict(assets_variance_post_request_one_of_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


