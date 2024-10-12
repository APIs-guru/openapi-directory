# AssetsReturnsSimulationMonteCarloCornishFisherPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_average_return_parameter** | **float** | The mean parameter of the Cornish-Fisher distribution, corresponding to the arithmetic average return of the asset | 
**asset_kurtosis_parameter** | **float** | The (excess) kurtosis parameter of the Cornish-Fisher distribution, corresponding approximately to the (excess) kurtosis of the asset returns | 
**asset_skewness_parameter** | **float** | The skewness parameter of the Cornish-Fisher distribution, corresponding approximately to the skewness of the asset returns | 
**asset_volatility_parameter** | **float** | The volatility parameter of the Cornish-Fisher distribution, corresponding approximately to the volatility of the asset returns | 
**simulations** | **int** | The number of simulations to perform | [optional] [default to 1]
**simulations_length** | **int** | The number of time period(s) to simulate per simulation | [optional] [default to 1]

## Example

```python
from openapi_client.models.assets_returns_simulation_monte_carlo_cornish_fisher_post_request import AssetsReturnsSimulationMonteCarloCornishFisherPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsSimulationMonteCarloCornishFisherPostRequest from a JSON string
assets_returns_simulation_monte_carlo_cornish_fisher_post_request_instance = AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.to_json())

# convert the object into a dict
assets_returns_simulation_monte_carlo_cornish_fisher_post_request_dict = assets_returns_simulation_monte_carlo_cornish_fisher_post_request_instance.to_dict()
# create an instance of AssetsReturnsSimulationMonteCarloCornishFisherPostRequest from a dict
assets_returns_simulation_monte_carlo_cornish_fisher_post_request_from_dict = AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.from_dict(assets_returns_simulation_monte_carlo_cornish_fisher_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


