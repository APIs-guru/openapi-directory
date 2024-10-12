# AssetsReturnsAveragePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsReturnsAveragePostRequestAssetsInner]**](AssetsReturnsAveragePostRequestAssetsInner.md) |  | 

## Example

```python
from openapi_client.models.assets_returns_average_post_request import AssetsReturnsAveragePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsReturnsAveragePostRequest from a JSON string
assets_returns_average_post_request_instance = AssetsReturnsAveragePostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsReturnsAveragePostRequest.to_json())

# convert the object into a dict
assets_returns_average_post_request_dict = assets_returns_average_post_request_instance.to_dict()
# create an instance of AssetsReturnsAveragePostRequest from a dict
assets_returns_average_post_request_from_dict = AssetsReturnsAveragePostRequest.from_dict(assets_returns_average_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


