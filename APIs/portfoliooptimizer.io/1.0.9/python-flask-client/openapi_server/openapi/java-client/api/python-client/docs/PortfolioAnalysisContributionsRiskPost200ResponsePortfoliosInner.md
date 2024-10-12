# PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets_groups_risk_contributions** | **List[float]** | assetsGroupsRiskContributions[k] is the risk contribution of the group of assets k to the risk of the portfolio | [optional] 
**assets_risk_contributions** | **List[float]** | assetsRiskContributions[i] is the risk contribution of the asset i to the risk of the portfolio | 

## Example

```python
from openapi_client.models.portfolio_analysis_contributions_risk_post200_response_portfolios_inner import PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner from a JSON string
portfolio_analysis_contributions_risk_post200_response_portfolios_inner_instance = PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.to_json())

# convert the object into a dict
portfolio_analysis_contributions_risk_post200_response_portfolios_inner_dict = portfolio_analysis_contributions_risk_post200_response_portfolios_inner_instance.to_dict()
# create an instance of PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner from a dict
portfolio_analysis_contributions_risk_post200_response_portfolios_inner_from_dict = PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.from_dict(portfolio_analysis_contributions_risk_post200_response_portfolios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


