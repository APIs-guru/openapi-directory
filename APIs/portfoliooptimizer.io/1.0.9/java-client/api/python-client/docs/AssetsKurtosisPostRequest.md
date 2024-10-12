# AssetsKurtosisPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsKurtosisPostRequestAssetsInner]**](AssetsKurtosisPostRequestAssetsInner.md) |  | 

## Example

```python
from openapi_client.models.assets_kurtosis_post_request import AssetsKurtosisPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsKurtosisPostRequest from a JSON string
assets_kurtosis_post_request_instance = AssetsKurtosisPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsKurtosisPostRequest.to_json())

# convert the object into a dict
assets_kurtosis_post_request_dict = assets_kurtosis_post_request_instance.to_dict()
# create an instance of AssetsKurtosisPostRequest from a dict
assets_kurtosis_post_request_from_dict = AssetsKurtosisPostRequest.from_dict(assets_kurtosis_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


