# BuildDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_type** | **str** |  | [optional] 
**external_parameters** | **Dict[str, object]** |  | [optional] 
**internal_parameters** | **Dict[str, object]** |  | [optional] 
**resolved_dependencies** | [**List[ResourceDescriptor]**](ResourceDescriptor.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_definition import BuildDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of BuildDefinition from a JSON string
build_definition_instance = BuildDefinition.from_json(json)
# print the JSON string representation of the object
print(BuildDefinition.to_json())

# convert the object into a dict
build_definition_dict = build_definition_instance.to_dict()
# create an instance of BuildDefinition from a dict
build_definition_from_dict = BuildDefinition.from_dict(build_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


