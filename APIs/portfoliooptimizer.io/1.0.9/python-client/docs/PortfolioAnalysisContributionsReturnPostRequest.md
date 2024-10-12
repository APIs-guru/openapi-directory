# PortfolioAnalysisContributionsReturnPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_groups** | **List[List[int]]** |  | [optional] 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**portfolios** | [**List[PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner]**](PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_contributions_return_post_request import PortfolioAnalysisContributionsReturnPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisContributionsReturnPostRequest from a JSON string
portfolio_analysis_contributions_return_post_request_instance = PortfolioAnalysisContributionsReturnPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisContributionsReturnPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_contributions_return_post_request_dict = portfolio_analysis_contributions_return_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisContributionsReturnPostRequest from a dict
portfolio_analysis_contributions_return_post_request_from_dict = PortfolioAnalysisContributionsReturnPostRequest.from_dict(portfolio_analysis_contributions_return_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


