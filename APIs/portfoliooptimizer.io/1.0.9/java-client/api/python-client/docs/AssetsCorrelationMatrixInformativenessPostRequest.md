# AssetsCorrelationMatrixInformativenessPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** |  | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**distance_metric** | **str** | The distance metric to use to compute the informativeness of the asset correlation matrix | [optional] [default to 'euclidean']

## Example

```python
from openapi_client.models.assets_correlation_matrix_informativeness_post_request import AssetsCorrelationMatrixInformativenessPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixInformativenessPostRequest from a JSON string
assets_correlation_matrix_informativeness_post_request_instance = AssetsCorrelationMatrixInformativenessPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixInformativenessPostRequest.to_json())

# convert the object into a dict
assets_correlation_matrix_informativeness_post_request_dict = assets_correlation_matrix_informativeness_post_request_instance.to_dict()
# create an instance of AssetsCorrelationMatrixInformativenessPostRequest from a dict
assets_correlation_matrix_informativeness_post_request_from_dict = AssetsCorrelationMatrixInformativenessPostRequest.from_dict(assets_correlation_matrix_informativeness_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


