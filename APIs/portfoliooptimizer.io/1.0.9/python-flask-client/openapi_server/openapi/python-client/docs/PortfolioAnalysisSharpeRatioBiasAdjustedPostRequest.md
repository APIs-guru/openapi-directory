# PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolios** | [**List[PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner]**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post_request import PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest from a JSON string
portfolio_analysis_sharpe_ratio_bias_adjusted_post_request_instance = PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_bias_adjusted_post_request_dict = portfolio_analysis_sharpe_ratio_bias_adjusted_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest from a dict
portfolio_analysis_sharpe_ratio_bias_adjusted_post_request_from_dict = PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest.from_dict(portfolio_analysis_sharpe_ratio_bias_adjusted_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


