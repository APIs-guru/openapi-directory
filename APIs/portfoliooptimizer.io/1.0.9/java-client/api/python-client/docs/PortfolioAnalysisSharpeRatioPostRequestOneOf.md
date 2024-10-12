# PortfolioAnalysisSharpeRatioPostRequestOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**portfolios** | [**List[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner]**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate | 

## Example

```python
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of import PortfolioAnalysisSharpeRatioPostRequestOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisSharpeRatioPostRequestOneOf from a JSON string
portfolio_analysis_sharpe_ratio_post_request_one_of_instance = PortfolioAnalysisSharpeRatioPostRequestOneOf.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisSharpeRatioPostRequestOneOf.to_json())

# convert the object into a dict
portfolio_analysis_sharpe_ratio_post_request_one_of_dict = portfolio_analysis_sharpe_ratio_post_request_one_of_instance.to_dict()
# create an instance of PortfolioAnalysisSharpeRatioPostRequestOneOf from a dict
portfolio_analysis_sharpe_ratio_post_request_one_of_from_dict = PortfolioAnalysisSharpeRatioPostRequestOneOf.from_dict(portfolio_analysis_sharpe_ratio_post_request_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


