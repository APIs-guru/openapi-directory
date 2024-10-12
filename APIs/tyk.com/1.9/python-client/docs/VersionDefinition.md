# VersionDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires** | **str** |  | [optional] 
**extended_paths** | [**VersionDefinitionExtendedPaths**](VersionDefinitionExtendedPaths.md) |  | [optional] 
**global_headers** | **object** |  | [optional] 
**global_headers_remove** | **List[str]** |  | [optional] 
**global_size_limit** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**override_target** | **str** |  | [optional] 
**use_extended_paths** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.version_definition import VersionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of VersionDefinition from a JSON string
version_definition_instance = VersionDefinition.from_json(json)
# print the JSON string representation of the object
print(VersionDefinition.to_json())

# convert the object into a dict
version_definition_dict = version_definition_instance.to_dict()
# create an instance of VersionDefinition from a dict
version_definition_from_dict = VersionDefinition.from_dict(version_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


