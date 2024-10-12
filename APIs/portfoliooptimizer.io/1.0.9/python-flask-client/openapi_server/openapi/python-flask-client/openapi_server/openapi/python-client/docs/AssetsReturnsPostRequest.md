# AssetsReturnsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsReturnsPostRequestAssetsInner]**](AssetsReturnsPostRequestAssetsInner.md) |  | 

## Example

```python
from openapi_client.models.assets_returns_post_request import AssetsReturnsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsPostRequest from a JSON string
assets_returns_post_request_instance = AssetsReturnsPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsPostRequest.to_json())

# convert the object into a dict
assets_returns_post_request_dict = assets_returns_post_request_instance.to_dict()
# create an instance of AssetsReturnsPostRequest from a dict
assets_returns_post_request_from_dict = AssetsReturnsPostRequest.from_dict(assets_returns_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


