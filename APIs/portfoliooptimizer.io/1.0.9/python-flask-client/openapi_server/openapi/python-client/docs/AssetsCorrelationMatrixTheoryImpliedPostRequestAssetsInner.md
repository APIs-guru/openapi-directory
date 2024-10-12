# AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_hierarchical_classification** | [**List[AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner]**](AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner.md) | assetHierarchicalClassification[i] is the i+1-th level of the hierarchical classification of the asset, from the most generic classification to the most specific classification; all the assetHierarchicalClassification arrays must have the same length | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_theory_implied_post_request_assets_inner import AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner from a JSON string
assets_correlation_matrix_theory_implied_post_request_assets_inner_instance = AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner.to_json())

# convert the object into a dict
assets_correlation_matrix_theory_implied_post_request_assets_inner_dict = assets_correlation_matrix_theory_implied_post_request_assets_inner_instance.to_dict()
# create an instance of AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner from a dict
assets_correlation_matrix_theory_implied_post_request_assets_inner_from_dict = AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner.from_dict(assets_correlation_matrix_theory_implied_post_request_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


