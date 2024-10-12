# AssetsVolatilityPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsVolatilityPost200ResponseAssetsInner]**](AssetsVolatilityPost200ResponseAssetsInner.md) |  | 

## Example

```python
from openapi_client.models.assets_volatility_post200_response import AssetsVolatilityPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsVolatilityPost200Response from a JSON string
assets_volatility_post200_response_instance = AssetsVolatilityPost200Response.from_json(json)
# print the JSON string representation of the object
print(AssetsVolatilityPost200Response.to_json())

# convert the object into a dict
assets_volatility_post200_response_dict = assets_volatility_post200_response_instance.to_dict()
# create an instance of AssetsVolatilityPost200Response from a dict
assets_volatility_post200_response_from_dict = AssetsVolatilityPost200Response.from_dict(assets_volatility_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


