# PortfolioAnalysisVolatilityPostRequestOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**portfolios** | [**List[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner]**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_volatility_post_request_one_of import PortfolioAnalysisVolatilityPostRequestOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisVolatilityPostRequestOneOf from a JSON string
portfolio_analysis_volatility_post_request_one_of_instance = PortfolioAnalysisVolatilityPostRequestOneOf.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisVolatilityPostRequestOneOf.to_json())

# convert the object into a dict
portfolio_analysis_volatility_post_request_one_of_dict = portfolio_analysis_volatility_post_request_one_of_instance.to_dict()
# create an instance of PortfolioAnalysisVolatilityPostRequestOneOf from a dict
portfolio_analysis_volatility_post_request_one_of_from_dict = PortfolioAnalysisVolatilityPostRequestOneOf.from_dict(portfolio_analysis_volatility_post_request_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


