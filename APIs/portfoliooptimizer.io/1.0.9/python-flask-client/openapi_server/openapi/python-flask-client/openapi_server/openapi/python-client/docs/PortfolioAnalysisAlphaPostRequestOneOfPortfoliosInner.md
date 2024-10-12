# PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolio_returns** | **List[float]** | portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array | 

## Example

```python
from openapi_client.models.portfolio_analysis_alpha_post_request_one_of_portfolios_inner import PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner from a JSON string
portfolio_analysis_alpha_post_request_one_of_portfolios_inner_instance = PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_alpha_post_request_one_of_portfolios_inner_dict = portfolio_analysis_alpha_post_request_one_of_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner from a dict
portfolio_analysis_alpha_post_request_one_of_portfolios_inner_from_dict = PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner.from_dict(portfolio_analysis_alpha_post_request_one_of_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


