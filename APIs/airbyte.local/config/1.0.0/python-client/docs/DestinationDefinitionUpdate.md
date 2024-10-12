# DestinationDefinitionUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_definition_id** | **str** |  | 
**docker_image_tag** | **str** |  | [optional] 
**resource_requirements** | [**ActorDefinitionResourceRequirements**](ActorDefinitionResourceRequirements.md) |  | [optional] 

## Example

```python
from openapi_client.models.destination_definition_update import DestinationDefinitionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationDefinitionUpdate from a JSON string
destination_definition_update_instance = DestinationDefinitionUpdate.from_json(json)
# print the JSON string representation of the object
print(DestinationDefinitionUpdate.to_json())

# convert the object into a dict
destination_definition_update_dict = destination_definition_update_instance.to_dict()
# create an instance of DestinationDefinitionUpdate from a dict
destination_definition_update_from_dict = DestinationDefinitionUpdate.from_dict(destination_definition_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


