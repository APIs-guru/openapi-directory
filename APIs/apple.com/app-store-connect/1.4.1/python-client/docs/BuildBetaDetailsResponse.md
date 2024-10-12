# BuildBetaDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BuildBetaDetail]**](BuildBetaDetail.md) |  | 
**included** | [**List[Build]**](Build.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_beta_details_response import BuildBetaDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBetaDetailsResponse from a JSON string
build_beta_details_response_instance = BuildBetaDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(BuildBetaDetailsResponse.to_json())

# convert the object into a dict
build_beta_details_response_dict = build_beta_details_response_instance.to_dict()
# create an instance of BuildBetaDetailsResponse from a dict
build_beta_details_response_from_dict = BuildBetaDetailsResponse.from_dict(build_beta_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


