# BuildResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**DiagnosticSignatureAttributes**](DiagnosticSignatureAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppStoreVersionRelationships**](AppStoreVersionRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.build_response_included_inner import BuildResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of BuildResponseIncludedInner from a JSON string
build_response_included_inner_instance = BuildResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(BuildResponseIncludedInner.to_json())

# convert the object into a dict
build_response_included_inner_dict = build_response_included_inner_instance.to_dict()
# create an instance of BuildResponseIncludedInner from a dict
build_response_included_inner_from_dict = BuildResponseIncludedInner.from_dict(build_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


