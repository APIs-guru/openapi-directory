# PortfolioAnalysisAlphaPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_returns** | **List[float]** | benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays | 
**portfolios** | [**List[PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner]**](PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate, assumed to be constant for any time t | [optional] 
**risk_free_returns** | **List[float]** | riskFreeReturns[t] is the risk free return at the time t; the riskFreeReturns array must have the same length as all the portfolioReturns arrays | [optional] 

## Example

```python
from openapi_client.models.portfolio_analysis_alpha_post_request import PortfolioAnalysisAlphaPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisAlphaPostRequest from a JSON string
portfolio_analysis_alpha_post_request_instance = PortfolioAnalysisAlphaPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisAlphaPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_alpha_post_request_dict = portfolio_analysis_alpha_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisAlphaPostRequest from a dict
portfolio_analysis_alpha_post_request_from_dict = PortfolioAnalysisAlphaPostRequest.from_dict(portfolio_analysis_alpha_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


