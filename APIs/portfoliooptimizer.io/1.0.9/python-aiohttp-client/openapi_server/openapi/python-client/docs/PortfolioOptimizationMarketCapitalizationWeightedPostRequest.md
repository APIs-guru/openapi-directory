# PortfolioOptimizationMarketCapitalizationWeightedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_market_capitalizations** | **List[float]** | assetsMarketCapitalizations[i] is the market capitalization of the asset i | 

## Example

```python
from openapi_client.models.portfolio_optimization_market_capitalization_weighted_post_request import PortfolioOptimizationMarketCapitalizationWeightedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMarketCapitalizationWeightedPostRequest from a JSON string
portfolio_optimization_market_capitalization_weighted_post_request_instance = PortfolioOptimizationMarketCapitalizationWeightedPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMarketCapitalizationWeightedPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_market_capitalization_weighted_post_request_dict = portfolio_optimization_market_capitalization_weighted_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMarketCapitalizationWeightedPostRequest from a dict
portfolio_optimization_market_capitalization_weighted_post_request_from_dict = PortfolioOptimizationMarketCapitalizationWeightedPostRequest.from_dict(portfolio_optimization_market_capitalization_weighted_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


