# PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 
**risk_free_rate** | **float** | The risk free rate | 
**subset_portfolios** | **int** | The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling | [optional] [default to 128]
**subset_portfolios_aggregation_method** | **str** | The method to aggregate the subset portfolios | [optional] [default to 'average']
**subset_portfolios_enumeration_method** | **str** | The method to enumerate the subset portfolios | [optional] [default to 'randomSampling']
**subset_size** | **int** | The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets | [optional] 

## Example

```python
from openapi_client.models.portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request import PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest from a JSON string
portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request_instance = PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request_dict = portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest from a dict
portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request_from_dict = PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.from_dict(portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


