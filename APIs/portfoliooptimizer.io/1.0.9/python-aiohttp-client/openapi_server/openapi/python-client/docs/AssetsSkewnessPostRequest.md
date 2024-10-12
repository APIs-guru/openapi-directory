# AssetsSkewnessPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsSkewnessPostRequestAssetsInner]**](AssetsSkewnessPostRequestAssetsInner.md) |  | 

## Example

```python
from openapi_client.models.assets_skewness_post_request import AssetsSkewnessPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsSkewnessPostRequest from a JSON string
assets_skewness_post_request_instance = AssetsSkewnessPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsSkewnessPostRequest.to_json())

# convert the object into a dict
assets_skewness_post_request_dict = assets_skewness_post_request_instance.to_dict()
# create an instance of AssetsSkewnessPostRequest from a dict
assets_skewness_post_request_from_dict = AssetsSkewnessPostRequest.from_dict(assets_skewness_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


