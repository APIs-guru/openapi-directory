# AssetsCorrelationMatrixValidationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_validation_post_request import AssetsCorrelationMatrixValidationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixValidationPostRequest from a JSON string
assets_correlation_matrix_validation_post_request_instance = AssetsCorrelationMatrixValidationPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixValidationPostRequest.to_json())

# convert the object into a dict
assets_correlation_matrix_validation_post_request_dict = assets_correlation_matrix_validation_post_request_instance.to_dict()
# create an instance of AssetsCorrelationMatrixValidationPostRequest from a dict
assets_correlation_matrix_validation_post_request_from_dict = AssetsCorrelationMatrixValidationPostRequest.from_dict(assets_correlation_matrix_validation_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


