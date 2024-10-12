# AssetsCovarianceMatrixPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 

## Example

```python
from openapi_client.models.assets_covariance_matrix_post200_response import AssetsCovarianceMatrixPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsCovarianceMatrixPost200Response from a JSON string
assets_covariance_matrix_post200_response_instance = AssetsCovarianceMatrixPost200Response.from_json(json)
# print the JSON string representation of the object
print(AssetsCovarianceMatrixPost200Response.to_json())

# convert the object into a dict
assets_covariance_matrix_post200_response_dict = assets_covariance_matrix_post200_response_instance.to_dict()
# create an instance of AssetsCovarianceMatrixPost200Response from a dict
assets_covariance_matrix_post200_response_from_dict = AssetsCovarianceMatrixPost200Response.from_dict(assets_covariance_matrix_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


