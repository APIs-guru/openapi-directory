# PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolio_returns** | **List[float]** | portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the common length of the factorReturns arrays | 

## Example

```python
from openapi_client.models.portfolio_analysis_factors_exposures_post_request_portfolios_inner import PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner from a JSON string
portfolio_analysis_factors_exposures_post_request_portfolios_inner_instance = PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_factors_exposures_post_request_portfolios_inner_dict = portfolio_analysis_factors_exposures_post_request_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner from a dict
portfolio_analysis_factors_exposures_post_request_portfolios_inner_from_dict = PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner.from_dict(portfolio_analysis_factors_exposures_post_request_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


