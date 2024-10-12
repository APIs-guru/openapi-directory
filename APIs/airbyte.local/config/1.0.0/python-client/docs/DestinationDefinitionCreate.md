# DestinationDefinitionCreate


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
from openapi_client.models.destination_definition_create import DestinationDefinitionCreate

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationDefinitionCreate from a JSON string
destination_definition_create_instance = DestinationDefinitionCreate.from_json(json)
# print the JSON string representation of the object
print(DestinationDefinitionCreate.to_json())

# convert the object into a dict
destination_definition_create_dict = destination_definition_create_instance.to_dict()
# create an instance of DestinationDefinitionCreate from a dict
destination_definition_create_from_dict = DestinationDefinitionCreate.from_dict(destination_definition_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


