# AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_returns** | **List[float]** | assetReturns[t] is the return of the asset at a time t; the array assetReturns is possibly empty in case no asset returns have a turbulence index lower than or equal to the turbulence score associated with the turbulence threshold turbulenceThresholds[k] | 

## Example

```python
from openapi_client.models.assets_returns_turbulence_partitioned_post200_response_assets_inner_asset_turbulence_partitioned_returns_inner import AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner from a JSON string
assets_returns_turbulence_partitioned_post200_response_assets_inner_asset_turbulence_partitioned_returns_inner_instance = AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner.to_json())

# convert the object into a dict
assets_returns_turbulence_partitioned_post200_response_assets_inner_asset_turbulence_partitioned_returns_inner_dict = assets_returns_turbulence_partitioned_post200_response_assets_inner_asset_turbulence_partitioned_returns_inner_instance.to_dict()
# create an instance of AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner from a dict
assets_returns_turbulence_partitioned_post200_response_assets_inner_asset_turbulence_partitioned_returns_inner_from_dict = AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner.from_dict(assets_returns_turbulence_partitioned_post200_response_assets_inner_asset_turbulence_partitioned_returns_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


