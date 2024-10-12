# AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_turbulence_partitioned_returns** | [**List[AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner]**](AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner.md) | assetTurbulencePartitionedReturns[k] corresponds to all the asset returns whose turbulence index is lower than or equal to the turbulence score associated with the turbulence threshold turbulenceThresholds[k]; the length of the array assetTurbulencePartitionedReturns is equal to the length of the array turbulenceThresholds plus 1 | 

## Example

```python
from openapi_client.models.assets_returns_turbulence_partitioned_post200_response_assets_inner import AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner from a JSON string
assets_returns_turbulence_partitioned_post200_response_assets_inner_instance = AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner.to_json())

# convert the object into a dict
assets_returns_turbulence_partitioned_post200_response_assets_inner_dict = assets_returns_turbulence_partitioned_post200_response_assets_inner_instance.to_dict()
# create an instance of AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner from a dict
assets_returns_turbulence_partitioned_post200_response_assets_inner_from_dict = AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner.from_dict(assets_returns_turbulence_partitioned_post200_response_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


