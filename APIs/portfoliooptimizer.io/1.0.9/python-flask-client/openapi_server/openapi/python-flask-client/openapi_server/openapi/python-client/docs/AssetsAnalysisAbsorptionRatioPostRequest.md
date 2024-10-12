# AssetsAnalysisAbsorptionRatioPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assets_covariance_matrix_eigenvectors** | [**AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors**](AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors.md) |  | [optional] 

## Example

```python
from openapi_client.models.assets_analysis_absorption_ratio_post_request import AssetsAnalysisAbsorptionRatioPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsAnalysisAbsorptionRatioPostRequest from a JSON string
assets_analysis_absorption_ratio_post_request_instance = AssetsAnalysisAbsorptionRatioPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsAnalysisAbsorptionRatioPostRequest.to_json())

# convert the object into a dict
assets_analysis_absorption_ratio_post_request_dict = assets_analysis_absorption_ratio_post_request_instance.to_dict()
# create an instance of AssetsAnalysisAbsorptionRatioPostRequest from a dict
assets_analysis_absorption_ratio_post_request_from_dict = AssetsAnalysisAbsorptionRatioPostRequest.from_dict(assets_analysis_absorption_ratio_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


