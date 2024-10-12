# PortfolioOptimizationMeanVarianceEfficientPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**constraints** | [**PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints**](PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints.md) |  | 

## Example

```python
from openapi_client.models.portfolio_optimization_mean_variance_efficient_post_request import PortfolioOptimizationMeanVarianceEfficientPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMeanVarianceEfficientPostRequest from a JSON string
portfolio_optimization_mean_variance_efficient_post_request_instance = PortfolioOptimizationMeanVarianceEfficientPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMeanVarianceEfficientPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_mean_variance_efficient_post_request_dict = portfolio_optimization_mean_variance_efficient_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMeanVarianceEfficientPostRequest from a dict
portfolio_optimization_mean_variance_efficient_post_request_from_dict = PortfolioOptimizationMeanVarianceEfficientPostRequest.from_dict(portfolio_optimization_mean_variance_efficient_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


