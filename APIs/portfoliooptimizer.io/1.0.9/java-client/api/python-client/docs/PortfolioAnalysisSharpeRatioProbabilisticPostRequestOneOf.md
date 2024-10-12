# PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_sharpe_ratio** | **float** | The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values | 
**portfolios** | [**List[PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner]**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of import PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf from a JSON string
portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of_instance = PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of_dict = portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf from a dict
portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of_from_dict = PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf.from_dict(portfolio_analysis_sharpe_ratio_probabilistic_post_request_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


