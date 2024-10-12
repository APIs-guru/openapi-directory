# PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets_groups** | **List[List[int]]** |  | [optional] 
**assets_groups_matrix** | **List[List[float]]** | assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups | [optional] 
**delta_return** | **float** | The relative tolerance over the maximum Sharpe ratio portfolio return | [optional] [default to 0.1]
**delta_volatility** | **float** | The relative tolerance over the maximum Sharpe ratio portfolio volatility | [optional] [default to 0.1]
**maximum_assets_groups_weights** | **List[float]** | maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided | [optional] 
**maximum_assets_weights** | **List[float]** | maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage | [optional] 
**maximum_portfolio_exposure** | **float** | The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure | [optional] [default to 1]
**minimum_assets_weights** | **List[float]** | minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage | [optional] 
**minimum_portfolio_exposure** | **float** | The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure | [optional] [default to 1]

## Example

```python
from openapi_client.models.portfolio_optimization_maximum_sharpe_ratio_diversified_post_request_constraints import PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints from a JSON string
portfolio_optimization_maximum_sharpe_ratio_diversified_post_request_constraints_instance = PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints.to_json())

# convert the object into a dict
portfolio_optimization_maximum_sharpe_ratio_diversified_post_request_constraints_dict = portfolio_optimization_maximum_sharpe_ratio_diversified_post_request_constraints_instance.to_dict()
# create an instance of PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints from a dict
portfolio_optimization_maximum_sharpe_ratio_diversified_post_request_constraints_from_dict = PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints.from_dict(portfolio_optimization_maximum_sharpe_ratio_diversified_post_request_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


