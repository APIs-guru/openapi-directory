# PortfolioAnalysisContributionsRiskPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assets_groups** | **List[List[int]]** |  | [optional] 
**portfolios** | [**List[PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner]**](PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_contributions_risk_post_request import PortfolioAnalysisContributionsRiskPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisContributionsRiskPostRequest from a JSON string
portfolio_analysis_contributions_risk_post_request_instance = PortfolioAnalysisContributionsRiskPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisContributionsRiskPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_contributions_risk_post_request_dict = portfolio_analysis_contributions_risk_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisContributionsRiskPostRequest from a dict
portfolio_analysis_contributions_risk_post_request_from_dict = PortfolioAnalysisContributionsRiskPostRequest.from_dict(portfolio_analysis_contributions_risk_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


