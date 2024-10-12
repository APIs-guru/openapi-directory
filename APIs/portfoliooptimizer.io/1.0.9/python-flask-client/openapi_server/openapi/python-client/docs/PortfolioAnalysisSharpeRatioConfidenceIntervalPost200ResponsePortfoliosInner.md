# PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolio_sharpe_ratio_confidence_interval** | **List[float]** | portfolioSharpeRatioConfidenceInterval[0] (resp. portfolioSharpeRatioConfidenceInterval[1]) is the lower (resp. upper) bound of the built confidence interval, possibly equal to null in case of a negative infinite (resp. positive infinite) bound | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_confidence_interval_post200_response_portfolios_inner import PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner from a JSON string
portfolio_analysis_sharpe_ratio_confidence_interval_post200_response_portfolios_inner_instance = PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_confidence_interval_post200_response_portfolios_inner_dict = portfolio_analysis_sharpe_ratio_confidence_interval_post200_response_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner from a dict
portfolio_analysis_sharpe_ratio_confidence_interval_post200_response_portfolios_inner_from_dict = PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner.from_dict(portfolio_analysis_sharpe_ratio_confidence_interval_post200_response_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


