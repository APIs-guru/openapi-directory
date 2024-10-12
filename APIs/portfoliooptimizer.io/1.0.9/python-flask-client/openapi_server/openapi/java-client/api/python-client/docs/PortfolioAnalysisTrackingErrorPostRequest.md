# PortfolioAnalysisTrackingErrorPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_returns** | **List[float]** | benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays | 
**portfolios** | [**List[PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner]**](PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_tracking_error_post_request import PortfolioAnalysisTrackingErrorPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisTrackingErrorPostRequest from a JSON string
portfolio_analysis_tracking_error_post_request_instance = PortfolioAnalysisTrackingErrorPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisTrackingErrorPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_tracking_error_post_request_dict = portfolio_analysis_tracking_error_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisTrackingErrorPostRequest from a dict
portfolio_analysis_tracking_error_post_request_from_dict = PortfolioAnalysisTrackingErrorPostRequest.from_dict(portfolio_analysis_tracking_error_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


