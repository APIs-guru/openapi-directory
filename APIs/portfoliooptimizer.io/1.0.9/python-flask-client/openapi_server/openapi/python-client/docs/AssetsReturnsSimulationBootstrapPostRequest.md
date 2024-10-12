# AssetsReturnsSimulationBootstrapPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsReturnsSimulationBootstrapPostRequestAssetsInner]**](AssetsReturnsSimulationBootstrapPostRequestAssetsInner.md) |  | 
**bootstrap_average_block_length** | **float** | The average length of the blocks to use in case the bootstrap method is &#39;stationaryBlock&#39;, in time periods; if not provided, defaults to the inverse of 3.15 * the common length of the assetReturns arrays^1/3 | [optional] 
**bootstrap_block_length** | **int** | The length of the blocks to use in case the bootstrap method is &#39;circularBlock&#39;, in time periods; if not provided, defaults to [3.15 * the common length of the assetReturns arrays^1/3] | [optional] 
**bootstrap_method** | **str** | The bootstrap method to use | [optional] [default to 'stationaryBlock']
**simulations** | **int** | The number of simulations to perform | [optional] [default to 1]
**simulations_length** | **int** | The number of time period(s) to simulate per simulation; if not provided, defaults to the common length of the assetReturns arrays | [optional] 

## Example

```python
from openapi_client.models.assets_returns_simulation_bootstrap_post_request import AssetsReturnsSimulationBootstrapPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsSimulationBootstrapPostRequest from a JSON string
assets_returns_simulation_bootstrap_post_request_instance = AssetsReturnsSimulationBootstrapPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsSimulationBootstrapPostRequest.to_json())

# convert the object into a dict
assets_returns_simulation_bootstrap_post_request_dict = assets_returns_simulation_bootstrap_post_request_instance.to_dict()
# create an instance of AssetsReturnsSimulationBootstrapPostRequest from a dict
assets_returns_simulation_bootstrap_post_request_from_dict = AssetsReturnsSimulationBootstrapPostRequest.from_dict(assets_returns_simulation_bootstrap_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


