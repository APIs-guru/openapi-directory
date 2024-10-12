# PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsReturnsPostRequestAssetsInner]**](AssetsReturnsPostRequestAssetsInner.md) |  | 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 
**risk_free_rate** | **float** | The risk free rate | 

## Example

```python
from openapi_client.models.portfolio_optimization_maximum_ulcer_performance_index_post_request import PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest from a JSON string
portfolio_optimization_maximum_ulcer_performance_index_post_request_instance = PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_maximum_ulcer_performance_index_post_request_dict = portfolio_optimization_maximum_ulcer_performance_index_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest from a dict
portfolio_optimization_maximum_ulcer_performance_index_post_request_from_dict = PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest.from_dict(portfolio_optimization_maximum_ulcer_performance_index_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


