# CreateCustomFieldContext

The details of a created custom field context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the context. | [optional] 
**id** | **str** | The ID of the context. | [optional] [readonly] 
**issue_type_ids** | **List[str]** | The list of issue types IDs for the context. If the list is empty, the context refers to all issue types. | [optional] 
**name** | **str** | The name of the context. | 
**project_ids** | **List[str]** | The list of project IDs associated with the context. If the list is empty, the context is global. | [optional] 

## Example

```python
from openapi_client.models.create_custom_field_context import CreateCustomFieldContext

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomFieldContext from a JSON string
create_custom_field_context_instance = CreateCustomFieldContext.from_json(json)
# print the JSON string representation of the object
print(CreateCustomFieldContext.to_json())

# convert the object into a dict
create_custom_field_context_dict = create_custom_field_context_instance.to_dict()
# create an instance of CreateCustomFieldContext from a dict
create_custom_field_context_from_dict = CreateCustomFieldContext.from_dict(create_custom_field_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


