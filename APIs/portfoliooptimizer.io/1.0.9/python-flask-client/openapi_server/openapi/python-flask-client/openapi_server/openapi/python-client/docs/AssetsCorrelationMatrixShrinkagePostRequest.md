# AssetsCorrelationMatrixShrinkagePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** |  | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**shrinkage_factor** | **float** |  | 
**target_equicorrelation_matrix** | **str** | The shrinkage target correlation matrix | 
**target_correlation_matrix** | **List[List[float]]** | targetCorrelationMatrix[i][j] is the target correlation between the asset i and the asset j | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_shrinkage_post_request import AssetsCorrelationMatrixShrinkagePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixShrinkagePostRequest from a JSON string
assets_correlation_matrix_shrinkage_post_request_instance = AssetsCorrelationMatrixShrinkagePostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixShrinkagePostRequest.to_json())

# convert the object into a dict
assets_correlation_matrix_shrinkage_post_request_dict = assets_correlation_matrix_shrinkage_post_request_instance.to_dict()
# create an instance of AssetsCorrelationMatrixShrinkagePostRequest from a dict
assets_correlation_matrix_shrinkage_post_request_from_dict = AssetsCorrelationMatrixShrinkagePostRequest.from_dict(assets_correlation_matrix_shrinkage_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


