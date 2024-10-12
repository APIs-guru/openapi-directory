# AssetsCovarianceMatrixPostRequestOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**assets_variances** | **List[float]** | assetsVariances[i] is the variance of the asset i | 

## Example

```python
from openapi_client.models.assets_covariance_matrix_post_request_one_of import AssetsCovarianceMatrixPostRequestOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCovarianceMatrixPostRequestOneOf from a JSON string
assets_covariance_matrix_post_request_one_of_instance = AssetsCovarianceMatrixPostRequestOneOf.from_json(json)
# print the JSON string representation of the object
print(AssetsCovarianceMatrixPostRequestOneOf.to_json())

# convert the object into a dict
assets_covariance_matrix_post_request_one_of_dict = assets_covariance_matrix_post_request_one_of_instance.to_dict()
# create an instance of AssetsCovarianceMatrixPostRequestOneOf from a dict
assets_covariance_matrix_post_request_one_of_from_dict = AssetsCovarianceMatrixPostRequestOneOf.from_dict(assets_covariance_matrix_post_request_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


