# VersionDefinitionExtendedPathsCircuitBreakersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**return_to_service_after** | **float** |  | [optional] 
**samples** | **float** |  | [optional] 
**threshold_percent** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.version_definition_extended_paths_circuit_breakers_inner import VersionDefinitionExtendedPathsCircuitBreakersInner

# TODO update the JSON string below
json = "{}"
# create an instance of VersionDefinitionExtendedPathsCircuitBreakersInner from a JSON string
version_definition_extended_paths_circuit_breakers_inner_instance = VersionDefinitionExtendedPathsCircuitBreakersInner.from_json(json)
# print the JSON string representation of the object
print(VersionDefinitionExtendedPathsCircuitBreakersInner.to_json())

# convert the object into a dict
version_definition_extended_paths_circuit_breakers_inner_dict = version_definition_extended_paths_circuit_breakers_inner_instance.to_dict()
# create an instance of VersionDefinitionExtendedPathsCircuitBreakersInner from a dict
version_definition_extended_paths_circuit_breakers_inner_from_dict = VersionDefinitionExtendedPathsCircuitBreakersInner.from_dict(version_definition_extended_paths_circuit_breakers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


