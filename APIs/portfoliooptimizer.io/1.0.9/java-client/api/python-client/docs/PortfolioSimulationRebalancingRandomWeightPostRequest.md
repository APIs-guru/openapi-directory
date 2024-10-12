# PortfolioSimulationRebalancingRandomWeightPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsReturnsPostRequestAssetsInner]**](AssetsReturnsPostRequestAssetsInner.md) |  | 
**portfolios** | **int** | The number of portfolios to simulate | [optional] [default to 25]

## Example

```python
from openapi_client.models.portfolio_simulation_rebalancing_random_weight_post_request import PortfolioSimulationRebalancingRandomWeightPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioSimulationRebalancingRandomWeightPostRequest from a JSON string
portfolio_simulation_rebalancing_random_weight_post_request_instance = PortfolioSimulationRebalancingRandomWeightPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioSimulationRebalancingRandomWeightPostRequest.to_json())

# convert the object into a dict
portfolio_simulation_rebalancing_random_weight_post_request_dict = portfolio_simulation_rebalancing_random_weight_post_request_instance.to_dict()
# create an instance of PortfolioSimulationRebalancingRandomWeightPostRequest from a dict
portfolio_simulation_rebalancing_random_weight_post_request_from_dict = PortfolioSimulationRebalancingRandomWeightPostRequest.from_dict(portfolio_simulation_rebalancing_random_weight_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


