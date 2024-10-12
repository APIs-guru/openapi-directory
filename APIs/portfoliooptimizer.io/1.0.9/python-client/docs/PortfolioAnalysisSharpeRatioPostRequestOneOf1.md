# PortfolioAnalysisSharpeRatioPostRequestOneOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolios** | [**List[PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner]**](PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of1 import PortfolioAnalysisSharpeRatioPostRequestOneOf1

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioPostRequestOneOf1 from a JSON string
portfolio_analysis_sharpe_ratio_post_request_one_of1_instance = PortfolioAnalysisSharpeRatioPostRequestOneOf1.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioPostRequestOneOf1.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_post_request_one_of1_dict = portfolio_analysis_sharpe_ratio_post_request_one_of1_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioPostRequestOneOf1 from a dict
portfolio_analysis_sharpe_ratio_post_request_one_of1_from_dict = PortfolioAnalysisSharpeRatioPostRequestOneOf1.from_dict(portfolio_analysis_sharpe_ratio_post_request_one_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


