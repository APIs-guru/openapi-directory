# PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolio_drawdowns** | **List[float]** | portfolioDrawdowns[t] is the value of the drawdown function at the time t | 
**portfolio_worst_drawdowns** | [**List[PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner]**](PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_drawdowns_post200_response_portfolios_inner import PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner from a JSON string
portfolio_analysis_drawdowns_post200_response_portfolios_inner_instance = PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_drawdowns_post200_response_portfolios_inner_dict = portfolio_analysis_drawdowns_post200_response_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner from a dict
portfolio_analysis_drawdowns_post200_response_portfolios_inner_from_dict = PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.from_dict(portfolio_analysis_drawdowns_post200_response_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


