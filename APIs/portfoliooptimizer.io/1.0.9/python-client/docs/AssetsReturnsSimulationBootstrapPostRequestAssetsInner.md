# AssetsReturnsSimulationBootstrapPostRequestAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_returns** | **List[float]** | assetReturns[t] is the return of the asset over the time period t; all the assetReturns arrays must have the same length | 

## Example

```python
from openapi_client.models.assets_returns_simulation_bootstrap_post_request_assets_inner import AssetsReturnsSimulationBootstrapPostRequestAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsSimulationBootstrapPostRequestAssetsInner from a JSON string
assets_returns_simulation_bootstrap_post_request_assets_inner_instance = AssetsReturnsSimulationBootstrapPostRequestAssetsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsSimulationBootstrapPostRequestAssetsInner.to_json())

# convert the object into a dict
assets_returns_simulation_bootstrap_post_request_assets_inner_dict = assets_returns_simulation_bootstrap_post_request_assets_inner_instance.to_dict()
# create an instance of AssetsReturnsSimulationBootstrapPostRequestAssetsInner from a dict
assets_returns_simulation_bootstrap_post_request_assets_inner_from_dict = AssetsReturnsSimulationBootstrapPostRequestAssetsInner.from_dict(assets_returns_simulation_bootstrap_post_request_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


