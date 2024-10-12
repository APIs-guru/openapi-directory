# AssetsCorrelationMatrixBoundsPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets_correlation_matrix_lower_bounds** | **List[List[float]]** | assetsCorrelationMatrixLowerBounds[i][j] is the lower bound of the correlation between the asset i and the asset j | 
**assets_correlation_matrix_upper_bounds** | **List[List[float]]** | assetsCorrelationMatrixUpperBounds[i][j] is the upper bound of the correlation between the asset i and the asset j | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_bounds_post200_response import AssetsCorrelationMatrixBoundsPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixBoundsPost200Response from a JSON string
assets_correlation_matrix_bounds_post200_response_instance = AssetsCorrelationMatrixBoundsPost200Response.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixBoundsPost200Response.to_json())

# convert the object into a dict
assets_correlation_matrix_bounds_post200_response_dict = assets_correlation_matrix_bounds_post200_response_instance.to_dict()
# create an instance of AssetsCorrelationMatrixBoundsPost200Response from a dict
assets_correlation_matrix_bounds_post200_response_from_dict = AssetsCorrelationMatrixBoundsPost200Response.from_dict(assets_correlation_matrix_bounds_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


