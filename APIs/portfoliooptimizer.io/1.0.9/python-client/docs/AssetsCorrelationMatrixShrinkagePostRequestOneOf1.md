# AssetsCorrelationMatrixShrinkagePostRequestOneOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** |  | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**shrinkage_factor** | **float** |  | 
**target_correlation_matrix** | **List[List[float]]** | targetCorrelationMatrix[i][j] is the target correlation between the asset i and the asset j | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_shrinkage_post_request_one_of1 import AssetsCorrelationMatrixShrinkagePostRequestOneOf1

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixShrinkagePostRequestOneOf1 from a JSON string
assets_correlation_matrix_shrinkage_post_request_one_of1_instance = AssetsCorrelationMatrixShrinkagePostRequestOneOf1.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixShrinkagePostRequestOneOf1.to_json())

# convert the object into a dict
assets_correlation_matrix_shrinkage_post_request_one_of1_dict = assets_correlation_matrix_shrinkage_post_request_one_of1_instance.to_dict()
# create an instance of AssetsCorrelationMatrixShrinkagePostRequestOneOf1 from a dict
assets_correlation_matrix_shrinkage_post_request_one_of1_from_dict = AssetsCorrelationMatrixShrinkagePostRequestOneOf1.from_dict(assets_correlation_matrix_shrinkage_post_request_one_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


