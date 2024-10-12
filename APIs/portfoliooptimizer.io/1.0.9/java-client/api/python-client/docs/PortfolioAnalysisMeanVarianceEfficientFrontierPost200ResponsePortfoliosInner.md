# PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets_weights** | **List[float]** | assetsWeights[i] is the weight of the asset i in the portfolio, in percentage | 
**portfolio_return** | **float** | The arithmetic return of the portfolio | 
**portfolio_volatility** | **float** | The volatility of the portfolio | 

## Example

```python
from openapi_client.models.portfolio_analysis_mean_variance_efficient_frontier_post200_response_portfolios_inner import PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner from a JSON string
portfolio_analysis_mean_variance_efficient_frontier_post200_response_portfolios_inner_instance = PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_mean_variance_efficient_frontier_post200_response_portfolios_inner_dict = portfolio_analysis_mean_variance_efficient_frontier_post200_response_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner from a dict
portfolio_analysis_mean_variance_efficient_frontier_post200_response_portfolios_inner_from_dict = PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner.from_dict(portfolio_analysis_mean_variance_efficient_frontier_post200_response_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


