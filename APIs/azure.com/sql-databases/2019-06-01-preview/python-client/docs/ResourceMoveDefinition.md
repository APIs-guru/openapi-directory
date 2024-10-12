# ResourceMoveDefinition

Contains the information necessary to perform a resource move (rename).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The target ID for the resource | 

## Example

```python
from openapi_client.models.resource_move_definition import ResourceMoveDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMoveDefinition from a JSON string
resource_move_definition_instance = ResourceMoveDefinition.from_json(json)
# print the JSON string representation of the object
print(ResourceMoveDefinition.to_json())

# convert the object into a dict
resource_move_definition_dict = resource_move_definition_instance.to_dict()
# create an instance of ResourceMoveDefinition from a dict
resource_move_definition_from_dict = ResourceMoveDefinition.from_dict(resource_move_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


