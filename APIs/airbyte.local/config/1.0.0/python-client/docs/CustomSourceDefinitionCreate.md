# CustomSourceDefinitionCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_definition** | [**SourceDefinitionCreate**](SourceDefinitionCreate.md) |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.custom_source_definition_create import CustomSourceDefinitionCreate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomSourceDefinitionCreate from a JSON string
custom_source_definition_create_instance = CustomSourceDefinitionCreate.from_json(json)
# print the JSON string representation of the object
print(CustomSourceDefinitionCreate.to_json())

# convert the object into a dict
custom_source_definition_create_dict = custom_source_definition_create_instance.to_dict()
# create an instance of CustomSourceDefinitionCreate from a dict
custom_source_definition_create_from_dict = CustomSourceDefinitionCreate.from_dict(custom_source_definition_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


