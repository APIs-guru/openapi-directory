# PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_values** | **List[float]** | benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays | [optional] 
**confidence_level** | **float** | The confidence level of the minimum track record length, in percentage | [optional] [default to 0.95]
**portfolios** | [**List[PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner]**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of1 import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1 from a JSON string
portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of1_instance = PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of1_dict = portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of1_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1 from a dict
portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of1_from_dict = PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1.from_dict(portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


