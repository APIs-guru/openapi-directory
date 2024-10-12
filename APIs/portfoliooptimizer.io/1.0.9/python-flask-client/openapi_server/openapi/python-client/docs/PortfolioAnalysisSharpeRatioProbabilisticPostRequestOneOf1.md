# PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_values** | **List[float]** | benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays | 
**portfolios** | [**List[PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner]**](PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of1 import PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1 from a JSON string
portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of1_instance = PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of1_dict = portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of1_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1 from a dict
portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of1_from_dict = PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1.from_dict(portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


