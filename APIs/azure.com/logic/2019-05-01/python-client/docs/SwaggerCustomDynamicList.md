# SwaggerCustomDynamicList

The swagger custom dynamic list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in_operation** | **str** | The built in operation. | [optional] 
**item_title_path** | **str** | The path to an item property which defines the display name of the item. | [optional] 
**item_value_path** | **str** | The path to a property which defines the value which should be used. | [optional] 
**items_path** | **str** | The path to a response property (relative to the response object, not the response body) which contains an array of dynamic value items. | [optional] 
**operation_id** | **str** | The operation id to fetch dynamic schema. | [optional] 
**parameters** | [**Dict[str, SwaggerCustomDynamicProperties]**](SwaggerCustomDynamicProperties.md) | The parameters. | [optional] 

## Example

```python
from openapi_client.models.swagger_custom_dynamic_list import SwaggerCustomDynamicList

# TODO update the JSON string below
json = "{}"
# create an instance of SwaggerCustomDynamicList from a JSON string
swagger_custom_dynamic_list_instance = SwaggerCustomDynamicList.from_json(json)
# print the JSON string representation of the object
print(SwaggerCustomDynamicList.to_json())

# convert the object into a dict
swagger_custom_dynamic_list_dict = swagger_custom_dynamic_list_instance.to_dict()
# create an instance of SwaggerCustomDynamicList from a dict
swagger_custom_dynamic_list_from_dict = SwaggerCustomDynamicList.from_dict(swagger_custom_dynamic_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


