# JsonInputSchemaMappingProperties

This can be used to map properties of a source schema (or default values, for certain supported properties) to properties of the EventGridEvent schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_version** | [**JsonFieldWithDefault**](JsonFieldWithDefault.md) |  | [optional] 
**event_time** | [**JsonField**](JsonField.md) |  | [optional] 
**event_type** | [**JsonFieldWithDefault**](JsonFieldWithDefault.md) |  | [optional] 
**id** | [**JsonField**](JsonField.md) |  | [optional] 
**subject** | [**JsonFieldWithDefault**](JsonFieldWithDefault.md) |  | [optional] 
**topic** | [**JsonField**](JsonField.md) |  | [optional] 

## Example

```python
from openapi_client.models.json_input_schema_mapping_properties import JsonInputSchemaMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JsonInputSchemaMappingProperties from a JSON string
json_input_schema_mapping_properties_instance = JsonInputSchemaMappingProperties.from_json(json)
# print the JSON string representation of the object
print(JsonInputSchemaMappingProperties.to_json())

# convert the object into a dict
json_input_schema_mapping_properties_dict = json_input_schema_mapping_properties_instance.to_dict()
# create an instance of JsonInputSchemaMappingProperties from a dict
json_input_schema_mapping_properties_from_dict = JsonInputSchemaMappingProperties.from_dict(json_input_schema_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


