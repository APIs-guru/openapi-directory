# VersionDefinitionExtendedPaths


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**black_list** | [**List[EndPointMeta]**](EndPointMeta.md) |  | [optional] 
**cache** | **List[str]** |  | [optional] 
**circuit_breakers** | [**List[VersionDefinitionExtendedPathsCircuitBreakersInner]**](VersionDefinitionExtendedPathsCircuitBreakersInner.md) |  | [optional] 
**hard_timeouts** | [**List[VersionDefinitionExtendedPathsHardTimeoutsInner]**](VersionDefinitionExtendedPathsHardTimeoutsInner.md) |  | [optional] 
**ignored** | [**List[EndPointMeta]**](EndPointMeta.md) |  | [optional] 
**size_limits** | [**List[VersionDefinitionExtendedPathsSizeLimitsInner]**](VersionDefinitionExtendedPathsSizeLimitsInner.md) |  | [optional] 
**transform** | [**List[TemplateMeta]**](TemplateMeta.md) |  | [optional] 
**transform_headers** | [**List[HeaderInjectionMeta]**](HeaderInjectionMeta.md) |  | [optional] 
**transform_response** | [**List[TemplateMeta]**](TemplateMeta.md) |  | [optional] 
**transform_response_headers** | [**List[HeaderInjectionMeta]**](HeaderInjectionMeta.md) |  | [optional] 
**url_rewrites** | [**List[VersionDefinitionExtendedPathsUrlRewritesInner]**](VersionDefinitionExtendedPathsUrlRewritesInner.md) |  | [optional] 
**virtual** | [**List[VersionDefinitionExtendedPathsVirtualInner]**](VersionDefinitionExtendedPathsVirtualInner.md) |  | [optional] 
**white_list** | [**List[EndPointMeta]**](EndPointMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.version_definition_extended_paths import VersionDefinitionExtendedPaths

# TODO update the JSON string below
json = "{}"
# create an instance of VersionDefinitionExtendedPaths from a JSON string
version_definition_extended_paths_instance = VersionDefinitionExtendedPaths.from_json(json)
# print the JSON string representation of the object
print(VersionDefinitionExtendedPaths.to_json())

# convert the object into a dict
version_definition_extended_paths_dict = version_definition_extended_paths_instance.to_dict()
# create an instance of VersionDefinitionExtendedPaths from a dict
version_definition_extended_paths_from_dict = VersionDefinitionExtendedPaths.from_dict(version_definition_extended_paths_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


