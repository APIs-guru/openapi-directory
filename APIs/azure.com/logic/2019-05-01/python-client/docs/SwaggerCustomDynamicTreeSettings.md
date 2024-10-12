# SwaggerCustomDynamicTreeSettings

The swagger custom dynamic tree settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_select_leaf_nodes** | **bool** | Indicates whether leaf nodes can be selected. | [optional] 
**can_select_parent_nodes** | **bool** | Indicates whether parent nodes can be selected. | [optional] 

## Example

```python
from openapi_client.models.swagger_custom_dynamic_tree_settings import SwaggerCustomDynamicTreeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SwaggerCustomDynamicTreeSettings from a JSON string
swagger_custom_dynamic_tree_settings_instance = SwaggerCustomDynamicTreeSettings.from_json(json)
# print the JSON string representation of the object
print(SwaggerCustomDynamicTreeSettings.to_json())

# convert the object into a dict
swagger_custom_dynamic_tree_settings_dict = swagger_custom_dynamic_tree_settings_instance.to_dict()
# create an instance of SwaggerCustomDynamicTreeSettings from a dict
swagger_custom_dynamic_tree_settings_from_dict = SwaggerCustomDynamicTreeSettings.from_dict(swagger_custom_dynamic_tree_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


