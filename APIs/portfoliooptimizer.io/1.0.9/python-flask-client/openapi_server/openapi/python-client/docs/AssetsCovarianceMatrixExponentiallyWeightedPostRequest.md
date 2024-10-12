# AssetsCovarianceMatrixExponentiallyWeightedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsCorrelationMatrixPostRequestOneOfAssetsInner]**](AssetsCorrelationMatrixPostRequestOneOfAssetsInner.md) |  | 
**decay_factor** | **float** | The exponential decay factor | [optional] [default to 0.94]

## Example

```python
from openapi_client.models.assets_covariance_matrix_exponentially_weighted_post_request import AssetsCovarianceMatrixExponentiallyWeightedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCovarianceMatrixExponentiallyWeightedPostRequest from a JSON string
assets_covariance_matrix_exponentially_weighted_post_request_instance = AssetsCovarianceMatrixExponentiallyWeightedPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsCovarianceMatrixExponentiallyWeightedPostRequest.to_json())

# convert the object into a dict
assets_covariance_matrix_exponentially_weighted_post_request_dict = assets_covariance_matrix_exponentially_weighted_post_request_instance.to_dict()
# create an instance of AssetsCovarianceMatrixExponentiallyWeightedPostRequest from a dict
assets_covariance_matrix_exponentially_weighted_post_request_from_dict = AssetsCovarianceMatrixExponentiallyWeightedPostRequest.from_dict(assets_covariance_matrix_exponentially_weighted_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


