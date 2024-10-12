# PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets_groups_return_contributions** | **List[float]** | assetsGroupsReturnContributions[k] is the return contribution of the group of assets k to the return of the portfolio | [optional] 
**assets_return_contributions** | **List[float]** | assetsReturnContributions[i] is the return contribution of the asset i to the return of the portfolio | 

## Example

```python
from openapi_client.models.portfolio_analysis_contributions_return_post200_response_portfolios_inner import PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner from a JSON string
portfolio_analysis_contributions_return_post200_response_portfolios_inner_instance = PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_contributions_return_post200_response_portfolios_inner_dict = portfolio_analysis_contributions_return_post200_response_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner from a dict
portfolio_analysis_contributions_return_post200_response_portfolios_inner_from_dict = PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner.from_dict(portfolio_analysis_contributions_return_post200_response_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


