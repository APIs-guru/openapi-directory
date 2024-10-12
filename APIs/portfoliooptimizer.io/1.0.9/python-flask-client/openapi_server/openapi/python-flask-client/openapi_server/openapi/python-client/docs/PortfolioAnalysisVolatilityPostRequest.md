# PortfolioAnalysisVolatilityPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**portfolios** | [**List[PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner]**](PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_volatility_post_request import PortfolioAnalysisVolatilityPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisVolatilityPostRequest from a JSON string
portfolio_analysis_volatility_post_request_instance = PortfolioAnalysisVolatilityPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisVolatilityPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_volatility_post_request_dict = portfolio_analysis_volatility_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisVolatilityPostRequest from a dict
portfolio_analysis_volatility_post_request_from_dict = PortfolioAnalysisVolatilityPostRequest.from_dict(portfolio_analysis_volatility_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


