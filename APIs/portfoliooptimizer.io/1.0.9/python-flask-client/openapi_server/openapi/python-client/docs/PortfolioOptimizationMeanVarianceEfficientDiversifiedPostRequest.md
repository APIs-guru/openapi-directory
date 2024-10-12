# PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**constraints** | [**PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints**](PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints.md) |  | 

## Example

```python
from openapi_client.models.portfolio_optimization_mean_variance_efficient_diversified_post_request import PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest from a JSON string
portfolio_optimization_mean_variance_efficient_diversified_post_request_instance = PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_mean_variance_efficient_diversified_post_request_dict = portfolio_optimization_mean_variance_efficient_diversified_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest from a dict
portfolio_optimization_mean_variance_efficient_diversified_post_request_from_dict = PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest.from_dict(portfolio_optimization_mean_variance_efficient_diversified_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


