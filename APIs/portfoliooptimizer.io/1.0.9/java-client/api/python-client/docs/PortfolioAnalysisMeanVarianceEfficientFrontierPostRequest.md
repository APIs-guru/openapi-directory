# PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 
**portfolios** | **int** | The number of portfolios to compute on the mean-variance efficient frontier | [optional] [default to 25]

## Example

```python
from openapi_client.models.portfolio_analysis_mean_variance_efficient_frontier_post_request import PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest from a JSON string
portfolio_analysis_mean_variance_efficient_frontier_post_request_instance = PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_mean_variance_efficient_frontier_post_request_dict = portfolio_analysis_mean_variance_efficient_frontier_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest from a dict
portfolio_analysis_mean_variance_efficient_frontier_post_request_from_dict = PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest.from_dict(portfolio_analysis_mean_variance_efficient_frontier_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


