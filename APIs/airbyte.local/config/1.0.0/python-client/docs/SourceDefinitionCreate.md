# SourceDefinitionCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docker_image_tag** | **str** |  | 
**docker_repository** | **str** |  | 
**documentation_url** | **str** |  | 
**icon** | **str** |  | [optional] 
**name** | **str** |  | 
**resource_requirements** | [**ActorDefinitionResourceRequirements**](ActorDefinitionResourceRequirements.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_definition_create import SourceDefinitionCreate

# TODO update the JSON string below
json = "{}"
# create an instance of SourceDefinitionCreate from a JSON string
source_definition_create_instance = SourceDefinitionCreate.from_json(json)
# print the JSON string representation of the object
print(SourceDefinitionCreate.to_json())

# convert the object into a dict
source_definition_create_dict = source_definition_create_instance.to_dict()
# create an instance of SourceDefinitionCreate from a dict
source_definition_create_from_dict = SourceDefinitionCreate.from_dict(source_definition_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


