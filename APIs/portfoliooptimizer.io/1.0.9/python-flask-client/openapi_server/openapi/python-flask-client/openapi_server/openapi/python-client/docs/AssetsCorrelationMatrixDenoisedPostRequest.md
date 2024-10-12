# AssetsCorrelationMatrixDenoisedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** |  | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**assets_correlation_matrix_aspect_ratio** | **float** | The aspect ratio of the asset correlation matrix, defined as the number of assets divided by the number of asset returns per asset used to compute the asset correlation matrix | 
**denoising_method** | **str** | The method used to denoise the asset correlation matrix | [optional] [default to 'eigenvaluesClipping']

## Example

```python
from openapi_client.models.assets_correlation_matrix_denoised_post_request import AssetsCorrelationMatrixDenoisedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCorrelationMatrixDenoisedPostRequest from a JSON string
assets_correlation_matrix_denoised_post_request_instance = AssetsCorrelationMatrixDenoisedPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCorrelationMatrixDenoisedPostRequest.to_json())

# convert the object into a dict
assets_correlation_matrix_denoised_post_request_dict = assets_correlation_matrix_denoised_post_request_instance.to_dict()
# create an instance of AssetsCorrelationMatrixDenoisedPostRequest from a dict
assets_correlation_matrix_denoised_post_request_from_dict = AssetsCorrelationMatrixDenoisedPostRequest.from_dict(assets_correlation_matrix_denoised_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


