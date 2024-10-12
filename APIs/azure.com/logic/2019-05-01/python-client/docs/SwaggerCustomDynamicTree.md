# SwaggerCustomDynamicTree

The swagger custom dynamic tree.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browse** | [**SwaggerCustomDynamicTreeCommand**](SwaggerCustomDynamicTreeCommand.md) |  | [optional] 
**open** | [**SwaggerCustomDynamicTreeCommand**](SwaggerCustomDynamicTreeCommand.md) |  | [optional] 
**settings** | [**SwaggerCustomDynamicTreeSettings**](SwaggerCustomDynamicTreeSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.swagger_custom_dynamic_tree import SwaggerCustomDynamicTree

# TODO update the JSON string below
json = "{}"
# create an instance of SwaggerCustomDynamicTree from a JSON string
swagger_custom_dynamic_tree_instance = SwaggerCustomDynamicTree.from_json(json)
# print the JSON string representation of the object
print(SwaggerCustomDynamicTree.to_json())

# convert the object into a dict
swagger_custom_dynamic_tree_dict = swagger_custom_dynamic_tree_instance.to_dict()
# create an instance of SwaggerCustomDynamicTree from a dict
swagger_custom_dynamic_tree_from_dict = SwaggerCustomDynamicTree.from_dict(swagger_custom_dynamic_tree_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


