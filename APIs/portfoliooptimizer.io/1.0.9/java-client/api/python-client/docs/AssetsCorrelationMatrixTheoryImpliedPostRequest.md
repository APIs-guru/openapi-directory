# AssetsCorrelationMatrixTheoryImpliedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner]**](AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner.md) |  | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**clustering_method** | **str** | The hierarchical clustering method to use | [optional] [default to 'averageLinkage']

## Example

```python
from openapi_client.models.assets_correlation_matrix_theory_implied_post_request import AssetsCorrelationMatrixTheoryImpliedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixTheoryImpliedPostRequest from a JSON string
assets_correlation_matrix_theory_implied_post_request_instance = AssetsCorrelationMatrixTheoryImpliedPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixTheoryImpliedPostRequest.to_json())

# convert the object into a dict
assets_correlation_matrix_theory_implied_post_request_dict = assets_correlation_matrix_theory_implied_post_request_instance.to_dict()
# create an instance of AssetsCorrelationMatrixTheoryImpliedPostRequest from a dict
assets_correlation_matrix_theory_implied_post_request_from_dict = AssetsCorrelationMatrixTheoryImpliedPostRequest.from_dict(assets_correlation_matrix_theory_implied_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


