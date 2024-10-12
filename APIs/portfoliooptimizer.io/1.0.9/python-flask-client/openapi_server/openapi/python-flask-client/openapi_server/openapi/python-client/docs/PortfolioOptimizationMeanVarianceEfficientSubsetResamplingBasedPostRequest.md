# PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**constraints** | [**PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints**](PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints.md) |  | 
**subset_portfolios** | **int** | The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling | [optional] [default to 128]
**subset_portfolios_aggregation_method** | **str** | The method to aggregate the subset portfolios | [optional] [default to 'average']
**subset_portfolios_enumeration_method** | **str** | The method to enumerate the subset portfolios | [optional] [default to 'randomSampling']
**subset_size** | **int** | The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets | [optional] 

## Example

```python
from openapi_client.models.portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request import PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest from a JSON string
portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request_instance = PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request_dict = portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest from a dict
portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request_from_dict = PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest.from_dict(portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


