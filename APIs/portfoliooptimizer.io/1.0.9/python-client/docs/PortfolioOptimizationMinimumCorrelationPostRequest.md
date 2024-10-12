# PortfolioOptimizationMinimumCorrelationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** |  | 
**assets_correlation_matrix** | **List[List[float]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; required if assetsReturns is not provided | 
**assets_volatilities** | **List[float]** | assetsVariances[i] is the volatility of the asset i; required if assetsCorrelationMatrix is provided and assetsVariances is not provided | 

## Example

```python
from openapi_client.models.portfolio_optimization_minimum_correlation_post_request import PortfolioOptimizationMinimumCorrelationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMinimumCorrelationPostRequest from a JSON string
portfolio_optimization_minimum_correlation_post_request_instance = PortfolioOptimizationMinimumCorrelationPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMinimumCorrelationPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_minimum_correlation_post_request_dict = portfolio_optimization_minimum_correlation_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMinimumCorrelationPostRequest from a dict
portfolio_optimization_minimum_correlation_post_request_from_dict = PortfolioOptimizationMinimumCorrelationPostRequest.from_dict(portfolio_optimization_minimum_correlation_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


