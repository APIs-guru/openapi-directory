# CustomFieldContextDefaultValueProject

The default value for a project custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**project_id** | **str** | The ID of the default project. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_project import CustomFieldContextDefaultValueProject

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueProject from a JSON string
custom_field_context_default_value_project_instance = CustomFieldContextDefaultValueProject.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueProject.to_json())

# convert the object into a dict
custom_field_context_default_value_project_dict = custom_field_context_default_value_project_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueProject from a dict
custom_field_context_default_value_project_from_dict = CustomFieldContextDefaultValueProject.from_dict(custom_field_context_default_value_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


