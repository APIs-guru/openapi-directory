# VersionDefinitionExtendedPathsVirtualInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_source_type** | **str** |  | [optional] 
**function_source_uri** | **str** |  | [optional] 
**method** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**response_function_name** | **str** |  | [optional] 
**use_session** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.version_definition_extended_paths_virtual_inner import VersionDefinitionExtendedPathsVirtualInner

# TODO update the JSON string below
json = "{}"
# create an instance of VersionDefinitionExtendedPathsVirtualInner from a JSON string
version_definition_extended_paths_virtual_inner_instance = VersionDefinitionExtendedPathsVirtualInner.from_json(json)
# print the JSON string representation of the object
print(VersionDefinitionExtendedPathsVirtualInner.to_json())

# convert the object into a dict
version_definition_extended_paths_virtual_inner_dict = version_definition_extended_paths_virtual_inner_instance.to_dict()
# create an instance of VersionDefinitionExtendedPathsVirtualInner from a dict
version_definition_extended_paths_virtual_inner_from_dict = VersionDefinitionExtendedPathsVirtualInner.from_dict(version_definition_extended_paths_virtual_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


