# PortfolioAnalysisFactorsExposuresPostRequestFactorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**factor_returns** | **List[float]** | factorReturns[t] is the return of the factor at the time t; all the factorReturns arrays must have the same length, equal to the common length of the portfolioReturns arrays | 

## Example

```python
from openapi_client.models.portfolio_analysis_factors_exposures_post_request_factors_inner import PortfolioAnalysisFactorsExposuresPostRequestFactorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisFactorsExposuresPostRequestFactorsInner from a JSON string
portfolio_analysis_factors_exposures_post_request_factors_inner_instance = PortfolioAnalysisFactorsExposuresPostRequestFactorsInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisFactorsExposuresPostRequestFactorsInner.to_json())

# convert the object into a dict
portfolio_analysis_factors_exposures_post_request_factors_inner_dict = portfolio_analysis_factors_exposures_post_request_factors_inner_instance.to_dict()
# create an instance of PortfolioAnalysisFactorsExposuresPostRequestFactorsInner from a dict
portfolio_analysis_factors_exposures_post_request_factors_inner_from_dict = PortfolioAnalysisFactorsExposuresPostRequestFactorsInner.from_dict(portfolio_analysis_factors_exposures_post_request_factors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


