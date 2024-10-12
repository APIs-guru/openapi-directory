# AssetsCorrelationMatrixShrinkagePostRequestOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** |  | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**shrinkage_factor** | **float** | The shrinkage factor | 
**target_equicorrelation_matrix** | **str** | The shrinkage target correlation matrix | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_shrinkage_post_request_one_of import AssetsCorrelationMatrixShrinkagePostRequestOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixShrinkagePostRequestOneOf from a JSON string
assets_correlation_matrix_shrinkage_post_request_one_of_instance = AssetsCorrelationMatrixShrinkagePostRequestOneOf.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixShrinkagePostRequestOneOf.to_json())

# convert the object into a dict
assets_correlation_matrix_shrinkage_post_request_one_of_dict = assets_correlation_matrix_shrinkage_post_request_one_of_instance.to_dict()
# create an instance of AssetsCorrelationMatrixShrinkagePostRequestOneOf from a dict
assets_correlation_matrix_shrinkage_post_request_one_of_from_dict = AssetsCorrelationMatrixShrinkagePostRequestOneOf.from_dict(assets_correlation_matrix_shrinkage_post_request_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


