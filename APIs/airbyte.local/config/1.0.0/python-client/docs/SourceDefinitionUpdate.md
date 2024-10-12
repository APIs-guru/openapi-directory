# SourceDefinitionUpdate

Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docker_image_tag** | **str** |  | 
**resource_requirements** | [**ActorDefinitionResourceRequirements**](ActorDefinitionResourceRequirements.md) |  | [optional] 
**source_definition_id** | **str** |  | 

## Example

```python
from openapi_client.models.source_definition_update import SourceDefinitionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of SourceDefinitionUpdate from a JSON string
source_definition_update_instance = SourceDefinitionUpdate.from_json(json)
# print the JSON string representation of the object
print(SourceDefinitionUpdate.to_json())

# convert the object into a dict
source_definition_update_dict = source_definition_update_instance.to_dict()
# create an instance of SourceDefinitionUpdate from a dict
source_definition_update_from_dict = SourceDefinitionUpdate.from_dict(source_definition_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


