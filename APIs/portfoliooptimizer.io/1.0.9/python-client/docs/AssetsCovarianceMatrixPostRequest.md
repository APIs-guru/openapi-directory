# AssetsCovarianceMatrixPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**assets_variances** | **List[float]** | assetsVariances[i] is the variance of the asset i | 
**assets_volatilities** | **List[float]** | assetsVolatilities[i] is the volatility of the asset i | 

## Example

```python
from openapi_client.models.assets_covariance_matrix_post_request import AssetsCovarianceMatrixPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCovarianceMatrixPostRequest from a JSON string
assets_covariance_matrix_post_request_instance = AssetsCovarianceMatrixPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCovarianceMatrixPostRequest.to_json())

# convert the object into a dict
assets_covariance_matrix_post_request_dict = assets_covariance_matrix_post_request_instance.to_dict()
# create an instance of AssetsCovarianceMatrixPostRequest from a dict
assets_covariance_matrix_post_request_from_dict = AssetsCovarianceMatrixPostRequest.from_dict(assets_covariance_matrix_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


