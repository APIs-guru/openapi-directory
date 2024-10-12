# AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eigenvectors_retained** | **int** | The number of eigenvectors to retain in the numerator of the absorption ratio, which must be lower than the number of assets; defaults to [1/5-th] the number of assets | [optional] 

## Example

```python
from openapi_client.models.assets_analysis_absorption_ratio_post_request_assets_covariance_matrix_eigenvectors import AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors from a JSON string
assets_analysis_absorption_ratio_post_request_assets_covariance_matrix_eigenvectors_instance = AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors.from_json(json)
# print the JSON string representation of the object
print(AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors.to_json())

# convert the object into a dict
assets_analysis_absorption_ratio_post_request_assets_covariance_matrix_eigenvectors_dict = assets_analysis_absorption_ratio_post_request_assets_covariance_matrix_eigenvectors_instance.to_dict()
# create an instance of AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors from a dict
assets_analysis_absorption_ratio_post_request_assets_covariance_matrix_eigenvectors_from_dict = AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors.from_dict(assets_analysis_absorption_ratio_post_request_assets_covariance_matrix_eigenvectors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


