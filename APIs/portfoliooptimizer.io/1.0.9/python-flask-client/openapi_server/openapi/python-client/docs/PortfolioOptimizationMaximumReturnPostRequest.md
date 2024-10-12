# PortfolioOptimizationMaximumReturnPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | [optional] 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_optimization_maximum_return_post_request import PortfolioOptimizationMaximumReturnPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMaximumReturnPostRequest from a JSON string
portfolio_optimization_maximum_return_post_request_instance = PortfolioOptimizationMaximumReturnPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMaximumReturnPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_maximum_return_post_request_dict = portfolio_optimization_maximum_return_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMaximumReturnPostRequest from a dict
portfolio_optimization_maximum_return_post_request_from_dict = PortfolioOptimizationMaximumReturnPostRequest.from_dict(portfolio_optimization_maximum_return_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


