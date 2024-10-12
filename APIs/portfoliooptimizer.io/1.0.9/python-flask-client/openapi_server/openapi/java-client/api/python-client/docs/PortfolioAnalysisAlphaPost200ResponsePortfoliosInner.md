# PortfolioAnalysisAlphaPost200ResponsePortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolio_alpha** | **float** | The portfolio Jensen&#39;s alpha, which correponds to the portfolio excess return adjusted for the systematic risk in the Capital Asset Pricing Model (CAPM) | 

## Example

```python
from openapi_client.models.portfolio_analysis_alpha_post200_response_portfolios_inner import PortfolioAnalysisAlphaPost200ResponsePortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisAlphaPost200ResponsePortfoliosInner from a JSON string
portfolio_analysis_alpha_post200_response_portfolios_inner_instance = PortfolioAnalysisAlphaPost200ResponsePortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisAlphaPost200ResponsePortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_alpha_post200_response_portfolios_inner_dict = portfolio_analysis_alpha_post200_response_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisAlphaPost200ResponsePortfoliosInner from a dict
portfolio_analysis_alpha_post200_response_portfolios_inner_from_dict = PortfolioAnalysisAlphaPost200ResponsePortfoliosInner.from_dict(portfolio_analysis_alpha_post200_response_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


