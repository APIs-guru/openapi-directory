# PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolio_values** | **List[float]** | portfolioValues[t] is the value of the portfolio at the time t; all the portfolioValues arrays must have the same length, equal to the common length of the assetPrices arrays | 

## Example

```python
from openapi_client.models.portfolio_analysis_correlation_spectrum_post_request_one_of1_portfolios_inner import PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner from a JSON string
portfolio_analysis_correlation_spectrum_post_request_one_of1_portfolios_inner_instance = PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_correlation_spectrum_post_request_one_of1_portfolios_inner_dict = portfolio_analysis_correlation_spectrum_post_request_one_of1_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner from a dict
portfolio_analysis_correlation_spectrum_post_request_one_of1_portfolios_inner_from_dict = PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner.from_dict(portfolio_analysis_correlation_spectrum_post_request_one_of1_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


