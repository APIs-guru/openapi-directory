# PortfolioOptimizationMaximumDecorrelationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | [optional] 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_optimization_maximum_decorrelation_post_request import PortfolioOptimizationMaximumDecorrelationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMaximumDecorrelationPostRequest from a JSON string
portfolio_optimization_maximum_decorrelation_post_request_instance = PortfolioOptimizationMaximumDecorrelationPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMaximumDecorrelationPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_maximum_decorrelation_post_request_dict = portfolio_optimization_maximum_decorrelation_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMaximumDecorrelationPostRequest from a dict
portfolio_optimization_maximum_decorrelation_post_request_from_dict = PortfolioOptimizationMaximumDecorrelationPostRequest.from_dict(portfolio_optimization_maximum_decorrelation_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


