# PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_interval_type** | **str** | The type of confidence interval to build | [optional] [default to 'twoSided']
**confidence_level** | **float** | The confidence level of the confidence interval to build, in percentage | [optional] [default to 0.95]
**portfolios** | [**List[PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner]**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_confidence_interval_post_request import PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest from a JSON string
portfolio_analysis_sharpe_ratio_confidence_interval_post_request_instance = PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_confidence_interval_post_request_dict = portfolio_analysis_sharpe_ratio_confidence_interval_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest from a dict
portfolio_analysis_sharpe_ratio_confidence_interval_post_request_from_dict = PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest.from_dict(portfolio_analysis_sharpe_ratio_confidence_interval_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


