# AssetsCorrelationMatrixPostRequestOneOfAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_returns** | **List[float]** | assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_post_request_one_of_assets_inner import AssetsCorrelationMatrixPostRequestOneOfAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixPostRequestOneOfAssetsInner from a JSON string
assets_correlation_matrix_post_request_one_of_assets_inner_instance = AssetsCorrelationMatrixPostRequestOneOfAssetsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixPostRequestOneOfAssetsInner.to_json())

# convert the object into a dict
assets_correlation_matrix_post_request_one_of_assets_inner_dict = assets_correlation_matrix_post_request_one_of_assets_inner_instance.to_dict()
# create an instance of AssetsCorrelationMatrixPostRequestOneOfAssetsInner from a dict
assets_correlation_matrix_post_request_one_of_assets_inner_from_dict = AssetsCorrelationMatrixPostRequestOneOfAssetsInner.from_dict(assets_correlation_matrix_post_request_one_of_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


