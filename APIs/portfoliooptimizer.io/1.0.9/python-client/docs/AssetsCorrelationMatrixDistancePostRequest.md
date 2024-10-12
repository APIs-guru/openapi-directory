# AssetsCorrelationMatrixDistancePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** |  | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**distance_metric** | **str** | The distance metric to use to compute the distance between the asset correlation matrix and the reference correlation matrix | [optional] [default to 'euclidean']
**reference_correlation_matrix** | **List[List[float]]** | referenceCorrelationMatrix[i][j] is the reference correlation between the asset i and the asset j | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_distance_post_request import AssetsCorrelationMatrixDistancePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixDistancePostRequest from a JSON string
assets_correlation_matrix_distance_post_request_instance = AssetsCorrelationMatrixDistancePostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixDistancePostRequest.to_json())

# convert the object into a dict
assets_correlation_matrix_distance_post_request_dict = assets_correlation_matrix_distance_post_request_instance.to_dict()
# create an instance of AssetsCorrelationMatrixDistancePostRequest from a dict
assets_correlation_matrix_distance_post_request_from_dict = AssetsCorrelationMatrixDistancePostRequest.from_dict(assets_correlation_matrix_distance_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


