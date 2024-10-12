# BuildBetaDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BuildBetaDetail**](BuildBetaDetail.md) |  | 
**included** | [**List[Build]**](Build.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.build_beta_detail_response import BuildBetaDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBetaDetailResponse from a JSON string
build_beta_detail_response_instance = BuildBetaDetailResponse.from_json(json)
# print the JSON string representation of the object
print(BuildBetaDetailResponse.to_json())

# convert the object into a dict
build_beta_detail_response_dict = build_beta_detail_response_instance.to_dict()
# create an instance of BuildBetaDetailResponse from a dict
build_beta_detail_response_from_dict = BuildBetaDetailResponse.from_dict(build_beta_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


