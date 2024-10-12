# AssetsReturnsPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsReturnsPost200ResponseAssetsInner]**](AssetsReturnsPost200ResponseAssetsInner.md) |  | 

## Example

```python
from openapi_client.models.assets_returns_post200_response import AssetsReturnsPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsPost200Response from a JSON string
assets_returns_post200_response_instance = AssetsReturnsPost200Response.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsPost200Response.to_json())

# convert the object into a dict
assets_returns_post200_response_dict = assets_returns_post200_response_instance.to_dict()
# create an instance of AssetsReturnsPost200Response from a dict
assets_returns_post200_response_from_dict = AssetsReturnsPost200Response.from_dict(assets_returns_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


