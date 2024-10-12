# CustomFieldContextProjectMapping

Details of a context to project association.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | [readonly] 
**is_global_context** | **bool** | Whether context is global. | [optional] [readonly] 
**project_id** | **str** | The ID of the project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_field_context_project_mapping import CustomFieldContextProjectMapping

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextProjectMapping from a JSON string
custom_field_context_project_mapping_instance = CustomFieldContextProjectMapping.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextProjectMapping.to_json())

# convert the object into a dict
custom_field_context_project_mapping_dict = custom_field_context_project_mapping_instance.to_dict()
# create an instance of CustomFieldContextProjectMapping from a dict
custom_field_context_project_mapping_from_dict = CustomFieldContextProjectMapping.from_dict(custom_field_context_project_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


