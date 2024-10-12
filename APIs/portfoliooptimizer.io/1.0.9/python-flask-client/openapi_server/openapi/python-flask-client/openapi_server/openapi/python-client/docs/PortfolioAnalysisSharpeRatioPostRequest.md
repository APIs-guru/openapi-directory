# PortfolioAnalysisSharpeRatioPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**portfolios** | [**List[PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner]**](PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request import PortfolioAnalysisSharpeRatioPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioPostRequest from a JSON string
portfolio_analysis_sharpe_ratio_post_request_instance = PortfolioAnalysisSharpeRatioPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_post_request_dict = portfolio_analysis_sharpe_ratio_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioPostRequest from a dict
portfolio_analysis_sharpe_ratio_post_request_from_dict = PortfolioAnalysisSharpeRatioPostRequest.from_dict(portfolio_analysis_sharpe_ratio_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


