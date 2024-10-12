# AssetsCovarianceMatrixExponentiallyWeightedPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the sample covariance between the asset i returns and the asset j returns | 

## Example

```python
from openapi_client.models.assets_covariance_matrix_exponentially_weighted_post200_response import AssetsCovarianceMatrixExponentiallyWeightedPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCovarianceMatrixExponentiallyWeightedPost200Response from a JSON string
assets_covariance_matrix_exponentially_weighted_post200_response_instance = AssetsCovarianceMatrixExponentiallyWeightedPost200Response.from_json(json)
# print the JSON string representation of the object
print(AssetsCovarianceMatrixExponentiallyWeightedPost200Response.to_json())

# convert the object into a dict
assets_covariance_matrix_exponentially_weighted_post200_response_dict = assets_covariance_matrix_exponentially_weighted_post200_response_instance.to_dict()
# create an instance of AssetsCovarianceMatrixExponentiallyWeightedPost200Response from a dict
assets_covariance_matrix_exponentially_weighted_post200_response_from_dict = AssetsCovarianceMatrixExponentiallyWeightedPost200Response.from_dict(assets_covariance_matrix_exponentially_weighted_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


