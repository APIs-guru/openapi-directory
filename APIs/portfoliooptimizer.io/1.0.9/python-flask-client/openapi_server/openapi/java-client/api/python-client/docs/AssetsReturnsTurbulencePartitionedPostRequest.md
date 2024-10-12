# AssetsReturnsTurbulencePartitionedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsCorrelationMatrixPostRequestOneOfAssetsInner]**](AssetsCorrelationMatrixPostRequestOneOfAssetsInner.md) |  | 
**turbulence_thresholds** | **List[float]** | The turbulence threshold(s), in percentage; in case several turbulence thresholds are provided, they must be provided in increasing order | 
**turbulence_thresholds_conversion_method** | **str** | The method to use to convert the turbulence threshold(s) into turbulence score(s) | [optional] [default to 'chisquareInverseDistribution']

## Example

```python
from openapi_client.models.assets_returns_turbulence_partitioned_post_request import AssetsReturnsTurbulencePartitionedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsTurbulencePartitionedPostRequest from a JSON string
assets_returns_turbulence_partitioned_post_request_instance = AssetsReturnsTurbulencePartitionedPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsTurbulencePartitionedPostRequest.to_json())

# convert the object into a dict
assets_returns_turbulence_partitioned_post_request_dict = assets_returns_turbulence_partitioned_post_request_instance.to_dict()
# create an instance of AssetsReturnsTurbulencePartitionedPostRequest from a dict
assets_returns_turbulence_partitioned_post_request_from_dict = AssetsReturnsTurbulencePartitionedPostRequest.from_dict(assets_returns_turbulence_partitioned_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


