# SwaggerCustomDynamicTreeParameter

The swagger custom dynamic tree parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_reference** | **str** | The parameter reference. | [optional] 
**required** | **bool** | Indicates whether the parameter is required. | [optional] 
**selected_item_value_path** | **str** | Gets or sets a path to a property in the currently selected item to pass as a value to a parameter for the given operation. | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.swagger_custom_dynamic_tree_parameter import SwaggerCustomDynamicTreeParameter

# TODO update the JSON string below
json = "{}"
# create an instance of SwaggerCustomDynamicTreeParameter from a JSON string
swagger_custom_dynamic_tree_parameter_instance = SwaggerCustomDynamicTreeParameter.from_json(json)
# print the JSON string representation of the object
print(SwaggerCustomDynamicTreeParameter.to_json())

# convert the object into a dict
swagger_custom_dynamic_tree_parameter_dict = swagger_custom_dynamic_tree_parameter_instance.to_dict()
# create an instance of SwaggerCustomDynamicTreeParameter from a dict
swagger_custom_dynamic_tree_parameter_from_dict = SwaggerCustomDynamicTreeParameter.from_dict(swagger_custom_dynamic_tree_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


