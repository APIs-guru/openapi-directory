# AssetsCovarianceMatrixEffectiveRankPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 

## Example

```python
from openapi_client.models.assets_covariance_matrix_effective_rank_post_request import AssetsCovarianceMatrixEffectiveRankPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCovarianceMatrixEffectiveRankPostRequest from a JSON string
assets_covariance_matrix_effective_rank_post_request_instance = AssetsCovarianceMatrixEffectiveRankPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCovarianceMatrixEffectiveRankPostRequest.to_json())

# convert the object into a dict
assets_covariance_matrix_effective_rank_post_request_dict = assets_covariance_matrix_effective_rank_post_request_instance.to_dict()
# create an instance of AssetsCovarianceMatrixEffectiveRankPostRequest from a dict
assets_covariance_matrix_effective_rank_post_request_from_dict = AssetsCovarianceMatrixEffectiveRankPostRequest.from_dict(assets_covariance_matrix_effective_rank_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


