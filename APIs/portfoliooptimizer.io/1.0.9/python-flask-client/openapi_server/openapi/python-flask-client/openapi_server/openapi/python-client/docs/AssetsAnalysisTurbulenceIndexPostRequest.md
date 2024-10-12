# AssetsAnalysisTurbulenceIndexPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_average_returns** | **List[float]** | assetsAverageReturns[i] is the average return of asset i over an historical reference period | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j over an historical reference period | 
**assets_returns** | **List[float]** | assetsReturns[i] is the return of asset i over a period different from the historical reference period | 

## Example

```python
from openapi_client.models.assets_analysis_turbulence_index_post_request import AssetsAnalysisTurbulenceIndexPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsAnalysisTurbulenceIndexPostRequest from a JSON string
assets_analysis_turbulence_index_post_request_instance = AssetsAnalysisTurbulenceIndexPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsAnalysisTurbulenceIndexPostRequest.to_json())

# convert the object into a dict
assets_analysis_turbulence_index_post_request_dict = assets_analysis_turbulence_index_post_request_instance.to_dict()
# create an instance of AssetsAnalysisTurbulenceIndexPostRequest from a dict
assets_analysis_turbulence_index_post_request_from_dict = AssetsAnalysisTurbulenceIndexPostRequest.from_dict(assets_analysis_turbulence_index_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


