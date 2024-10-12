# SwaggerCustomDynamicTreeCommand

The swagger tree command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_full_title_path** | **str** | The path to an item property which defines the display name of the item. | [optional] 
**item_is_parent** | **str** | The path to an item property which defines the display name of the item. | [optional] 
**item_title_path** | **str** | The path to an item property which defines the display name of the item. | [optional] 
**item_value_path** | **str** | The path to an item property which defines the display name of the item. | [optional] 
**items_path** | **str** | The path to an item property which defines the display name of the item. | [optional] 
**operation_id** | **str** | The path to an item property which defines the display name of the item. | [optional] 
**parameters** | [**Dict[str, SwaggerCustomDynamicTreeParameter]**](SwaggerCustomDynamicTreeParameter.md) |  | [optional] 
**selectable_filter** | **str** | The path to an item property which defines the display name of the item. | [optional] 

## Example

```python
from openapi_client.models.swagger_custom_dynamic_tree_command import SwaggerCustomDynamicTreeCommand

# TODO update the JSON string below
json = "{}"
# create an instance of SwaggerCustomDynamicTreeCommand from a JSON string
swagger_custom_dynamic_tree_command_instance = SwaggerCustomDynamicTreeCommand.from_json(json)
# print the JSON string representation of the object
print(SwaggerCustomDynamicTreeCommand.to_json())

# convert the object into a dict
swagger_custom_dynamic_tree_command_dict = swagger_custom_dynamic_tree_command_instance.to_dict()
# create an instance of SwaggerCustomDynamicTreeCommand from a dict
swagger_custom_dynamic_tree_command_from_dict = SwaggerCustomDynamicTreeCommand.from_dict(swagger_custom_dynamic_tree_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


