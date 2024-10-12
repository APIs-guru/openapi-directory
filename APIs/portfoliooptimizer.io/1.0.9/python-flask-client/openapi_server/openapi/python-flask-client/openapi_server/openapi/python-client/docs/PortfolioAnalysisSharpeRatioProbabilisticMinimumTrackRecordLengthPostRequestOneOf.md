# PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_sharpe_ratio** | **float** | The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values | 
**confidence_level** | **float** | The confidence level of the minimum track record length, in percentage | [optional] [default to 0.95]
**portfolios** | [**List[PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner]**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf from a JSON string
portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of_instance = PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of_dict = portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf from a dict
portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of_from_dict = PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf.from_dict(portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


