# AssetsReturnsSimulationMonteCarloGaussianPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_average_return** | **float** | The arithmetic average return of the asset, corresponding to the mean of the Gaussian distribution | 
**asset_volatility** | **float** | The volatility of the asset returns, corresponding to the standard deviation of the Gaussian distribution | 
**simulations** | **int** | The number of simulations to perform | [optional] [default to 1]
**simulations_length** | **int** | The number of time period(s) to simulate per simulation | [optional] [default to 1]

## Example

```python
from openapi_client.models.assets_returns_simulation_monte_carlo_gaussian_post_request import AssetsReturnsSimulationMonteCarloGaussianPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsSimulationMonteCarloGaussianPostRequest from a JSON string
assets_returns_simulation_monte_carlo_gaussian_post_request_instance = AssetsReturnsSimulationMonteCarloGaussianPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsSimulationMonteCarloGaussianPostRequest.to_json())

# convert the object into a dict
assets_returns_simulation_monte_carlo_gaussian_post_request_dict = assets_returns_simulation_monte_carlo_gaussian_post_request_instance.to_dict()
# create an instance of AssetsReturnsSimulationMonteCarloGaussianPostRequest from a dict
assets_returns_simulation_monte_carlo_gaussian_post_request_from_dict = AssetsReturnsSimulationMonteCarloGaussianPostRequest.from_dict(assets_returns_simulation_monte_carlo_gaussian_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


