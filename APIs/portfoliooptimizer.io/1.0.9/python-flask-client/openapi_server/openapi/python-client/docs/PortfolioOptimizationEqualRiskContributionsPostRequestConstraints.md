# PortfolioOptimizationEqualRiskContributionsPostRequestConstraints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_assets_weights** | **List[float]** | maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage | [optional] 
**minimum_assets_weights** | **List[float]** | minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage | [optional] 

## Example

```python
from openapi_client.models.portfolio_optimization_equal_risk_contributions_post_request_constraints import PortfolioOptimizationEqualRiskContributionsPostRequestConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationEqualRiskContributionsPostRequestConstraints from a JSON string
portfolio_optimization_equal_risk_contributions_post_request_constraints_instance = PortfolioOptimizationEqualRiskContributionsPostRequestConstraints.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationEqualRiskContributionsPostRequestConstraints.to_json())

# convert the object into a dict
portfolio_optimization_equal_risk_contributions_post_request_constraints_dict = portfolio_optimization_equal_risk_contributions_post_request_constraints_instance.to_dict()
# create an instance of PortfolioOptimizationEqualRiskContributionsPostRequestConstraints from a dict
portfolio_optimization_equal_risk_contributions_post_request_constraints_from_dict = PortfolioOptimizationEqualRiskContributionsPostRequestConstraints.from_dict(portfolio_optimization_equal_risk_contributions_post_request_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


