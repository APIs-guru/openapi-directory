# PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolio_alpha** | **float** | The portfolio alpha, which correponds to the portion of the portfolio returns that cannot be explained by the portfolio factor exposures | 
**portfolio_betas** | **List[float]** | The portfolio betas, which correspond to the portfolio factor exposures | 
**portfolio_r_squared** | **float** | The portfolio R^2, which indicates how much of the variability in the portfolio returns can be explained by the portfolio factor exposures; generally, the higher the R^2 the better the portfolio factor exposures explain the portfolio returns | 

## Example

```python
from openapi_client.models.portfolio_analysis_factors_exposures_post200_response_portfolios_inner import PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner from a JSON string
portfolio_analysis_factors_exposures_post200_response_portfolios_inner_instance = PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_factors_exposures_post200_response_portfolios_inner_dict = portfolio_analysis_factors_exposures_post200_response_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner from a dict
portfolio_analysis_factors_exposures_post200_response_portfolios_inner_from_dict = PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner.from_dict(portfolio_analysis_factors_exposures_post200_response_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


