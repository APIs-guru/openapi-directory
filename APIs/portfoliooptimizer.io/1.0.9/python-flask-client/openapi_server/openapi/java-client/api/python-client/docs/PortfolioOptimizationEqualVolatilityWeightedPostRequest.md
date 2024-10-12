# PortfolioOptimizationEqualVolatilityWeightedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_volatilities** | **List[float]** | assetsVolatilities[i] is the volatility of the asset i | 

## Example

```python
from openapi_client.models.portfolio_optimization_equal_volatility_weighted_post_request import PortfolioOptimizationEqualVolatilityWeightedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationEqualVolatilityWeightedPostRequest from a JSON string
portfolio_optimization_equal_volatility_weighted_post_request_instance = PortfolioOptimizationEqualVolatilityWeightedPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationEqualVolatilityWeightedPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_equal_volatility_weighted_post_request_dict = portfolio_optimization_equal_volatility_weighted_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationEqualVolatilityWeightedPostRequest from a dict
portfolio_optimization_equal_volatility_weighted_post_request_from_dict = PortfolioOptimizationEqualVolatilityWeightedPostRequest.from_dict(portfolio_optimization_equal_volatility_weighted_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


