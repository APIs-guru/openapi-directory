# PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolio_returns** | **List[float]** | portfolioReturns[t] is the return of the portfolio at the time t, the portfolioReturns must have the same length as the benchmarkReturns array | 

## Example

```python
from openapi_client.models.portfolio_analysis_tracking_error_post_request_portfolios_inner import PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner from a JSON string
portfolio_analysis_tracking_error_post_request_portfolios_inner_instance = PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_tracking_error_post_request_portfolios_inner_dict = portfolio_analysis_tracking_error_post_request_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner from a dict
portfolio_analysis_tracking_error_post_request_portfolios_inner_from_dict = PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner.from_dict(portfolio_analysis_tracking_error_post_request_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


