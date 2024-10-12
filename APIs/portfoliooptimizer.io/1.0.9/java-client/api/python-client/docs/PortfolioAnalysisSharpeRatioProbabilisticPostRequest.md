# PortfolioAnalysisSharpeRatioProbabilisticPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_sharpe_ratio** | **float** | The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values | 
**portfolios** | [**List[PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner]**](PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate | 
**benchmark_values** | **List[float]** | benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_probabilistic_post_request import PortfolioAnalysisSharpeRatioProbabilisticPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioProbabilisticPostRequest from a JSON string
portfolio_analysis_sharpe_ratio_probabilistic_post_request_instance = PortfolioAnalysisSharpeRatioProbabilisticPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioProbabilisticPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_probabilistic_post_request_dict = portfolio_analysis_sharpe_ratio_probabilistic_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioProbabilisticPostRequest from a dict
portfolio_analysis_sharpe_ratio_probabilistic_post_request_from_dict = PortfolioAnalysisSharpeRatioProbabilisticPostRequest.from_dict(portfolio_analysis_sharpe_ratio_probabilistic_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


