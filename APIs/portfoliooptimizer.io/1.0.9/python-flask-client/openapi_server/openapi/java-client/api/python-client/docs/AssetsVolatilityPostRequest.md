# AssetsVolatilityPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsVolatilityPostRequestOneOfAssetsInner]**](AssetsVolatilityPostRequestOneOfAssetsInner.md) |  | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 

## Example

```python
from openapi_client.models.assets_volatility_post_request import AssetsVolatilityPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsVolatilityPostRequest from a JSON string
assets_volatility_post_request_instance = AssetsVolatilityPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsVolatilityPostRequest.to_json())

# convert the object into a dict
assets_volatility_post_request_dict = assets_volatility_post_request_instance.to_dict()
# create an instance of AssetsVolatilityPostRequest from a dict
assets_volatility_post_request_from_dict = AssetsVolatilityPostRequest.from_dict(assets_volatility_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


