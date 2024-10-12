# AssetsCorrelationMatrixNearestPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_approximate_correlation_matrix** | **List[List[float]]** | assetsApproximateCorrelationMatrix[i][i] is the approximate correlation between the asset i and the asset j | 
**assets_fixed_correlations** | **List[List[int]]** | assetsFixedCorrelations[k] is the couple of indices (i,j) of the assets i and j for which to keep the approximate correlation assetsApproximateCorrelationMatrix[i][j] fixed | [optional] 

## Example

```python
from openapi_client.models.assets_correlation_matrix_nearest_post_request import AssetsCorrelationMatrixNearestPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixNearestPostRequest from a JSON string
assets_correlation_matrix_nearest_post_request_instance = AssetsCorrelationMatrixNearestPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixNearestPostRequest.to_json())

# convert the object into a dict
assets_correlation_matrix_nearest_post_request_dict = assets_correlation_matrix_nearest_post_request_instance.to_dict()
# create an instance of AssetsCorrelationMatrixNearestPostRequest from a dict
assets_correlation_matrix_nearest_post_request_from_dict = AssetsCorrelationMatrixNearestPostRequest.from_dict(assets_correlation_matrix_nearest_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


