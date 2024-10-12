# PortfolioSimulationRebalancingDriftWeightPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsReturnsPostRequestAssetsInner]**](AssetsReturnsPostRequestAssetsInner.md) |  | 
**portfolios** | [**List[PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner]**](PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_simulation_rebalancing_drift_weight_post_request import PortfolioSimulationRebalancingDriftWeightPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioSimulationRebalancingDriftWeightPostRequest from a JSON string
portfolio_simulation_rebalancing_drift_weight_post_request_instance = PortfolioSimulationRebalancingDriftWeightPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioSimulationRebalancingDriftWeightPostRequest.to_json())

# convert the object into a dict
portfolio_simulation_rebalancing_drift_weight_post_request_dict = portfolio_simulation_rebalancing_drift_weight_post_request_instance.to_dict()
# create an instance of PortfolioSimulationRebalancingDriftWeightPostRequest from a dict
portfolio_simulation_rebalancing_drift_weight_post_request_from_dict = PortfolioSimulationRebalancingDriftWeightPostRequest.from_dict(portfolio_simulation_rebalancing_drift_weight_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


