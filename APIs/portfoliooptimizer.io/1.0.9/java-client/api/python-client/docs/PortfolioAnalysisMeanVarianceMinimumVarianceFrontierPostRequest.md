# PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 
**portfolios** | **int** | The number of portfolios to compute on the mean-variance minimum variance frontier | [optional] [default to 25]

## Example

```python
from openapi_client.models.portfolio_analysis_mean_variance_minimum_variance_frontier_post_request import PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest from a JSON string
portfolio_analysis_mean_variance_minimum_variance_frontier_post_request_instance = PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_mean_variance_minimum_variance_frontier_post_request_dict = portfolio_analysis_mean_variance_minimum_variance_frontier_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest from a dict
portfolio_analysis_mean_variance_minimum_variance_frontier_post_request_from_dict = PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest.from_dict(portfolio_analysis_mean_variance_minimum_variance_frontier_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


