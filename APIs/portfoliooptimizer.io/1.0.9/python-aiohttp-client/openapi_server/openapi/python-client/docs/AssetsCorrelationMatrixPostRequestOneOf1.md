# AssetsCorrelationMatrixPostRequestOneOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_post_request_one_of1 import AssetsCorrelationMatrixPostRequestOneOf1

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixPostRequestOneOf1 from a JSON string
assets_correlation_matrix_post_request_one_of1_instance = AssetsCorrelationMatrixPostRequestOneOf1.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixPostRequestOneOf1.to_json())

# convert the object into a dict
assets_correlation_matrix_post_request_one_of1_dict = assets_correlation_matrix_post_request_one_of1_instance.to_dict()
# create an instance of AssetsCorrelationMatrixPostRequestOneOf1 from a dict
assets_correlation_matrix_post_request_one_of1_from_dict = AssetsCorrelationMatrixPostRequestOneOf1.from_dict(assets_correlation_matrix_post_request_one_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


