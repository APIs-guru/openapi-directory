# PortfolioAnalysisEffectiveNumberOfBetsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**factors_extraction_method** | **str** | The method used to extract the uncorrelated risk factors from the asset covariance matrix | [optional] [default to 'exactMinimumLinearTorsion']
**portfolios** | [**List[PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner]**](PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_effective_number_of_bets_post_request import PortfolioAnalysisEffectiveNumberOfBetsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisEffectiveNumberOfBetsPostRequest from a JSON string
portfolio_analysis_effective_number_of_bets_post_request_instance = PortfolioAnalysisEffectiveNumberOfBetsPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisEffectiveNumberOfBetsPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_effective_number_of_bets_post_request_dict = portfolio_analysis_effective_number_of_bets_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisEffectiveNumberOfBetsPostRequest from a dict
portfolio_analysis_effective_number_of_bets_post_request_from_dict = PortfolioAnalysisEffectiveNumberOfBetsPostRequest.from_dict(portfolio_analysis_effective_number_of_bets_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


