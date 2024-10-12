# AssetsCorrelationMatrixBoundsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** |  | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**assets_group** | **List[int]** | assetsGroup[k] is the indexes of the assets belonging to the assets group k | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_bounds_post_request import AssetsCorrelationMatrixBoundsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixBoundsPostRequest from a JSON string
assets_correlation_matrix_bounds_post_request_instance = AssetsCorrelationMatrixBoundsPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixBoundsPostRequest.to_json())

# convert the object into a dict
assets_correlation_matrix_bounds_post_request_dict = assets_correlation_matrix_bounds_post_request_instance.to_dict()
# create an instance of AssetsCorrelationMatrixBoundsPostRequest from a dict
assets_correlation_matrix_bounds_post_request_from_dict = AssetsCorrelationMatrixBoundsPostRequest.from_dict(assets_correlation_matrix_bounds_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


