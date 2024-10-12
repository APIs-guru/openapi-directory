# BuildBetaDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BuildBetaDetailAttributes**](BuildBetaDetailAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**BetaAppReviewSubmissionRelationships**](BetaAppReviewSubmissionRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.build_beta_detail import BuildBetaDetail

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBetaDetail from a JSON string
build_beta_detail_instance = BuildBetaDetail.from_json(json)
# print the JSON string representation of the object
print(BuildBetaDetail.to_json())

# convert the object into a dict
build_beta_detail_dict = build_beta_detail_instance.to_dict()
# create an instance of BuildBetaDetail from a dict
build_beta_detail_from_dict = BuildBetaDetail.from_dict(build_beta_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


