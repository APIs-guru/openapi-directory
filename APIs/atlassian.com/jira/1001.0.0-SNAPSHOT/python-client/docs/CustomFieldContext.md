# CustomFieldContext

The details of a custom field context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the context. | 
**id** | **str** | The ID of the context. | 
**is_any_issue_type** | **bool** | Whether the context apply to all issue types. | 
**is_global_context** | **bool** | Whether the context is global. | 
**name** | **str** | The name of the context. | 

## Example

```python
from openapi_client.models.custom_field_context import CustomFieldContext

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContext from a JSON string
custom_field_context_instance = CustomFieldContext.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContext.to_json())

# convert the object into a dict
custom_field_context_dict = custom_field_context_instance.to_dict()
# create an instance of CustomFieldContext from a dict
custom_field_context_from_dict = CustomFieldContext.from_dict(custom_field_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


