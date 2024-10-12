# AssetsCorrelationMatrixDenoisedPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; assetsCorrelationMatrix is possibly null in case the denoising method did not manage to denoise the provided asset correlation matrix | 

## Example

```python
from openapi_client.models.assets_correlation_matrix_denoised_post200_response import AssetsCorrelationMatrixDenoisedPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixDenoisedPost200Response from a JSON string
assets_correlation_matrix_denoised_post200_response_instance = AssetsCorrelationMatrixDenoisedPost200Response.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixDenoisedPost200Response.to_json())

# convert the object into a dict
assets_correlation_matrix_denoised_post200_response_dict = assets_correlation_matrix_denoised_post200_response_instance.to_dict()
# create an instance of AssetsCorrelationMatrixDenoisedPost200Response from a dict
assets_correlation_matrix_denoised_post200_response_from_dict = AssetsCorrelationMatrixDenoisedPost200Response.from_dict(assets_correlation_matrix_denoised_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


