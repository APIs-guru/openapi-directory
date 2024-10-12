# PortfolioOptimizationMinimumUlcerIndexPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsReturnsPostRequestAssetsInner]**](AssetsReturnsPostRequestAssetsInner.md) |  | 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_optimization_minimum_ulcer_index_post_request import PortfolioOptimizationMinimumUlcerIndexPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMinimumUlcerIndexPostRequest from a JSON string
portfolio_optimization_minimum_ulcer_index_post_request_instance = PortfolioOptimizationMinimumUlcerIndexPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMinimumUlcerIndexPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_minimum_ulcer_index_post_request_dict = portfolio_optimization_minimum_ulcer_index_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMinimumUlcerIndexPostRequest from a dict
portfolio_optimization_minimum_ulcer_index_post_request_from_dict = PortfolioOptimizationMinimumUlcerIndexPostRequest.from_dict(portfolio_optimization_minimum_ulcer_index_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


