# AssetsVariancePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsVariancePost200ResponseAssetsInner]**](AssetsVariancePost200ResponseAssetsInner.md) |  | 

## Example

```python
from openapi_client.models.assets_variance_post200_response import AssetsVariancePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsVariancePost200Response from a JSON string
assets_variance_post200_response_instance = AssetsVariancePost200Response.from_json(json)
# print the JSON string representation of the object
print(AssetsVariancePost200Response.to_json())

# convert the object into a dict
assets_variance_post200_response_dict = assets_variance_post200_response_instance.to_dict()
# create an instance of AssetsVariancePost200Response from a dict
assets_variance_post200_response_from_dict = AssetsVariancePost200Response.from_dict(assets_variance_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


