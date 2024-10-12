# PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets_weights** | **List[float]** | assetsWeights[i] is the weight of the asset i in the portfolio, in percentage | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner from a JSON string
portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner_instance = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner_dict = portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner from a dict
portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner_from_dict = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.from_dict(portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


