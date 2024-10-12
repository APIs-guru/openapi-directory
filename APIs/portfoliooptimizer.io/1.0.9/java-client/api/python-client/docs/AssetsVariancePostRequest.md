# AssetsVariancePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsVariancePostRequestOneOf1AssetsInner]**](AssetsVariancePostRequestOneOf1AssetsInner.md) |  | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 

## Example

```python
from openapi_client.models.assets_variance_post_request import AssetsVariancePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsVariancePostRequest from a JSON string
assets_variance_post_request_instance = AssetsVariancePostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsVariancePostRequest.to_json())

# convert the object into a dict
assets_variance_post_request_dict = assets_variance_post_request_instance.to_dict()
# create an instance of AssetsVariancePostRequest from a dict
assets_variance_post_request_from_dict = AssetsVariancePostRequest.from_dict(assets_variance_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


